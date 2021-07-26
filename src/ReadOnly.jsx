import React from 'react';

const ReadOnly = ({listt,clickEdit,deleteBtn,view}) => {
    return (<>
        <tr>
             <td>{listt.firstName}</td>
             <td>{listt.lastName}</td>
             <td>{listt.emailId}</td>
             <td>
              <span><button type="button" className="update" onClick={(event)=>clickEdit(event,listt)}
                 >Update</button>
                 <button type="button" className="delete" onClick={()=>deleteBtn(listt.id)}>Delete </button>
                 <button type="button" className="view"
                //   onClick={(event)=>view(event,listt)} 
                    
                > View</button>

                 </span>
             </td>
           </tr>
           </> 
    )
        
}

export default ReadOnly;
