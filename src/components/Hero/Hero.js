import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
  MainSubHeader,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { ButtonContainer, Img, LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <MainSubHeader>
          <Img>
            <img alt="roshaan_image" src="/images/dp.png" />
          </Img>
          <SectionTitle main center>
            Sr. React Native/ReactJS Developer
          </SectionTitle>
        </MainSubHeader>
        <SectionTitle center>
          Hey there,
        </SectionTitle>
        <SectionText>
          I'm Roshaan. Inquisitive and Highly-motivated software
          engineer, with strong web and mobile application skills.
          Forward-thinker by nature and loves to code. Spends most of my time
          learning and experimenting with anything that looks promising.
        </SectionText>
        <ButtonContainer>
          <Button
            alt="resume-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/files/resume.pdf";
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
