import styled from 'styled-components';

export const Image = styled.div`
  margin: 0 auto;
  margin-top: 5%;

  border-radius: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 25vh;
  height: 25vh;
  background-image: url('${require('../../assets/myprofile.jpg')}');
  filter: drop-shadow(2px 2px 2px grey);
`;

export const Body = styled.div`
  margin-left: 13%;
  margin-top: 2%;
  width: 80%;
  text-align: justify;
  font-size: 200%;
  opacity: 0.8;
  font-weight: 10em;
`
export const AboutBlock = styled.div`
  position: relative;
  margin-top: 2em;
  padding-bottom: 1em;
  margin: 0 auto;
  width: 50%;
  color: #fafafa;
  background-color: #383737;
  font-family: 'Monaco','Courier New';
  text-align: left;
  border-radius: 5px;
  font-size: 13px;
  box-shadow: 0px 3px 20px 0.5px rgba(0,0,0,0.19);

  .top-bar {
    font-size: 14px;
    color: #000;
    text-align: center;
    height: 20px;
    background-color: #fff;
    margin-top: 5%;
    padding-top: 1%;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .answer{
    color: #25bf33;
  }

  p {
    margin: 0 auto;
    padding: 2% 30px;
  }
`
