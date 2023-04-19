import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH, FaTwitter } from 'react-icons/all';
import './styles.css';
function Menu() {
    return (
        <div className="row">
            <div className="ml-auto col-6 p-4">
                <ul className="nav flex-column">
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/"><FaTwitter /></Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/"><FaHome /> &nbsp; Home</Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/explore"><FaHashtag /> &nbsp; Explore</Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/notifications"><FaBell /> &nbsp; Notifications</Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/messages"><FaEnvelope /> &nbsp; Messages</Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/bookmarks"><FaBookmark /> &nbsp; Bookmarks</Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/lists"><FaList /> &nbsp; Lists</Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/profile"><FaUser /> &nbsp; Profile</Link>
                    </li>
                    <li className="btn btn-sm">
                        <Link className="nav-link" to="/more"><FaEllipsisH /> &nbsp; More</Link>
                    </li>
                    <li className="btn btn-lg btn-primary" style={{'borderRadius': '25px'}}>Tweet</li>
                </ul>
            </div>
        </div>


    );
}

export default Menu;