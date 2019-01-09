import React from 'react';

const GridBodyLow = props => {

    const rows = props.imgData.map((row, index) => {

        if (index >= 8) {

            if (index === 10 || index === 8) {

                return (

                    <td key={index}><img className="resize anti" src={row.pic} alt={index}></img></td>
    
                ) 

            } else {

                return (

                    <td key={index}><img className="resize clock" src={row.pic} alt={index}></img></td>
    
                )

            }

        }

    });

    return (

        <tbody>{rows}</tbody>

    )

}

export default GridBodyLow;