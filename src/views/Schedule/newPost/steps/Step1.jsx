import React from 'react'
import { compose, withState } from 'recompose';

let Step1 = () => {
  return (
    <div>Step1ghj</div>
  )
}

Step1 = compose(withState('state', 'setState', {}))(Step1);
export default Step1