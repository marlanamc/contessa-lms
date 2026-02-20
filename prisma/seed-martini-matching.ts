import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedMartiniMatching() {
    const activities = [
        {
            id: "martini-matching-recipes",
            title: "Classic Martini Recipes",
            description: "Sort martini recipes by spirit family and variation style.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - MEDIUM]
Classic Dry Martini::classic-dry::Gin-forward build with dry vermouth, stirred, served up
Vodka Martini::classic-vodka::Vodka-forward build with dry vermouth, stirred, clean finish
Kangaroo::classic-vodka::Vodka martini variation name, spirit profile stays neutral
Dirty Martini::variation::Martini with olive brine added for savory salinity
Gibson::variation::Martini variation defined by cocktail onion garnish
Fifty-Fifty::variation::Equal parts spirit and dry vermouth, softer and herbal

[ROUND 2 - HARD]
Gin 3 oz + dry vermouth 0.5 oz, stirred, lemon twist::classic-dry::Classic gin martini profile with citrus aroma
Vodka 3 oz + dry vermouth rinse, stirred, very cold::classic-vodka::Vodka profile with minimal vermouth influence
Gin + vodka + Lillet Blanc, shaken, lemon peel::variation::Signature Vesper build, not a standard classic martini
Equal dry and sweet vermouth with gin::variation::Perfect martini spec, distinct from classic dry
`,
        },
        {
            id: "martini-matching-garnish",
            title: "Martini Garnishes",
            description: "Sort garnish cues into olive, twist, or onion service choices.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - MEDIUM]
Three olives on a pick::garnish-olive::Classic savory garnish request
Blue cheese stuffed olive::garnish-olive::Olive garnish variant with richer salinity
Expressed lemon peel::garnish-twist::Citrus oils expressed over surface before serving
Long lemon twist::garnish-twist::Aromatic citrus garnish, no brine flavor
Cocktail onion::garnish-onion::Required garnish for a Gibson order
Pickled pearl onion::garnish-onion::Traditional Gibson garnish with subtle sweetness

[ROUND 2 - HARD]
Guest orders a Gibson::garnish-onion::Service cue points to onion garnish, not olive
Guest asks for bright citrus aroma::garnish-twist::Twist is used to perfume the drink
Guest wants salty, briny finish::garnish-olive::Olive garnish best supports savory profile
`,
        },
        {
            id: "martini-matching-terminology",
            title: "Martini Terminology",
            description: "Classify martini terms by ratio concepts vs service/style language.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - MEDIUM]
Dry::terminology-ratio::Lower vermouth proportion, more spirit-forward profile
Wet::terminology-ratio::Higher vermouth proportion, softer herbal expression
Very Dry::terminology-ratio::Minimal vermouth, often 10:1 or drier
Perfect::terminology-ratio::Uses both dry and sweet vermouth components
Up::terminology-style::Served chilled without ice in the final glass
Bruised::terminology-style::Cloudy texture from over-shaking or excessive agitation

[ROUND 2 - HARD]
Request: "Make it very dry"::terminology-ratio::Signals vermouth reduction, not garnish change
Request: "Serve it up"::terminology-style::Signals presentation format, not recipe ratio
Request: "I like it dirty"::terminology-style::Signals olive brine inclusion for savory profile
`,
        },
        {
            id: "martini-matching-ingredients",
            title: "Martini Ingredient Roles",
            description: "Sort ingredients by base spirit, modifier, and garnish function.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - HARD]
Gin::ingredient-base::Primary spirit with botanical notes and classic martini character
Vodka::ingredient-base::Neutral spirit for a clean and smooth martini profile
Dry Vermouth::ingredient-modifier::Fortified wine that adds herbaceous complexity
Olive Brine::ingredient-modifier::Salty liquid used to create a dirty martini
Lillet Blanc::ingredient-modifier::Aromatized wine component used in a Vesper
Orange bitters::ingredient-modifier::Aromatic accent used in some house specs
Lemon peel::ingredient-garnish::Expressed oils add aroma and brightness
Green olive::ingredient-garnish::Savory garnish for classic and dirty styles
Cocktail onion::ingredient-garnish::Gibson garnish with pickled sweetness
`,
        },
        {
            id: "martini-matching-technique",
            title: "Martini Technique Sorting",
            description: "Distinguish stirred technique outcomes from shaken outcomes.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - HARD]
Guest wants it icy cold but crystal clear::technique-stirred::Stirring chills efficiently while preserving clarity
Guest says, "Like Bond."::technique-shaken::Bond cue implies shaken presentation preference
Guest wants maximum dilution to soften alcohol::technique-shaken::Shaking increases aeration and dilution pace
Guest says they love a silky texture::technique-stirred::Stirring supports smooth, dense mouthfeel
Vodka martini with citrus oils only::technique-stirred::Default refined service keeps drink clear and elegant
Guest explicitly requests "shaken."::technique-shaken::Guest instruction overrides default technique
`,
        },
        {
            id: "martini-matching-variations",
            title: "Advanced Martini Variations",
            description: "Differentiate classic builds from named martini variations.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - HARD]
Gibson::variation::Martini variation identified by onion garnish
Vesper::variation::Gin + vodka + Lillet Blanc, traditionally shaken
Dirty Martini::variation::Classic martini plus olive brine for savory salinity
Fifty-Fifty::variation::Equal parts spirit and dry vermouth
Classic Dry Martini::classic-dry::Gin and dry vermouth, stirred, spirit-forward
Vodka Martini::classic-vodka::Vodka and dry vermouth, stirred, clean profile

[ROUND 2 - HARD]
House spec: gin with dry vermouth and lemon twist::classic-dry::Core classic dry profile, not a named variation
House spec: vodka with dry vermouth and olives::classic-vodka::Classic vodka martini family
Spec includes olive brine::variation::Moves the drink into dirty variation territory
Spec includes equal dry and sweet vermouth::variation::Signals perfect martini structure
`,
        },
        {
            id: "martini-service-clarity",
            title: "Martini Service Clarity",
            description: "Decide when to clarify guest intent, adjust ratios, or check house standards.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - MEDIUM]
Martini::clarify-needed::Guest gave no base spirit, dryness, garnish, or style details
Make it strong::ratio-adjustment::Signals spirit-forward preference and likely lower vermouth/dilution
Very dry but still aromatic::ratio-adjustment::Adjust vermouth carefully while preserving aromatic expression
Dirty, but no olives::garnish-decision::Clarify garnish and brine presentation choice
Whatever your house martini is::house-spec-check::Server should confirm and follow house build

[ROUND 2 - HARD]
Perfect martini::house-spec-check::Confirm house interpretation and exact dry/sweet split
Like last time::house-spec-check::Reference prior order history or reconfirm preferences
Bright and citrusy, not salty::garnish-decision::Twist-focused garnish decision, avoid brine-led choices
Very dirty, extra brine::ratio-adjustment::Adjust brine-to-spirit balance and dilution expectations
Gin or vodka, I do not care::clarify-needed::Server should still guide spirit choice for profile consistency
`,
        },
        {
            id: "martini-garnish-preferences",
            title: "Martini Garnish Preferences",
            description: "Interpret guest language and choose the right garnish path.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - MEDIUM]
I do not like citrus::garnish-olive::Olive garnish avoids expressed citrus oils
Clean and sharp, no saltiness::garnish-twist::Twist gives brightness without briny salinity
Gibson, but I hate onions::clarify-needed::Order is contradictory and requires follow-up
Savory but not briny::garnish-olive::Olive garnish gives savory tone without added brine
Dirty, but with a twist::garnish-twist::Guest is prioritizing citrus garnish despite dirty spec

[ROUND 2 - HARD]
No olives, no onions, still classic::garnish-twist::Twist is the clean classic fallback garnish
Gibson-style but less onion flavor::clarify-needed::Clarify if guest wants a different garnish or lighter onion influence
Extra savory finish::garnish-olive::Olive garnish aligns with savory, non-citrus profile
`,
        },
        {
            id: "martini-ingredient-role-advanced",
            title: "Advanced Ingredient Roles",
            description: "Sort ingredients by functional role in aroma, texture, salinity, and structure.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - HARD]
Gin::aromatic-structure::Botanical backbone defines aromatic architecture
London dry gin::aromatic-structure::Juniper-forward base that structures aroma
Vodka::texture-impact::Neutral base shifts perceived smoothness and mouthfeel
Dry vermouth::fortified-wine::Primary fortified wine modifier in classic martini builds
Sweet vermouth::fortified-wine::Fortified wine used in perfect-style builds
Olive brine::salinity-source::Primary saline modifier for dirty martinis
Onion brine::salinity-source::Saline-pickled component tied to onion-driven builds
Orange bitters::bitterness-accent::Adds citrus-bitter top-note accent
Aromatic bitters::bitterness-accent::Adds spice-bitter structural accents
`,
        },
        {
            id: "martini-ratio-levels",
            title: "Martini Ratio Levels",
            description: "Classify specs by vermouth intensity and balance.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - HARD]
3 oz gin, vermouth rinse only::ratio-very-dry::Rinse-only vermouth yields very dry profile
3 oz vodka, dry vermouth rinse only::ratio-very-dry::Minimal vermouth expression, spirit-dominant
2.5 oz gin, 0.5 oz dry vermouth::ratio-classic-dry::Standard dry martini balance
2 oz gin, 1 oz dry vermouth::ratio-wet::Higher vermouth makes a wetter style
2 oz gin, 0.5 oz dry vermouth, 0.5 oz sweet vermouth::ratio-perfect::Equal dry/sweet vermouth split defines perfect profile

[ROUND 2 - HARD]
10:1 spirit to dry vermouth::ratio-very-dry::Very low vermouth proportion
5:1 spirit to dry vermouth::ratio-classic-dry::Classic dry benchmark
3:1 spirit to dry vermouth::ratio-wet::Noticeably wetter than classic dry
Equal dry and sweet vermouth portions::ratio-perfect::Perfect structure regardless of base spirit
`,
        },
        {
            id: "martini-house-vs-guest-spec",
            title: "House vs Guest Spec",
            description: "Decide when to execute house standards and when to clarify guest intent.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - HARD]
Guest: Martini and nothing else::clarify-needed::Missing spirit, ratio, garnish, and technique preference
Guest: Vodka martini, very dry::ratio-adjustment::Adjust vermouth down relative to house default
Guest: Dirty martini::ratio-adjustment::Clarify brine level to calibrate salinity and dilution
Guest: Your house martini, please::house-spec-check::Build according to the house standard
Guest: Gibson, but whatever gin you use in your house martini::house-spec-check::Use house base spec and onion garnish format

[ROUND 2 - HARD]
Guest: Make it dry and lemony::garnish-decision::Garnish and aromatic direction are key choices
Guest: Standard build, but extra cold::ratio-adjustment::Technique/dilution timing adjustment from baseline
Guest: Same as your menu martini, just dirtier::ratio-adjustment::Start house spec then adjust brine intensity
Guest: I trust your martini program::house-spec-check::Default to house martini architecture
`,
        },
        {
            id: "martini-true-vs-faux",
            title: "True Martini vs Faux Tini",
            description: "Differentiate martini-family cocktails from popular faux 'tinis'.",
            type: "game",
            ui: "matching",
            category: "games",
            isReleased: true,
            content: `[ROUND 1 - MEDIUM]
Gin with dry vermouth, stirred, lemon twist::martini-true::Classic martini-family structure
Vodka with dry vermouth, stirred or shaken::martini-true::Vodka martini remains martini-family
Vesper (gin, vodka, Lillet, lemon peel)::martini-true::Recognized martini-family variation
Espresso martini::martini-faux::Not a classic martini-family structure
Lemon drop::martini-faux::Popular 'tini' served up but structurally not a martini
Appletini::martini-faux::Sweet flavored 'tini' outside martini-family specs
Cosmopolitan::martini-faux::Served up cocktail, not martini-family
`,
        },
    ] as const;

    for (const activity of activities) {
        await prisma.activity.upsert({
            where: { id: activity.id },
            update: activity,
            create: activity,
        });
        console.log(`Seeded: ${activity.title}`);
    }
}

seedMartiniMatching()
    .catch((error) => {
        console.error("Failed to seed martini matching activities:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
