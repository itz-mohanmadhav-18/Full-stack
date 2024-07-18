import React from 'react';
import '../index.css';
 function Footer(data){
   return (
      <div className = "bg-[#415160] p-5 text-white flex justify-between">
         <p className="sm:mx-auto lg:mx-32 text-xs">Copyright @2022 | CodeYogi</p>
         <p className="text-right text-xs sm:mx-auto lg:mx-32">Powered by CodeYogi</p>
      </div>

   );

 }
export default Footer;