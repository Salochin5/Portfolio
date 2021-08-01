import styled from "styled-components";

export const LeftSection = styled.div`
 width: 70%;
 @media ${(props) => props.theme.breakpoints.sm} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
 }
 @media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
 }
`;
export const RightSection = styled.div`
 width: 27%;
 display: flex;
 align-items: center;
 margin-left: 3%;
 @media ${(props) => props.theme.breakpoints.sm} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
 }
 @media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
 }
`;

export const Profile = `
  width:100%;
  height:50%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 30%;
`;
