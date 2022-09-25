import styled from "styled-components"
import {ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props=>props.bg};
` 
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;

`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
` 

const Title = styled.h1`
  font-size: 70px;
`

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide bg="lightblue">
        <ImgContainer >
          <Image src="https://i.postimg.cc/KYbjb1rM/greendress.png"/>
        </ImgContainer>
        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Description>DON'T WAIT, COME BUY NOW</Description>
          <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>

        <Slide bg="lightgreen">
        <ImgContainer>
          <Image src="https://i.postimg.cc/nzPnXr7T/reddress.png"/>
        </ImgContainer>
        <InfoContainer>
          <Title>POPULAR SALE</Title>
          <Description>COME IN TODAY</Description>
          <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>

        <Slide bg="lightyellow">
        <ImgContainer>
          <Image src="https://i.postimg.cc/8zRkZ1QP/purpledress.png"/>
        </ImgContainer>
        <InfoContainer>
          <Title>AMAZING SALE</Title>
          <Description>EVERYTHING MUST GO</Description>
          <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
      </Arrow>
      
    </Container>
  )
}

export default Slider