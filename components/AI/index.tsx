"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const cards = [
    { title: "AI reads data points per second", desc: "Processes massive datasets instantly for precision.", img: "/images/robo/data.png" },
    { title: "AI eliminates fatigue", desc: "Never gets tired, performs 24/7.", img: "/images/robo/eliminate.png" },
    { title: "Humans panic, AI doesn’t", desc: "AI trades with logic, not emotion.", img: "/images/robo/human.png" },
    { title: "AI learns market patterns", desc: "Adapts strategies automatically.", img: "/images/robo/market.png" },
    { title: "AI reduces emotional decisions", desc: "Removes human bias completely.", img: "/images/robo/emotional.png" },
];

const CARD_WIDTH = 280;
const GAP = 24;
const SPEED = 0.6;

export default function AIWinsMarquee() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const x = useRef(0);

    useEffect(() => {
        let rafId: number;

        const animate = () => {
            if (!trackRef.current || !containerRef.current) return;

            x.current -= SPEED;

            const totalWidth = (CARD_WIDTH + GAP) * cards.length;
            if (Math.abs(x.current) >= totalWidth) {
                x.current = 0;
            }

            trackRef.current.style.transform = `translateX(${x.current}px)`;

            const containerCenter = containerRef.current.offsetWidth / 2;
            const currentCenter =
                Math.abs(x.current) + containerCenter;

            const index =
                Math.round(currentCenter / (CARD_WIDTH + GAP)) % cards.length;

            setActiveIndex(index);

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <section className="w-full bg-gradient-to-b from-[#020617] to-[#020b2a] py-24 overflow-x-hidden overflow-y-visible">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-[760px] mx-auto mb-16">
                    <h2 className="text-[36px] font-semibold text-white mb-4">
                        AI Always Wins Over Human Emotion
                    </h2>
                    <p className="text-white/70">
                        AI never panics, never gets tired, and never makes emotional decisions.
                    </p>
                </div>

                {/* Carousel */}
                <div
                    ref={containerRef}
                    className="overflow-x-hidden overflow-y-visible py-10"
                >
                    <div
                        ref={trackRef}
                        className="flex gap-6 will-change-transform"
                    >
                        {[...cards, ...cards].map((card, index) => {
                            const isActive = index % cards.length === activeIndex;

                            return (
                                <div
  key={index}
  style={{ width: CARD_WIDTH, height: 420, flexShrink: 0 }}
  className={`relative bg-white/5 border border-white/10 rounded-[14px]
    overflow-hidden
    transition-transform duration-500 ease-out
    ${isActive ? "scale-110 -translate-y-3 z-10" : "scale-100"}
  `}
>

                                   <Image
  src={card.img}
  alt={card.title}
  width={400}
  height={260}
  className="w-full h-[300px] object-cover"
/>


                                    <div className="p-4">
                                        <h3 className="text-white text-[15px] font-medium mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/60 text-[13px] leading-[20px]">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
