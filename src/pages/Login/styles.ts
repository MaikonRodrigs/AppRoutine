import styled from "styled-components";


export const Container = styled.div`
  /* background: white */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 190px;
    opacity: 0.5;
    cursor: pointer;
    margin-top: -100px;
    &:hover {
      opacity: 1;
      transition: opacity 1s;
    }
  }
`;

export const TextPrimary = styled.h1`
  color: white;
  font-weight: 200;
  font-size: var(--lowtitlemob);
`;
