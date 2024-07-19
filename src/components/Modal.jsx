import React from 'react'

export default function Modal({ data, className }) {

    const {timezone, day_of_year, day_of_week, week_number} = data
    
    // const mobileLayout = (
    //     <div className='modal active-modal'>
    //         <div className='modal-titles'>
    //             <h6>current timezone</h6>
    //             <h6>day of the year</h6>
    //             <h6>day of the week</h6>
    //             <h6>week number</h6>
    //         </div>
    //         <div className='modal-data'>
    //             <h2>{timezone}</h2>
    //             <h2>{day_of_year}</h2>
    //             <h2>{day_of_week}</h2>
    //             <h2>{week_number}</h2>
    //         </div>
    //     </div>
    // )


    return (
        <div className={`modal-wrapper ${className}`}>
            <div className="modal">
                <h6 className='item-1'>current timezone</h6>
                <h6 className='item-2'>day of the year</h6>
                <h6 className='item-3'>day of the week</h6>
                <h6 className='item-4'>week number</h6>
                <h2 className='item-5'>{timezone}</h2>
                <h2 className='item-6'>{day_of_year}</h2>
                <h2 className='item-7'>{day_of_week}</h2>
                <h2 className='item-8'>{week_number}</h2>
            </div>
        </div>
    )
}