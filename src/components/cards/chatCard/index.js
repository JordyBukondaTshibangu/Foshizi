import Card from "@/components/base/card";
import {
  ChatReceiver,
  ChatSender,
  ChatContent,
  ChatContentReceiver,
  Chat,
  Pointer,
  PointerReceiver,
} from "./ChatElement";
import {
  ImageContainer,
  ImageElement,
} from "@/components/base/iconText/IconTextElement";
import profileImage from "../../../../assets/images/profile.png";

const ChatCard = () => {
  return (
    <Card width="half" title="Chat" comingSoon={true}>
      <ChatSender>
        <ImageContainer>
          <ImageElement
            src={profileImage}
            width=""
            height=""
            alt="sender-icon"
          />
        </ImageContainer>
        <ChatContent>
          <Pointer></Pointer>
          <Chat>Hello world from nowhere.</Chat>
        </ChatContent>
      </ChatSender>
      <ChatSender>
        <ImageContainer>
          <ImageElement
            src={profileImage}
            width=""
            height=""
            alt="sender-icon"
          />
        </ImageContainer>
        <ChatContent>
          <Pointer></Pointer>
          <Chat>Hello world from nowhere.</Chat>
        </ChatContent>
      </ChatSender>
      <ChatReceiver>
        <ChatContentReceiver>
          <Chat>
            Hello world from nowhere.n publishing and graphic design, Lorem
            ipsum is a
          </Chat>
          <PointerReceiver></PointerReceiver>
        </ChatContentReceiver>
        <ImageContainer>
          <ImageElement
            src={profileImage}
            width=""
            height=""
            alt="sender-icon"
          />
        </ImageContainer>
      </ChatReceiver>
      <ChatSender>
        <ImageContainer>
          <ImageElement
            src={profileImage}
            width=""
            height=""
            alt="sender-icon"
          />
        </ImageContainer>
        <ChatContent>
          <Pointer></Pointer>
          <Chat>Hello world from nowhere.</Chat>
        </ChatContent>
      </ChatSender>
    </Card>
  );
};

export default ChatCard;
