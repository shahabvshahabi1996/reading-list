import React , {createContext , useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books , setBook] = useState([]);

    const addBook = title => {
        return setBook([...books , {title , id : books.length + 1}]);
    }

    return (
        <BookContext.Provider value={{books , addBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

