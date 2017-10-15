import styled from 'styled-components';
import {blue, yellow, teal, black} from './variables';
import media from './media';

export const A = styled.a`
  color: ${blue};
  text-decoration: none;
  position: relative;

  &:after{
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${blue};
    z-index: -1;
    transition: height .1s, background-color: .1s;
  }

  &:hover:after {
    height: 20%;
    background-color: ${teal};
  }
`;

export const FixedTitle = styled.h1`
  position:fixed;
  font-weight: bold;
  top: 20px;
  color: ${black};
  left: 100px;
  ${media.tablet`
    left: 40px;
    font-size: 1.5em;
    top: 13px;
  `}
  margin: 0;
  z-index: 2;
`;

export const FixedSubTitle = styled.h2`
  text-align:center;
  margin: 10 0;
  color: ${black};
  z-index: 2;
  ${media.tablet`
    font-size: 1em;
    top: 13px;
  `}
`;
