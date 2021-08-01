import React from "react";

import {
 Section,
 SectionText,
 SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection, Profile } from "./HeroStyles";

const Hero = (props) => (
 <>
  <Section row nopadding>
   <LeftSection>
    <SectionTitle main>
     <small>Nicholas Ndiritu,</small> <br />
     <small>Full Stack Developer.</small>
    </SectionTitle>
    <SectionText>
     I am a passionate self tought programmer, obsessed with Tech and emerging
     technologies. I've passed through ups and downs learning alone but later
     found my way through to a future awarding career.
    </SectionText>
    <Button onClick={props.handleClick}>Learn More</Button>
   </LeftSection>
   <RightSection>
    <img src='/images/Capture.PNG' alt='Nick' style={{ Profile }} />
   </RightSection>
  </Section>
 </>
);

export default Hero;
