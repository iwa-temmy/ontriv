import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Button } from 'reactstrap'
import searchChat from './../../assets/img/search-chat.svg'
import forwardChat from './../../assets/img/forward-chat.svg'
import barChart from "../../assets/img/barchart.png"
import ClientChartDrawer from './ClientChartDrawer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListAllClientDrawer = ({businessOwner,businessLogo, setShowClient,getAllClientDetails,activeId,setActiveId,allClient, setAllClient}) => {

  const [searchValue, setSearchValue] = useState('')
  // const [allClient, setAllClient] = useState(getAllClientDetails)

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
}, [searchValue,getAllClientDetails,setAllClient]);

  return (
    <div className='clientlist-drawer'>
       <div className='cancel-drawer' onClick={()=>setShowClient(false)}>
       <FaTimes className='times'/>
       </div>
    <div className="drawer-scheduleInputWrapper">
      <input
        id="searchClient"
        name="client"
        placeholder="Find Client"
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
    
        <div className="drawer-client-owner">
          <div className='drawer-clientowner-IconHolder'>
            <img src={businessLogo || barChart} alt="barChart" />
          </div>
          <div className='drawer-clientowner-NameHolder'>
            <h6>{businessOwner}</h6>
            {/* <p>Content Calendar</p> */}
          </div>
          <div>
            <img src={forwardChat} className='ms-auto' alt="" />
          </div>
        </div>
    </div>
    <div>
      <div className='drawer-clientsHolder'>
        <h6 className='chat-titles mb-4'>
          Clients
        </h6>
        {getAllClientDetails.length > 0 ? (<ClientChartDrawer item={allClient} setShowClient={setShowClient} activeId={activeId} setActiveId={setActiveId} />) : (<div className='no-clients'>
          <p>You have no clients. Please invite one to get started  </p>
          <Link to='/client-management'>
            <Button type="button" color='' className='drawer-addclient'>
              <div className='drawer-plus'>
                <FaPlus />
              </div>
              <span> Add new Client</span>
            </Button>
            </Link>
        </div>)}
      </div>
    </div>
  </div>
  )
}

export default ListAllClientDrawer