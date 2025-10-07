import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../../utility/addToDb';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("")
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        const storedBookData = getStoredBook();
        console.log(storedBookData);

        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        // console.log(convertedStoredBooks);
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    }, [])

    const handleSort = (type) => {
        setSort(type)
        if(type === "pages"){
            const sortByPage = [...readList].sort((a, b) => a.totalPages = b.totalPages);
            setReadList(sortByPage)
            console.log(sortByPage);
            
        }
        if(type === "rating"){
            const sortByRating = [...rating].sort((a, b) => a.rating = b.readList);
            setReadList(sortByRating)
        }
    }

    return (
        <div>
           <div className='flex justify-center mt-5'>
             <details className="dropdown">
                <summary className="btn m-1">Sort By: {sort? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                    <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                </ul>
            </details>
           </div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My WishList</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read: {readList.length}</h2>

                    <div className='py-10'>
                        {
                            readList.map(redBook => <Book key={redBook.bookId} singleBook={redBook}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My WishList</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;