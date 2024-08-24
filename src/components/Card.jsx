import { star_Rating } from "../utils/constants";
import { swiggyImg } from "../utils/constants";
const Cards = (props)=>{
    const {resData} = props;
    const {id,name,cloudinaryImageId,avgRating,locality,cuisines,sla,costForTwo} = resData;
    return (
        <div className="card" key={id}>
            <img src={swiggyImg+cloudinaryImageId} alt="" className="card-img"/>
                <h2>{name}</h2>
                <p className="rating"><img src={star_Rating} alt="" className="card-rating" />{avgRating}  <span>*{sla?.slaString}</span></p>
                <p>{costForTwo}</p>
                <h2>{cuisines.join(", ")}</h2>
                <h3>{locality}</h3>
        </div>
    );
}

export default Cards;