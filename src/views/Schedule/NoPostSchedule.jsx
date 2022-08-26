import React from 'react'
import { Link } from 'react-router-dom'
import noschedule from "../../assets/img/nopostschedule.png"

const NoPostSchedule = () => {
  return (
    <div className='noscheduleholder'>
        <div className='content'>
            <img src={noschedule} alt="" />
            <h4>Get started by scheduling a post</h4>
            <button>
                <Link to="/NewPost">
                Create Post
                </Link>
            </button>
        </div>
    </div>
  )
}

export default NoPostSchedule