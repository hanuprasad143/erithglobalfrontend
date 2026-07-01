import { Metadata } from "next";

import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-three";
import SingleSurvey from "@/components/swis/singlesurvey";
import SwisProcess from "@/components/swis/swisprocess";
import SwisFaqArea from "@/components/swis/swisfaq";
import Whatwerecieve from "@/components/swis/whatyourecieve";
import ReportSections from "@/components/swis/reportsections";
import IndustryApplications from "@/components/swis/industryapplications";
import ReadyToSurveyPage from "@/components/swis/readytoservey";

export const metadata: Metadata = {
  title: "SWIS-Details - Erith",
  icons: {
    icon: "/favicon.png",
  },
};

export default function SwisStanPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbThree
        subtitle="SWIS — SITE WIDE INTEGRITY SURVEY"
        title={
          <>
            <span style={{ color: "#fff" }}>Expansion Joint </span>
            <br />
            <span style={{ color: "#FFC600" }}>Asset Integrity </span>
            <br />
            <span style={{ color: "#fff" }}>Assessment</span>
          </>
        }
        description={
          <>
            A comprehensive, plant-wide inspection programme delivering
            condition
            <br />
            assessments, lifecycle evaluations, risk identification and
            data-driven
            <br />
            replacement planning for every expansion joint on your site.
          </>
        }
      />
      {/* breadcrumb area end */}
      <SingleSurvey />
      <Whatwerecieve />
      <SwisProcess />
      <ReportSections />
      <IndustryApplications/>
      <ReadyToSurveyPage/>
      <SwisFaqArea />
    </main>
  );
}
