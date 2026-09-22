import React from 'react';
import { Briefcase, Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="border-b border-border mb-12 py-12" style={{ backgroundColor: 'hsl(var(--color-primary-light) / 0.3)' }}>
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-text-base mb-2">Về SmartRecruit</h1>
          <p className="text-text-muted">Nền tảng tuyển dụng thông minh hàng đầu Việt Nam</p>
        </div>
      </div>

      <div className="container py-10">
        {/* Mission */}
        <div className="glass-panel p-8 rounded-lg mb-8">
          <h2 className="section-title mb-4">Sứ mệnh của chúng tôi</h2>
          <p className="text-lg text-text-muted" style={{ lineHeight: 1.8 }}>
            SmartRecruit ra đời với sứ mệnh kết nối nhân tài với các doanh nghiệp một cách nhanh chóng, chính xác và hiệu quả nhất thông qua công nghệ trí tuệ nhân tạo (AI). Chúng tôi tin rằng, một công việc phù hợp không chỉ mang lại thu nhập mà còn là nơi để mỗi cá nhân phát huy tối đa tiềm năng của mình.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {[
            { icon: <Briefcase size={24} />, title: 'Hàng ngàn việc làm', desc: 'Cập nhật liên tục các cơ hội việc làm từ các công ty hàng đầu.', delay: '0.1s' },
            { icon: <Target size={24} />, title: 'Đánh giá AI', desc: 'Hệ thống AI phân tích và gợi ý mức độ phù hợp của hồ sơ.', delay: '0.2s' },
            { icon: <Users size={24} />, title: 'Cộng đồng lớn mạnh', desc: 'Mạng lưới hàng triệu ứng viên và hàng ngàn nhà tuyển dụng.', delay: '0.3s' },
            { icon: <Shield size={24} />, title: 'Bảo mật tuyệt đối', desc: 'Thông tin cá nhân của bạn luôn được bảo vệ ở mức cao nhất.', delay: '0.4s' },
          ].map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: item.delay }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary"
                style={{ backgroundColor: 'hsl(var(--color-primary-light))' }}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
