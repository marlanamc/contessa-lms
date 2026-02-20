import type { InteractiveGuideContent } from "@/types/activity";

/**
 * MARTINI BASICS - DELUXE EDITION
 *
 * Premium restaurant training guide combining sophisticated design with visual richness
 * Design Philosophy: Elegant visual storytelling with brand colors, refined typography, premium graphics
 * Target: Fine dining establishments seeking enterprise-grade content with visual appeal
 *
 * Structure: Bite-sized sections with professional graphics, exercises after each
 */

export const martiniBasicsDeluxe: InteractiveGuideContent = {
    type: "interactive-guide",
    tableOfContents: true,
    sections: [
        {
            id: "intro",
            stepNumber: 1,
            title: "What is a Martini?",
            icon: "🍸",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <div style="background: linear-gradient(135deg, #8b1c31 0%, #1b4d3e 15%, transparent 100%); padding: 2rem; margin: -1rem -1rem 2rem -1rem; border-radius: 12px;">
                        <p style="font-size: 1.5rem; font-weight: 300; margin: 0; color: white; line-height: 1.6;">
                            The martini is not a cocktail. It is a discipline.
                        </p>
                    </div>

                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        In fine dining, the martini represents your establishment's commitment to precision and craftsmanship. Every bartender must understand that a martini is the customer's moment of clarity—a perfectly balanced drink served at exactly the right temperature.
                    </p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem;">
                        <div style="border-left: 4px solid #8b1c31; padding-left: 1.5rem;">
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.2em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Core Elements</p>
                            <p style="margin: 0; color: #5e6b7d; font-size: 0.95rem;">Precision • Temperature • Technique</p>
                        </div>
                        <div style="border-left: 4px solid #1b4d3e; padding-left: 1.5rem;">
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.2em; color: #1b4d3e; margin: 0 0 0.75rem 0; font-weight: 600;">Your Responsibility</p>
                            <p style="margin: 0; color: #5e6b7d; font-size: 0.95rem;">Master • Perfect • Deliver</p>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "A gin martini with a twist—crystal clear, perfectly chilled",
                "A vodka martini with olives—clean, elegant, precisely measured",
                "A classic dry martini—minimal vermouth, maximum clarity"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Understanding the Martini",
                    instructions: "What best describes a martini?",
                    items: [
                        {
                            type: "radio",
                            label: "A martini is primarily:",
                            options: [
                                { value: "a", label: "A flavored cocktail with multiple ingredients" },
                                { value: "b", label: "A discipline requiring precision and technique" },
                                { value: "c", label: "A casual drink for happy hour" },
                                { value: "d", label: "A vodka-based mixed drink" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "spirit",
            stepNumber: 2,
            title: "The Spirit Base",
            icon: "🥃",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Your spirit choice defines the martini. This is not a minor detail—it fundamentally changes the drink's character and what your customer experiences.
                    </p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 12px; border: 2px solid #e2ddd5; border-top: 4px solid #8b1c31;">
                            <div style="text-align: center; margin-bottom: 1.5rem;">
                                <span style="font-size: 3rem;">🌿</span>
                            </div>
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 700;">Gin</p>
                            <p style="font-size: 0.95rem; margin: 0 0 1rem 0; color: #1a202c; line-height: 1.7; font-weight: 500;">
                                Botanical, aromatic, complex. London Dry style with juniper-forward character. Choose one house gin and master it.
                            </p>
                            <p style="font-size: 0.85rem; margin: 0; color: #8b1c31; font-weight: 600;">Tanqueray, Bombay Sapphire, Hendricks</p>
                        </div>

                        <div style="background: white; padding: 2rem; border-radius: 12px; border: 2px solid #e2ddd5; border-top: 4px solid #1b4d3e;">
                            <div style="text-align: center; margin-bottom: 1.5rem;">
                                <span style="font-size: 3rem;">💧</span>
                            </div>
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1b4d3e; margin: 0 0 1rem 0; font-weight: 700;">Vodka</p>
                            <p style="font-size: 0.95rem; margin: 0 0 1rem 0; color: #1a202c; line-height: 1.7; font-weight: 500;">
                                Clean, neutral, smooth. Premium quality matters—cheap vodka will ruin the drink. Let premium be your baseline.
                            </p>
                            <p style="font-size: 0.85rem; margin: 0; color: #1b4d3e; font-weight: 600;">Ketel One, Grey Goose, Belvedere</p>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Gin: Botanical and aromatic—showcases craftsmanship",
                "Vodka: Clean and neutral—emphasizes the vermouth",
                "Choose premium quality in both cases"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Spirit Knowledge",
                    instructions: "Select the correct description.",
                    items: [
                        {
                            type: "radio",
                            label: "Which spirit brings botanical complexity to a martini?",
                            options: [
                                { value: "a", label: "Gin—botanical and aromatic" },
                                { value: "b", label: "Vodka—clean and neutral" },
                                { value: "c", label: "Both equally" },
                                { value: "d", label: "Neither has botanical characteristics" }
                            ],
                            expectedAnswer: "a"
                        }
                    ]
                }
            ]
        },
        {
            id: "vermouth",
            stepNumber: 3,
            title: "Dry Vermouth: The Essential Element",
            icon: "🌿",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Dry vermouth is not optional—it is essential. It provides the herbaceous complexity and dryness that defines a martini. Poor vermouth creates a poor martini.
                    </p>

                    <div style="background: linear-gradient(135deg, #d4af37 0%, rgba(212, 175, 55, 0.08) 100%); padding: 2rem; border-radius: 8px; border-left: 4px solid #d4af37; margin-bottom: 2rem;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 600;">Storage & Freshness</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                            <div>
                                <p style="font-size: 0.85rem; color: #8b1c31; font-weight: 600; margin: 0 0 0.5rem 0;">Replace</p>
                                <p style="font-size: 1.25rem; font-weight: bold; margin: 0; color: #1a202c;">Every 2–3 Months</p>
                            </div>
                            <div>
                                <p style="font-size: 0.85rem; color: #8b1c31; font-weight: 600; margin: 0 0 0.5rem 0;">Store</p>
                                <p style="font-size: 1.25rem; font-weight: bold; margin: 0; color: #1a202c;">Refrigerator</p>
                            </div>
                        </div>
                        <p style="font-size: 0.9rem; margin: 1.5rem 0 0 0; color: #5e6b7d; border-top: 1px solid rgba(212, 175, 55, 0.3); padding-top: 1rem;">
                            Opened vermouth oxidizes rapidly. Perform smell test before service—off-odors mean replacement.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Replace opened vermouth every 2–3 months",
                "Store in refrigerator after opening",
                "Perform smell test before service—off-odors mean replacement"
            ],
            exercises: [
                {
                    title: "Vermouth Freshness",
                    instructions: "Choose the correct answer.",
                    items: [
                        {
                            type: "radio",
                            label: "How often should opened dry vermouth be replaced?",
                            options: [
                                { value: "a", label: "Every 6 months" },
                                { value: "b", label: "Every 2–3 months" },
                                { value: "c", label: "Every year" },
                                { value: "d", label: "Never, if properly sealed" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "ratio",
            stepNumber: 4,
            title: "The Ratio",
            icon: "⚖️",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        The martini follows a specific ratio. This is not negotiable—precision is what separates a martini from a cocktail.
                    </p>

                    <div style="background: white; border: 2px solid #e2ddd5; border-radius: 8px; overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #8b1c31 0%, #1b4d3e 100%); padding: 1rem; text-align: center;">
                            <p style="margin: 0; color: white; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Spirit to Vermouth Ratios</p>
                        </div>

                        <div style="padding: 1.5rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
                                <div style="text-align: center; padding: 1rem; background: #f9f7f4; border-radius: 6px;">
                                    <p style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: #8b1c31; margin: 0 0 0.5rem 0; font-weight: 600;">Classic</p>
                                    <p style="font-size: 1.75rem; font-weight: bold; margin: 0 0 0.25rem 0; color: #1a202c;">2.5:1</p>
                                    <p style="font-size: 0.8rem; color: #5e6b7d; margin: 0;">to 3:1</p>
                                </div>
                                <div style="text-align: center; padding: 1rem; background: #f9f7f4; border-radius: 6px;">
                                    <p style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: #1b4d3e; margin: 0 0 0.5rem 0; font-weight: 600;">Dry</p>
                                    <p style="font-size: 1.75rem; font-weight: bold; margin: 0 0 0.25rem 0; color: #1a202c;">5:1</p>
                                    <p style="font-size: 0.8rem; color: #5e6b7d; margin: 0;">Minimal vermouth</p>
                                </div>
                                <div style="text-align: center; padding: 1rem; background: #f9f7f4; border-radius: 6px;">
                                    <p style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: #d4af37; margin: 0 0 0.5rem 0; font-weight: 600;">Very Dry</p>
                                    <p style="font-size: 1.75rem; font-weight: bold; margin: 0 0 0.25rem 0; color: #1a202c;">10:1+</p>
                                    <p style="font-size: 0.8rem; color: #5e6b7d; margin: 0;">Nearly vermouth-free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Classic: 2.5:1 to 3:1 spirit to vermouth",
                "Dry: 5:1 spirit to vermouth",
                "Very Dry: 10:1 or higher"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Ratio Mastery",
                    instructions: "Select the correct ratio.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the classic martini ratio?",
                            options: [
                                { value: "a", label: "1:1 spirit to vermouth" },
                                { value: "b", label: "2.5:1 to 3:1 spirit to vermouth" },
                                { value: "c", label: "5:1 spirit to vermouth" },
                                { value: "d", label: "Equal parts of all ingredients" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "temperature",
            stepNumber: 5,
            title: "Temperature: The Critical Element",
            icon: "🧊",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Temperature is the difference between a memorable martini and a mediocre one. Every degree matters.
                    </p>

                    <div style="background: linear-gradient(135deg, #8b1c31 0%, #1b4d3e 100%); color: white; padding: 2rem; border-radius: 8px; text-align: center; margin-bottom: 2rem;">
                        <p style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 1rem 0; font-weight: 600; opacity: 0.9;">Target Range</p>
                        <p style="font-size: 3rem; font-weight: bold; margin: 0 0 0.5rem 0;">28–32°F</p>
                        <p style="font-size: 1rem; margin: 0;">Crystal cold, never frozen</p>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                        <div style="border-left: 4px solid #8b1c31; padding-left: 1.5rem;">
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Before Service</p>
                            <p style="margin: 0; color: #5e6b7d; font-size: 0.95rem; line-height: 1.6;">Chill glassware for 15+ minutes in freezer or ice-and-water bath.</p>
                        </div>
                        <div style="border-left: 4px solid #1b4d3e; padding-left: 1.5rem;">
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1b4d3e; margin: 0 0 0.75rem 0; font-weight: 600;">During Preparation</p>
                            <p style="margin: 0; color: #5e6b7d; font-size: 0.95rem; line-height: 1.6;">Stir for 30-45 seconds with fresh, clear ice to achieve proper chill.</p>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "28–32°F is the target serving temperature",
                "Chill glassware 15+ minutes before service",
                "Stir with ice for 30-45 seconds to achieve proper temperature"
            ],
            exercises: [
                {
                    title: "Temperature Knowledge",
                    instructions: "Select the correct answer.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the recommended serving temperature for a martini?",
                            options: [
                                { value: "a", label: "Room temperature (68-72°F)" },
                                { value: "b", label: "Cold (45-50°F)" },
                                { value: "c", label: "Very cold (28-32°F)" },
                                { value: "d", label: "Near-freezing (15-20°F)" }
                            ],
                            expectedAnswer: "c"
                        }
                    ]
                }
            ]
        },
        {
            id: "technique",
            stepNumber: 6,
            title: "The Technique: Stirring & Straining",
            icon: "🥄",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        The martini is stirred, never shaken. This is the classic method and the sign of a skilled bartender.
                    </p>

                    <div style="background: linear-gradient(135deg, #f4f1ea 0%, #e2ddd5 100%); padding: 2rem; border-radius: 8px; margin-bottom: 2rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                            <div>
                                <p style="font-size: 1.25rem; font-weight: bold; margin: 0 0 1rem 0; color: #8b1c31;">The Ice</p>
                                <p style="font-size: 0.95rem; line-height: 1.6; margin: 0; color: #5e6b7d;">Use large, clear ice cubes or ice spears. Small ice melts too quickly and over-dilutes. Fresh ice = better results.</p>
                            </div>
                            <div>
                                <p style="font-size: 1.25rem; font-weight: bold; margin: 0 0 1rem 0; color: #1b4d3e;">The Stir</p>
                                <p style="font-size: 0.95rem; line-height: 1.6; margin: 0; color: #5e6b7d;">Stir for 30-45 seconds with smooth, deliberate motions. This achieves proper temperature and slight dilution for smoothness.</p>
                            </div>
                        </div>
                    </div>

                    <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 600;">The Strain</p>
                    <p style="margin: 0; color: #5e6b7d; font-size: 0.95rem; line-height: 1.6;">
                        Use a julep or cocktail strainer to pour the mixture into your chilled glass. Ensure no ice enters the final drink. The strain should be smooth and confident.
                    </p>
                </div>
            `,
            examples: [
                "Use large ice cubes to minimize dilution",
                "Stir for 30-45 seconds with deliberate motions",
                "Strain cleanly with no ice particles in the finished drink"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Technique Mastery",
                    instructions: "Select the correct procedures.",
                    items: [
                        {
                            type: "select",
                            label: "How long should you stir a martini?",
                            options: [
                                "10-15 seconds",
                                "30-45 seconds",
                                "60+ seconds",
                                "Until the bartender feels ready"
                            ],
                            expectedAnswer: "30-45 seconds"
                        },
                        {
                            type: "radio",
                            label: "Why are large ice cubes preferred?",
                            options: [
                                { value: "a", label: "They look more impressive" },
                                { value: "b", label: "They chill efficiently without over-diluting" },
                                { value: "c", label: "They are easier to handle" },
                                { value: "d", label: "Small ice is unavailable" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "presentation",
            stepNumber: 7,
            title: "Presentation & Service Excellence",
            icon: "✨",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        The martini is a ritual from first glance to final sip. Your presentation elevates the entire experience.
                    </p>

                    <div style="background: linear-gradient(135deg, #1b4d3e 0%, rgba(27, 77, 62, 0.08) 100%); padding: 2rem; border-radius: 8px; border-left: 4px solid #1b4d3e; margin-bottom: 2rem;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1b4d3e; margin: 0 0 1.5rem 0; font-weight: 600;">The Garnish</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                            <div>
                                <p style="font-weight: 600; margin: 0 0 0.5rem 0; color: #1a202c; font-size: 0.95rem;">Lemon Twist</p>
                                <p style="font-size: 0.9rem; margin: 0; color: #5e6b7d;">Express oils over surface, then rim the glass</p>
                            </div>
                            <div>
                                <p style="font-weight: 600; margin: 0 0 0.5rem 0; color: #1a202c; font-size: 0.95rem;">Olives</p>
                                <p style="font-size: 0.9rem; margin: 0; color: #5e6b7d;">Spear 2-3 on a quality pick, ensure secure</p>
                            </div>
                        </div>
                    </div>

                    <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 600;">The Presentation</p>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid #e2ddd5; color: #5e6b7d; font-size: 0.95rem;">Hold by the stem, never the bowl—preserve the chill</li>
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid #e2ddd5; color: #5e6b7d; font-size: 0.95rem;">Place on a beverage napkin for elegance</li>
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid #e2ddd5; color: #5e6b7d; font-size: 0.95rem;">Present from the right side with eye contact</li>
                        <li style="padding: 0.75rem 0; color: #5e6b7d; font-size: 0.95rem;">Speak with confidence: \"Your martini\"</li>
                    </ul>
                </div>
            `,
            examples: [
                "Express lemon twist oils directly over the drink",
                "Spear olives securely on a quality pick",
                "Present with eye contact and confidence"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Service Excellence",
                    instructions: "Select the best practices.",
                    items: [
                        {
                            type: "radio",
                            label: "How should a lemon twist be expressed?",
                            options: [
                                { value: "a", label: "Drop it in without expressing" },
                                { value: "b", label: "Express oils over surface, then drop in" },
                                { value: "c", label: "Discard after expressing" },
                                { value: "d", label: "Never use lemon twists" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "quality",
            stepNumber: 8,
            title: "Quality Control",
            icon: "✓",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Every martini represents your establishment. Quality control is non-negotiable.
                    </p>

                    <div style="background: white; border: 2px solid #e2ddd5; border-radius: 8px; overflow: hidden; margin-bottom: 2rem;">
                        <div style="background: linear-gradient(90deg, #8b1c31 0%, #1b4d3e 100%); padding: 1rem; text-align: center;">
                            <p style="margin: 0; color: white; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Pre-Service Checklist</p>
                        </div>

                        <div style="padding: 1.5rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                                <div style="padding: 1rem; background: #f9f7f4; border-radius: 6px; border-left: 4px solid #8b1c31;">
                                    <p style="font-size: 0.85rem; font-weight: 600; color: #8b1c31; margin: 0 0 0.75rem 0; text-transform: uppercase;">Temperature</p>
                                    <p style="margin: 0; color: #5e6b7d; font-size: 0.9rem;">Finished drink at 28-32°F</p>
                                </div>
                                <div style="padding: 1rem; background: #f9f7f4; border-radius: 6px; border-left: 4px solid #1b4d3e;">
                                    <p style="font-size: 0.85rem; font-weight: 600; color: #1b4d3e; margin: 0 0 0.75rem 0; text-transform: uppercase;">Clarity</p>
                                    <p style="margin: 0; color: #5e6b7d; font-size: 0.9rem;">Crystal clear, no ice particles</p>
                                </div>
                                <div style="padding: 1rem; background: #f9f7f4; border-radius: 6px; border-left: 4px solid #d4af37;">
                                    <p style="font-size: 0.85rem; font-weight: 600; color: #d4af37; margin: 0 0 0.75rem 0; text-transform: uppercase;">Ingredients</p>
                                    <p style="margin: 0; color: #5e6b7d; font-size: 0.9rem;">Fresh vermouth, quality spirits</p>
                                </div>
                                <div style="padding: 1rem; background: #f9f7f4; border-radius: 6px; border-left: 4px solid #8b1c31;">
                                    <p style="font-size: 0.85rem; font-weight: 600; color: #8b1c31; margin: 0 0 0.75rem 0; text-transform: uppercase;">Aroma</p>
                                    <p style="margin: 0; color: #5e6b7d; font-size: 0.9rem;">No off-odors, fresh aromatics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Verify temperature is 28-32°F",
                "Check for crystal clarity and no ice particles",
                "Confirm vermouth is fresh (opened within 2-3 months)",
                "Smell test before service"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Quality Standards",
                    instructions: "Select the correct procedures.",
                    items: [
                        {
                            type: "select",
                            label: "What should a properly prepared martini look like?",
                            options: [
                                "Slightly cloudy with visible ice particles",
                                "Crystal clear with no particles or cloudiness",
                                "Bright colored with herbal sediment",
                                "Depends on which vermouth brand is used"
                            ],
                            expectedAnswer: "Crystal clear with no particles or cloudiness"
                        }
                    ]
                }
            ]
        },
        {
            id: "contessa-house-martinis",
            stepNumber: 9,
            title: "Contessa House Martinis",
            icon: "🏠",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Contessa's house martinis represent the pinnacle of our craft. Every bartender must master these signature preparations.
                    </p>

                    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                        <div style="background: white; padding: 1.75rem; border-radius: 12px; border: 2px solid #e2ddd5; border-top: 4px solid #8b1c31;">
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 700;">The Vesper</p>
                            <p style="font-size: 0.95rem; margin: 0; color: #1a202c; line-height: 1.7; font-weight: 500;">
                                Gin, vodka, and Cocchi Americano. A balanced, sophisticated martini that bridges both spirits. The Cocchi Americano adds complexity and botanical nuance. Serve at 28–32°F with a lemon twist.
                            </p>
                        </div>

                        <div style="background: white; padding: 1.75rem; border-radius: 12px; border: 2px solid #e2ddd5; border-top: 4px solid #1b4d3e;">
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1b4d3e; margin: 0 0 1rem 0; font-weight: 700;">The Classic</p>
                            <p style="font-size: 0.95rem; margin: 0; color: #1a202c; line-height: 1.7; font-weight: 500;">
                                London Dry Gin, dry vermouth, and house-made bitters. The purist's martini—showcasing the gin's botanical character. Serve with a lemon twist or olives as preferred.
                            </p>
                        </div>

                        <div style="background: white; padding: 1.75rem; border-radius: 12px; border: 2px solid #e2ddd5; border-top: 4px solid #d4af37;">
                            <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 700;">The Dirty</p>
                            <p style="font-size: 0.95rem; margin: 0; color: #1a202c; line-height: 1.7; font-weight: 500;">
                                Ketel One vodka and olive brine—a savory, decisive martini for those who know what they want. Serve with three house-brined olives on a cocktail pick. No citrus expression.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Vesper: A balanced gin-vodka martini with Cocchi Americano",
                "Classic: Pure London Dry gin with dry vermouth and bitters",
                "Dirty: Ketel One vodka with house-brined olives and olive brine"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Contessa House Martinis",
                    instructions: "Identify the correct house martini.",
                    items: [
                        {
                            type: "radio",
                            label: "Which Contessa house martini uses Cocchi Americano as a key ingredient?",
                            options: [
                                { value: "a", label: "Classic" },
                                { value: "b", label: "Dirty" },
                                { value: "c", label: "Vesper" },
                                { value: "d", label: "Perfect" }
                            ],
                            expectedAnswer: "c"
                        },
                        {
                            type: "select",
                            label: "What garnish is used for Contessa's Dirty martini?",
                            options: [
                                "A lemon twist",
                                "Three house-brined olives on a cocktail pick",
                                "An orange wheel",
                                "A cocktail onion"
                            ],
                            expectedAnswer: "Three house-brined olives on a cocktail pick"
                        }
                    ]
                }
            ]
        },
        {
            id: "excellence",
            stepNumber: 10,
            title: "Excellence is a Practice",
            icon: "⭐",
            explanation: `
                <div style="font-family: Georgia, serif; color: #1a202c;">
                    <div style="background: linear-gradient(135deg, #8b1c31 0%, #1b4d3e 15%, transparent 100%); padding: 2rem; margin: -1rem -1rem 2rem -1rem; border-radius: 12px;">
                        <p style="font-size: 1.25rem; font-weight: 300; margin: 0; color: white; line-height: 1.6;">
                            Excellence is not achieved through perfection. It is achieved through intention, practice, and commitment to fundamentals.
                        </p>
                    </div>

                    <p style="font-size: 1rem; line-height: 1.8; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Every martini you make is an opportunity to demonstrate your craft. At Contessa, mastering the house martinis is a cornerstone of bartender excellence.
                    </p>

                    <p style="font-size: 1rem; line-height: 1.8; margin: 0; color: #5e6b7d;">
                        Treat each martini as a ritual. Chill deliberately. Measure with precision. Stir with intention. Strain with confidence. Present with grace. Whether you're crafting a classic gin martini, a balanced Vesper, or a decisive Dirty—each preparation is a reflection of your commitment to the house and to your guests.
                    </p>
                </div>
            `,
            examples: [
                "Treat each martini as a deliberate ritual",
                "Master all three Contessa house martinis",
                "Measure precisely, stir intentionally, present with grace"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Professional Mastery",
                    instructions: "Complete your training with a final reflection.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the foundation of martini excellence at Contessa?",
                            options: [
                                { value: "a", label: "Using the most expensive spirits" },
                                { value: "b", label: "Intention, practice, and commitment to fundamentals" },
                                { value: "c", label: "Inventing new variations" },
                                { value: "d", label: "Speed of preparation" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        }
    ]
};
