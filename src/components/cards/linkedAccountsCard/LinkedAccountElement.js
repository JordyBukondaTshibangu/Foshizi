import styled from "styled-components";

export const LinkedAccountContainer = styled.div`
  display: grid;
  padding: 20px;
  column-gap: 10px;
  row-gap: 30px;
`;

export const LinkNoteIcon = styled.span`
  color: #add8e6;
  margin-left: auto;
`;

export const LinkedItem = styled.ul`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  media (min-width : 678px) {
    width: 75%;
    gap: 15px;
  }
`;
