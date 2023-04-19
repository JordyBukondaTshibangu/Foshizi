import { useState } from "react";
import {
  RowContainer,
  PanelContainer,
  RowContainerFeed,
} from "@/components/layout/dashboard/DashboardElement";
import Card from "@/components/base/card";
import Input from "@/components/base/input";
import { InputGroup } from "@/components/base/input/InputElement";
import Button from "@/components/base/button";
import { languagesOptions } from "@/data";
import Select from "@/components/base/select";
import axios from "axios";
import { ButtonContainer } from "@/components/layout/logger/LoggerElement";
import DeleteAccountModal from "../modals/deleteAccount";
import Loading from "@/components/feedback/loading";
import UpdateAccountModal from "../modals/updateAccount";

const provinces = [
  "Select Province",
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
];
const country = ["South Africa"];

const AccountPanel = ({ user }) => {
  const userId = user?._id;

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [phone, setphone] = useState(user.phone);

  const [number, setStreetNum] = useState(user.physicalAddress?.number);
  const [street, setStreet] = useState(user.physicalAddress?.street);
  const [suburb, setSuburb] = useState(user.physicalAddress?.suburb);
  const [city, setCity] = useState(user.physicalAddress?.city);
  const [province, setProvince] = useState("");
  const [countries, setCountry] = useState("South Africa");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [deleteAccountModal, setDeleteAccount] = useState(false);
  const [updateAccountModal, setUpdateAccount] = useState(false);

  const requestFn = async (field, value) => {
    try {
      const res = await axios.post(
        "https://foshizi.herokuapp.com/api/updateuser",
        {
          user_id: userId,
          field,
          value,
        }
      );
      setSuccess(true);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(true);
      setLoading(false);
      // throw new Error("Something went wrong with your " + field + " update");
    }
  };

  const updateUserInfo = async () => {
    const fields = [{ firstname }, { lastname }, { phone }];
    for (let i = 0; i <= fields.length; i++) {
      if (!fields[i]) return false;
      else {
        setLoading(true);
        if (
          Object.keys(fields[i])[0] === "firstname" &&
          firstname !== user.firstname
        ) {
          requestFn(Object.keys(fields[i])[0], firstname);
        }
        if (
          Object.keys(fields[i])[0] === "lastname" &&
          lastname !== user.lastname
        ) {
          requestFn(Object.keys(fields[i])[0], lastname);
        }
        if (Object.keys(fields[i])[0] === "phone" && phone !== user.phone) {
          requestFn(Object.keys(fields[i])[0], phone);
        }

        // updateAddress();
        setUpdateAccount(true);
      }
    }
  };

  const updateAddress = () => {
    if (number !== user.physicalAddress?.number) {
      requestFn("physicalAddress.number", parseInt(number));
    }
    if (street !== user.physicalAddress?.street) {
      requestFn("physicalAddress.street", street);
    }
    if (suburb !== user.physicalAddress?.suburb) {
      requestFn("physicalAddress.suburb", suburb);
    }
    if (city !== user.physicalAddress?.city) {
      requestFn("physicalAddress.city", city);
    }
    if (country) {
      requestFn("physicalAddress.country", country[0]);
    }
  };

  const cancelDeletion = () => setDeleteAccount(false);
  return (
    <PanelContainer>
      <RowContainer>
        <Card width="full" title="Personal information" isAccountCard={true}>
          <InputGroup>
            <Input
              label="First Name"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              label="Last Name"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Phone Number"
              type="text"
              minLength={10}
              maxLength={10}
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Street no"
              type="number"
              value={number}
              onChange={(e) => setStreetNum(e.target.value)}
            />
            <Input
              label="Street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              label="suburb"
              type="text"
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
            />
            <Input
              label="City"
              type="email"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Select label="Province" options={provinces} />
            <Select label="Country" options={country} />
          </InputGroup>
        </Card>
      </RowContainer>
      <RowContainerFeed>{loading && <Loading />}</RowContainerFeed>
      <RowContainer>
        <Card
          width="full"
          title="General Preference"
          isAccountCard={true}
          comingSoon={true}
        >
          <InputGroup>
            <Select label="Language" options={languagesOptions} />
            <Input label="Username " type="text" />
          </InputGroup>
          <ButtonContainer>
            <Button
              size="xs"
              btnText="Update Account"
              link="/"
              bg="primary"
              isBtn={true}
              onClick={updateUserInfo}
            />
            <Button
              size="xs"
              btnText="Delete Account"
              link="/"
              bg="danger"
              isBtn={true}
              onClick={() => setDeleteAccount(true)}
            />
          </ButtonContainer>
        </Card>
      </RowContainer>
      {deleteAccountModal && (
        <DeleteAccountModal userId={userId} cancelDeletion={cancelDeletion} />
      )}
      {updateAccountModal && (
        <UpdateAccountModal success={success} error={error} />
      )}
    </PanelContainer>
  );
};

export default AccountPanel;
