import React from 'react';

const GridBodyMid = props => {

    const rows = props.imgData.map((row, index) => {

        if (index >= 4 && index <= 7) {

            if (index === 4 || index === 6) {

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

export default GridBodyMid;