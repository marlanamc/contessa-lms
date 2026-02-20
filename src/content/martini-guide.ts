import type { InteractiveGuideContent } from "@/types/activity";

/**
 * MARTINI SERVICE GUIDE - FOR SERVERS & SERVER ASSISTANTS
 *
 * Enterprise-grade training for front-of-house staff on martini service
 * Design Philosophy: Clear, practical guidance with decision trees
 * Target: Servers and server assistants (bartenders have separate advanced training)
 *
 * Focus: Asking the right questions to take the perfect order
 * Structure: Decision flows, guest scenarios, and service standards
 */

export const martiniGuide: InteractiveGuideContent = {
    type: "interactive-guide",
    tableOfContents: true,
    miniQuiz: [
        {
            id: "q1",
            question: "When a guest orders 'a martini' without specifying details, what is your primary responsibility?",
            options: [
                { value: "a", label: "Tell the bartender 'one martini' and move on" },
                { value: "b", label: "Understand their preferences and communicate them clearly to ensure accuracy" },
                { value: "c", label: "Serve them the house default martini" },
                { value: "d", label: "Ask what they usually drink" }
            ],
            correctAnswer: "b",
            explanation: "Your role is to elicit the guest's preferences through the decision tree and communicate them clearly to the bartender. This ensures the drink reflects their taste perfectly.",
            topic: "martini-service",
            skill: "recognition",
            skillTag: "server-responsibility",
            difficulty: "easy"
        },
        {
            id: "q2",
            question: "In the martini decision tree, what should be your FIRST question?",
            options: [
                { value: "a", label: "Stirred or on the rocks?" },
                { value: "b", label: "Gin or vodka?" },
                { value: "c", label: "How dry?" },
                { value: "d", label: "Olive or twist?" }
            ],
            correctAnswer: "b",
            explanation: "The spirit base (gin or vodka) is the foundation of the martini and should be established first. This is the most fundamental choice.",
            topic: "martini-service",
            skill: "recognition",
            skillTag: "decision-tree-order",
            difficulty: "easy"
        },
        {
            id: "q3",
            question: "A guest asks for a 'clean and elegant' aperitivo martini. Which spirit base would you suggest?",
            options: [
                { value: "a", label: "Gin—it has complex botanicals" },
                { value: "b", label: "Vodka—it's neutral and refined" },
                { value: "c", label: "Either, it doesn't matter" },
                { value: "d", label: "A martini isn't the right choice" }
            ],
            correctAnswer: "b",
            explanation: "Vodka martinis are clean and elegant, with a neutral spirit that lets vermouth and garnish shine. Gin brings more botanical complexity.",
            topic: "martini-service",
            skill: "usage",
            skillTag: "spirit-base-matching",
            difficulty: "medium"
        },
        {
            id: "q4",
            question: "What does vermouth do in a martini?",
            options: [
                { value: "a", label: "It's optional flavoring" },
                { value: "b", label: "It makes a martini a martini—it's the essential element" },
                { value: "c", label: "It's only used in dry martinis" },
                { value: "d", label: "It's added at the end as a garnish" }
            ],
            correctAnswer: "b",
            explanation: "Vermouth is what transforms chilled gin or vodka into a martini. Without it, it's just a chilled spirit. The question is not whether to use vermouth, but how much.",
            topic: "martini-service",
            skill: "recognition",
            skillTag: "vermouth-role",
            difficulty: "easy"
        },
        {
            id: "q5",
            question: "A guest orders an 'extra dry' martini. What should you communicate to the bartender?",
            options: [
                { value: "a", label: "Martini, standard preparation" },
                { value: "b", label: "Martini, extra dry—minimal vermouth or just a rinse" },
                { value: "c", label: "Martini, no vermouth at all" },
                { value: "d", label: "Martini with extra gin" }
            ],
            correctAnswer: "b",
            explanation: "'Extra dry' means minimal vermouth—just a rinse of the glass or barely perceptible amount. This is for purists who want the spirit to dominate.",
            topic: "martini-service",
            skill: "production",
            skillTag: "vermouth-levels",
            difficulty: "medium"
        },
        {
            id: "q6",
            question: "What is the default temperature/presentation for a martini if the guest doesn't specify?",
            options: [
                { value: "a", label: "On the rocks—it's more refreshing" },
                { value: "b", label: "Shaken with ice" },
                { value: "c", label: "Stirred and up—the classic default" },
                { value: "d", label: "It depends on the bartender's preference" }
            ],
            correctAnswer: "c",
            explanation: "The classic martini is stirred in the mixing glass with ice, then strained into a coupe or martini glass without ice (stirred and up). This is the elegant, default presentation.",
            topic: "martini-service",
            skill: "recognition",
            skillTag: "temperature-default",
            difficulty: "medium"
        },
        {
            id: "q7",
            question: "A guest wants a martini that is 'bright and citrusy.' Which garnish would you suggest?",
            options: [
                { value: "a", label: "Olive—herbaceous and traditional" },
                { value: "b", label: "Lemon twist—bright and aromatic" },
                { value: "c", label: "Multiple olives" },
                { value: "d", label: "The garnish doesn't matter much" }
            ],
            correctAnswer: "b",
            explanation: "A lemon twist (expressed over the drink) releases citrus oils that add brightness and aroma. Olives are more herbaceous and traditional.",
            topic: "martini-service",
            skill: "usage",
            skillTag: "garnish-matching",
            difficulty: "medium"
        },
        {
            id: "q8",
            question: "What's the best approach when a guest says, 'Give me a good martini'?",
            options: [
                { value: "a", label: "Just tell the bartender 'one good martini'" },
                { value: "b", label: "Guide them through the decision tree: 'Gin or vodka?'" },
                { value: "c", label: "Make the martini decision for them" },
                { value: "d", label: "Suggest what you think is best without asking" }
            ],
            correctAnswer: "b",
            explanation: "When guests are vague, guide them gently through the decision tree. Ask gin or vodka first, then follow with vermouth level, temperature, and garnish.",
            topic: "martini-service",
            skill: "production",
            skillTag: "guest-interaction",
            difficulty: "medium"
        },
        {
            id: "q9",
            question: "A regular guest says, 'I'll have my usual martini.' What should you do?",
            options: [
                { value: "a", label: "Just send the order immediately" },
                { value: "b", label: "Confirm their usual (e.g., 'Gin, stirred, up with a twist?') before ordering" },
                { value: "c", label: "Ask them to repeat all their preferences" },
                { value: "d", label: "Guess based on what you remember" }
            ],
            correctAnswer: "b",
            explanation: "Always confirm a guest's 'usual' rather than guessing. This shows you remember them while ensuring accuracy—their preferences may have changed.",
            topic: "martini-service",
            skill: "production",
            skillTag: "regular-guest-handling",
            difficulty: "easy"
        },
        {
            id: "q10",
            question: "Which of these is the clearest way to communicate a martini order to the bartender?",
            options: [
                { value: "a", label: "'One martini'" },
                { value: "b", label: "'Make a good martini'" },
                { value: "c", label: "'Gin martini, dry, up with a twist'" },
                { value: "d", label: "'A martini, but not too much vermouth'" }
            ],
            correctAnswer: "c",
            explanation: "Clear communication includes the spirit base, vermouth level, temperature/presentation, and garnish. 'Gin martini, dry, up with a twist' leaves no ambiguity.",
            topic: "martini-service",
            skill: "production",
            skillTag: "bartender-communication",
            difficulty: "easy"
        }
    ],
    sections: [
        {
            id: "intro",
            stepNumber: 1,
            title: "The Martini: More Than a Drink",
            icon: "🍸",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1.25rem; font-weight: 300; margin: 0 0 2rem 0; color: #1a202c;">
                        The martini is the signature of our guest's taste.
                    </p>

                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        A martini is not just a cocktail—it's a statement. For many guests, it's a ritual they've perfected over decades. Your role as a server is to understand their preferences and communicate them clearly to the bartender. There is no "standard" martini. Each guest has preferences that matter: the spirit choice, the ratio, the temperature, the garnish.
                    </p>

                    <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                        By asking thoughtful questions, you ensure the guest's martini reflects their taste perfectly. This is where exceptional service shines.
                    </p>
                </div>
            `,
            examples: [
                "A guest arrives and orders 'a martini'—but what do they actually want?",
                "Your job: Ask the right questions to unlock their preferences",
                "Communicate clearly to the bartender so the drink is made exactly right",
                "The result: A guest who feels truly understood and cared for"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Understanding Your Role",
                    instructions: "What is your primary responsibility as a server when a guest orders a martini?",
                    items: [
                        {
                            type: "radio",
                            label: "When a guest orders 'a martini,' you should:",
                            options: [
                                { value: "a", label: "Just tell the bartender 'one martini'" },
                                { value: "b", label: "Understand their preferences and communicate them clearly to ensure accuracy" },
                                { value: "c", label: "Suggest what the house makes best" },
                                { value: "d", label: "Make assumptions based on what you think they want" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "decision-tree",
            stepNumber: 2,
            title: "The Martini Decision Tree",
            icon: "🌳",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Use this framework to ask questions in a natural, conversational way. Don't interrogate—guide the conversation naturally based on their responses.
                    </p>

                    <div style="background-color: #fef9f3; border-left: 4px solid #1b4d3e; padding: 1.5rem; margin: 1.5rem 0; border-radius: 8px;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1b4d3e; margin: 0 0 0.75rem 0; font-weight: 600;">The Flow</p>
                        <ol style="margin: 0; padding-left: 1.5rem; color: #5e6b7d;">
                            <li style="margin: 0.75rem 0;"><strong>Spirit Base:</strong> "Gin or vodka?" → This is the foundation. Most guests have a strong preference.</li>
                            <li style="margin: 0.75rem 0;"><strong>Vermouth Preference:</strong> "With or without vermouth?" → This divides martini into two camps.</li>
                            <li style="margin: 0.75rem 0;"><strong>Vermouth Ratio:</strong> "Dry, extra dry, or with a full measure?" → Guides the bartender's hand.</li>
                            <li style="margin: 0.75rem 0;"><strong>Temperature & Texture:</strong> "Stirred and up, or on the rocks?" → Affects presentation and experience.</li>
                            <li style="margin: 0.75rem 0;"><strong>Garnish:</strong> "Olive or twist?" → The final detail that completes the drink.</li>
                        </ol>
                    </div>

                    <p style="font-size: 0.95rem; margin: 1.5rem 0 0 0; color: #5e6b7d; font-style: italic;">
                        The key: Ask one question at a time, listen to their answer, and let the conversation flow naturally. Some guests will have all the answers ready. Others will need guidance. Be responsive.
                    </p>
                </div>
            `,
            examples: [
                "Gin or vodka? — 'Gin, always gin'",
                "With vermouth? — 'Of course, but dry'",
                "How dry? — 'Just a whisper'",
                "Stirred or on the rocks? — 'Stirred and up'",
                "Olive or twist? — 'Twist'"
            ],
            showExamples: true,
            exercises: [
                {
                    title: "Decision Tree Mastery",
                    instructions: "Put the martini questions in the correct order.",
                    items: [
                        {
                            type: "radio",
                            label: "What should be your FIRST question when a guest orders a martini?",
                            options: [
                                { value: "a", label: "Stirred or on the rocks?" },
                                { value: "b", label: "Olive or twist?" },
                                { value: "c", label: "Gin or vodka?" },
                                { value: "d", label: "How dry?" }
                            ],
                            expectedAnswer: "c"
                        }
                    ]
                }
            ]
        },
        {
            id: "spirit-base",
            stepNumber: 3,
            title: "Spirit Base: Gin vs. Vodka",
            icon: "🌾",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        This is the foundation of the martini. Gin and vodka create fundamentally different drinks, and guests often have passionate preferences.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Gin Martini</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            The classic choice. Gin brings botanical complexity, spice, and heritage. A gin martini tastes like a martini—it has personality and presence. Traditional gin drinkers are often purists who prefer the spirit's character to shine through.
                        </p>
                        <p style="font-size: 0.85rem; margin: 0.75rem 0 0 0; color: #1b4d3e; font-style: italic;">
                            House gin: Tanqueray (London Dry style—juniper-forward, classic)
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Vodka Martini</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            The modern choice. Vodka is neutral and clean, letting vermouth and garnish shine. Vodka martini drinkers often prefer a subtle, elegant aperitivo rather than a spirit-forward drink. It's the choice for guests who want refreshment over complexity.
                        </p>
                        <p style="font-size: 0.85rem; margin: 0.75rem 0 0 0; color: #1b4d3e; font-style: italic;">
                            House vodka: Grey Goose (smooth, refined, premium)
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">How to Ask</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            "Gin or vodka martini?" — Simple, direct, conversational. Most guests know immediately which they prefer.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Gin martini—botanical and complex, for the purist",
                "Vodka martini—clean and elegant, for refined simplicity",
                "Some guests always choose the same spirit (loyalty or preference)",
                "Some guests choose based on mood or what pairs well with their meal"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Spirit Base Knowledge",
                    instructions: "Choose the correct pairing.",
                    items: [
                        {
                            type: "radio",
                            label: "A guest says they want something 'clean and elegant' for aperitivo. Which spirit base would you suggest?",
                            options: [
                                { value: "a", label: "Gin—it has complex botanicals" },
                                { value: "b", label: "Vodka—it's neutral and refined" },
                                { value: "c", label: "Either, it doesn't matter" },
                                { value: "d", label: "You should suggest something other than a martini" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "vermouth",
            stepNumber: 4,
            title: "Vermouth: The Essential Element",
            icon: "🍯",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Vermouth is what makes a martini a martini. Without it, it's just chilled gin or vodka. The question is not whether to use vermouth, but how much.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Traditional (6:1 ratio, wet martini)</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Six parts spirit to one part dry vermouth. This is the classic, balanced martini. You can taste both the spirit and the vermouth. It's sophisticated and approachable. Most guests will be happy with this if they don't specify otherwise.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Dry (9:1 or 12:1 ratio)</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Significantly less vermouth. The spirit dominates, with vermouth as a whisper of herbal complexity. Dry martini drinkers are often seeking purity and strength. This is the most common request from experienced martini drinkers.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Extra Dry (barely a rinse)</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Just a rinse of vermouth in the glass, or vermouth not included at all. This is the martini for purists who want to taste the spirit undiluted. Communicate this clearly to the bartender so they know exactly what the guest wants.
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">How to Ask</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            "With vermouth?" If yes, follow with "How dry—traditional, dry, or extra dry?" This guides the bartender's hand precisely.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Traditional (balanced)—perfect for guests who haven't specified a preference",
                "Dry (spirit-forward)—the most common request among experienced martini drinkers",
                "Extra dry (barely a rinse)—for purists who want the spirit to dominate",
                "Note: Some guests may say 'just a whisper' or 'just smell the vermouth bottle'—honor this preference"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Vermouth Knowledge",
                    instructions: "Choose the correct approach.",
                    items: [
                        {
                            type: "radio",
                            label: "A guest asks for an 'extra dry' martini. What should you communicate to the bartender?",
                            options: [
                                { value: "a", label: "One martini, standard preparation" },
                                { value: "b", label: "Martini, extra dry—minimal vermouth or just a rinse" },
                                { value: "c", label: "Martini, no vermouth at all" },
                                { value: "d", label: "Martini with extra gin" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "temperature-texture",
            stepNumber: 5,
            title: "Temperature & Texture: Stirred vs. On the Rocks",
            icon: "❄️",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        The martini's texture and temperature define the experience. This is a significant choice that affects how the guest experiences the drink.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Stirred & Up</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Chilled in the mixing glass, stirred with ice, then strained into a coupe or martini glass without ice. This is the classic, elegant presentation. The drink is extremely cold and perfectly clear. It's sophisticated and demands attention—ideal for aperitivo or when the guest wants an elegant moment.
                        </p>
                        <p style="font-size: 0.85rem; margin: 0.75rem 0 0 0; color: #1b4d3e;">
                            Presentation: Coupe glass, no ice, elegant stem
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">On the Rocks</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Served in a rocks glass over a large cube or several ice cubes. This is more casual, longer-lasting, and refreshing. The ice slowly melts, subtly diluting and softening the drink over time. Perfect for guests who want to linger or prefer a less intense aperitivo.
                        </p>
                        <p style="font-size: 0.85rem; margin: 0.75rem 0 0 0; color: #1b4d3e;">
                            Presentation: Rocks glass, large ice cube(s), casual elegance
                        </p>
                    </div>

                    <div style="background-color: #fef9f3; border-left: 4px solid #8b1c31; padding: 1rem; margin: 1.5rem 0; border-radius: 8px;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Important Note</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            The classic martini is stirred and up. If a guest doesn't specify, this is the default. Always confirm before ordering if you're unsure.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Stirred and up—elegant, cold, classic (default if not specified)",
                "On the rocks—casual, refreshing, easier to sip slowly",
                "Some guests may ask 'how cold?' or 'super cold'—communicate this to the bartender"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Temperature Knowledge",
                    instructions: "Choose the correct default.",
                    items: [
                        {
                            type: "radio",
                            label: "A guest orders a martini but doesn't specify 'stirred' or 'on the rocks.' What should you assume?",
                            options: [
                                { value: "a", label: "On the rocks—it's more refreshing" },
                                { value: "b", label: "Stirred and up—it's the classic default" },
                                { value: "c", label: "Either, it doesn't matter" },
                                { value: "d", label: "You should always ask to be safe" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "garnish",
            stepNumber: 6,
            title: "The Finishing Touch: Garnish",
            icon: "🍋",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        The garnish is not just decoration—it's the final sensory note that completes the martini experience. A twist of citrus adds brightness and aroma. An olive grounds the drink in herbaceous tradition.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Lemon Twist</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            A thin strip of lemon peel (no white pith). It's expressed over the drink, releasing citrus oils that float on the surface. The result is bright, fresh, and aromatic. Twist drinkers prefer brightness and like to smell the citrus with each sip.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Olive</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Usually a Castelvetrano olive (buttery, herbaceous) or a classic green olive. It's the traditional garnish. Olive drinkers are often traditionalists who appreciate the botanical harmony between olive and dry vermouth. Some guests prefer multiple olives (a "dirty martini" when the olive brine is added is different—confirm first).
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">How to Ask</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            "Twist or olive?" — Simple and clear. At the end of your questions, this puts the finishing touch on the order.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Lemon twist—bright and aromatic, for guests who love citrus",
                "Olive—traditional and herbaceous, for the purist",
                "Multiple olives—confirms it's a traditional martini served correctly",
                "Remember: 'Dirty' (with olive brine) is different—only use if explicitly requested"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Garnish Knowledge",
                    instructions: "Choose the correct garnish.",
                    items: [
                        {
                            type: "radio",
                            label: "A guest wants a martini that is 'bright and citrusy.' Which garnish would you suggest?",
                            options: [
                                { value: "a", label: "Olive—herbaceous and traditional" },
                                { value: "b", label: "Lemon twist—bright and aromatic" },
                                { value: "c", label: "Multiple olives" },
                                { value: "d", label: "The garnish doesn't matter" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "guest-scenarios",
            stepNumber: 7,
            title: "Real Guest Scenarios",
            icon: "👥",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Here are real scenarios you'll encounter. Notice how the conversation flows naturally, and how you listen and respond with the right follow-up questions.
                    </p>

                    <div style="margin-bottom: 2rem; padding: 1.5rem; background-color: #f5f5f5; border-radius: 8px;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 600;">Scenario 1: The Loyal Regular</p>
                        <p style="font-size: 1rem; margin: 0 0 0.75rem 0; color: #5e6b7d;">
                            <strong>Guest:</strong> "I'll have my usual martini."
                        </p>
                        <p style="font-size: 1rem; margin: 0 0 0.75rem 0; color: #5e6b7d;">
                            <strong>You:</strong> "Absolutely—gin, stirred, up with a twist. That's correct?" (Confirm their usual rather than guessing.)
                        </p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            <strong>Result:</strong> Speedy service that shows you know them, but verified their preference first.
                        </p>
                    </div>

                    <div style="margin-bottom: 2rem; padding: 1.5rem; background-color: #f5f5f5; border-radius: 8px;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 600;">Scenario 2: The First-Timer</p>
                        <p style="font-size: 1rem; margin: 0 0 0.75rem 0; color: #5e6b7d;">
                            <strong>Guest:</strong> "I've never had a martini. What do you recommend?"
                        </p>
                        <p style="font-size: 1rem; margin: 0 0 0.75rem 0; color: #5e6b7d;">
                            <strong>You:</strong> "I'd suggest starting with gin—it's more traditional and flavorful. Stirred, up, nice and cold. Would you prefer lemon or an olive?" (Start with a suggestion, then ask for preferences on one element at a time.)
                        </p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            <strong>Result:</strong> A confident recommendation that won't overwhelm them with choices.
                        </p>
                    </div>

                    <div style="margin-bottom: 2rem; padding: 1.5rem; background-color: #f5f5f5; border-radius: 8px;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 1rem 0; font-weight: 600;">Scenario 3: The Purist</p>
                        <p style="font-size: 1rem; margin: 0 0 0.75rem 0; color: #5e6b7d;">
                            <strong>Guest:</strong> "Gin martini, very dry, up."
                        </p>
                        <p style="font-size: 1rem; margin: 0 0 0.75rem 0; color: #5e6b7d;">
                            <strong>You:</strong> "Gin, very dry, stirred up. Twist or olive?" (They've already given you the key details—just confirm the garnish.)
                        </p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            <strong>Result:</strong> Efficient service that respects their knowledge.
                        </p>
                    </div>

                    <div style="padding: 1.5rem; background-color: #f5f5f3; border-left: 4px solid #1b4d3e; border-radius: 8px;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #1b4d3e; margin: 0 0 0.75rem 0; font-weight: 600;">Key Principle</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Listen more than you talk. If a guest has clear preferences, don't ask unnecessary questions. If they're uncertain, guide them gently through the decision tree. Every guest is different.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Scenario 1: Confirm their usual to show you remember while ensuring accuracy",
                "Scenario 2: Offer guidance to first-timers without overwhelming them with choices",
                "Scenario 3: Respect purists—they know what they want, just confirm the final detail",
                "Scenario 4: Listen—if a guest has specific preferences, follow their lead"
            ],
            showExamples: true,
            exercises: [
                {
                    title: "Scenario Handling",
                    instructions: "Choose the best response.",
                    items: [
                        {
                            type: "radio",
                            label: "A guest says, 'Give me a good martini.' What should you do?",
                            options: [
                                { value: "a", label: "Just tell the bartender 'one good martini'" },
                                { value: "b", label: "Ask: 'Gin or vodka?' and guide them through the decision tree" },
                                { value: "c", label: "Make the martini decision for them" },
                                { value: "d", label: "Suggest what you think is best without asking" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "communication",
            stepNumber: 8,
            title: "Communicating with the Bartender",
            icon: "📝",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Once you understand the guest's preferences, you must communicate them clearly and completely to the bartender. Precision matters. The bartender will execute exactly what you've communicated.
                    </p>

                    <div style="background-color: #fef9f3; border-left: 4px solid #8a6a00; padding: 1.5rem; margin: 1.5rem 0; border-radius: 8px;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8a6a00; margin: 0 0 0.75rem 0; font-weight: 600;">The Standard Format</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            "Gin martini, dry, up with a twist" — Clear, specific, complete.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">What to Include</p>
                        <ul style="margin: 0; padding-left: 1.5rem; color: #5e6b7d;">
                            <li style="margin: 0.5rem 0;">Spirit base (gin or vodka)</li>
                            <li style="margin: 0.5rem 0;">Vermouth level (dry, extra dry, traditional)</li>
                            <li style="margin: 0.5rem 0;">Temperature/presentation (up, on the rocks)</li>
                            <li style="margin: 0.5rem 0;">Garnish (twist, olive)</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Order Examples</p>
                        <p style="font-size: 0.95rem; margin: 0.5rem 0; color: #5e6b7d; font-family: monospace; background-color: #f5f5f5; padding: 0.75rem;">
                            "Vodka martini, extra dry, up with a twist"
                        </p>
                        <p style="font-size: 0.95rem; margin: 0.5rem 0; color: #5e6b7d; font-family: monospace; background-color: #f5f5f5; padding: 0.75rem;">
                            "Gin martini, dry, on the rocks with an olive"
                        </p>
                        <p style="font-size: 0.95rem; margin: 0.5rem 0; color: #5e6b7d; font-family: monospace; background-color: #f5f5f5; padding: 0.75rem;">
                            "Gin martini, stirred, up with a twist—very cold"
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Pro Tip</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            If a guest has mentioned anything specific or unusual (very cold, just a whisper of vermouth, etc.), repeat it to the bartender. Precision creates perfect drinks.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "'Vodka martini, extra dry, up with a twist' — Clear and complete",
                "'Gin, stirred, up with olive' — Simple, confident",
                "'Gin martini, just a rinse of vermouth, very cold, twist' — Honors specific preferences",
                "'Two martinis: one gin dry up with twist, one vodka on rocks with olive' — Precise for multiple orders"
            ],
            showExamples: true,
            exercises: [
                {
                    title: "Communication Clarity",
                    instructions: "Which communication is clearest for the bartender?",
                    items: [
                        {
                            type: "radio",
                            label: "You take an order for a martini. What should you tell the bartender?",
                            options: [
                                { value: "a", label: "'One martini'" },
                                { value: "b", label: "'Gin martini, dry, up with a twist'" },
                                { value: "c", label: "'Make a good martini'" },
                                { value: "d", label: "'A martini, but not with too much vermouth'" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        }
    ]
};

export default martiniGuide;
