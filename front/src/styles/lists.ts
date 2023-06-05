import { styled } from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 350px;
  overflow-y: auto;

  .contact-box {
    display: flex;
    justify-content: space-between;
  }

  .contact-box p {
    display: flex;
    color: var(--color-primery);
    font-size: 21px;
    font-weight: bolder;
    background-color: var(--white);
    width: 23px;
    height: 23px;
    align-items: center;
    justify-content: center;
    border: solid 3px var(--color-primery);
    border-radius: 12px;
    cursor: pointer;
  }

  li {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  .edit-remove {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .edit-remove img {
    width: 16px;
    height: 16px;
    object-fit: cover;
    cursor: pointer;
  }
`;
