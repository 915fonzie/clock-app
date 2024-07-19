import React from 'react'
import getRandomQuote from '../api/getRandomQuote'
import refreshIcon from '../assets/icons/icon-refresh.svg'
import { useQueryClient } from '@tanstack/react-query'

export default function Quote({className}) {
    // const queryClient = useQueryClient()
    // const { isPending, isError, data, error } = getRandomQuote()
    
    // if (isPending) {
    //     return <span>Loading...</span>
    // }
    // if (isError) {
    //     return <span>Error: {error.message}</span>
    // }


    function handleClick(event) {
        addButtonAnimation(event)
        // queryClient.invalidateQueries({
        //     queryKey: ['quote'],
        //     refetchType: 'all'
        // })
    }

    function addButtonAnimation(event) {
        event.currentTarget.classList.add("refresh-clicked")
    }

    function removeButtonAnimation(event) {
        event.currentTarget.classList.remove("refresh-clicked")
    }




    return (
        <div className={`quotes-container ${className}`}>
            <div className='quote-wrapper'>
                <p>{`"The science of operations, as derived from mathematics more especially, is a science of itself and has its own abstract truth and value."`}</p>
                <button className='refresh-btn' onClick={e => handleClick(e)} onAnimationEnd={e => removeButtonAnimation(e)}><img src={refreshIcon} /></button>
            </div>
            <h5>Ada Lovelace</h5>
        </div>
    )
}