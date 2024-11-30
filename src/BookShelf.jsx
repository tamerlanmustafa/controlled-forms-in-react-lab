import { useState } from 'react';





const BookShelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault
    }


    return <>
        
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form action="">
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
                </form>
            </div>
            <div className="bookCardsDiv">

            </div>
        </div>
    </>
}


export default BookShelf