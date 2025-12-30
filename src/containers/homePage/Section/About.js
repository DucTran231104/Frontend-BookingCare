import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./About.scss";

// path image
import vnexpress from '../../../assets/media/vnexpress.png';
import dantri from '../../../assets/media/dantri.png';
import suckhoedoisong from '../../../assets/media/suckhoedoisong.png';
import vietnamnet from '../../../assets/media/vietnamnet.png';
import vtv1 from '../../../assets/media/vtv1.png';
import vtcnews from '../../../assets/media/vtcnews.png';

class About extends Component {

    render() {

        return (
            <div className="section-share section-about" >
                <div className="section-about-header" >
                    Truyền thông nói về DukeTran & HuyHuy & KhaiTran
                </div>
                <div className="section-about-content" >
                    <div className="content-left" >
                        <iframe width="100%" height="400"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ"
                            title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>
                    </div>
                    <div className="content-right" >
                        <div className="logo-grid">

                            <a href="https://vnexpress.net" target="_blank" rel="noopener noreferrer">
                                <img src={vnexpress} alt="VnExpress" />
                            </a>

                            <a href="https://suckhoedoisong.vn" target="_blank" rel="noopener noreferrer">
                                <img src={suckhoedoisong} alt="Sức khỏe & Đời sống" />
                            </a>

                            <a href="https://vietnamnet.vn" target="_blank" rel="noopener noreferrer">
                                <img src={vietnamnet} alt="Vietnamnet" />
                            </a>

                            <a href="https://vtv.vn" target="_blank" rel="noopener noreferrer">
                                <img src={vtv1} alt="VTV1" />
                            </a>

                            <a href="https://vtcnews.vn" target="_blank" rel="noopener noreferrer">
                                <img src={vtcnews} alt="VTC News" />
                            </a>

                            <a href="https://dantri.com.vn" target="_blank" rel="noopener noreferrer">
                                <img src={dantri} alt="Dân Trí" />
                            </a>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
