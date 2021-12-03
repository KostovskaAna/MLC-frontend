import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import BenchmarkDataFilter from './components/BenchmarkDataFilter'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { toggleTheme } from './components/themes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dataset from './components/Dataset';
import Method from './components/Method';
import Compare from './components/Compare';

class App extends React.Component {
  constructor(props){
  super(props);
  
  this.state = {
    selectedTheme: 'dark',
    }
  }

  componentDidMount(){
    document.title = "MLC Catalogue"
  }

  getTheme = (theme) =>{
    theme === 'light' ? this.setState({selectedTheme: 'light'}) : this.setState({selectedTheme: 'dark'})
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <MuiThemeProvider theme={ toggleTheme(this.state.selectedTheme) }>
        
                <Header callback = {this.getTheme}/>
                <Routes>
                  <Route path="/ExperimentData" element={<BenchmarkDataFilter/>}></Route>
                  <Route path="/Dataset/:dataset" element={<Dataset/>}></Route>
                  <Route path="/Method/:method" element={<Method/>}></Route>
                  <Route path="/" element={<Compare currentTheme={this.state.selectedTheme}/>}></Route>
                </Routes>
                
          </MuiThemeProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;