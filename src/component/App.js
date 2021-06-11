import React, { Component } from 'react';
import Data from '../mock/MockData'
import './styles.css'
import CountriesRegionComponent from './CountriesRegionComponent'
class App extends Component {
  render() {
    return (                                        
      <div className="App">
      <h1>{this.props.Content.heading}</h1>
      <CountriesRegionComponent Content={this.props.Content} />
      </div>
    );
  }
}
App.defaultProps = {Content: Data}
export default App;

