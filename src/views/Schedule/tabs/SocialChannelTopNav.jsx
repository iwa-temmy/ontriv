import React from 'react'
import { Col, Row, Input } from 'reactstrap'
import mask from "../../../assets/img/Mask.png"
import smallcircle from "../../../assets/img/smallcircle.png"
import calendar from "../../../assets/img/calendaricon.png"
import search from "../../../assets/img/search.png"

const SocialChannelTopNav = () => {
    return (
        <Row>
            <Col xs="12"
                md="8"
                sm="6">
                <div className='filterPost'>
                    <div className='poststatus'>
                        <div className='smallcircle'>
                            <img src={smallcircle} alt="" />
                        </div>
                        <div className='selectpost'>
                            <h6>Post Status: &nbsp;</h6>
                           <div className='selectholder'>
                           <select
                                id="exampleSelect"
                                // name="select"
                                // type="select"
                                className='selectpost'
                            >
                                <option>
                                    All
                                </option>
                                <option>
                                    2
                                </option>
                            </select>
                            <img src={mask} alt="" srcset="" className='mask'/>
                           </div>
                        </div>
                    </div>

                    <div className='postime'>
                        <div className='smallcalendar'>
                            <img src={calendar} alt="" />
                        </div>
                        
                        <div className='timepost'>
                        <h6>All Time: &nbsp;</h6>
                       
                       <div className='timeholder'>
                       <select
                            id="exampleSelect"
                        >
                            <option>
                                JAN 1, 2009 - APR 15, 2021
                            </option>
                            <option>
                                JAN 1, 2019 - APR 15, 2022
                            </option>
                        </select>
                        <img src={mask} alt="" srcset="" className='calendar' />
                       </div>
                     
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs="12"
                md="4"
                sm="6"
                >
                    <div className='inputholder'>
  <input
  className='input'
  />
  <img src={search} alt="search" />
</div>
                </Col>
        </Row>
    )
}

export default SocialChannelTopNav