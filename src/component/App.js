import React, { Component } from 'react';
import Data from '../mock/MockData'
import './styles.css'
import DropDown from './countriesDropDown'
class App extends Component {
  render() {
    return (                                        
      <div className="App">
      <h1>{this.props.Content.heading}</h1>
      <DropDown Content={this.props.Content} />
      </div>
    );
  }
}
App.defaultProps = {Content: Data}
export default App;

