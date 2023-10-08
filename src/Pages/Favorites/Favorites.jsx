import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {

    const [favorite,setFavorite] = useState([])
    const [noFound,setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)
   
    useEffect(()=>{
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        if(favorites){
            setFavorite(favorites)
        }
        else{
            setNoFound('NO DATA FOUND')
        }
    },[])
  
    const handleRemove = () =>{
        localStorage.clear()
        setFavorite([])
        setNoFound('NO DATA FOUND')
    }
    return (
        <div>
            {
             noFound ? <p className="text-center text-4xl">{noFound}</p>
             :
          <div>
             {favorite.length > 0 && <button onClick={handleRemove} className="bg-slate-400 py-2 px-3 rounded-2xl mb-10">delete all favorite </button>}
              <div className="grid grid-cols-3 gap-5 ">
                {
                   isShow ? favorite.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
                   :favorite.slice(0,2).map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>) 
                }
             </div>
             {
                favorite.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="bg-slate-400 py-2 px-3 rounded-2xl mb-10 block mx-auto"> {isShow ?'see less':'see more' }</button>
             }
          </div>
         }
        </div>
    );
};

export default Favorites;