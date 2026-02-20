'use client';

import { sanitizeHtml } from "@/utils/sanitize";
import { emphasizeExampleByFormula } from "@/utils/emphasizeExampleByFormula";
import type { FormulaPart } from "@/types/activity";
import { motion } from "framer-motion";
import { Lightbulb, Sparkles } from "lucide-react";

interface ExampleBoxProps {
    examples: string[];
    formulaParts?: FormulaPart[];
    /** 'flow' = integrated list style matching THE FLOW blocks; 'default' = card-based layout */
    variant?: "default" | "flow";
}

function splitExampleAndTakeaway(example: string) {
    const separators = [" — ", " - ", " – "];
    for (const separator of separators) {
        const [left, ...rest] = example.split(separator);
        if (rest.length > 0) {
            return {
                sentence: left.trim(),
                takeaway: rest.join(separator).trim(),
            };
        }
    }

    return { sentence: example.trim(), takeaway: null as string | null };
}

export function ExampleBox({ examples, formulaParts, variant = "default" }: ExampleBoxProps) {
    if (variant === "flow") {
        return (
            <div className="my-6 rounded-lg overflow-hidden bg-[#fef9f3] border-l-4 border-secondary">
                <div className="px-6 py-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-secondary font-semibold mb-3">
                        Examples
                    </p>
                    <ol className="list-decimal list-inside space-y-2 m-0 pl-1 text-text-muted font-body text-[0.95rem] leading-relaxed">
                        {examples.map((example, index) => {
                            const { sentence, takeaway } = splitExampleAndTakeaway(example);
                            return (
                                <li key={index} className="text-text">
                                    <span className="font-medium text-text">{sentence}</span>
                                    {takeaway && (
                                        <span className="text-text-muted italic"> — {takeaway}</span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }

    return (
        <motion.section
            className="example-box relative my-4 overflow-visible"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
        >
            {/* Header Section */}
            <div className="flex items-center gap-2 mb-4">
                <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.15, rotate: 12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary/90 to-secondary rounded-lg flex items-center justify-center shadow-sm">
                        <Lightbulb className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                </motion.div>
                <div>
                    <h3 className="text-base font-display font-semibold text-text leading-none">Examples</h3>
                    <p className="text-xs text-text-muted mt-1">Use these as quick order templates.</p>
                </div>
            </div>

            {/* Examples List */}
            <motion.div
                className="relative bg-white rounded-2xl border border-secondary/15 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
            >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary/80 to-secondary/25" />

                <div className="relative divide-y divide-secondary/10">
                    {examples.map((example, index) => {
                        const { sentence, takeaway } = splitExampleAndTakeaway(example);

                        return (
                            <motion.article
                                key={index}
                                className="p-4 sm:p-5"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.06,
                                    duration: 0.3,
                                }}
                            >
                                <div>
                                    {formulaParts?.length ? (
                                        <p
                                            className="text-sm sm:text-base leading-relaxed text-text font-medium"
                                            dangerouslySetInnerHTML={{
                                                __html: sanitizeHtml(
                                                    emphasizeExampleByFormula(sentence, formulaParts)
                                                ),
                                            }}
                                        />
                                    ) : (
                                        <p className="text-sm sm:text-base leading-relaxed text-text font-medium">
                                            {sentence}
                                        </p>
                                    )}
                                </div>

                                {takeaway && (
                                    <div className="mt-2 pt-2 border-t border-secondary/10">
                                        <p className="text-xs sm:text-sm leading-relaxed text-text-muted">
                                            <span className="inline-flex items-center gap-1 mr-1 font-medium text-secondary">
                                                <Sparkles className="w-3 h-3" />
                                                Why it works:
                                            </span>
                                            {takeaway}
                                        </p>
                                    </div>
                                )}
                            </motion.article>
                        );
                    })}
                </div>
            </motion.div>
        </motion.section>
    );
}
