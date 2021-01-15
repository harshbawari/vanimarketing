import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';


function ContactScreen(props) {
  return (
    <div>
      <HeaderComponent />
      <div className="container align-items-center justify-content-center">
        <div className="row" style={{ marginTop: 30, alignItems: 'center' }}>
          <h1 style={{ fontWeight: 'bold', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>AFFORDABLE PROPERTY</h1>
          <h3>WE WILL HELP YOU TO FIND THE BEST AFFORDABLE PROPERTY OF YOUR DREAMS</h3>
        </div>
        <div className="row" style={{ alignItems: 'center' }}>
        </div>
        <div className="row" textAlign='center' alignItems='center' style={{ textAlign: 'center', alignItems: 'center' }}>
          <h3 className='col-12' style={{}}>We are specialize in selling properties to our clients around Gurugram</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;