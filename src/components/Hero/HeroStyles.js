import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin: 0 auto;
    justify-content:center;
    align-items:center
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.div`
  width:200px;
  height:200px;
  overflow: hidden;
  border-radius: 100%;
  background-color:red;
  display: flex;
  justify-content: center;
  align-items: stretch;
   @media ${(props) => props.theme.breakpoints.md} {
   width:180px;
    height:180px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width:150px;
    height:150px;
  }
`