"use client";
import React, { useEffect, useRef } from "react";

export const DottedGlowBackground = ({
    className,
    opacity = 1,
    gap = 10,
    radius = 1.6,
    colorLightVar = "--color-neutral-500",
    glowColorLightVar = "--color-neutral-600",
    colorDarkVar = "--color-neutral-500",
    glowColorDarkVar = "--color-sky-800",
    backgroundOpacity = 0,
    speedMin = 0.3,
    speedMax = 1.6,
    speedScale = 1,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        const dots = [];
        const cols = Math.floor(canvas.width / gap);
        const rows = Math.floor(canvas.height / gap);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                dots.push({
                    x: i * gap,
                    y: j * gap,
                    baseX: i * gap,
                    baseY: j * gap,
                    speed: speedMin + Math.random() * (speedMax - speedMin),
                    angle: Math.random() * Math.PI * 2,
                });
            }
        }

        let animationId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach((dot) => {
                dot.angle += dot.speed * speedScale * 0.01;
                dot.x = dot.baseX + Math.cos(dot.angle) * 2;
                dot.y = dot.baseY + Math.sin(dot.angle) * 2;

                const gradient = ctx.createRadialGradient(
                    dot.x,
                    dot.y,
                    0,
                    dot.x,
                    dot.y,
                    radius * 2
                );
                gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
                gradient.addColorStop(1, "rgba(0, 212, 255, 0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [gap, radius, opacity, speedMin, speedMax, speedScale]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
            }}
        />
    );
};
