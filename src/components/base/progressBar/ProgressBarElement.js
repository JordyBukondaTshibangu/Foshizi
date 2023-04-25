import styled from "styled-components";

export const ProgressbarContainer = styled.div`
    height: 44px,
    width: 100%,
    backgroundColor: #3a434c,
    borderRadius: 4px,
    borderColor: rgba(0; 0; 0; 0.2),
    margin: 15px 0,
    position: relative,
    maxWidth: 50vw
`;

export const CurrentProgress = styled.div`
    height: "100%",
    width: ${({ progress }) => progress},
    backgroundColor: bgcolor,
    borderRadius: "4px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    maxWidth: "50vw",
`;

// export const
