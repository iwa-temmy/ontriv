import React from 'react';
import { Link } from "react-router-dom"
import Table from '../../components/Table';
import ontriv from '../../assets/img/ontriv.png';
import boxIcon from '../../assets/img/box-icon-finance.svg';
import lightGreen from '../../assets/img/finance-light-green-circle.svg';
import tag from '../../assets/img/Tag.svg';
import { connect } from 'react-redux';
import { setCurrentSection } from "../../redux/actions";



import { MdDelete } from 'react-icons/md';


const clients = [
    {
        id: 1,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 2,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 3,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 4,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 5,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 6,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 7,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '6 Months',
        projectTag: 'Paid',
    },
    {
        id: 8,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 9,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 10,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 11,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 12,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 13,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 14,
        name: 'March Inoice',
        img: boxIcon,
        email: 'General Expenses',
        createDate: '03/24/2021',
        status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
];


const ExpenseListView = ({ setCurrentSection }) => {
    const cols = React.useMemo(
        () => [
            {
                Header: '',
                accessor: 'img',
                cellClass: '',
                Cell: (props) =>
                    <Link to='/client-details'

                    >
                        <img src={props.value} alt='client-logo'
                            onClick={() => { setCurrentSection('Client Details') }}
                        />
                    </Link>
            },
            {
                Header: 'Vendor  Name',
                accessor: 'name',
                cellClass: 'pt-4 list-client-item-finance ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Catergory',
                accessor: 'email',
                cellClass: 'pt-4 list-client-item-finance  ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Amount',
                accessor: 'status',
                cellClass: 'pt-4 list-client-item-finance  ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Date',
                accessor: 'createDate',
                cellClass: 'pt-4 list-client-item-finance  ',
                Cell: (props) => <>{props.value}</>,
            },
          {
            Header: 'Action',
            accessor: 'id',
            cellClass: 'pt-4 list-client-item',
            Cell: (props) => <>
              <div className='d-flex'>
                <div className='list-client-delete-finance px-3 py-1'>
                  <MdDelete size='14px' className='pt-0' onClick={() => {
                    console.log(props.value)
                  }} />
                  <span className='pt-2 mb-0 text-underline'>Delete</span>
                </div>
              </div>

            </>,
          },
        ],
        // eslint-disable-next-line
        []
    );
    return (
        <div className="mb-0 mt-2 overflow-auto">
            <Table columns={cols} data={clients} divided defaultPageSize={6} pagePosition='center' />
        </div>
    );
};



export default connect(null, { setCurrentSection })(ExpenseListView);
