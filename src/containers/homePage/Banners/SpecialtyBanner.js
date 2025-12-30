import React from "react";
import { SPECIALTIES } from "../../../utils/specialtyData";
import "./SpecialtyBanner.scss";
import "./Layout.scss";

export default function SpecialtyBanner() {
  return (
    <div className="home-header-banner banner-tab banner-specialty">
      <div className="banner-tab-body container">
        <div className="banner-up">
          <h2>Chuyên khoa</h2>
          <p>Chọn chuyên khoa để xem bác sĩ và lịch khám.</p>
        </div>

        <div className="banner-down">
          <div className="specialty-grid">
            {SPECIALTIES.map((item) => (
              <div className="specialty-card" key={item.id}>
                <div
                  className="specialty-icon"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="specialty-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
