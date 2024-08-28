import star from "../../assets/star.png"
import { swiggyImg } from "../utils/constants";
const Cards = (props)=>{
    const {resData} = props;
    const {id,name,cloudinaryImageId,avgRating,locality,cuisines,sla,costForTwo} = resData;
    return (
        <div className="w-[225px] h-[350px] pl-3 pt-3 bg-slate-100 rounded-lg">
        <div className="w-full sm:w-[200px] gap-2 h-auto sm:h-[350px] p-2  " key={id}>
        <img src={swiggyImg + cloudinaryImageId} alt="" className=" w-[200px] h-[100px] rounded-md object-cover"/>
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="rating flex items-center"><img src={star} alt="" className="card-rating w-4 h-4 mr-1" />{avgRating} <span className="ml-2">{sla?.slaString}</span></p>
        <p className="mt-1">{costForTwo}</p>
        <h2 className="mt-1 text-sm text-gray-600">{cuisines.join(", ")}</h2>
        <h3 className="mt-1 text-sm text-gray-500">{locality}</h3>
        </div>
        </div>
    );
}

export const withPromotedLabel=(Cards)=>{
    return(props)=>{
        return (
            <div className="relative text-black">
                <span className="absolute top-0 left-0 bg-yellow-300 text-black p-1 text-xs font-bold">Promoted</span>
                <Cards {...props}/>
            </div>
        );
    }
}

export default Cards;