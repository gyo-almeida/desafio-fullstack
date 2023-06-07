import { styled } from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;

  button {
    height: 35px;
    border: solid 1px var(--color-primery);
    border-radius: 3px;
    margin-top: 10px;
    background-color: var(--white);
    color: var(--color-primery);
    font-weight: bolder;
    padding: 5px;
  }
`;
