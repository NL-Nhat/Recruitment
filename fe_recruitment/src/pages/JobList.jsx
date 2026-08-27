import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { getJobs, industries } from '../mock/mockData';
import JobCard from '../components/JobCard';
import './JobList.css';

const ITEMS_PER_PAGE = 6;

const JobList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialKeyword = searchParams.get('keyword') || '';
  const initialLocation = searchParams.get('location') || '';
  const initialIndustry = searchParams.get('industry') || '';

  const [keyword, setKeyword] = useState(initialKeyword);
  const [location, setLocation] = useState(initialLocation);
  const [industry, setIndustry] = useState(initialIndustry);
  const [type, setType] = useState('');
  
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let allJobs = getJobs();
    
    if (initialKeyword) {
      allJobs = allJobs.filter(j => 
        j.title.toLowerCase().includes(initialKeyword.toLowerCase()) || 
        j.company?.name.toLowerCase().includes(initialKeyword.toLowerCase())
      );
    }
    
    if (initialLocation) {
      allJobs = allJobs.filter(j => j.location.includes(initialLocation));
    }

    if (initialIndustry) {
      allJobs = allJobs.filter(j => j.industryId === parseInt(initialIndustry));
    }

    if (type) {
      allJobs = allJobs.filter(j => j.type === type);
    }

    setJobs(allJobs);
    setCurrentPage(1); // Reset page on filter change
  }, [initialKeyword, initialLocation, initialIndustry, type]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (keyword) params.keyword = keyword;
    if (location) params.location = location;
    if (industry) params.industry = industry;
    setSearchParams(params);
  };

  // Pagination logic
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const currentJobs = jobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="job-list-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Tìm Việc Làm</h1>
          <p className="page-subtitle text-muted">Khám phá hàng ngàn cơ hội việc làm mới nhất</p>
        </div>
      </div>

      <div className="container list-container">
        {/* Search Sidebar / Top bar */}
        <div className="search-filter-section glass-panel">
          <form className="filter-form" onSubmit={handleSearch}>
            <div className="filter-group">
              <label><Search size={16} /> Từ khóa</label>
              <input 
                type="text" 
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Tiêu đề, kỹ năng, công ty..."
                className="filter-input"
              />
            </div>
            
            <div className="filter-group">
              <label><MapPin size={16} /> Địa điểm</label>
              <select 
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="filter-input"
              >
                <option value="">Tất cả địa điểm</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="TP.HCM">TP.HCM</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
              </select>
            </div>

            <div className="filter-group">
              <label><Briefcase size={16} /> Ngành nghề</label>
              <select 
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                className="filter-input"
              >
                <option value="">Tất cả ngành nghề</option>
                {industries.map(ind => (
                  <option key={ind.id} value={ind.id}>{ind.name}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label><Briefcase size={16} /> Hình thức</label>
              <select 
                value={type}
                onChange={e => setType(e.target.value)}
                className="filter-input"
              >
                <option value="">Tất cả hình thức</option>
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Online">Online</option>
                <option value="Intern">Intern</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-full">Tìm kiếm</button>
          </form>
        </div>

        {/* Results */}
        <div className="results-section">
          <div className="results-header flex justify-between items-center mb-6">
            <h2 className="results-count">Tìm thấy <span className="text-primary">{jobs.length}</span> việc làm phù hợp</h2>
            <select className="sort-select">
              <option value="newest">Mới nhất</option>
              <option value="salary-desc">Lương cao nhất</option>
            </select>
          </div>

          <div className="jobs-list">
            {currentJobs.length > 0 ? (
              currentJobs.map(job => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="no-results text-center py-10">
                <p className="text-muted">Không tìm thấy việc làm phù hợp với tiêu chí của bạn.</p>
              </div>
            )}
          </div>
          
          {totalPages > 1 && (
            <div className="pagination flex justify-center items-center gap-2 mt-8">
              <button 
                className="page-btn" 
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeft size={16} />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page}
                  className={`page-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              
              <button 
                className="page-btn" 
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
