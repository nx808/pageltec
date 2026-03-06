"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

/* ===== MAGNETIC BUTTON =====
 * Spring-physics magnetic pull toward cursor on hover.
 * strength: 0–1 (how strongly element attracts to cursor)
 */
interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
}

export default function MagneticButton({
    children,
    className = "",
    onClick,
    strength = 0.35,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        setPos({
            x: (e.clientX - (left + width / 2)) * strength,
            y: (e.clientY - (top + height / 2)) * strength,
        });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={() => setPos({ x: 0, y: 0 })}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.1 }}
            onClick={onClick}
            className={`inline-flex items-center justify-center cursor-pointer ${className}`}
        >
            {children}
        </motion.div>
    );
}
