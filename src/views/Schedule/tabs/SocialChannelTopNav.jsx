import React from 'react'
import { Col, Row} from 'reactstrap'
import mask from "../../../assets/img/Mask.png"
import smallcircle from "../../../assets/img/smallcircle.png"
import calendar from "../../../assets/img/calendaricon.png"
import search from "../../../assets/img/search.png"

const SocialChannelTopNav = ({searchValue,onChange,selectedValue,OnSelectItem}) => {
    return (
        <Row className='justify-content-between'>
            <Col xs="12"md="8" sm="6">
                <Row className='justify-content-between'>
                    <Col xs="12"md="5" sm="6" className='mb-3'>
                    <div className='poststatus'>
                        <div className='smallcircle'>
                            <img src={smallcircle} alt="" />
                        </div>
                        <div className='selectpost'>
                            <h6>Post Status: &nbsp;</h6>
                           <div className='selectholder'>
                           <select
                                id="exampleSelect"
                                value={selectedValue}
                                onChange={OnSelectItem}
                                className='selectpost'
                            >
                                <option value="All">
                                    All
                                </option>
                                <option value="Scheduled">
                                 Scheduled
                                </option>
                                <option value="Published">
                                Published
                                </option>
                                <option value="Draft">
                                Draft
                                </option>
                                <option value="Pending">
                                Pending
                                </option>
                            </select>
                           </div>
                        </div>
                        <img src={mask} alt="" srcset="" className='mask'/>
                    </div>
                    </Col>
                    <Col xs="12"md="7" sm="6">
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
                       </div>
                     
                        </div>
                        <img src={mask} alt="" srcset="" className='calendar' /> 
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col xs="12"
                md="3"
                sm="6"
                >
 <div className='inputholder'>
  <input
  className='input'
  value={searchValue}
  onChange={onChange}
  />
  <img src={search} alt="search" />
</div>
                </Col>
        </Row>
    )
}

export default SocialChannelTopNav