import React, {Component} from 'react';
import Zoomy from 'react-zoomy';
import { ImageResponsive, PageTitle, Container, Relative, PageContainer } from '../../theme/grid';
import { FixedTitle, FixedSubTitle } from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';

import {
  ImageButton,
  Group,
  TitleLink,
  Title,
  Description,
  Skills,
  Index,
  ImageContainer,
} from './Projects.style';


class Projects extends Component {
  render() {
    return (
      <Container>
        <PageTitle>Projects</PageTitle>
        <PageContainer>
          <Title>Open Source Projects</Title>
          <Relative marginTop="50px" marginBottom="50px">
            <Index>
              <h1>01</h1>
            </Index>
          </Relative>
          <Group>
            <ImageContainer>
            <a href="https://github.com/nopawnintended/angelhackSiliconValley" target="_blank"><img style={{maxWidth:"20%"}} src={require('../../assets/gitlogo.png')} alt="giticon"/></a>
              <ParallaxImage
                style={{borderRadius:"4em"}}
                src={require('../../assets/sygnal_logo.jpg')}
              />
            </ImageContainer>
            <TitleLink
              href="https://sygnalapp.herokuapp.com"
              target="_blank"
              rel="nofollow">Sygnal - For All Your Connective Needs
            </TitleLink>
            <Description>AngelHack Silicon Valley (2017)</Description>
          </Group>
          <Relative style={{display:"flex",justifyContent:"flex-end"}} marginTop="50px" marginBottom="50px">
            <Index>
              <h1>02</h1>
            </Index>
          </Relative>
          <Group style={{textAlign:"right"}}>
            <ImageContainer style={{marginLeft:"80%", marginTop:"-7.5%"}}>
              <a href="https://github.com/nopawnintended/pocket-medic" target="_blank"><img style={{maxWidth:"20%"}} src={require('../../assets/gitlogo.png')} alt="giticon"/></a>
              <ParallaxImage
                src={require('../../assets/PocketMedic.png')}
              />
            </ImageContainer>
            <TitleLink
              href="https://www.youtube.com/watch?v=M_IdSRduH0c"
              target="_blank"
              rel="nofollow">Pocket Medic - Mobile Medicine for the 3rd World
            </TitleLink>
            <Description>Horizons Hackathon (2017)</Description>
          </Group>
          {/* <Relative marginTop="50px" marginBottom="50px">
            <Index>
              <h1>03</h1>
            </Index>
          </Relative> */}
      <Title style={{color:"rgb(255,215,0)"}}>Personal Projects</Title>
        <Relative marginTop="50px" marginBottom="50px">
          <Index>
            <h1 style={{color:"rgb(255,215,0)"}}>01</h1>
          </Index>
        </Relative>
        <Group>
          <ImageContainer>
            <ParallaxImage
              src={require('../../assets/IntonGame.png')}
            />
          </ImageContainer>
          <TitleLink
            href="http://dis.benno-lueders.de/2017FallGames/2DPlatformer/IntonShuriken/"
            target="_blank"
            rel="nofollow">Inton Shuriken
          </TitleLink>
          <Description>A 2D prison escape platformer. Your time will vanish into thin air, just like the main character.</Description>
        </Group>
        <Relative style={{display:"flex",justifyContent:"flex-end"}} marginTop="50px" marginBottom="50px">
          <Index>
            <h1 style={{color:"rgb(255,215,0)"}}>02</h1>
          </Index>
        </Relative>
        <Group style={{textAlign:"right"}}>
          <ImageContainer style={{marginLeft: "80%", marginTop:"-7.5%"}}>
            <ParallaxImage
              src={require('../../assets/background_pic.jpg')}
            />
          </ImageContainer>
          <TitleLink
            href="https://awindowintotheworld.wordpress.com/"
            target="_blank"
            rel="nofollow">A Window into the World
          </TitleLink>
          <Description>My travel blog for studying abroad in Denmark. Yes, I occassionally also go outside.</Description>
        </Group>
        </PageContainer>
      </Container>
    );
  }
}

export default Projects;
