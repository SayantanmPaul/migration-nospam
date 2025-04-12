"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SentimentEvaluationResType } from "@/types/types";

const SentimentDistribution = ({ probability }: SentimentEvaluationResType) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate total
    const total = probability.reduce((sum, val) => sum + val, 0);
    if (total === 0) return;

    // Calculate percentages (round to nearest integer for display)
    const positivePercent = Math.round((probability[2] / total) * 100);
    const neutralPercent = Math.round((probability[1] / total) * 100);
    const negativePercent = Math.round((probability[0] / total) * 100);

    // Draw bars
    const barHeight = 40;
    const gap = 30;
    const startY = (height - (3 * barHeight + 2 * gap)) / 2;
    const cornerRadius = 6;

    // Function to draw rounded rectangle
    const drawRoundedRect = (
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    };

    // Add shadow to all bars
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    // Positive bar with gradient
    const positiveGradient = ctx.createLinearGradient(0, 0, width, 0);
    positiveGradient.addColorStop(0, "#10b981"); // green-500
    positiveGradient.addColorStop(1, "#34d399"); // green-400

    drawRoundedRect(
      0,
      startY,
      width * (positivePercent / 100),
      barHeight,
      cornerRadius
    );
    ctx.fillStyle = positiveGradient;
    ctx.fill();

    // Neutral bar with gradient
    const neutralGradient = ctx.createLinearGradient(0, 0, width, 0);
    neutralGradient.addColorStop(0, "#f59e0b"); // amber-500
    neutralGradient.addColorStop(1, "#fbbf24"); // amber-400

    drawRoundedRect(
      0,
      startY + barHeight + gap,
      width * (neutralPercent / 100),
      barHeight,
      cornerRadius
    );
    ctx.fillStyle = neutralGradient;
    ctx.fill();

    // Negative bar with gradient
    const negativeGradient = ctx.createLinearGradient(0, 0, width, 0);
    negativeGradient.addColorStop(0, "#ef4444"); // red-500
    negativeGradient.addColorStop(1, "#f87171"); // red-400

    drawRoundedRect(
      0,
      startY + 2 * (barHeight + gap),
      width * (negativePercent / 100),
      barHeight,
      cornerRadius
    );
    ctx.fillStyle = negativeGradient;
    ctx.fill();

    // Reset shadow for text
    ctx.shadowColor = "transparent";

    // Add labels
    ctx.fillStyle = "#fff"; // White text for better contrast
    ctx.font = "400 14px Poppins";
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";

    // Positive label
    ctx.fillText(`${positivePercent}%`, 16, startY + barHeight / 2);

    // Neutral label
    ctx.fillText(
      `${neutralPercent}%`,
      16,
      startY + barHeight + gap + barHeight / 2
    );

    // Negative label
    ctx.fillText(
      `${negativePercent}%`,
      16,
      startY + 2 * (barHeight + gap) + barHeight / 2
    );
  }, [probability]);

  return (
    <div className={cn("w-full")}>
      <canvas
        ref={canvasRef}
        width={800}
        height={220}
        className="w-full h-auto"
      />
    </div>
  );
};

export default SentimentDistribution;
