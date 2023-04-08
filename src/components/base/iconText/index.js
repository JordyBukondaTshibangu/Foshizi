import {
  IconTextWrapper,
  ImageContainer,
  ImageElement,
  ContentWrapper,
  Title,
  Subtitle,
} from "./IconTextElement";

const IconText = ({ image, title, subtitle, size, textSize }) => {
  return (
    <IconTextWrapper textSize={textSize}>
      <ImageContainer big={size}>
        <ImageElement alt=" " src={image} width={size} height={size} alt={title} />
      </ImageContainer>
      <ContentWrapper>
        <Title textSize={textSize}>{title}</Title>
        <Subtitle textSize={textSize}>{subtitle}</Subtitle>
      </ContentWrapper>
    </IconTextWrapper>
  );
};

export default IconText;
