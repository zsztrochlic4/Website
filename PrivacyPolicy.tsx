import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 px-6">
      <div className="mb-8 text-2xl sm:text-4xl font-bold text-white">
        <span>STRENGTH</span>
        <span className="text-[#A3E635]">HUB</span>
        <span>ONLINE</span>
      </div>

      <div className="w-36 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#A3E635] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
