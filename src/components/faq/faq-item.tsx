// type IProps = {
//   faq: {
//     id: number;
//     active?: boolean;
//     question: string;
//     answer: string;
//   };
//   parentId: string;
// };

// export default function FaqItem({ faq, parentId }: IProps) {

//   return (

//     <div
//       className={`accordion-item ${faq.active ? "expand" : ""}`}
//       key={faq.id}

//     >
//       <h2 className="accordion-header" >
//         <button
//           className={`accordion-button ${faq.active ? "faq-expend" : "collapsed"}`}
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target={`#flush-collapse${faq.id}`}
//           aria-expanded="false"
//           aria-controls={`flush-collapse${faq.id}`}
//           style={{ fontSize: "15px", color: "#292929"}}
//         >
//           {faq.question}
//           <span  className="accordion-btn"></span>
//         </button>
//       </h2>
//       <div
//         id={`flush-collapse${faq.id}`}
//         className={`accordion-collapse collapse ${faq.active ? "show" : ""}`}
//         data-bs-parent={`#${parentId}`}
//       >
//         <div className="accordion-body">{faq.answer}</div>
//       </div>
//     </div>
//   );
// }

type IProps = {
  faq: {
    id: number;
    active?: boolean;
    question: string;
    answer: string;
  };
  parentId: string;
};

export default function FaqItem({ faq, parentId }: IProps) {
  return (
    <>
      <style>{`
  .tp-faq-box .accordion-button:not(.collapsed),
  .tpd-accordion .accordion-button:not(.collapsed),
  .accordion-flush .accordion-button:not(.collapsed) {
    // background-color: #FFC600 !important;
    background-color: rgba(255, 198, 0, 0.50) !important;
    color: #1a1a1a !important;
    box-shadow: none !important;
  }
  .tp-faq-box .accordion-button:not(.collapsed) .accordion-btn::before,
  .tp-faq-box .accordion-button:not(.collapsed) .accordion-btn::after,
  .tpd-accordion .accordion-button:not(.collapsed) .accordion-btn::before,
  .tpd-accordion .accordion-button:not(.collapsed) .accordion-btn::after {
    background-color: #1a1a1a !important;
  }
  .tp-faq-box .accordion-button.collapsed,
  .tpd-accordion .accordion-button.collapsed {
    color: #292929 !important;
  }
`}</style>
      <div
        className={`accordion-item ${faq.active ? "expand" : ""}`}
        key={faq.id}
      >
        <p className="accordion-header">
          <button
            className={`accordion-button ${faq.active ? "faq-expend" : "collapsed"}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${faq.id}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${faq.id}`}
            style={{ fontSize: "15px", color: "#292929" }}
          >
            {faq.question}
            <span className="accordion-btn"></span>
          </button>
        </p>
        <div
          id={`flush-collapse${faq.id}`}
          className={`accordion-collapse collapse ${faq.active ? "show" : ""}`}
          data-bs-parent={`#${parentId}`}
        >
          <div className="accordion-body" style={{ fontSize: "15px" }}>
            {faq.answer}
          </div>
        </div>
      </div>
    </>
  );
}
