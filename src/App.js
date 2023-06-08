import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg className='particles' type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
    {/*<FaceRecogniion />*/}
      </div>
    );
  }
}


export default App;
