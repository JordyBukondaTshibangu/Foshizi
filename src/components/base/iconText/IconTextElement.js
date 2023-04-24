import styled from "styled-components";
import Image from "next/image";

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ textSize }) => (textSize === "sm" ? "5px" : "10px")};
`;
export const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #333233;
  padding: 4px;
  @media (min-width: 678px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1024px) {
    width: ${({ big }) =>
      big === "200" ? "80px" : big === "100" ? "60px" : "40px"};
    height: ${({ big }) =>
      big === "200" ? "80px" : big === "100" ? "60px" : "40px"};
  }
`;
export const ImageElement = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
`;
export const Title = styled.h3`
  font-size: ${({ textSize }) => (textSize === "sm" ? "12px" : "16px")};
  font-weight: 600;
  line-height: 25px;
  color: #fff;
`;
export const Subtitle = styled.span`
  font-size: ${({ textSize }) => (textSize === "sm" ? "9px" : "12px")};
  color: #fff;
`;
