import {useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const BookForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState();
    const [isAvailable, setIsAvailable] = useState(false);
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/books", {
            title,
            author,
            pages,
            isAvailable
        })
            .then((res) => {
                navigate('/')
    })
            .catch((error) => {
                setErrors(error.response.data.errors);
            })
    }

    return (
        <div className="container">
            <form className="form" onSubmit={submitHandler}>
                <div className="formInput">
                    <input className="textInput" type="text"
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
                    value={isAvailable}
                    onChange={() => setIsAvailable(!isAvailable)}
                    />
                    {
                        errors.isAvailable && <p>{errors.isAvailable.message}</p>
                    }
                </div>
                <button className="button">Add Book!</button>
            </form>

        </div>
    )
}

export default BookForm;