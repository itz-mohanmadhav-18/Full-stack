import React from 'react';
import './index.css';
import Card from "./components/Product_card";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <NavBar logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"/> 
      <div className="flex flex-col bg-white rounded-lg shadow-md my-8 mx-20 xl:mx-auto max-w-screen-lg p-20">
        <select className="border self-end p-2">
          <option>Default sorting</option>
          <option>Price: High to low</option>
          <option>Price: Low to high</option>
          <option>Newest First</option>
          <option>Discount</option>
        </select>
        <div className="flex flex-wrap gap-5 justify-center mt-8">
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
             imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
             imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
           imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
             imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
            onSale={true} imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
           imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
            onSale={true} imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
            onSale={true} imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
          <Card price="$15.00" category="Mugs" title="Black Printed Coffee Mug" 
            onSale={true} imageLink="https://pilottrainingcentre.com/storage/app/product/alpha-bravo-charlie-pilot-gift-pilot-mug-pilot-cof-84-1602325273-37.jpg"/>
        </div>
        <div className="flex gap-3 m-5 ml-12 text-red-400 mt-10  ">
          <a className="border border-red-400 border-solid py-1 px-2 hover:bg-red-400 hover:text-white">1</a>
          <a className="border border-red-400 border-solid py-1 px-2 hover:bg-red-400 hover:text-white">2</a>
          <a className="border border-red-400 border-solid py-1 px-2 hover:bg-red-400 hover:text-white">3</a>
          <a className="border border-red-400 border-solid py-1 px-2 hover:bg-red-400 hover:text-white">-></a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;