import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import HomePageImg from '../assets/images/img.jpg';
import Img2 from '../assets/images/img2.jpg';


import '../styles/HomeScreen.css';

function HomeScreen(props) {
    const [loading, setLoading] = useState(false);
    const [imgList, setImgList] = useState([]);

    const importAll = (r) => {
        console.log('here: ', r.keys().map(r));
        return r.keys();
    }



    useEffect(() => {
        const loadImages = () => {
            setImgList(importAll(require.context('../assets/images/atulyas', false, /\.(jpg)$/)));
        }


        loadImages();
    }, []);

    const renderImages = imgList.map((image, index) => {
        return (
            <div key={index.toString()} className='container-fluid'>
                <div className='col-12'>
                    <img
                        src={`../assets/images/atulyas${image.slice(1)}`}
                        alt='img'
                    />
                </div>
            </div>
        );
    });

    return (
        <div className='container'>
            <HeaderComponent />

            <div className='row row-content'>
                {renderImages}
            </div>
        </div>
    );
}

export default HomeScreen;