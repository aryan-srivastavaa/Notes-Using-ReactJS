import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function AddNote(props) {
    const [val, setVal] = useState({
        title:'',
        content:''
    });
    
    const fonc =(event)=>{
        
        const{value, name} = event.target;
        setVal((prevData)=>{
            return{ 
                ...prevData,
                [name]:value,
            }



        });
    }
    const addEvent = ()=>{
        if(val.title ==='' && val.content ===''){
            alert('Field cannot be empty');

        }
        else{
            props.pro(val);
            setVal({
                title:'',
                content:''
            })
    
        }
       
    }
    return (
        <>
        <div className="box">
            <input type='text' placeholder='Add Title' name='title' value={val.title} onChange={fonc} className='AddNote-title' autoComplete='false'/>
            <br/>
            <textarea rows='' columns='' placeholder='Add Content' value={val.content} onChange={fonc} name='content' className='AddNote-content'></textarea>
            <br/>
            <div className='btn-add'>
            <Button variant="contained" color="primary" onClick={addEvent}>
                   <AddIcon/>
            </Button>
            </div>
            

 
        </div>
            
        </>
    )
}

export default AddNote
