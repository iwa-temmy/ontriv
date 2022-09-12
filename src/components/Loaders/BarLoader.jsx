import React from 'react'
import { Bars } from 'react-loader-spinner'

const BarLoader = ({height,width}) => {
  return (
    <div
    className="d-flex justify-content-center align-items-center"
    style={{ marginTop: "6rem" }}
  >
    <Bars height={height || "100"} width={width || "100"} color="#2062F4" />
  </div>
  )
}

export default BarLoader