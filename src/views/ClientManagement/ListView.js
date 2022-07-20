import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../../components/Table'
// import ontriv from '../../assets/img/ontriv.png';
import tag from '../../assets/img/Tag.svg'
import { connect } from 'react-redux'
import { setCurrentSection } from '../../redux/actions'

import { MdDelete } from 'react-icons/md'

// ;

const ClientListView = ({ setCurrentSection, clients, deleteClient }) => {
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
      {
        Header: 'Project Timeline',
        accessor: 'projectTimeline',
        cellClass: 'pt-4 list-client-item ',
        Cell: props => <>{props.value}</>
      },
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
                deleteClient(props.row.values.email)
                console.log(props.row.values.email)
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
    </div>
  )
}

export default connect(null, { setCurrentSection })(ClientListView)
