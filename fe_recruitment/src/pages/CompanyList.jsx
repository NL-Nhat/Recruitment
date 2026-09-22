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
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="border-b border-border mb-12 py-12" style={{ backgroundColor: 'hsl(var(--color-primary-light) / 0.3)' }}>
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-text-base mb-2">Danh Sách Công Ty</h1>
          <p className="text-text-muted">Khám phá văn hóa và cơ hội tại các công ty hàng đầu</p>
        </div>
      </div>

      <div className="container py-10 max-w-[1000px] mx-auto">
        {/* Search */}
        <div className="glass-panel p-6 mb-8 max-w-[600px] mx-auto rounded-lg">
          <form className="flex gap-2" onSubmit={handleSearch}>
            <div className="flex items-center flex-1 border border-border rounded-md">
              <Search className="text-text-muted ml-4 shrink-0" size={20} />
              <input
                type="text"
                value={keyword}
                onChange={e => {
                  setKeyword(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Tìm kiếm tên công ty..."
                className="border-none outline-none w-full text-base bg-transparent text-text-base px-4 py-3 font-[inherit]"
              />
            </div>
            <button type="submit" className="btn btn-primary">Tìm kiếm</button>
          </form>
        </div>

        {/* Results count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            Tìm thấy <span className="text-primary">{filteredCompanies.length}</span> công ty
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {currentCompanies.length > 0 ? (
            currentCompanies.map(company => {
              const allJobs = getJobs();
              const count = allJobs.filter(j => j.companyId === company.id).length;
              return <CompanyCard key={company.id} company={company} jobCount={count} />;
            })
          ) : (
            <div className="text-center py-10 col-span-full">
              <p className="text-text-muted">Không tìm thấy công ty nào phù hợp.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
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
