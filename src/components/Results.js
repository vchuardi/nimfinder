import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
  checkResult = () => {
    if (this.props.size>'1') {
      return true
    }
    return false
  }

  render() {
    console.log(this.props.size);
    if (this.checkResult()) {
      return (
        this.props.results.map((result) => (
          <Result key={result.nim_tpb} result={result} />
      )))
    }
    return null
  }
}

export default Results;