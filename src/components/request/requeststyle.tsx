// import React from "react";
// import AchievementCounter1 from "../achievement/achievement";
// import Link from "next/link";

// const RequestCallStyle1 = () => {
//   return (
//     <>
//       <div
//         className="request-call-back-area text-light default-padding mb-30 position-relative"
//         style={{
//           backgroundImage: `url(/assets/img/banner/Every_weld_is_a_controlled_process.jpg)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {/* Black overlay */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.6)", // adjust 0.6 for more/less darkness
//             zIndex: 1,
//           }}
//         ></div>

//         <div className="container " style={{ position: "relative", zIndex: 2  }}>
//           <div className="row align-center">
//             <div className="col-lg-6">
//               <h2 className="title" style={{fontSize:"25px"}}>
//                 Looking for precision-engineered solutions and services?
//                 {/* <br />
//                 services designed with exceptional precision? */}
//               </h2>
//               <Link
//                 className="btn rectangle btn-light mt-30 mt-md-15 mt-xs-10 btn-md radius animation custom-hover-border"
//                 href="/contact"
//                 style={{ borderRadius: "10px",marginLeft:"10px",fontSize:"13px" }}
//               >
//                 Request a Call back
//               </Link>
//             </div>
//             <div className="col-lg-6 text-end">
//               <AchievementCounter1 />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RequestCallStyle1;

import React from "react";
// import Link from "next/link";

const RequestCallStyle1 = () => {
  return (
    <>
      <div
        className="request-call-back-area text-light position-relative wow fadeInLeft"
        style={{
          backgroundImage: `url(/assets/img/banner/Every_weld_is_a_controlled_process.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: 1,
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Black overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container"
          style={{ position: "relative", zIndex: 2, width: "100%" }}
        >
          <div className="row">
            <div className="col-lg-8">
              <div
                style={{
                  borderLeft: "3px solid #FFC600",
                  paddingLeft: "28px",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 26px)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.5,
                    marginBottom: "18px",
                  }}
                >
                  &quot;Every weld is a controlled process — qualified
                  procedure, qualified welder, documented result. There is no
                  shortcut on a joint that will carry live process fluid.&quot;
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: "#FFC600",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Erith Global — Manufacturing Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestCallStyle1;
