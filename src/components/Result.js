import React, { Component } from 'react';
import './Result.css';

export class Result extends Component {
  render() {
    const { name, nim_tpb, nim_jur, prodi } = this.props.result;
    return (
      <div className='tabel'>
        <span className='column'>
          {name}
        </span>
        <span className='column'>
          {nim_tpb}
        </span>
        <span className='column'>
          {nim_jur}
        </span>
        <span className='column'>
          {prodi}
        </span>
      </div>
    )
  }
}

export default Result