import React from 'react';
import { Card } from 'antd';
import Style from './index.module.css';

const imgSrc = require('../../assets/youni.jpg');
const avatar = require('../../assets/avatar.jpg');
const bg = require('../../assets/zero2.jpg');

const cardStyle = {
  padding: '0',
};

const Info = (props) => {
  return (
    <div className={Style.infoCon}>
      <div className={Style.cardCon}>
        <Card bodyStyle={cardStyle} hoverable style={{ cursor: 'auto' }}>
          <div className={Style.cardBg}>
            <img src={imgSrc} alt="" className={Style.img} />
            <div className={Style.infos}>
              <div className={Style.portrait}>
                <img src={avatar} alt="" className={Style.avatar} />
                <h3 className={Style.name}>Lelouch-cc</h3>
                <p className={Style.introduce}>
                  摩羯座程序员，重度选择困难症患者~~~
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card bodyStyle={cardStyle} hoverable style={{ marginTop: '20px', cursor: 'auto' }}>
          <img src={bg} alt="" className={Style.bg} />
        </Card>
      </div>
    </div>
  );
};

export default Info;
