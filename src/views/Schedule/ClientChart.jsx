import React,{useState} from 'react'
import forwardChat from './../../assets/img/forward-chat.svg'

const ClientChart = ({ item}) => {
    const [activeId, setActiveId] = useState(1);
    console.log(activeId)
    return (
        <ul>
            {item.map(items => (
                <li className={`client-chart ${activeId === items.id && "active"}`} onClick={()=>setActiveId(items.id)} active={activeId}>
                    <div className='chartIconHolder'>
                        <img src={items.image} alt={items.name} style={{width:"40px",paddingLeft:"5px"}}/>
                    </div>
                    <div className='clientNameHolder'>
                        <h6>{items.name}</h6>
                        <p>{items.content}</p>
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