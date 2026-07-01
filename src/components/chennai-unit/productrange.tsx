"use client";

import Image from "next/image";

import img1 from "@/assets/img/about/4/new/Finished bellows_ready.jpg";
import img2 from "@/assets/img/about/4/new/production_batch.jpg";
import img3 from "@/assets/img/about/4/new/weldquality.jpg";
import img4 from "@/assets/img/about/4/new/Precision_forming_rollers.jpg";

const products = [
  {
    id: 1,
    img: img1,
    title: "Axial metal bellows",
    description:
      "Single and multi-ply corrugated bellows for axial movement absorption. Available in SS304, SS316L, and carbon steel.",
    tags: ["DN25–DN2000", "PN6–PN40", "SS304/316"],
  },
  {
    id: 2,
    img: img2,
    title: "Flanged assemblies",
    description:
      "Bellows with welded or loose flanges, full-faced or raised-face. Built to BS EN 14917 and client P&ID requirements.",
    tags: ["ANSI / EN", "FF / RF", "FULL MTR"],
  },
  {
    id: 3,
    img: img3,
    title: "Large-bore custom joints",
    description:
      "Bespoke large-diameter joints for ducting, exhaust, and process applications. Formed up to DN2000 on our heavy-duty rig.",
    tags: ["LARGE BORE", "BESPOKE", "ESAB WELDED"],
  },
  {
    id: 4,
    img: img4,
    title: "Tied & hinged universals",
    description:
      "Tied universal and hinged assemblies for lateral and angular movement, with tie rods or hinge hardware to client spring rate.",
    tags: ["LATERAL", "ANGULAR", "TIED / HINGED"],
  },
];

export default function ProductRange() {
  return (
    <section
      className="wow fadeInLeft"
      style={{
        // padding: "clamp(48px, 7vw, 88px) 24px",
        padding: "clamp(40px, 6vw, 72px) 24px",
        backgroundColor: "#fff",
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
              Product Range
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
              Product Range
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
            Expansion joint types
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "clamp(13px, 1.4vw, 15px)",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            Four primary product families, available in a range of materials,
            pressure ratings, and end connections.
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {products.map((p) => (
            <div key={p.id} className="col-12 col-md-6">
              <div className="prod-card">
                {/* Image */}
                <div className="prod-img">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 180px"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="prod-content">
                  <h3 className="prod-title">{p.title}</h3>
                  <p className="prod-desc">{p.description}</p>
                  <div className="prod-tags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="prod-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .prod-card {
          display: flex;
          flex-direction: row;
          background: #1a1a1a;
          border-radius: 10px;
          overflow: hidden;
          height: 100%;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .prod-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
        }
        .prod-img {
          width: 160px;
          min-width: 160px;
          height: 100%;
          min-height: 180px;
          flex-shrink: 0;
          overflow: hidden;
        }
        .prod-img img {
          transition: transform 0.4s ease;
        }
        .prod-card:hover .prod-img img {
          transform: scale(1.05);
        }
        .prod-content {
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }
        .prod-title {
          font-size: 15px;
          font-weight: 700;
          color: #FFC600;
          margin: 0;
          line-height: 1.3;
        }
        .prod-desc {
          font-size: 13px;
          color: #ccc;
          line-height: 1.55;
          margin: 0;
        }
        .prod-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .prod-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: #aaa;
          background: #2a2a2a;
          border: 1px solid #333;
          padding: 3px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        @media (max-width: 480px) {
          .prod-card { flex-direction: column; }
          .prod-img { width: 100%; min-width: unset; height: 180px; }
        }
      `}</style>
    </section>
  );
}
