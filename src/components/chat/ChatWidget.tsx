"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import styles from "./ChatWidget.module.css";
import { cn } from "@/lib/utils";

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
        <>
            {/* Toggle Button */}
            <button
                className={cn(styles.toggleBtn, isOpen && styles.hide)}
                onClick={() => setIsOpen(true)}
                aria-label="Open Chat"
            >
                <MessageCircle size={28} />
            </button>

            {/* Chat Window */}
            <div className={cn(styles.window, isOpen && styles.open)}>
                <div className={styles.header}>
                    <div className="flex items-center gap-2">
                        <Bot size={20} />
                        <span className="font-semibold">VDCC Assistant</span>
                    </div>
                    <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                </div>

                <div className={styles.messages} ref={scrollRef}>
                    {messages.map((msg, i) => (
                        <div key={i} className={cn(styles.msg, styles[msg.role])}>
                            {msg.text}
                        </div>
                    ))}
                    {loading && <div className={cn(styles.msg, styles.bot)}>Typing...</div>}
                </div>

                <div className={styles.inputArea}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Ask a question..."
                        className={styles.input}
                    />
                    <button
                        className={styles.sendBtn}
                        onClick={handleSend}
                        disabled={loading}
                    >
                        <Send size={18} />
                    </button>
                </div>
                <div className={styles.footer}>
                    This assistant provides information about VDCC only.
                </div>
            </div>
        </>
    );
}
