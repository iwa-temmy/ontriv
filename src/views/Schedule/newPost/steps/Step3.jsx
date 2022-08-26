import React from 'react'
import { compose, withState } from 'recompose';

let Step3 = () => {
  return (
    <div>Step3</div>
  )
}

Step3 = compose(
    withState('state', 'setState', {
      taken: false,
    }),
  )(Step3);

export default Step3