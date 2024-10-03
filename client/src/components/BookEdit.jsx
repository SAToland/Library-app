import {useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";

const BookEdit = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState();
    const [isAvailable, setIsAvailable] = useState(false);
    const [errors, setErrors] = useState({});
    const {id} = useParams();
    const {book, setBook} = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res)=> {
                setBook(res.data)
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setPages(res.data.pages)
                setIsAvailable(res.data.isAvailable)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedBook = {
            title,
            author,
            pages,
            isAvailable
        }
        axios.put(`http://localhost:8000/api/books/${id}`, updatedBook)
            .then((res) => {
                navigate('/')
    })
            .catch((error) => {
                setErrors(error.response.data.errors);
            })
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div className="formInput">
                    <input 
                    className="textInput" 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title..."/>
                    {
                        errors.title && <p>{errors.title.message}</p>
                    }
                </div>
                <div className="formInput">
                    <input 
                    className="textInput" 
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author..."/>
                    {
                        errors.author && <p>{errors.author.message}</p>
                    }
                </div>
                <div className="formInput">
                    <input 
                    className="textInput" 
                    type="text"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="Pages..."/>
                    {
                        errors.pages && <p>{errors.pages.message}</p>
                    }
                </div>
                <div className="formCheckbox">
                    <label className="checkboxLabel" htmlFor="">Is Available:</label>
                    <input 
                    className="checkboxInput" 
                    type="checkbox"
                    checked={isAvailable}
                    value={isAvailable}
                    onChange={() => setIsAvailable(!isAvailable)}
                    />
                    {
                        errors.isAvailable && <p>{errors.isAvailable.message}</p>
                    }
                </div>
                <button className="button">Update</button>
            </form>

        </div>
    )
}

export default BookEdit;