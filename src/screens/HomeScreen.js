import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HomePageImg from '../assets/images/img.jpg';
import Img2 from '../assets/images/img2.jpg';


function HomeScreen(props) {
    return (
        <div>
            <HeaderComponent />
            <div className="container align-items-center justify-content-center">
                <div className="row" style={{ marginTop: 30, alignItems: 'center' }}>
                    <h1 style={{ fontWeight: 'bold', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>AFFORDABLE PROPERTY</h1>
                    <h3>WE WILL HELP YOU TO FIND THE BEST AFFORDABLE PROPERTY OF YOUR DREAMS</h3>
                </div>
                <div className="row" style={{ alignItems: 'center' }}>
                    <img src={HomePageImg} width='600' height='400' />
                    <img src={Img2} width='400' height='400' />
                </div>
                <div className="row" textAlign='center' alignItems='center' style={{ textAlign: 'center', alignItems: 'center' }}>
                    <h3 className='col-12' style={{}}>We are specialize in selling properties to our clients around Gurugram</h3>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;