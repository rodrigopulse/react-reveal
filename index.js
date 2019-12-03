import React, { Component } from 'react';
import { render } from 'react-dom';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <section className="container container--azul-claro">
          <Zoom>
            <h1 className="titulos">Lorem Ipsum dolor sit amet</h1>
          </Zoom>
        </section>
        <section className="container container--azul-escuro">
          <Fade left>
            <h2 className="titulos"> Lorem ipsum dolor sit amet</h2>
          </Fade>
        </section>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
