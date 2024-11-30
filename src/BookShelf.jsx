import { useState, useEffect } from 'react';





const BookShelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({
            ...newBook, 
            [name]: value 
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({
            title: '',
            author: ''
        })

    } 




    return <>
        
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button 
                        type='submit'>
                        Add Book
                    </button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {
                    books.map((book, index) => (
                        <div className="book-card" key={index}>
                            <ul>

                                <li>
                                    <h3>Title: {book.title}</h3>
                                    <p>Author: {book.author}</p>
                                </li>

                            </ul>
                            
                        </div>
                    ))
                }

            </div>
        </div>
    </>
}


export default BookShelf