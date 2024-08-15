import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export const Navigation = () => {
    const [isToken, setIsToken] = useState(false);

    useEffect(() => {
        const item = localStorage.getItem('token');

        setIsToken(item !== null);
    }, []);

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src="images/logo.png" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/coffees">
                                Coffees
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div className="login_bt">
                            <ul>
                                {isToken ? (
                                    <li>
                                        <a href="#">
                                            <span className="user_icon">
                                                <i className="fa fa-user" aria-hidden="true" />
                                            </span>
                                            Logout
                                        </a>
                                    </li>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/login">
                                                {/* <span className="user_icon">
                                         <i className="fa fa-user" aria-hidden="true" />
                                     </span> */}
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/register">
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}