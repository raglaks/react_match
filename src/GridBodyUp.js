import React from 'react';

const GridBodyUp = props => {

    let rows = props.imgData.map((row, index) => {

        //console.log("UP", row);

        if (index <= 3) {

            if (index === 1 || index === 3) {

                return (

                    <td key={index}><img id={index} onClick={props.clickCheck} className="resize anti" src={row.pic} alt={index}></img></td>
    
                )

            } else {

                return (

                    <td key={index}><img id={index} onClick={props.clickCheck} className="resize clock" src={row.pic} alt={index}></img></td>
    
                )

            }

        } 

        return rows;

    });

    return (

        <tr>{rows}</tr>

    )

}

export default GridBodyUp;