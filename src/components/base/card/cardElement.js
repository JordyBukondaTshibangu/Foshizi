import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 5px;
  width: 100%;
  @media (min-width: 1024px) {
    margin-top: 0px;
    width: ${({ width }) =>
    width === "full" ? "100%" : width === "half" ? "50%" : width === "third" ? "75%" : "30%"};
    gap: 20px;
  }
`;
export const CardHeading = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  padding: 5px;
  media (min-width : 425px) {
    font-size: 20px;
    padding: 10px 20px;
  }
`;
export const CardContainer = styled.div`
  height: ${({ isAccountCard }) => !isAccountCard && "100%"};
  overflow: auto;
  background: #2a2f34;
  border-radius: 10px;
  padding: 20px;
  @media (min-width: 768px) {
    padding: ${({ isAccountCard }) => (isAccountCard ? "50px" : "20px")};
  }
`;
