import React from 'react';

import Test from '../components/Test';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        Main
        <Test/>
      </div>
    );
  }
}
