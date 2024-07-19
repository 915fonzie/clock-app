import React from 'react'

export default function Modal({ data, hour, className }) {

    const { timezone, day_of_year, day_of_week, week_number } = data
    const modalRef = React.useRef(null)

    if (hour >= 5 || hour < 18) {
        if (modalRef.current) {
            modalRef.current.classList.add('day-modal')
            modalRef.current.classList.remove('night-modal')
        }
    }

    if (hour >= 18 || hour < 5) {
        if (modalRef.current) {
            modalRef.current.classList.add('night-modal')
            modalRef.current.classList.remove('day-modal')
        }
    }

    return (
        <div className={`modal-wrapper ${className}`}>
            <div className="modal" ref={modalRef}>
                <h6 className='item-1'>current timezone</h6>
                <h6 className='item-2'>day of the year</h6>
                <h6 className='item-3'>day of the week</h6>
                <h6 className='item-4'>week number</h6>

                <h2 className='item-5'>{timezone}</h2>
                <h2 className='item-6'>{day_of_year}</h2>
                <h2 className='item-7'>{day_of_week}</h2>
                <h2 className='item-8'>{week_number}</h2>
                <div className='line-break'></div>
            </div>
        </div>
    )
}