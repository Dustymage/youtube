import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
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
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;

//--------------------------------------------------------------------------------------------------
// CENTER
//--------------------------------------------------------------------------------------------------
const Center = styled.div`
   flex: 1;
   padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`;


//--------------------------------------------------------------------------------------------------
// RIGHT
//--------------------------------------------------------------------------------------------------
const Right = styled.div`
   flex: 1;
   padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
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
                <SocialIcon  color= '3b5998'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon  color= 'FF0000'>
                    <YouTube/>
                </SocialIcon>
                <SocialIcon  color= 'E4405F'> 
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        
        <Center> 
            <Title>Usefuk links</Title>
            <List>
                <ListItem> Home </ListItem >
                <ListItem> Cart </ListItem >
                <ListItem> Man Fashion </ListItem >
                <ListItem> Woman Fashion </ListItem >
                <ListItem> Accessories </ListItem >
                <ListItem> My Account </ListItem >
                <ListItem> Order Tracking </ListItem >
                <ListItem> Wishlist </ListItem >
                <ListItem> Terms </ListItem >
            </List>
        </Center>

        < Right > 
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>1 Maple Street, Durban, KZN, 4170</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+27 67 098 7100</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@banafish.co.za</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
"
        </Right >

    </Container>
  )
}

export default Footer