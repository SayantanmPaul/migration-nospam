"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SentimentGaugeProps {
  value: number;
  size?: number;
  className?: string;
}

export function SentimentGauge({
  value,
  size = 200,
  className,
}: SentimentGaugeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Get sentiment color based on value
  const getSentimentColor = (value: number) => {
    if (value >= 70) return "#10b981"; // green-500 for positive
    if (value >= 30) return "#f59e0b"; // amber-500 for neutral
    return "#ef4444"; // red-500 for negative
  };

  const getSentimentText = (value: number) => {
    if (value >= 70) return "Positive";
    if (value >= 30) return "Neutral";
    return "Negative";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Set up gauge parameters
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = (size / 2) * 0.8;

    // Draw background arc (gray)
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#e5e7eb"; // gray-200
    ctx.stroke();

    // Add gradient for value arc
    const sentimentColor = getSentimentColor(value);
    const gradient = ctx.createLinearGradient(0, 0, size, 0);
    gradient.addColorStop(0, sentimentColor);
    gradient.addColorStop(1, "#3b82f6"); // blue-500

    // Draw value arc
    const startAngle = Math.PI;
    const endAngle = Math.PI + (Math.PI * value) / 100;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
    ctx.lineWidth = 20;
    ctx.strokeStyle = gradient;
    ctx.stroke();

    // Add shadow to make it pop
    ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    // Draw center text
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "#1e293b"; // slate-800
    ctx.font = "bold 28px Poppins";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${Math.round(value)}%`, centerX, centerY - 15);

    ctx.fillStyle = sentimentColor;
    ctx.font = "600 18px Poppins";
    ctx.fillText(getSentimentText(value), centerX, centerY + 15);

    // Draw tick marks
    const tickMarks = [0, 25, 50, 75, 100];
    tickMarks.forEach((tick) => {
      const angle = Math.PI + (Math.PI * tick) / 100;
      const innerRadius = radius - 25;
      const outerRadius = radius + 5;

      const x1 = centerX + innerRadius * Math.cos(angle);
      const y1 = centerY + innerRadius * Math.sin(angle);
      const x2 = centerX + outerRadius * Math.cos(angle);
      const y2 = centerY + outerRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#cbd5e1"; // slate-300
      ctx.stroke();

      // Add tick labels
      const labelRadius = radius + 20;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);

      ctx.fillStyle = "#64748b"; // slate-500
      ctx.font = "12px Poppins";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${tick}`, labelX, labelY);
    });
  }, [value, size]);

  return (
    <div className={cn("flex justify-center items-center", className)}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size / 2 + 40}
        className="max-w-full"
      />
    </div>
  );
}
