import React   from 'react';
import grid from './grid.module.scss';


const col = (props) => {
    let gridClasses = "";
    let inline = {};
    console.log(props)
    if (props.marginBottom) {
        inline['marginBottom'] = props.marginBottom;
    }
    console.log(grid);
    if (props.classes) {
        gridClasses = props.classes.map( (c) => {
            console.log(c);
            return grid[c];
        });
    }
    console.log(inline);
    console.log(gridClasses)
    console.log(gridClasses.join(" "))
    return (
        <div id="crazy" className={gridClasses.join(" ")} style={inline}>
            {props.children}
        </div>
    )
}

export default col;