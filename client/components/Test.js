import React from 'react';

export default class Test extends React.Component {

  render() {
      const name = 'ADAM';
      let arr = [1,2,3];
    return (
      <div className="test">
        Hi {name}!
        {arr.map((i) => <div>to jest {i}</div>)}
      </div>
    );
  }
}
