import React, {Component} from 'react';
import { Container, PageTitle, PageContainer } from '../../theme/grid';
import { FixedTitle, FixedSubTitle } from '../../theme/types';


class Sites extends Component {

  render() {
    return (
      <Container>
        <PageTitle>Sites</PageTitle>

        <PageContainer style={{marginTop:"15%"}}>
        <h1 style={{textAlign:"center", fontSize:"250%"}}><strong>Find me on the Web!</strong></h1>
          <a href="https://www.linkedin.com/in/davidhuang007/" target="_blank">
            <img style = {{maxWidth:"30%",marginLeft: "1%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/linkedin.png')} alt="linkedin" align="middle"/>
          </a>
          <a href="https://github.com/nopawnintended" target="_blank">
            <img style = {{maxWidth:"30%",marginLeft: "1%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/github.png')} alt="github" align="middle"/>
          </a>
          <a href="https://awindowintotheworld.wordpress.com/" target="_blank">
            <img style = {{maxWidth:"30%",marginLeft: "1%", border: "2px solid gray", padding: "5px", backgroundColor: "rgba(245,245,220,0.5)", marginBottom: "5%"}} src= {require('../../assets/blogpic.png')} alt="blog" align="middle"/>
          </a>
        </PageContainer>
      </Container>
    );
  }
}

export default Sites;
