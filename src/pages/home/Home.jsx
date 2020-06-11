import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactImg from '../../assets/images/react-icon.png';
import '../../assets/styles/home.scss';

export default class Home extends Component {
  state = {
    count: 1,
    name: 'Hello React',
  };
  addCount = () => {
    this.setState((preState) => {
      return {
        count: preState.count + 1,
      };
    });
  };
  render() {
    const { name, count } = this.state;
    return (
      <div>
        <div>
          <img src={ReactImg} />
        </div>
        <h1 className="tc">{name}</h1>
        <div className="nav-list">
          <NavLink activeClassName="selected" to="/home">首页</NavLink>
          <Link to="/detail/1">详情页1</Link>
          <Link
            to={{
              pathname: "/detail/2",
              search: "?sort=name",
              hash: "#name",
              state: { fromHome: true }
            }}
          >详情页2</Link>
          <Link to="/contact">联系我们</Link>
        </div>
      </div>
    );
  }
}
