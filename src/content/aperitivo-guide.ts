import type { InteractiveGuideContent } from "@/types/activity";

/**
 * APERITIVO GUIDE - PREMIUM EDITION WITH GRAPHICS
 *
 * Enterprise-grade training guide for fine dining aperitivo service
 * Design Philosophy: Refined luxury with sophisticated graphics, diagrams, and color
 * Target: Premium restaurant group standard (Michelin-star hospitality)
 *
 * Structure: Bite-sized sections with visual diagrams and exercises after each
 */

export const aperitivoGuide: InteractiveGuideContent = {
    type: "interactive-guide",
    tableOfContents: true,
    sections: [
        {
            id: "intro",
            stepNumber: 1,
            title: "The Ritual of Aperitivo",
            icon: "🍷",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1.25rem; font-weight: 300; margin: 0 0 2rem 0; color: #1a202c;">
                        Aperitivo is not simply a drink. It is an invitation.
                    </p>

                    <p style="font-size: 1rem; margin: 0 0 2rem 0; color: #5e6b7d;">
                        In Italian tradition, aperitivo means "to open"—it opens the appetite and opens the evening. At Contessa, aperitivo service sets the tone for the entire dining experience. A well-executed aperitivo welcomes guests, prepares their palate, and signals your establishment's commitment to hospitality and excellence.
                    </p>

                    <!-- THE APERITIVO CEREMONY DIAGRAM -->
                    <div style="background: linear-gradient(135deg, #1b4d3e 0%, #0f3026 100%); border-radius: 12px; padding: 2rem; margin: 2rem 0; color: white;">
                        <p style="text-align: center; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 1.5rem 0; font-weight: 600; opacity: 0.9;">The Ceremony Flow</p>

                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; text-align: center;">
                            <div>
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">👋</div>
                                <p style="font-size: 0.85rem; margin: 0; font-weight: 500;">Welcome</p>
                                <p style="font-size: 0.75rem; margin: 0.5rem 0 0 0; opacity: 0.85;">Greet with warmth</p>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: center;">
                                <div style="font-size: 1.5rem; opacity: 0.6;">→</div>
                            </div>
                            <div>
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🥂</div>
                                <p style="font-size: 0.85rem; margin: 0; font-weight: 500;">Suggest</p>
                                <p style="font-size: 0.75rem; margin: 0.5rem 0 0 0; opacity: 0.85;">Present options</p>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: center;">
                                <div style="font-size: 1.5rem; opacity: 0.6;">→</div>
                            </div>
                            <div>
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
                                <p style="font-size: 0.85rem; margin: 0; font-weight: 500;">Serve</p>
                                <p style="font-size: 0.75rem; margin: 0.5rem 0 0 0; opacity: 0.85;">Perfect presentation</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "A chilled glass of Prosecco with a lemon twist—elegant and refreshing",
                "A Negroni Sbagliato with ice and a citrus expression—balanced and aperitif-appropriate",
                "A Spritz Contessa—their signature aperitivo cocktail",
                "Simply-prepared vermouth on ice with a citrus expression"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Understanding Aperitivo",
                    instructions: "What is the primary purpose of aperitivo service?",
                    items: [
                        {
                            type: "radio",
                            label: "Aperitivo primarily serves to:",
                            options: [
                                { value: "a", label: "Get guests intoxicated before dinner" },
                                { value: "b", label: "Open the appetite and set the tone for the meal" },
                                { value: "c", label: "Keep guests occupied while waiting for a table" },
                                { value: "d", label: "Sell the most expensive drinks on the menu" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "sparkling",
            stepNumber: 2,
            title: "Sparkling Wines & Champagne",
            icon: "✨",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Sparkling wines are the foundation of aperitivo service. They are elegant, approachable, and set an immediate tone of celebration.
                    </p>

                    <!-- SPARKLING WINE COMPARISON MATRIX -->
                    <div style="background: linear-gradient(to right, #fef9f3, #f5f1e8); border-radius: 12px; padding: 1.5rem; margin: 2rem 0; border-left: 4px solid #8b1c31;">
                        <p style="text-align: center; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 1.5rem 0; font-weight: 600; color: #8b1c31;">Sparkling Wine Guide</p>

                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem;">
                            <!-- Prosecco -->
                            <div style="background: linear-gradient(135deg, #f9e5b8 0%, #f5d5a8 100%); padding: 1rem; border-radius: 8px; color: #5d4e37;">
                                <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #8b6f47;">🍇 Prosecco</p>
                                <p style="font-size: 0.85rem; margin: 0 0 0.75rem 0; font-weight: 500;">Approachable & Light</p>
                                <p style="font-size: 0.75rem; margin: 0 0 0.5rem 0; line-height: 1.4;">Italian, fruity, celebratory. Perfect for first-time guests.</p>
                                <p style="font-size: 0.7rem; margin: 0.5rem 0 0 0; font-style: italic; opacity: 0.8;">45-50°F</p>
                            </div>

                            <!-- Champagne -->
                            <div style="background: linear-gradient(135deg, #fff5cc 0%, #f9e9b8 100%); padding: 1rem; border-radius: 8px; color: #5d4e37; border: 2px solid #d4a574;">
                                <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #8b6f47;">👑 Champagne</p>
                                <p style="font-size: 0.85rem; margin: 0 0 0.75rem 0; font-weight: 500;">Complex & Refined</p>
                                <p style="font-size: 0.75rem; margin: 0 0 0.5rem 0; line-height: 1.4;">Elegant, mineral-forward. Ideal for palate preparation.</p>
                                <p style="font-size: 0.7rem; margin: 0.5rem 0 0 0; font-style: italic; opacity: 0.8;">45-48°F</p>
                            </div>

                            <!-- Rosé -->
                            <div style="background: linear-gradient(135deg, #f5d5d5 0%, #ead4d4 100%); padding: 1rem; border-radius: 8px; color: #5d4e37;">
                                <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #c97777;">🌸 Rosé Sparkling</p>
                                <p style="font-size: 0.85rem; margin: 0 0 0.75rem 0; font-weight: 500;">Delicate & Elegant</p>
                                <p style="font-size: 0.75rem; margin: 0 0 0.5rem 0; line-height: 1.4;">Bridges white & red. Sophisticated charm.</p>
                                <p style="font-size: 0.7rem; margin: 0.5rem 0 0 0; font-style: italic; opacity: 0.8;">45-50°F</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Prosecco: Accessible, celebratory, perfect for guests new to fine dining",
                "Champagne Brut: Complex minerality, ideal for palate preparation",
                "Rosé Sparkling: Elegant and distinctly feminine—excellent for diverse guests"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Sparkling Wine Selection",
                    instructions: "Choose the best option for each scenario.",
                    items: [
                        {
                            type: "radio",
                            label: "A first-time guest at Contessa asks for something 'light and celebratory.' What would you suggest?",
                            options: [
                                { value: "a", label: "Full-bodied Burgundy" },
                                { value: "b", label: "Prosecco, well-chilled" },
                                { value: "c", label: "A cocktail with vodka" },
                                { value: "d", label: "A dessert wine" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "At what temperature should Champagne be served for aperitivo?",
                            options: [
                                "35-40°F",
                                "45-48°F",
                                "50-55°F",
                                "Room temperature (68°F)"
                            ],
                            expectedAnswer: "45-48°F"
                        }
                    ]
                }
            ]
        },
        {
            id: "vermouth",
            stepNumber: 3,
            title: "Vermouth & Fortified Wines",
            icon: "🍯",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Vermouth and fortified wines are the backbone of classic aperitivo service. They are herbaceous, complex, and deeply rooted in Italian tradition.
                    </p>

                    <!-- THE VERMOUTH SPECTRUM -->
                    <div style="background: linear-gradient(90deg, #f9f3e6 0%, #e8dcc8 100%); border-radius: 12px; padding: 2rem; margin: 2rem 0; border-left: 4px solid #1b4d3e;">
                        <p style="text-align: center; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 1.5rem 0; font-weight: 600; color: #1b4d3e;">Light to Rich Spectrum</p>

                        <!-- Gradient bar visualization -->
                        <div style="height: 8px; background: linear-gradient(90deg, #f5f0e8 0%, #e8d4b8 25%, #d4a574 50%, #b8843a 75%, #8b5a2b 100%); border-radius: 4px; margin-bottom: 1.5rem;"></div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem;">
                            <!-- Dry Vermouth -->
                            <div style="background: white; padding: 1rem; border-radius: 8px; border-top: 3px solid #f5f0e8;">
                                <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #8b7355;">Dry Vermouth (Bianco)</p>
                                <p style="font-size: 0.9rem; margin: 0.5rem 0; font-weight: 500; color: #5e6b7d;">Light • Herbaceous</p>
                                <p style="font-size: 0.8rem; margin: 0 0 0.5rem 0; line-height: 1.5; color: #5e6b7d;">Pale color, crisp. Perfect with soda and citrus.</p>
                                <p style="font-size: 0.7rem; font-style: italic; color: #8b7355;">Cocchi • Noilly Prat</p>
                            </div>

                            <!-- Mid-Range -->
                            <div style="background: white; padding: 1rem; border-radius: 8px; border-top: 3px solid #d4a574; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                                <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #8b6f47;">Lillet & Quinquina</p>
                                <p style="font-size: 0.9rem; margin: 0.5rem 0; font-weight: 500; color: #5e6b7d;">Refined • Botanical</p>
                                <p style="font-size: 0.8rem; margin: 0 0 0.5rem 0; line-height: 1.5; color: #5e6b7d;">Sophisticated, quinine notes. Elegant aperitivo.</p>
                                <p style="font-size: 0.7rem; font-style: italic; color: #8b6f47;">Lillet Blanc</p>
                            </div>

                            <!-- Sweet Vermouth -->
                            <div style="background: white; padding: 1rem; border-radius: 8px; border-top: 3px solid #8b5a2b;">
                                <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #6b4423;">Sweet Vermouth (Rosso)</p>
                                <p style="font-size: 0.9rem; margin: 0.5rem 0; font-weight: 500; color: #5e6b7d;">Rich • Warming</p>
                                <p style="font-size: 0.8rem; margin: 0 0 0.5rem 0; line-height: 1.5; color: #5e6b7d;">Deep color, aromatic. Served neat or in cocktails.</p>
                                <p style="font-size: 0.7rem; font-style: italic; color: #6b4423;">Carpano • Martini Rosso</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Cocchi Bianco on ice with a lemon twist—crisp and inviting",
                "Carpano Antica Formula served neat or on ice—warming and complex",
                "Lillet Blanc with cucumber and ice—elegant and refreshing"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Fortified Wine Knowledge",
                    instructions: "Select the correct description.",
                    items: [
                        {
                            type: "radio",
                            label: "Dry vermouth (Bianco) is best served:",
                            options: [
                                { value: "a", label: "At room temperature" },
                                { value: "b", label: "On ice with a citrus twist or splash of soda" },
                                { value: "c", label: "Warm, like a digestif" },
                                { value: "d", label: "Mixed with heavy spirits" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "signature-cocktails",
            stepNumber: 4,
            title: "Contessa Signature Cocktails",
            icon: "🍸",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 2rem 0; color: #5e6b7d;">
                        Contessa's signature aperitivo cocktails blend classic Italian tradition with contemporary refinement. These drinks represent the house style and should be mastered by all bar staff.
                    </p>

                    <!-- SIGNATURE COCKTAILS CARDS -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
                        <!-- Spritz Contessa -->
                        <div style="background: linear-gradient(135deg, #fff8d6 0%, #fef3b8 100%); border-radius: 12px; padding: 1.5rem; border-left: 4px solid #f4d35e;">
                            <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #6b5a00;">🍊 Spritz Contessa</p>
                            <p style="font-size: 0.9rem; margin: 0 0 1rem 0; font-weight: 500; color: #5e6b7d;">Light • Refreshing</p>
                            <div style="background: white; border-radius: 6px; padding: 0.75rem; margin-bottom: 1rem; font-size: 0.8rem;">
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Prosecco</strong> — base</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Aperol</strong> — color & flavor</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Soda water</strong> — refreshment</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Citrus</strong> — expression</p>
                            </div>
                            <p style="font-size: 0.75rem; color: #5e6b7d; line-height: 1.5; margin: 0;">The quintessential Contessa aperitivo. House signature. Large wine glass with ice.</p>
                        </div>

                        <!-- Negroni Sbagliato -->
                        <div style="background: linear-gradient(135deg, #f5e6d3 0%, #ead4b8 100%); border-radius: 12px; padding: 1.5rem; border-left: 4px solid #8b1c31; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
                            <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #8b4f3b;">🍋 Negroni Sbagliato</p>
                            <p style="font-size: 0.9rem; margin: 0 0 1rem 0; font-weight: 500; color: #5e6b7d;">Balanced • Italian</p>
                            <div style="background: white; border-radius: 6px; padding: 0.75rem; margin-bottom: 1rem; font-size: 0.8rem;">
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Campari</strong> — bitter notes</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Sweet vermouth</strong> — depth</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Prosecco</strong> — fizz (not gin!)</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Ice & orange</strong> — garnish</p>
                            </div>
                            <p style="font-size: 0.75rem; color: #5e6b7d; line-height: 1.5; margin: 0;">The "mistaken Negroni." Distinctive, distinctly aperitivo. Express citrus oil.</p>
                        </div>

                        <!-- Garibaldi -->
                        <div style="background: linear-gradient(135deg, #ffebe1 0%, #f5d9c8 100%); border-radius: 12px; padding: 1.5rem; border-left: 4px solid #8b1c31;">
                            <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.5rem 0; font-weight: 700; color: #8b5a3b;">🍊 Garibaldi</p>
                            <p style="font-size: 0.9rem; margin: 0 0 1rem 0; font-weight: 500; color: #5e6b7d;">Simple • Bright</p>
                            <div style="background: white; border-radius: 6px; padding: 0.75rem; margin-bottom: 1rem; font-size: 0.8rem;">
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Campari</strong> — boldness</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Fresh OJ</strong> — citrus & sweetness</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>Ice</strong> — chill & dilution</p>
                                <p style="margin: 0.25rem 0; color: #5e6b7d;"><strong>No other spirits</strong></p>
                            </div>
                            <p style="font-size: 0.75rem; color: #5e6b7d; line-height: 1.5; margin: 0;">Pure and elegant. Perfect for guests seeking light, flavorful simplicity.</p>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Spritz Contessa: The house signature, light and welcoming",
                "Negroni Sbagliato: Balanced and Prosecco-forward, distinctly aperitivo",
                "Garibaldi: Simple, bright, and perfectly aperitif-appropriate"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "House Cocktail Recognition",
                    instructions: "Identify the correct cocktail.",
                    items: [
                        {
                            type: "radio",
                            label: "Which Contessa signature cocktail is made with Prosecco, Aperol, and soda water?",
                            options: [
                                { value: "a", label: "Garibaldi" },
                                { value: "b", label: "Spritz Contessa" },
                                { value: "c", label: "Negroni Sbagliato" },
                                { value: "d", label: "Classic Negroni" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "The Negroni Sbagliato is known as the 'mistaken' Negroni because:",
                            options: [
                                "It was invented by accident",
                                "Prosecco is used instead of gin",
                                "It uses sweet vermouth instead of dry",
                                "It was popularized in Palermo, not Rome"
                            ],
                            expectedAnswer: "Prosecco is used instead of gin"
                        }
                    ]
                }
            ]
        },
        {
            id: "amari",
            stepNumber: 5,
            title: "Amari & Digestifs",
            icon: "🌿",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Amari are Italian herbal liqueurs—complex, bitter, aromatic. While primarily digestifs, certain amari work wonderfully as aperitivo bitters or after-dinner sips. Contessa carries 30+ varieties.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Fernet Branca</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            The quintessential amaro. Dark, herbal, intensely complex. Traditionally served ice-cold as a digestif. A shot of Fernet after dinner is a marker of authentic Italian hospitality.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Amaro Montenegro</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Slightly lighter and more approachable than Fernet. Complex, smooth, and versatile. Can be served on ice with a citrus twist or neat as a digestif.
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Amaro Nardini</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            A lighter amaro with fruity and herbal notes. More aperitif-appropriate than Fernet. Serve on ice for a refreshing and sophisticated aperitivo experience.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Fernet Branca served ice-cold—a traditional digestif after dinner",
                "Amaro Montenegro on ice with a twist—lighter and more versatile",
                "Amaro Nardini with fresh citrus—aperitivo-appropriate and elegant"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Amari Knowledge",
                    instructions: "Select the correct description.",
                    items: [
                        {
                            type: "radio",
                            label: "Fernet Branca is traditionally served as:",
                            options: [
                                { value: "a", label: "An aperitivo cocktail base" },
                                { value: "b", label: "A digestif, served ice-cold" },
                                { value: "c", label: "A cooking ingredient" },
                                { value: "d", label: "A mixer for wine" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "pairing",
            stepNumber: 6,
            title: "Aperitivo Pairing with Food",
            icon: "🥘",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Aperitivo is not served in a vacuum. At Contessa, aperitivo service often includes light snacks or amuse-bouches. Understanding how your drinks pair with these bites elevates the entire experience.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Prosecco & Bubbles</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Pair with light bites: cured meats, fresh cheeses, vegetable crudités. The bubbles cleanse the palate and refresh between bites.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Dry Vermouth & Fortified</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Excellent with salty, umami-forward snacks: nuts, olives, anchovy-based bites, aged cheeses. The herbal notes complement savory flavors beautifully.
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Spritz Cocktails</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Pair with a variety of small bites. The light, refreshing nature of spritzes works with everything from fish preparations to vegetable antipasti. Their versatility is their strength.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Prosecco with prosciutto and fresh mozzarella",
                "Dry vermouth with marinated olives and almonds",
                "Spritz Contessa with grilled vegetable skewers and fresh fish crostini"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Aperitivo Pairing",
                    instructions: "Select the best pairing.",
                    items: [
                        {
                            type: "radio",
                            label: "What is an ideal pairing with dry vermouth?",
                            options: [
                                { value: "a", label: "Chocolate and dessert bites" },
                                { value: "b", label: "Olives, nuts, and aged cheeses" },
                                { value: "c", label: "Sweet fruits and honey" },
                                { value: "d", label: "Heavy cream-based appetizers" }
                            ],
                            expectedAnswer: "b"
                        }
                    ]
                }
            ]
        },
        {
            id: "service",
            stepNumber: 7,
            title: "Aperitivo Service Excellence",
            icon: "👔",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        Great aperitivo service is about timing, temperature, and genuine hospitality. These details separate fine dining from ordinary service.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Timing & Placement</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Offer aperitivo immediately upon seating. Don't wait for the aperitivo order—present options and suggest the house signature. Present the drink from the guest's right side. Ensure the glass is properly chilled and the drink is at optimal temperature.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Temperature Precision</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Chill all glasses. Serve Champagne and Prosecco at 45-50°F. Serve vermouth on ice (not diluted, but properly chilled). Use large ice cubes or ice spears—small ice dilutes aperitivo drinks too quickly.
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Engagement & Knowledge</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Share knowledge about the house cocktails. Explain the origin of the Negroni Sbagliato or why Prosecco makes an aperitivo shine. Engage genuinely with guests. When someone orders an aperitivo, they are choosing to stay longer and experience your hospitality—honor that choice.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Offer aperitivo within 2-3 minutes of seating",
                "Present the Spritz Contessa as the signature option",
                "Serve all drinks at proper temperature with appropriate glassware",
                "Share the story of the Negroni Sbagliato when suggesting it"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Service Best Practices",
                    instructions: "Select the correct service procedure.",
                    items: [
                        {
                            type: "radio",
                            label: "When should aperitivo be offered?",
                            options: [
                                { value: "a", label: "After the entrée is ordered" },
                                { value: "b", label: "Immediately upon seating" },
                                { value: "c", label: "Only if the guest asks" },
                                { value: "d", label: "Before the wine list is presented" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "Which ice is best for aperitivo service?",
                            options: [
                                "Small ice cubes",
                                "Crushed ice",
                                "Large ice cubes or ice spears",
                                "No ice—neat service only"
                            ],
                            expectedAnswer: "Large ice cubes or ice spears"
                        }
                    ]
                }
            ]
        },
        {
            id: "expertise",
            stepNumber: 8,
            title: "Building Your Aperitivo Expertise",
            icon: "🎓",
            explanation: `
                <div style="font-family: Georgia, serif; line-height: 1.8; color: #1a202c;">
                    <p style="font-size: 1rem; margin: 0 0 1.5rem 0; color: #5e6b7d;">
                        True aperitivo expertise comes from continuous learning and tasting. At Contessa, you have access to one of the finest aperitivo programs in the city—use it.
                    </p>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Tasting Protocol</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Taste each spirit and fortified wine at the house. Understand their color, aroma, and flavor profile. Know the difference between Prosecco and Champagne by taste, not just by price. This hands-on knowledge translates into confident service and genuine recommendations.
                        </p>
                    </div>

                    <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e2ddd5;">
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Story & Context</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Learn the stories behind the drinks. Why is it called "Sbagliato"? What region of Italy does Negroni come from? What does "Garibaldi" represent? These narratives engage guests and elevate your service from transactional to transformative.
                        </p>
                    </div>

                    <div>
                        <p style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.15em; color: #8b1c31; margin: 0 0 0.75rem 0; font-weight: 600;">Continuous Excellence</p>
                        <p style="font-size: 1rem; margin: 0; color: #5e6b7d;">
                            Aperitivo service is where guests form their first impression. Treat every aperitivo order as an opportunity to set the tone for the entire evening. Excellence in aperitivo service is excellence in hospitality itself.
                        </p>
                    </div>
                </div>
            `,
            examples: [
                "Taste and learn the distinctive profiles of Prosecco vs. Champagne",
                "Know the story of each signature cocktail at Contessa",
                "Recommend aperitivo with genuine knowledge and passion",
                "Treat every aperitivo service as the opening to a memorable evening"
            ],
            showExamples: false,
            exercises: [
                {
                    title: "Aperitivo Knowledge",
                    instructions: "Select the best statement.",
                    items: [
                        {
                            type: "radio",
                            label: "Which practice best develops aperitivo expertise?",
                            options: [
                                { value: "a", label: "Only memorizing price points" },
                                { value: "b", label: "Tasting each spirit and learning their stories" },
                                { value: "c", label: "Following recipes without variation" },
                                { value: "d", label: "Serving what sells the most" }
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
            question: "What does the word 'aperitivo' mean?",
            options: [
                { value: "a", label: "A type of wine region" },
                { value: "b", label: "To open (the appetite)" },
                { value: "c", label: "An Italian grape variety" },
                { value: "d", label: "A digestive aid" }
            ],
            correctAnswer: "b",
            topic: "aperitivo-basics",
            skill: "knowledge",
            difficulty: "easy"
        },
        {
            id: "q2",
            question: "At what temperature should Champagne be served for aperitivo?",
            options: [
                { value: "a", label: "35-40°F" },
                { value: "b", label: "45-48°F" },
                { value: "c", label: "Room temperature (68°F)" },
                { value: "d", label: "Slightly warm (55-60°F)" }
            ],
            correctAnswer: "b",
            topic: "sparkling-wines",
            skill: "knowledge",
            difficulty: "easy"
        },
        {
            id: "q3",
            question: "What is the Spritz Contessa made with?",
            options: [
                { value: "a", label: "Gin, vermouth, and bitters" },
                { value: "b", label: "Vodka, cranberry, and lime" },
                { value: "c", label: "Prosecco, Aperol, and soda water" },
                { value: "d", label: "Campari, sweet vermouth, and Prosecco" }
            ],
            correctAnswer: "c",
            topic: "house-cocktails",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q4",
            question: "Why is the Negroni Sbagliato called the 'mistaken' Negroni?",
            options: [
                { value: "a", label: "Because it uses wrong proportions" },
                { value: "b", label: "Because Prosecco is used instead of gin" },
                { value: "c", label: "Because it was invented by accident in Milan" },
                { value: "d", label: "Because it contains too much vermouth" }
            ],
            correctAnswer: "b",
            topic: "house-cocktails",
            skill: "understanding",
            difficulty: "medium"
        },
        {
            id: "q5",
            question: "What is an ideal food pairing with dry vermouth?",
            options: [
                { value: "a", label: "Chocolate mousse and desserts" },
                { value: "b", label: "Sweet fruits and honey cakes" },
                { value: "c", label: "Olives, nuts, and aged cheeses" },
                { value: "d", label: "Cream-based pasta dishes" }
            ],
            correctAnswer: "c",
            topic: "pairing",
            skill: "understanding",
            difficulty: "medium"
        },
        {
            id: "q6",
            question: "When should aperitivo be offered to guests?",
            options: [
                { value: "a", label: "After they order an entrée" },
                { value: "b", label: "Immediately upon seating" },
                { value: "c", label: "Only if they specifically request one" },
                { value: "d", label: "At the end of the meal" }
            ],
            correctAnswer: "b",
            topic: "service",
            skill: "professional-judgment",
            difficulty: "easy"
        },
        {
            id: "q7",
            question: "Which amaro is traditionally served ice-cold as a digestif after dinner?",
            options: [
                { value: "a", label: "Amaro Nardini" },
                { value: "b", label: "Amaro Montenegro" },
                { value: "c", label: "Fernet Branca" },
                { value: "d", label: "Aperol" }
            ],
            correctAnswer: "c",
            topic: "amari",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q8",
            question: "What is the primary purpose of aperitivo service?",
            options: [
                { value: "a", label: "To sell the most expensive drinks" },
                { value: "b", label: "To get guests intoxicated before dinner" },
                { value: "c", label: "To open the appetite and set the tone for the meal" },
                { value: "d", label: "To keep guests occupied while waiting" }
            ],
            correctAnswer: "c",
            topic: "aperitivo-basics",
            skill: "understanding",
            difficulty: "easy"
        },
        {
            id: "q9",
            question: "Contessa carries approximately how many amaro varieties?",
            options: [
                { value: "a", label: "5-10" },
                { value: "b", label: "15-20" },
                { value: "c", label: "30+" },
                { value: "d", label: "50+" }
            ],
            correctAnswer: "c",
            topic: "amari",
            skill: "knowledge",
            difficulty: "easy"
        },
        {
            id: "q10",
            question: "What type of ice is best for aperitivo service?",
            options: [
                { value: "a", label: "Small ice cubes" },
                { value: "b", label: "Crushed ice" },
                { value: "c", label: "Large ice cubes or ice spears" },
                { value: "d", label: "No ice—serve all drinks neat" }
            ],
            correctAnswer: "c",
            topic: "service",
            skill: "knowledge",
            difficulty: "easy"
        }
    ]
};

export default aperitivoGuide;
