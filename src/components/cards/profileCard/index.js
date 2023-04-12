import { FaEnvelope, FaPhoneAlt, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import Card from "@/components/base/card";
import { IconElement } from "@/components/ui/header/HeaderElement";
import {
  ProfileContainer,
  ProfileItem,
  ParagraphBio,
} from "./ProfileCardElement";
import { useSession } from "next-auth/react";
import { Heading_H3 } from "@/components/layout/logger/LoggerElement";

const ProfileCard = ({ width, tab, user }) => {
  const { data: session } = useSession();

  if (tab === "library") {
    return (
      <Card width={width} title="Profile">
        <Heading_H3>Bio</Heading_H3>
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
        <ParagraphBio>
          We have grown to a company that has 200 research agents on the ground
          across all 9 provinces of SA. The company is 100% black owned and
          enjoys a level 1 BBB-EE score rating.
        </ParagraphBio>
      </Card>
    );
  }

  const {
    email,
    firstname,
    lastname,
    dateOfBirth,
    phone,
    role,
    physicalAddress,
  } = user;

  return (
    <Card width={width} title="Profile">
      <ProfileContainer>
        <ProfileItem>
          <IconElement bg="pink">
            <FaEnvelope />
          </IconElement>
          <p>{email}</p>
        </ProfileItem>
        {phone && (
          <ProfileItem>
            <IconElement bg="green">
              <FaPhoneAlt />
            </IconElement>
            <p>+{phone}</p>
          </ProfileItem>
        )}
        <ProfileItem>
          <IconElement bg="purple">
            <FaLock />
          </IconElement>
          <p>Change password</p>
        </ProfileItem>
        {physicalAddress.street && (
          <ProfileItem>
            <IconElement bg="#de821c">
              <FaMapMarkerAlt />
            </IconElement>
            <p>
              {physicalAddress.number +
                " " +
                physicalAddress.street +
                " " +
                physicalAddress.suburb}
            </p>
          </ProfileItem>
        )}
      </ProfileContainer>
    </Card>
  );
};

export default ProfileCard;
