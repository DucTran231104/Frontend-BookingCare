import React from "react";

export default function DoctorBanner() {
  return (
    <div className="home-header-banner banner-tab banner-doctor">
      <div className="banner-tab-body">
        <div className="banner-left">
          <h2>Bác sĩ</h2>
          <p>Chọn bác sĩ theo chuyên khoa và đánh giá.</p>
          <div className="banner-actions">
            <button className="btn-primary">Bác sĩ nổi bật</button>
            <button className="btn-secondary">Theo chuyên khoa</button>
          </div>
        </div>

        <div className="banner-right">
          <div className="grid">
            <div className="card">BS A ⭐ 4.9</div>
            <div className="card">BS B ⭐ 4.8</div>
            <div className="card">BS C ⭐ 4.7</div>
            <div className="card">BS D ⭐ 4.9</div>
            <div className="card">BS E ⭐ 4.6</div>
            <div className="card">BS F ⭐ 4.8</div>
          </div>
        </div>
      </div>
    </div>
  );
}
