import React from 'react';
// effects
import { Slide } from 'react-awesome-reveal';
import { Fade } from 'react-awesome-reveal';
// image
import bodyImage from '../Images/aboutfood.jpg'
// styles
import styles from './aboutfood.module.css'

const AboutFood = () => {
    return (
        <div>
            <div>
                <div className={styles.container}>
                    <img className={styles.image} src={bodyImage} alt='bodyimage'/>
                    <Slide duration={1500} direction='up'>
                    <div className={styles.box}>
                        <div className={styles.childBox}>
                            <h1 className={styles.number}>01</h1>
                            <Fade delay={500} duration={1500} direction='left'>
                            <h5>Our beer</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                            </Fade>
                        </div>
                        <div className={styles.childBox}>
                            <h1 className={styles.number}>02</h1>
                            <Fade delay={500} duration={1500} direction='left'>
                            <h5>Our food</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo 
                            </p>
                            </Fade>
                        </div>
                        <div className={styles.childBox}>
                            <h1 className={styles.number}>03</h1>
                            <Fade delay={500} duration={1500} direction='right'>
                            <h5>Our drink</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                            </Fade>
                        </div>
                        <div className={styles.childBox}>
                            <h1 className={styles.number}>04</h1>
                            <Fade delay={500} duration={1500} direction='right'>
                            <h5>Excellent coffee</h5>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                            </Fade>
                        </div>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default AboutFood;