import React from 'react'
import sunIcon from '../assets/icons/icon-sun.svg'
import moonIcon from '../assets/icons/icon-moon.svg'

export default function Time({ children, windowSize, data, date }) {
    
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let icon = ""
    let greeting = ""

    if (hour >= 5 || hour < 12) {
        icon = sunIcon
        greeting = "Good Morning"
        document.body.classList.add("day-bg")
    }
    if (hour >= 12 || hour < 18) {
        greeting = "Good Afternoon"
    }
    if (hour >= 18 || hour < 5) {
        icon = moonIcon
        greeting = "Good Evening"
        document.body.classList.add("night-bg")
    }

    return (
        <div className='time-location-container'>
            <div className='greeting'>
                <img src={icon} />
                <h4>{greeting}{windowSize >= 768 && ", it's currently"}</h4>
            </div>
            <div className='time'>
                <h1>{hour}:{minutes < 10 ? `0${minutes}` : minutes}</h1>
                <h4 className='abbreviation'>{data.abbreviation}</h4>
            </div>
            {children}
        </div>
    )
}