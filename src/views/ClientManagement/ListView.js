import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Table from '../../components/Table';
import ontriv from '../../assets/img/ontriv.png';
import tag from '../../assets/img/Tag.svg';
import { connect } from 'react-redux';
import { setCurrentSection } from "../../redux/actions";



import { MdDelete } from 'react-icons/md';


const clients = [
    {
        id: 1,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 2,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 3,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 4,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 5,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 6,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 7,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 8,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 9,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 10,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 11,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 12,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 13,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
    {
        id: 14,
        name: 'Digital Seed',
        img: ontriv,
        email: 'Content Calendar',
        createDate: '12/04/21',
        projectTimeline: '6 Months',
        projectTag: 'Content Calendar',
    },
];


const ClientListView = ({ setCurrentSection }) => {
    const cols = React.useMemo(
        () => [
            {
                Header: 'Logo',
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
                Header: 'Name',
                accessor: 'name',
                cellClass: 'pt-4 list-client-item-bold ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Email Address',
                accessor: 'email',
                cellClass: 'pt-4 list-client-item ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Project Timeline',
                accessor: 'projectTimeline',
                cellClass: 'pt-4 list-client-item ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Date Created',
                accessor: 'createDate',
                cellClass: 'pt-4 list-client-item ',
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: 'Project Tag',
                accessor: 'projectTag',
                cellClass: 'pt-3  list-client-item',
                Cell: (props) => <div className='list-client-tag text-center'>
                    <img src={tag} alt='project-tag' className='mr-2' />
                    {props.value}
                </div >,
            },

            {
                Header: 'Action',
                accessor: 'id',
                cellClass: 'pt-4 list-client-delete list-client-item',
                Cell: (props) => <>
                    <MdDelete size='14px' className='pt-0' onClick={() => {

                        console.log(props.value)
                    }} />
                    <span className='pt-2 mb-0 text-underline'>Delete</span>

                </>,
            },
        ],
        []
    );
    return (
        <div className="mb-0 mt-2">
            <Table columns={cols} data={clients} divided defaultPageSize={6} pagePosition='center' />
        </div>
    );
};



export default connect(null, { setCurrentSection })(ClientListView);
