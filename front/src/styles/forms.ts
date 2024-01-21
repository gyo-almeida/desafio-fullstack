import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: var(--grey-100);

  label {
    font-size: 14px;
    color: grey;
    font-weight: 600;
    margin-top: 25px;
  }

  input {
    height: 40px;
    padding: 5px;
    border: solid 2px var(--grey-30);
    border-radius: 3px;
    color: var(--grey-100);
    font-weight: 600;
    margin-top: 8px;
  }

  button {
    height: 50px;
    border: solid 1px var(--color-primery);
    border-radius: 3px;
    margin-top: 25px;
    background-color: var(--white);
    color: var(--color-primery);
    font-weight: bolder;
  }

  button:hover{
    background-color: var(--color-primery);
    color: var(--white);
  }
`;
