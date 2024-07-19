import React from 'react'
import getRandomQuote from '../api/getRandomQuote'
import refreshIcon from '../assets/icons/icon-refresh.svg'
import { useQueryClient } from '@tanstack/react-query'

export default function Quote({className}) {
    const queryClient = useQueryClient()
    const { isPending, isError, data, error } = getRandomQuote()
    
    if (isPending) {
        return <span>Loading...</span>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    function handleClick(event) {
        addButtonAnimation(event)
        queryClient.invalidateQueries({
            queryKey: ['quote'],
            refetchType: 'all'
        })
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
                <p>{`${data[0].quote}`}</p>
                <button
                    className='refresh-btn'
                    onClick={e => handleClick(e)}
                    onAnimationEnd={e => removeButtonAnimation(e)}
                    aria-label='refresh button'
                >
                    <img src={refreshIcon} alt='refresh icon'/>
                </button>
            </div>
            <h5>{data[0].author}</h5>
        </div>
    )
}