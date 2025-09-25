import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Specialty.scss';
// Old way (v4.7.0)
import 'font-awesome/css/font-awesome.min.css';

// <i className="fa fa-user"></i>

// New way (v5)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon={faUser} />
import { faTooth } from '@fortawesome/free-solid-svg-icons';

import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import picture
import specialtyImg from '../../../assets/Specialty/CoXuongKhop.jpg';
import specialtyImg2 from '../../../assets/Specialty/tieu-hoa.png';
class Specialty extends Component {

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };


        return (
            <div className="section-specialty" >
                <div className="Specialty-container" >
                    <div className='Specialty-header' >
                        <span className='title-section' >Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='Specialty-body'>
                        <Slider {...settings}>
                            <div className='Specialty-customize' >
                                <div src={specialtyImg} className='bg-img' />
                                <div>Cơ xương khớp 1</div>
                            </div>
                            {/* <div className='img-customize img-1'><h3>1</h3></div> */}
                            <div className='Specialty-customize' >
                                <div src={specialtyImg} className='bg-img' />
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className='Specialty-customize' >
                                <div src={specialtyImg2} className='bg-img' />
                                <div>Tiêu Hóa</div>
                            </div>
                            <div className='Specialty-customize' >
                                <div src={specialtyImg} className='bg-img' />
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='Specialty-customize' >
                                <div src={specialtyImg} className='bg-img' />
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className='Specialty-customize' >
                                <div src={specialtyImg} className='bg-img' />
                                <div>Cơ xương khớp 6</div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
