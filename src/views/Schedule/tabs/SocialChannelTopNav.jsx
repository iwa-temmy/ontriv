import React from 'react'
import { Col, Row } from 'reactstrap'
import mask from "../../../assets/img/Mask.png"
import smallcircle from "../../../assets/img/smallcircle.png"
import calendar from "../../../assets/img/calendaricon.png"
import search from "../../../assets/img/search.png"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range'
import format from 'date-fns/format'
import { useState, useEffect, useRef } from 'react'

const SocialChannelTopNav = ({ searchValue, onChange, selectedValue, OnSelectItem, range, setRange }) => {

  const [open, setOpen] = useState(false)

  const dateRange = `${format(range[0].startDate, "MMM dd, - yyyy")} - ${format(range[0].endDate, "MMM dd, - yyyy")}`



  const handleSelect = (item) => {
    setRange([item.selection])
  }

  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <div style={{position:'relative'}}>
      <Row className='justify-content-between '>
      <Col xs="12" md="8" sm="6">
        <Row className='justify-content-between'>
          <Col xs="12" md="5" sm="6" className='mb-3'>
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
              <img src={mask} alt="" srcset="" className='mask' />
            </div>
          </Col>
          <Col xs="12" md="7" sm="6">


            <div className='postime' onClick={() => setOpen(!open)}>
              <div className='smallcalendar'>
                <img src={calendar} alt="" />
              </div>

              <div className='timepost'>
                <h6>All Time: &nbsp;</h6>
                <h6>{dateRange}</h6>
              </div>
              <img src={mask} alt="" srcset="" className='calendar' />
            </div>

            <div ref={refOne} className='datepickerholder'>
              {open &&
                <DateRangePicker
                  onChange={handleSelect}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  // months={2}
                  direction="horizontal"
                  className="calendarElement"
                />
              }
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
    </div>
  )
}

export default SocialChannelTopNav