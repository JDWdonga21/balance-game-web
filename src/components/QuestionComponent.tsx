import React, { Component } from 'react';
import { MD5 } from 'crypto-js';
import { useNavigate } from 'react-router-dom';

const questions = [
  "질문 1: 가성비 또는 가심비?",
  "질문 2: 관광지마스터 또는 숙소올인형?",
  "질문 3: 뚜벅이 또는 드라이브?",
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
      return (
        <div>
          <p>{questions[step]}</p>
          <button onClick={() => this.handleAnswer(options[0])}>{options[0]}</button>
          <button onClick={() => this.handleAnswer(options[1])}>{options[1]}</button>
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

export default QuestionComponentWrapper;
