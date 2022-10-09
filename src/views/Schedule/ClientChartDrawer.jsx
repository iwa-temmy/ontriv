import React from 'react'
import forwardChat from './../../assets/img/forward-chat.svg'
import digitalCreator from "../../assets/img/digitalCreator.png"
import { getOneClientPost } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { truncateText } from '../../utils/helper'


const ClientChartDrawer = ({ item, activeId, setActiveId, setShowClient}) => {

    const dispatch = useDispatch()

    const getClientPost = (selectedId,clientId) => {
        setActiveId(selectedId)
        dispatch(getOneClientPost(clientId))
        setShowClient(false)
    }

    return (
        <ul>
            {item.map((items,index) => (
                <li className={`drawer-client-chart ${activeId === index && "active"}`} onClick={()=>getClientPost(index,items?.client)} active={activeId}>
                    <div className='drawer-chartIconHolder'>
                        <img src={items?.logo || digitalCreator} alt={items?.fullname} style={{width:"40px",paddingLeft:"5px"}}/>
                    </div>
                    <div className='drawer-clientNameHolder'>
                        <h6>{truncateText(items?.client_business_name)}</h6>
                        <p>Content Calendar</p>
                    </div>
                    <div>
                        <img src={forwardChat} className='ms-auto' alt="" />
                        </div>
                </li>
            ))}
            
        </ul>
    )
}

export default ClientChartDrawer