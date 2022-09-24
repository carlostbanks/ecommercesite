import styled from "styled-components"
import {ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styledEngineSc from "@mui/styled-engine-sc"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
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

`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
` 
const ImgContainer = styled.div`
flex: 1;
height: 100%;
`

const Image = styled.img`
height: 80%;`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
` 

const Title = styled.h1`
font-size: 70px;`
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
        <Slide>
        <ImgContainer>
          <Image src="https://www.pngfind.com/pngs/m/52-524008_women-fashion-model-png-transparent-png.png"/>
        </ImgContainer>
        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Description>DON'T WAIT, COME BUY NOW</Description>
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