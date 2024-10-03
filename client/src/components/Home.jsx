import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                setBook(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <div className="container">
            <table className="homeTable">
                <thead className="tableHead">
                    <tr className="tableRow">
                        <th className="tableContent">Title</th>
                        <th className="tableContent">Author</th>
                        <th className="tableContent">Page Count</th>
                        <th className="tableContent">Available</th>
                        <th className="tableContent">Edit Book</th>
                        <th className="tableContent">Book Page</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {
                        book.map((book) => (
                            <tr className="tableRow" key={book._id}>
                                <td className="tableContent">{book.title}</td>
                                <td className="tableContent">{book.author}</td>
                                <td className="tableContent">{book.pages}</td>
                                <td className="tableContent">{book.isAvailable ? "Yes" : "No"}</td>
                                <td className="tableContent"><Link to={`/books/${book._id}/edit`}><button className="button">Edit</button></Link></td>
                                <td className="tableContent"><Link to={`/books/${book._id}/details`}><button className="button">Book Details</button></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;