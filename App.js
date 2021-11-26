import React,{useState} from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Note from './Note';
import './design.css';

function App() {
    const [addItem, setAddItem] = useState([])
    const addNote = (note)=>{
        setAddItem((prevData)=>{
            return [...prevData,note]
            
        })
        
    }
    const deleteItem = (id)=>{
        setAddItem((oldData)=>
            oldData.filter((currData, indexx)=>{
                return indexx !== id;
            })

        )
    }
    return (
        <>
        <div className='body'>
        <Header/>
        <AddNote pro={addNote}/>
        <div className='containing-Note'>
        
        {addItem.map((val, index)=>{
            return <Note key={index} id ={index} tit={val.title} con={val.content} del={deleteItem}/>

        })
        }
        
        </div>
        
        </div>
        </>
    )
}

export default App;
