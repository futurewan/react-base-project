import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './detail.scss';

interface DetailState {
  id: string;
}
interface RouteParams {
  id: string;
}
interface DetailProps extends RouteComponentProps<RouteParams> {}

export default class Detail extends Component<DetailProps, DetailState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: '',
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { match } = this.props;
    this.setState({
      id: match.params.id,
    });
  }

  render() {
    const { id } = this.state;
    return (
      <div className="tc">
        <div>
          <span>详情</span>
          {id}
        </div>
        <div className="box">
          <div className="left"> </div>
          <div className="right"> </div>
        </div>
      </div>
    );
  }
}