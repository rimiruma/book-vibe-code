import { use } from "react";
import { FaStarHalfStroke } from "react-icons/fa6";

const Book = ({ singleBook }) => {
    // const data = use(booksPromise);
    // console.log(data);
    console.log(singleBook);
    const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher} = singleBook;



    return (
        <div className="card bg-base-100 w-96 shadow border p-6">
            <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
                <img className="h-[166px]"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-10">
                    {
                        tags.map(tag => <button className="">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p>Book by: {publisher}</p>
                <div className="border-t-1 border-dashed"></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}<FaStarHalfStroke /></div>
                </div>
            </div>
        </div>
    );
};

export default Book;