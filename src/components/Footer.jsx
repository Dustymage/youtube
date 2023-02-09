import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
`;

//--------------------------------------------------------------------------------------------------
// LEFT
//--------------------------------------------------------------------------------------------------
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;

`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;

`;

//--------------------------------------------------------------------------------------------------
// CENTER
//--------------------------------------------------------------------------------------------------
const Center = styled.div`
   flex: 2;
`;


//--------------------------------------------------------------------------------------------------
// RIGHT
//--------------------------------------------------------------------------------------------------
const Right = styled.div`
   flex: 3;
`;

//--------------------------------------------------------------------------------------------------
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo> MONUMENT PHARMACY</Logo>
            <Desc>
                Monument Pharamcy great service ...etc etc, will be writing more on description later on...
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon>
                    <YouTube/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        
        <Center> 

        </Center>
        < Right > 
        
        </Right >

    </Container>
  )
}

export default Footer