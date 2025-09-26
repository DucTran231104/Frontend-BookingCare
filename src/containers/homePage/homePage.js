import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './homeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import './homePage.scss';

class homePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Specialty />
                <MedicalFacility />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
