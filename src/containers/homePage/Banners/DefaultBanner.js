import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHospital, faMobile, faBed, faMedkit, faTooth } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import LanguageUtils from "../../../utils/LanguageUtils"; // nếu sai path thì chỉnh lại

export default function DefaultBanner({ language }) {
  return (
    <div className="home-header-banner">
      <div className="content-up">
        <div className="title1">
          <FormattedMessage id="banner.flatform" />
        </div>

        <div className="title2">
          <FormattedMessage id="banner.health-care" />
        </div>

        <div className="search">
          <section className="search-container">
            <label className="search-field">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                className="search-input"
                placeholder={LanguageUtils.getMessageByKey("banner.search-placeholder", language)}
              />
            </label>
          </section>
        </div>
      </div>

      <div className="content-down">
        <div className="option">
          <div className="option-child">
            <div className="icon-child"><FontAwesomeIcon icon={faHospital} /></div>
            <div className="text-child"><span><FormattedMessage id="banner.child1" /></span></div>
          </div>

          <div className="option-child">
            <div className="icon-child"><FontAwesomeIcon icon={faMobile} /></div>
            <div className="text-child"><span><FormattedMessage id="banner.child2" /></span></div>
          </div>

          <div className="option-child">
            <div className="icon-child"><FontAwesomeIcon icon={faBed} /></div>
            <div className="text-child"><span><FormattedMessage id="banner.child3" /></span></div>
          </div>

          <div className="option-child">
            <div className="icon-child"><FontAwesomeIcon icon={faMedkit} /></div>
            <div className="text-child"><span><FormattedMessage id="banner.child4" /></span></div>
          </div>

          <div className="option-child">
            <div className="icon-child"><i className="far fa-comments" /></div>
            <div className="text-child"><span><FormattedMessage id="banner.child5" /></span></div>
          </div>

          <div className="option-child">
            <div className="icon-child"><FontAwesomeIcon icon={faTooth} /></div>
            <div className="text-child"><span><FormattedMessage id="banner.child6" /></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
