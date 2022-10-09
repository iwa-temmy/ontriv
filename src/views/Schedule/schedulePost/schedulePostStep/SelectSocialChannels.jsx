import React, { useState } from 'react'
import InputField from '../../../../components/Input'
import PostHeader from '../PostHeader'
import facebook from "../../../../assets/img/facebook.png"
import instagram from "../../../../assets/img/instagram.png"
import twitter from "../../../../assets/img/twitter.png"
import linkedin from "../../../../assets/img/linkedin.png"
import { Col, Row } from 'reactstrap'
import Button from '../../../../components/Button'

const SelectSocialChannels = ({ next }) => {
  const [checkedValue, setCheckedValue] = useState([])
  const [checked, setChecked] = useState(false)

  const onCheckItem = (e) => {
    if (e.target.checked && !checkedValue.includes(e.target.value)) {
      setChecked(true)
      let values = e.currentTarget.value
      let items = [...checkedValue, values]
      let uniqueItems = [...new Set(items)];
      setCheckedValue(uniqueItems)
    } else if (!e.target.checked) {
      setChecked(false)
      let targetItem = checkedValue.indexOf(e.target.value)
      checkedValue.splice(targetItem, 1)
    }
  }

  return (
    <>

      <div className='socialChannels'>
        <PostHeader title="Social channels" />
        <Row>
          <Col xs="6"
            md="6"
            sm="6">
            <div className='instagramCheckbox'>
              <img src={instagram} alt="" />
              <input type="checkbox" id="instagram" className="checkbox" value="instagram" onChange={onCheckItem} />
              <label htmlFor='instagram'>Instagram</label>
            </div>
          </Col>
          <Col xs="6"
            md="6"
            sm="6">
            <div className='facebookCheckbox'>
              <img src={facebook} alt="" />
              <input type="checkbox" id="facebook" className="checkbox" value="facebook" onChange={onCheckItem} />
              <label htmlFor='facebook'>Facebook</label>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="6"
            md="6"
            sm="6">
            <div className='twitterCheckbox'>
              <img src={twitter} alt="" />
              <input type="checkbox" id="twitter" className="checkbox" value="twitter" onChange={onCheckItem} />
              <label htmlFor='twitter'>Twitter</label>
            </div>
          </Col>
          <Col xs="6"
            md="6"
            sm="6">
            <div className='linkedinCheckbox'>
              <img src={linkedin} alt="" />
              <input type="checkbox" id="linkedin" className="checkbox" value="linkedin" onChange={onCheckItem} />
              <label htmlFor='linkedin'>Linkedin</label>
            </div>
          </Col>
        </Row>
        <Button text="Next" onButtonClick={() => next(checkedValue)} btnstyle={{ width: "90%", margin: "auto", marginTop: "20px" }} disabled={!checked} />
      </div>
    </>
  )
}

export default SelectSocialChannels