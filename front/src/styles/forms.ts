import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--grey-100);

  label {
    font-size: 14px;
  }

  input {
    height: 40px;
    padding: 5px;
    border: solid 2px var(--grey-30);
    border-radius: 3px;
    color: grey;
    font-weight: 600;
  }

  button {
    height: 35px;
    border: solid 1px var(--color-primery);
    border-radius: 3px;
    margin-top: 10px;
    background-color: var(--white);
    color: var(--color-primery);
    font-weight: bolder;
  }
`;
