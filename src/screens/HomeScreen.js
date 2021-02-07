import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Navbar from '../components/Navbar';
import dummyImage from '../assets/images/atulyas/0001.jpg';
import '../styles/HomeScreen.css';

const importAll = (r) => {
    let images = [];
    r.keys().map((item, index) => {
        console.log('item: ', r(item).default);
        images.push(r(item).default);
    });

    return images;
}
const imgs = require.context('../assets/images/atulyas', false, /\.(jpg)$/);



function HomeScreen(props) {
    const [loading, setLoading] = useState(true);
    const [imgList, setImgList] = useState([]);



    console.log('dummyImage: ', dummyImage);
    console.log('imgs: ', imgs);
    console.log('imgList: ', imgList);
    console.log('loading: ', loading);

    useEffect(() => {
        const loadImages = () => {
            setImgList(importAll(imgs));
            setLoading(false);

        }

        loadImages();
    }, []);

    const renderImages = imgList.map((image, index) => {
        console.log('map');
        console.log('image: ', image);
        return (
            <div key={index.toString()} className='row row-content'>
                <div className='col-12'>
                    <img
                        src={image}
                        alt='img'
                    />
                </div>
            </div>
        );
    });

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                {loading
                    ? <>Loading...</>
                    : renderImages
                }
            </div>
        </div>
    );
}

export default HomeScreen;