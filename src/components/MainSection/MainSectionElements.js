import styled from "styled-components";
import { MdArrowForward } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const MainContainer = styled.div`
  background: #081c15;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 300px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent, 100%);
    z-index: 2;
  }
`;

export const MainBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232e34;
`;
export const MainContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainH1 = styled.h1`
  color: #fff;
  font-size: 38px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const MainP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const MainBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const CalcContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 15px;
  background: #d8f3dc;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 692px) {
    padding: 20px 40px;
  }
  @media screen and (max-width: 540px) {
    padding: 20px 30px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px 30px;
  }
`;
export const CalcHeader = styled.div`
  display: flex;
`;
export const CalcHeaderItem = styled.div`
  align-items: center;
`;

export const CalcLinks = styled(LinkR)`
  text-decoration: none;
  color: #414449;
  padding-left: 180px;
  padding-right: 180px;

  @media screen and (max-width: 1050px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media screen and (max-width: 950px) {
    padding-left: 130px;
    padding-right: 130px;
  }
  @media screen and (max-width: 850px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 735px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (max-width: 692px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media screen and (max-width: 610px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  &:hover {
    background: white;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 15px;
    color: ${({ Orange }) => (Orange ? "#F3722C" : "#fdc500")};;
  }

  &.active{
	background: white;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 15px;
    color: gray;
  }
`;
