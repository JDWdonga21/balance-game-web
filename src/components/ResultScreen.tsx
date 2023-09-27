import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
//이미지
import R11 from '../assets/11.jpeg';
import R12 from '../assets/12.jpeg';
import R21 from '../assets/21.jpg';
import R22 from '../assets/22.jpg';
import R31 from '../assets/31.jpg';
import R32 from '../assets/32.jpeg';
//숙소 이미지
import H11 from '../assets/H11.jpeg';
import H12 from '../assets/H12.jpg';
import H13 from '../assets/H13.jpg';

import H21 from '../assets/H21.jpeg';
import H22 from '../assets/H22.jpg';
import H23 from '../assets/H23.jpg';

import H31 from '../assets/H31.jpg';
import H32 from '../assets/H32.jpg';
import H33 from '../assets/H33.jpg';

import H41 from '../assets/H41.jpg';
import H42 from '../assets/H42.jpeg';
import H43 from '../assets/H43.jpg';

import H51 from '../assets/H51.jpeg';
import H52 from '../assets/H52.jpeg';
import H53 from '../assets/H53.jpg';

import H61 from '../assets/H61.jpg';
import H62 from '../assets/H62.jpg';
import H63 from '../assets/H63.jpeg';

import H71 from '../assets/H71.jpg';
import H72 from '../assets/H72.png';
import H73 from '../assets/H73.jpg';

import H81 from '../assets/H81.jpg';
import H82 from '../assets/H82.jpg';
import H83 from '../assets/H83.jpg';

import { Typography } from '@mui/material';

const resultImg = [
    [R11, R12,],
    [R21, R22,],
    [R31, R32,],
];
const resultTitle = [
    "관광지 근처 게스트 하우스를 추천해요!",
    "자연에 둘러싸인 한옥 숙소를 추천해요!",
    "도심에 위치한 쉬어가기 좋은 호텔을 추천해요!",
    "숙소에서도 자연을 만끽할 수 있은 호텔을 추천해요!",
    "주요 관광 도시에 위치한 호텔을 추천해요!",
    "자연에 둘러싸여 있지만, 근처 관광이 가능한 한옥 숙소를 추천해요!",
    "한 번 들어가면 나오기 싫은 감성 한옥 숙소를 추천해요!",
    "멋진 뷰 바라보며 하루종일 숙소에서도 즐거운 펜션을 추천해요!"
];

const resultRecommendImg = [
    [H11 ,H12 ,H13],
    [H21 ,H22 ,H23],
    [H31 ,H32 ,H33],
    [H41 ,H42 ,H43],
    [H51 ,H52 ,H53],
    [H61 ,H62 ,H63],
    [H71 ,H72 ,H73],
    [H81 ,H82 ,H83],
];
const resultRecommendText = [
    ["백패거스인 여수(여수)", "앨리 케스트하우스(경주)", "명동 게스트하우스 꼬모(서울)"],
    ["강릉 선교장(강릉)", "동락원(전주)", "한옥게스트하우스 여로(광주)"],
    ["라마다프라자바이원덤여수(여수)", "141미니호텔(경주)", "부산센트럴파크호텔(부산)"],
    ["남해비치호텔(남해)", "호텔정관루(강원 남이섬)", "웨스트오션CC골프텔(영광)"],
    ["UH스위트 랜드스케이프(부산)", "데이즈호텔(인천)", "더퍼스트스테이호텔(서울)"],
    ["남원예촌(남원)", "락고재 한옥호텔(안동)", "여락재(강진)"],
    ["조아당(경주)", "일독일박(서울)", "스테이지안(대구)"],
    ["코스모스리조트(울릉)", "유리트리트(홍천)", "슬로우오션(포항)"],
];

interface ResultScreenProps {
  hash: string;

}

class ResultScreen extends React.Component<ResultScreenProps> {
  render() {
    const { hash } = this.props;
  
    let firResultImg;
    let secResultImg;
    let trdResultImg; 
    let firResultText;
    let secResultText;
    let trdResultText;
    let titleText;
    let firRecommendHimg;
    let secRecommendHimg;
    let trdRecommendHimg;
    let RecommendHText1;
    let RecommendHText2;
    let RecommendHText3;
    let RecommendHUrl1;
    let RecommendHUrl2;
    let RecommendHUrl3;


    if (hash === "5e901317337e58ac4695c38adf172bd1") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][0];
      firResultText = "가성비";
      secResultText = "관광지 마스터";
      trdResultText = "뚜벅이";
      titleText = resultTitle[0];
      firRecommendHimg = resultRecommendImg[0][0];
      secRecommendHimg = resultRecommendImg[0][1];
      trdRecommendHimg = resultRecommendImg[0][2];   
      RecommendHText1 = resultRecommendText[0][0];
      RecommendHText2 = resultRecommendText[0][1];
      RecommendHText3 = resultRecommendText[0][2];
      RecommendHUrl1 = "https://backpackersinyeosu.com/";
      RecommendHUrl2 = "https://alleyhostel.modoo.at/";
      RecommendHUrl3 = "http://www.mdguesthouse.com/";
    } else if (hash === "7efbd4212d8d9fb4babd144c1a533cb2") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][1];
      firResultText = "가성비";
      secResultText = "관광지 마스터";
      trdResultText = "드라이브";
      titleText = resultTitle[1];
      firRecommendHimg = resultRecommendImg[1][0];
      secRecommendHimg = resultRecommendImg[1][1];
      trdRecommendHimg = resultRecommendImg[1][2];
      RecommendHText1 = resultRecommendText[1][0];
      RecommendHText2 = resultRecommendText[1][1];
      RecommendHText3 = resultRecommendText[1][2];
      RecommendHUrl1 = "https://knsgj.net/";
      RecommendHUrl2 = "http://dongnakwon.com/";
      RecommendHUrl3 = "https://www.gjw.or.kr/yeoro/?Diary_this_year=2023&Diary_this_month=4&Diary_id=diary";
    } else if (hash === "a0e1917dabbecfd4ce12a2c9f735451c") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][0];
      firResultText = "가성비";
      secResultText = "숙소 올인형";
      trdResultText = "뚜벅이";
      titleText = resultTitle[2];
      firRecommendHimg = resultRecommendImg[2][0];
      secRecommendHimg = resultRecommendImg[2][1];
      trdRecommendHimg = resultRecommendImg[2][2];
      RecommendHText1 = resultRecommendText[2][0];
      RecommendHText2 = resultRecommendText[2][1];
      RecommendHText3 = resultRecommendText[2][2];
      RecommendHUrl1 = "http://www.ramadaplazadolsanyeosu.com";
      RecommendHUrl2 = "http://www.141minihotel.com/";
      RecommendHUrl3 = "http://centralparkhotelbusan.com";
    } else if (hash === "2da84c46079a3b58bef688ecce5265dc") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][1];
      firResultText = "가성비";
      secResultText = "숙소 올인형";
      trdResultText = "드라이브";
      titleText = resultTitle[3];
      firRecommendHimg = resultRecommendImg[3][0];
      secRecommendHimg = resultRecommendImg[3][1];
      trdRecommendHimg = resultRecommendImg[3][2];
      RecommendHText1 = resultRecommendText[3][0];
      RecommendHText2 = resultRecommendText[3][1];
      RecommendHText3 = resultRecommendText[3][2];
      RecommendHUrl1 = "http://bichihotelpension.com";
      RecommendHUrl2 = "https://www.namisum.com/hoteljeonggwanru";
      RecommendHUrl3 = "https://www.westoceancc.co.kr/";
    } else if (hash === "8f7275935bd8ad697f68933156080a4c") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][0];
      firResultText = "가심비";
      secResultText = "관광지 마스터";
      trdResultText = "뚜벅이";
      titleText = resultTitle[4];
      firRecommendHimg = resultRecommendImg[4][0];
      secRecommendHimg = resultRecommendImg[4][1];
      trdRecommendHimg = resultRecommendImg[4][2];
      RecommendHText1 = resultRecommendText[4][0];
      RecommendHText2 = resultRecommendText[4][1];
      RecommendHText3 = resultRecommendText[4][2];
      RecommendHUrl1 = "https://uhsuite.co.kr";
      RecommendHUrl2 = "http://www.dayshotelsuitesincheon.com";
      RecommendHUrl3 = "https://firststayhotel.com/";
    } else if (hash === "5e3bf12621ce04a84742cac926fba51b") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][1];
      firResultText = "가심비";
      secResultText = "관광지 마스터";
      trdResultText = "드라이브";
      titleText = resultTitle[5];
      firRecommendHimg = resultRecommendImg[5][0];
      secRecommendHimg = resultRecommendImg[5][1];
      trdRecommendHimg = resultRecommendImg[5][2];
      RecommendHText1 = resultRecommendText[5][0];
      RecommendHText2 = resultRecommendText[5][1];
      RecommendHText3 = resultRecommendText[5][2];
      RecommendHUrl1 = "https://kensington.co.kr/hnw/";
      RecommendHUrl2 = "http://rkj.co.kr/";
      RecommendHUrl3 = "https://ihanok.modoo.at/";
    } else if (hash === "2812b1243110fc1ab3f971623f8515f7") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][0];
      firResultText = "가심비";
      secResultText = "숙소 올인형";
      trdResultText = "뚜벅이";
      titleText = resultTitle[6];
      firRecommendHimg = resultRecommendImg[6][0];
      secRecommendHimg = resultRecommendImg[6][1];
      trdRecommendHimg = resultRecommendImg[6][2];
      RecommendHText1 = resultRecommendText[6][0];
      RecommendHText2 = resultRecommendText[6][1];
      RecommendHText3 = resultRecommendText[6][2];
      RecommendHUrl1 = "https://blog.naver.com/joadang213";
      RecommendHUrl2 = "http://of-onebookstay.com/";
      RecommendHUrl3 = "https://link.inpock.co.kr/stay_jian";
    } else if (hash === "a351fa89e8202b5481365c754e753f04") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][1];
      firResultText = "가심비";
      secResultText = "숙소 올인형";
      trdResultText = "드라이브";
      titleText = resultTitle[7];
      firRecommendHimg = resultRecommendImg[7][0];
      secRecommendHimg = resultRecommendImg[7][1];
      trdRecommendHimg = resultRecommendImg[7][2];
      RecommendHText1 = resultRecommendText[7][0];
      RecommendHText2 = resultRecommendText[7][1];
      RecommendHText3 = resultRecommendText[7][2];
      RecommendHUrl1 = "https://www.thekosmos.co.kr/";
      RecommendHUrl2 = "http://uretreat.co.kr/";
      RecommendHUrl3 = "http://slowforest.me/";
    }
    return (
        <div style={styles.centerContainer}>
            <h1>나의 KQ 숙소 유형 키워드</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 240,
                    height: 360,
                    },
                }}
            >
                <Card>
                    <CardMedia
                        sx={{ height: 240 }}
                        image= {firResultImg}
                        title="가성비/가심비"
                    />
                    <CardContent
                        style ={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography>
                            <h2>{firResultText}</h2>
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia
                        sx={{ height: 240 }}
                        image= {secResultImg}
                        title="관광지마스터/숙소올인형"
                    />
                    <CardContent
                        style ={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography>
                            <h2>{secResultText}</h2>
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia
                        sx={{ height: 240 }}
                        image= {trdResultImg}
                        title="뚜벅이/드라이브"
                    />
                    <CardContent
                        style ={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography>
                            <h2>{trdResultText}</h2>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Card>
                <CardContent
                    style ={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <Typography>
                        <h2>{titleText}</h2>
                    </Typography>
                </CardContent>
            </Card>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 300,
                    height: 400,
                    },
                }}
            >
                <a 
                    href={RecommendHUrl1}
                    target='_blank'
                >
                    <Card>
                        <CardMedia
                            sx={{ height: 300 }}
                            image= {firRecommendHimg}
                            title= {RecommendHText1}
                        />
                        <CardContent
                            style ={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: '100%',
                            }}
                        >
                            <Typography>
                                <h3>{RecommendHText1}</h3>
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
                <a 
                    href={RecommendHUrl2}
                    target='_blank'
                >
                    <Card>
                        <CardMedia
                            sx={{ height: 300 }}
                            image= {secRecommendHimg}
                            title= {RecommendHText2}
                        />
                        <CardContent
                            style ={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: '100%',
                            }}
                        >
                            <Typography>
                                <h3>{RecommendHText2}</h3>
                            </Typography>
                        </CardContent>
                    </Card>
                </a>                
                <a 
                    href={RecommendHUrl3}
                    target='_blank'
                >
                    <Card>
                        <CardMedia
                            sx={{ height: 300 }}
                            image= {trdRecommendHimg}
                            title= {RecommendHText3}
                        />
                        <CardContent
                            style ={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: '100%',
                            }}
                        >
                            <Typography>
                                <h3>{RecommendHText3}</h3>
                            </Typography>
                        </CardContent>
                    </Card>
                </a>
                
            </Box>
            <div style={styles.makeMargin}>
                <Stack spacing={2}>*사진을 누르면 숙소 소개 페이지로 이동합니다.</Stack>
            </div>            
            <Button 
                variant="contained"
                size="large"
                href='https://www.google.com/intl/ko_kr/forms/about/'
                target='_blank'
            >
                이벤트 응모하기
            </Button>
            <div style={styles.makeMargin}>
                <Link to="/">홈으로 돌아가기</Link>
            </div>            
        </div>        
    )
  }
}

// Wrapper component to provide params to the class component
const ResultScreenWrapper = () => {
  const { hash } = useParams() as { hash: string }; // Type assertion here
  return <ResultScreen hash={hash} />;
};
const styles: { centerContainer: CSSProperties, makeMargin: CSSProperties } = {
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  makeMargin: {
    margin: 20
  }
};
export default ResultScreenWrapper;
