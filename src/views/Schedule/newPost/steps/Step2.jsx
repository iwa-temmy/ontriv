import React from 'react'
import { compose, withState } from 'recompose';

let Step2 = () => {
  return (
    <div>Step2</div>
  )
}

Step2 = compose(withState('state', 'setState', {}))(Step2);
export default Step2