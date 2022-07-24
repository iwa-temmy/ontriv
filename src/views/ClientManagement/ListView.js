import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../../components/Table'
// import ontriv from '../../assets/img/ontriv.png';
import tag from '../../assets/img/Tag.svg'
import { connect } from 'react-redux'
import { setCurrentSection } from '../../redux/actions'
import { CenteredModal as Modal } from '../../components/Modal'
import { MdDelete } from 'react-icons/md'

// ;

const ClientListView = ({ setCurrentSection, clients, deleteClient }) => {
  const [showDelete, setShowDelete] = useState(false)
  const [clientId, setClientId] = useState('')
  const toggleShowDelete = () => {
    setShowDelete(!showDelete)
  }
  const handleDelete = id => {
    console.log(id)
    deleteClient(id)
  }
  const cols = React.useMemo(
    () => [
      {
        Header: 'Logo',
        accessor: 'profile_image',
        cellClass: '',
        Cell: props => (
          <Link to='/client-details'>
            <img
              src={props.value}
              alt='client'
              onClick={() => {
                setCurrentSection('Client Details')
              }}
            />
          </Link>
        )
      },
      {
        Header: 'Name',
        accessor: 'fullname',
        cellClass: 'pt-4 list-client-item-bold ',
        Cell: props => <>{props.value}</>
      },
      {
        Header: 'Email Address',
        accessor: 'email',
        cellClass: 'pt-4 list-client-item ',
        Cell: props => <>{props.value}</>
      },
      // {
      //   Header: 'Project Timeline',
      //   accessor: 'projectTimeline',
      //   cellClass: 'pt-4 list-client-item ',
      //   Cell: props => <>{props.value}</>
      // },
      {
        Header: 'Date Created',
        accessor: 'createDate',
        cellClass: 'pt-4 list-client-item ',
        Cell: props => <>{props.value}</>
      },
      {
        Header: 'Project Tag',
        accessor: 'projectTag',
        cellClass: 'pt-3  list-client-item',
        Cell: props => (
          <div className='list-client-tag text-center'>
            <img src={tag} alt='project-tag' className='mr-2' />
            {props.value}
          </div>
        )
      },

      {
        Header: 'Action',
        accessor: 'id',
        cellClass: 'pt-4 list-client-delete list-client-item cursor-pointer',
        Cell: props => (
          <>
            <MdDelete
              size='14px'
              className='pt-0'
              onClick={() => {
                setClientId(props.row.values.email)
                toggleShowDelete()
                // console.log(props.row.values.email)
              }}
            />
            <span className='pt-2 mb-0 text-underline'>Delete</span>
          </>
        )
      }
    ],
    // eslint-disable-next-line
    []
  )
  return (
    <div className='mb-0 mt-2 overflow-auto'>
      <Table
        columns={cols}
        data={clients}
        divided
        defaultPageSize={6}
        pagePosition='center'
      />
      <Modal modalState={showDelete} setModalState={toggleShowDelete}>
        <div className='add-client-wrapper text-center '>
          {/* <div className='text-center user-icon-container '>
            <HiUser className=' text-center' color='#49A8F8' size='45px' />
          </div> */}
          <div className='add-client-text text-center'>
            <h3 className='mt-2'>Are you sure?</h3>
            <p className='my-4'>
              You’ll be removing all information and access to their social
              accounts
            </p>
          </div>

          <div>
            <div className='pt-2 pb-2 '>
              <button
                className='w-100 btn-primary btn'
                onClick={toggleShowDelete}
              >
                No, I’ve changed my mind
              </button>
            </div>
            <div className=' pb-2'>
              <button
                className='w-100 text-danger bg-transparent fw-bold'
                onClick={() => {
                  handleDelete(clientId)
                }}
              >
                Yes, delete the client
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default connect(null, { setCurrentSection })(ClientListView)
