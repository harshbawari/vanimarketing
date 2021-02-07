import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Navbar from '../components/Navbar';
import '../styles/UnderConstructionScreen.css';

const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => {
    images.push(r(item).default);
  });

  return images;
}
const bazar93 = require.context('../assets/images/under_construction/bazar93', false, /\.(jpg)$/);
const superbia = require.context('../assets/images/under_construction/superbia', false, /\.(jpg)$/);
const bazar89 = require.context('../assets/images/under_construction/bazar', false, /\.(jpg)$/);
const millenia = require.context('../assets/images/under_construction/millenia', false, /\.(jpg)$/);


function UnderConstructionScreen(props) {
  const [loading, setLoading] = useState(true);
  const [imgList, setImgList] = useState([]);


  useEffect(() => {
    const loadImages = () => {
      setImgList([...importAll(bazar93), ...importAll(superbia), ...importAll(bazar89), ...importAll(millenia)]);
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

export default UnderConstructionScreen;