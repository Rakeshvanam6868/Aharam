
import { addItem } from "../utils/cartSlice";
import { swiggyImg } from "../utils/constants";
import { useDispatch } from "react-redux";



const ItemList = ({items}) => {
  const dispatch= useDispatch();
  const handleAddItem =(item)=>{
    dispatch(addItem(item));
  };

  return (
    <div>
        {items.map((item)=>(
            <div key={item.card.info.id}>
                 <div className="w-full flex my-4 pb-3 items-center gap-2 justify-between border-b-2 border-gray-400">
                   <div className="w-9/12 flex flex-col gap-2">
                   <span className="text-lg font-semibold">{item.card.info.name}</span>
                   <span className="text-lg font-semibold">₹{" "}{item.card.info.price/100}</span>
                   <span className="text-sm ">{item.card.info.description}</span>
                   
                   </div>
                   <div className="w-3/12 flex items-center justify-center">
                    <div className="absolute ">
                      <button className="bg-black text-green-500 px-[15px] py-1 mt-20 rounded-lg border-gray border-[2px] shadow-xl" onClick={()=>handleAddItem(item)}>ADD</button>
                    </div>
                    <img src={swiggyImg+ item.card.info.imageId} alt="" className="w-28 h-20 rounded-lg" />
                   </div>
                 </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList;