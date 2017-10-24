import React, { Component } from 'react';
import styled from 'styled-components';
import {Container, PageTitle} from '../../theme/grid';
import {PropTypes} from 'prop-types';
import {
  Image,
  Body,
  AboutBlock
} from './About.style';

export default class Home extends Component{
  static propTypes = {};
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: 0
  //   };
  // }
  //
  // increment(){
  //   this.setState({
  //     data: this.state.data + 1
  //   });
  // }
  render(){
    return (
      <Container>
        <PageTitle>About Me</PageTitle>
          <Image></Image>
          <AboutBlock>
            <div className="top-bar">mylife  -  node  -  50x1337</div>
            <p>
              Last updated: Tue Oct 24 14:40:37 on ttys001 <br />
              About-David:~ dhuang$
            </p>
            <p>
              > David.hometown <br/>
              <span className = "answer">'Ridgeland, Mississippi, USA'</span>
            </p>
            <p>
              > David.currentLocation <br/>
              <span className = "answer">'Copenhagen, Denmark'</span>
            </p>
            <p>
              > David.education <br/>
              <span className = "answer">'Claremont McKenna College'</span>
            </p>
            <p>
              > David.expectedGraduationDate <br/>
              <span className = "answer">'December 2018'</span>
            </p>
            <p>
              > David.major <br/>
              <span className = "answer">'Psychology'</span>
            </p>
            <p>
              > David.interests <br/>
              [ <span className = "answer">coding, competitive gaming, basketball, chess, music, ...and 162 more items</span> ]
            </p>
            <p>
              > David.languages <br/>
              [ <span className = "answer">English, Español, 中文</span> ]
            </p>
            <p>
              > David.computerLanguages <br/>
              [ <span className = "answer">Python, Java, C#, JavaScript</span> ]
            </p>
          </AboutBlock>
          <Body>Got any questions? Want to work with me? Found funny pictures? Send them my way! <a className = "answer" href="mailto:davidhuang972@gmail.com?subject=I&#39;m%20your%20biggest%20fan!">davidhuang972@gmail.com</a>
          </Body>
      </Container>
    );
  }
}
