import React from "react";


const Card = ({ name, title  , btntxt = "visit me"}) => {
console.log(name);

// button Click
const addClick = ()=> {
    alert("Button was clicked!")
}

  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 ">
        <img
          src="https://picsum.photos/301"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"  />
      
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-400">{title}</p>
          </div>
          <button onClick={addClick} type="button"className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-black">  {btntxt} </button>
          
           
          
        </div>
      </div>
    </>
  );
};

export default Card;
