import React from 'react';

export const Channel= ({data})=> {
    return(
        <div>
            <h1>{data.Frontend}</h1>
            <h1>{data.Backend}</h1>

        </div>
    )
}