import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { getJobs, industries } from '../mock/mockData';
import JobCard from '../components/JobCard';

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
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="border-b border-border mb-12 py-12" style={{ backgroundColor: 'hsl(var(--color-primary-light) / 0.3)' }}>
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-text-base mb-2">Tìm Việc Làm</h1>
          <p className="text-text-muted">Khám phá hàng ngàn cơ hội việc làm mới nhất</p>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
        {/* Search Sidebar */}
        <div className="glass-panel p-6 rounded-lg sticky top-20">
          <form className="flex flex-col gap-6" onSubmit={handleSearch}>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 font-semibold text-sm text-text-base">
                <Search size={16} /> Từ khóa
              </label>
              <input
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Tiêu đề, kỹ năng, công ty..."
                className="filter-input"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 font-semibold text-sm text-text-base">
                <MapPin size={16} /> Địa điểm
              </label>
              <select value={location} onChange={e => setLocation(e.target.value)} className="filter-input">
                <option value="">Tất cả địa điểm</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="TP.HCM">TP.HCM</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 font-semibold text-sm text-text-base">
                <Briefcase size={16} /> Ngành nghề
              </label>
              <select value={industry} onChange={e => setIndustry(e.target.value)} className="filter-input">
                <option value="">Tất cả ngành nghề</option>
                {industries.map(ind => (
                  <option key={ind.id} value={ind.id}>{ind.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 font-semibold text-sm text-text-base">
                <Briefcase size={16} /> Hình thức
              </label>
              <select value={type} onChange={e => setType(e.target.value)} className="filter-input">
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
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Tìm thấy <span className="text-primary">{jobs.length}</span> việc làm phù hợp
            </h2>
            <select className="px-4 py-2 border border-border rounded-md outline-none text-sm">
              <option value="newest">Mới nhất</option>
              <option value="salary-desc">Lương cao nhất</option>
            </select>
          </div>

          <div className="flex flex-col gap-6">
            {currentJobs.length > 0 ? (
              currentJobs.map(job => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="text-center py-10">
                <p className="text-text-muted">Không tìm thấy việc làm phù hợp với tiêu chí của bạn.</p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
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
