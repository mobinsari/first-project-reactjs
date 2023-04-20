import React from 'react';
import { Animate } from "react-simple-animate";
// styles
import styles from './main.module.css'
// image
import mainImage from '../Images/mainimage.jpg'

const Main = () => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.mainImage} src={mainImage} alt='cofee' />
                <Animate play  easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95' start={{ opacity: 0 }} end={{ opacity: 1 }}>
                <div className={styles.box}>
                    <h1 className={styles.headerText}>Unique Craft Cafe in NYC</h1>
                    <p className={styles.bodyText}>
                        Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.
                        A lacus vestibulum sed arcu non.Dolor magna eget est lorem ipsum dolor sit
                        amet consectetur.
                    </p>
                    <button className={styles.button}>VIEW MENU</button>
                </div>
                </Animate>
            </div>
        </div>
    );
};

export default Main;