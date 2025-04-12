"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ModelAccuracyProps {
  accuracy: number;
  className?: string;
  testingAccuracy: number;
  trainingAccuracy: number;
  datasetLength: string;
}

export function ModelAccuracy({
  accuracy,
  className,
  trainingAccuracy,
  testingAccuracy,
  datasetLength,
}: ModelAccuracyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const percentage = (accuracy * 100).toFixed(2);

  // Get accuracy rating
  const getAccuracyRating = (accuracy: number) => {
    if (accuracy >= 0.9) return { text: "Excellent", color: "bg-green-500" };
    if (accuracy >= 0.8) return { text: "Good", color: "bg-blue-500" };
    if (accuracy >= 0.7) return { text: "Average", color: "bg-amber-500" };
    return { text: "Poor", color: "bg-red-500" };
  };

  const rating = getAccuracyRating(accuracy);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background line
    const lineY = height / 2;
    const lineWidth = 10;

    ctx.beginPath();
    ctx.moveTo(0, lineY);
    ctx.lineTo(width, lineY);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#e5e7eb"; // gray-200
    ctx.stroke();

    // Draw accuracy line
    const accuracyWidth = width * accuracy;

    ctx.beginPath();
    ctx.moveTo(0, lineY);
    ctx.lineTo(accuracyWidth, lineY);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#3b82f6"; // blue-500
    ctx.stroke();

    // Draw markers
    const markers = [0, 0.25, 0.5, 0.75, 1];
    const markerRadius = 4;

    markers.forEach((marker) => {
      const x = width * marker;

      // Draw marker circle
      ctx.beginPath();
      ctx.arc(x, lineY, markerRadius, 0, 2 * Math.PI);
      ctx.fillStyle = marker <= accuracy ? "#3b82f6" : "#e5e7eb";
      ctx.fill();

      // Draw marker label
      ctx.fillStyle = "#6b7280"; // gray-500
      ctx.font = "20px Poppins";
      ctx.textAlign = "center";
      ctx.fillText(`${marker * 100}%`, x, lineY + 25);
    });

    // Draw accuracy point
    ctx.beginPath();
    ctx.arc(accuracyWidth, lineY, markerRadius + 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#3b82f6";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [accuracy]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold">{percentage}%</h3>
            <Badge className={cn("text-white", rating.color)}>
              {rating.text}
            </Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Model accuracy represents how often the sentiment prediction
                    matches human evaluation. Our model achieves {percentage}%
                    accuracy on the test dataset.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p
            className=" text-[#256D85] font-semibold text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Based on {datasetLength} manually labeled reviews
          </p>
        </div>
      </div>

      <div className="w-full">
        <canvas
          ref={canvasRef}
          width={800}
          height={60}
          className="w-full h-auto text-sm"
        />
      </div>
      <div className="flex justify-around gap-4 text-center text-sm">
        <div className="rounded-lg bg-white/50 p-3">
          <div
            className=" text-[#256D85] font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Training Accuracy
          </div>
          <div
            className="text-lg font-semibold text-[#615fff]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {(trainingAccuracy * 100).toFixed(2)}%
          </div>
        </div>
        <div className="rounded-lg bg-white/50 p-3">
          <div
            className=" text-[#256D85] font-semibold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Testing Accuracy
          </div>
          <div
            className="text-lg font-semibold text-[#615fff]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {(testingAccuracy * 100).toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}
