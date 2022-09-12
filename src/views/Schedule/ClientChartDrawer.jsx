import React from 'react'
import forwardChat from './../../assets/img/forward-chat.svg'
import digitalCreator from "../../assets/img/digitalCreator.png"
import { getOneClientPost } from '../../redux/actions'
import { useDispatch } from 'react-redux'


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
                <li className={`drawer-client-chart ${activeId === index && "active"}`} onClick={()=>getClientPost(index,items?.id)} active={activeId}>
                    <div className='drawer-chartIconHolder'>
                        <img src={items?.profile_image || digitalCreator} alt={items?.fullname} style={{width:"40px",paddingLeft:"5px"}}/>
                    </div>
                    <div className='drawer-clientNameHolder'>
                        <h6>{items?.fullname}</h6>
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