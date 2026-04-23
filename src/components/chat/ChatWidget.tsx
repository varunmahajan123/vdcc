"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    role: "user" | "bot";
    text: string;
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", text: "Hello! I am the VDCC Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    // Lock body scroll when chat is open on mobile
    useEffect(() => {
        if (isOpen && window.innerWidth <= 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMsg: Message = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg.text }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.reply || "Failed to fetch");
            }

            setMessages(prev => [...prev, { role: "bot", text: data.reply }]);
        } catch (error) {
            console.error("Chatbot Frontend Error:", error);
            const errorMessage = error instanceof Error ? error.message : "Chatbot is temporarily unavailable.";
            setMessages(prev => [...prev, { role: "bot", text: errorMessage }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-accent-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-accent-primary/20 transition-all border-none focus:outline-none"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open Chat"
                    >
                        <MessageCircle size={28} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 right-0 w-[calc(100vw-32px)] sm:w-[380px] h-[550px] max-h-[calc(100vh-100px)] bg-bg-primary border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden"
                    >
                        <div className="bg-bg-secondary p-4 flex items-center justify-between border-b border-border">
                            <div className="flex items-center gap-3 text-text-primary">
                                <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-white">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[15px]">VDCC Assistant</h4>
                                    <div className="flex items-center gap-1.5 text-xs text-green-500">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        Online
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-text-secondary hover:text-text-primary p-2 rounded-full hover:bg-bg-tertiary transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                            {messages.map((msg, i) => (
                                <div 
                                    key={i} 
                                    className={cn(
                                        "max-w-[85%] rounded-2xl p-3 text-[15px] leading-relaxed",
                                        msg.role === "user" 
                                            ? "bg-accent-primary text-white ml-auto rounded-br-sm" 
                                            : "bg-bg-tertiary text-text-primary mr-auto rounded-bl-sm"
                                    )}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            {loading && (
                                <div className="bg-bg-tertiary text-text-secondary max-w-fit rounded-2xl p-3 px-4 mr-auto rounded-bl-sm flex gap-1.5">
                                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-text-tertiary"></motion.div>
                                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-text-tertiary"></motion.div>
                                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-text-tertiary"></motion.div>
                                </div>
                            )}
                        </div>

                        <div className="p-3 bg-bg-primary border-t border-border">
                            <div className="flex items-center gap-2 bg-bg-secondary rounded-full border border-border p-1.5 focus-within:border-accent-primary focus-within:ring-1 focus-within:ring-accent-primary transition-all">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-transparent border-none outline-none text-[15px] text-text-primary px-3 placeholder:text-text-tertiary disabled:opacity-50"
                                    disabled={loading}
                                />
                                <button
                                    className="w-8 h-8 rounded-full bg-accent-primary text-white flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-secondary transition-colors"
                                    onClick={handleSend}
                                    disabled={loading || !input.trim()}
                                >
                                    <Send size={14} className="ml-0.5" />
                                </button>
                            </div>
                            <div className="text-center mt-2 pb-1 text-[10px] text-text-tertiary">
                                Uses AI. Can make mistakes.
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
