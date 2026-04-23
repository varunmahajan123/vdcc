import React from 'react';
import { Bot, Sparkles, Send } from 'lucide-react';

export const AITutorTab = () => {
    return (
        <div className="h-[calc(100vh-14rem)] flex flex-col bg-bg-secondary border border-border rounded-2xl overflow-hidden shadow-sm relative">
            
            {/* Header */}
            <div className="p-4 border-b border-border bg-bg-primary/50 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-lg shadow-accent-primary/20">
                        <Bot size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-text-primary text-sm flex items-center gap-2">
                            VDCC AI Tutor <Sparkles size={14} className="text-accent-secondary" />
                        </h4>
                        <p className="text-[10px] text-text-tertiary">Trained on your class syllabus</p>
                    </div>
                </div>
            </div>

            {/* Chat Area (Placeholder) */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                
                {/* System Message */}
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center shrink-0 text-white">
                        <Bot size={14} />
                    </div>
                    <div className="bg-bg-primary border border-border p-3 rounded-2xl rounded-tl-sm text-sm text-text-secondary max-w-[85%]">
                        Hello! I am your personal VDCC study assistant. I can help you solve math problems step-by-step, explain science concepts, or test your grammar. What are we studying today?
                    </div>
                </div>

                {/* Example User Message */}
                <div className="flex gap-3 flex-row-reverse">
                    <div className="bg-accent-primary text-white p-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-md">
                        Can you explain how to find the roots of a quadratic equation using the formula?
                    </div>
                </div>

                {/* Example System Response */}
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center shrink-0 text-white">
                        <Bot size={14} />
                    </div>
                    <div className="bg-bg-primary border border-border p-3 rounded-2xl rounded-tl-sm text-sm text-text-secondary max-w-[85%]">
                        Absolutely. The quadratic formula is: <br/><br/>
                        <code className="bg-bg-secondary px-2 py-1 rounded text-accent-primary block my-2">x = [-b ± √(b² - 4ac)] / 2a</code>
                        Let's break down where each letter comes from `ax² + bx + c = 0`. First, can you identify `a`, `b`, and `c` in the equation `2x² + 5x - 3 = 0`?
                    </div>
                </div>

            </div>

            {/* Input Overlay */}
            <div className="p-3 bg-bg-primary border-t border-border shrink-0">
                <div className="relative flex items-center">
                    <input 
                        type="text" 
                        placeholder="Ask your tutor..." 
                        className="w-full bg-bg-secondary border border-border rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-accent-primary"
                        disabled
                    />
                    <button className="absolute right-2 w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-white disabled:opacity-50">
                        <Send size={14} />
                    </button>
                </div>
                <div className="text-center mt-2">
                    <span className="text-[9px] text-text-tertiary uppercase tracking-widest font-semibold">Integrates with external LLM API</span>
                </div>
            </div>

        </div>
    );
};
