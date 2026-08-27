import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { companies, getJobs } from '../mock/mockData';
import CompanyCard from '../components/CompanyCard';

const ITEMS_PER_PAGE = 8;

const CompanyList = () => {
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter logic
  const filteredCompanies = companies.filter(c => 
    c.name.toLowerCase().includes(keyword.toLowerCase()) || 
    c.description.toLowerCase().includes(keyword.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
  const currentCompanies = filteredCompanies.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="job-list-page">
      <div className="page-header">
        <div className="container text-center">
          <h1 className="page-title">Danh Sách Công Ty</h1>
          <p className="page-subtitle text-muted">Khám phá văn hóa và cơ hội tại các công ty hàng đầu</p>
        </div>
      </div>

      <div className="container py-10" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="glass-panel p-6 mb-8 text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          <form className="flex gap-2" onSubmit={handleSearch}>
            <div className="search-input-group flex-1" style={{ border: '1px solid hsl(var(--color-border))', borderRadius: 'var(--radius-md)' }}>
              <Search className="search-icon text-muted" size={20} style={{ marginLeft: '1rem' }} />
              <input 
                type="text" 
                value={keyword}
                onChange={e => {
                  setKeyword(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Tìm kiếm tên công ty..."
                className="search-input"
                style={{ padding: '0.75rem 1rem' }}
              />
            </div>
            <button type="submit" className="btn btn-primary">Tìm kiếm</button>
          </form>
        </div>

        <div className="results-header flex justify-between items-center mb-6">
          <h2 className="results-count">Tìm thấy <span className="text-primary">{filteredCompanies.length}</span> công ty</h2>
        </div>

        <div className="companies-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {currentCompanies.length > 0 ? (
            currentCompanies.map(company => {
              const allJobs = getJobs();
              const count = allJobs.filter(j => j.companyId === company.id).length;
              return <CompanyCard key={company.id} company={company} jobCount={count} />
            })
          ) : (
            <div className="no-results text-center py-10" style={{ gridColumn: '1 / -1' }}>
              <p className="text-muted">Không tìm thấy công ty nào phù hợp.</p>
            </div>
          )}
        </div>
        
        {totalPages > 1 && (
          <div className="pagination flex justify-center items-center gap-2 mt-10">
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
  );
};

export default CompanyList;
