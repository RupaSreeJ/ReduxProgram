import React, { Component } from 'react';
import Data from '../mock/MockData'
import './styles.css'
import DropDown from '../component/countries-dropdown'


class App extends Component {
  render() {
    return (                                        
      <div className="App">
      <h1>{this.props.heading}</h1>
      <DropDown />
      </div>
    );
  }
}
App.defaultProps = Data
export default App;

