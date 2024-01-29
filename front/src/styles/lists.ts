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
    margin-bottom: 15px;
  }

  .contact-box p {
    display: flex;
    color: var(--color-primery);
    font-size: 23px;
    font-weight: bolder;
    background-color: var(--white);
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .contact-box p:hover{
    font-size: 30px;
    
  }

  // .menu-dropdown {
  //   display: flex;
  //   flex-direction: column;
  //   align-itens: center;
  // }

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
