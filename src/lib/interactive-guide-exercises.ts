import type { Exercise, InteractiveGuideSection } from "@/types/activity";

function sectionKey(section: InteractiveGuideSection, sectionIndex: number): string {
    const base = (section.id || section.title || `section-${sectionIndex}`)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    return base || `section-${sectionIndex}`;
}

function buildFallbackExercise(section: InteractiveGuideSection, sectionIndex: number): Exercise {
    const key = sectionKey(section, sectionIndex);
    const sectionTitle = section.title?.trim() || `Section ${sectionIndex + 1}`;

    return {
        id: `auto-practice-${key}`,
        title: "Quick Practice",
        instructions: `Write one example sentence that uses the idea from "${sectionTitle}".`,
        answerExpectation: "full-sentence",
        items: [
            {
                type: "text",
                label: "Your example sentence",
                placeholder: "Write your own sentence here...",
                acceptAnyAttempt: true,
            },
        ],
    };
}

export function ensureSectionHasExercises(
    section: InteractiveGuideSection,
    sectionIndex: number
): InteractiveGuideSection {
    if (section.exercises && section.exercises.length > 0) {
        return section;
    }

    return {
        ...section,
        exercises: [buildFallbackExercise(section, sectionIndex)],
    };
}
