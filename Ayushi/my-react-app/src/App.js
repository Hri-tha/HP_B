

// import React from 'react';
// import './BirthdayWish.css'; // Import CSS file
// import './Balloons.css';

// class BirthdayWish extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="birthday-wish-container"> {/* Apply container class */}
//           {/* <img src={ayushiImage} alt="Ayushi" className="birthday-image" />  */}
//           <h1 className="birthday-title">Happy Birthday Ayushi my Love!</h1> {/* Apply title class */}
//           <p className="birthday-message">Wishing you all the happiness and love on your special day.</p> {/* Apply message class */}
//           <p className="birthday-signature">Love always,</p> {/* Apply signature class */}
//           <p className="birthday-name">Hrithik Kumar Thakur</p> {/* Apply name class */}
//         </div>
//         <div className="balloons-container">
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//         <div className="balloons-container">
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//         <div className="balloon"></div>
//       </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default BirthdayWish;
import React from 'react';
import './BirthdayWish.css'; // Import CSS file
import './Balloons.css';

class BirthdayWish extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="birthday-wish-container">
          <h1 className="birthday-title">Happy Birthday Ayushi my Love!</h1>
          <p className="birthday-message">Wishing you all the happiness and love on your special day.</p>
          <p className="birthday-signature">Love always,</p>
          <p className="birthday-name">Hrithik Kumar Thakur</p>
        </div>
        <div className="balloons-container">
          <div className="balloons-left">
            <div className="balloon"><span>I</span></div>
            
          </div>
          <div className="balloons-right">
          <div className="balloon"><span>L</span></div>
            <div className="balloon"><span>O</span></div>
            <div className="balloon"><span>V</span></div>
            <div className="balloon"><span>E</span></div>
          </div>
          <div className="balloons-between">
            <div className="balloon"><span>Y</span></div>
            <div className="balloon"><span>O</span></div>
            <div className="balloon"><span>U</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdayWish;
