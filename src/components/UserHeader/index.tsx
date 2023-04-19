import React from 'react';
import './styles.css';
import { FaArrowLeft } from 'react-icons/fa';
import UserAvatar from '../../assets/images/jorg_era.jpg';
import UserCover from '../../assets/images/jorg_era-cover.jpg';

function UserHeader() {
    return (
        <> 
            <ul className="nav w-100" style={{'position': 'sticky'}}>
                <div className="row w-100">
                    <div className="col-2">
                        <button className="btn btn-md">
                            <FaArrowLeft style={{'color': 'white'}} />
                        </button>
                    </div>
                    <div className="col-10">
                        <div className="row"><b style={{'color': 'white'}}>DWG Monza SL/E</b></div>
                        <div className="row" style={{'color': 'white'}}>5000 tweets</div>
                    </div>
                </div>
            </ul>

            <div className="col-12 bg-white">
                <div className="row">
                    <div className="col-12 user-cover">
                        <img src={UserAvatar} className="user-avatar mr-auto" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-md btn-primary mt-3 float-right">Edit profile</button>
                    </div>
                </div>
                <div className="row mt-4 p-2">
                    <div className="col-12">DWG Monza SL/E</div>
                    <div className="col-12">@jorg_era</div>
                    <div className="col-12">Bio</div>
                </div>
                <div className="row">
                    <div className="col">Location &nbsp; Site &nbsp; Birthday &nbsp; Joined</div>
                </div>
                <div className="row">
                    <div className="col">795 following</div>
                    <div className="col">795 followers</div>
                </div>
            </div>
        </>
    );
}

export default UserHeader;