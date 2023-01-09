import styled from "styled-components";
import { IProps } from ".";

export const Container = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 90vh; */
`;

export const FullCard = styled.div<IProps>`
  width: 360px;
  height: 560px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 8px 4px 18px 8px #00000029;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  position: relative;
  
  display: ${({ display}) => display };
`;

export const Title = styled.h1`
  font-size: 28px;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${({ color }) => color};

  position: absolute;
  top: 40px;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ color }) => color};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hour = styled.div`
  color: var(--white);
  font-size: 52px;
`;

export const Description = styled.span`
  color: ${({ color }) => color};
  text-transform: uppercase;
  margin-top: 20px;
`;

export const Next = styled.span<IProps>`
  background-color: ${({ colorNext }) => colorNext };
  padding: 2px 22px;
  border-radius: 22px;
  text-align: center;
  font-size: 14px;

  position: absolute;
  bottom: 20px;
`;
