import Link from "next/link";

const badges = [
  "ISO 9001 : 2015 Certified",
  "OHSAS 18001",
  "ISO 45001",
  "Make It in the Emirates",
];

export default function ReadyToSurveyPage() {
  return (
    <section
      className="wow fadeInLeft"
      data-wow-delay=".3s"
      style={{
        backgroundColor: "#FFC600",
        padding: "clamp(40px, 6vw, 64px) 24px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#1a1a1a",
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 700,
          marginBottom: "10px",
        }}
      >
        Ready to survey your site?
      </h2>

      <p
        style={{
          color: "#5c5c5c",
          fontSize: "clamp(13px, 1.5vw, 16px)",
          maxWidth: "600px",
          margin: "0 auto 32px",
          lineHeight: 1.6,
        }}
      >
        Talk to our engineering team about scoping a SWIS programme for your
        facility. Turnaround from mobilisation to final report typically within
        4–6 weeks.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "14px",
          marginBottom: "32px",
        }}
      >
        <Link
          href="/contact"
          style={{
            backgroundColor: "#1a1a1a",
            color: "#FFC600",
            fontWeight: 700,
            fontSize: "14px",
            padding: "14px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Request a Survey
        </Link>

        {/* <Link
          href="/contact"
          style={{
            backgroundColor: "transparent",
            color: "#1a1a1a",
            fontWeight: 700,
            fontSize: "14px",
            padding: "13px 28px",
            borderRadius: "6px",
            border: "2px solid #1a1a1a",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Speak to an Engineer
        </Link> */}
        <a
          href="tel:+919876543210"
          style={{
            backgroundColor: "transparent",
            color: "#1a1a1a",
            fontWeight: 700,
            fontSize: "14px",
            padding: "13px 28px",
            borderRadius: "6px",
            border: "2px solid #1a1a1a",
            textDecoration: "none",
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          Speak to an Engineer
        </a>
      </div>

      {/* Certification badges */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "28px",
          rowGap: "12px",
        }}
      >
        {badges.map((b) => (
          <div
            key={b}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            {/* <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                display: "inline-block",
                flexShrink: 0,
              }}
            /> */}
               <span
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                <path
                  d="M1 4L4 7.5L10 1"
                  stroke="#FFC600"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}
