
import { useState } from 'react';
import ItemList from './ItemList';

const ItemCategory = ({data,showItems,setShowIndex}) => {
    // console.log(data);
    // const [showItems,setShowItems]=useState(false);

    const handleClick = ()=>{
        setShowIndex();
    }
  return (
    
    <div className="flex flex-col w-full">
        <div className="bg-gray-200 h-1 mt-2 flex "></div>
        <div className="flex flex-col p-2 gap-1 h-full shadow-xl " onClick={handleClick}>
            <div className="flex justify-between cursor-pointer" >
            <p className="text-lg font-bold">
               {data.title} ({data.itemCards.length})
            </p>
            <p className='text-lg font-bold'>⋁</p>
            </div>
            <div className='w-full h-full'>
             {showItems && <ItemList items={data.itemCards}/>} 
            </div>
        </div>
        
    </div>
  )
}

export default ItemCategory