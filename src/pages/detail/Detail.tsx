import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './detail.scss';

interface DetailState {
  id: string;
  num: number;
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
      num: 1,
    };
  }

  componentDidMount() {
    const obj1 = { name: 1 };
    const obj2 = Object.assign({}, obj1, { age: 10 });

    console.log(obj2, obj1);
    console.log(this.props);
    const { match } = this.props;
    this.setState({
      id: match.params.id,
    });
  }

  render() {
    const { id } = this.state;
    return (
      <div
        onClick={() => {
          this.setState((state) => {
            return { num: state.num + 1 };
          });
        }}
        className="tc"
      >
        <div>
          <span>详情</span>
          {id}
        </div>
        <div className="box">
          <div className="left"> {this.state.num}</div>
          <div className="right"> </div>
        </div>
      </div>
    );
  }
}
