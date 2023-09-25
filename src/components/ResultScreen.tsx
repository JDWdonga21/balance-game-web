import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

interface ResultScreenProps {
  hash: string;

}

class ResultScreen extends React.Component<ResultScreenProps> {
  render() {
    const { hash } = this.props;

    if (hash === "5e901317337e58ac4695c38adf172bd1") {
      return (
        <div>
            <p>1Display for someHashValue</p>
            <p>가성비 - 관광지 마스터 - 뚜벅이</p>
        </div>
      )
      
    } else if (hash === "83873ecd67c7cef8aad8f4b8169f8579") {
      return (
        <div>
            <p>2Display for someHashValue</p>
            <p>가성비 - 관광지 마스터 - 드라이브</p>
        </div>
      )
    } else if (hash === "8d4328c8b65023e4551acae6071d82fd") {
      return (
        <div>
            <p>3Display for someHashValue</p>
            <p>가성비 - 숙소 올인형 - 뚜벅이</p>
        </div>
      )
    } else if (hash === "5b40c94e1382312acb1b856e64759e19") {
      return (
        <div>
            <p>4Display for someHashValue</p>
            <p>가성비 - 숙소 올인형 - 드라이브</p>
        </div>
      )
    } else if (hash === "d938c442280818e9d3ca7808d3b65bd5") {
      return (
        <div>
            <p>5Display for someHashValue</p>
            <p>가심비 - 관광지 마스터 - 뚜벅이</p>
        </div>
      )
    } else if (hash === "997a63628720da65f8cf6c40b791ca72") {
      return (
        <div>
            <p>6Display for someHashValue</p>
            <p>가심비 - 관광지 마스터 - 드라이브</p>
        </div>
      )
    } else if (hash === "043cdb832a8382605fbace17a5501fdf") {
      return (
        <div>
            <p>7Display for someHashValue</p>
            <p>가심비 - 숙소 올인형 - 뚜벅이</p>
        </div>
      )
    } else if (hash === "acbf415938afff17a73812981202864a") {
      return (
        <div>
            <p>8Display for someHashValue</p>
            <p>가심비 - 숙소 올인형 - 드라이브</p>
        </div>
      )
    }

    // ... handle other hash values

    return <div>Default Display</div>;
  }
}

// Wrapper component to provide params to the class component
const ResultScreenWrapper = () => {
  const { hash } = useParams() as { hash: string }; // Type assertion here
  return <ResultScreen hash={hash} />;
};

export default ResultScreenWrapper;
