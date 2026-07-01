import Image from "next/image";
// import SwisQuote from "./swisquote";
import ChennaiQuote from "./chennaiQuote";

export default function AboutChennaiFacility() {
  return (
    <>
      <section
        className="tp-about-campus-info-area pt-40 pb-30 wow fadeInLeft"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left image */}

            {/* Right content */}
            <div className="col-lg-6">
              <div className="tp-about-campus-info-content">
                {/* <h3
                  className="tp-about-campus-title mb-3"
                  style={{ color: "#1d3a72" }}
                >
                  What is SWIS?
                </h3> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
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
                    About the facility
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "2px",
                      backgroundColor: "#FFC600",
                    }}
                  />
                </div>

                <h4
                  style={{ color: "#292929", fontSize: "18px" }}
                  className="mb-4"
                >
                  Where expansion joints are{" "}
                  <span style={{ color: "#FFC600" }}> engineered to last.</span>
                </h4>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  Erith&apos;s manufacturing facility is a fully equipped,
                  purpose-built production environment for expansion joint
                  fabrication. From large-diameter metal bellows formed on our
                  heavy-duty forming machine, to precision-welded flanged
                  assemblies — every joint is manufactured to client
                  specification and inspected before despatch.
                </p>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  The facility operates under our ISO 9001:2015 quality
                  management system. Welding is carried out by qualified welders
                  using ESAB equipment, and each product batch undergoes
                  dimensional verification and visual inspection prior to
                  release. Material traceability is maintained from mill
                  certificate through to finished goods.
                </p>
                <ChennaiQuote />
              </div>
            </div>
            <div className="col-lg-6 mb-4 mt-4 mb-lg-0">
              <div className="tp-about-campus-info-thumb">
                <Image
                  src="/assets/img/about/chennaiunitabout.jpg"
                  alt="About Erith Info"
                  width={700}
                  height={450}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                {/* <ConditionGradingSummary /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
