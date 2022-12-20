import styled from "styled-components";
import { IProps } from ".";

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 90px;
  /* background-color: blueviolet; */
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Hour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;
  border-radius: 8px 0 0 8px;
  border-right: 2px dotted var(--white);
  p {
    color: var(--white);
    font-weight: 400;
    font-size: 28px;
  }
`;
export const Informations = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0 8px 8px 0;
  width: 75%;
  height: 100%;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50%;
  border-bottom: 2px dotted var(--white);
  p {
    color: var(--white);
    font-size: 22px;
  }
`;
export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50%;
  p {
    color: var(--white);
    font-size: 14px;
    font-weight: 100;
    text-transform: uppercase;
  }
`;
