import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Globe, Phone, ChevronLeft, Briefcase } from 'lucide-react';
import { getCompanyById, getJobs } from '../mock/mockData';
import JobCard from '../components/JobCard';

const CompanyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    const compData = getCompanyById(id);
    if (compData) {
      setCompany(compData);

      const allJobs = getJobs();
      const jobs = allJobs.filter(j => j.companyId === compData.id);
      setCompanyJobs(jobs);
    } else {
      navigate('/companies');
    }
  }, [id, navigate]);

  if (!company) return <div className="container py-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-background">
      {/* Cover banner */}
      <div className="h-[200px] pt-8" style={{ background: 'linear-gradient(135deg, hsl(var(--color-primary)) 0%, hsl(var(--color-secondary)) 100%)' }}>
        <div className="container">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline mb-6"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
          >
            <ChevronLeft size={16} /> Quay lại
          </button>
        </div>
      </div>

      <div className="container -mt-20">
        {/* Company header card */}
        <div className="glass-panel p-8 rounded-xl shadow-lg bg-white">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-[120px] h-[120px] rounded-lg bg-white p-2 shadow-sm border border-border shrink-0 -mt-10 md:mt-0">
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Briefcase size={48} className="text-text-muted" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-text-base">{company.name}</h1>

              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin size={18} />
                  <span>{company.address}</span>
                </div>
                {company.website && (
                  <div className="flex items-center gap-2 text-text-muted">
                    <Globe size={18} />
                    <a href={company.website} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{company.website}</a>
                  </div>
                )}
                {company.phone && (
                  <div className="flex items-center gap-2 text-text-muted">
                    <Phone size={18} />
                    <span>{company.phone}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'hsl(0 0% 98%)' }}>
              <p className="text-[1.875rem] font-bold text-primary">{companyJobs.length}</p>
              <p className="text-text-muted text-sm mt-1">Việc làm đang mở</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-[900px] mx-auto mt-8">
          <div className="glass-panel p-8 rounded-lg mb-8">
            <h2 className="section-title mb-6">Giới thiệu công ty</h2>
            <div className="rich-text">
              <p>{company.description}</p>
            </div>
          </div>

          <div>
            <h2 className="section-title mb-6">Việc làm đang tuyển ({companyJobs.length})</h2>
            <div className="flex flex-col gap-6">
              {companyJobs.length > 0 ? (
                companyJobs.map(job => <JobCard key={job.id} job={job} />)
              ) : (
                <div className="glass-panel p-8 text-center text-text-muted rounded-lg">
                  Công ty hiện chưa có tin tuyển dụng nào đang mở.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
