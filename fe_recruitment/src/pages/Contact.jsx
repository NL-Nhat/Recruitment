import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
  };

  const contactItems = [
    {
      icon: <MapPin size={20} />,
      title: 'Địa chỉ',
      lines: ['Tầng 12, Tòa nhà Tech, 123 Đường Công Nghệ, Quận Cầu Giấy, Hà Nội'],
    },
    {
      icon: <Phone size={20} />,
      title: 'Điện thoại',
      lines: ['1900 1234 (Hotline)', '024 3333 4444 (Office)'],
    },
    {
      icon: <Mail size={20} />,
      title: 'Email',
      lines: ['contact@smartrecruit.vn', 'support@smartrecruit.vn'],
    },
    {
      icon: <Clock size={20} />,
      title: 'Giờ làm việc',
      lines: ['Thứ 2 - Thứ 6: 08:00 - 17:30', 'Thứ 7: 08:00 - 12:00'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="border-b border-border mb-12 py-12" style={{ backgroundColor: 'hsl(var(--color-primary-light) / 0.3)' }}>
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-text-base mb-2">Liên hệ</h1>
          <p className="text-text-muted">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="section-title mb-6">Thông tin liên hệ</h2>
            <div>
              {contactItems.map((item, i) => (
                <div key={i} className="flex gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 text-primary"
                    style={{ backgroundColor: 'hsl(var(--color-primary-light))' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-text-muted text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-lg">
            <h2 className="section-title mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-base">Họ và tên</label>
                <input type="text" className="form-input" placeholder="Nhập họ và tên" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-base">Email</label>
                <input type="email" className="form-input" placeholder="Nhập email" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-base">Chủ đề</label>
                <input type="text" className="form-input" placeholder="Chủ đề liên hệ" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-base">Nội dung</label>
                <textarea className="form-input" rows="5" placeholder="Nhập nội dung tin nhắn" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">Gửi tin nhắn</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
