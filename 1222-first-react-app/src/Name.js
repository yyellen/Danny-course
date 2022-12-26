// eslint-disable-next-line
import React, { Component }  from 'react';

const Name = (props) => {
  // const text = props.text
  const { text } = props // 解構賦值 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // console.log(text)

  return (
    <div className="name-component">{ text }</div>
  )
}

export default Name;