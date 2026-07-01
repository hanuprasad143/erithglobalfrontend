import FaqItem from "../faq/faq-item";

const faqs = [
  {
    id: 1,
    question: "How long does a SWIS take to complete?",
    answer:
      "Timelines depend on the number of assets and site access. A typical mid-size facility (50–150 joints) takes 2–4 days on site, with the final report delivered within 2 weeks of the last inspection day.",
  },
  {
    id: 2,
    // active: true,
    question: "What information do I need to provide before the survey?",
    answer:
      "Ideally, P&IDs or isometric drawings, any existing maintenance records, and site access arrangements. If no drawings are available, our team can work from a walkdown alone.",
  },
  {
    id: 3,
    question: "Does the survey require plant shutdown?",
    answer:
      "No. SWIS is designed as a live-plant, non-intrusive inspection programme. We carry out external visual and dimensional assessment without requiring process isolation.",
  },
  {
    id: 4,
    question:
      "Can Erith supply the replacement joints identified in the report?",
    answer:
      "Yes. As an expansion joint manufacturer and supplier, Erith can provide a full supply-and-fit package based on the SWIS findings, with all replacements fully traceable to the original survey data.",
  },
  {
    id: 5,
    question: "What standards does the inspection follow?",
    answer:
      "Inspections reference BS EN 14917, EJMA standards, and client-specific requirements where applicable. All work is conducted under our ISO 9001:2015 quality management system.",
  },
];

export default function SwisFaqArea() {
  return (
    <section className="tp-faq-area tp-faq-p pt-50 pb-20 wow fadeInLeft"
        data-wow-delay=".3s">
          
            
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(32px, 5vw, 20px)",
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
            FAQs
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
          Common questions
        </h2>
        <p
          style={{
            color: "#888",
            fontSize: "clamp(12px, 1.4vw, 15px)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Everything you need to know before commissioning a SWIS
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-faq-box">
              <div className="tpd-accordion">
                <div className="accordion accordion-flush" id="faqAccordion">
                  {faqs.map((faq) => (
                    <FaqItem key={faq.id} faq={faq} parentId="faqAccordion" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
