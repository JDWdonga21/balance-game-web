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
import H1 from '../assets/H1.jpg';
import H2 from '../assets/H2.jpg';
import H3 from '../assets/H3.jpg';

import { Typography } from '@mui/material';

const resultImg = [
    [R11, R12,],
    [R21, R22,],
    [R31, R32,],
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

    if (hash === "5e901317337e58ac4695c38adf172bd1") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][0];
      firResultText = "가성비";
      secResultText = "관광지 마스터";
      trdResultText = "뚜벅이";         
    } else if (hash === "83873ecd67c7cef8aad8f4b8169f8579") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][1];
      firResultText = "가성비";
      secResultText = "관광지 마스터";
      trdResultText = "드라이브";
    } else if (hash === "8d4328c8b65023e4551acae6071d82fd") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][0];
      firResultText = "가성비";
      secResultText = "숙소 올인형";
      trdResultText = "뚜벅이";
    } else if (hash === "5b40c94e1382312acb1b856e64759e19") {      
      firResultImg = resultImg[0][0];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][1];
      firResultText = "가성비";
      secResultText = "숙소 올인형";
      trdResultText = "드라이브";
    } else if (hash === "d938c442280818e9d3ca7808d3b65bd5") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][0];
      firResultText = "가심비";
      secResultText = "관광지 마스터";
      trdResultText = "뚜벅이";
    } else if (hash === "997a63628720da65f8cf6c40b791ca72") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][0];
      trdResultImg = resultImg[2][1];
      firResultText = "가심비";
      secResultText = "관광지 마스터";
      trdResultText = "드라이브";
    } else if (hash === "043cdb832a8382605fbace17a5501fdf") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][0];
      firResultText = "가심비";
      secResultText = "숙소 올인형";
      trdResultText = "뚜벅이";
    } else if (hash === "acbf415938afff17a73812981202864a") {      
      firResultImg = resultImg[0][1];
      secResultImg = resultImg[1][1];
      trdResultImg = resultImg[2][1];
      firResultText = "가심비";
      secResultText = "숙소 올인형";
      trdResultText = "드라이브";
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
                        title="green iguana"
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
                        title="green iguana"
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
                        title="green iguana"
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
            <Stack>여수, 경주, 서울 등 국내 주요 관광지 근처의</Stack>
            <Stack>접근성 좋은 게스트 하우스를 추천해요!</Stack>
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
                <Card>
                    <CardMedia
                        sx={{ height: 300 }}
                        image= {H1}
                        title="green iguana"
                    />
                    <CardContent
                        style ={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography>
                            <h2>유리트리트</h2>
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia
                        sx={{ height: 300 }}
                        image= {H2}
                        title="green iguana"
                    />
                    <CardContent
                        style ={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography>
                            <h2>힐튼 스테이 코스모스</h2>
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia
                        sx={{ height: 300 }}
                        image= {H3}
                        title="green iguana"
                    />
                    <CardContent
                        style ={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography>
                            <h2>포트 엔 포트</h2>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Stack>*사진을 누르면 숙소 소개 페이지로 이동합니다.</Stack>
            <Button 
                variant="contained"
                size="large"
            >
                이벤트 응모하기
            </Button>
            <Link to="/">홈으로 돌아가기</Link>
        </div>        
    )
  }
}

// Wrapper component to provide params to the class component
const ResultScreenWrapper = () => {
  const { hash } = useParams() as { hash: string }; // Type assertion here
  return <ResultScreen hash={hash} />;
};
const styles: { centerContainer: CSSProperties } = {
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
};
export default ResultScreenWrapper;
