import React, { Component } from 'react';
import { CSSProperties } from 'react';
import header_title_test from '../assets/header_title_test.png';
import pattern_bg from '../assets/pattern_bg.png'

import index_img from '../assets/index_img.png'
import start_btn from '../assets/start_btn.png'

class FirstScreen extends React.Component {
    render(): React.ReactNode {
        return(
            <div style={styles.body}>
                <div style={{ width: '100%', height: '7%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    
                </div>
                <div style={styles.section}>
                    <div style={styles.wrap}>
                        <div style={styles.question}>
                            <p style={styles.headerTitle}><img src={header_title_test} width="100%" alt="나의 KQ숙소유형 테스트"/></p>
                            <div style={styles.introVisual}>
                                <div style={styles.introVisualImg}><img style={{verticalAlign : 'bottom'}} src={index_img} width="100%" alt="나의 KQ숙소유형테스트"/></div>
                            </div>
                            <a href="/Questions" target="_self" style={styles.introVisualIntroImgStartBtn}><img src={start_btn} width="100%" alt="테스트시작하기"/></a>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
const styles: {[key in string]: CSSProperties}={
    body: {
        padding: 0,
        margin: 0,
        position: 'relative',
        background: `url('${pattern_bg}')`,
    },
    section: {        
        width: '100%',
        minWidth: 360,
        margin: '0 auto',
        height: '100%',
        position: 'relative',
    },
    wrap: {
        maxWidth: 600,
        width: '100%',
        padding: '0 0 18vh 0',
        textAlign: 'center',
        margin: '0 auto',
        boxSizing: 'border-box',
        position: 'relative',
    },
    headerTitle: { // Converted to camelCase
        marginTop: 50,
        textAlign: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    question: {},
    questionItem: {
        textAlign: 'center',
        position: 'relative'
    },
    introVisual: {
        marginTop: '5%',
        borderRadius: 30,
        width:'100%',
    },
    introVisualImg: {
        width:'100%',
        margin:'10% 0 0% 0',
        verticalAlign : 'bottom'
    },
    introVisualIntroImgStartBtn: {
        width: '95%',
        margin: '0% auto',
        display: 'inline-block',
    },
}
export default FirstScreen;