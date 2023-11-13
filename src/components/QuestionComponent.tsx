import React, { Component } from 'react';
import { MD5 } from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';
import header_title_test from '../assets/header_title_test.png';

import pattern_bg from '../assets/pattern_bg.png'
import LinearProgress from '@mui/material/LinearProgress';

import Stack from '@mui/material/Stack';

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

import answer_01_a_on from '../assets/answer_01_a_on.png'
import answer_01_b_on from '../assets/answer_01_b_on.png';
import answer_02_a_on from '../assets/answer_02_a_on.png';
import answer_02_b_on from '../assets/answer_02_b_on.png';
import answer_03_a_on from '../assets/answer_03_a_on.png';
import answer_03_b_on from '../assets/answer_03_b_on.png';

import vs_icon from '../assets/vs_ico.png';

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
const clickedBtnImg = [
  answer_01_a_on,
  answer_02_a_on,
  answer_03_a_on,
  answer_01_b_on,
  answer_02_b_on,
  answer_03_b_on,
];

interface State {
  step: number;
  answers: string[];
  clickedButton: string | null;
  isHoveredL: boolean;
  isHoveredR: boolean;
  onClick : boolean;
  progress1 : number;
  progress2 : number;
  progress3 : number;
}

interface Props {
  navigate: (to: string) => void;
}
class QuestionComponent extends Component<Props, State> {
  timeoutId: NodeJS.Timeout | null = null;
  state: State = {
    step: 0,
    answers: [],
    clickedButton: null,
    isHoveredL: false,
    isHoveredR: false,
    onClick : false,
    progress1: 0,
    progress2: 0,
    progress3: 0,
  };
  componentDidMount(): void {
    this.fillProgressBar('progress1');
  }
  componentWillUnmount(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  handleAnswer = (answer: string, text: string) => {
    this.setState({onClick: true})

    // Set which button is clicked
    if(text === 'left') {
      this.setState({ 
        clickedButton: 'left' 
      });
      if(this.state.isHoveredL === false){
        this.setState({
          isHoveredL: true
        })
      }
    } else if(text === 'right') {
      this.setState({ 
        clickedButton: 'right' 
      });
      if(this.state.isHoveredR === false){
        this.setState({
          isHoveredR: true
        })
      }
    }
    
    // Reset clickedButton after 1 second
    this.timeoutId = setTimeout(() => {
      this.handleAnswer2(answer);
    }, 1500);
  }
  handleAnswer2 = (answer: string) => {
    this.setState((prevState: State) => ({
      answers: [...prevState.answers, answer],
      clickedButton: null,
      onClick: false,
      step: prevState.step + 1,
      isHoveredL: false,
      isHoveredR: false,
    }), () => {
      //진행바
      if (this.state.step === 1) {
        this.fillProgressBar('progress2');
      } else if (this.state.step === 2) {
        this.fillProgressBar('progress3');
      } 


      if (this.state.step >= questions.length) {
        const resultString = this.state.answers.join("");
        const hash = MD5(resultString).toString();
        this.props.navigate(`/result/${hash}`);
      }
    });
  };
  fillProgressBar = (progressName: 'progress1' | 'progress2' | 'progress3') => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 1; // 원하는 속도를 조절하기 위해 이 값을 조정할 수 있습니다.
      this.setState({ [progressName]: progressValue } as any); // as any is used to bypass TypeScript type error.
      if (progressValue >= 100) {
        clearInterval(interval);
      }
    }, 3);
  }
  onMouseEnterL = () => {
    this.setState({ isHoveredL: true });
  }
  onMouseLeaveL = () => {
    this.setState({ isHoveredL: false });
  }
  onMouseEnterR = () => {
    this.setState({ isHoveredR: true });
  }
  onMouseLeaveR = () => {
    this.setState({ isHoveredR: false });
  }
  render() {
    const { step } = this.state;
    const buttonStyleL = {
      transition: '0.3s',
      transform: this.state.isHoveredL ? 'scale(1.1)' : 'scale(1)'
    };
    const buttonStyleR = {
      transition: '0.3s',
      transform: this.state.isHoveredR ? 'scale(1.1)' : 'scale(1)'
    };
    if (step < questions.length) {
      const leftBtn = btnImg[step];
      const rightBtn = btnImg[step+3];
      const temporaryLeftImage = clickedBtnImg[step]
      const temporaryRightImage = clickedBtnImg[step+3]
      const lefttext = questionsdtl[step];
      const righttext = questionsdtl[step+3];
      const questionTitle = questionImg[step];
      return (
        <div style={styles.body}>
          {/* 새로운 진행바 */}
          <div style={{ width: '100%', height: '5%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: 15, }}>
            <div style={{ width: 900, height: '5%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <Stack style={{width: '32%', height: 7 }}>
                <LinearProgress 
                  sx={{ 
                    '& .MuiLinearProgress-barColorPrimary': {
                      backgroundColor: '#68cb37',
                    },
                    '& .MuiLinearProgress-colorPrimary': {
                      backgroundColor: '#ced3df',
                    },
                  }}
                  style={{ width: '100%', height: 7, backgroundColor: '#ced3df'}} 
                  variant="determinate" 
                  value={this.state.progress1} 
                />
              </Stack>
              <Stack style={{ width: '32%', height: 7 }}>
                <LinearProgress 
                  sx={{ 
                    '& .MuiLinearProgress-barColorPrimary': {
                      backgroundColor: '#68cb37',
                    },
                    '& .MuiLinearProgress-colorPrimary': {
                      backgroundColor: '#ced3df',
                    },
                  }}
                  style={{ width: '100%', height: 7, backgroundColor: '#ced3df' }} 
                  variant="determinate" 
                  value={this.state.progress2} 
                />
              </Stack>
              <Stack style={{ width: '32%', height: 7 }}>
                <LinearProgress 
                  sx={{ 
                    '& .MuiLinearProgress-barColorPrimary': {
                      backgroundColor: '#68cb37',
                    },
                    '& .MuiLinearProgress-colorPrimary': {
                      backgroundColor: '#ced3df',
                    },
                  }}
                  style={{ width: '100%', height: 7, backgroundColor: '#ced3df'}} 
                  variant="determinate" 
                  value={this.state.progress3} 
                />
              </Stack>
              
            </div>
          </div>
          <div style={styles.section}>
            <div style={styles.wrap}>
              <div style={styles.question}>                
                <p style={styles.headerTitle}><img src={header_title_test} width="100%" alt="나의 숙소취향 테스트"/></p>
                <div style={styles.border}>
                  <div style={styles.questionItem}>
                    <h1 style={styles.questionH1}><img src={questionTitle} width="100%" alt={questions[step]}/></h1>
                    <span style={styles.vsico}><img src={vs_icon} width="100%" alt="vs"/></span>
                    <ul style={styles.answerItems}>
                        <li style={styles.answerItemsLi}>
                          <img
                            style={buttonStyleL}
                            src={this.state.clickedButton === 'left' ? temporaryLeftImage : leftBtn} 
                            width="100%" 
                            alt={lefttext}
                            onMouseEnter={this.onMouseEnterL}
                            onMouseLeave={this.onMouseLeaveL} 
                            onClick={this.state.onClick ? ()=> {} : () => this.handleAnswer(lefttext, 'left')}
                          />
                        </li>
                        <li style={styles.answerItemsLi}>
                          <img 
                            style={buttonStyleR}
                            src={this.state.clickedButton === 'right' ? temporaryRightImage : rightBtn}
                            width="100%" 
                            alt={righttext} 
                            onMouseEnter={this.onMouseEnterR}
                            onMouseLeave={this.onMouseLeaveR}
                            onClick={this.state.onClick ? ()=> {} : () => this.handleAnswer(righttext, 'right')}
                          />
                        </li>
                    </ul>                    
                </div>
                </div>               

              </div>
              {/* <div style={styles.wrapAfter}></div> */}
            </div>
            {/* <div style={styles.sectionAfter}></div> */}
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
    },
    introVisual: {
      border: '3px solid #242484',
      width: '100%',
      borderRadius: 30,
      background: '#fff',
      marginTop: '5%' //5
    },
    introImg: {
      width: '100%',
      margin: '10% 0 3% 0' //15
    },
    startBtn: {
      width: '80%', 
      margin: '5% auto', //5% 
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
      boxSizing: 'border-box',
      cursor: 'pointer'
    },
    result: {
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
        padding: '0 15%',
        marginTop: '5%'
    },
    resMain: {
        width: '100%',
        padding: '0 44.6%',
        marginTop: '4% auto 12% auto'
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
export default QuestionComponentWrapper;