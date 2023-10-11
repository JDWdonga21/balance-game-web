import React, { Component } from 'react';

import { CSSProperties } from 'react';
import header_title_result from '../../assets/header_title_result.png';
import keyword_title from '../../assets/keyword_title.png'

import result_key_02 from '../../assets/result_key_02.png'
import result_list_02_01 from '../../assets/result_list_02_01.png'
import result_list_02_02 from '../../assets/result_list_02_02.png'
import result_list_02_03 from '../../assets/result_list_02_03.png'

import pic_txt from '../../assets/pic_txt.png'
import btn_event from '../../assets/btn_event.png'
import main_btn from '../../assets/main_btn.png'
import result_bg_ico from '../../assets/result_bg_ico.png'
import bg_img from '../../assets/bg_img.png'
import bg_item from '../../assets/bg_item.png'
import pattern_bg from '../../assets/pattern_bg.png'

class Result2 extends React.Component {
    render(): React.ReactNode {
        return(
            <div style={styles.body}>
                <div style={styles.section}>
                    <div style={styles.wrap}>
                        <div style = {styles.result}>
                            <p style ={styles.headerTitle}><img src={header_title_result} width="100%" alt="테스트결과"/></p>
                            <div style={styles.resultTitle}><img src={keyword_title} width="100%" alt="나의KQ숙소유형키워드"/></div>
                            {/* <!-- 02 --> */}
                            <div style={styles.resultItem}>
                                <div style={styles.keyTag}><img src={result_key_02} width="100%" alt="가성비 드라이브여행 관광지마스터"/></div>
                                <div style={styles.keylist}>
                                    <ul>
                                        <li style={styles.keyListLi}><a href="https://me2.do/xvLmP636" target="_blank"><img src={result_list_02_01} width="100%" alt="강릉선교장"/></a></li>
                                        <li style={styles.keyListLi}><a href="https://me2.do/F0tMXwd0" target="_blank"><img src={result_list_02_02} width="100%" alt="동락원"/></a></li>
                                        <li style={styles.keyListLi}><a href="https://me2.do/FtufCuYM" target="_blank"><img src={result_list_02_03} width="100%" alt="여로"/></a></li>
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
                        <div style={styles.wrapAfter}></div>
                    </div>
                    <div style={styles.sectionAfter}></div>
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
        background: `url('${pattern_bg}')`
    },
    section: {
        width: '100%',
        minWidth: 360,
        margin: 'auto',
        height: '100%',
        position: 'relative',
        paddingBottom: '0%'
    },
    sectionAfter: {
      content: "''",
      display: 'block',
      position: 'absolute',
      background: `url('${bg_img}') bottom center repeat-x`,
      backgroundSize: '100%',
      width: '100%',
      height: 80,
      bottom: 0,
      zIndex: 0
    },
    wrap: {
        maxWidth: 600,
        minWidth: 360,
        margin: '0 auto',
        overflow: 'hidden',
        paddingBottom: '18vh',
        position: 'relative'
    },
    headerTitle: { // Converted to camelCase
        marginTop: 50,
        textAlign: 'center',
        padding: '0 2%'
    },
    wrapAfter: {
        content: "''",
        display: 'block',
        position: 'absolute',
        background: `url('${bg_item}') top center no-repeat`,
        backgroundSize: '100%',
        width: '100%',
        height: 120,
        bottom: 0,
        zIndex: 1
    },
    question: {},
    questionItem: {
        textAlign: 'center'
    },
    questionH1: {
        marginTop: 85,
        marginBottom: 40,
        padding: '0 24%'
    },
    answerItems: {
        width: '84%',
        margin: 'auto',
        overflow: 'hidden',
        marginBottom: 150
    },
    answerItemsLi: {
        width: '50%',
        float: 'left',
        textAlign: 'center',
        padding: '3%',
        boxSizing: 'border-box'
    },
    result: {
        background: `url(${result_bg_ico}) 0 0 no-repeat`,
        backgroundPositionY: '16%',
        backgroundSize: '100%'
    },
    resultTitle: {
        width: '100%',
        margin: '8% auto 4% auto'
    },
    resultItem: {
        textAlign: 'center',
        marginTop: '8%'
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
        padding: '0 18%',
        marginTop: '5%'
    },
    resMain: {
        width: '100%',
        padding: '0 44.6%',
        marginTop: '3%'
    }
  
};

export default Result2