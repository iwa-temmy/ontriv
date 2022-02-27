import React from 'react';
import Table from '../../components/Table';
import boxIcon from '../../assets/img/box-icon-finance.svg';
import lightGreen from '../../assets/img/finance-light-green-circle.svg';
import { connect } from 'react-redux';
import { setCurrentSection } from "../../redux/actions";



import InvoiceDetails from "./InvoiceDetails";


const clients = [
    {
        id: 1,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 2,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 3,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 4,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 5,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 6,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 7,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '6 Months',
        projectTag: 'Paid',
    },
    {
        id: 8,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 9,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 10,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 11,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 12,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 13,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
      status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
    {
        id: 14,
        name: 'March Inoice',
        img: boxIcon,
        email: '03/24/2021',
        createDate: '10X SOCIALS',
        status: '$ 1000.00',
        projectTimeline: '#101',
        projectTag: 'Paid',
    },
];


const ClientListView = ({ setCurrentSection }) => {
    const cols = React.useMemo(
        () => [
            {
                Header: '',
                accessor: 'img',
                cellClass: '',
                Cell: (props) =>
                   <InvoiceDetails details={props} />
            },
            {
                Header: 'Invoice Name',
                accessor: 'name',
                cellClass: 'pt-4 list-client-item-finance ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Date',
                accessor: 'email',
                cellClass: 'pt-4 list-client-item-finance  ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Inv No',
                accessor: 'projectTimeline',
                cellClass: 'pt-4 list-client-item-finance  ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Cleint Name',
                accessor: 'createDate',
                cellClass: 'pt-4 list-client-item-finance  ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Amount',
                accessor: 'status',
                cellClass: 'pt-4 list-client-item-finance ',
                Cell: (props) => <>
                    <span className='pt-2 mb-0 text-underline'>{props.value}</span>
                </>,
            },
          {
            Header: 'Status',
            accessor: 'projectTag',
            cellClass: 'pt-3  list-client-item-finance ',
            Cell: (props) => <div className='list-client-tag-paid text-center'>
              <img src={lightGreen} alt='project-tag' className='mr-2' />
              {props.value}
            </div >,
          }
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



export default connect(null, { setCurrentSection })(ClientListView);
