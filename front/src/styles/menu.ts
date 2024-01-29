import { styled } from "styled-components";

export const Ul = styled.ul`
  position: relative;
  top: 25px;
  right: 12px;
  font-size: 12px;
  font-weight: 600;

  li {
    border: solid 1px var(--color-primery);
    padding: 5px;
    margin-bottom: 2px;
    text-align: center;
    cursor: pointer;
  }
`;
