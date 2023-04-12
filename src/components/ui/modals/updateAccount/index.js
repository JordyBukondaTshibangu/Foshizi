import { Overlay } from "../deleteAccount/DeleteAccountElement";

import Success from "@/components/feedback/success";
import Failure from "@/components/feedback/failure";

const UpdateAccountModal = ({ success, error }) => {
  if (success) {
    return (
      <Overlay>
        <Success
          heading="User updated"
          message="You profile has been updated successfully"
          close="/dashboard"
        />
      </Overlay>
    );
  }
  if (error) {
    return (
      <Overlay>
        <Failure
          heading="Error"
          message="Oupss, something went wrong"
          close="/dashboard"
        />
      </Overlay>
    );
  }
};

export default UpdateAccountModal;
