import Image from "next/image";
// import SwisQuote from "./swisquote";

export default function EngineeringReliability() {
  return (
    <>
      <section
        className="tp-about-campus-info-area pt-40 pb-30 wow fadeInLeft"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left image */}
            <div className="col-lg-6 mb-4 mt-4 mb-lg-0">
              <div className="tp-about-campus-info-thumb">
                <Image
                  src="/assets/img/about/4/new/erithchennai.jpg"
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

            {/* Right content */}
            <div className="col-lg-6">
              <div className="tp-about-campus-info-content ">
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
                    Engineering reliability
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
                  style={{ color: "#292929", fontSize: "18px",lineHeight:"25px" }}
                  className="mb-4"
                >
                  Manufacturing, Service & <br />
                  <span style={{ color: "#FFC600" }}> Engineering Support</span>
                </h4>
                <p
                  className="mb-4"
                  style={{
                    lineHeight: 1.3,
                    color: "#292929",
                    // fontSize: "15px",
                  }}
                >
                  Our facility is registered under the APIC Industrial Area and
                  operates as Erith Global&apos;s primary manufacturing,
                  service, and engineering support hub — backing our UAE trading
                  operations with real production capacity.
                </p>
                <ul>
                  <p>
                    <strong
                      style={{
                        color: "#FFC600",
                        fontSize: "60px",
                        lineHeight: "1px",
                        paddingRight: "5px",
                      }}
                    >
                      .
                    </strong>
                    Purpose-built for expansion joint fabrication
                  </p>
                  <p>
                    {" "}
                    <strong
                      style={{
                        color: "#FFC600",
                        fontSize: "60px",
                        lineHeight: "1px",
                        paddingRight: "5px",
                      }}
                    >
                      .
                    </strong>
                    ISO 9001:2015 quality management system
                  </p>
                  <p>
                    {" "}
                    <strong
                      style={{
                        color: "#FFC600",
                        fontSize: "60px",
                        lineHeight: "1px",
                        paddingRight: "5px",
                      }}
                    >
                      .
                    </strong>
                    Supports Erith Global&apos;s Dubai operations
                  </p>
                  <p>
                    {" "}
                    <strong
                      style={{
                        color: "#FFC600",
                        fontSize: "60px",
                        lineHeight: "1px",
                        paddingRight: "5px",
                      }}
                    >
                      .
                    </strong>
                    Engineering reliability for critical industries
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
