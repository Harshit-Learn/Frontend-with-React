import React from 'react'
import { IoIosHome } from "react-icons/io";
import { MdNotificationsOff } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { BiSolidConversation } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const Sidebar = () => {
  return (
    <>
      <div class="side_bar_contant">
        <div class="top_contant">
          <div class="items">{<IoIosHome class="icons"/>}Home</div>
          <div class="items">{<MdNotificationsOff class="icons"/>}Notification</div>
          <div class="items">{<FaCartShopping class="icons"/>}Shop</div>
          <div class="items">{<BiSolidConversation class="icons" />}Conversation</div>
          <div class="items">{<GiWallet class="icons"/>}Wallet</div>
          <div class="items">{<MdSubscriptions class="icons"/>}Subscription</div>
          <div class="items">{<CgProfile class="icons"/>}My Profile</div>
          
        </div>

        <div class="bottom_contant items">{<MdLogout class="icons" />}Log Out</div>
      </div>
    </>
  )
}

export default Sidebar
