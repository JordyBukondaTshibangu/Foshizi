import Card from "@/components/base/card";
import { useSelector } from "react-redux";
import { selectUser } from "@/components/base/store/authSlice";
import { ProfileContainer, ProfileItem } from './ProfileCardElement';
import { IconElement } from '@/components/ui/header/HeaderElement';
import { FaEnvelope, FaLock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ProfileCard = ({ width, tab }) => {
  const user = useSelector(selectUser);

  if (tab === "library") {
    return (
      <Card width={width} title="Profile">
        <h2 style={{ marginBottom: "5%", color: "lightblue" }}>Bio</h2>
        <p style={{ padding: "4% 2%" }}>
          Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed
          diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna
          aliquam erat volutpat
        </p>

        <p style={{ padding: "4% 2%" }}>
          Ut wisi enim ad minim veniam,
          quis nos adipiscing elit, sed diam
          nonummy nibh euismod.Lorem
          ipsum dipiscing elit, sed diam
          nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam
          erat volutpat.  Ut wisi enim ad
          minim veniam, quis nos adipiscing
          elit, sed diam nonummy nibh
          euismod
        </p>
        <p style={{ padding: "4% 2%" }}>
          Ut wisi enim ad minim veniam,
          quis nos adipiscing nt ut laoreet
          dolore magna aliquam erat
          volutpat.  Ut wisi enim ad minim
          veniam, quis nos adipiscing elit,
          sed diam nonummy nibh euismod
        </p>
      </Card>
    );
  }

  return (
    <Card width={width} title="Profile">
      <ProfileContainer>
        <ProfileItem>
          <IconElement bg="pink">
            <FaEnvelope />
          </IconElement>
          <p>{user?.email}</p>
        </ProfileItem>
        <ProfileItem>
          <IconElement bg="green">
            <FaPhoneAlt />
          </IconElement>
          <p>+{user?.number}</p>
        </ProfileItem>
        <ProfileItem>
          <IconElement bg="purple">
            <FaLock />
          </IconElement>
          <p>Change password</p>
        </ProfileItem>
        <ProfileItem>
          <IconElement bg="#de821c">
            <FaMapMarkerAlt />
          </IconElement>
          <p>5a Margueritte Street, La Rochelle, 2090</p>
        </ProfileItem>
      </ProfileContainer></Card>
  )
};

export default ProfileCard;
