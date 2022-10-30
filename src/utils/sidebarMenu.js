import React from "react";
import { BsFillGridFill, BsCalendar2MinusFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaAward, FaUserFriends } from "react-icons/fa";
// import { AiFillFileText } from "react-icons/ai";
import { RiPieChartFill } from "react-icons/ri";
import { HiCalendar } from "react-icons/hi";

export const sideBarMenu = [
  {
    id: "Overview",
    title: "Dashboard",
    type: "item",
    icon: <BsFillGridFill size={20} />,
    navLink: "/overview",
  },

  {
    id: "Clients",
    title: "Clients",
    type: "item",
    icon: <FaUserFriends size={20} />,
    navLink: "/client-management",
  },

  {
    id: "Post Scheduling",
    title: "Schedule Posts",
    type: "item",
    icon: <BsCalendar2MinusFill size={17} />,
    navLink: "/Schedule",
  },

  {
    id: "Invoices & Financials",
    title: "Finance",
    icon: <RiPieChartFill size={20} />,
    type: "item",
    navLink: "/invoices-&-financials",
  },

  // {
  //   id: "Reports",
  //   title: "Reports",
  //   type: "item",
  //   icon: <AiFillFileText size={20} />,
  //   navLink: "/report",
  // },

  // {
  //   id: "Messages",
  //   title: "Messages",
  //   type: "item",
  //   icon: <RiBookFill size={20} />,
  //   navLink: "/Chat",
  // },
  {
    id: "Post Ideas",
    title: "Post Ideas",
    type: "item",
    icon: <HiCalendar size={20} />,
    navLink: "/Chat",
  },
  {
    id: "Settings",
    title: "Settings",
    type: "item",
    navLink: "/Settings",
    icon: <IoSettingsSharp size={20} />,
  },
  {
    id: "Subscription",
    type: "item",
    title: "Subscription",
    icon: <FaAward size={18} />,
    navLink: "/Subscriptions",
  },
];

export const bottomSideBarMenu = [
  {
    id: "Settings",
    title: "Settings",
    type: "item",
    navLink: "/Settings",
    icon: <IoSettingsSharp size={20} />,
  },

  {
    id: "Help & Support",
    type: "item",
    title: "Help & Support",
    icon: <FaAward size={18} />,
    navLink: "/help",
  },
];
