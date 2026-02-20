'use client';

import { useEffect, useState } from 'react';
import { TrophyIcon, FlameIcon, SparklesIcon } from '@/components/icons/Icons';
import { Badge } from '@/components/ui';
import { getAvatarEmoji, getColorClass } from '@/lib/avatar-constants';

function LeaderboardAvatar({ avatar, avatarColor, size = "sm" }: { avatar: string | null; avatarColor: string | null; size?: "sm" | "md" }) {
  const emoji = getAvatarEmoji(avatar);
  const colorClass = getColorClass(avatarColor);
  const sizeClass = size === "sm" ? "w-8 h-8 text-base" : "w-10 h-10 text-lg";

  return (
    <div className={`${sizeClass} ${colorClass} rounded-full flex items-center justify-center shadow-sm flex-shrink-0`}>
      <span className="select-none">{emoji}</span>
    </div>
  );
}

interface LeaderboardEntry {
  id: string;
  name: string;
  weeklyPoints: number;
  currentStreak: number;
  rank: number;
  rankChange: number | null;
  lastWeekRank: number | null;
  avatar: string | null;
  avatarColor: string | null;
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRank, setUserRank] = useState<number | null>(null);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch(`/api/gamification/leaderboard`);
      const data = await response.json();
      setLeaderboard(data.leaderboard || []);

      // Get user's stats to find their rank
      const statsResponse = await fetch('/api/gamification/stats');
      const statsData = await statsResponse.json();
      setUserRank(statsData.stats?.rank || null);
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return { bg: 'rgba(255, 215, 0, 0.1)', border: '#FFD700', text: '#B8860B' }; // Gold
    if (rank === 2) return { bg: 'rgba(192, 192, 192, 0.1)', border: '#C0C0C0', text: '#808080' }; // Silver
    if (rank === 3) return { bg: 'rgba(205, 127, 50, 0.1)', border: '#CD7F32', text: '#8B4513' }; // Bronze
    return { bg: 'var(--color-white)', border: 'var(--color-border)', text: 'var(--color-text)' };
  };

  const getRankIcon = (rank: number, hasScores: boolean = true) => {
    // When everyone is at 0, display a tie at #1 for clarity
    if (!hasScores) return '#1';
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  const getRankChangeIndicator = (rankChange: number | null) => {
    if (!rankChange) return null;
    if (rankChange > 0) return { icon: '↑', color: 'var(--color-secondary)', text: `+${rankChange}` };
    if (rankChange < 0) return { icon: '↓', color: 'var(--color-error)', text: `${rankChange}` };
    return { icon: '−', color: 'var(--color-text-muted)', text: '0' };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center px-6">
          <TrophyIcon className="w-16 h-16 mx-auto mb-4 animate-bounce text-primary" />
          <p className="text-base sm:text-lg text-text-muted">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  const hasNonZeroScores = leaderboard.some((entry) => entry.weeklyPoints > 0);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-lg border-b-2 z-[200] bg-white/90 border-border shadow-sm">
        <div className="container mx-auto py-4 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <TrophyIcon className="w-8 h-8 text-accent" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-display text-text">
                Weekly Leaderboard
              </h1>
              <p className="text-sm text-secondary">
                Top performers this week
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 sm:px-6 space-y-6 pb-28 md:pb-10">
        {/* User's Rank Card - Only show if user has points and appears in leaderboard */}
        {userRank && leaderboard.some((entry) => entry.rank === userRank) && (
          <div className="border-2 rounded-2xl p-5 sm:p-6 bg-white border-primary shadow-md">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div>
                <p className="text-sm font-semibold mb-1 text-secondary">
                  Your Rank
                </p>
                <p className="text-4xl font-bold font-display text-primary">
                  {getRankIcon(userRank, hasNonZeroScores)}
                </p>
              </div>
              {leaderboard.find((entry) => entry.rank === userRank)?.rankChange && (
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <p className="text-sm text-text-muted">
                    From last week
                  </p>
                  {(() => {
                    const userEntry = leaderboard.find((entry) => entry.rank === userRank);
                    const change = getRankChangeIndicator(userEntry?.rankChange || null);
                    return change ? (
                      <p className="text-2xl font-bold" style={{ color: change.color }}>
                        {change.icon} {change.text}
                      </p>
                    ) : null;
                  })()}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Top 3 Podium (hide on mobile, hide if everyone is at 0) */}
        {leaderboard.some(entry => entry.rank <= 3) && hasNonZeroScores && (() => {
          // Get all students in top 3 ranks (handles ties)
          const rank1Students = leaderboard.filter(entry => entry.rank === 1);
          const rank2Students = leaderboard.filter(entry => entry.rank === 2);
          const rank3Students = leaderboard.filter(entry => entry.rank === 3);
          const topStudents = [...rank1Students, ...rank2Students, ...rank3Students];

          return (
            <div className="hidden md:flex flex-wrap justify-center gap-4 mb-8">
              {/* Display students in rank order (1st, then all 2nd, then all 3rd) */}
              {topStudents.map((student) => (
                <div key={student.id} className="flex-shrink-0">
                  <div
                    className="border-2 rounded-2xl p-4 text-center min-w-[180px]"
                    style={{
                      backgroundColor: getRankColor(student.rank).bg,
                      borderColor: getRankColor(student.rank).border,
                      boxShadow: student.rank === 1 ? '0 8px 24px rgba(255, 215, 0, 0.3)' : undefined
                    }}
                  >
                    <div className={student.rank === 1 ? "text-5xl mb-2" : "text-4xl mb-2"}>
                      {getRankIcon(student.rank)}
                    </div>
                    {student.avatar && (
                      <div className="flex justify-center mb-2">
                        <LeaderboardAvatar avatar={student.avatar} avatarColor={student.avatarColor} size="md" />
                      </div>
                    )}
                    <p className="font-bold text-lg truncate text-text">
                      {student.name}
                    </p>
                    {student.rank === 1 && (
                      <p className="text-sm mt-1 text-secondary">
                        Champion
                      </p>
                    )}
                    <div className="mt-2">
                      <Badge variant={student.rank === 1 ? "warning" : "secondary"}>
                        {student.weeklyPoints} pts
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

        {/* Full Leaderboard */}
        {leaderboard.length > 0 ? (
          <div className="border rounded-2xl overflow-hidden bg-white border-border shadow-md">
            <div className="border-b-2 p-4 bg-bg-light border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold font-display text-text">
                  All Rankings
                </h2>
              </div>
            </div>
            <div className="divide-y divide-border">
              {leaderboard.map((entry) => {
              const rankColors = getRankColor(entry.rank);
              const rankChange = getRankChangeIndicator(entry.rankChange);
              const isUserRow = entry.rank === userRank;

              return (
                <div
                  key={entry.id}
                  className={`p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 transition-all ${isUserRow ? 'border-l-4' : ''}`}
                  style={{
                    backgroundColor: isUserRow ? 'color-mix(in srgb, var(--color-primary) 5%, transparent)' : 'transparent',
                    borderLeftColor: isUserRow ? 'var(--color-primary)' : 'transparent',
                  }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 text-center flex-shrink-0">
                      <span className="text-xl font-bold" style={{ color: rankColors.text }}>
                        {getRankIcon(entry.rank, hasNonZeroScores)}
                      </span>
                    </div>
                    {entry.avatar ? (
                      <LeaderboardAvatar avatar={entry.avatar} avatarColor={entry.avatarColor} size="sm" />
                    ) : (
                      <div className="w-8 h-8 bg-bg-gray rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-text-muted text-sm font-semibold">
                          {entry.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate text-text">
                        {entry.name}
                        {isUserRow && (
                          <span className="ml-2 text-xs font-bold text-primary">
                            (You)
                          </span>
                        )}
                      </p>
                      <div className="flex items-center flex-wrap gap-3 mt-1">
                        <div className="flex items-center gap-1 text-sm text-text-muted">
                          <SparklesIcon size={16} />
                          <span>{entry.weeklyPoints} pts</span>
                        </div>
                        {entry.currentStreak > 0 && (
                          <div className="flex items-center gap-1 text-sm text-accent">
                            <FlameIcon size={16} />
                            <span>{entry.currentStreak} day streak</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {rankChange && (
                    <div className="hidden md:block text-left sm:text-right">
                      <div className="flex items-center gap-1 text-lg font-bold sm:justify-end" style={{ color: rankChange.color }}>
                        <span>{rankChange.icon}</span>
                        <span className="text-sm">{Math.abs(entry.rankChange || 0)}</span>
                      </div>
                      <p className="text-xs text-text-light">
                        vs last week
                      </p>
                    </div>
                  )}
                </div>
              );
              })}
            </div>
          </div>
        ) : (
          <div className="border rounded-2xl overflow-hidden text-center py-12 bg-white border-border shadow-md">
            <TrophyIcon className="w-16 h-16 mx-auto mb-4 text-border" />
            <p className="text-lg font-medium mb-2 text-text-muted">
              No rankings yet
            </p>
            <p className="text-sm text-text-light">
              Students will appear here once they earn points. Complete activities to climb the ranks!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
