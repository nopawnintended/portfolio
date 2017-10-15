import styled, {css} from 'styled-components';

export const HeroImage = styled.div `
  height: 90vh;
  width: 80vw;
  margin-top: -6.6%;
  margin-left: -0.8%;
  background-image: url('${require('../../assets/space.png')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgb(255,215,0);
  font-size: 150%;
  h1,h2 {
    margin-bottom: 0;
    animation: fadein 3s;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export const RevealP = styled.p`
  position: relative;
  width: 95%;
  margin: 0 auto;
  margin-top: 2%;
  margin-left: -0.25%;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:black;
    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  ${ ({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;

export const RevealP1 = styled.p`
  position: relative;
  width: 95%;
  margin: 0 auto;
  margin-top: 2%;
  margin-left: -0.25%;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:black;
    transform-origin: right;
    transform: rotateY(90deg);

    transition: transform 4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  ${ ({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
