"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const SparklesCore = (props) => {
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        speed,
        particleColor,
        particleDensity,
    } = props;
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const canvasRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (canvasRef.current) {
                setDimensions({
                    width: canvasRef.current.offsetWidth,
                    height: canvasRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        const particles = [];
        const particleCount = Math.floor((dimensions.width * dimensions.height) / (particleDensity || 1200));

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                size: Math.random() * (maxSize - minSize) + minSize,
                speedY: (Math.random() - 0.5) * (speed || 1),
                opacity: Math.random(),
            });
        }

        let animationId;
        const animate = () => {
            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            particles.forEach((particle) => {
                ctx.fillStyle = particleColor || "#FFFFFF";
                ctx.globalAlpha = particle.opacity;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                particle.y += particle.speedY;
                particle.opacity = Math.sin(Date.now() * 0.001 + particle.x) * 0.5 + 0.5;

                if (particle.y < 0) particle.y = dimensions.height;
                if (particle.y > dimensions.height) particle.y = 0;
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [dimensions, minSize, maxSize, speed, particleColor, particleDensity]);

    return (
        <canvas
            ref={canvasRef}
            id={id}
            className={className}
            style={{
                background: background || "transparent",
            }}
        />
    );
};
