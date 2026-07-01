"use client";

const certCards = [
  {
    id: 1,
    icon: "🏅",
    title: "ISO 9001 : 2015",
    description:
      "Quality management governing all manufacturing, inspection, and documentation processes",
  },
  {
    id: 2,
    icon: "📘",
    title: "BS EN 14917",
    description:
      "Metal bellows expansion joints designed and fabricated to European pressure equipment standard",
  },
  {
    id: 3,
    icon: "📄",
    title: "Material traceability",
    description:
      "Full material test reports (MTRs) provided with every order, traceable to mill certificate",
  },
  {
    id: 4,
    icon: "✅",
    title: "Qualified welding",
    description:
      "All welding procedures and welders qualified per applicable standard; weld records retained per order",
  },
];

const badges = [
  "ISO 9001 : 2015",
  "ISO 45001",
  "OHSAS 18001",
  "BS EN 14917",
  "MAKE IT IN THE EMIRATES",
];

export default function QualityCompliance() {
  return (
    <section
    className="wow fadeInLeft"
      style={{
        backgroundColor: "#f0f0f0",
        padding: "clamp(48px, 7vw, 88px) 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "28px",
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
              Quality &amp; Compliance
            </span>
          </div> */}

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
              Quality &amp; Compliance
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
              fontSize: "clamp(24px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "12px",
            }}
          >
            Built to standard. Certified to prove it.
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "clamp(13px, 1.4vw, 15px)",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            Every joint manufactured at our facility is produced and inspected
            under our formal quality management system.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-3 mb-4">
          {certCards.map((card) => (
            <div key={card.id} className="col-12 col-sm-6 col-lg-3">
              <div className="cert-card">
                <div className="cert-icon">{card.icon}</div>
                <h3 className="cert-title">{card.title}</h3>
                <p className="cert-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Badge row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginTop: "32px",
          }}
        >
          {badges.map((b) => (
            <span key={b} className="cert-badge">
              {b}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .cert-card {
          background: #fff;
          border-radius: 10px;
          padding: 28px 20px;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.10);
        }
        .cert-icon {
          font-size: 32px;
          line-height: 1;
        }
        .cert-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }
        .cert-desc {
          font-size: 13px;
          color: #777;
          line-height: 1.55;
          margin: 0;
        }
        .cert-badge {
          display: inline-block;
          padding: 8px 18px;
          background: #1a1a1a;
          color: #FFC600;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
