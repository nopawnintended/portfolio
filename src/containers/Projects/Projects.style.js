import styled from 'styled-components';
import { Relative } from '../../theme/grid';
import { yellow, red, blue, black } from '../../theme/variables';

export const Group = styled(Relative)`
  margin-bottom: 1em;
`;
export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  & > img{
    transition: transform .3s;
  }

  &:hover {
    & > img {
      transform: scale(1.3);
    }
  }
`;

export const TitleLink = styled.a`

  position: relative;
  transition: color .3s;
  margin-bottom: 1em;

  &:hover {
    color: ${blue};
  }
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    left: -5px;
    width: calc(100% + 10px);
    height: 0;
    transition: height .3s;

  }
  &:hover::after {
    height: 100%;
    background-color: ${yellow};
    transform: scale(1, 1.1);
  }
`;

export const Description = styled.p`
    color: ${black};
    margin: 0;
    font-size: .8em;
    margin-top: .8em;
    margin-bottom: 10%;
`;
export const Skills = styled.ul`
    color: ${black};
    font-size: .8em;
    margin: 0;
`;

export const Index = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  font-size: 3em;
  margin-bottom: 2%;
  h1{
    margin: 0 auto;
    font-weight: bold;
    color:${ red };
    opacity: 0.5;
    font-size: 115%;
    transform: translateY(20%);
  }
`;

export const Title = styled.h1`
  color: ${red};
  font-weight: bold;
  margin-top: -2%;
  margin-left: -.5em;
  margin-bottom: 10%;
`

export const ImageContainer = styled.div`
  width: 20%;
  height: 20%;
  padding: 10px 0 10px 0;
`
