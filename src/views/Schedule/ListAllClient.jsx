import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Button } from 'reactstrap'
import searchChat from './../../assets/img/search-chat.svg'
import forwardChat from './../../assets/img/forward-chat.svg'
import barChart from "../../assets/img/barchart.png"
import ClientChart from './ClientChart'
import { useEffect } from 'react'

const ListAllClient = ({businessOwner,businessLogo,getAllClientDetails,activeId,setActiveId,getScheduledpost}) => {

  const [searchValue, setSearchValue] = useState('')
  const [allClient, setAllClient] = useState(getAllClientDetails)

  const onChangeSearchValue = (e) => {
    let value = e.target.value
   setSearchValue(value)
}

useEffect(() => {
  if(searchValue.length <= 0){
      setAllClient(getAllClientDetails)
  } else if(searchValue.length >= 4){
      const results = getAllClientDetails.filter(o => o?.fullname.toLowerCase().includes(searchValue.toLowerCase()));
      if(results.length > 0){
      setAllClient(results)
      } else {
          setAllClient(getAllClientDetails)
       }
   } 
}, [searchValue,getAllClientDetails]);

  return (
    <div className='clientWrapper'>
    <div className="scheduleInputWrapper">
      <input
        id="searchClient"
        name="client"
        placeholder="Find View"
        type="text"
        value={searchValue}
        onChange={onChangeSearchValue}
        className='' />
      <img src={searchChat} className='ms-5' alt="" />
    </div>
    <div className='my-4'>
      <h6 className='chat-titles mb-4'>
        Your Accounts
      </h6>
      <div>
        <div className="client-owner">
          <div className='clientowner-IconHolder'>
            <img src={businessLogo || barChart} alt="barChart" />
          </div>
          <div className='clientowner-NameHolder'>
            <h6>{businessOwner}</h6>
            <p>Content Calendar</p>
          </div>
          <div>
            <img src={forwardChat} className='ms-auto' alt="" /></div>
        </div>
      </div>
    </div>
    <div>
      <div className='clientsHolder'>
        <h6 className='chat-titles mb-4'>
          Clients
        </h6>
        {getAllClientDetails.length > 0 ? (<ClientChart item={allClient} activeId={activeId} setActiveId={setActiveId} />) : (<div className='no-clients'>
          <p>You have no clients. Please invite one to get started  </p>
          <div>
            <Button type="button" color='' className='addclient'>
              <div className='plus'>
                <FaPlus />
              </div>
              <span> Add new Client</span>
            </Button>
          </div>
        </div>)}
      </div>
    </div>
  </div>
  )
}

export default ListAllClient