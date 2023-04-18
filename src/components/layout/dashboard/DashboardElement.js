import styled from "styled-components";

export const DashboardWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  @media (min-width: 768px) {
    min-height: 100vh;
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const DashboardMain = styled.div`
  @media (min-width: 768px) {
    position: relative;
    min-height: 100vh;
    margin-left: auto;
    flex: 1;
    display: grid;
    grid-template-rows: 0.1fr 1.5fr;
    gap: 0px;
  }
`;
export const MainContent = styled.div`
  opacity: ${({ sideBarOpen }) => (sideBarOpen ? 0.25 : 1)};
  @media (min-width: 1024px) {
    opacity: 1;
  }
`;
export const PanelContainer = styled.section`
  padding: 10px;
  @media (min-width: 768px) {
    overflow-y: auto;
    height: 90dvh;
    padding: 10px 20px;
    padding-right: 50px;
  }
  @media (min-width: 1024px) {
    display: flex;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }
`;
export const RowContainer = styled.div`
  margin: 20px 0;
  margin-top: 80px;

  @media (min-width: 1024px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 0;
  }
`;

export const RowContainerFeed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
