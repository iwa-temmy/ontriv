import React, { useState } from 'react'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'
import Button from '../../../../components/Button'
import PostHeader from '../PostHeader'

const GenericChannel = ({ prev, next }) => {

  const [data, setData] = useState([])
  const [filteredItem, setFilteredItem] = useState()

  const deleteItem = (id) => {
    const filterData = data.filter(datas => datas.id !== id)
    setFilteredItem(filterData)
  }


  const onFileUpload = (e) => {

    const [file] = e.target.files;

    let img = URL.createObjectURL(file)

    setData([...data, { id: data.length + 1, file, img }])
    console.log(data)

  };
  return (
    <div className='genericChannel'>
      <PostHeader title="Define base caption for social accounts" />
      <div>
        <PostHeader title="Media" style={{ textAlign: "start", marginBottom: "10px", marginLeft: "8px" }} />
        <div style={{ margin: "25px 0px" }}>
          {
            data?.length > 0 ?
              filteredItem?.length > 0 ? filteredItem.map((item, index) => (
                <div className='uploadedImageHolder' key={index}>

                  <div className='imageSize'>
                    <div className='image'>
                      <img src={item?.img} key={index} alt="upload file" />
                    </div>
                    <div className='imgsize'>
                      <p>{item?.file?.name}</p>
                      <p>{`${item?.file?.size} Kb`}</p>
                    </div>
                  </div>

                  <div className='delete' onClick={() => deleteItem(item?.id)}>
                    <FaRegTrashAlt className='faDelete' />
                    <p>Delete</p>
                  </div>

                </div>
              )) : data.map((item, index) => (
                <div className='uploadedImageHolder' key={index}>

                  <div className='imageSize'>
                    <div className='image'>
                      <img src={item?.img} key={index} alt="upload file" />
                    </div>
                    <div className='imgsize'>
                      <p>{item?.file?.name}</p>
                      <p>{`${item?.file?.size} Kb`}</p>
                    </div>
                  </div>

                  <div className='delete' onClick={() => deleteItem(item?.id)}>
                    <FaRegTrashAlt className='faDelete' />
                    <p>Delete</p>
                  </div>

                </div>
              ))
              : ""
          }
        </div>

        <Row>
          <Col xs="6"
            md="4"
            sm="6">
            <div className='fileupload'>
              <input type="file" multiple class="form-control" accept="image/*" onChange={onFileUpload} />
              <label for="file-upload" class="custom-file-upload">
                <div>
                  <FaPlus />
                </div>
                <span> Add Photo</span>
              </label>
            </div>
          </Col>
          <Col xs="6"
            md="4"
            sm="6">
            <div className='fileupload'>
              <input type="file" multiple class="form-control" accept="video/mp4,video/x-m4v,video/*" onChange={onFileUpload} />
              <label for="file-upload" class="custom-file-upload">
                <div>
                  <FaPlus />
                </div>
                <span>Add Video</span>
              </label>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ margin: "auto", marginTop: "40px", width: "70%", }}>
        <Button text="Next" onButtonClick={next} />
      </div>
    </div>
  )
}

export default GenericChannel