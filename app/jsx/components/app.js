'use strict';

import React, {Component} from 'react';

// Using webpack, with css and img loaders
import styles from '../../css/app';
import sqGif from '../../images/sq.gif';
import logo from '../../images/logo.png';
import appStore from '../../images/appStore.png';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.iPhone}>
            <img src={sqGif} alt="Iphone gif of app UI"/>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.copyContainer}>
            <img className={styles.logo} src={logo} alt="Squat Right Logo"/>
            <h1>It alerts you when you squat deep enough!</h1>
            <p>SquatRight helps you strengthen and shape all of the muscles that
            are supposed to be involved with your squat! Quads, hamstrings, and glutes(butt).</p>
            <p>
              For support, questions, comments, or suggestions please contact: <a href="mailTo:info@SquatRightApp.com">info@SquatRightApp.com</a>
            </p>
            <a href="https://itunes.apple.com/us/app/squatright/id1082538357?mt=8" target="_blank">
              <img className={styles.appStore} src={appStore} alt="Available on Apple App Store Icon"/>
            </a>
            {/*This copyright is set to display none on mobile dimensions*/}
            <p className={styles.copyrightDesktop}>&copy; 2016 Brian Polonia</p>
          </div>
        </div>
        {/*This copyright is set to display none on desktop dimensions*/}
        <p className={styles.copyrightMobile}>&copy; 2016 Brian Polonia</p>
      </div>
    );
  }
}


export default App;
