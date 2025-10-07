import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDb";


const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singlesBook = data.find(book => book.bookId === bookId);
    // console.log(singlesBook);
    const { bookName, image, review, publisher, tags, category, totalPages, yearOfPublishing, rating } = singlesBook;

    const handleMarkAsRead = id => {
        // where to store logalStroge
        addToStoredDB(id);
    }

    return (
        <div className="flex justify-center py-10">
           
             <figure className="bg-gray-200 p-16">
                <img className="w-full h-full mx-auto" src={image} alt="" />
             </figure>
           <div className="ml-10 w-full h-full mx-auto">
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="py-3 text-xl font-semibold">By: {publisher}</p>
            <div className="divider"></div>
           
                <p className="text-xl font-bold">{category}</p>
                <div className="divider"></div>
            <p className=""><small className="text-xl font-bold">Review:</small> {review}</p>
            <div className="divider"></div>
            <div>
                <p className="text-gray-500">Number Of Pages: <small className="ml-20 font-black text-xl">{totalPages}</small></p>
                <p className="text-gray-500">Publisher: <small className="ml-34 font-black text-xl">{publisher}</small></p>
                <p className="text-gray-500">Year Of Publishing: <small className="ml-20 font-black text-xl">{yearOfPublishing}</small></p>
                <p className="text-gray-500">Rating: <small className="ml-40 font-black text-xl">{rating}</small></p>
            </div>
            <div className="mt-3">
                <button onClick={() => handleMarkAsRead(id)} className="btn bg-white border-2 hover:bg-red-700 hover:text-white">Mark As Read</button>
                <button className="btn btn-info ml-5 bg-[#50B1C9] text-white">Add To WishList</button>
            </div>
            </div>
        </div>
    );
};

export default BookDetails;