import { useState } from "react"
import "./index.css"
export default function TodoList() {
  
    const [lists, setList] = useState('ececece');
    const [addlist, setAddlist] = useState([]);
    const [clickeditindex, setclickEditIndex] = useState(null)
    
   
    
    const handleAddButtonClick = () => {
        if(lists.trim() !== ""){
            setAddlist([
                ...addlist,
                { id: `id-${addlist.length}`, lists: lists}
            ]);
        }; 
        setList("")             
    };

    const handleEditButtonClick = (index) => {
        setclickEditIndex(index)
    }

    return (
        <div className="container-box">
            <h1 className="heading">Todo-List</h1>
            <div className="input-container">
                <input
                    className="inputField"
                    value={lists}
                    onChange={e => setList(e.target.value)}
                />
                <button
                    className="addButton"
                    onClick={handleAddButtonClick}>
                    Add
                </button>
            </div>
            <ul className="ListItems">
                {addlist.map((addlistvalue,index) => ( 
                    
                    <li key={addlistvalue.id} className="paragraph">
                        {clickeditindex === index ?
                        <input value={addlistvalue.lists} onChange={(e) => e.target.value}/> : addlistvalue.lists}
                        
                        <div className="delete-edit-update-Buttons">
                        <button
                            className="deleteButton" onClick={() => {
                                setAddlist([
                                    ...addlist.filter(value => value.id !== addlistvalue.id)
                                ])
                            }}>
                            delete
                        </button>
                       {clickeditindex === index ?
                        <button className="updateButton">update</button>
                        :
                        <button className = "deleteButton"  onClick={() => handleEditButtonClick(index)}>
                            edit
                        </button> 
                        }
                        </div>
                    </li> 
                ))}
            </ul>
        </div>
    )
}