import React, {Component} from 'react';
import { Container, PageTitle, PageContainer } from '../../theme/grid';
import { FixedTitle, FixedSubTitle } from '../../theme/types';


class Sites extends Component {

  render() {
    return (
      <Container>
        <PageTitle>Sites</PageTitle>
        <h1 style={{textAlign:"center", fontSize:"250%"}}><strong>Find Me on the Web!</strong></h1>
        <PageContainer style={{marginTop:"5%"}}>
          <a href="https://www.youtube.com/user/IamTyfoon" target="_blank">
            <img style = {{maxWidth:"20%", marginLeft: "5%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/youtube.png')} alt="youtube"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100005493730226">
            <img style = {{maxWidth:"25%", marginLeft: "5%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/facebook.png')} alt="facebook"/>
          </a>
          <a href="https://www.linkedin.com/in/davidhuang007/" target="_blank">
            <img style = {{maxWidth:"30%",marginLeft: "5%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/linkedin.png')} alt="linkedin"/>
          </a>
          <a href="https://github.com/nopawnintended" target="_blank">
            <img style = {{maxWidth:"30%",marginLeft: "5%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/github.png')} alt="github" align="middle"/>
          </a>
          <a href="https://awindowintotheworld.wordpress.com/" target="_blank">
            <img style = {{maxWidth:"30%",marginLeft: "5%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/blogpic.png')} alt="blog" align="middle"/>
          </a>
        </PageContainer>
      </Container>
    );
  }
}

export default Sites;
