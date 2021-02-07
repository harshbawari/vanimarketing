import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Navbar from '../components/Navbar';
import '../styles/HomeScreen.css';

const importAll = (r) => {
    let images = [];
    r.keys().map((item, index) => {
        images.push(r(item).default);
    });

    return images;
}
const atulyas = require.context('../assets/images/homepage/atulyas', false, /\.(jpg)$/);
const gls = require.context('../assets/images/homepage/gls', false, /\.(jpg)$/);


function HomeScreen(props) {
    const [loading, setLoading] = useState(true);
    const [imgList, setImgList] = useState([]);


    useEffect(() => {
        const loadImages = () => {
            setImgList([...importAll(atulyas), ...importAll(gls)]);
            setLoading(false);

        }

        loadImages();
    }, []);

    const renderImages = imgList.map((image, index) => {
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