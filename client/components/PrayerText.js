import React from 'react';

export default class PrayerText extends React.Component {

  render() {
      const textOfPrayer = 'Text of prayer';
      
    return (
      <div className="prayerText">
        {textOfPrayer}
      </div>
    );
  }
}
