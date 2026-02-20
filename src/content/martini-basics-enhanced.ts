import type { InteractiveGuideContent } from "@/types/activity";

export const martiniBasicsEnhanced: InteractiveGuideContent = {
    type: "interactive-guide",
    tableOfContents: true,
    sections: [
        {
            id: "intro",
            stepNumber: 1,
            title: "The Art of the Martini",
            icon: "🍸",
            explanation: `
                <div class="space-y-4">
                    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-6 rounded-lg">
                        <p class="text-lg font-semibold text-amber-900 mb-2">A Ritual of Elegance</p>
                        <p class="text-gray-700">The martini is not merely a cocktail—it is an experience. In fine dining, every element matters: the temperature of the glass, the precision of the pour, the aroma of the citrus. A perfectly executed martini represents your commitment to excellence.</p>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                            <div class="text-3xl mb-2">🧊</div>
                            <p class="font-semibold text-blue-900 text-sm">Perfect Chill</p>
                            <p class="text-xs text-blue-700">28-32°F</p>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
                            <div class="text-3xl mb-2">⚖️</div>
                            <p class="font-semibold text-purple-900 text-sm">Precision Mix</p>
                            <p class="text-xs text-purple-700">Exact ratios</p>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                            <div class="text-3xl mb-2">✨</div>
                            <p class="font-semibold text-green-900 text-sm">Refined Service</p>
                            <p class="text-xs text-green-700">Presentation</p>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "A gin martini with a lemon twist, crystal clear, served at the perfect temperature",
                "Vodka martini with three olives, prepared with confidence and care",
                "Classic dry martini—the signature of a well-trained bartender"
            ],
            showExamples: false
        },
        {
            id: "ingredients",
            stepNumber: 2,
            title: "Essential Ingredients",
            icon: "🍶",
            explanation: `
                <div class="space-y-5">
                    <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-600">
                        <h3 class="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🥃</span> The Spirit Base
                        </h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white p-3 rounded border border-indigo-200">
                                <p class="font-semibold text-amber-800">Gin</p>
                                <p class="text-sm text-gray-600">Botanical, aromatic, complex</p>
                                <p class="text-xs text-gray-500 mt-1">Tanqueray, Bombay, Hendricks</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-indigo-200">
                                <p class="font-semibold text-blue-800">Vodka</p>
                                <p class="text-sm text-gray-600">Clean, neutral, smooth</p>
                                <p class="text-xs text-gray-500 mt-1">Ketel One, Grey Goose, Belvedere</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-600">
                        <h3 class="font-bold text-amber-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🌿</span> Dry Vermouth
                        </h3>
                        <p class="text-gray-700 mb-3">The soul of the martini. Fresh, high-quality vermouth is non-negotiable.</p>
                        <div class="bg-white p-3 rounded border-l-4 border-amber-400">
                            <p class="text-sm"><strong>Storage:</strong> Cool location or refrigerator after opening</p>
                            <p class="text-sm"><strong>Shelf Life:</strong> Replace every 2-3 months after opening</p>
                            <p class="text-sm"><strong>Quality:</strong> Taste before service—off odors mean replacement</p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-600">
                        <h3 class="font-bold text-red-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">⚖️</span> The Ratio
                        </h3>
                        <div class="space-y-2">
                            <div class="flex items-center justify-between bg-white p-3 rounded border border-red-200">
                                <span class="font-semibold text-gray-700">Classic</span>
                                <span class="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-bold">2.5:1 to 3:1</span>
                            </div>
                            <div class="flex items-center justify-between bg-white p-3 rounded border border-red-200">
                                <span class="font-semibold text-gray-700">Dry</span>
                                <span class="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-bold">5:1</span>
                            </div>
                            <div class="flex items-center justify-between bg-white p-3 rounded border border-red-200">
                                <span class="font-semibold text-gray-700">Very Dry</span>
                                <span class="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-bold">10:1+</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-600">
                        <h3 class="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🍃</span> Garnish Options
                        </h3>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="bg-white p-3 rounded border border-green-200">
                                <p class="font-semibold text-gray-800">Olives</p>
                                <p class="text-sm text-gray-600">Savory, brined</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-green-200">
                                <p class="font-semibold text-gray-800">Lemon Twist</p>
                                <p class="text-sm text-gray-600">Citrus aromatics</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-green-200">
                                <p class="font-semibold text-gray-800">Pearl Onions</p>
                                <p class="text-sm text-gray-600">Subtle sweetness</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-green-200">
                                <p class="font-semibold text-gray-800">Olives + Brine</p>
                                <p class="text-sm text-gray-600">"Dirty" martini</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Premium London Dry Gin (botanical notes of juniper, citrus, botanicals)",
                "High-quality vodka (clean, neutral, smooth finish)",
                "Fresh dry vermouth (floral, herbal, dry finish)",
                "Brined green olives or fresh lemons for optimal garnish"
            ],
            exercises: [
                {
                    title: "Ingredient Knowledge Check",
                    instructions: "Select the correct information about martini ingredients.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the primary role of dry vermouth?",
                            options: [
                                { value: "a", label: "Adds sweetness and color" },
                                { value: "b", label: "Provides dryness and herbal complexity" },
                                { value: "c", label: "Acts as the main spirit" },
                                { value: "d", label: "Serves as garnish only" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "What is the classic martini ratio?",
                            options: [
                                "1:1 spirit to vermouth",
                                "2.5:1 to 3:1 spirit to vermouth",
                                "5:1 spirit to vermouth",
                                "10:1 spirit to vermouth"
                            ],
                            expectedAnswer: "2.5:1 to 3:1 spirit to vermouth"
                        },
                        {
                            type: "radio",
                            label: "How often should you replace opened dry vermouth?",
                            options: [
                                { value: "a", label: "Every 6 months" },
                                { value: "b", label: "Every 2-3 months" },
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
            id: "preparation",
            stepNumber: 3,
            title: "Preparation Technique",
            icon: "⚗️",
            explanation: `
                <div class="space-y-5">
                    <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-600">
                        <h3 class="font-bold text-cyan-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🧊</span> Step 1: The Chill Factor
                        </h3>
                        <p class="text-gray-700 mb-3"><strong>Temperature is everything.</strong> The martini must be served at <span class="bg-cyan-100 px-2 py-1 rounded font-bold">28-32°F</span>.</p>
                        <div class="bg-white p-4 rounded border-l-4 border-cyan-400">
                            <p class="font-semibold text-gray-800 mb-2">Chill your glassware:</p>
                            <ul class="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                <li>Freezer method: 15+ minutes minimum</li>
                                <li>Ice-and-water method: 2-3 minutes if freezer unavailable</li>
                                <li>Never serve in room-temperature glass</li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-600">
                        <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🥄</span> Step 2: Stirring (Not Shaking!)
                        </h3>
                        <p class="text-gray-700 mb-3">The classic method. Stirring maintains clarity and silky texture.</p>
                        <div class="bg-white p-4 rounded border border-orange-200">
                            <div class="flex items-start gap-3 mb-3">
                                <span class="text-2xl">1️⃣</span>
                                <div>
                                    <p class="font-semibold text-gray-800">Large ice cubes</p>
                                    <p class="text-sm text-gray-600">Fill mixing glass with clear, dense ice</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3 mb-3">
                                <span class="text-2xl">2️⃣</span>
                                <div>
                                    <p class="font-semibold text-gray-800">Add spirit and vermouth</p>
                                    <p class="text-sm text-gray-600">Pour in correct ratio (2.5:1 or 3:1)</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="text-2xl">3️⃣</span>
                                <div>
                                    <p class="font-semibold text-gray-800">Stir for 30-45 seconds</p>
                                    <p class="text-sm text-gray-600">Smooth, deliberate motions—no rushing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600">
                        <h3 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">❄️</span> Step 3: Why Large Ice?
                        </h3>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="bg-white p-3 rounded border border-purple-200">
                                <p class="font-semibold text-green-700 flex items-center gap-2">✓ Large Ice</p>
                                <ul class="text-xs text-gray-700 mt-2 space-y-1">
                                    <li>• Chills efficiently</li>
                                    <li>• Minimal dilution</li>
                                    <li>• Clear appearance</li>
                                </ul>
                            </div>
                            <div class="bg-white p-3 rounded border border-purple-200">
                                <p class="font-semibold text-red-700 flex items-center gap-2">✗ Small Ice</p>
                                <ul class="text-xs text-gray-700 mt-2 space-y-1">
                                    <li>• Melts too fast</li>
                                    <li>• Over-dilutes drink</li>
                                    <li>• Watered-down flavor</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-lg border-l-4 border-yellow-600">
                        <h3 class="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">✨</span> Step 4: Straining & Garnish
                        </h3>
                        <div class="space-y-3">
                            <div class="bg-white p-3 rounded border border-yellow-200">
                                <p class="font-semibold text-gray-800">Strain with Precision</p>
                                <p class="text-sm text-gray-600">Use a julep strainer or fine mesh. No ice in the final drink.</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-yellow-200">
                                <p class="font-semibold text-gray-800">Express Lemon Oils</p>
                                <p class="text-sm text-gray-600">Twist over drink surface just before service to release aromatics</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-yellow-200">
                                <p class="font-semibold text-gray-800">Olive Temperature</p>
                                <p class="text-sm text-gray-600">Room temperature or chilled—consistency is key</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Chill glassware for 15+ minutes before service",
                "Stir spirit and vermouth with ice for 30-45 seconds",
                "Use large, clear ice cubes—never small cubes",
                "Express lemon oils over drink surface immediately before serving",
                "Strain with clean, confident motions"
            ],
            exercises: [
                {
                    title: "Preparation Steps",
                    instructions: "Test your understanding of proper martini preparation.",
                    items: [
                        {
                            type: "radio",
                            label: "What is the recommended serving temperature?",
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
                                "Until it feels right"
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
            id: "variations",
            stepNumber: 4,
            title: "Classic Variations",
            icon: "🎯",
            explanation: `
                <div class="space-y-4">
                    <p class="text-gray-700 font-semibold mb-4">While the classic martini is perfection, understanding variations shows expertise and attentiveness to customer preferences.</p>

                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-l-4 border-blue-600">
                        <div class="flex items-start gap-3 mb-3">
                            <span class="text-3xl">🏜️</span>
                            <div class="flex-1">
                                <p class="font-bold text-blue-900">The Dry Martini</p>
                                <p class="text-sm text-gray-700 mt-1">High spirit-to-vermouth ratio (5:1 or higher). For those who prefer minimal vermouth influence.</p>
                                <p class="text-xs text-blue-700 mt-2"><strong>Garnish:</strong> Lemon twist (no olive)</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-600">
                        <div class="flex items-start gap-3 mb-3">
                            <span class="text-3xl">🌿</span>
                            <div class="flex-1">
                                <p class="font-bold text-green-900">The Wet Martini</p>
                                <p class="text-sm text-gray-700 mt-1">Equal parts or nearly equal spirit and vermouth. More herbaceous and complex flavor.</p>
                                <p class="text-xs text-green-700 mt-2"><strong>Garnish:</strong> Olives (traditional)</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-5 rounded-lg border-l-4 border-yellow-600">
                        <div class="flex items-start gap-3 mb-3">
                            <span class="text-3xl">🧅</span>
                            <div class="flex-1">
                                <p class="font-bold text-yellow-900">The Gibson</p>
                                <p class="text-sm text-gray-700 mt-1">Identical to a martini, but garnished with a pickled cocktail onion instead of an olive.</p>
                                <p class="text-xs text-yellow-700 mt-2"><strong>Flavor note:</strong> Onion adds subtle sweetness and savory complexity</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-lg border-l-4 border-red-600">
                        <div class="flex items-start gap-3 mb-3">
                            <span class="text-3xl">🥒</span>
                            <div class="flex-1">
                                <p class="font-bold text-red-900">The Dirty Martini</p>
                                <p class="text-sm text-gray-700 mt-1">Standard martini with olive brine (typically 0.5 oz) added before serving.</p>
                                <p class="text-xs text-red-700 mt-2"><strong>Flavor:</strong> Savory, briny, bolder profile</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-l-4 border-purple-600">
                        <div class="flex items-start gap-3 mb-3">
                            <span class="text-3xl">🍶</span>
                            <div class="flex-1">
                                <p class="font-bold text-purple-900">Gin vs. Vodka</p>
                                <p class="text-sm text-gray-700 mt-1"><strong>Gin:</strong> Botanical notes, complexity, aromatic. <strong>Vodka:</strong> Clean, neutral, lets vermouth shine.</p>
                                <p class="text-xs text-purple-700 mt-2">Always ask—it fundamentally changes the drink</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border-l-4 border-indigo-600">
                        <div class="flex items-start gap-3 mb-3">
                            <span class="text-3xl">⚖️</span>
                            <div class="flex-1">
                                <p class="font-bold text-indigo-900">The Perfect Martini</p>
                                <p class="text-sm text-gray-700 mt-1">Equal parts dry and sweet vermouth with gin. Balanced and slightly herbaceous—a bridge between traditional and modern.</p>
                                <p class="text-xs text-indigo-700 mt-2"><strong>For customers:</strong> "Something different but classic"</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Dry Martini: 5:1 gin to vermouth, lemon twist, crisp and bright",
                "Wet Martini: 1:1 gin to vermouth, olive, herbal and complex",
                "Gibson: Identical martini preparation, pickled onion garnish",
                "Dirty: Standard martini plus 0.5 oz olive brine, savory",
                "Gin: Botanical forward, aromatic, traditional",
                "Vodka: Clean slate, highlights vermouth, modern preference"
            ],
            exercises: [
                {
                    title: "Martini Variation Identification",
                    instructions: "Match descriptions to the correct variation.",
                    items: [
                        {
                            type: "radio",
                            label: "A martini garnished with a pickled onion is called:",
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
                            label: "Which spirit emphasizes botanical complexity?",
                            options: [
                                "Gin—botanical and aromatic",
                                "Vodka—clean and neutral",
                                "Both equally",
                                "Neither has botanical characteristics"
                            ],
                            expectedAnswer: "Gin—botanical and aromatic"
                        },
                        {
                            type: "radio",
                            label: "A 'dirty' martini is prepared with:",
                            options: [
                                { value: "a", label: "Brine from olives" },
                                { value: "b", label: "Olive oil" },
                                { value: "c", label: "More vermouth" },
                                { value: "d", label: "Lower quality spirits" }
                            ],
                            expectedAnswer: "a"
                        }
                    ]
                }
            ]
        },
        {
            id: "glassware",
            stepNumber: 5,
            title: "Glassware & Service Excellence",
            icon: "🔷",
            explanation: `
                <div class="space-y-5">
                    <div class="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-lg border-l-4 border-violet-600">
                        <h3 class="font-bold text-violet-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🍷</span> Glassware Options
                        </h3>
                        <div class="space-y-3">
                            <div class="bg-white p-4 rounded border-l-4 border-violet-400">
                                <p class="font-semibold text-gray-800 mb-2">The Coupe Glass ⭐ Recommended</p>
                                <p class="text-sm text-gray-700">Wide bowl, elegant, showcases aromatics beautifully. Modern fine dining favorite.</p>
                            </div>
                            <div class="bg-white p-4 rounded border-l-4 border-violet-400">
                                <p class="font-semibold text-gray-800 mb-2">The Martini Glass</p>
                                <p class="text-sm text-gray-700">Classic triangular shape, iconic. Challenge: wide opening makes spills easier, stem requires careful handling.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-lg border-l-4 border-rose-600">
                        <h3 class="font-bold text-rose-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🧊</span> Chilling Protocol
                        </h3>
                        <div class="bg-white p-4 rounded border border-rose-200">
                            <p class="text-sm text-gray-700 mb-3"><strong>Never skip this step.</strong> Cold glassware is essential.</p>
                            <div class="space-y-2">
                                <div class="flex items-start gap-3">
                                    <span class="font-bold text-rose-600">1</span>
                                    <p class="text-sm text-gray-700"><strong>Freezer method:</strong> 15+ minutes minimum</p>
                                </div>
                                <div class="flex items-start gap-3">
                                    <span class="font-bold text-rose-600">2</span>
                                    <p class="text-sm text-gray-700"><strong>Ice-water method:</strong> 2-3 minutes if needed</p>
                                </div>
                                <div class="flex items-start gap-3">
                                    <span class="font-bold text-rose-600">3</span>
                                    <p class="text-sm text-gray-700"><strong>Plan ahead:</strong> Chill glasses while preparing the drink</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-600">
                        <h3 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">👋</span> Proper Handling
                        </h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-white p-3 rounded border border-teal-200">
                                <p class="font-semibold text-green-700 flex items-center gap-2">✓ Hold by Stem</p>
                                <p class="text-xs text-gray-700 mt-2">Preserves temperature. Hand warmth affects drink.</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-teal-200">
                                <p class="font-semibold text-red-700 flex items-center gap-2">✗ Hold by Bowl</p>
                                <p class="text-xs text-gray-700 mt-2">Warms the drink. Creates fingerprints. Unprofessional.</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg border-l-4 border-lime-600">
                        <h3 class="font-bold text-lime-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🎯</span> Presentation Matters
                        </h3>
                        <ul class="space-y-2">
                            <li class="flex items-start gap-3 text-sm text-gray-700">
                                <span class="text-green-600">✓</span>
                                <span>Place on beverage napkin before service</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-gray-700">
                                <span class="text-green-600">✓</span>
                                <span>Present from server's right side (when possible)</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-gray-700">
                                <span class="text-green-600">✓</span>
                                <span>Make eye contact and speak with confidence</span>
                            </li>
                            <li class="flex items-start gap-3 text-sm text-gray-700">
                                <span class="text-green-600">✓</span>
                                <span>Garnish positioned securely (olives on pick, twist ready)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            `,
            examples: [
                "Coupe glass: wide bowl, elegant, showcases aromatics perfectly",
                "Martini glass: iconic shape, requires careful handling",
                "Always chill glassware for 15+ minutes",
                "Hold exclusively by the stem—never the bowl",
                "Express garnish just before presentation"
            ],
            exercises: [
                {
                    title: "Service Standards",
                    instructions: "Test your knowledge of proper glassware and service.",
                    items: [
                        {
                            type: "radio",
                            label: "When should you chill martini glassware?",
                            options: [
                                { value: "a", label: "Immediately before pouring" },
                                { value: "b", label: "15+ minutes before service" },
                                { value: "c", label: "While stirring the cocktail" },
                                { value: "d", label: "Glassware temperature doesn't matter" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "Why should you hold a martini glass by the stem?",
                            options: [
                                "To preserve the drink's temperature",
                                "To prevent fingerprints",
                                "Because it's more elegant",
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
            title: "Quality Control",
            icon: "✓",
            explanation: `
                <div class="space-y-5">
                    <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-600">
                        <h3 class="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🌡️</span> Temperature Check
                        </h3>
                        <div class="bg-white p-4 rounded border border-emerald-200">
                            <p class="text-gray-700 mb-3">The finished martini must be ice-cold: <span class="bg-emerald-100 px-2 py-1 rounded font-bold">28-32°F</span></p>
                            <p class="text-sm text-gray-600 mb-3">If not properly chilled, flavors become muddy and the drink loses its signature crisp finish.</p>
                            <p class="text-xs text-emerald-700"><strong>Pro Tip:</strong> Always verify chill before service. If unsure, serve in an iced glass as additional insurance.</p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-lg border-l-4 border-sky-600">
                        <h3 class="font-bold text-sky-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">💎</span> Appearance Standards
                        </h3>
                        <div class="bg-white p-4 rounded border border-sky-200">
                            <p class="font-semibold text-gray-800 mb-3">Crystal Clear, Pristine</p>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start gap-2">
                                    <span class="text-green-600 font-bold">✓</span>
                                    <span>No cloudiness or particles</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-green-600 font-bold">✓</span>
                                    <span>Proper straining ensures clarity</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-green-600 font-bold">✓</span>
                                    <span>Visual beauty is part of the experience</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-600">
                        <h3 class="font-bold text-orange-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🔄</span> Consistency is Key
                        </h3>
                        <div class="bg-white p-4 rounded border border-orange-200">
                            <p class="text-sm text-gray-700 mb-3"><strong>Every martini should taste and look the same.</strong></p>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li>• Consistent ratios (always 2.5:1 or 3:1)</li>
                                <li>• Consistent technique (stirring, not shaking)</li>
                                <li>• Consistent ingredients (quality spirits, fresh vermouth)</li>
                                <li>• Consistent service (temperature, presentation, garnish)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-lg border-l-4 border-rose-600">
                        <h3 class="font-bold text-rose-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🌿</span> Vermouth Freshness
                        </h3>
                        <div class="bg-white p-4 rounded border border-rose-200">
                            <p class="font-semibold text-gray-800 mb-2">Opened Vermouth Deteriorates</p>
                            <div class="space-y-2 text-sm text-gray-700">
                                <p><strong>Replacement Schedule:</strong> Every 2-3 months</p>
                                <p><strong>Storage:</strong> Cool location or refrigerator after opening</p>
                                <p><strong>Smell Test:</strong> Off-odors = immediate replacement</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-600">
                        <h3 class="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">👂</span> The Smell Test
                        </h3>
                        <div class="bg-white p-4 rounded border border-indigo-200">
                            <p class="text-sm text-gray-700 mb-3">Before every service, verify ingredient freshness:</p>
                            <ul class="space-y-2 text-sm text-gray-700">
                                <li class="flex items-start gap-2">
                                    <span class="font-bold">1</span>
                                    <span>Smell the spirit—should be clean and pleasant</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="font-bold">2</span>
                                    <span>Smell the vermouth—herbal, floral, no mustiness</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="font-bold">3</span>
                                    <span>Any off-odors = do not use, order replacements</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Verify temperature is 28-32°F—never warmer",
                "Check for crystal clarity with no particles",
                "Confirm vermouth is fresh (opened within 2-3 months)",
                "Perform smell test before service",
                "Consistency builds trust with guests"
            ],
            exercises: [
                {
                    title: "Quality Control Standards",
                    instructions: "Apply quality control knowledge.",
                    items: [
                        {
                            type: "radio",
                            label: "How often should opened vermouth be replaced?",
                            options: [
                                { value: "a", label: "Every 6 months" },
                                { value: "b", label: "Every 2-3 months" },
                                { value: "c", label: "Every year" },
                                { value: "d", label: "Never, if properly sealed" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "What should a properly prepared martini look like?",
                            options: [
                                "Slightly cloudy with ice particles visible",
                                "Crystal clear with no particles",
                                "Bright colored with herbal tint",
                                "Depends on the vermouth brand"
                            ],
                            expectedAnswer: "Crystal clear with no particles"
                        }
                    ]
                }
            ]
        },
        {
            id: "customer-preferences",
            stepNumber: 7,
            title: "Customer Preferences & Taking Orders",
            icon: "👤",
            explanation: `
                <div class="space-y-5">
                    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-600">
                        <h3 class="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🎤</span> The Art of Clarification
                        </h3>
                        <p class="text-gray-700 mb-4">When a customer orders "a martini," always clarify. These details matter.</p>
                        <div class="bg-white p-4 rounded border border-indigo-200 space-y-3">
                            <div class="border-l-4 border-indigo-400 pl-3">
                                <p class="font-semibold text-gray-800">Spirit Choice</p>
                                <p class="text-sm text-gray-600">"Gin or vodka?"</p>
                            </div>
                            <div class="border-l-4 border-indigo-400 pl-3">
                                <p class="font-semibold text-gray-800">Dryness Level</p>
                                <p class="text-sm text-gray-600">"Dry, extra dry, or classic?"</p>
                            </div>
                            <div class="border-l-4 border-indigo-400 pl-3">
                                <p class="font-semibold text-gray-800">Garnish</p>
                                <p class="text-sm text-gray-600">"Olives, lemon twist, or onion?"</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-lg border-l-4 border-teal-600">
                        <h3 class="font-bold text-teal-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">💬</span> Sample Customer Orders
                        </h3>
                        <div class="space-y-3">
                            <div class="bg-white p-3 rounded border border-teal-200">
                                <p class="text-sm font-semibold text-gray-800">Customer: "Martini, please"</p>
                                <p class="text-xs text-teal-600 mt-1">→ Ask: "Gin or vodka? Dry or classic? Olives or twist?"</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-teal-200">
                                <p class="text-sm font-semibold text-gray-800">Customer: "Dry martini"</p>
                                <p class="text-xs text-teal-600 mt-1">→ Ask: "Gin or vodka? And olives or twist?"</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-teal-200">
                                <p class="text-sm font-semibold text-gray-800">Customer: "Gibson"</p>
                                <p class="text-xs text-teal-600 mt-1">→ Confirm: "A martini with a pickled onion, gin or vodka?"</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-teal-200">
                                <p class="text-sm font-semibold text-gray-800">Customer: "Dirty martini"</p>
                                <p class="text-xs text-teal-600 mt-1">→ Confirm: "Olive brine, gin or vodka? How much brine?"</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-l-4 border-yellow-600">
                        <h3 class="font-bold text-yellow-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">✍️</span> Repeating the Order
                        </h3>
                        <div class="bg-white p-4 rounded border border-yellow-200">
                            <p class="text-sm text-gray-700 mb-3"><strong>Always summarize back to the customer.</strong> This prevents mistakes and shows attentiveness.</p>
                            <p class="text-sm font-semibold text-gray-800 mb-2">Example:</p>
                            <p class="text-sm italic text-gray-700">"So, a dry gin martini with a lemon twist? Perfect, I'll have that right out."</p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-lg border-l-4 border-rose-600">
                        <h3 class="font-bold text-rose-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">❓</span> Common Preferences
                        </h3>
                        <div class="space-y-2 text-sm">
                            <div class="bg-white p-3 rounded border border-rose-200">
                                <p class="font-semibold text-gray-800">"Very Dry"</p>
                                <p class="text-gray-700">Minimal vermouth (sometimes just a rinse of the glass)</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-rose-200">
                                <p class="font-semibold text-gray-800">"Shaken, Not Stirred"</p>
                                <p class="text-gray-700">Honor the request (though stirring is classic). Don't judge.</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-rose-200">
                                <p class="font-semibold text-gray-800">"Extra Olives"</p>
                                <p class="text-gray-700">Accommodate cheerfully. Some guests prefer them.</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-rose-200">
                                <p class="font-semibold text-gray-800">"No Vermouth"</p>
                                <p class="text-gray-700">Deviates from classic definition, but honor requests gracefully</p>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Customer: 'Martini' → Ask: 'Gin or vodka? Dry or classic? Olives or twist?'",
                "Customer: 'Dirty martini' → Clarify: 'How much brine?'",
                "Customer: 'Gibson' → Confirm: 'Martini with a pickled onion?'",
                "Always repeat the order back for clarity",
                "Accommodate preferences gracefully—even unusual requests"
            ],
            exercises: [
                {
                    title: "Customer Service Scenarios",
                    instructions: "Choose the best response for each customer interaction.",
                    items: [
                        {
                            type: "radio",
                            label: "A customer orders 'a martini.' What should you ask?",
                            options: [
                                { value: "a", label: "Nothing—just make a standard martini" },
                                { value: "b", label: "Gin or vodka? Dry or classic? Olives or twist?" },
                                { value: "c", label: "Only ask about gin vs. vodka" },
                                { value: "d", label: "Ask if they want it shaken or stirred" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "A 'dirty martini' is typically made with:",
                            options: [
                                "Olive oil added to the drink",
                                "Olive brine included",
                                "Low-quality ingredients",
                                "Extra vermouth"
                            ],
                            expectedAnswer: "Olive brine included"
                        }
                    ]
                }
            ]
        },
        {
            id: "finesse",
            stepNumber: 8,
            title: "Professional Finesse & Presentation",
            icon: "💎",
            explanation: `
                <div class="space-y-5">
                    <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-600">
                        <h3 class="font-bold text-amber-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🎭</span> The Ritual
                        </h3>
                        <div class="bg-white p-4 rounded border border-amber-200">
                            <p class="text-gray-700 mb-3">The martini is more than a drink—it's a ritual. Perform each step with deliberate care and purpose.</p>
                            <p class="text-sm text-gray-600">This creates an experience for the customer. They're not just ordering a beverage; they're ordering an experience of precision, elegance, and care.</p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-600">
                        <h3 class="font-bold text-cyan-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">⏱️</span> Speed with Precision
                        </h3>
                        <div class="bg-white p-4 rounded border border-cyan-200">
                            <p class="font-semibold text-gray-800 mb-2">The Benchmark: Under 90 seconds</p>
                            <p class="text-sm text-gray-700 mb-3">A well-trained bartender can prepare an excellent martini from order to service in under 90 seconds.</p>
                            <p class="text-xs text-cyan-700"><strong>Key:</strong> Ritual matters, but efficiency matters too. Balance both.</p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-600">
                        <h3 class="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">👃</span> The Aroma
                        </h3>
                        <div class="bg-white p-4 rounded border border-emerald-200">
                            <p class="text-gray-700 mb-3">The aroma is the first impression. When you express a lemon twist, essential oils create a sensory moment.</p>
                            <p class="font-semibold text-gray-800 text-sm mb-2">How to Express:</p>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>• Hold lemon twist over the drink's surface</li>
                                <li>• Twist firmly to express oils</li>
                                <li>• Let the citrus mist settle on the surface</li>
                                <li>• Drop the twist in (or serve separately if preferred)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg border-l-4 border-rose-600">
                        <h3 class="font-bold text-rose-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🥒</span> The Olive Pick
                        </h3>
                        <div class="bg-white p-4 rounded border border-rose-200">
                            <p class="text-gray-700 mb-3">Use quality stainless steel or glass picks. Ensure olives are speared securely.</p>
                            <p class="text-sm text-red-700 font-semibold mb-2">⚠️ Nothing undermines elegance like an olive sliding into the drink mid-service.</p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-600">
                        <h3 class="font-bold text-purple-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🚰</span> The Pour
                        </h3>
                        <div class="bg-white p-4 rounded border border-purple-200">
                            <p class="text-gray-700 mb-3">Strain smoothly and confidently. A hesitant pour looks unprofessional.</p>
                            <div class="space-y-2 text-sm text-gray-700">
                                <p><strong>Technique:</strong> Clean, smooth motions from mixing glass to serving glass</p>
                                <p><strong>Confidence:</strong> Commit to the movement—no hesitation</p>
                                <p><strong>Control:</strong> Precise pour, no spillage, no waste</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-600">
                        <h3 class="font-bold text-teal-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🎯</span> The Presentation
                        </h3>
                        <div class="bg-white p-4 rounded border border-teal-200 space-y-3">
                            <div class="border-l-4 border-teal-400 pl-3">
                                <p class="font-semibold text-gray-800">Placement</p>
                                <p class="text-sm text-gray-600">Place glass on beverage napkin</p>
                            </div>
                            <div class="border-l-4 border-teal-400 pl-3">
                                <p class="font-semibold text-gray-800">Positioning</p>
                                <p class="text-sm text-gray-600">Present from server's right side (if possible)</p>
                            </div>
                            <div class="border-l-4 border-teal-400 pl-3">
                                <p class="font-semibold text-gray-800">Engagement</p>
                                <p class="text-sm text-gray-600">Make eye contact and speak with confidence</p>
                            </div>
                            <div class="border-l-4 border-teal-400 pl-3">
                                <p class="font-semibold text-gray-800">Delivery</p>
                                <p class="text-sm text-gray-600">Simple: "Your martini" spoken with confidence elevates the experience</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg border-l-4 border-lime-600">
                        <h3 class="font-bold text-lime-900 mb-4 flex items-center gap-2">
                            <span class="text-2xl">🌡️</span> Temperature Monitoring
                        </h3>
                        <div class="bg-white p-4 rounded border border-lime-200">
                            <p class="text-gray-700 mb-3"><strong>Never allow a martini to warm above 35°F.</strong></p>
                            <p class="text-sm text-gray-600 mb-2">If a customer doesn't immediately drink their martini:</p>
                            <ul class="text-sm text-gray-700 space-y-1">
                                <li>• Monitor temperature</li>
                                <li>• Check in after a few minutes</li>
                                <li>• If warmed, offer a fresh martini gracefully</li>
                                <li>• This is not criticism—it's excellent service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `,
            examples: [
                "Express lemon twist oils directly over the drink surface",
                "Ensure olive picks are secure and professional-grade",
                "Strain with smooth, confident movements",
                "Present on a napkin with eye contact",
                "Monitor temperature throughout service",
                "Speak with confidence: 'Your martini'"
            ],
            exercises: [
                {
                    title: "Professional Technique Mastery",
                    instructions: "Apply professional techniques to different scenarios.",
                    items: [
                        {
                            type: "radio",
                            label: "How should a lemon twist be expressed?",
                            options: [
                                { value: "a", label: "Drop it in without expressing" },
                                { value: "b", label: "Express oils over drink surface, then drop in" },
                                { value: "c", label: "Discard it after expressing" },
                                { value: "d", label: "Never use lemon twists" }
                            ],
                            expectedAnswer: "b"
                        },
                        {
                            type: "select",
                            label: "From which side should you present a martini?",
                            options: [
                                "Left side (server's left)",
                                "Right side (server's right)",
                                "Directly in front",
                                "Doesn't matter"
                            ],
                            expectedAnswer: "Right side (server's right)"
                        },
                        {
                            type: "radio",
                            label: "What should you do if a customer hasn't started their martini after a few minutes?",
                            options: [
                                { value: "a", label: "Do nothing—they ordered it" },
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
                { value: "d", label: "Until it feels right" }
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
                { value: "d", label: "Pearl Martini" }
            ],
            correctAnswer: "b",
            topic: "martini-variations",
            skill: "knowledge",
            difficulty: "medium"
        },
        {
            id: "q5",
            question: "Why are large ice cubes preferred for stirring a martini?",
            options: [
                { value: "a", label: "They look more impressive" },
                { value: "b", label: "They're easier to handle" },
                { value: "c", label: "They chill efficiently without over-diluting" },
                { value: "d", label: "They don't affect the drink" }
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
            question: "Which spirit choice showcases botanical complexity and aromatics?",
            options: [
                { value: "a", label: "Vodka—the only choice for martinis" },
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
            question: "When a customer orders a 'dirty martini,' what do they mean?",
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
                { value: "a", label: "It prevents fingerprints" },
                { value: "b", label: "It allows the drink to maintain proper temperature" },
                { value: "c", label: "It makes the glass less likely to break" },
                { value: "d", label: "It's just tradition with no practical benefit" }
            ],
            correctAnswer: "b",
            topic: "service-standards",
            skill: "understanding",
            difficulty: "easy"
        }
    ]
};

export default martiniBasicsEnhanced;
