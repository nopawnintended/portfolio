import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import {Container, PageTitle, PageContainer} from '../../theme/grid';
import {
  HeroImage,
  RevealP,
  RevealP1,
  PreLoad
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';

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
        <PageTitle>Home</PageTitle>
          <PreLoad>
            <HeroImage>
              <h1>David Huang</h1>
              <h2>Full-Stack Web Developer. <br/> Writer. <br/> Certified Couch Potato.</h2>
            </HeroImage>
          </PreLoad>
          <WhenInView>
            {({ isInView }) =>
              <div>
                <RevealP hide={!isInView}>
                  <em>
                      "That's been one of my mantras - focus and simplicity. Simple can be harder than complex:
                      You have to work hard to get your thinking clean to make it simple. But it's worth it in
                      the end because once you get there, you can move mountains."
                  </em>
                  <br/><br/>
                  ~ Steve Jobs
                  <br/><br/>
                </RevealP>

                <RevealP1 hide={!isInView}>
                  While I don't generally adhere to quotes, this is the one I feel most closely resembles my life philosophy.
                  One of my greatest strengths, and also downfalls, is my ability to be interested in virtually everything.
                  There's not enough time in the world for me to devote to every single activity that interests me, so I've always
                  had to look for the simplest route to become at least decent. I absolutely love the feeling of starting something
                  with a blank slate, figuring out how to get good at it, and focusing on improving towards that goal. To me, the
                  process is always more exciting than the end result, and I enjoy the unique complexities of each new activity.
                </RevealP1>

                <RevealP hide={!isInView}>
                  Throughout the years I've tried my hand at a wide variety of activities, many of them competitively. In all these activities,
                  I've noticed one underlying factor present among top competitors: mastery of fundamentals, or the "simple" foundation
                  of each activity. I quickly realized that, the more I focused on a few core skills in any given pursuit, the faster I improved.
                  At different points, I've managed to be in the top 0.5% nationally in activities as random as chess, <em>Hearthstone</em>, and <em>NBA 2K16</em>.
                  I recently started <a href="http://www.awindowintotheworld.wordpress.com" target="_blank">blogging</a>, and just learned
                  how to develop web applications over this past summer (huge shoutout to <a href="http://www.joinhorizons.com/" target="_blank">
                  <em>Horizons School of Technology</em></a>!).
                </RevealP>

                <RevealP1 hide={!isInView}>
                  How are these random facts about me relevant? Well simply put, I love tackling problems, breaking them down,
                  and working towards the best result possible. No matter what I'm doing, I'm very focused
                  and always strive to be the best I can.
                </RevealP1>

                <RevealP hide={!isInView}>
                  Keep things simple, stay focused, and you may be surprised at what is possible.
                </RevealP>
              </div>
            }
          </WhenInView>

      </Container>
    );
  }
}
