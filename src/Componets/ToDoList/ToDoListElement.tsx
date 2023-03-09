import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {findAllByDisplayValue} from "@testing-library/react";

type Props ={
    name:string;
    desc:string;
    onDeleteClick:()=>void;

}
const ToDoListElement = ({name,desc, onDeleteClick}:Props) => {

    // const name = props.name;

    return (
        <div style={{display:'flex',gap:'1em',justifyContent:'center'}}>
            <div><TextField id="filled-basic" label="Filled" variant="filled" value={name} /></div>
            <div><TextField id="filled-basic" label="Filled" variant="filled" value={desc} /></div>

            {/*<div>*/}
            {/*    {name}*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    {desc}*/}
            {/*</div>*/}
            <div>
                <Button sx={{ height: '100%', width: '150px'}} variant="contained" onClick={()=>onDeleteClick()}>Delete</Button>

            </div>
        </div>

    );
};

export default ToDoListElement;