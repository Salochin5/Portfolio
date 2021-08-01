import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
 Section,
 SectionDivider,
 SectionText,
 SectionTitle,
} from "../../styles/GlobalComponents";
import {
 List,
 ListContainer,
 ListItem,
 ListParagraph,
 ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
 <Section id='tech'>
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
   I've tried working with a range a technologies in the web development world.
   Front-end and Back-end. I am planning to shift lot of my backend in
   BlockChain Technology in coming 2023 after an year experience in the
   development industry.
  </SectionText>
  <List>
   <ListItem>
    <picture>
     <DiReact size='3rem' />
    </picture>
    <ListContainer>
     <ListTitle>Front-End</ListTitle>
     <ListParagraph>
      Experiece with <br />
      React.js.
     </ListParagraph>
    </ListContainer>
   </ListItem>
   <ListItem>
    <picture>
     <DiFirebase size='3rem' />
    </picture>
    <ListContainer>
     <ListTitle>Back-End</ListTitle>
     <ListParagraph>
      Experience with <br />
      Node.js, Express.js and MongoDB.
     </ListParagraph>
    </ListContainer>
   </ListItem>
   <ListItem>
    <picture>
     <DiZend size='3rem' />
    </picture>
    <ListContainer>
     <ListTitle>UI/UX</ListTitle>
     <ListParagraph>
      A little Experience with <br />
      Figma, Axure and Sketch.
     </ListParagraph>
    </ListContainer>
   </ListItem>
  </List>
  <SectionDivider colorAlt />
 </Section>
);

export default Technologies;
