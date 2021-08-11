import React, { useState } from "react";
import {
	MainContainer,
	MainBg,
	VideoBg,
	MainContent,
	MainH1,
	MainP,
	MainBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./MainSectionElements";
import { Button } from "../ButtonElement";

import video from "./video.mp4";
const MainSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};
	return (
		<MainContainer>
			<MainBg>
				<VideoBg autoPlay loop muted src={video} type="video.mp4"></VideoBg>
			</MainBg>
			<MainContent>
				<MainH1> Simple Charges Calculator </MainH1>
				<MainP>
					Calculate How Much Charges Is Required to transfer the desired Amount
					In your desired Mobile Money Provider.
				</MainP>
				<MainBtnWrapper>
					<Button
						to="signup"
						onMouseEnter={onHover}
						onMouseEnter={onHover}
						primary="true"
						dark="true">
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</MainBtnWrapper>
			</MainContent>
		</MainContainer>
	);
};

export default MainSection;
