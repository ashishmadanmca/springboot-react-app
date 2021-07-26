import React, { Component } from 'react';
import './App.css';
import StudentWorkflowApp from './component/StudentWorkflowApp';
import {render} from "react-dom"
import {ThemeProvider} from "styled-components"
import srcTheme from "smart-react-components/theme"
import H1 from "smart-react-components/element/H1"

class App extends Component {
  render() {
    return (
        <div className="container">
          <StudentWorkflowApp />
        </div>
    );
  }
}

export default App;
