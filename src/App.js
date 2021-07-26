import React, { useState } from 'react';
import Header from './Header';
import {nanoid} from 'nanoid';
import list from './Tablerow';
import ReadOnly from './ReadOnly';
import EditRow from './EditRow';
const App=()=> {
  const[lst,setlist]= useState(list);
   
  const [addlist,newlist]=useState({
    firstName: " ",
    lastName :" ",
    emailId : " " 
  })  
const [editrow,setEditRow] = useState(null);

const [editForm, setEditForm] =useState({
  firstName: " ",
  lastName: " ",
  emailId: " " 
})

const[ExpandIn,setExpandIn]=useState(false);

  const onEvent = (event)=>{
  event.preventDefault();
  //  const fieldname= event.target.getAttribute("name");
  //   const fieldvalue =event.target.value;
    const {name,value}=event.target;
   const newData = { ...addlist };
   newData[name] = value;
   newlist(newData);
  
  };
  const onSubmit=(event)=>{

    event.preventDefault();
   const row ={
     id:nanoid(),
     firstName:addlist.firstName,
     lastName:addlist.lastName,
     emailId:addlist.emailId,
   };
   const newrow = [...lst,row];
   setlist(newrow);

//    addlist({
//     firstName: " ",
//     lastName: " ",
//     emailId: " "
// });
  
  };

  const formSubmit =(event)=>{
    event.preventDefault();

    const editedContact ={
      id:editrow,
     firstName:editForm.firstName,
     lastName:editForm.lastName,
     emailId:editForm.emailId
    }
    const newContacts=[...lst];
    const index=lst.findIndex((listt)=> listt.id === editrow);
   newContacts[index]=editedContact;
   setlist(newContacts);
   setEditRow(null);
  };

  const editBtn = (event,listt)=>{
    event.preventDefault();
    setEditRow(listt.id); 
    
    const formValue ={
      firstName:listt.firstName,
      lastName:listt.lastName,
      emailId:listt.emailId
    }
    setEditForm(formValue);
  } 
   
  const formChange =(event)=>{
   event.preventDefault();
   const {name,value}=event.target;
   const newForm ={ ...editForm};
      newForm[name]=value;
     setEditForm(newForm);
  };
 const cancelClick=()=>{
   setEditRow(null);
  };

  const  deleteBtn =(contactId)=>{
   const newContacts =[...lst];
    const index= lst.findIndex((listt)=>listt.id===contactId);
    newContacts.splice(index, 1);
    setlist(newContacts); 

  };

  const Expand =()=>{
      setExpandIn(true);
  }
  const Normal=()=>{
    setExpandIn(false);
  }

  //  const view =(event)=>{
   
  //   event.preventDefault();
  //  const row ={
  //    firstName:addlist.firstName,
  //    lastName:addlist.lastName,
  //    emailId:addlist.emailId,
  //  };
  //  const newrow = [...lst,row];
  //  alert(setlist(newrow.value));
  //  }
  return (<>
    <div className="App"> 
      <Header/>
    </div>
    <div id="openForm">
    {ExpandIn?
    <div>
    <span><button onClick={Normal} className="btnX">X</button></span>
    <span className="Addtext">Add Employee</span>
    <form onSubmit={onSubmit} className="InputDe">
      <input type="text"
       name="firstName"
       required="required"
       onChange={onEvent}
       placeholder="Enter your firstname*"
       autoComplete="off"

      />

      <input type="text"
       name="lastName"
       required="required"
       onChange={onEvent}
       placeholder="Enter your last name*"
       autoComplete="off"
      />
      <input type="email"
       name="emailId"
       required="required"
       onChange={onEvent}
       placeholder="Enter your email Id*"
       autoComplete="off"
      />
        <br />  
      <button className="btn1">Add Employee Detail</button>
 </form></div> :null}
 </div>
     
   <div className="addEmployy">
   <button type="button" onClick={Expand} className="btn" > Add Employee</button>
   </div>
     <div className="table-row">
      <form onSubmit={formSubmit}>
       <table width="100%" cellSpacing="0" >
         <thead>
         <tr>
           <th>Employee First Name</th>
           <th>Employee Last Name</th>
           <th>Employee email Id</th>
           <th> Actions</th>
           
           </tr>
         </thead>
         <tbody>
          {lst.map((listt,index)=>(<>
              {editrow === listt.id ? (
                <EditRow editForm={editForm} 
                 formChange={formChange}
                 cancelClick={cancelClick}
                 />) : (
                  <ReadOnly 
                 listt={listt}
                 key={index}
                 clickEdit={editBtn}
                 deleteBtn={deleteBtn}
                //  view={view}
              />
              )}
              </>
            ) )
          } 
         </tbody>  
       </table>
       </form>
     </div>
    </>
);
};
export default App;
       
      
      
      

      
       

  

              
              

              
              

              
            
