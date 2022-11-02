import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

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
          This is Syed Roshaan Ali. Inquisitive and Highly-motivated software engineer, with strong web and mobile application skills. Forward-thinker by nature and loves to code. Spends most of my time learning and experimenting with anything that looks promising.   
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
