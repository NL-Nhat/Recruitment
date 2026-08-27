import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './StaticPages.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
  };

  return (
    <div className="static-page">
      <div className="page-header text-center">
        <div className="container">
          <h1 className="page-title">Liên hệ</h1>
          <p className="page-subtitle text-muted">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title mb-6">Thông tin liên hệ</h2>
            
            <div className="info-list">
              <div className="info-item flex gap-4 mb-6">
                <div className="icon-circle bg-primary-light text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Địa chỉ</h4>
                  <p className="text-muted text-sm">Tầng 12, Tòa nhà Tech, 123 Đường Công Nghệ, Quận Cầu Giấy, Hà Nội</p>
                </div>
              </div>
              
              <div className="info-item flex gap-4 mb-6">
                <div className="icon-circle bg-primary-light text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Điện thoại</h4>
                  <p className="text-muted text-sm">1900 1234 (Hotline)</p>
                  <p className="text-muted text-sm">024 3333 4444 (Office)</p>
                </div>
              </div>
              
              <div className="info-item flex gap-4 mb-6">
                <div className="icon-circle bg-primary-light text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted text-sm">contact@smartrecruit.vn</p>
                  <p className="text-muted text-sm">support@smartrecruit.vn</p>
                </div>
              </div>
              
              <div className="info-item flex gap-4">
                <div className="icon-circle bg-primary-light text-primary flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Giờ làm việc</h4>
                  <p className="text-muted text-sm">Thứ 2 - Thứ 6: 08:00 - 17:30</p>
                  <p className="text-muted text-sm">Thứ 7: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-panel p-8">
            <h2 className="section-title mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label>Họ và tên</label>
                <input type="text" className="form-input" placeholder="Nhập họ và tên" required />
              </div>
              
              <div className="form-group mb-4">
                <label>Email</label>
                <input type="email" className="form-input" placeholder="Nhập email" required />
              </div>
              
              <div className="form-group mb-4">
                <label>Chủ đề</label>
                <input type="text" className="form-input" placeholder="Chủ đề liên hệ" required />
              </div>
              
              <div className="form-group mb-6">
                <label>Nội dung</label>
                <textarea className="form-input" rows="5" placeholder="Nhập nội dung tin nhắn" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">Gửi tin nhắn</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
