import React from 'react';
import {IndexRoute, Route, hashHistory, Router} from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';

import Projects from './containers/Projects/Projects';
import Sites from './containers/Sites/Sites';
import About from './containers/About/About';

Router.prototype.componentWillReceiveProps = function(nextProps){
  let components = [];

  function grabComponents(element){
    if(element.props && element.props.component){
      components.push(element.props.component);
    }
    if(element.props && element.props.children){
      React.Children.forEach(element.props.children, grabComponents);
    }
    grabComponents(nextProps.routes || nextProps.children);
    components.forEach(React.createElement);
  };
}
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="projects" component={Projects}></Route>
      <Route path="sites" component={Sites}></Route>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>
);
