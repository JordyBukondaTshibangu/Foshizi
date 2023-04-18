import axios from "axios";
import { signOut } from "next-auth/react";
import { ButtonContainer } from "@/components/layout/logger/LoggerElement";
import { useState } from "react";
import {
  Overlay,
  ModalContainer,
  ModalHeading,
  ModalMessage,
  IconContainer,
  IconTrash,
  DeleteNotification,
} from "./DeleteAccountElement";
import Button from "@/components/base/button";
import Loading from "@/components/feedback/loading";
import Succes from "@/components/feedback/success";
import Failure from "@/components/feedback/failure";

const DeleteAccountModal = ({ userId, cancelDeletion }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteAccount = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://foshizi.herokuapp.com/api/deleteuser",
        {
          id: userId,
        }
      );
      setLoading(true);
      if (res.message === "something went wrong") {
        setError(true);
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
        signOut({
          callbackUrl: `${window.location.origin}`,
        });
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <Overlay>
      <ModalContainer>
        <IconContainer>
          <IconTrash />
        </IconContainer>
        <ModalHeading>You are about to delete your account</ModalHeading>
        <ModalMessage>This will delete your account permanently.</ModalMessage>
        <ModalMessage>Are you sure ?</ModalMessage>
        <ButtonContainer content="center">
          <Button
            size="xs"
            btnText="Cancel"
            link="/"
            bg="secondary"
            isBtn={true}
            onClick={cancelDeletion}
          />
          <Button
            size="xs"
            btnText="Delete Account"
            link="/"
            bg="danger"
            isBtn={true}
            onClick={deleteAccount}
          />
        </ButtonContainer>
      </ModalContainer>
      <DeleteNotification>
        {loading && <Loading />}
        {success && (
          <Succes
            heading="Bye, hurts to see you leaving"
            message="You have successfully deleted your account"
            close="/"
          />
        )}
        {error && (
          <Failure
            heading="Error"
            message="Oupsss, something went wrong, try again later..."
            close="/dashboard"
          />
        )}
      </DeleteNotification>
    </Overlay>
  );
};

export default DeleteAccountModal;
