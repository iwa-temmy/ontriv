import React from "react"
import {BsFillGridFill,BsCalendar2MinusFill} from "react-icons/bs"
import { IoSettingsSharp } from "react-icons/io5"
import {  FaAward,FaUserFriends } from "react-icons/fa"
import {AiFillFileText} from "react-icons/ai"
import {RiPieChartFill,RiBookFill} from 'react-icons/ri'

const sideBarMenu = [
  {
    id: "Overview",
    title: "Overview",
    type: "item",
    icon: <BsFillGridFill size={20} />,
    navLink: "/overview"
  },

  {
    id: "Client Management",
    title: "Client Management",
    type: "item",
    icon: <FaUserFriends size={20} />,
    navLink: "/client-management"

  },

  {
    id: "Content Calendar",
    title: "Content Calendar",
    type: "item",
    icon: <BsCalendar2MinusFill size={20} />,
    navLink:"/Content-Calendar"
  },

  {
    id: "Invoices & Financials",
    title: "Invoices & Financials",
    icon: <RiPieChartFill size={20} />,
    type: "item",
    navLink: "/invoices-&-financials",
  },

  {
    id: "Reports",
    title: "Reports",
    type: "item",
    icon: <AiFillFileText size={20} />,
    navLink:'/report'
  },

  {
    id: "Templates",
    title: "Templates",
    type: "item",
    icon: <RiBookFill size={20} />,
    navLink:'/Templates'

  },

  {
    id: "Schedule Post",
    title: "Schedule Post",
    type: "item",
    navLink:'/Schedule',
    icon: <IoSettingsSharp size={20} />,
  },
  {
    id: "Settings",
    title: "Settings",
    type: "item",
    navLink:'/Settings',
    icon: <IoSettingsSharp size={20} />,
  },

  {
    id: "Subscriptions",
    type: "item",
    title: "Subscriptions",
    icon: <FaAward size={20} />,
    navLink:'/Subscriptions'
  },
]
export default sideBarMenu
