import React from "react";
import {
  InfoContainer,
  InfoRow,
  Column1,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";
import { Button } from "../ButtonElement";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  imgStart,
  buttonLabel,
  description,
  darkText,
  headLine,
  lightText,
  lighTextDesc,
  img,
  dark,
  dark2,
  primary,
  alt,
}) => {
  return (
    <div>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lighText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
              <BtnWrap>
              {  /*<Button to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2? 0: 1}
                >{buttonLabel}
             </Button>*/}
              </BtnWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </div>
  );
};

export default InfoSection;
