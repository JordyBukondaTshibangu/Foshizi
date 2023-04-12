import Card from "@/components/base/card";
import { BioContent } from "./BioElement";
import { ParagraphBio } from "../profileCard/ProfileCardElement";

const BioCard = ({ width }) => {
  return (
    <Card width={width} title="Bio">
      <BioContent>
        <ParagraphBio>
          We are specialists in Mass Market Research and Strategy across all LSM
          and social groups in South Africa for clients like Vodacom, Toyota,
          Nando's and many others. Our USP is that we offer clients diverse
          strategic solutions that are borne out of the research we conduct.
        </ParagraphBio>
        <ParagraphBio>
          We have a reputable track record in which we have provided assistance
          for some established multi- nationals, as well as local institutions
          in the market. Since its establishment in 2004, Foshizi has
          established a niche in the market as being amongst the few consumer
          research companies in the forefront.
        </ParagraphBio>
      </BioContent>
    </Card>
  );
};

export default BioCard;
