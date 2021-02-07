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
const imgs = require.context('../assets/images/atulyas', false, /\.(jpg)$/);



function FlatsScreen(props) {
  const [loading, setLoading] = useState(true);
  const [imgList, setImgList] = useState([]);


  useEffect(() => {
    const loadImages = () => {
      setImgList(importAll(imgs));
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

export default FlatsScreen;