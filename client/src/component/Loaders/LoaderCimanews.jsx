import React from 'react';
import style from './LoaderCimanews.module.css';
import loader from '../../assets/CimaNews_Loader.gif';

const LoaderCimanews = () => {
    return (
        <div className={style.container}>
            <img src={loader} alt="Loader" />
        </div>
    );
};

export default LoaderCimanews;