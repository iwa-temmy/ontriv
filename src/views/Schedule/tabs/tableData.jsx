import React from 'react'
import Table from '../../../components/Table'
import { socialPost } from "../data"

const SocialTableData = () => {
    const cols = React.useMemo(
        () => [
            {
                Header: "Post",
                accessor: "postDetails",
                // cellClass: "pt-4 list-client-item-finance ",
                Cell: (props) => <div className='row-post'>
                    <div className='post-image'>
                        <img src={props?.value?.image} alt="" />
                    </div>
                    <div className='post-title-name'>
                        <h2>{props?.value?.title}</h2>
                        <div className='post-user'>
                            <div> <img src={props?.value?.user} alt="" /></div>
                            <h2>{props?.value?.name}</h2>
                        </div>
                    </div>
                </div>,
            },
            {
                Header: "PostType",
                accessor: "postType",
                // cellClass: "pt-4 list-client-item-finance  ",
                Cell: (props) => <h6>{props.value}</h6>,
            },
            {
                Header: "Date",
                accessor: "date",
                // cellClass: "pt-4 list-client-item-finance",
                Cell: (props) => <p>{props.value}</p>,
            },
            {
                Header: "Post Status",
                accessor: "postStatus",
                // cellClass: "pt-4 list-client-item-finance  ",
                Cell: (props) => <p>{props.value}</p>,
            }

        ],
        // eslint-disable-next-line
        []
    );
    return (
        <div>{socialPost?.length ? (
            <Table
                columns={cols}
                data={socialPost}
                divided
                defaultPageSize={4}
                pagePosition="left"
            />
        ) : null}</div>
    )
}

export default SocialTableData