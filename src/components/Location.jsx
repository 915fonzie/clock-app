import React from 'react'
import getLocation from '../api/getLocation'

export default function Location() {
    const { isPending, isError, data, error } = getLocation()

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return <h3>in {data.city}, {data.region}</h3>
}