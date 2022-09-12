import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BarLoader from '../../../../components/Loaders/BarLoader';
import Table from '../../../../components/Table';
import { getDate, getTime } from '../../../../utils/func';
import SocialChannelTopNav from '../SocialChannelTopNav'

const LinkedinPost = () => {

    const clientPost = useSelector((state) => state?.getClientPost);

    const [searchValue, setSearchValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("All")
    const [linkedinData, setLinkedinData] = useState(clientPost?.getOneClientPost?.user_linkedin_post)

    const onChangeSearchValue = (e) => {
        let value = e.target.value
        console.log(value,"vall")
       setSearchValue(value)
       console.log(searchValue)
    }
    
    const onSelectItem = (e) => {
     setSelectedValue(e.target.value)
    }

    useEffect(()=>{
        if(selectedValue === "All"){
           setLinkedinData(clientPost?.getOneClientPost?.user_linkedin_post)
         } else if(selectedValue === "Scheduled"){
            const scheduledPost = clientPost?.getOneClientPost?.user_linkedin_post.filter(o => o?.post_status === "Scheduled");
            setLinkedinData(scheduledPost)
         } else if(selectedValue === "Published"){
            const publishedPost = clientPost?.getOneClientPost?.user_linkedin_post.filter(o => o?.post_status === "Published");
            setLinkedinData(publishedPost)
         } else if(selectedValue === "Pending"){
            const pendingPost = clientPost?.getOneClientPost?.user_linkedin_post.filter(o => o?.post_status === "Pending");
            if (pendingPost.length > 0) {
                setLinkedinData(pendingPost)
            }
         } else if(selectedValue === "Draft"){
            const draftPost = clientPost?.getOneClientPost?.user_linkedin_post.filter(o => o?.post_status === "Draft");
            setLinkedinData(draftPost)
        
         } else {
            setLinkedinData(clientPost?.getOneClientPost?.user_linkedin_post)
         }
    },[clientPost?.getOneClientPost?.user_linkedin_post, selectedValue])

    useEffect(() => {
        if(searchValue.length <= 0){
            setLinkedinData(clientPost?.getOneClientPost?.user_linkedin_post)
        } else if(searchValue.length >= 4){
            const results = clientPost?.getOneClientPost?.user_linkedin_post.filter(o => o?.post_details?.caption.toLowerCase().includes(searchValue.toLowerCase()));
            if(results.length > 0){
            setLinkedinData(results)
            } else {
                setLinkedinData(clientPost?.getOneClientPost?.user_linkedin_post)
             }
         } 
      }, [searchValue,clientPost?.getOneClientPost?.user_linkedin_post]);

  const cols = React.useMemo(
    () => [
        {
            Header: "Post",
            accessor: "post_details",
            Cell: (props) => <div className='row-post'>
                <div className='post-image'>
                    <img src={props?.value?.file} alt="" />
                </div>
                <div className='post-title-name'>
                <h2>{props?.value?.text}</h2>
                    {/* <div className='post-user'>
                        <div className="post-user-img"> <img src={props?.value?.file} alt="" /></div>
                        <h2>{props?.value?.business}</h2>
                    </div> */}
                </div>
            </div>,
        },
        {
            Header: "PostType",
            accessor: "file_type",
            Cell: (props) => <h6 className='post-postType'>{props.value}</h6>,
        },
        {
            Header: "Date",
            accessor: "created_at",
            Cell: (props) => <div className='post-date-time'>
                <p>{getDate(props?.value)}</p>
                <p>{getTime(props?.value)}</p>
            </div>,
        },
        {
            Header: "Post Status",
            accessor: "post_status",
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
    <div className='overflow-auto'>
        {clientPost?.getOneClientPostLoading ? <BarLoader/> : (
        <>
            <SocialChannelTopNav searchValue={searchValue} onChange={onChangeSearchValue} selectedValue={selectedValue} OnSelectItem={onSelectItem}/><br/>
      {clientPost?.getOneClientPost?.user_linkedin_post?.length ? (
            <Table
                columns={cols}
                data={linkedinData}
                divided
                defaultPageSize={4}
                pagePosition="left"
            />
        ) : null}
        </>
        )}
    
    </div>
  )
}

export default LinkedinPost