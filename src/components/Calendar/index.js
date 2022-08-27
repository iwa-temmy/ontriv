import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import { CenteredModal as Modal } from '../Modal'
import { HiPlus } from 'react-icons/hi'
import postEmptyIcon from '../../assets/img/postEmptyIcon.png'
const { datesGenerator } = require('dates-generator')

const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Container = styled.div`
  width: 100%;
  //   border: 1px solid black;
  margin: 0 auto;
`

const MonthText = styled.div`
  font-size: 20px;
  font-weight: 600;
  //   text-align: center;
  padding-left: 7px;
`

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [dates, setDates] = useState([])
  const [showPost, setShowPost] = useState(false)
  const togglePost = () => {
    setShowPost(!showPost)
  }

  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear()
  })

  const [currentMonth, setCurrentMonth] = useState(calendar.month)

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year
    }
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    } = datesGenerator(body)

    setDates([...dates])
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log(calendar.month)
    setCurrentMonth(calendar.month)
  }, [calendar])

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear }
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    } = datesGenerator(body)

    setDates([...dates])
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    })
  }

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear }
    const {
      dates,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    } = datesGenerator(body)

    setDates([...dates])
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    })
  }

  const onSelectDate = date => {
    setSelectedDate(new Date(date.year, date.month, date.date))
  }

  return (
    <div style={{ width: '100%' }}>
      <Container>
        <div
          className='d-flex justify-content-between align-items-center'
          style={{ padding: 10 }}
        >
          <MonthText>
            {months[calendar.month]} {calendar.year}{' '}
            <HiChevronRight
              onClick={onClickNext}
              className='mb-1 cursor-pointer'
              fontSize={'20px'}
            />
          </MonthText>
          <div>
            <div
              onClick={onClickPrevious}
              className='mr-3 '
              style={{ float: 'left', width: '50%' }}
            >
              <HiChevronLeft
                fontSize={'30px'}
                style={{
                  cursor: 'pointer',
                  color: '#7337FD'
                }}
              />
            </div>
            <div
              onClick={onClickNext}
              style={{ float: 'left', width: '50%', textAlign: 'right' }}
            >
              <HiChevronRight
                fontSize={'30px'}
                style={{
                  cursor: 'pointer',
                  color: '#7337FD'
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  {days.map(day => (
                    <td key={day} style={{ padding: '5px 0' }}>
                      <div
                        style={{
                          textAlign: 'center',
                          padding: '5px 0',
                          color: 'rgba(60, 60, 67, 0.3)',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}
                        className='text-uppercase'
                      >
                        {day}
                      </div>
                    </td>
                  ))}
                </tr>
                {console.log('---------------->>>>>', currentMonth, dates)}
                {dates.length > 0 &&
                  dates
                    // .map(el =>
                    //   el.month === currentMonth ? el : { ...el, date: '-' }
                    // )
                    .map(week => (
                      <tr key={JSON.stringify(week[0])}>
                        {console.log(week)}
                        {week
                          .map(el =>
                            el.month === currentMonth ? el : { ...el, date: '' }
                          )
                          .map(each => (
                            <td
                              key={JSON.stringify(each)}
                              style={{ padding: '5px 0' }}
                            >
                              <div
                                role='button'
                                onClick={() => {
                                  onSelectDate(each)
                                  togglePost()
                                  console.log(each)
                                }}
                                style={{
                                  textAlign: 'center',
                                  padding: '5px 0'
                                }}
                              >
                                {each.date === selectedDate.getDate() ? (
                                  <div
                                    className='text-white d-flex align-items-center justify-content-center rounded-circle m-auto'
                                    style={{
                                      background:
                                        'linear-gradient(93.88deg, #49A8F8 6.88%, #0053F4 74.45%)',
                                      height: '35px',
                                      width: '35px'
                                    }}
                                  >
                                    {selectedDate.getDate()}
                                  </div>
                                ) : (
                                  each.date
                                )}

                                {console.log(each.date.month)}
                              </div>
                            </td>
                          ))}
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      <Modal modalState={showPost} setModalState={togglePost}>
        <div className='add-client-wrapper text-center '>
          <div className='mt-5'>
            <img src={postEmptyIcon} alt='icon' />
          </div>
          <div className=' text-center mt-3 mb-4'>
            <h5
              style={{
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: ' 28px',
                letterSpacing: '0.35px',
                color: '#111317'
              }}
            >
              No scheduled posts for this date
            </h5>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </div>

          <div
            className=' text-white  create-button align-items-center mb-3'
            role='button'
            onClick={togglePost}
            style={{
              width: '225px',
              borderRadius: '10px',
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '1.25px',
              color: ' #F7F7FC'
            }}
          >
            <h5 className='mb-0'>
              <HiPlus color='#2465ec' className='create-icon' />
              Schedule now
            </h5>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Calendar
