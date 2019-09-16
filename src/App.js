import React, { Component } from 'react';
import './App.css';
import HasCreditCard from './components/HasCreditCard';
import ItWasRejected from './components/ItWasRejected';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 'creditCard',
      hasCreditCard: null,
      itWasRejected: null
    };
  }

  onClickHasCreditCard = hasCreditCard => {
    let step;
    if (hasCreditCard) {
      step = 'itWasRejected';
    } else {
      step = 'whyHasNot';
    }
    this.setState({
      hasCreditCard,
      step
    });
  };

  onClickItWasRejected = itWasRejected => {
    let step;
    if (itWasRejected) {
      step = 'itWasFirstCard';
    } else {
      step = 'TODO';
    }
    this.setState({
      itWasRejected,
      step
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.step === 'creditCard' && <HasCreditCard onClick={this.onClickHasCreditCard} />}
        {this.state.step === 'itWasRejected' && <ItWasRejected onClick={this.onClickItWasRejected} />}
        {/* Fazer o component a partir daqui, placeholder por enquanto */}
        {this.state.step === 'whyHasNot' && (
          <div>
            <h1>PQ?</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
