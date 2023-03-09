import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
type ListElement = {
    name:string,
    desc:string
}
const ToDoList = () => {
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const[list,setList]= useState<ListElement[]>([])
    const AddElementInList = () => {
        setList([...list,{
            name:name,
            desc:desc
        }])
        setName('')
        setDesc('')

    }

    const DeleteElementFromList = (index:number) =>{
        const filtered = list.filter((el,i)=>i !== index)
        setList(filtered);
    }
    return (
        <div style={{display:'flex',flexDirection:'column', gap:'1em',marginTop:'1em'}}>
            <div> <TextField sx={{margin:'0 5em'}} id="standard-basic" label="название" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/></div>
           <div> <TextField id="standard-basic" label="описание" variant="standard" value={desc} onChange={(e)=>setDesc(e.target.value)} /></div>

            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={name}*/}
            {/*    onChange={(e) => setName(e.target.value)}*/}
            {/*/>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={desc}*/}
            {/*    onChange={(e) => setDesc(e.target.value)}*/}
            {/*/>*/}
            <div><Button variant="text" onClick={()=>AddElementInList()}>FIRE</Button></div>

            {/*<button onClick={()=>AddElementInList()}*/}
            {/*    >*/}
            {/*    добавить список*/}
            {/*</button>*/}

            {
                list.map((el,i)=>
                    <ToDoListElement
                        name={el.name}
                        desc={el.desc}
                        onDeleteClick={()=>DeleteElementFromList(i)}
                        key={1}/>
            )}
        </div>
    );
};

export default ToDoList;