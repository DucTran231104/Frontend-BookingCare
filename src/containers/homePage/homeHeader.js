import React, { Component } from 'react';
import { connect } from 'react-redux';
import './homeHeader.scss';
// Old way (v4.7.0)
import 'font-awesome/css/font-awesome.min.css';

// <i className="fa fa-user"></i>

// New way (v5)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// <FontAwesomeIcon icon={faUser} />
import { faTooth } from '@fortawesome/free-solid-svg-icons';

import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/bookingcare-2020.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import LanguageUtils from '../../utils/LanguageUtils';
import { changeLanguageApp } from '../../store/actions';

// Banner
import DefaultBanner from './Banners/DefaultBanner';
import SpecialtyBanner from './Banners/SpecialtyBanner';
import FacilityBanner from './Banners/FacilityBanner';
import DoctorBanner from './Banners/DoctorBanner';
import PackageBanner from './Banners/PackageBanner';

class homeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: null,          // chưa chọn gì
            bannerMode: 'default',    // 'default' | 'tab'
        };
    }

    setActiveTab = (tab) => {
        this.setState({
            activeTab: tab,
            bannerMode: 'tab',
        });
    };

    changeLanguage = (language) => {
        // alert("Change language to: " + language);
        //fire redux even: actions
        this.props.changeLanguageAppRedux(language);
        console.log("check change language: ", this.props.changeLanguageAppRedux(language));
    }

    render() {
        let language = this.props.language;
        const { bannerMode, activeTab } = this.state;
        console.log("check language from redux: ", this.props.language);
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='home-header-content-left'>
                            <i className='fa fa-bars btn-bars'></i>
                            <img
                                src={logo}
                                alt='logo'
                                className='home-header-content-left-logo'
                                style={{ cursor: 'pointer' }}
                                onClick={() => this.setState({ bannerMode: 'default', activeTab: null })}
                            />


                        </div>

                        <div className='home-header-content-center'>
                            <div
                                className={this.state.activeTab === 'specialty' ? 'child-content active' : 'child-content'}
                                onClick={() => this.setActiveTab('specialty')}
                            >
                                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.search-doctor" />
                                </div>
                            </div>

                            <div
                                className={this.state.activeTab === 'facility' ? 'child-content active' : 'child-content'}
                                onClick={() => this.setActiveTab('facility')}
                            >
                                <div><b><FormattedMessage id="home-header.medical-facility" /></b></div>
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.choose-hospital" />
                                </div>
                            </div>

                            <div
                                className={this.state.activeTab === 'doctor' ? 'child-content active' : 'child-content'}
                                onClick={() => this.setActiveTab('doctor')}
                            >
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.choose-doctor" />
                                </div>
                            </div>

                            <div
                                className={this.state.activeTab === 'package' ? 'child-content active' : 'child-content'}
                                onClick={() => this.setActiveTab('package')}
                            >
                                <div><b><FormattedMessage id="home-header.medical-examination-package" /></b></div>
                                <div className='sub-title'>
                                    <FormattedMessage id="home-header.general-health-check" />
                                </div>
                            </div>
                        </div>

                        <div className='home-header-content-right'>

                            <div className='support'> <i className="fa fa-question-circle question-icon" ></i><FormattedMessage id="home-header.support"></FormattedMessage></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)} >VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)} >EN</span></div>
                        </div>
                    </div>
                </div>

                {bannerMode === 'default' && <DefaultBanner language={language} />}

                {bannerMode === 'tab' && activeTab === 'specialty' && <SpecialtyBanner />}
                {bannerMode === 'tab' && activeTab === 'facility' && <FacilityBanner />}
                {bannerMode === 'tab' && activeTab === 'doctor' && <DoctorBanner />}
                {bannerMode === 'tab' && activeTab === 'package' && <PackageBanner />}
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        //inject    
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)) //dispatch action to change language
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(homeHeader);
