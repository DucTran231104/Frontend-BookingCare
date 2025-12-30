import React from "react";

export default function FacilityBanner() {
  return (
    <div className="home-header-banner banner-tab banner-facility">
      <div className="banner-tab-body">
        <div className="banner-left">
          <h2>Cơ sở y tế</h2>
          <p>Tìm bệnh viện / phòng khám theo khu vực.</p>
          <div className="banner-actions">
            <button className="btn-primary">Tìm gần tôi</button>
            <button className="btn-secondary">Top bệnh viện</button>
          </div>
        </div>

        <div className="banner-right">
          <div className="grid">
            <div className="card">BV Bạch Mai</div>
            <div className="card">Chợ Rẫy</div>
            <div className="card">ĐH Y Dược</div>
            <div className="card">Vinmec</div>
            <div className="card">Từ Dũ</div>
            <div className="card">Nhi Đồng</div>
          </div>
        </div>
      </div>
    </div>
  );
}
