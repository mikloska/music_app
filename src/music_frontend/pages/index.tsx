import type { NextPage } from 'next'
import styled from "styled-components";
// import styles from '../styles/Home.module.css'
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

const Home: NextPage = () => {
  return (
    <div>
      <StyledButton> Login </StyledButton>;
    </div>
  )
}

export default Home
