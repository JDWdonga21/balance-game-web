import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CSSProperties } from 'react';
//결과화면
import Result1 from './ResScreens/Result1';
import Result2 from './ResScreens/Result2';
import Result3 from './ResScreens/Result3';
import Result4 from './ResScreens/Result4';
import Result5 from './ResScreens/Result5';
import Result6 from './ResScreens/Result6';
import Result7 from './ResScreens/Result7';
import Result8 from './ResScreens/Result8';

//이미지
import pattern_bg from '../assets/pattern_bg.png'

interface ResultScreenProps {
  hash: string;
}

class ResultScreen extends React.Component<ResultScreenProps> {
  render() {
    const { hash } = this.props;
    return (
        <div>
            {hash === "a3c954475b0fa36e7e71f254fd7f08ca" ? 
            <div>
                <Result1/>
            </div> :
            <div>

            </div>
            }
            {hash === "0f98482a72ff8325e4ece1b6c3b17b37" ? 
            <div>
                <Result2/>
            </div> :
            <div>

            </div>
            }
            {hash === "e7518e7741137948d4a87e6ac8bc4242" ? 
            <div>
                <Result3/>
            </div> :
            <div>

            </div>
            }
            {hash === "b0228a15c7738e29235c153cf71f3c5e" ? 
            <div>
                <Result4/>
            </div> :
            <div>

            </div>
            }
            {hash === "64b019c623fb8b92c04e3be89268b346" ? 
            <div>
                <Result5/>
            </div> :
            <div>

            </div>
            }
            {hash === "47c223b5c9d3e3ab2c9cd542220852d0" ? 
            <div>
                <Result6/>
            </div> :
            <div>

            </div>
            }
            {hash === "5bebe16ab7d8e93039093f39c338a906" ? 
            <div>
                <Result7/>
            </div> :
            <div>

            </div>
            }
            {hash === "50aadf589d5b9be77f2b74282e4614c2" ? 
            <div>
                <Result8/>
            </div> :
            <div>

            </div>
            }              
        </div>        
    )
  }
}

// Wrapper component to provide params to the class component
const ResultScreenWrapper = () => {
  const { hash } = useParams() as { hash: string }; // Type assertion here
  return <ResultScreen hash={hash} />;
};
const styles: {[key in string]: CSSProperties}= {
   body: {
        padding: 0,
        margin: 0,
        position: 'relative',
        background: `url('${pattern_bg}')`
    },
    div: {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0
    },
    p: {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0
    },
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    li: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    section: {
        width: '100%',
        minWidth: 360,
        margin: 'auto',
        height: '100%',
        position: 'relative',
        paddingBottom: '0%'
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
        padding: '0 s18%',
        marginTop: '5%'
    },
    resMain: {
        width: '100%',
        height: '100%',
        padding: '0% 30% 0 30%',
        alignItems: 'center',
        marginTop: '3%',
    } 
  
};
export default ResultScreenWrapper;