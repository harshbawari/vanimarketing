import React, { Component } from 'react';

import HeaderComponent from '../components/HeaderComponent';

class Commercial extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container">
        <HeaderComponent />
      </div>
    );
  }
}

export default Commercial;