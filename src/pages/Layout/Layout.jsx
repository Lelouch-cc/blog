import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import ROUTES from '../../config/routes.config';

import Info from '../../components/Info/Info';
import MenuTitle from '../../components/MenuTitle/MenuTitle';

import Style from './index.module.css';

const routes = _.clone(ROUTES);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '首页',
    };
  }

  componentDidMount() {
    document.title = this.state.current;
  }

  updateActive = (key) => {
    const index = _.findIndex(routes, route => route.key === key);
    document.title = routes[index].title;
    this.setState({
      current: routes[index].title,
    });
  }

  render() {
    return (
      <Router>
        <div className={Style.con}>
          <MenuTitle updateActive={this.updateActive} />
          <div className={Style.body}>
            <div className={Style.container}>
              <Row gutter={48} type="flex" justify="center">
                <Col span={15}>
                  {
                    routes.map((route) => {
                      return (
                        <Route
                          exact
                          key={route.key}
                          path={route.path}
                          component={route.component}
                        />
                      );
                    })
                  }
                </Col>
                <Col span={8}>
                  <Info />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Layout;
