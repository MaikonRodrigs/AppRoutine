import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: 620px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 8px 4px 18px 8px #00000029;
  padding-top: 30px;
  
  position: relative;

  h1 {
    font-size: 50px;
    margin-top: 50px;
    color: var(--food);
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--food);
  border-radius: 50%;

  position: absolute;
  top: 30%;
  left: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: var(--white);
    font-size: 52px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 270px;
  span {
    color: var(--food);
    text-transform: uppercase;
  }

`;

export const NextCircle = styled.div`
    margin-top: 120px;
    display: flex;
    justify-content: center;
    p {
      background-color: var(--job);
      width:max-content;
      text-align: center;
      padding: 2px 22px;
      border-radius: 22px;
      font-size: 14px;
  }
`;
