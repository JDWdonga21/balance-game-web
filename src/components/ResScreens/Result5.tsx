import React, { Component } from 'react';

import { CSSProperties } from 'react';
import header_title_result from '../../assets/header_title_result.png';
import keyword_title from '../../assets/keyword_title.png'

import result_key_05 from '../../assets/result_key_05.png'
import result_list_05_01 from '../../assets/result_list_05_01.png'
import result_list_05_02 from '../../assets/result_list_05_02.png'
import result_list_05_03 from '../../assets/result_list_05_03.png'

import pic_txt from '../../assets/pic_txt.png'
import btn_event from '../../assets/btn_event.png'
import main_btn from '../../assets/main_btn.png'
// result_bg_ico from '../../assets/result_bg_ico.png'
import bg_img from '../../assets/bg_img.png'
import bg_item from '../../assets/bg_item.png'
import pattern_bg from '../../assets/pattern_bg.png'

class Result5 extends React.Component {
    render(): React.ReactNode {
        return(
            <div style={styles.body}>
                <div style={{ width: '100%', height: '7%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    
                </div>
                <div style={styles.section}>
                    <div style={styles.wrap}>
                        <div style = {styles.result}>
                            <p style ={styles.headerTitle}><img src={header_title_result} width="100%" alt="테스트결과"/></p>
                            <div style={styles.border}>
                            <div style={styles.resultTitle}><img src={keyword_title} width="100%" alt="나의 숙소취향 테스트"/></div>
                            {/* <!-- 02 --> */}
                            <div style={styles.resultItem}>
                                <div style={styles.keyTag}><img src={result_key_05} width="100%" alt="가성비 뚜벅이여행 숙소올인형"/></div>
                                <div style={styles.keylist}>
                                    <ul>
                                        <li style={styles.keyListLi}><a href="https://me2.do/FynXgs4U" target="_blank"><img src={result_list_05_01} width="100%" alt="UH스위트랜드스케이프"/></a></li>
                                        <li style={styles.keyListLi}><a href="https://me2.do/xXEdc6zc" target="_blank"><img src={result_list_05_02} width="100%" alt="데이즈호텔"/></a></li>
                                        <li style={styles.keyListLi}><a href="https://me2.do/5YakemoA" target="_blank"><img src={result_list_05_03} width="100%" alt="더퍼스트테이호텔"/></a></li>
                                    </ul>
                                </div>
                            </div>               
                            
                            
                            <div style={styles.resClicktxt}><img src={pic_txt} width="100%" alt="사진을 누르면 숙소 소개 페이지로 이동합니다"/></div>
                            <div style={styles.resBtn}>
                                <a href="https://forms.gle/BnWvXmVgWrv7qZ8T9" target="_blank">
                                    <img src={btn_event} width="100%" alt="이벤트 응모하기"/>
                                </a>
                            </div>
                            <div style={styles.resMain}>
                                <a href="/" target="_self">
                                    <img src={main_btn} width="100%" alt="처음으로"/>
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* <div style={styles.wrapAfter}></div> */}
                    </div>
                    {/* <div style={styles.sectionAfter}></div> */}
                </div>
            </div>
            
        )
    }
}

const styles: {[key in string]: CSSProperties}= {
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
        padding: '0 25px 18vh 25px',
        textAlign: 'center',
        margin: '0 auto',
        boxSizing: 'border-box',
        position: 'relative',
    },
    headerTitle: { // Converted to camelCase
        marginTop: 50,
        textAlign: 'center',
        padding: '0.2%'
    },
    question: {},
    questionItem: {
        textAlign: 'center',
        position: 'relative'
    },
    vsico: {
        position: 'absolute',
        width: '15%',
        top: '54%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1
    },
    border: {
        border: '3px solid #242484',
        width: '100%',
        borderRadius: 30,
        background: '#fff',
        marginTop: '5%',
        paddingBottom: '2%', //8
        //overflow: 'hidden', // Add this line
    },
    introVisual: {
      border: '3px solid #242484',
      width: '100%',
      borderRadius: 30,
      background: '#fff',
      marginTop: '2%' //5
    },
    introImg: {
      display: 'block',
      width: '100%',
      margin: '10% 0' //15
    },
    startBtn: {
      width: '100%', 
      margin: '2% auto', //5% 
      display: 'inline-block'
    },
    questionH1: {
        marginTop: 85, //85
        marginBottom: 40,
        padding: '0 14%'
    },
    answerItems: {
        width: '84%',
        margin: 'auto',
        display: 'inline-block',
        marginBottom: 50,
    },
    answerItemsLi: {
      width: '100%',
      float: 'left',
      textAlign: 'center',
      padding: '5% 0',
      boxSizing: 'border-box'
    },
    result: {
        // background: `url(${result_bg_ico}) 0 0 no-repeat`,
        backgroundPositionY: '16%',
        backgroundSize: '100%'
    },
    resultTitle: {
        width: '100%',
        margin: '8% auto 4% auto'
    },
    resultItem: {
        textAlign: 'center',
        marginTop: '8%',
        display: 'block'
    },
    keyTag: {
        marginBottom: 20
    },
    keyList: {},
    keyListLi: {
        width: '100%',
        padding: '0 14% 0.5% 14%',
        boxSizing: 'border-box'
    },
    resClicktxt: {
        padding: '0 30%'
    },
    resBtn: {
        width: '100%',
        padding: '0 15%',
        marginTop: '5%'
    },
    resMain: {
        width: '100%',
        padding: '0 44.6%',
        margin: '4% auto 12% auto'
    },
    progressBar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px'
    },
    progressBarItem: {
      width: '100%',
      height: '10px',
      margin: '0 5px',
      borderRadius: '5px',
    },
};
export default Result5