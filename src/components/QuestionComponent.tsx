import React, { Component } from 'react';
import { MD5 } from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';
import header_title_test from '../assets/header_title_test.png';
import keyword_title from '../assets/keyword_title.png'

import pic_txt from '../assets/pic_txt.png'
import btn_event from '../assets/btn_event.png'
import main_btn from '../assets/main_btn.png'
import result_bg_ico from '../assets/result_bg_ico.png'
import bg_img from '../assets/bg_img.png'
import bg_item from '../assets/bg_item.png'
import pattern_bg from '../assets/pattern_bg.png'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import question_title_01 from '../assets/question_title_01.png'
import question_title_02 from '../assets/question_title_02.png'
import question_title_03 from '../assets/question_title_03.png'
//이미지
import answer_01_a from '../assets/answer_01_a.png';
import answer_01_b from '../assets/answer_01_b.png';
import answer_02_a from '../assets/answer_02_a.png';
import answer_02_b from '../assets/answer_02_b.png';
import answer_03_a from '../assets/answer_03_a.png';
import answer_03_b from '../assets/answer_03_b.png';

const questions = [
  "01 나의숙소소비성향은?",   
  "02 나의 이동방식은?",
  "03 나의여행 성향은?",
];

const questionsdtl = [
  "가성비",
  "뚜벅이여행",
  "관광지마스터",  
  "가심비",
  "드라이브여행",
  "숙소올인원형",  
]
const questionImg = [
  question_title_01,
  question_title_02,
  question_title_03,
];
const btnImg = [
  answer_01_a,  
  answer_02_a,
  answer_03_a,  
  answer_01_b,  
  answer_02_b,
  answer_03_b,  
];

interface State {
  step: number;
  answers: string[];
}

interface Props {
  navigate: (to: string) => void;
}

class QuestionComponent extends Component<Props, State> {
  state: State = {
    step: 0,
    answers: [],
  };

  handleAnswer = (answer: string) => {
    this.setState((prevState: State) => ({
      answers: [...prevState.answers, answer],
      step: prevState.step + 1,
    }), () => {
      if (this.state.step >= questions.length) {
        const resultString = this.state.answers.join("");
        const hash = MD5(resultString).toString();
        this.props.navigate(`/result/${hash}`);
      }
    });
  };

  render() {
    const { step } = this.state;

    if (step < questions.length) {
      const leftBtn = btnImg[step];
      const rightBtn = btnImg[step+3];
      const lefttext = questionsdtl[step];
      const righttext = questionsdtl[step+3];
      const questionTitle = questionImg[step];
      return (
        <div style={styles.body}>
          <div style={styles.section}>
            <div style={styles.wrap}>
              <div style={styles.question}>
                <div style={styles.paging}></div>
                <p style={styles.headerTitle}><img src={header_title_test} width="100%" alt="나의 KQ숙소유형테스트"/></p>

                <div style={styles.questionItem}>
                    <h1 style={styles.questionH1}><img src={questionTitle} width="100%" alt={questions[step]}/></h1>
                    <ul style={styles.answerItems}>
                        <li style={styles.answerItemsLi}><img src={leftBtn} width="100%" alt={lefttext} onClick={() => this.handleAnswer(lefttext)}/></li>
                        <li style={styles.answerItemsLi}><img src={rightBtn} width="100%" alt={righttext} onClick={() => this.handleAnswer(righttext)}/></li>
                    </ul>
                </div>
              </div>
              <div style={styles.wrapAfter}></div>
            </div>
            <div style={styles.sectionAfter}></div>
          </div>
        </div>        
      );
    }

    return <></>;
  }
}

// Wrapper component to provide navigation to the class component
const QuestionComponentWrapper: React.FC = () => {
  const navigate = useNavigate();
  return <QuestionComponent navigate={navigate} />;
};

const styles: {[key in string]: CSSProperties}= {
   body: {
        padding: 0,
        margin: 0,
        height: '100vh',
        position: 'relative',
        background: `url('${pattern_bg}')`
    },
    section: {
        width: '100%',
        minWidth: 360,
        margin: 'auto',
        height: '100%',
        position: 'relative',
        paddingBottom: '0%',
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
        height: '100%',
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
        zIndex: 1,
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
        marginBottom: 150,        
    },
    answerItemsLi: {
        width: '50%',
        float: 'left',
        textAlign: 'center',
        padding: '3%',
        boxSizing: 'border-box',
        cursor: 'pointer'
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
export default QuestionComponentWrapper;
