import JobHero from "@/components/digitalmarketing/JobHero"
import JobDetails from "@/components/digitalmarketing/JobDetails"
import JobInfo from "@/components/digitalmarketing/JobInfo"
import Forms from "@/components/digitalmarketing/Forms"
import MoreOpenings from "@/components/digitalmarketing/MoreOpenings"
import { Form } from "lucide-react"
// nodejs developer imports

import NodeHero from "@/components/nodejs-developer/NodeHero"
import MoreOpening from "@/components/nodejs-developer/MoreOpening"
import NodeDetails from "@/components/nodejs-developer/NodeDetails"
import ContactBlock from "@/components/nodejs-developer/ContactBlock"

// wordpress developer imports
import InfoCards from "@/components/wordpressdeveloper/InfoCards"
import WordHero from "@/components/wordpressdeveloper/WordHero"
import HiringSlider from "@/components/career/HiringProcess"
import WhatWeOffer from "@/components/wordpressdeveloper/WhatWeOffer"
import WordForm from "@/components/wordpressdeveloper/WordForm"
import MoreWord from "@/components/wordpressdeveloper/MoreWord"

export default async function Page({ params }: any) {
  const { slug } = await params

  if (slug === "digital-marketing-analyst") {
    return (
      <>
        <JobHero />
        <JobDetails />
        <JobInfo />
        <Forms />
        <MoreOpenings />
      </>
    )
  }
 if (slug === "nodejs-developer") {
    return (
      <>
        <NodeHero />
        <NodeDetails />
        <ContactBlock />
        <Forms />
        <MoreOpening />
        {/* You can create and add NodeDetails, NodeInfo, NodeForms, NodeMoreOpenings components similar to the digital marketing ones */}
      </>
    )
  } 

  if (slug === "wordpress-developer") {
    return (
      <>
        <WordHero />
        <InfoCards />
        <HiringSlider />
        <WhatWeOffer />
        <WordForm />
        <MoreWord />
        {/* You can create and add WordDetails, WordInfo, WordForms, WordMoreOpenings components similar to the digital marketing ones */}
      </>
    )
  }


  return <div>Job Not Found</div>
}