import React from 'react';
import { Card } from 'antd';

import Style from './index.module.css';

const bodyStyle = {
  padding: '18px 25px 15px',
};

const Item = () => (
  <Card
    hoverable
    style={{ marginBottom: '18px', borderRadius: '5px', cursor: 'auto' }}
    bodyStyle={bodyStyle}
  >
    <b className={Style.title}>
      <h4>
        用CSS绘制0.5px的线
      </h4>
    </b>
    <p className={Style.desc}>
      post @ 2018-06-17   category: CSS   浏览: 204
    </p>
    <div className={Style.abstract}>
      我撒肯定抗裂砂浆阿卡丽倒计时啦卡兰蒂斯我撒肯定抗裂砂浆阿卡丽倒计时啦卡兰蒂斯我撒肯定抗裂砂浆阿卡丽倒计时啦卡兰蒂斯我撒肯定抗裂砂浆阿...
    </div>
    <span className={Style.link}>
      <p className={Style.btn}>
        {`阅读全文 >>`}
      </p>
    </span>
  </Card>
);

export default Item;
