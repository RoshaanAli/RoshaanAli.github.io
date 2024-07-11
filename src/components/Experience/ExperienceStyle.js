import styled from "styled-components"

export const CompanyAndWokringPeriod = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  margin-bottom:1%;
  flex-wrap:wrap;
  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
  }
`


export const ListTitle = styled.h2`
line-height: 32px;  
color: #5a7bb1;
  margin-right: 1%;

@media ${props => props.theme.breakpoints.md}{
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
  font-size: 20px;
}
`

export const Position = styled.p`
    line-height: 30px; 
    letter-spacing: 0.06em;
    color: #FFFFFF;
    margin-right: 1%;
    font-weight: 100;
    font-size: 20px;

@media ${props => props.theme.breakpoints.md}{
}

@media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
}
`
export const ResponsibilitiesDiv = styled.div`
    width:100%;
    padding-left:5%;
@media ${props => props.theme.breakpoints.md}{
}

@media ${props => props.theme.breakpoints.sm}{
}
`

export const ResponsibilityTitle = styled.h6`
    font-size: 15px;
    line-height: 30px; 
    letter-spacing: 0.06em;
    font-weight: 100;
@media ${props => props.theme.breakpoints.md}{
}

@media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
}
`

export const WorkingPeriod = styled.p`
  font-size: 15px;
    line-height: 25px; 
    letter-spacing: 0.06em;
    color: #FFFFFF;
    font-weight: 100;

@media ${props => props.theme.breakpoints.md}{
  font-size: 22px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`
export const Ul = styled.ul`
@media ${props => props.theme.breakpoints.md}{
}

@media ${props => props.theme.breakpoints.sm}{
}
`
export const Li = styled.li`
    list-style-type: circle ;
    list-style-position: inside;
    line-height: 28px;
    font-size:15px;
    word-spacing: 3px;
    letter-spacing: 0.02em;
    text-align:justify;
    font-weight: 100;
@media ${props => props.theme.breakpoints.md}{
}

@media ${props => props.theme.breakpoints.sm}{
    font-size:13px;
}
`


