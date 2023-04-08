import { FaInfoCircle } from "react-icons/fa";
import Card from "@/components/base/card";
import Button from "@/components/base/button";
import {
  ContentContainer,
  Content,
  SpanElement,
} from "./AccountDetailsElement";
import { Heading_H3 } from "@/components/layout/logger/LoggerElement";

const AccountDetailsCard = ({ width }) => {
  return (
    <Card width={width} title="Account Details">
      <ContentContainer>
        <Content>
          <Heading_H3>Plan</Heading_H3>
          <div>
            <p>
              Basic
              <SpanElement>(Free)</SpanElement>Account
            </p>
            <p>10 responses per surverys</p>
          </div>
          <div>
            <p>
              Survery data storage :
              <span>
                <FaInfoCircle />
              </span>
            </p>
            <p>South Africa</p>
          </div>
        </Content>
        <Button btnText="Upgrade" link="create-survey" bg="primary" />
      </ContentContainer>
    </Card>
  );
};

export default AccountDetailsCard;
