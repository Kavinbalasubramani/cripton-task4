import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { CiCoffeeCup } from "react-icons/ci";

const Startscomponent = () => {
  return (
    <div className="container">
        <div class="revenue-container">
            <div class="revenue-header">
                <span class="revenue-title">Revenue</span>
                <span class="revenue-percentage"><FaArrowDown />10%</span>
            </div>
            <div class="revenue-content">
                <span className='demo'><RiArrowRightUpLine /></span>
                <span className='demo1'>$2.047</span>
            </div>
        </div>
        <div class="revenue-container">
            <div class="revenue-header">
                <span class="revenue-title">Orders</span>
                <span class="revenue"><FaArrowUp />20%</span>
            </div>
            <div class="revenue-content1">
                <span className='demo0'><FaShoppingCart /></span>
                <span className='demo1'>356</span>
            </div>
        </div>
        <div class="revenue-container">
            <div class="revenue-header">
                <span class="revenue-title">Dine in</span>
                <span class="revenue"><FaArrowUp />10%</span>
            </div>
            <div class="revenue-content1">
                <span className='demo2'><ImSpoonKnife /></span>
                <span className='demo1'>220</span>
            </div>
        </div>
        <div class="revenue-container">
            <div class="revenue-header">
                <span class="revenue-title">Take away</span>
                <span class="revenue-percentage"><FaArrowDown />5%</span>
            </div>
            <div class="revenue-content1">
                <span className='demo3'><CiCoffeeCup /></span>
                <span className='demo1'>135</span>
            </div>
        </div>
    </div>
  )
}

export default Startscomponent

