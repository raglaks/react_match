import React from 'react';

const GridBodyLow = props => {

    const rows = props.imgData.map((row, index) => {

        if (index >= 8) {

            if (index === 8 || index === 10) {

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

        <tr>{rows}</tr>

    )

}

export default GridBodyLow;