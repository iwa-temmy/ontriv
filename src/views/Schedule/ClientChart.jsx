import React,{useState} from 'react'
import forwardChat from './../../assets/img/forward-chat.svg'
import digitalCreator from "../../assets/img/digitalCreator.png"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getOneClientPost } from '../../redux/actions'
import { truncateText } from '../../utils/helper'


const ClientChart = ({ item, activeId, setActiveId,id,setId}) => {

    // const [id, setId] = useState(item[0]?.client)
     console.log(item,'item,',id,'idd')

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getOneClientPost(id))
    },[id,dispatch])

    const getClientPost = (id,clientId) => {
        console.log({id,clientId})
        setActiveId(id)
        setId(clientId)
    }

    return (
        <ul>
            {item.map((items,index) => (
                <li className={`client-chart ${activeId === index && "active"}`} onClick={()=>getClientPost(index,items.client)} active={activeId}>
                    <div className='chartIconHolder'>
                        <img src={items.logo || digitalCreator} alt={items.fullname} style={{width:"40px",paddingLeft:"5px"}}/>
                    </div>
                    <div className='clientNameHolder'>
                        <h6>{ truncateText(items?.client_business_name)}</h6>
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

export default ClientChart