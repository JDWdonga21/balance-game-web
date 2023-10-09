import React, { Component } from 'react';
import { MD5 } from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Q1img from '../assets/Q1.png'
import Q2img from '../assets/Q2.jpg'
import Q3img from '../assets/Q3.jpeg'
//이미지
import R11 from '../assets/11.jpeg';
import R12 from '../assets/12.jpeg';
import R21 from '../assets/21.jpg';
import R22 from '../assets/22.jpg';
import R31 from '../assets/31.jpg';
import R32 from '../assets/32.jpeg';

const questions = [
  "질문 1: 가성비 또는 가심비?",
  "질문 2: 관광지마스터 또는 숙소올인형?",
  "질문 3: 뚜벅이 또는 드라이브?",
];
const questionsdtl = [
  "설명설명 설명설명설명 설명설명설명 설명설명설명 설명설명설명 설명",
  "설명설명 설명설명설명 설명설명설명 설명설명설명 설명설명설명 설명",
  "설명설명 설명설명설명 설명설명설명 설명설명설명 설명설명설명 설명설명설명 설명",
]
const questionImg = [
  Q1img,
  Q2img,
  Q3img,
];
const btnImg = [
  R11,
  R21,
  R31,
  R12,
  R22,
  R32,
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
      const options = questions[step].split(":")[1].split("또는").map((s) => s.trim());
      options[1] = options[1].replace('?', '');
      const cardImg = questionImg[step];
      const leftBtn = btnImg[step];
      const rightBtn = btnImg[step+3];
      return (
        <div style={styles.centerContainer}>
            <h1>나의 KQ 숙소 유형 키워드</h1>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image= {cardImg}
                    title="이미지"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h4>{questions[step]}</h4>
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                        {questionsdtl[step]}
                    </Typography>
                </CardContent>
                {/* <CardActions 
                    style={{ 
                        justifyContent: 'space-around' 
                    }}
                >
                    <Button 
                        variant="contained"
                        size="large"
                        onClick={() => this.handleAnswer(options[0])}
                    >
                        {options[0]}
                    </Button>
                    <Button 
                        variant="contained"
                        size="large"
                        onClick={() => this.handleAnswer(options[1])}
                    >
                        {options[1]}
                    </Button>
                </CardActions> */}
            </Card>
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <img 
                  width={300} 
                  height={300} 
                  src={leftBtn} 
                  onClick={() => this.handleAnswer(options[0])}
                />
              </Box>
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <img 
                  width={300} 
                  height={300} 
                  src={rightBtn} 
                  onClick={() => this.handleAnswer(options[1])}
                />
              </Box>
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

const styles: { centerContainer: CSSProperties } = {
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // use vh for full viewport height
  },
};
export default QuestionComponentWrapper;
