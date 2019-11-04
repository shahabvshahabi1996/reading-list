import React , {createContext , useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books , setBook] = useState([{title : 'The man called ove' , author : 'Fredric Bakman' , id : 1 }]);

    const addBook = (title , author) => {
        return setBook([...books , {title , author , id : books.length + 1}]);
    }

    const removeBook = (id) => {
        let newBookList = books.filter(book => book.id !== id);
        return setBook(newBookList);
    }

    return (
        <BookContext.Provider value={{books , addBook , removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

