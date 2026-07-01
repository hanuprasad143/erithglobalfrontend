import category_data from "@/data/category-data";

export default function Whatwemake() {
  return (
    <section
      className="category-area pb-20 pt-20 mt-40 wow fadeInLeft"
      data-wow-delay=".3s"
      style={{
        backgroundColor: "#F8F7F4",
        padding: "clamp(40px, 6vw, 72px) 24px",
      }}
    >
      <style>{`
        div.tp-category-item {
          border-top: 3px solid #fecb00 !important;
          border-left: 1px solid #e0e0e0 !important;
          border-right: 1px solid #e0e0e0 !important;
          border-bottom: 1px solid #e0e0e0 !important;
          height: 100% !important;
          display: flex !important;
          flex-direction: column !important;
        }
        .category-col {
          display: flex;
          margin-bottom: 10px;
        },{
        .breadcrumb-subtitle-box {
      max-width: 100% !important;}
      `}</style>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 16px",
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
              What we make
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
              color: "#292929",
              fontSize: "clamp(22px, 3.5vw, 36px)",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Manufacturing capabilities
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
            A full range of expansion joint types, fabricated to BS EN 14917,
            EJMA, and client-specific standards.
          </p>
        </div>

        <div className="row align-items-stretch">
          {category_data.slice(6, 12).map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-4 col-sm-6 category-col"
            >
              <div
                className="tp-category-item mb-10"
                data-wow-delay={`.${item.id}s`}
                style={{ borderRadius: "8px" }}
              >
                <div className="tp-category-icon mb-0 pb-10">
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  className="tp-category-content"
                  style={{ fontSize: "15px" }}
                >
                  <p className="tp-category-title" style={{ color: "#292929" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "#888" }}>{item.description}</p>

                  <div
                    className="breadcrumb-subtitle-box"
                    style={{
                      backgroundColor: "#1a1a1a",
                      border: "1px solid #fecb00",
                      padding: "2px 10px",
                      textAlign: "start",
                      maxWidth: "400px",
                      borderRadius: "8px",
                      display: "inline-block",
                    }}
                  >
                    <span
                      style={{
                        color: "#fecb00",
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
