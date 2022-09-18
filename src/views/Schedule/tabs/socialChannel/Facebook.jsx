import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import BarLoader from '../../../../components/Loaders/BarLoader';
import Table from '../../../../components/Table';
import { getDate, getTime } from '../../../../utils/func';
import NoPostSchedule from '../../NoPostSchedule';
import SocialChannelTopNav from '../SocialChannelTopNav'
import { addDays } from 'date-fns'
import format from 'date-fns/format'

const FacebookPost = () => {

    const clientPost = useSelector((state) => state?.getClientPost);

    const [searchValue, setSearchValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("All")
    const [FacebookData, setFacebookData] = useState(clientPost?.getOneClientPost?.user_facebook_post)
    const [range, setRange] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ])


    const onChangeSearchValue = (e) => {
        let value = e.target.value
       setSearchValue(value)
    }
    
    const onSelectItem = (e) => {
     setSelectedValue(e.target.value)
    }

    useEffect(()=>{
        const handleFilter = clientPost?.getOneClientPost?.user_facebook_post.filter(
            user => format(new Date(user.created_at),"dd/MM/yyyy") >= format(range[0].startDate, "dd/MM/yyyy")  && format(new Date(user.created_at),"dd/MM/yyyy") <= format(range[0].endDate, "dd/MM/yyyy")
          )

          if(handleFilter.length <=0){
            setFacebookData(clientPost?.getOneClientPost?.user_facebook_post)
          } else{
            setFacebookData(handleFilter)
          }

    },[clientPost?.getOneClientPost?.user_facebook_post, range])

    useEffect(()=>{
        if(selectedValue === "All"){
           setFacebookData(clientPost?.getOneClientPost?.user_facebook_post)
         } else if(selectedValue === "Scheduled"){
            const scheduledPost = clientPost?.getOneClientPost?.user_facebook_post.filter(o => o?.post_status === "Scheduled");
            setFacebookData(scheduledPost)
         } else if(selectedValue === "Published"){
            const publishedPost = clientPost?.getOneClientPost?.user_facebook_post.filter(o => o?.post_status === "Published");
            setFacebookData(publishedPost)
         } else if(selectedValue === "Pending"){
            const pendingPost = clientPost?.getOneClientPost?.user_facebook_post.filter(o => o?.post_status === "Pending");
            if (pendingPost.length > 0) {
                setFacebookData(pendingPost)
            }
         } else if(selectedValue === "Draft"){
            const draftPost = clientPost?.getOneClientPost?.user_facebook_post.filter(o => o?.post_status === "Draft");
            setFacebookData(draftPost)
        
         } else {
            setFacebookData(clientPost?.getOneClientPost?.user_facebook_post)
         }
    },[clientPost?.getOneClientPost?.user_facebook_post, selectedValue])

    useEffect(() => {
        if(searchValue.length <= 0){
            setFacebookData(clientPost?.getOneClientPost?.user_facebook_post)
        } else if(searchValue.length >= 4){
            const results = clientPost?.getOneClientPost?.user_facebook_post.filter(o => o?.post_details?.caption.toLowerCase().includes(searchValue.toLowerCase()));
            if(results.length > 0){
            setFacebookData(results)
            } else {
                setFacebookData(clientPost?.getOneClientPost?.user_facebook_post)
             }
         } 
      }, [searchValue,clientPost?.getOneClientPost?.user_facebook_post]);

  const cols = React.useMemo(
    () => [
        {
            Header: "Post",
            accessor: "post_details",
            Cell: (props) => <div className='row-post'>
                <div className='post-image'>
                    <img src={props?.value?.media} alt="" />
                </div>
                <div className='post-title-name'>
                    <h2>{props?.value?.caption}</h2>
                    {/* <div className='post-user'>
                        <div className="post-user-img"> <img src={props?.value?.media} alt="" /></div>
                        <h2>{props?.value?.user}</h2>
                    </div> */}
                </div>
            </div>,
        },
        {
            Header: "PostType",
            accessor: "media_type",
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
            <SocialChannelTopNav searchValue={searchValue} onChange={onChangeSearchValue} selectedValue={selectedValue} OnSelectItem={onSelectItem} range={range} setRange={setRange}/><br/>
      {clientPost?.getOneClientPost?.user_facebook_post?.length > 0 ? (
            <Table
                columns={cols}
                data={FacebookData}
                divided
                defaultPageSize={4}
                pagePosition="left"
            />
        ) : <NoPostSchedule text={'There are no scheduled Facebook posts '}/>}
        </>
        )}
    
    </div>
  )
}

export default FacebookPost