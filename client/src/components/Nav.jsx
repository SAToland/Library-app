import {Link, useLocation} from "react-router-dom";

const Nav = (props) => {
    const {pathname} = useLocation();
    const {book, setBook} = props
    const bookId = book._id
    const detailsPath = '/books/' + bookId + '/details'
    const editPath = '/books/' + bookId + '/edit'

    const renderSwitch = () => {
        switch(pathname) {
            case '/':
                return 'Home';
            case '/books/create':
                return 'Add a Book'
            case detailsPath:
                return book.title
            case editPath:
                return 'Edit Book Named: ' + book.title
            default:
                return 'Place Holder';
        }
      }
    
    return (
        <header className="header">
            <nav className="navContent">
                <Link to={'/'}><button className="button">Catalog</button></Link>
            </nav>
            {
                <h1 className="navTitle">{renderSwitch()}</h1>
            }
            <nav className="navContent">
                <Link to={'/books/create'}><button className="button">Add Book</button></Link>
            </nav>
        </header>
    )
}

export default Nav;