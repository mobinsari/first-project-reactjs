import React from 'react';
// my effects
import{ Slide } from 'react-awesome-reveal'
// styles
import styles from './main.module.css'
// image
import mainImage from '../Images/mainimage.jpg'

const Main = () => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.mainImage} src={mainImage} alt='cofee' />
                <div className={styles.box}>
                    <Slide direction='right'>
                    <h1 className={styles.headerText}>Unique Craft Cafe in NYC</h1>
                    </Slide>
                    <Slide direction='right'>
                    <p className={styles.bodyText}>
                        Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.
                        A lacus vestibulum sed arcu non.Dolor magna eget est lorem ipsum dolor sit
                        amet consectetur.
                    </p>
                    </Slide>
                <Slide direction='right'>
                    <button className={styles.button}>VIEW MENU</button>
                </Slide>
                </div>
            </div>
        </div>
    );
};

export default Main;