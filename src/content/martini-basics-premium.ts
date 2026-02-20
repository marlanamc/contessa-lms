import type { InteractiveGuideContent } from "@/types/activity";

/**
 * MARTINI BASICS - PREMIUM EDITION
 *
 * Enterprise-grade training guide for fine dining bartenders
 * Design Philosophy: Refined luxury minimalism, typography-driven, editorial aesthetic
 * Target: Premium restaurant group standard (Michelin-star hospitality)
 *
 * Structure: Bite-sized sections with exercises after each, ensuring active learning
 */

export const martiniBasicsPremium: InteractiveGuideContent = {
    type: "interactive-guide",
    tableOfContents: true,
    sections: [
        {
            id: "intro",
            stepNumber: 1,
            title: "What is a Martini?",
            icon: "🍸",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1.25rem; font-weight: 300; margin: 0 0 2rem 0; color: #1a202c;">
                        The martini is not a cocktail. It is a discipline.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        In fine dining, the martini represents your establishment's commitment to precision and craftsmanship. Every bartender must understand that a martini is the customer's moment of clarity—a perfectly balanced drink served at exactly the right temperature.
                    </p>
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
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Your spirit choice defines the martini. This is not a minor detail—it fundamentally changes the drink's character.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Gin</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Botanical, aromatic, complex. London Dry style with juniper-forward character. Choose one house gin and master it.
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Vodka</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Clean, neutral, smooth. Premium quality matters—cheap vodka will ruin the drink. Let it be your baseline expectation.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Gin: Tanqueray, Bombay Sapphire, or Hendricks",
                "Vodka: Ketel One, Grey Goose, or Belvedere",
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
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Dry vermouth is not optional—it is essential. It provides the herbaceous complexity and dryness that defines a martini. Poor vermouth creates a poor martini.
                    </p>

                    <div style="padding: 1.5rem 0; border-top: 1px solid #e2ddd5; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Storage & Freshness</p>
                        <p style="font-size: 1rem; margin: 0.5rem 0; color: #5e6b7d;">
                            <strong>Replace every 2–3 months after opening.</strong> Store in a cool location or refrigerator. Opened vermouth oxidizes rapidly.
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
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 2rem 0; color: #5e6b7d;">
                        The martini follows a specific ratio. This is not negotiable—precision is what separates a martini from a cocktail.
                    </p>

                    <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1a202c; margin: 0 0 0.5rem 0; font-weight: 600;">Classic</p>
                        <p style="font-size: 1.125rem; font-weight: 500; color: #8b1c31; margin: 0;">2.5:1 to 3:1 (spirit to vermouth)</p>
                    </div>
                    <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1a202c; margin: 0 0 0.5rem 0; font-weight: 600;">Dry</p>
                        <p style="font-size: 1.125rem; font-weight: 500; color: #8b1c31; margin: 0;">5:1 (spirit to vermouth)</p>
                    </div>
                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1a202c; margin: 0 0 0.5rem 0; font-weight: 600;">Very Dry</p>
                        <p style="font-size: 1.125rem; font-weight: 500; color: #8b1c31; margin: 0;">10:1 or higher (minimal vermouth)</p>
                    </div>
                </div>
            `,
            examples: [
                "Classic: 2.5:1 to 3:1 spirit to vermouth",
                "Dry: 5:1 spirit to vermouth",
                "Very Dry: 10:1 or higher"
            ],
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
            title: "Temperature: The Foundation",
            icon: "🧊",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Temperature is critical. The martini must be served at 28–32°F. Begin by chilling your glassware for 15 minutes minimum before service.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        A warm glass will immediately warm the drink. A cold glass will keep it perfect. This is non-negotiable.
                    </p>
                </div>
            `,
            examples: [
                "Chill glassware in freezer for 15+ minutes",
                "Use ice-and-water method for 2–3 minutes if freezer unavailable",
                "Target serving temperature: 28–32°F"
            ],
            exercises: [
                {
                    title: "Temperature Fundamentals",
                    instructions: "Choose the correct statement.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the proper serving temperature for a martini?",
                            options: [
                                { value: "a", label: "Room temperature (68–72°F)" },
                                { value: "b", label: "Cold (45–50°F)" },
                                { value: "c", label: "Very cold (28–32°F)" },
                                { value: "d", label: "Near-freezing (15–20°F)" }
                            ],
                            expectedAnswer: "c"
                        }
                    ]
                }
            ]
        },
        {
            id: "ice",
            stepNumber: 6,
            title: "Ice Selection and Stirring",
            icon: "⚗️",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Use large, clear ice cubes. They chill efficiently without excessive dilution. Small ice melts too quickly and over-dilutes the drink.
                    </p>

                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Stir for 30–45 seconds with smooth, deliberate motions. No rushing. No hesitation.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        <strong>Why stirring, not shaking?</strong> Stirring maintains clarity and creates a silky texture. Shaking aerates excessively.
                    </p>
                </div>
            `,
            examples: [
                "Use large, clear ice cubes—never small ice",
                "Stir for 30–45 seconds with smooth motions",
                "Stirring = clarity. Shaking = dilution."
            ],
            exercises: [
                {
                    title: "Ice and Stirring Technique",
                    instructions: "Answer both questions correctly.",
                    items: [
                        {
                            type: "radio",
                            label: "Why use large ice instead of small ice?",
                            options: [
                                { value: "a", label: "Appearance" },
                                { value: "b", label: "Efficient chilling without over-dilution" },
                                { value: "c", label: "Easier handling" },
                                { value: "d", label: "Tradition" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "How long should you stir a martini?",
                            options: [
                                "10–15 seconds",
                                "30–45 seconds",
                                "60+ seconds",
                                "Until it feels ready"
                            ],
                            expectedAnswer: "30–45 seconds"
                        }
                    ]
                }
            ]
        },
        {
            id: "straining",
            stepNumber: 7,
            title: "Straining and Garnish",
            icon: "✨",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Strain smoothly and confidently using a julep strainer or fine mesh. No ice should enter the finished drink.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        <strong>Express the garnish immediately.</strong> If using a lemon twist, express the oils over the drink surface and drop it in. This creates the first sensory moment.
                    </p>
                </div>
            `,
            examples: [
                "Strain with smooth, confident movements",
                "No ice in the finished drink",
                "Express lemon twist oils immediately before service"
            ],
            exercises: [
                {
                    title: "Finishing Technique",
                    instructions: "Choose the correct method.",
                    items: [
                        {
                            type: "radio",
                            label: "How should a lemon twist be expressed?",
                            options: [
                                { value: "a", label: "Drop it in without expressing" },
                                { value: "b", label: "Express oils over the drink surface, then add the twist" },
                                { value: "c", label: "Discard it after expressing" },
                                { value: "d", label: "Never use lemon twists" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "variations",
            stepNumber: 8,
            title: "The Dry Martini",
            icon: "🎯",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        A dry martini uses a 5:1 or higher ratio of spirit to vermouth. For those who prefer minimal vermouth influence.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        <strong>Characteristic:</strong> Clean, spirit-forward, sharp. Garnished with a lemon twist (typically, not olives).
                    </p>
                </div>
            `,
            examples: [
                "Dry Martini: 5:1 gin to vermouth, lemon twist",
                "More spirit-forward than classic",
                "Bright and sharp flavor profile"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Variation Knowledge",
                    instructions: "Answer correctly.",
                    items: [
                        {
                            type: "select",
                            label: "What ratio is used for a dry martini?",
                            options: [
                                "2.5:1 to 3:1",
                                "5:1 or higher",
                                "1:1",
                                "10:1 or higher"
                            ],
                            expectedAnswer: "5:1 or higher"
                        }
                    ]
                }
            ]
        },
        {
            id: "gibson",
            stepNumber: 9,
            title: "The Gibson and Other Variations",
            icon: "🧅",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        <strong>The Gibson:</strong> Identical to a martini, but garnished with a pickled cocktail onion instead of an olive. The onion adds subtle sweetness and savory complexity.
                    </p>

                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        <strong>The Dirty Martini:</strong> Standard martini with olive brine (typically 0.5 oz) added before serving. Served with olives. More savory, more bold.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        <strong>Gin vs. Vodka:</strong> Neither is superior. They create different experiences. Always ask the customer.
                    </p>
                </div>
            `,
            examples: [
                "Gibson: Martini with pickled onion garnish",
                "Dirty: Standard martini with olive brine",
                "Always clarify spirit preference"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Variations Mastery",
                    instructions: "Identify each variation.",
                    items: [
                        {
                            type: "radio",
                            label: "A martini garnished with a pickled onion is called a:",
                            options: [
                                { value: "a", label: "Dirty Martini" },
                                { value: "b", label: "Gibson" },
                                { value: "c", label: "Savory Martini" },
                                { value: "d", label: "Pearl Onion Martini" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "A 'dirty martini' includes:",
                            options: [
                                "Olive oil",
                                "Olive brine",
                                "More vermouth",
                                "Lower quality spirits"
                            ],
                            expectedAnswer: "Olive brine"
                        }
                    ]
                }
            ]
        },
        {
            id: "glassware",
            stepNumber: 10,
            title: "Glassware and Handling",
            icon: "🔷",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        <strong>Coupe Glass:</strong> Elegant, showcases aromatics beautifully. Modern fine dining favorite.
                    </p>

                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        <strong>Martini Glass:</strong> Iconic, traditional. Requires careful handling due to wide opening and narrow stem.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        <strong>Critical:</strong> Always hold the glass by the stem, never the bowl. Your hand's warmth will immediately warm the drink.
                    </p>
                </div>
            `,
            examples: [
                "Coupe glass: elegant, aromatics-focused",
                "Martini glass: iconic, requires care",
                "Hold exclusively by the stem"
            ],
            exercises: [
                {
                    title: "Glassware Standards",
                    instructions: "Answer both questions.",
                    items: [
                        {
                            type: "radio",
                            label: "How long should glassware be chilled?",
                            options: [
                                { value: "a", label: "Immediately before pouring" },
                                { value: "b", label: "15+ minutes before service" },
                                { value: "c", label: "While stirring the cocktail" },
                                { value: "d", label: "Temperature doesn't matter" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "Why hold the glass by the stem?",
                            options: [
                                "It's more elegant",
                                "It prevents fingerprints",
                                "It preserves the drink's temperature",
                                "All of the above"
                            ],
                            expectedAnswer: "All of the above"
                        }
                    ]
                }
            ]
        },
        {
            id: "order-taking",
            stepNumber: 11,
            title: "Taking the Order",
            icon: "👤",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        A martini order requires clarification. Listen carefully, confirm your understanding, and execute with precision.
                    </p>

                    <div style="margin-top: 1.5rem; padding-top: 1rem;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 600;">The Essential Questions</p>
                        <p style="font-size: 1rem; margin: 0.5rem 0; color: #5e6b7d;">
                            <strong>Spirit:</strong> "Gin or vodka?"
                        </p>
                        <p style="font-size: 1rem; margin: 0.5rem 0; color: #5e6b7d;">
                            <strong>Dryness:</strong> "Classic, dry, or very dry?"
                        </p>
                        <p style="font-size: 1rem; margin: 0.5rem 0; color: #5e6b7d;">
                            <strong>Garnish:</strong> "Olives, lemon twist, or onion?"
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Customer: 'Martini' → Ask: 'Gin or vodka? Classic, dry, or very dry? Olives or twist?'",
                "Customer: 'Dirty martini' → Ask: 'How much brine? Gin or vodka?'",
                "Customer: 'Gibson' → Confirm: 'Martini with pickled onion?'"
            ],
            exercises: [
                {
                    title: "Order-Taking Scenarios",
                    instructions: "Choose the best response.",
                    items: [
                        {
                            type: "radio",
                            label: "A customer orders 'a martini.' What should you ask?",
                            options: [
                                { value: "a", label: "Nothing—just make a standard martini" },
                                { value: "b", label: "Gin or vodka? Classic, dry, or very dry? Olives or twist?" },
                                { value: "c", label: "Only ask about gin vs. vodka" },
                                { value: "d", label: "Ask if they want it shaken or stirred" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "confirmation",
            stepNumber: 12,
            title: "Confirming the Order",
            icon: "✓",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Always repeat the order back to the customer. This prevents mistakes and shows attentiveness.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        <strong>Example:</strong> "So, a dry gin martini with a lemon twist? Perfect, I'll have that right out."
                    </p>
                </div>
            `,
            examples: [
                "Repeat the order back: 'So, a dry gin martini with a lemon twist?'",
                "Confirm clarity with the customer",
                "Show attentiveness through repetition"
            ],
            showExamples: true,
            exercises: [
                {
                    title: "Confirmation Practice",
                    instructions: "Choose the best order summary.",
                    items: [
                        {
                            type: "radio",
                            label: "Customer orders 'a vodka martini, very dry, with olives.' You should confirm by saying:",
                            options: [
                                { value: "a", label: "A martini" },
                                { value: "b", label: "A vodka martini" },
                                { value: "c", label: "A very dry vodka martini with olives" },
                                { value: "d", label: "Coming right up" }
                            ],
                            expectedAnswer: "c"
                        }
                    ]
                }
            ]
        },
        {
            id: "presentation",
            stepNumber: 13,
            title: "Presentation and Service",
            icon: "💎",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Place the glass on a beverage napkin. Present from the server's right side (when possible). Make eye contact. Speak with quiet confidence: "Your martini."
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        This moment is the culmination of your skill and care. Let it be felt.
                    </p>
                </div>
            `,
            examples: [
                "Place glass on beverage napkin",
                "Present from server's right side",
                "Make eye contact and speak with confidence"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Service Excellence",
                    instructions: "Choose the best practice.",
                    items: [
                        {
                            type: "select",
                            label: "From which side should you present a martini?",
                            options: [
                                "Server's left",
                                "Server's right",
                                "Directly in front",
                                "It doesn't matter"
                            ],
                            expectedAnswer: "Server's right"
                        }
                    ]
                }
            ]
        },
        {
            id: "quality",
            stepNumber: 14,
            title: "Quality Assurance",
            icon: "🌡️",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Before service: verify temperature (28–32°F), check for crystal clarity, confirm proper chill. Never serve a lukewarm martini.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        <strong>Monitor temperature during service.</strong> If the martini warms above 35°F before the customer drinks it, offer a replacement gracefully. This is excellence.
                    </p>
                </div>
            `,
            examples: [
                "Verify temperature is 28–32°F",
                "Check for crystal clarity",
                "Offer replacement if warmed above 35°F"
            ],
            exercises: [
                {
                    title: "Quality Standards",
                    instructions: "Answer both questions.",
                    items: [
                        {
                            type: "radio",
                            label: "What should you do if a martini warms above 35°F before the customer drinks it?",
                            options: [
                                { value: "a", label: "Do nothing—they ordered it" },
                                { value: "b", label: "Offer a replacement gracefully" },
                                { value: "c", label: "Remove the glass immediately" },
                                { value: "d", label: "Chill it again on ice" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "What should a properly prepared martini look like?",
                            options: [
                                "Slightly cloudy with ice particles",
                                "Crystal clear with no particles",
                                "Bright colored with sediment",
                                "Depends on the vermouth brand"
                            ],
                            expectedAnswer: "Crystal clear with no particles"
                        }
                    ]
                }
            ]
        },
        {
            id: "contessa-house-martinis",
            stepNumber: 15,
            title: "Contessa House Martinis",
            icon: "🏠",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Contessa's house martinis represent the pinnacle of the restaurant's craft and philosophy. Every bartender must master these signature preparations. They are not just drinks—they are expressions of the house style.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Vesper</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Gin, vodka, and Cocchi Americano. A balanced, sophisticated martini that bridges the gin and vodka worlds. The Cocchi Americano adds complexity and botanical nuance. Serve at 28–32°F with a lemon twist.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Classic</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            London Dry Gin, dry vermouth, and a touch of house-made bitters. This is the purist's martini—showcasing the gin's botanical character while honoring classical cocktail proportions. Serve with a lemon twist or olives as preferred.
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Dirty</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Ketel One vodka and olive brine—a savory, decisive martini for those who know what they want. The olive brine adds umami depth. Serve with three house-brined olives on a cocktail pick. No citrus expression.
                        </p>
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
            stepNumber: 16,
            title: "Excellence is a Practice",
            icon: "⭐",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Excellence is not achieved through perfection—it is achieved through intention, practice, and commitment to fundamentals. Every martini you make is an opportunity to demonstrate your craft. At Contessa, mastering the house martinis is a cornerstone of bartender excellence.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        Treat each martini as a ritual. Chill deliberately. Measure with precision. Stir with intention. Strain with confidence. Present with grace. Whether you're crafting a classic gin martini, a balanced Vesper, or a decisive Dirty, each preparation is a reflection of your commitment to the house and to your guests.
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
                    instructions: "Complete your training with a final assessment.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the foundation of excellent martini preparation?",
                            options: [
                                { value: "a", label: "Speed and efficiency" },
                                { value: "b", label: "Using the most expensive ingredients" },
                                { value: "c", label: "Intention, practice, and commitment to fundamentals" },
                                { value: "d", label: "Following the customer's every whim" }
                            ],
                            expectedAnswer: "c"
                        }
                    ]
                }
            ]
        }
    ],
    miniQuiz: [
        {
            id: "q1",
            question: "What is the classic martini ratio?",
            options: [
                { value: "a", label: "1:1 spirit to vermouth" },
                { value: "b", label: "2.5:1 to 3:1 spirit to vermouth" },
                { value: "c", label: "5:1 spirit to vermouth" },
                { value: "d", label: "Equal parts of all ingredients" }
            ],
            correctAnswer: "b",
            topic: "martini-basics",
            skill: "knowledge",
            difficulty: "easy"
        },
        {
            id: "q2",
            question: "At what temperature should a martini be served?",
            options: [
                { value: "a", label: "Room temperature (68–72°F)" },
                { value: "b", label: "Cold (45–50°F)" },
                { value: "c", label: "Very cold (28–32°F)" },
                { value: "d", label: "Frozen (–4°F or below)" }
            ],
            correctAnswer: "c",
            topic: "martini-preparation",
            skill: "knowledge",
            difficulty: "easy"
        },
        {
            id: "q3",
            question: "How long should you stir a martini?",
            options: [
                { value: "a", label: "10–15 seconds" },
                { value: "b", label: "30–45 seconds" },
                { value: "c", label: "60+ seconds" },
                { value: "d", label: "Until it feels ready" }
            ],
            correctAnswer: "b",
            topic: "martini-preparation",
            skill: "knowledge",
            difficulty: "easy"
        },
        {
            id: "q4",
            question: "A martini garnished with a pickled onion is called a:",
            options: [
                { value: "a", label: "Dirty Martini" },
                { value: "b", label: "Gibson" },
                { value: "c", label: "Savory Martini" },
                { value: "d", label: "Pearl Onion Martini" }
            ],
            correctAnswer: "b",
            topic: "martini-variations",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q5",
            question: "Why are large ice cubes preferred?",
            options: [
                { value: "a", label: "Appearance" },
                { value: "b", label: "Efficient chilling without over-dilution" },
                { value: "c", label: "Easier handling" },
                { value: "d", label: "Tradition" }
            ],
            correctAnswer: "b",
            topic: "martini-technique",
            skill: "understanding",
            difficulty: "medium"
        },
        {
            id: "q6",
            question: "How often should opened dry vermouth be replaced?",
            options: [
                { value: "a", label: "Every 6 months" },
                { value: "b", label: "Every 2–3 months" },
                { value: "c", label: "Every year" },
                { value: "d", label: "Never, if properly sealed" }
            ],
            correctAnswer: "b",
            topic: "quality-control",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q7",
            question: "What should you do if a customer hasn't started their martini after a few minutes?",
            options: [
                { value: "a", label: "Do nothing—they ordered it" },
                { value: "b", label: "Offer a replacement if it has warmed above 35°F" },
                { value: "c", label: "Remove the glass immediately" },
                { value: "d", label: "Chill it again on ice" }
            ],
            correctAnswer: "b",
            topic: "customer-service",
            skill: "professional-judgment",
            difficulty: "hard"
        },
        {
            id: "q8",
            question: "Which spirit choice showcases botanical complexity?",
            options: [
                { value: "a", label: "Vodka—the standard choice" },
                { value: "b", label: "Gin—botanical and aromatic" },
                { value: "c", label: "Both are identical" },
                { value: "d", label: "Neither has botanical characteristics" }
            ],
            correctAnswer: "b",
            topic: "ingredients",
            skill: "understanding",
            difficulty: "easy"
        },
        {
            id: "q9",
            question: "What does a 'dirty martini' typically include?",
            options: [
                { value: "a", label: "Olive oil" },
                { value: "b", label: "Olive brine" },
                { value: "c", label: "More vermouth" },
                { value: "d", label: "Lower quality spirits" }
            ],
            correctAnswer: "b",
            topic: "customer-preferences",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q10",
            question: "Why is chilling glassware for 15+ minutes important?",
            options: [
                { value: "a", label: "Prevents fingerprints" },
                { value: "b", label: "Allows the drink to maintain proper temperature" },
                { value: "c", label: "Prevents the glass from breaking" },
                { value: "d", label: "It's purely traditional" }
            ],
            correctAnswer: "b",
            topic: "service-standards",
            skill: "understanding",
            difficulty: "easy"
        }
    ]
};

export default martiniBasicsPremium;
