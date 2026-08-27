import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { getJobs, companies } from '../mock/mockData';
import JobCard from '../components/JobCard';
import CompanyCard from '../components/CompanyCard';
import './Home.css';

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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Tìm kiếm công việc <span className="text-primary">Mơ ước</span> của bạn
            </h1>
            <p className="hero-subtitle">
              Nền tảng tuyển dụng thông minh với công nghệ AI hỗ trợ đánh giá ứng viên chuyên sâu.
            </p>
            
            <form className="search-form glass-panel" onSubmit={handleSearch}>
              <div className="search-input-group">
                <Search className="search-icon text-muted" size={20} />
                <input 
                  type="text" 
                  placeholder="Tiêu đề công việc, kỹ năng, tên công ty..." 
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="search-divider"></div>
              <div className="search-input-group">
                <MapPin className="search-icon text-muted" size={20} />
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="search-input"
                >
                  <option value="">Tất cả địa điểm</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP.HCM">TP.HCM</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary search-btn">Tìm việc ngay</button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header flex justify-between items-center">
            <h2 className="section-title">Việc làm <span className="text-primary">Nổi bật</span></h2>
            <button onClick={() => navigate('/jobs')} className="btn btn-outline">Xem tất cả</button>
          </div>
          
          <div className="jobs-grid">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Section */}
      <section className="section">
        <div className="container">
          <div className="section-header flex justify-between items-center">
            <h2 className="section-title">Công ty <span className="text-primary">Hàng đầu</span></h2>
            <button onClick={() => navigate('/companies')} className="btn btn-outline">Xem tất cả</button>
          </div>
          
          <div className="companies-grid">
            {featuredCompanies.map(company => {
              const count = allJobs.filter(j => j.companyId === company.id).length;
              return <CompanyCard key={company.id} company={company} jobCount={count} />
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
