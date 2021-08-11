import React from "react";

const InfoSection = () => {
	return (
		<div>
			<InfoContainer id={id}>
				<InfoWrapper>
					<InfoRow>
						<Column1>
							<TextWrapper>
								<TopLine>TopLine</TopLine>
								<Heading>Heading</Heading>
								<Subtitle>Subtitle</Subtitle>
							</TextWrapper>
                            <BtnWrap>
                                <Button to='home'>Button</Button>
                            </BtnWrap>
						</Column1>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</div>
	);
};

export default InfoSection;
