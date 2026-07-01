"use client";

import Link from "next/link";

const successStories = [
  {
    id: 1,
    title: "Oil, Gas & Petrochemical",
    slug: "High-pressure, high-temperature environments where expansion joint failure carries significant safety and financial risk.",
    label: "HAZOP-READY",
    image: "/assets/img/resources/oil_and_gas_desc.png",
    Link: "/industries/oil-gas",
  },
  {
    id: 2,
    title: "Water & Utilities",
    slug: "Treatment works, pumping stations, and distribution networks where rubber joint degradation leads to unplanned outages.",
    label: "COMPLIANCE",
    image: "/assets/img/resources/pic1.jpg",
    Link: "/industries/water-management",
  },
  {
    id: 3,
    title: "Power Generation",
    slug: "Thermal and combined cycle plants where cycling loads and steam service demand rigorous lifecycle monitoring.",
    label: "LIFECYCLE",
    image: "/assets/img/resources/power_desc.png",
    Link: "/industries/power-generation",
  },
];

export default function IndustryApplications() {
  return (
    <div style={{ backgroundColor: "#F8F7F4", paddingBottom: "60px" }}>
      <style>{`
        .story-col {
          display: flex;
        //   margin-bottom: 24px;
        }
        .story-card {
          border-radius: 12px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          min-height: 230px;
          width: 100%;
          position: relative;
        }
        .story-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          padding: 24px 30px 30px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .story-title {
          color: #FFC600;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
          margin-top: 12px;
          margin-bottom: 0;
        }
        .story-desc {
          color: white;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          margin-top: 12px;
          margin-bottom: 0;
        }
        .story-label {
          background-color: #1d3a72;
          color: #fff;
          padding: 4px 18px;
          border-radius: 10px;
          font-weight: 600;
          display: inline-block;
          font-size: 13px;
        }
        @media (max-width: 768px) {
          .story-title { font-size: 18px; }
          .story-desc  { font-size: 13px; }
        }
        @media (max-width: 480px) {
          .story-title { font-size: 16px; margin-top: 6px; }
          .story-desc  { font-size: 12px; margin-top: 6px; }
          .story-label { font-size: 12px; padding: 3px 12px; }
        }
      `}</style>

      <section
        className="tp-breadcrumb__area pb-40 p-relative z-index-1 fix wow fadeInLeft"
        data-wow-delay=".3s"
        style={{
          overflow: "visible",
          position: "relative",
          zIndex: 10,
        }}
      />

      <div
        className="wow fadeInLeft"
        data-wow-delay=".3s"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 16px",
          marginBottom: "32px",
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
            style={{ width: "32px", height: "2px", backgroundColor: "#FFC600" }}
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
            Industry Applications
          </span>
          <div
            style={{ width: "32px", height: "2px", backgroundColor: "#FFC600" }}
          />
        </div>

        <h2
          style={{
            color: "#292929",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Built for your sector
        </h2>

        <p
          style={{
            color: "#888",
            fontSize: "clamp(12px, 1.4vw, 15px)",
            maxWidth: "900px",
            width: "100%",
            whiteSpace: "normal",
            wordBreak: "break-word",
            lineHeight: "1.6",
          }}
        >
          SWIS is deployed across petrochemical, water treatment, power
          generation, and industrial process plants.
        </p>
      </div>

      <div className="container wow fadeInLeft" data-wow-delay=".3s">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {successStories.map((story) => (
            <div key={story.id} className="col story-col">
              <Link
                href={story.Link}
                className="story-card"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                <div className="story-overlay">
                  <div>
                    <h3 className="story-title">{story.title}</h3>
                    <p className="story-desc">{story.slug}</p>
                  </div>
                  {/* <div>
                    <span className="story-label">{story.label}</span>
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
