import { Metadata } from "next";

// import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-three";
import BreadcrumbFour from "@/components/breadcrumb/breadcrumb-four";
// import SingleSurvey from "@/components/swis/singlesurvey";
import AboutChennaiFacility from "@/components/chennai-unit/Aboutchennaifacility";
import Howwemake from "@/components/chennai-unit/howwemake";
import InsideFacility from "@/components/chennai-unit/insidethefacility";
import Whatwemake from "@/components/chennai-unit/whatwemake";
// import ReadyToSurveyPage from "@/components/swis/readytoservey";
import ProductRange from "@/components/chennai-unit/productrange";
import QualityCompliance from "@/components/chennai-unit/qualityandcomplaince";
import EngineeringReliability from "@/components/chennai-unit/engineeringrelaibility";
import ReadyToDiscussPage from "@/components/chennai-unit/readytodiscuss";
import RequestCallStyle1 from "@/components/request/requeststyle";

export const metadata: Metadata = {
  title: "Chennai Manufacturing Facility - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function ChennaiManufacturingFacilityPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbFour
        subtitle="⦿ Manufacturing Facility"
        title={
          <>
            <span style={{ color: "#fff" }}>Built Where </span>
            <br />
            <span style={{ color: "#FFC600" }}>Precision </span>
            <br />
            <span style={{ color: "#fff" }}>Meets Scale</span>
          </>
        }
        description={
          <>
            A fully equipped, purpose-built expansion joint manufacturing
            facility —
            <br />
            producing metal bellows, flanged assemblies, and custom joints for
            critical
            <br />
            industry across the Gulf and beyond.
          </>
        }
      />
      {/* breadcrumb area end */}
      <AboutChennaiFacility />
      <InsideFacility />
      <Whatwemake />
      <Howwemake />
      <ProductRange />
      <RequestCallStyle1 />
      <QualityCompliance />
      <ReadyToDiscussPage />
      <EngineeringReliability />
      {/* <ReadyToSurveyPage /> */}
    </main>
  );
}
