import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import {Container, PageTitle, PageContainer} from '../../theme/grid';
import {
  HeroImage,
  RevealP,
  RevealP1
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
          <HeroImage>
            <h1>David Huang</h1>
            <h2>Full-Stack Web Engineer. <br/> Writer. <br/> Certified Couch Potato.</h2>
          </HeroImage>
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
                  While I don't generally adhere to quotes, this is the one that most closely resembles my life philosophy.
                  One of my greatest strengths, and also downfalls, is my ability to be interested in virtually everything. I
                  absolutely love the feeling of starting something new with a blank slate, figuring out how to get good at it,
                  and gradually improving towards that goal. To me, the process is always more exciting than the end result, as
                  I like to delve into the intricacies of each new activity.
                </RevealP1>

                <RevealP hide={!isInView}>
                  Throughout the years, I have done many activities competitively, including piano, chess, <em>Hearthstone</em>,
                  and Public Forum Debate. I have been ranked in the top 0.5% nationally in chess, <em>Hearthstone</em>, and <em>NBA 2K16</em>.
                  I can communicate effectively in three different languages (English, Spanish, Mandarin), and just learned how to develop web
                  applications over this past summer (huge shoutout to <a href="http://www.joinhorizons.com/" target="_blank">
                  <em>Horizons School of Technology</em></a>!).
                </RevealP>

                <RevealP1 hide={!isInView}>
                  How did I do this, and how is any of this relevant? Well simply put, I love tackling problems, breaking them down,
                  and aiming for the best possible result in a short amount of time. No matter what I'm doing, I'm very focused
                  and always strive to be the best I can.
                </RevealP1>

                <RevealP hide={!isInView}>
                  So keep things simple, focus, and enjoy the journey that is life! It's not very long anyways.
                </RevealP>
              </div>
            }
          </WhenInView>

      </Container>
    );
  }
}
