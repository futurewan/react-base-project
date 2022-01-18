import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import style from '../../assets/styles/home.scss';

export default function Home() {
  const stringing = [1, 2, 3, 4, 5];
  const ff = stringing.includes(1);
  console.log('ff', ff);
  return (
    <div>
      <div className={style['nav-list']}>
        <NavLink className={({ isActive }) => `nav-link${isActive ? ' selected' : ''}`} to="/home">
          首页
          {ff}
        </NavLink>
        <Link to="/shopping">购物车</Link>
        <Link
          to={{
            pathname: '/detail/2',
            search: '?sort=name',
            hash: '#name',
          }}
        >
          详情页
        </Link>
        <Link to="/contact">联系我们</Link>
      </div>
    </div>
  );
}
