import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const BookDetails = (props) =>  {
    const navigate = useNavigate();
    const {book, setBook} = props

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])
    
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                navigate("/")
            })
    }

    
    return (
        <div className="details">
            <h2>By {book.author}</h2>
            <p>Page count: {book.pages}</p>
            <p>{book.isAvailable ? "Available for borrowing" : "Not Available"}</p>
            {
                book.isAvailable ?
                 <button className="button" onClick={(e) => deleteHandler(book._id)}>Borrow</button>:
                 null
            }
            
        </div>
    )
}

export default BookDetails;