import React from 'react';
// my effects
import { Slide } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
// images
import imageFirst from '../Images/aboutusimg1.png'
import imageSecond from '../Images/aboutusimg2.png'
// styles 
import styles from './aboutus.module.css'

const AbuotUs = () => {

    return (
        <div>
            <div className={styles.headerBox}>
                <h1 className={styles.headerText}>Coffee & Cakes</h1>
            </div>
            <div className={styles.box}>
                <div className={styles.childBox1}>
                    <Fade direction='left'>
                    <img className={styles.imageAbout} src={imageFirst} alt='imageaboutus'/>
                    </Fade>
                    <Bounce>
                    <p className={styles.text1}>
                    Quick can manor smart money hopes worth too. Comfort produce husband boy her
                    had hearing. Law others theirs passed but wishes. You day real less till dear
                    read. Considered use dispatched melancholy
                    sympathize discretion led. Oh feel if up to till like.
                    </p>
                    </Bounce>
                    <Slide direction='left'>
                    <div className={styles.textBody}>
                        <p className={styles.textHeader}>
                        In addition to our own unique line-up of seasonal
                        Single Origin Drip Coffees,
                        Single Origin Cold Brews
                        </p>
                        <p className={styles.textFooter}>
                        Sample text. Click to select the text box.
                        Click again or double click to start editing the text.
                        </p>
                    </div>
                    </Slide>
                </div>
                <div className={styles.childBox2}>
                    <Fade direction='right'>
                    <img className={styles.imageAbout} src={imageSecond} alt='imageaboutus'/>
                    </Fade>
                    <Bounce>
                    <p className={styles.text2}>
                    Quick can manor smart money hopes worth too. Comfort produce husband boy her
                    had hearing. Law others theirs passed but wishes. You day real less till dear
                    read. Considered use dispatched melancholy
                    sympathize discretion led. Oh feel if up to till like.
                    </p>
                    </Bounce>
                    <Slide direction='right'>
                    <div className={styles.textBody}>
                        <p className={styles.textHeader}>
                        Our coffee is rich in flavor and the espresso is
                        a perfect balance of sweetness
                        and acidity that functions well in milk drinks.
                        </p>
                        <p className={styles.textFooter}>
                        Sample text. Click to select the text box. Click again
                        or double click to start editing the text.
                        </p>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default AbuotUs;