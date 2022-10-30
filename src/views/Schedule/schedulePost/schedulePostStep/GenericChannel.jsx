import React, { useState, useRef } from 'react'
import { FaPlus, FaRegSmile, FaRegTrashAlt } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'
import Button from '../../../../components/Button'
import PostHeader from '../PostHeader'
import Picker from 'emoji-picker-react';
import fireBaseStorage from '../../../../lib/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { v4 } from "uuid"
import createNotification from '../../../../utils/Notification'

const GenericChannel = ({ prev, next }) => {

  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [postType, setPostType] = useState("")

  const [baseCaption, setBaseCaption] = useState('')
  const [ShowEmoji, setShowEmoji] = useState(false)
  const [addHashTag, setAddHashTag] = useState("")

  const inputRef = useRef(null)

  const onSelectItem = (e) => {
    setPostType(e.target.value)
   }

  const deleteItem = (id) => {
    const filterData = images.filter((_, index) => index !== id)
    setImages(filterData)
  }

  const onEmojiClick = (e, emojiObject) => {
    const cursorStart = inputRef.current.selectionStart;
    const text = baseCaption.slice(0, cursorStart) + emojiObject.emoji + baseCaption.slice(cursorStart);
    setBaseCaption(text);

  }

  const OnSHow = () => {
    const cursorStart = inputRef.current.selectionStart;
    const cursorEnd = inputRef.current.selectionEnd;

    let selectedText = baseCaption.substring(cursorStart, cursorEnd)
    setAddHashTag(selectedText)
  }


  const onFileUpload = (e) => {
    e.preventDefault();

    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }

  }

  const uploadImages = (file) => {
    if (!file) return;

    const promises = []

    file.map((files) => {

      const storageRef = ref(fireBaseStorage, `images/${files.name + v4()}`)

      const uploadTask = uploadBytesResumable(storageRef, files)
      promises.push(uploadTask)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setLoading(true)
          setProgress(prog)
        },
        (err) => console.log(err),
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref)
            .then(downLoadUrl => {
              setUrls(prevState => [...prevState, downLoadUrl])
            })
        }
      )
    })

    Promise.all(promises)
      .then((res) => {
        setLoading(false)
          createNotification("success", 'Images uploaded successfully')
      })
      .catch(err => {
        createNotification("error", 'Image Upload Failed');
      }
        )
  }


  const uploadFile = () => {
    uploadImages(images)
  }

  return (
    <div className='genericChannel'>
      <PostHeader title="Define base caption for social accounts" />

      <div className='defineCaptionWrapper'>
        <textarea type="text" className='baseCaption' value={baseCaption} ref={inputRef} onChange={(e) => setBaseCaption(e.target.value)} />
        <div className='baseCaptionSocialIcon'>
          <FaRegSmile onClick={() => setShowEmoji(!ShowEmoji)} style={{ cursor: 'pointer' }} />
        </div>
        {ShowEmoji && <div className='pickeremoji'><Picker onEmojiClick={onEmojiClick} /></div>}
      </div>

      <div>
        <PostHeader title="Media" style={{ textAlign: "start", marginBottom: "10px", marginLeft: "8px" }} />

        <div className='postType'>
                 <label htmlFor="">Select Media Type</label><br/>

                 <select
                    id="postTypeSelect"
                    value={postType}
                    onChange={onSelectItem}
                    className='postTypeSelect'
                  >
                     <option value="" disabled defaultValue hidden>Select post type</option>
                    <option value="image">
                      Image
                    </option>
                    <option value="video">
                      Video
                    </option>
                    <option value="reel">
                      Reel
                    </option>
                  </select>
                </div>





        <div style={{ margin: "25px 0px" }}>
          {
            images?.length > 0 ? images.map((item, index) => (
              <div className='uploadedImageHolder' key={index}>
                <div className='imageSize'>
                  {item?.type.slice(0, 5) === "video" ? <p>Video File</p> : <div className='image'>
                    <img src={URL.createObjectURL(item)} key={index} alt="upload file" />
                  </div>}

                  <div className='imgsize'>
                    <p>{item?.name}</p>
                    <p>{`${item?.size} Kb`}</p>
                  </div>
                </div>

                <div className='delete' onClick={() => deleteItem(index)}>
                  <FaRegTrashAlt className='faDelete' />
                  <p>Delete</p>
                </div>

              </div>
            ))
              : ""
          }
        </div>

{postType === '' ? null : 
  <>
  {postType === 'video' || postType === 'reel' ? <Row>
  <Col xs="6"
            md="4"
            sm="6">
            <div className='fileupload'>
              <input type="file" multiple className="form-control" accept="video/mp4,video/x-m4v,video/*" onChange={onFileUpload} />
              <label htmlFor="file-upload" className="custom-file-upload">
                <div>
                  <FaPlus />
                </div>
                <span>Add Video</span>
              </label>
            </div>
          </Col>

          <Col xs="6"
            md="4"
            sm="6">
            <Button text={loading ? `Uploaded ${progress} %` : "Upload"} btnstyle={{ height: '30px', borderRadius: '10px', background: '#EFF2F7', color: 'rgba(3, 32, 65, 0.8)', fontSize: '14px' }} onButtonClick={uploadFile} />
          </Col>
  </Row> : postType === 'image' ? <Row><Col xs="6"
            md="4"
            sm="6">
            <div className='fileupload'>
              <input type="file" multiple className="form-control" accept="image/*" onChange={onFileUpload} />
              <label htmlFor="file-upload" className="custom-file-upload">
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
            <Button text={loading ? `Uploaded ${progress} %` : "Upload"} btnstyle={{ height: '30px', borderRadius: '10px', background: '#EFF2F7', color: 'rgba(3, 32, 65, 0.8)', fontSize: '14px' }} onButtonClick={uploadFile} />
          </Col>
          </Row> : null
          }
  </>
}
      </div>

      <div style={{ margin: "auto", marginTop: "40px", width: "70%", }}>
        <Button text="Next" onButtonClick={() => next(baseCaption,urls,postType)} disabled={!(baseCaption && postType && urls.length)}/>
      </div>
    </div>
  )
}

export default GenericChannel