import styled from 'styled-components';
import { yellow, teal } from '../../theme/variables';

export const Background = styled.div`
  position: fixed;
  left: 8vw;
  width: 80vw;
  top: 8vw;
  height: 90vh;
  background-image: url(${require('../../assets/fadedpic.jpg')});
  background-color: ${teal};
  opacity: 0.25;
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`
