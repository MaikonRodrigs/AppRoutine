import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 10px;
  padding-bottom: 120px;
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

  p {
    font-size: 32px;
  }
`;
