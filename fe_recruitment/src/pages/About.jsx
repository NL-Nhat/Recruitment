import React from 'react';
import { Briefcase, Users, Target, Shield } from 'lucide-react';
import './StaticPages.css';

const About = () => {
  return (
    <div className="static-page">
      <div className="page-header text-center">
        <div className="container">
          <h1 className="page-title">Về SmartRecruit</h1>
          <p className="page-subtitle text-muted">Nền tảng tuyển dụng thông minh hàng đầu Việt Nam</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="glass-panel p-8 mb-8">
          <h2 className="section-title mb-4">Sứ mệnh của chúng tôi</h2>
          <p className="text-lg text-muted" style={{lineHeight: 1.8}}>
            SmartRecruit ra đời với sứ mệnh kết nối nhân tài với các doanh nghiệp một cách nhanh chóng, chính xác và hiệu quả nhất thông qua công nghệ trí tuệ nhân tạo (AI). Chúng tôi tin rằng, một công việc phù hợp không chỉ mang lại thu nhập mà còn là nơi để mỗi cá nhân phát huy tối đa tiềm năng của mình.
          </p>
        </div>

        <div className="grid-features mb-8">
          <div className="glass-panel p-6 text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="icon-circle mx-auto mb-4 bg-primary-light text-primary">
              <Briefcase size={24} />
            </div>
            <h3 className="font-semibold mb-2">Hàng ngàn việc làm</h3>
            <p className="text-sm text-muted">Cập nhật liên tục các cơ hội việc làm từ các công ty hàng đầu.</p>
          </div>
          
          <div className="glass-panel p-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="icon-circle mx-auto mb-4 bg-primary-light text-primary">
              <Target size={24} />
            </div>
            <h3 className="font-semibold mb-2">Đánh giá AI</h3>
            <p className="text-sm text-muted">Hệ thống AI phân tích và gợi ý mức độ phù hợp của hồ sơ.</p>
          </div>
          
          <div className="glass-panel p-6 text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="icon-circle mx-auto mb-4 bg-primary-light text-primary">
              <Users size={24} />
            </div>
            <h3 className="font-semibold mb-2">Cộng đồng lớn mạnh</h3>
            <p className="text-sm text-muted">Mạng lưới hàng triệu ứng viên và hàng ngàn nhà tuyển dụng.</p>
          </div>
          
          <div className="glass-panel p-6 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="icon-circle mx-auto mb-4 bg-primary-light text-primary">
              <Shield size={24} />
            </div>
            <h3 className="font-semibold mb-2">Bảo mật tuyệt đối</h3>
            <p className="text-sm text-muted">Thông tin cá nhân của bạn luôn được bảo vệ ở mức cao nhất.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
