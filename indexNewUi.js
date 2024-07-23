import "./indexNew.css"
import DeleteIcon from './images/minus-circle.svg';
import EditIcon from './images/editicon2.png';
import UpdateIcon from "./images/updateIcon.png";
import { useState } from "react";


export default function TodoListApp() {
    const [inputdata, setInputData] = useState('');
    const [listitem , setListItem] = useState([]);
    const [clickindex, setclickIndex] = useState(null);
    const [updatevalue, setUpdateValue] = useState("")

    const addListItems = () => {  
        if(inputdata.trim() !== ""){
            setListItem([
                ...listitem,
                { id: listitem.length, inputdata}
            ])
            setInputData('')
        }
    }
     
    const deleteListitem = (listIndex) => {
        setListItem(listitem => {
            return listitem.filter((list, index) => index !== listIndex );            
        }) 
    }
    
    const editListItem = (index, value) => {
        setUpdateValue("")
        setclickIndex(index)
    }

    const updateListItem = (listIndex) => {
        const updateValue = [...listitem].map((list,index) => {
            if(index === listIndex){
               list.inputdata = updatevalue
            }
            return list
        })  
        setListItem(updateValue)
        setclickIndex(null)
    }
    
    return (
        <div className="todoApp-container" >    
            <div className="addlistItemInputField">
                <input 
                    value={inputdata} 
                    onChange={event => setInputData(event.target.value)} 
                    className="inputField"
                />
                <button 
                    className="createButton" 
                    onClick={addListItems}
                >
                    Create
                </button>
            </div>
        
            <div className="listItems-Of-Headings">
                <div className="listItems-TodoContainer">
                    <p className="listItemsHeading-Todolist">
                        TODO
                    </p>
                    <div className="unorder-list">
                        <ul className="listItem-of-Todo">
                            {listitem.map((list,index) => (
                                <li className="list-Items" 
                                    key={list.id}
                                > 
                                {clickindex === index ? 
                                    
                                    <p className="list-content">
                                        <input  value={updatevalue} 
                                                onChange={(event)=> setUpdateValue(event.target.value)}
                                                style={{
                                                height: "25px",
                                                width: "150px"
                                                }}
                                        />
                                    </p> : 
                                    <p className="list-content"> 
                                            {list.inputdata} 
                                    </p>
                                }
                                {clickindex === index ?
                                        
                                    <div className="Update-Icon">
                                        <img 
                                            src={UpdateIcon}
                                            alt="UpdateIcon"
                                            width={"20px"}
                                            height={"20px"}
                                            onClick={() => updateListItem(index)}
                                        />
                                    </div> :
                                    <div className="Edit-Icon">
                                        <img 
                                            src={EditIcon}
                                            alt="EditIcon"
                                            width={"20px"}
                                            height={"20px"}
                                            onClick={()=> editListItem(index , list.inputdata)}
                                        />
                                    </div>
                                }
                                    <div className="delete-Icon">
                                        <img 
                                            src= {DeleteIcon}
                                            alt="removeIcon" 
                                            width={"20px"}
                                            height={"20px"}
                                            onClick={()=>{
                                                deleteListitem(index)
                                            }}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="listItems-processingContainer">
                    <p className="listItemsHeading-processing">
                        IN PROGRESS
                    </p>
                    <div className="unorder-list">
                        <ul className="listItem-of-processing">
                            <li className="list-Items">
                                Create a vedio
                                <img className="delete-Icon" 
                                    src= {DeleteIcon} 
                                    alt="minus" 
                                    width={"20px"}
                                    height={"20px"}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="listItems-ClosedContainer">
                    <p className="listItemsHeading-closed">
                        CLOSED
                    </p>
                    <div className="unorder-list">
                        <ul className="listItem-of-closed">
                            <li className="list-Items">
                                Learn React 
                                <img className="delete-Icon " 
                                src= {DeleteIcon} 
                                alt="minus" 
                                width={"20px"}
                                height={"20px"}
                                />
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
    )
}