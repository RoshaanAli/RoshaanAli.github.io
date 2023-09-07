import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { ButtonContainer, LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle center>
          ReactJS, NextJS & React Native Developer
        </SectionTitle>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is Syed Roshaan Ali. Inquisitive and Highly-motivated software
          engineer, with strong web and mobile application skills.
          Forward-thinker by nature and loves to code. Spends most of my time
          learning and experimenting with anything that looks promising.
        </SectionText>
        <ButtonContainer>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/files/resume.pdf";
            }}
          >
            My Resume
          </Button>
          <Button
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
