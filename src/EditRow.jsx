import React from 'react';

const EditRow = ({editForm,formChange,cancelClick}) => {
    return (
        
       <tr id="RowInput">
           <td><input type="text"
           placeholder="Enten your firstname"
           name="firstName"
           onChange={formChange}
           value={editForm.firstName}
            />
            </td>
            <td>
            <input type="text"
           placeholder="Enter your lastname"
           name="lastName"
           onChange={formChange}
           value={editForm.lastName}
            />  
            </td>
            <td>
            <input type="email"
           placeholder="Enter your emailId "
           name="emailId"
           id="email"
           onChange={formChange}
           value={editForm.emailId}
            />
            </td>
            <td>
            <span>
                <button type="submit" className="save">Save</button>
                <button onClick={cancelClick} className="cancel">Cancel</button>
                </span>
            </td>

       </tr>

    )
}

export default EditRow;
