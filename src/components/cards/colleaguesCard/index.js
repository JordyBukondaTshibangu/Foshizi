import Card from "@/components/base/card";
import IconText from "@/components/base/iconText";
import { ColleagueContainer, ColleagueItem } from "./ColleagueCardElement";
import profileImage from "../../../../assets/images/profile.png";

const ColleagueCard = ({ width }) => {
  const colleagues = [
    {
      profile: profileImage,
      title: "John Dow",
      subtitle: "Software Engineer",
    },
    {
      profile: profileImage,
      title: "Jacques Smith",
      subtitle: "Designer UI/UX",
    },
    {
      profile: profileImage,
      title: "Gordon Lee",
      subtitle: "Teacher in art",
    },
    {
      profile: profileImage,
      title: "Evan Holified",
      subtitle: "Professor of Mathematic",
    },
  ];
  return (
    <Card width={width} title="Colleagues">
      <ColleagueContainer>
        {colleagues.map(({ profile, title, subtitle }, index) => (
          <ColleagueItem key={index}>
            <IconText
              image={profile}
              title={title}
              subtitle={subtitle}
              textSize="sm"
            />
          </ColleagueItem>
        ))}
      </ColleagueContainer>
    </Card>
  );
};

export default ColleagueCard;
