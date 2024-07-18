import React from 'react';
import './index.css';
 function NavBar(data){
   return (
      <div className="bg-white p-3">
      <img src={data.logo} class="max-h-8 sm:mx-auto lg:mx-32"/>
      </div>
     
   );
   
 }
export default NavBar;