import styled from 'styled-components';

import Logo from "../../components/atoms/Logo";

const HomeWrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 300px;
  
  border: 1px #000 solid;
  border-radius: 6px;
  
  text-align: center;
  
  & > p {
    margin: 1rem 0 0 0;
  }
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Logo />
            <p>Primer React Challenge Boilerplate</p>
        </HomeWrapper>
    )
}

export default Home