// "use client";

// import Image from "next/image";
// import React from "react";
// import thumb_1 from "@/assets/img/industries/oil_and_gas_desc.png";
// // import CounterItem from "../counter/counter-item";
// import Link from "next/link";
// import CounterItem from "../counter/counter-item";

// const AboutStyle1 = () => {
//   return (
//     <div className="about-style-one-area pt-60 pb-0 mb-0 pb-0">
//       <div className="container">
//         <div className="row align-end">
//           {/* Left Side Text */}
//           <div className="col-xl-6 col-lg-6">
//             <div className="about-style-one">
//               {/* <div className="h4 sub-heading">About Us</div> */}

//               <h3
//                 className="tp-about-campus-title mb-3"
//                 style={{ color: "#1d3a72" }}
//               >
//                 {/* Who We Are */}
//                 About Us
//               </h3>
//               {/*
//               <h2 className="title mb-25">
//                 Explore diverse industry focused services ensuring operational
//                 reliability, safety, and efficiency.
//               </h2> */}
//               <h4
//                 style={{ color: "#292929", fontSize: "18px" }}
//                 className="mb-4"
//               >
//                 Explore diverse industry focused services ensuring operational
//                 reliability, safety, and efficiency.
//               </h4>

//               <p style={{ textAlign: "left", lineHeight: "1.3" }}>
//                 Headquartered in the heart of the Middle East, with operations
//                 across Canada and beyond, Erith is a trusted provider of
//                 engineered solutions with over 25 years of industry experience.
//                 We support mission-critical operations across Oil & Gas, Power,
//                 Energy, Water, Nuclear, Mining, and Industrial Manufacturing,
//                 backed by a global team committed to quality, innovation, and
//                 performance.
//               </p>

//               <div className="owner-info">
//                 <div className="left-info">
//                   {/* <h4 style={{ fontSize: "18px" }}>Richard Edwin</h4>
//                   <span>CEO</span> */}
//                   <Link
//                     href="/about"
//                     style={{
//                       backgroundColor: "#1d3a72",
//                       color: "#fff",
//                       padding: "8px 18px",
//                       borderRadius: "10px",
//                       textDecoration: "none",
//                       fontWeight: "600",
//                       display: "inline-block",
//                       fontSize: "13px",
//                     }}
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//                 {/* <Link
//                   href="/about"
//                   style={{
//                     backgroundColor: "#1d3a72",
//                     color: "#fff",
//                     padding: "8px 18px",
//                     borderRadius: "10px",
//                     textDecoration: "none",
//                     fontWeight: "600",
//                     display: "inline-block",
//                     fontSize:"13px"
//                   }}
//                 >
//                   Get More
//                 </Link> */}
//               </div>
//             </div>
//           </div>

//           {/* Right Side Image */}
//           <div className="col-xl-6 col-lg-6 about-image-wrapper">
//             <div className="about-thumb">
//               <Image
//                 src={thumb_1}
//                 alt="about-thumb"
//                 style={{ borderRadius: "10px" }}
//               />
//             </div>
//             <div className="experience-box">
//               <div className="experience-text">
//                 <p>Over</p>
//                 <h3>
//                   <CounterItem min={0} max={40} />
//                 </h3>
//                 <p>
//                   Countries <br /> Erith’s regional networks
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ CSS IN SAME PAGE */}
//       <style jsx>{`
//         .about-image-wrapper {
//           position: relative;
//           overflow: hidden;
//         }

//         .owner-info {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           margin-top: 30px;
//         }

//         /* Experience Box - Desktop */
//         .experience-box {
//           position: absolute;
//           right: 10px;
//           bottom: 120px;
//           padding: 7px 36px 20px 24px;
//           border-radius: 6px;
//           border: 1px solid rgba(1, 15, 28, 0.1);
//           background: rgba(246, 244, 238, 0.6);
//           backdrop-filter: blur(10px);
//           min-width: 224px;
//         }

//         .experience-text {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .experience-text h3 {
//           margin: 0;
//           font-size: 90px;
//           line-height: 1;
//           color: #000;
//         }

//         .experience-text p {
//           margin: 0;
//           font-size: 18px;
//           line-height: 1.2;
//           color: #000;
//         }

//         /* Tablet & Below */
//         @media (max-width: 1199px) {
//           .experience-box {
//             left: 20px;
//             right: auto;
//             bottom: 20px;
//           }
//         }

//         /* Mobile */
//         @media (max-width: 767px) {
//           .experience-box {
//             left: 15px;
//             bottom: 15px;
//             padding: 6px 20px 14px 16px;
//           }

//           .experience-text h3 {
//             font-size: 60px;
//           }

//           .experience-text p {
//             font-size: 16px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AboutStyle1;

// "use client";

// import Image from "next/image";
// import React from "react";
// import thumb_1 from "@/assets/img/industries/oil_and_gas_desc.png";
// import Link from "next/link";
// import CounterItem from "../counter/counter-item";

// const AboutStyle1 = () => {
//   return (
//     <div className="about-style-one-area pt-60 pb-0 mb-0 pb-0">
//       <div className="container">
//         <div className="row align-end">
//           {/* Left Side Text */}
//           <div className="col-xl-6 col-lg-6">
//             <div className="about-style-one">
//               <h3
//                 className="tp-about-campus-title mb-3"
//                 style={{ color: "#1d3a72" }}
//               >
//                 About Us
//               </h3>

//               <h4
//                 style={{ color: "#292929", fontSize: "18px" }}
//                 className="mb-4"
//               >
//                 Explore diverse industry focused services ensuring operational
//                 reliability, safety, and efficiency.
//               </h4>

//               <p style={{ textAlign: "left", lineHeight: "1.3" }}>
//                 Headquartered in the heart of the Middle East, with operations
//                 across Canada and beyond, Erith is a trusted provider of
//                 engineered solutions with over 25 years of industry experience.
//                 We support mission-critical operations across Oil & Gas, Power,
//                 Energy, Water, Nuclear, Mining, and Industrial Manufacturing,
//                 backed by a global team committed to quality, innovation, and
//                 performance.
//               </p>

//               <div className="owner-info">
//                 <div className="left-info">
//                   <Link
//                     href="/about"
//                     style={{
//                       backgroundColor: "#1d3a72",
//                       color: "#fff",
//                       padding: "8px 18px",
//                       borderRadius: "10px",
//                       textDecoration: "none",
//                       fontWeight: "600",
//                       display: "inline-block",
//                       fontSize: "13px",
//                     }}
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Image */}
//           <div className="col-xl-6 col-lg-6">
//             <div
//               className="about-thumb"
//               style={{
//                 position: "relative",
//                 display: "inline-block",
//                 width: "100%",
//               }}
//             >
//               <Image
//                 src={thumb_1}
//                 alt="about-thumb"
//                 style={{
//                   borderRadius: "10px",
//                   display: "block",
//                   width: "100%",
//                   height: "auto",
//                 }}
//               />

//               {/* Experience Box — inside the image */}
//               <div className="experience-box">
//                 <div className="experience-text">
//                   {/* <p> Over</p> */}
//                   <h3
//                     style={{ fontSize: "60px", lineHeight: "1", color: "#000" }}
//                   >
//                     <CounterItem min={0} max={40} />
//                   </h3>
//                   <p
//                     style={{
//                       fontSize: "12px",
//                       lineHeight: "1.2",
//                       color: "#000",
//                     }}
//                   >
//                     + Countries. <br /> One Standard of Excellence.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .owner-info {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           margin-top: 30px;
//         }

//         /* Experience Box — always inside image, with right gap */
//         .experience-box {
//           position: absolute;
//           right: 16px;

//           bottom: 24px;
//           padding: 7px 36px 20px 24px;
//           border-radius: 6px;
//           border: 1px solid rgba(1, 15, 28, 0.1);
//           background: rgba(246, 244, 238, 0.6);
//           backdrop-filter: blur(10px);
//           min-width: 224px;
//         }

//         .experience-text {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .experience-text h3 {
//           margin: 0;
//           font-size: 90px;
//           line-height: 1;
//           color: #000;
//         }

//         .experience-text p {
//           margin: 0;
//           font-size: 18px;
//           line-height: 1.2;
//           color: #000;
//         }

//         /* Tablet */
//         @media (max-width: 1199px) {
//           .experience-box {
//             right: 16px;
//             bottom: 20px;
//           }
//         }

//         /* Mobile */
//         @media (max-width: 767px) {
//           .experience-box {
//             right: 12px;
//             bottom: 15px;
//             padding: 6px 20px 14px 16px;
//             min-width: unset;
//           }

//           .experience-text h3 {
//             font-size: 60px;
//           }

//           .experience-text p {
//             font-size: 16px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AboutStyle1;

"use client";

import Image from "next/image";
import React from "react";
import thumb_1 from "@/assets/img/industries/oil_and_gas_desc.png";
import Link from "next/link";
import CounterItem from "../counter/counter-item";

const AboutStyle1 = () => {
  return (
    <div className="about-style-one-area pt-60 pb-0 mb-0 pb-0">
      <div className="container">
        <div className="row align-end">
          {/* Left Side Text */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-style-one">
              <h3
                className="tp-about-campus-title mb-3"
                style={{ color: "#1d3a72" }}
              >
                About Us
              </h3>

              <h4
                style={{ color: "#292929", fontSize: "18px" }}
                className="mb-4"
              >
                Explore diverse industry focused services ensuring operational
                reliability, safety, and efficiency.
              </h4>

              <p style={{ textAlign: "left", lineHeight: "1.3" }}>
                Headquartered in the heart of the Middle East, with operations
                across Canada and beyond, Erith is a trusted provider of
                engineered solutions with over 25 years of industry experience.
                We support mission-critical operations across Oil & Gas, Power,
                Energy, Water, Nuclear, Mining, and Industrial Manufacturing,
                backed by a global team committed to quality, innovation, and
                performance.
              </p>

              <div className="owner-info">
                <div className="left-info">
                  <Link
                    href="/about"
                    style={{
                      backgroundColor: "#1d3a72",
                      color: "#fff",
                      padding: "8px 18px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: "600",
                      display: "inline-block",
                      fontSize: "13px",
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-xl-6 col-lg-6">
            <div
              className="about-thumb"
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              <Image
                src={thumb_1}
                alt="about-thumb"
                style={{
                  borderRadius: "10px",
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />

              {/* Experience Box */}
              <div className="experience-box">
                <div className="experience-text">
                  <h3
                    style={{
                      fontSize: "40px",
                      lineHeight: "1",
                      color: "#000",
                      margin: 0,
                      flexShrink: 0,
                    }}
                  >
                    <CounterItem min={0} max={40} />
                  </h3>

                  <div className="experience-content">
                    <span>+ Countries.</span>
                    <span>One Standard of Excellence.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .owner-info {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 30px;
        }

        .experience-box {
          position: absolute;
          right: 16px;
          bottom: 24px;
          // padding: 7px 36px 20px 24px;
          padding: 20px 20px 20px 20px;
          border-radius: 6px;
          border: 1px solid rgba(1, 15, 28, 0.1);
          background: rgba(246, 244, 238, 0.6);
          backdrop-filter: blur(10px);
          min-width: 224px;
        }

        .experience-text {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .experience-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          line-height: 1.2;
        }

        .experience-content span {
          font-size: 12px;
          color: #000;
          margin: 0;
          padding: 0;
          white-space: nowrap;
        }

        .experience-text h3 {
          margin: 0;
          font-size: 90px;
          line-height: 1;
          color: #000;
        }

        @media (max-width: 1199px) {
          .experience-box {
            right: 16px;
            bottom: 20px;
          }
        }

        @media (max-width: 767px) {
          .experience-box {
            right: 12px;
            bottom: 15px;
            padding: 6px 20px 14px 16px;
            min-width: unset;
          }

          .experience-text h3 {
            font-size: 60px;
          }

          .experience-content span {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutStyle1;
