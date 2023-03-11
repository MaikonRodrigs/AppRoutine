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

export const Password = styled.input`
  color: white;
  font-weight: 200;
  font-size: 19px;
  border: 1px solid white;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  text-align: center;
`;

export const Pin = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const Enter = styled.button`
  background-color: white;
  color: white;;
  font-weight: 200;
  font-size: 19px;
  border: 1px solid white;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;