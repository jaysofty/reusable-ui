// @/components/ui/ProgressCircle.tsx

import React from "react";

interface ProgressCircleProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
  color?: string; // Hex color for the progress stroke
  bgColor?: string; // Hex color for the background circle
}

export function ProgressCircle({
  percent,
  size = 60,
  strokeWidth = 6,
  color = "#D84242", // Primary accent from image
  bgColor = "#35394A", // Background path
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - percent / 100);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        className="progress-circle__bg"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={bgColor}
        strokeWidth={strokeWidth}
      />
      <circle
        className="progress-circle__meter"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round" // Professional finish
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start from top
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="progress-circle__text text-xl font-extrabold"
        fill={color}
      >
        {percent}%
      </text>
    </svg>
  );
}