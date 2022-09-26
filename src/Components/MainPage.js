import React from 'react'
function Mainpage(){
    return(
        <div className='statsbar'>
             <div className='statsbar-content'>
               <h3>Unresolved</h3>
               <h3>2</h3>
             </div>
             <div className='statsbar-content'>
               <h3>OverDue</h3>
               <h3>2</h3>
             </div>
             <div className='statsbar-content'>
               <h3>Due Today</h3>
               <h3>2</h3>
             </div>
             <div className='statsbar-content'>
               <h3>Open</h3>
               <h3>2</h3>
             </div>
             <div className='statsbar-content'>
               <h3>On Hold</h3>
               <h3>2</h3>
             </div>
             <div className='statsbar-content'>
               <h3>Unassgined</h3>
               <h3>2</h3>
             </div>
        </div>

    );
}
export default Mainpage;