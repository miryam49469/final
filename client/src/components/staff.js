import React, {useState} from 'react';
import UseGet from '../hooks/Generic'
import Menue from './menu1Generic'
import Pop from './popStaffGeneric'
import PopAdder from './popStudentsAdder'
import PopUpdate from './popStaffUpdate'
import PopDelete from './popStaffDelete'


const staff=()=>{
//     const onChange=(selected,key)=>{
        
//     }
    
// const [visible, setVisible] = useState(false);


    return(<>
  <Menue/>
  <Pop label="חפש עובד/ים"/>
  <PopAdder label="הוספת עובד חדש"/>
  <PopUpdate label="עדכון פרטי עובד"/>
  <PopDelete label="מחיקת עובד"/>
  
        </>)}
export default staff;