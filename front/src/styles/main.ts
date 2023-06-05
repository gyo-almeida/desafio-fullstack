import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;

  h2 {
    width: 330px;
    padding: 0 25%;
    text-align: center;
  }

  p {
    font-size: 12px;
    font-weight: bolder;
  }

  button {
    height: 35px;
    border: solid 1px var(--color-primery);
    border-radius: 3px;

    background-color: var(--white);
    color: var(--color-primery);
    font-weight: bolder;
  }

  .dismiss {
    display: none;
  }

  .user-infos {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 330px;
  }

  .user-infos img {
    position: relative;
    cursor: pointer;
  }
`;

export const LinkButton = styled(Link)`
  height: 35px;
  border: solid 1px var(--color-primery);
  border-radius: 3px;

  background-color: var(--white);
  color: var(--color-primery);
  font-weight: bolder;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: var(--color-primery);
    color: var(--white);
  }
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
