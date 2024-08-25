import React, { useState, useEffect } from 'react';
import data from '../data/truckData.json'

function TruckCards() {
    const [truckData, setTruckData] = useState(null);

    useEffect(() => {
        setTruckData(data);
    }, [])

    if(!truckData) {
        return <div> Loading.....</div>;
    }

    console.log(data)
    return (
        <div>
            <h1>
            <h1>{truckData.client}</h1>
            </h1>
        </div>
    )
}

export default TruckCards;