// import Image from "next/image";
import ConditionGradingSummary from "./Conditiongradingsummary";
import SwisQuote from "./swisquote";

export default function Singlesurvey() {
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
                    What is SWIS?
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "2px",
                      backgroundColor: "#FFC600",
                    }}
                  />
                </div>

                {/* <h4
                  style={{ color: "#292929", fontSize: "25px" }}
                  className="mb-4"
                >
                  Explore diverse industry focused services ensuring operational
                  reliability, safety, and efficiency.
                </h4> */}

                <h4
                  style={{ color: "#292929", fontSize: "18px" }}
                  className="mb-4"
                >
                  A single survey.{" "}
                  <span style={{ color: "#FFC600" }}>Complete visibility.</span>
                </h4>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  The Erith Site Wide Integrity Survey (SWIS) is a structured,
                  end-to-end inspection methodology for expansion joints across
                  your entire facility. Rather than reactive spot-checks, SWIS
                  gives plant engineers a single, authoritative picture of every
                  bellow, flange, and anchor on site — documented, graded, and
                  actioned.
                </p>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  Our engineers carry out visual inspection, dimensional
                  verification, movement assessment, corrosion review, rubber
                  degradation analysis, and anchor & guide review for each
                  asset. Every finding is recorded against a unique SWIS Asset
                  ID and graded using our A–E condition system.
                </p>
                <SwisQuote />
              </div>
            </div>
            <div className="col-lg-6 mb-4 mt-4 mb-lg-0">
              <div className="tp-about-campus-info-thumb">
                {/* <Image
                  src="/assets/img/about/about_erith.jpg"
                  alt="About Erith Info"
                  width={700}
                  height={450}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                /> */}
                <ConditionGradingSummary />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
