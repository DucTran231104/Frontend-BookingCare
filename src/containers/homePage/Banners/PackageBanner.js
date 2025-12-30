import React from "react";

export default function PackageBanner() {
  return (
    <div className="home-header-banner banner-tab banner-package">
      <div className="banner-tab-body">
        <div className="banner-left">
          <h2>Gói khám</h2>
          <p>Chọn gói khám tổng quát / tầm soát nhanh.</p>
          <div className="banner-actions">
            <button className="btn-primary">Gói hot</button>
            <button className="btn-secondary">Tầm soát</button>
          </div>
        </div>

        <div className="banner-right">
          <div className="grid">
            <div className="card">Gói tổng quát</div>
            <div className="card">Gói tim mạch</div>
            <div className="card">Gói tiểu đường</div>
            <div className="card">Gói ung thư</div>
            <div className="card">Gói phụ khoa</div>
            <div className="card">Gói nhi</div>
          </div>
        </div>
      </div>
    </div>
  );
}
