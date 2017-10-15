import styled from 'styled-components';
import { Fixed, Relative, Absolute } from '../../theme/grid';
import { Link } from 'react-router';
import { yellow, blue, white, red } from '../../theme/variables';

export const Container = styled(Absolute)`
  right: 2em;
  top: 1.8em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  z-index: 99;
`;

export const StyledLink = styled(Link)`
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 3px;
  margin-bottom: 3px;
  position: relative;
  transition: color .3s;
  &:hover {
    color: ${yellow};
    &:after{
      content: ' ';
      position: absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background-color: ${red};
      z-index: -1;
      transform: scale(1.3,1.5);
    }
  }
  &:after {
    content: ' ';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: height .3s;
  }
`;
