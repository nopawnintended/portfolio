import React, { Component } from 'react';
import { Container, StyledLink } from './NavMenu.style';
import { hashHistory } from 'react-router';

class NavMenu extends Component {
  render() {
    return (
      <Container>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/projects'}>Projects</StyledLink>
        <StyledLink to={'/sites'}>Sites</StyledLink>
        <StyledLink to={'/about'}>About Me</StyledLink>
      </Container>
    );
  }
}

export default NavMenu;
