import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";
import Card from "@/components/base/card";
import Input from "@/components/base/input";
import { InputGroup } from "@/components/base/input/InputElement";
import Button from "@/components/base/button";
import { languagesOptions } from "@/data";
import Select from "@/components/base/select";
import { getSession, useSession } from "next-auth/react";

const AccountPanel = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <PanelContainer>
      <RowContainer>
        <Card width="full" title="Personal information" isAccountCard={true}>
          <InputGroup>
            <Input
              label="First Name"
              type="text"
              value={session.user ? session.user.name.split(" ")[0] : ""}
            />
            <Input
              label="Last Name"
              type="text"
              value={session.user ? session.user.name.split(" ")[1] : ""}
            />
          </InputGroup>
          <InputGroup>
            <Input label="Phone Number" type="text" />
            <Input
              label="Email Address"
              type="email"
              value={session.user ? session.user.email : ""}
            />
          </InputGroup>
        </Card>
      </RowContainer>
      <RowContainer>
        <Card width="full" title="General Preference" isAccountCard={true}>
          <InputGroup>
            <Select label="Language" options={languagesOptions} />
            <Input
              label="Username "
              type="text"
              value={session.user ? session.user.email : ""}
            />
          </InputGroup>
          <Button size="xs" btnText="Delete Account" link="/" bg="danger" />
        </Card>
      </RowContainer>
    </PanelContainer>
  );
};

export default AccountPanel;
