import React, { Component } from 'react';

import showMessage from '../common/Show';

import './index.css';

class Live2d extends Component {
  componentDidMount = () => {
    if (typeof loadlive2d === 'undefined') {
      const script = document.createElement('script');

      script.setAttribute('src', `${process.env.PUBLIC_URL}live2d/js/live2d.js`);
      document.getElementsByTagName('head')[0].appendChild(script);

      script.onload = script.onreadystatechange = () => {
        if (!this.readyState || this.readyState === 'complete') {
          loadlive2d('live2d', `${process.env.PUBLIC_URL}live2d/model/tia/model.json`);

          let text = '';
          const textArr = [
            "110吗，这里有个变态一直在碰我(ó﹏ò｡)",
            "Hentai！", "再碰我的话我可要报警了！⌇●﹏●⌇",
            "不要动手动脚的！快把手拿开~~", "真…真的是不知羞耻！",
          ];

          const messageBox = document.querySelector('.live2d-message');
          showMessage(messageBox, '欢迎您的来访，(＝^ω^＝)', 6000, 1500);

          this.ele.onclick = () => {
            text = textArr[Math.floor(Math.random() * textArr.length + 1) - 1];
            showMessage(messageBox, text);
          };

          const a = {
            mouseover: [
              {
                selector: '.title a',
                text: ['要看看 {text} 么？'],
              },
            ],
          };
        }
      };
    }
  }

  componentWillUnmount = () => {
    this.ele.onclick = null;
  }

  render() {
    return (
      <div id="live2d-wrap">
        <div className="live2d-message" />
        <canvas id="live2d" ref={(ele) => { this.ele = ele; }} width="260" height="240" />
      </div>
    );
  }
}

export default Live2d;
