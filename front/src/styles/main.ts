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
    color: var(--grey)
  }

  .errors{
    color: red
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

  h4 {
    margin-top: 10px;
  }

  .background-choose{
      display: flex;
      gap: 10px;
  }

  .background-choose > span{
    width: 30px; 
    height: 30px; 
    border-radius: 50%;
  }
  
  .background-choose > span:hover{
    width: 40px; 
    height: 40px; 
  }
  
  .background-1{
    background-image: radial-gradient(circle at 50% -20.71%, #cad7f9 0, #d0d6f9 6.25%, #d5d4f7 12.5%, #dbd3f5 18.75%, #e0d2f3 25%, #e5d0f0 31.25%, #eacfed 37.5%, #eecee9 43.75%, #f2cde5 50%, #f5cce1 56.25%, #f8ccdc 62.5%, #facbd8 68.75%, #fbcbd3 75%, #fccccf 81.25%, #fccccb 87.5%, #fcccc7 93.75%, #fbcdc3 100%);
  }

  .background-2{
    background-image: linear-gradient(180deg, #00ffff 0, #41f5ff 25%, #53bcf2 50%, #5087ab 75%, #425a6e 100%);
  }

  .background-3{ 
    background-image: radial-gradient(circle at 50% -20.71%, #dff0db 0, #dbf0dd 6.25%, #d8f1e0 12.5%, #d5f1e3 18.75%, #d3f2e6 25%, #d1f2e9 31.25%, #cff2ec 37.5%, #cef2ef 43.75%, #cdf2f2 50%, #cdf2f5 56.25%, #cdf1f8 62.5%, #cef1fa 68.75%, #cff0fc 75%, #d1f0fe 81.25%, #d3efff 87.5%, #d6eeff 93.75%, #d9edff 100%);
  }

  .background-4{ 
    background-image: linear-gradient(180deg, #ffb8eb 0, #ffafe6 16.67%, #ffa7df 33.33%, #f29dd5 50%, #db93ca 66.67%, #c58bc0 83.33%, #b283b6 100%);
  }

  .background-5{ 
    background-image: linear-gradient(180deg, #7d4159 0, #773959 12.5%, #6f3159 25%, #652859 37.5%, #591f59 50%, #4b185a 62.5%, #3a135b 75%, #24125d 87.5%, #00125f 100%);
  }

  .background-6{ 
    background-image: radial-gradient(circle at 50% -3.03%, #ff7a36 0, #ff693d 16.67%, #ff5843 33.33%, #f94646 50%, #e73448 66.67%, #d6234a 83.33%, #c7114c 100%);
  }

  .background-7{ 
    background-image: radial-gradient(circle at 50% -20.71%, #ffa09b 0, #ff939d 12.5%, #ff879c 25%, #f57a97 37.5%, #d86c8f 50%, #bb5f85 62.5%, #a1557c 75%, #8a4c73 87.5%, #77456b 100%);
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
