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
import "./Specialty.scss"
import Slider from "react-slick";
import { SPECIALTIES } from "../../../utils/specialtyData";


class Specialty extends Component {

    render() {
        let settings = this.props.settings

        return (
            <div className="section-share section-specialty" >
                <div className="section-container" >
                    <div className='section-header' >
                        <span className='title-section' >Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            {SPECIALTIES.map((item) => (
                                <div className="section-customize" key={item.id}>
                                    <div
                                        className="bg-img section-img-specialty"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                    <div>{item.name}</div>
                                </div>
                            ))}
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
