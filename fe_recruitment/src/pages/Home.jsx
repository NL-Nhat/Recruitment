import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { getJobs, companies } from '../mock/mockData';
import JobCard from '../components/JobCard';
import CompanyCard from '../components/CompanyCard';

const Home = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/jobs?keyword=${keyword}&location=${location}`);
  };

  const allJobs = getJobs();
  const featuredJobs = allJobs.slice(0, 6);
  const featuredCompanies = companies.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 text-center" style={{ background: 'linear-gradient(135deg, hsl(var(--color-primary-light) / 0.8) 0%, hsl(var(--color-background)) 100%)' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-extrabold leading-tight mb-6 text-text-base">
              Tìm kiếm công việc <span className="text-primary">Mơ ước</span> của bạn
            </h1>
            <p className="text-xl text-text-muted mb-12">
              Nền tảng tuyển dụng thông minh với công nghệ AI hỗ trợ đánh giá ứng viên chuyên sâu.
            </p>

            <form className="glass-panel flex flex-col md:flex-row md:items-center p-2 rounded-xl" onSubmit={handleSearch}>
              <div className="flex items-center flex-1 px-4 py-2 gap-3">
                <Search className="text-text-muted shrink-0" size={20} />
                <input
                  type="text"
                  placeholder="Tiêu đề công việc, kỹ năng, tên công ty..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="border-none outline-none w-full text-base bg-transparent text-text-base font-[inherit]"
                />
              </div>
              <div className="hidden md:block w-px h-8 bg-border"></div>
              <div className="flex items-center flex-1 px-4 py-2 gap-3">
                <MapPin className="text-text-muted shrink-0" size={20} />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-none outline-none w-full text-base bg-transparent text-text-base font-[inherit]"
                >
                  <option value="">Tất cả địa điểm</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP.HCM">TP.HCM</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary px-8 py-4 rounded-[calc(1rem-0.5rem)] text-base mt-2 md:mt-0">
                Tìm việc ngay
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Việc làm <span className="text-primary">Nổi bật</span></h2>
            <button onClick={() => navigate('/jobs')} className="btn btn-outline">Xem tất cả</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Công ty <span className="text-primary">Hàng đầu</span></h2>
            <button onClick={() => navigate('/companies')} className="btn btn-outline">Xem tất cả</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCompanies.map(company => {
              const count = allJobs.filter(j => j.companyId === company.id).length;
              return <CompanyCard key={company.id} company={company} jobCount={count} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
