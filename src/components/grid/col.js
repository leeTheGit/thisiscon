import React   from 'react';
import grid from './grid.module.scss';


const col = (props) => {
    let gridClasses = "";
    let inline = {};

    if (props.marginBottom) {
        inline['marginBottom'] = props.marginBottom;
    }

    if (props.classes) {
        gridClasses = props.classes.map( (c) => {
            return grid[c];
        });
    }
    console.log(grid);
    return (
        <div id="" className={gridClasses.join(" ")} style={inline}>
            {props.children}
        </div>
    )
}

export default col;