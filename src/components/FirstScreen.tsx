import React, { Component } from 'react';
import { CSSProperties } from 'react';

class FirstScreen extends React.Component {
    render(): React.ReactNode {
        return(
            <div>
                <p>첫화면 입니다. UIUX 준비중</p>
                <a href="/Questions" target="_self"><p>다음화면가기</p></a>
            </div>
        )
    }
}
const styles: {[key in string]: CSSProperties}={

}
export default FirstScreen;