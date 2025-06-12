import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
  MainSubHeader,
  SubTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { ButtonContainer, Img, LeftSection } from "./HeroStyles";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <MainSubHeader>
          <Img>
            <img alt="roshaan_image" src="/images/dp.png" />
          </Img>
        </MainSubHeader>
        <SectionTitle main center>
          Senior React Native Developer & Mobile App Specialist
        </SectionTitle>
        <SubTitle main center>
        React Native | ReactJS | ExpressJS | MongoDb | MERN | AWS
        </SubTitle>
        <SectionTitle center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Inquisitive and Highly-motivated software
          engineer, with strong web and mobile application skills.
          Forward-thinker by nature and loves to code. Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.

        </SectionText>
        <ButtonContainer>
          <Button
            alt="resume-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                '/files/Roshaan_RN_React_05Years_Developer.pdf',
                '_blank' // <- This is what makes it open in a new window.
              );
            }}
          >
            My Resume
          </Button>
          <Button
            alt="github-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://github.com/RoshaanAli',
                '_blank' // <- This is what makes it open in a new window.
              );
            }}
          >
            Github
          </Button>
          <Button
            alt="stackoverflow-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://stackoverflow.com/users/11203109/roshaanali',
                '_blank' // <- This is what makes it open in a new window.
              );
            }}
          >
            Stack Overflow
          </Button>
        </ButtonContainer>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
