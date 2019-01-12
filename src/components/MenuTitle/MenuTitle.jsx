import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ROUTES from '../../config/routes.config';

import Style from './index.module.css';

const routes = _.clone(ROUTES);

class MenuTitle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeKey: '',
    };
  }

  componentDidMount() {
    const pathname = this.context.router.route.location.pathname;
    const index = _.findIndex(routes, route => route.path === pathname);
    this.setState({
      activeKey: routes[index].key,
    });
  }

  handleClick = (key) => {
    this.setState({
      activeKey: key,
    });
    this.props.updateActive(key);
  }

  render() {
    return (
      <div className={Style.con}>
        <div className={Style.main}>
          <div className={Style.logo}>
            1234567
          </div>
          <ul className={Style.menu}>
            {
              routes.map((route) => {
                return (
                  <li key={route.key} className={Style.li}>
                    <div className={
                      classNames({
                        [Style.menuItem]: true,
                        [Style.menuItemActive]: this.state.activeKey === route.key,
                      })
                    }
                    >
                      <Link
                        to={route.path}
                        onClick={() => { this.handleClick(route.key); }}
                      >
                        {route.title}
                      </Link>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

MenuTitle.contextTypes = {
  router: PropTypes.object,
};

export default MenuTitle;
