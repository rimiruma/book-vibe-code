import { useLoaderData, useParams } from "react-router";


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singlesBook = data.find(book => book.bookId === bookId);
    // console.log(singlesBook);
    const {bookName, image} = singlesBook;
    

    return (
        <div>
            
        </div>
    );
};

export default BookDetails;