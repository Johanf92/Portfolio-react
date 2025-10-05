import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome to Johan's Portfolio!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          const el = document.querySelector("#loading-screen");
          if (el) el.classList.add("animate-fade-out");
          setTimeout(() => onComplete(), 600);
        }, 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center bg-black text-gray-100 animate-fade-in"
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        minHeight: "100dvh",
        paddingInline: "clamp(1rem, 4vw, 2rem)",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="mb-8 text-xl sm:text-2xl md:text-3xl font-mono font-bold leading-snug break-words max-w-[90vw]">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[75vw] sm:w-[55vw] md:w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-yellow-500 shadow-[0_0_15px_#facc15] animate-loading-bar"></div>
      </div>
    </div>
  );
};
