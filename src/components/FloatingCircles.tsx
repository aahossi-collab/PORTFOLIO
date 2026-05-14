"use client";

import { motion } from "framer-motion";

export function FloatingCircles() {
  const blobs = [
    { color: "bg-purple-600", size: "w-[500px] h-[500px]", top: "10%", left: "5%", delay: 0 },
    { color: "bg-cyan-500", size: "w-[400px] h-[400px]", top: "40%", left: "60%", delay: 2 },
    { color: "bg-pink-500", size: "w-[350px] h-[350px]", top: "70%", left: "20%", delay: 4 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`blob ${blob.color} ${blob.size}`}
          style={{
            top: blob.top,
            left: blob.left,
            animationDelay: `${blob.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
