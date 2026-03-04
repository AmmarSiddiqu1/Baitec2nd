import { useState, useEffect, type FC } from "react";

const words = ["BUILDING,", "HOME,", "APARTMENT"];

const ManageBuilding: FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="manage-building" className="relative overflow-hidden" style={{ backgroundColor: "#002B49", padding: "clamp(4rem, 6vw, 6rem) 0" }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text */}
        <div className="flex-1 relative z-10">
          <div
            className="relative inline-block rounded-2xl backdrop-blur-md"
            style={{
              padding: "clamp(2rem, 4vw, 3rem)",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              boxShadow: "0 0 40px rgba(132,218,222,0.1)",
            }}
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none animate-glow-pulse" style={{ border: "1px solid rgba(255,255,255,0.2)" }} />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.2 }}>
              <span className="block" style={{ color: "rgba(255,255,255,0.8)", fontWeight: 300 }}>Manage your</span>
              <span className="block mt-2">
                <span
                  className="inline-block font-extrabold transition-all duration-400"
                  style={{
                    color: "#FFFFFF",
                    opacity: fading ? 0 : 1,
                    transform: fading ? "translateY(8px)" : "translateY(0)",
                    textShadow: "0 0 30px rgba(132,218,222,0.5), 0 0 60px rgba(30,202,211,0.3)",
                  }}
                >
                  {words[currentWord]}
                </span>
              </span>
              <span className="block font-extrabold mt-1" style={{ color: "#FFFFFF" }}>
                OR {words[(currentWord + 1) % words.length]}
              </span>
              <span className="block mt-2" style={{ color: "rgba(255,255,255,0.8)", fontWeight: 300 }}>with ease</span>
            </h2>
          </div>
        </div>

        {/* Right: Blue bar (left) + Red bar (right), bottoms aligned, small gap */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="flex items-end" style={{ gap: "clamp(4px, 0.5vw, 8px)", height: "clamp(300px, 35vw, 450px)" }}>
            {/* Blue bar - left, taller */}
            <img
              src="/assets/images/manage/manage_blue_bar.svg"
              alt="Blue Bar"
              className="animate-glow-pulse"
              style={{
                height: "100%",
                width: "auto",
                filter: "drop-shadow(0 0 15px rgba(132,218,222,0.4))",
              }}
            />
            {/* Red bar - right, shorter, bottom-aligned */}
            <img
              src="/assets/images/manage/manage_red_bar.svg"
              alt="Red Bar"
              className="animate-glow-pulse"
              style={{
                height: "66%",
                width: "auto",
                filter: "drop-shadow(0 0 15px rgba(255,68,56,0.4))",
                animationDelay: "1.5s",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBuilding;
