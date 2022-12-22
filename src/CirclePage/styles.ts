import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  gap: 20px;
`;

export const Repeat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
  width: 360px;
  height: 90px;
  border-radius: 8px;
  border: 2px dotted var(--black);

  cursor: pointer;

  p {
    font-size: 32px;
  }
`;
