import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <div className="footer text-center w-100 ml-0">
            <p className="copyright">Created by James Jiang @{new Date().getFullYear()}</p>
        </div>
    );
}