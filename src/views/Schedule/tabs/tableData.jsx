import React from 'react'
import Table from '../../../components/Table'
 import { socialPost } from "../data"
import SocialChannelTopNav from "./SocialChannelTopNav"

const SocialTableData = () => {


    const cols1 = React.useMemo(
        () => [
            {
                Header: "Post",
                accessor: "postDetails",
                // cellClass: "pt-4 list-client-item-finance ",
                Cell: (props) => <>{props?.value?.name}</>
            },
            {
                Header: "PostType",
                accessor: "postType",
                // cellClass: "pt-4 list-client-item-finance  ",
                Cell: (props) => <>{props.value}</>,
            },
            {
                Header: "Date",
                accessor: "postDate",
                // cellClass: "pt-4 list-client-item-finance",
                Cell: (props) => <>{props?.value?.date}</>
            },
            {
                Header: "Post Status",
                accessor: "postStatus",
                // cellClass: "pt-4 list-client-item-finance  ",
                Cell: (props) => <>{props.value}</>,
            }

        ],
        // eslint-disable-next-line
        []
    );


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
                Cell: (props) => <h6 className='post-postType'>{props.value}</h6>,
            },
            {
                Header: "Date",
                accessor: "postDate",
                // cellClass: "pt-4 list-client-item-finance",
                Cell: (props) => <div className='post-date-time'>
                    <p>{props?.value?.date}</p>
                    <p>{props?.value?.time}</p>
                </div>,
            },
            {
                Header: "Post Status",
                accessor: "postStatus",
                // cellClass: "pt-4 list-client-item-finance  ",
                Cell: (props) => <div>
                    {props.value === "Pending" ? (<div className='post-status pending'>
                        <div></div>
                        <p>{props.value}</p>
                        </div>) : props.value === "Scheduled" ? (<div className='post-status scheduled'>
                        <div></div>
                        <p>{props.value}</p>
                        </div>) : props.value === "Published" ? (<div className='post-status published'>
                        <div></div>
                        <p>{props.value}</p>
                        </div>) : props.value === "Draft" ? (<div className='post-status draft'>
                        <div></div>
                        <p>{props.value}</p>
                        </div>) : null}
                </div>,
            }

        ],
        // eslint-disable-next-line
        []
    );
    return (
        <div>
            <SocialChannelTopNav/>
            {/* {socialPost?.length ? (
            <Table
                columns={cols}
                data={socialPost}
                divided
                defaultPageSize={4}
                pagePosition="left"
            />
        ) : null} */}
        </div>
    )
}

export default SocialTableData