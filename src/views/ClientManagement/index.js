import { useState, useEffect } from 'react'
import { Card } from 'reactstrap'
import { BsFillGridFill, BsListUl } from 'react-icons/bs'
// import {AiOutlineUnordered}
import { MdOutlineFileDownload } from 'react-icons/md'
import { getTag, getClient } from '../../redux/actions'
import { HiPlus } from 'react-icons/hi'
import AddNewClient from './AddClient.js'
import GridView from './GridView.js'
import ListView from './ListView.js'
import { connect } from 'react-redux'
import createNotification from '../../utils/Notification'
import axios from '../../utils/Axios.js'
import notification from '../../utils/Notification.js'
import emptyStateImage from '../../assets/img/clientEmptyIcon.png'

const ClientManagement = ({
  getTag,
  tags,
  getTagError,
  clients,
  getClient
}) => {
  const [view, setView] = useState('list')
  const [addClient, setAddClient] = useState(false)
  const [tagOptions, setTagOptions] = useState([])

  // useEffect(() => {
  //   getTag()
  //   // eslint-disable-next-line
  // }, [])

  useEffect(() => {
    getClient()
    // eslint-disable-next-line
  }, [])

  const deleteClient = async clientEmail => {
    console.log(clientEmail)
    try {
      const response = await axios.delete(
        `/business/api/v1/business/remove/client/${clientEmail}`,
        {
          email: clientEmail
        }
      )
      notification('success', response.data.message)
      getClient()
    } catch (err) {
      console.log(err)
      console.log(err.response)
      notification('error', err.message)
    }
  }

  useEffect(() => {
    const options = tags?.map((x, i) => {
      return { label: x.name, value: x.id, key: i }
    })
    console.log(options)
    setTagOptions([
      ...options,
      {
        label: 'Create New Tag',
        value: 'Create New Tag'
      }
    ])
    // eslint-disable-next-line
  }, [tags])

  useEffect(() => {
    console.log(getTagError)
    if (getTagError?.length > 0) {
      createNotification('error', getTagError)
    }
    // if (message.length > 0) {
    //     createNotification('info', creatingTagError)
    // }
  }, [getTagError])

  return (
    <>
      <div>
        <div className='client-management'>
          <div className='d-flex justify-content-between align-items-center flex-wrap'>
            <Card className='py-3 client-analytics-card'>
              <div className='client-analytics d-flex justify-content-between align-items-center flex-wrap'>
                <h4 className='mb-0 client-analytics-text'>
                  <span className='first-text'>Number of </span>Clients
                </h4>
                <h4 className='mb-0 client-count'>{clients.length}</h4>
              </div>
            </Card>

            <div className='d-flex justify-content-between align-items-center client-management-control'>
              <div className='cursor-pointer'>
                {view === 'list' ? (
                  <Card className='client-icon-card list'>
                    <BsListUl
                      className='client-ctrl-icon'
                      color='#2062f4'
                      size='22px'
                      onClick={() => setView('grid')}
                    />
                  </Card>
                ) : (
                  <Card className='client-icon-card grid'>
                    <BsFillGridFill
                      className='client-ctrl-icon grid'
                      color='#2062f4'
                      size='18px'
                      onClick={() => setView('list')}
                    />
                  </Card>
                )}
              </div>
              <div className=' mx-auto'>
                <Card className='client-icon-card download'>
                  <MdOutlineFileDownload color='#2062f4' size='24px' />
                </Card>
              </div>
              <div
                className='btn-lg  create-button align-items-center '
                role='button'
                onClick={() => {
                  setAddClient(true)
                }}
              >
                <h6 className='mb-0'>
                  <HiPlus color='#2465ec' className='create-icon' />
                  ADD A NEW CLIENT
                </h6>
              </div>
            </div>
          </div>
          {clients.length > 0 && view === 'grid'  ? (
            <GridView clients={clients} deleteClient={deleteClient} />
          ) : clients.length > 0 && view === 'list' ? (
            <ListView clients={clients} deleteClient={deleteClient} />
          ) : (
            <div className='client-inactive-state text-center'>
              <Card className='client-inactive-state-card empty-state mx-auto'>
                <div>
                  <div>
                    <img src={emptyStateImage} alt='...' />
                  </div>
                  <div className='client-inactive-subhead-text-wrapper'>
                    <p className='client-inactive-subhead-text mx-auto mb-0'>
                      Welcome onboard,
                    </p>
                    <p className='client-inactive-subhead-text mx-auto mb-0'>
                      you can add a new client to get started
                    </p>
                  </div>
                  <div
                    className=' client-create-button '
                    role='button'
                    onClick={() => {
                      setAddClient(true)
                    }}
                  >
                    <h6 className='mb-0'>ADD A NEW CLIENT</h6>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {addClient && (
            <AddNewClient
              addState={addClient}
              setAddState={setAddClient}
              tags={tagOptions}
              setAddClient={setAddClient}
            />
          )}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ client }) => {
  const { tags, getTagError, clients } = client
  return { tags, getTagError, clients }
}
export default connect(mapStateToProps, { getTag, getClient })(ClientManagement)
