"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: 1,
    title: "Scope & Mobilisation",
    desc: "Site walkdown, P&ID review, asset list generation, access coordination",
  },
  {
    num: 2,
    title: "Field Inspection",
    desc: "Visual survey, dimensional checks, movement and corrosion assessment",
  },
  {
    num: 3,
    title: "Data Capture",
    desc: "Photography, measurements, defect recording against unique SWIS IDs",
  },
  {
    num: 4,
    title: "Grading & Analysis",
    desc: "A–E condition grading, root cause analysis, replacement exposure",
  },
  {
    num: 5,
    title: "Report & Review",
    desc: "Branded report delivery, 3-level sign-off, client acceptance and archiving",
  },
];

export default function SwisProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), 80);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        style={{
          backgroundColor: "#1a1a1a",
          padding: "clamp(40px, 6vw, 72px) 24px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(32px, 5vw, 56px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: "#FFC600",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#888",
                textTransform: "uppercase",
              }}
            >
              How it works
            </span>
            <div
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: "#FFC600",
              }}
            />
          </div>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            From site to report in 5 steps
          </h2>
          <p
            style={{
              color: "#888",
              fontSize: "clamp(12px, 1.4vw, 15px)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Our structured process ensures nothing is missed — from the first
            site walk to the final signed report.
          </p>
        </div>

        {/* Steps row */}
        <div
          className="sp-steps"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {/* Step content */}
              <div
                className="sp-step-inner"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Circle */}
                <div
                  style={{
                    position: "relative",
                    marginBottom: "16px",
                    zIndex: 1,
                  }}
                >
                  <div
                    className={`sp-circle${animate ? " run" : ""}`}
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      backgroundColor: "#FFC600",
                      color: "#1a1a1a",
                      fontWeight: 700,
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animationDelay: `${i * 0.18}s`,
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`sp-text${animate ? " run" : ""}`}
                  style={{ animationDelay: `${0.65 + i * 0.12}s` }}
                >
                  <h4
                    style={{
                      color: "#fff",
                      fontSize: "clamp(11px, 1.2vw, 13px)",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "clamp(10px, 1vw, 12px)",
                      lineHeight: 1.6,
                      maxWidth: "180px",
                      margin: "0 auto",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Animated dashed line connector */}
              {i < steps.length - 1 && (
                <div
                  className="sp-connector"
                  style={{
                    position: "absolute",
                    top: "26px",
                    left: "calc(50% + 26px)",
                    right: "calc(-50% + 26px)",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    width="100%"
                    height="4"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="2"
                      x2="100"
                      y2="2"
                      stroke="#FFC600"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={`sp-line${animate ? " run" : ""}`}
                      style={{ animationDelay: `${0.08 + i * 0.18}s` }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <style>{`
        @keyframes dashFlow {
          from { stroke-dashoffset: 300; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes popIn {
          0%   { transform: scale(0.3); opacity: 0; }
          70%  { transform: scale(1.18); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* default — hidden */
        .sp-circle {
          opacity: 0;
          transform: scale(0.3);
          will-change: transform, opacity;
        }
        .sp-line {
          stroke-dasharray: 12 8;
          stroke-dashoffset: 300;
          will-change: stroke-dashoffset;
        }
        .sp-text {
          opacity: 0;
          transform: translateY(12px);
          will-change: opacity, transform;
        }

        /* triggered */
        .sp-circle.run { animation: popIn  0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .sp-line.run   { animation: dashFlow 0.9s ease forwards; }
        .sp-text.run   { animation: fadeUp  0.4s ease forwards; }

        @media (max-width: 767px) {
          .sp-steps { flex-direction: column !important; gap: 28px; }
          .sp-connector { display: none !important; }
          .sp-step-inner { flex-direction: row !important; align-items: flex-start !important; gap: 16px; text-align: left !important; }
        }
      `}</style>
    </>
  );
}
