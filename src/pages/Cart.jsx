
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;

`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

//2h, 27mins ---
//video link below
//https://www.youtube.com/watch?v=c1xTDSIXit8&t=7162s&ab_channel=LamaDev

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Info = styled.div`
    flex: 3;
`;


const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width:  200px;

`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const ProductAmountContainer = styled.div`

`;

const Add = styled.div`
`;

const Remove = styled.div`
`;

const ProductAmount = styled.div`

`;

const ProductPrice = styled.div`

`;

const Summary = styled.div`
    flex: 1;
`;

//dynamic the amount of stuffs in shopping bag and in the wishlist
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>

                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>  
                    <Product>
                        <ProductDetail>
                            <Image src="https://th-thumbnailer.cdn-si-edu.com/qwdFU8TzPixEtFzRLC2V_Ezr2tw=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2Fd5%2F24%2Fd5243019-e0fc-4b3c-8cdb-48e22f38bff2%2Fistock-183380744.jpg" />
                            <Details>
                                <ProductName><b>Product:</b> The Thunder Buddies</ProductName>
                                <ProductId><b>ID:</b> 923520429356</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b> 34.2</ProductSize>
                            </Details>

                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>R 30</ProductPrice>

                        </PriceDetail>
                    </Product>

                </Info>
                <Summary>summary</Summary>


            </Bottom>
        </Wrapper>



        <Footer/>
    </Container>
  )
}

export default Cart