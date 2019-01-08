import React from 'react';

const GridBody = props => {

    const rows = props.imgData.map((row, index) => {

        return (

            <tr key={index}>
            
                <td><img src={row.pic} alt={index}></img></td>

            </tr>

        )

    })

    return (

        <tbody>{rows}</tbody>

    )

}

export default GridBody;