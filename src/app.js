import React from 'react';
import ReactDOM from 'react-dom';
import MyEditor from './MyEditor';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

injectTapEventPlugin();

// require('draft-js/dist/draft.css');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// use axios for authenticated requests

// use hash router

// https://github.com/gsmith98/Quonvo

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  };

  render() {
    return (

      <div>
        <h2>Text Editor</h2>
        <p>Sharable documentID: {this.state.document._id}</p>
        <p>Collaborators: {this.state.document.collaboratorIDs.toString()}</p>
        <MyEditor saveDoc={this.saveDoc.bind(this)} />
        {/* <MyEditor editorState={this.state.editorState} onChange={this.onChange} /> */}
      </div>
      <HashRouter basename="/">
        <div>
          <Route exact={true} path="/" component={DocumentEditor} />
          {/* <Route path="/DocumentEditor" component={DocumentEditor} /> */}
          <Route path="/DocumentPortal" component={DocumentPortal} />
          <Route path="/Login" component={Login} />
        </div>
      </HashRouter>
    );
  }
}


ReactDOM.render(<MuiThemeProvider>
    <Board />
  </MuiThemeProvider>,
   document.getElementById('root'));
