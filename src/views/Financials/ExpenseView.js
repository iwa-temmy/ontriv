import React, {useEffect} from 'react';
import { Link } from "react-router-dom"
import Table from '../../components/Table';
import boxIcon from '../../assets/img/box-icon-finance.svg';

//redux
import { connect } from 'react-redux';
import { setCurrentSection, getAllExpenses } from "../../redux/actions";




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
const ExpenseListView = ({ setCurrentSection, getAllExpenses, expenses }) => {
    const cols = React.useMemo(
        () => [
            {
                Header: '',
                accessor: 'img',
                cellClass: '',
                Cell: (props) =>
                    <Link to='/invoices-&-financials/details'

                    >
                        <img src={props.value || boxIcon} alt='client-logo'
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

    useEffect(() => {
      getAllExpenses()
    }, [getAllExpenses])
    return (
        <div className="mb-0 mt-2 overflow-auto">
            <Table columns={cols} data={[]} divided defaultPageSize={6} pagePosition='center' />
        </div>
    );
};


const mapStateToProps = state => {
  return {
    expenses: state?.expense?.expenses,
  }
}

export default connect(mapStateToProps, { setCurrentSection, getAllExpenses })(ExpenseListView);