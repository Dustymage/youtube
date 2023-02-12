import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://w0.peakpx.com/wallpaper/672/157/HD-wallpaper-assassin-naruto-guy-anime-killer-ninja.jpg") center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`;

const Form= styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    margin-bottom:5px;
`;

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
`;

const Button = styled.button`
    margin:20px 10px 0px 0px;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title> SIGN IN</Title>
            <Form>
                <Input placeholder ="username "/>
                <Input placeholder ="password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER YOU'R PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login