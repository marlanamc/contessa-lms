import type { InteractiveGuideContent } from "@/types/activity";

export const martiniBasicsGuide: InteractiveGuideContent = {
    type: "interactive-guide",
    tableOfContents: true,
    sections: [
        {
            id: "intro",
            stepNumber: 1,
            title: "The Art of the Martini",
            icon: "🍸",
            explanation: `
                <p>The martini is one of the most iconic cocktails in fine dining. Whether served classic and elegant or with contemporary flair, understanding the fundamentals of martini preparation and service is essential for any fine dining establishment.</p>
                <p>This guide covers the classic martini preparation, variations, proper technique, and service standards that reflect the sophistication of your restaurant.</p>
            `,
            examples: [
                "A perfectly chilled gin martini with a twist",
                "Vodka martini served up with blue cheese-stuffed olives",
                "Classic dry martini prepared with precision and care"
            ],
            showExamples: false
        },
        {
            id: "ingredients",
            stepNumber: 2,
            title: "Essential Ingredients",
            icon: "🥃",
            explanation: `
                <p><strong>The Spirit Base:</strong> A martini requires a base spirit, traditionally gin or vodka. Gin provides botanical complexity and aromatics, while vodka offers a clean, neutral canvas.</p>
                <p><strong>Dry Vermouth:</strong> Dry vermouth is the fortified wine that gives the martini its characteristic dryness. Quality matters—use fresh, high-quality vermouth stored properly after opening.</p>
                <p><strong>The Ratio:</strong> The classic ratio is 2.5:1 to 3:1 (spirit to vermouth), though modern preferences range from 3:1 to 5:1 or even "very dry" at 10:1.</p>
                <p><strong>Garnish Options:</strong> Green olives, lemon twist, or pearl onions are traditional choices that enhance and complement the spirit.</p>
            `,
            examples: [
                "Premium London Dry Gin (Tanqueray, Bombay Sapphire, or Hendricks)",
                "High-quality vodka (Ketel One, Grey Goose, or Belvedere)",
                "Fresh, properly stored dry vermouth opened within 2-3 months",
                "Brined green olives or fresh lemons for garnish"
            ],
            exercises: [
                {
                    title: "Ingredient Recognition",
                    instructions: "Select the correct ingredient descriptions.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the primary role of dry vermouth in a martini?",
                            options: [
                                { value: "a", label: "Provides sweetness and color" },
                                { value: "b", label: "Adds dryness and herbal complexity" },
                                { value: "c", label: "Acts as the main spirit base" },
                                { value: "d", label: "Serves purely as a garnish element" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "Which ratio is considered the modern classic for a martini?",
                            options: [
                                "1:1 spirit to vermouth",
                                "2.5:1 to 3:1 spirit to vermouth",
                                "5:1 spirit to vermouth",
                                "Equal parts of all ingredients"
                            ],
                            expectedAnswer: "2.5:1 to 3:1 spirit to vermouth"
                        }
                    ]
                }
            ]
        },
        {
            id: "preparation",
            stepNumber: 3,
            title: "Preparation Technique",
            icon: "⚗️",
            explanation: `
                <p><strong>The Chill Factor:</strong> Temperature is critical. The martini should be served at 28-32°F (-2 to 0°C). Begin by chilling your glassware in the freezer for at least 15 minutes.</p>
                <p><strong>Stirring vs. Shaking:</strong> The classic method is stirring (not shaking, as famously misunderstood). Stir the spirit and vermouth with ice for 30-45 seconds to achieve proper temperature and slight dilution for smoothness.</p>
                <p><strong>The Ice Matters:</strong> Use large, clear ice cubes or ice spears—they chill efficiently without excessive dilution. Small ice melts too quickly and over-dilutes the drink.</p>
                <p><strong>Straining:</strong> Strain the mixture using a julep or cocktail strainer into your chilled coupe or martini glass, ensuring no ice enters the final drink.</p>
                <p><strong>The Garnish Preparation:</strong> Olives should be at room temperature or chilled (debate exists, but consistency matters). A lemon twist should be freshly cut just before serving to release oils.</p>
            `,
            examples: [
                "Chill glassware for 15+ minutes before service",
                "Stir spirit and vermouth with ice for 30-45 seconds",
                "Use large ice cubes to minimize dilution",
                "Express lemon oils over the drink surface by twisting over the glass",
                "Strain cleanly with no ice in the finished product"
            ],
            exercises: [
                {
                    title: "Preparation Steps",
                    instructions: "Select the correct preparation techniques.",
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
                        },
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
                            label: "Why are large ice cubes preferred for martini preparation?",
                            options: [
                                { value: "a", label: "They look more impressive in the glass" },
                                { value: "b", label: "They chill efficiently without over-diluting" },
                                { value: "c", label: "They are easier to handle" },
                                { value: "d", label: "Small ice is unavailable at fine dining establishments" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "variations",
            stepNumber: 4,
            title: "Classic Variations",
            icon: "🎯",
            explanation: `
                <p><strong>The Dry Martini:</strong> Uses a 5:1 or higher ratio of spirit to vermouth, for those who prefer minimal vermouth influence. Often garnished with a lemon twist.</p>
                <p><strong>The Wet Martini:</strong> Uses equal parts or nearly equal parts of spirit and vermouth, creating a more herbaceous and complex flavor profile.</p>
                <p><strong>The Gibson:</strong> Identical to a martini except garnished with a pickled cocktail onion instead of an olive. The onion adds a subtle savory note.</p>
                <p><strong>The Martini with a Twist:</strong> Garnished with a lemon twist that is expressed over the drink, adding bright citrus aromatics without the flavor of an olive.</p>
                <p><strong>Gin vs. Vodka:</strong> Gin martinis showcase the botanical complexity of the spirit. Vodka martinis emphasize the vermouth and are favored by those seeking a smoother, more neutral base.</p>
                <p><strong>The Perfect Martini:</strong> Equal parts dry and sweet vermouth with gin, creating a balanced, slightly herbaceous drink—a bridge between traditional and contemporary preferences.</p>
            `,
            examples: [
                "Dry Martini: 5:1 gin to vermouth, lemon twist",
                "Wet Martini: 1:1 gin to vermouth, olive garnish",
                "Gibson: Same as martini, garnished with pickled onion",
                "Classic Gin Martini: Showcases botanical aromatics",
                "Vodka Martini: Clean, neutral base allowing vermouth to shine"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Variation Identification",
                    instructions: "Match the variation description with the correct name.",
                    items: [
                        {
                            type: "radio",
                            label: "A martini garnished with a pickled cocktail onion is called a:",
                            options: [
                                { value: "a", label: "Martini Onion" },
                                { value: "b", label: "Gibson" },
                                { value: "c", label: "Pickleback" },
                                { value: "d", label: "Savory Martini" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "Which spirit choice emphasizes botanical complexity and aromatics?",
                            options: [
                                "Vodka—neutral and clean",
                                "Gin—botanical and aromatic",
                                "Both are identical in flavor profile",
                                "Neither has botanical characteristics"
                            ],
                            expectedAnswer: "Gin—botanical and aromatic"
                        },
                        {
                            type: "radio",
                            label: "A very dry martini typically uses what ratio of spirit to vermouth?",
                            options: [
                                { value: "a", label: "1:1" },
                                { value: "b", label: "3:1" },
                                { value: "c", label: "5:1 or higher" },
                                { value: "d", label: "10:1 is standard for all martinis" }
                            ],
                            expectedAnswer: "c"
                        }
                    ]
                }
            ]
        },
        {
            id: "glassware",
            stepNumber: 5,
            title: "Glassware & Service",
            icon: "🔷",
            explanation: `
                <p><strong>The Coupe Glass:</strong> The traditional and most elegant choice. The wide bowl allows for proper appreciation of the drink's aromatics. Modern fine dining establishments often favor the coupe for its sophisticated appearance.</p>
                <p><strong>The Martini Glass:</strong> The iconic "cocktail glass" with the distinctive triangular bowl. While often used, it presents a challenge: the wide opening makes it easy to spill, and the narrow stem requires careful handling.</p>
                <p><strong>Chilling Protocol:</strong> Always pre-chill your glassware. Place glasses in the freezer at least 15 minutes before service, or use the ice-and-water method if you lack freezer space.</p>
                <p><strong>Stemware Handling:</strong> Handle by the stem, not the bowl—your hand's warmth will affect the drink's temperature. This is not merely etiquette; it's essential for maintaining the proper chill.</p>
                <p><strong>Presentation:</strong> Present the martini with the garnish properly positioned. For olives on a pick, ensure they're speared securely. For a twist, express it just before service to maximize aroma.</p>
            `,
            examples: [
                "Coupe glass: Wide bowl, elegant, aromatics-focused",
                "Martini glass: Iconic triangular shape, dramatic presentation",
                "Always chill glassware for 15+ minutes",
                "Hold by the stem to preserve temperature",
                "Express citrus garnish just before presentation"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Service Standards",
                    instructions: "Select the correct service practices.",
                    items: [
                        {
                            type: "radio",
                            label: "When should you chill martini glassware?",
                            options: [
                                { value: "a", label: "Immediately before pouring" },
                                { value: "b", label: "15+ minutes before service" },
                                { value: "c", label: "While stirring the cocktail" },
                                { value: "d", label: "Glassware temperature doesn't matter for martinis" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "Why should you hold a martini glass by the stem?",
                            options: [
                                "It's more elegant and professional",
                                "To preserve the drink's temperature",
                                "To prevent fingerprints on the glass",
                                "All of the above"
                            ],
                            expectedAnswer: "All of the above"
                        }
                    ]
                }
            ]
        },
        {
            id: "quality",
            stepNumber: 6,
            title: "Quality Control & Standards",
            icon: "✓",
            explanation: `
                <p><strong>Temperature Check:</strong> The finished martini should be ice-cold, around 28-32°F. If it's not properly chilled, the flavors become muddy and the drink loses its signature crisp finish.</p>
                <p><strong>Appearance:</strong> The drink should be crystal clear, with no cloudiness or visible ice particles. Proper straining ensures this clarity.</p>
                <p><strong>Consistency:</strong> Every martini prepared in your establishment should taste and look the same. This consistency builds trust with your clientele and reflects your training standards.</p>
                <p><strong>Vermouth Quality:</strong> Opened vermouth deteriorates within 2-3 months. Replace regularly and store in a cool location or refrigerator after opening.</p>
                <p><strong>Customer Preferences:</strong> Take orders seriously. "Dry," "extra dry," "with a twist," "with olives," "gin," "vodka"—these details matter. Repeat the order back if there's any ambiguity.</p>
                <p><strong>The Smell Test:</strong> Before service, ensure the spirit and vermouth have no off-odors. Bad aromas indicate spoiled ingredients and a compromised drink.</p>
            `,
            examples: [
                "Verify temperature is 28-32°F",
                "Check for crystal clarity and no ice particles",
                "Confirm vermouth is fresh (opened within 2-3 months)",
                "Confirm customer preferences before preparation",
                "Review the drink's appearance before service"
            ],
            exercises: [
                {
                    title: "Quality Standards",
                    instructions: "Select the correct quality control procedures.",
                    items: [
                        {
                            type: "radio",
                            label: "How often should opened dry vermouth be replaced?",
                            options: [
                                { value: "a", label: "Every 6 months" },
                                { value: "b", label: "Every 2-3 months" },
                                { value: "c", label: "Every year" },
                                { value: "d", label: "Vermouth never goes bad if sealed" }
                            ],
                            expectedAnswer: "b"
                        },
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
            id: "customer-preferences",
            stepNumber: 7,
            title: "Understanding Customer Preferences",
            icon: "👤",
            explanation: `
                <p><strong>Dry vs. Wet:</strong> When a customer orders a martini, clarify whether they prefer it dry (high spirit-to-vermouth ratio) or wet (more vermouth). "Extra dry" implies minimal vermouth—potentially just a rinse of the glass.</p>
                <p><strong>Spirit Choice:</strong> Ask whether they prefer gin or vodka. This is not a minor detail; it fundamentally changes the drink's character.</p>
                <p><strong>Garnish Preference:</strong> Olives, olive brine, lemon twist, or onion? Some customers have strong preferences. Listen carefully to their answer.</p>
                <p><strong>The "Neat" Preference:</strong> Some patrons request martini ingredients with minimal or no vermouth—this is acceptable if clearly stated, though it deviates from the classic definition.</p>
                <p><strong>Temperature & Technique:</strong> While most customers won't specify stirring vs. shaking, be consistent. The classic method is stirring. If a customer requests shaking, honor that request.</p>
                <p><strong>Repeat the Order:</strong> Summarize the order back to the customer. "So, a dry gin martini with a twist?" Clarity prevents mistakes and shows attentiveness.</p>
            `,
            examples: [
                "Customer: 'Martini, please'  → Ask: 'Gin or vodka? Dry or wet? Olives or twist?'",
                "Customer: 'Martini, dirty'  → Prepare with olive brine, typically 0.5 oz",
                "Customer: 'Gibson'  → Confirm: Martini garnished with a pickled onion",
                "Customer: 'Very dry'  → Very high spirit ratio, minimal vermouth"
            ],
            showExamples: true,
            exercises: [
                {
                    title: "Customer Service Scenarios",
                    instructions: "Select the best response for each customer request.",
                    items: [
                        {
                            type: "radio",
                            label: "A customer orders 'a martini.' What should you ask to clarify?",
                            options: [
                                { value: "a", label: "Nothing—just make a standard martini" },
                                { value: "b", label: "Gin or vodka? Dry or wet? Olives or twist?" },
                                { value: "c", label: "Only ask about gin vs. vodka" },
                                { value: "d", label: "Ask if they want it shaken or stirred" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "A customer asks for a 'dirty martini.' This typically means:",
                            options: [
                                "A martini that hasn't been properly cleaned",
                                "A martini prepared with olive brine included",
                                "A martini with more vermouth than usual",
                                "A martini made with low-quality ingredients"
                            ],
                            expectedAnswer: "A martini prepared with olive brine included"
                        }
                    ]
                }
            ]
        },
        {
            id: "finesse",
            stepNumber: 8,
            title: "Finesse & Professional Techniques",
            icon: "💎",
            explanation: `
                <p><strong>The Ritual:</strong> The martini is more than a drink—it's a ritual. Perform each step with deliberate care. This creates an experience for the customer.</p>
                <p><strong>Speed with Precision:</strong> While the ritual matters, efficiency is equally important. A well-trained bartender can prepare an excellent martini in under 90 seconds from order to service.</p>
                <p><strong>The Nose:</strong> The aroma is crucial. When you express a lemon twist, the essential oils create the first impression. Let those oils shine.</p>
                <p><strong>The Olive Pick:</strong> Use quality stainless steel or glass picks. Ensure olives are speared securely—nothing undermines the elegance like an olive sliding into the drink mid-service.</p>
                <p><strong>The Pour:</strong> Strain smoothly and confidently. A hesitant pour looks unprofessional. The drink should flow cleanly from the mixing glass to the serving glass.</p>
                <p><strong>The Presentation:</strong> Place the glass on a beverage napkin. Present from the server's right side (if possible). Make eye contact. A simple "Your martini" spoken with confidence elevates the entire experience.</p>
                <p><strong>Glassware Care:</strong> Never allow a martini to warm above 35°F. If a customer doesn't immediately drink their martini, be prepared to offer a replacement.</p>
            `,
            examples: [
                "Express lemon twist oils directly over the drink surface",
                "Ensure olive picks are secure and professional-grade",
                "Strain with confident, smooth movements",
                "Present on a napkin with eye contact",
                "Monitor temperature during service"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Professional Techniques",
                    instructions: "Select the best practices for martini service.",
                    items: [
                        {
                            type: "radio",
                            label: "How should a lemon twist be expressed in a martini?",
                            options: [
                                { value: "a", label: "Drop it in the drink without expressing" },
                                { value: "b", label: "Express the oils over the drink surface, then drop it in" },
                                { value: "c", label: "Discard it after expressing" },
                                { value: "d", label: "Lemon twists should never be used" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "From which side should a martini be presented to a customer?",
                            options: [
                                "Left side (server's left)",
                                "Right side (server's right)",
                                "Directly in front at arm's length",
                                "It doesn't matter as long as the drink is cold"
                            ],
                            expectedAnswer: "Right side (server's right)"
                        },
                        {
                            type: "radio",
                            label: "What should you do if a customer hasn't started their martini after a few minutes?",
                            options: [
                                { value: "a", label: "Nothing—they ordered it" },
                                { value: "b", label: "Offer a fresh martini if it has warmed above 35°F" },
                                { value: "c", label: "Remove the glass immediately" },
                                { value: "d", label: "Suggest they drink it faster" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        }
    ],
    miniQuiz: [
        {
            id: "q1",
            question: "What is the classic ratio for a martini?",
            options: [
                { value: "a", label: "1:1 gin to vermouth" },
                { value: "b", label: "2.5:1 to 3:1 gin to vermouth" },
                { value: "c", label: "5:1 gin to vermouth" },
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
                { value: "a", label: "Room temperature (68-72°F)" },
                { value: "b", label: "Cold (45-50°F)" },
                { value: "c", label: "Very cold (28-32°F)" },
                { value: "d", label: "Frozen (-4°F or below)" }
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
                { value: "a", label: "10-15 seconds" },
                { value: "b", label: "30-45 seconds" },
                { value: "c", label: "60+ seconds" },
                { value: "d", label: "Until ice completely melts" }
            ],
            correctAnswer: "b",
            topic: "martini-preparation",
            skill: "knowledge",
            difficulty: "easy"
        },
        {
            id: "q4",
            question: "What is a martini garnished with a pickled onion called?",
            options: [
                { value: "a", label: "Martini Onion" },
                { value: "b", label: "Gibson" },
                { value: "c", label: "Savory Martini" },
                { value: "d", label: "Dirty Martini" }
            ],
            correctAnswer: "b",
            topic: "martini-variations",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q5",
            question: "Why is large ice preferred for stirring a martini?",
            options: [
                { value: "a", label: "It looks more impressive" },
                { value: "b", label: "It's easier to handle" },
                { value: "c", label: "It chills efficiently without over-diluting" },
                { value: "d", label: "It doesn't affect the drink at all" }
            ],
            correctAnswer: "c",
            topic: "martini-technique",
            skill: "understanding",
            difficulty: "medium"
        },
        {
            id: "q6",
            question: "How often should opened dry vermouth be replaced?",
            options: [
                { value: "a", label: "Every 6 months" },
                { value: "b", label: "Every 2-3 months" },
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
            question: "What should you do if a customer doesn't start their martini immediately after service?",
            options: [
                { value: "a", label: "Nothing—they ordered it" },
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
            question: "Which spirit choice showcases botanical complexity and aromatics?",
            options: [
                { value: "a", label: "Vodka—it's the only true spirit for martinis" },
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
            question: "When a customer orders a 'dirty martini,' what do they typically mean?",
            options: [
                { value: "a", label: "A martini made with poor technique" },
                { value: "b", label: "A martini prepared with olive brine included" },
                { value: "c", label: "A martini with more vermouth" },
                { value: "d", label: "A martini made with vodka instead of gin" }
            ],
            correctAnswer: "b",
            topic: "customer-preferences",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q10",
            question: "What is the primary benefit of chilling glassware for 15+ minutes?",
            options: [
                { value: "a", label: "It prevents fingerprints on the glass" },
                { value: "b", label: "It allows the drink to maintain proper temperature" },
                { value: "c", label: "It makes the glass less likely to break" },
                { value: "d", label: "It's just a tradition with no practical benefit" }
            ],
            correctAnswer: "b",
            topic: "service-standards",
            skill: "understanding",
            difficulty: "easy"
        }
    ]
};

export default martiniBasicsGuide;
