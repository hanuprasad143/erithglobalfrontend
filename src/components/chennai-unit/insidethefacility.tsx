"use client";

import Image from "next/image";
import ab_img_1 from "@/assets/img/about/4/new/chennaiunitleft.jpg";
import ab_img_2 from "@/assets/img/about/4/new/weldquality.jpg";

import ab_img_4 from "@/assets/img/about/4/new/Precision_forming_rollers.jpg";
import ab_img_5 from "@/assets/img/about/4/new/Finished bellows_ready.jpg";

import ab_img_7 from "@/assets/img/about/4/new/production_batch.jpg";

const SIDE_HEIGHT = 460;

const precisionThumbs = [
  { id: 1, img: ab_img_1, title: "Large-diameter forming machine" },
  { id: 2, img: ab_img_2, title: "Weld quality supervision" },
  { id: 5, img: ab_img_5, title: "Finished bellows — batch ready" },
  { id: 4, img: ab_img_4, title: "Precision forming rollers" },
  { id: 7, img: ab_img_7, title: "Production batch — pre-inspection" },
];

export default function InsideFacility() {
  return (
    <section
      className="fix wow fadeInLeft"
      style={{
        backgroundColor: "#1a1a1a",
        padding: "clamp(40px, 6vw, 72px) 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* ── Existing header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(32px, 5vw, 32px)",
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
              Inside the Facility
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
            The factory floor
          </h2>
          <p
            style={{
              color: "#888",
              fontSize: "clamp(12px, 1.4vw, 15px)",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            From forming and welding to final inspection and despatch — this is
            how expansion joints are made at Erith.
          </p>
        </div>

        {/* ── IMAGE GRID ── */}
        <div className="row g-3">
          {/* LEFT BIG */}
          <div className="col-12 col-lg-4">
            <div className="prec-card" style={{ height: `${SIDE_HEIGHT}px` }}>
              <Image
                src={precisionThumbs[0].img}
                alt={precisionThumbs[0].title}
                width={0}
                height={0}
                sizes="(max-width: 992px) 100vw, 25vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              <span className="prec-label">{precisionThumbs[0].title}</span>
            </div>
          </div>

          {/* MIDDLE 2×2 */}
          <div className="col-12 col-lg-8">
            <div className="row g-3">
              {precisionThumbs.slice(1, 5).map((t) => (
                <div key={t.id} className="col-6">
                  <div className="prec-card" style={{ height: "222px" }}>
                    <Image
                      src={t.img}
                      alt={t.title}
                      width={0}
                      height={0}
                      sizes="(max-width: 992px) 50vw, 12vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <span className="prec-label">{t.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        // .prec-card {
        //   position: relative;
        //   border-radius: 10px;
        //   overflow: hidden;
        //   width: 100%;
        //    border-bottom: 5px solid #FFC600;
        // }
          .prec-card {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            // cursor: pointer;
            border-bottom: 3px solid #FFC600;
        }
.prec-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  }
  .prec-card img {
    transition: transform 0.4s ease, filter 0.3s ease;
  }
  .prec-card:hover img {
    transform: scale(1.04);
    filter: brightness(1.1);
  }
        .prec-label {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(0, 0, 0, 0.55);
          border-left: 2px solid #FFC600;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.5px;
          border-radius: 0 4px 4px 0;
          pointer-events: none;
        }
            /* Kill any gap below this section */
            section.fix + section,
            section.fix + div {
            margin-top: 0 !important;
            // padding-top: 0 !important;
        }
      `}</style>
    </section>
  );
}
