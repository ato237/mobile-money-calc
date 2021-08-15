import React from "react";
import {
  MainContainer,
  MainBg,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  /*ArrowForward,
	ArrowRight,
	CalcContainer,
	CalcHeader,
	CalcHeaderItem,
	CalcLinks,*/
} from "./MainSectionElements";
/*import { Button } from "../ButtonElement";

import video from "./video.mp4";
import { FaCalculator } from "react-icons/fa";*/
import Tab from "../SimpleTab";

/*} const [hover, setHover] = useState(false);

	const onHover = () => {
    setHover(!hover);
  };*/
const MainSection = (Orange) => {
 
  return (
    <MainContainer>
      <MainBg></MainBg>
      <MainContent>
        <MainH1> Simplest Way To Get Mobile Money Charges </MainH1>
        <MainP>
          Calculate The Charges required to transfer your desired amount
        </MainP>
        <MainBtnWrapper>
          {/*<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseEnter={onHover}
						primary="true"
						dark="true">
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>*/}
        </MainBtnWrapper>
        {/*	<CalcContainer>
						<CalcHeader>
							<CalcHeaderItem>
								<CalcLinks Orange={Orange} to='orange-money'>
									Orange Money
								</CalcLinks>
							</CalcHeaderItem>
							<CalcHeaderItem>
								<CalcLinks to='mtn-momo'>
									MTN Mobile Money
								</CalcLinks>
							</CalcHeaderItem>
					</CalcHeader>
            </CalcContainer>*/}
        <Tab />
      </MainContent>
    </MainContainer>
  );
};

export default MainSection;
