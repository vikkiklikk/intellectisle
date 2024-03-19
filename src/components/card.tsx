//this is based on the movieCard from movieMates
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import useFavorites from "@/hooks/useFavorites";

//I need to put types here, I might take them from a types.ts 
// then it would be:
//interface ContentProps {
    //content: Content;
//}

const Card = () => {
    // the favorite function for the favorite button
    /*const { addFavorite, removeFavorite, isFavorite} = useFavorites();
    const favorite = isFavorite(null);

    const handleFavoriteClick = () => {
        if (favorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie.imdbID);
        }
    }
    // making changes to the color of the favorite star when it is clicked
    const starStyle = {
        ...favorite ? {fill: '#FAFF00'} : {fill: 'transparent'}
    }*/

    return (
        <div className='w-[152px] h-[138px] rounded-2xl bg-white relative'>
            <button className='absolute top-2 right-6'>
                {/*I'm using two stars that overlay each other, couldn't find a star that I could change fill and border */}
                <FaRegStar  className="absolute"/>
            </button>
            <Link href=''>
                <div className='w-[152px] h-[98px] rounded-t-2xl bg-slate-500'/>
            </Link>
            <Link href=''>
                <div className='flex py-2 px-2 place-items-center'>
                    <h2 className=' text-sm font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis'>Video title</h2>
                </div>
            </Link>
        </div>
    )
}

export default Card;