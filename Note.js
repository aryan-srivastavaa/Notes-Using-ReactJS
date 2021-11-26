import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Note(props) {
    const deleteNote = ()=>{
        props.del(props.id);

    };
    return (
        <>
        <div className='notes'>
            <div className='Note-title'>{props.tit}</div>
            <div className='Note-content'>{props.con}</div>
            <br/>
            <Button variant="contained" color="secondary" onClick={deleteNote}>
        <DeleteOutlineIcon/>
      </Button>
        </div>
            
        </>
    )
}

export default Note
