import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, DollarSign, Clock, Briefcase, Building, ChevronLeft, Users } from 'lucide-react';
import { getJobById, getJobs } from '../mock/mockData';
import JobCard from '../components/JobCard';
import './JobDetail.css';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);

  useEffect(() => {
    const jobData = getJobById(id);
    if (jobData) {
      setJob(jobData);
      
      // Get related jobs from same company or with same skills
      const allJobs = getJobs();
      const related = allJobs
        .filter(j => j.id !== jobData.id && (j.companyId === jobData.companyId || j.requiredSkills.some(s => jobData.requiredSkills.includes(s))))
        .slice(0, 3);
      setRelatedJobs(related);
    } else {
      // Redirect if not found
      navigate('/jobs');
    }
  }, [id, navigate]);

  if (!job) return <div className="container py-10 text-center">Loading...</div>;

  return (
    <div className="job-detail-page bg-light">
      {/* Header section */}
      <div className="job-header">
        <div className="container">
          <button onClick={() => navigate(-1)} className="btn btn-outline back-btn mb-6">
            <ChevronLeft size={16} /> Quay lại
          </button>
          
          <div className="job-header-content glass-panel">
            <div className="flex gap-6 items-start">
              {job.company?.logo && (
                <img src={job.company.logo} alt={job.company.name} className="company-logo-huge" />
              )}
              <div className="flex-1">
                <h1 className="job-title-large">{job.title}</h1>
                <Link to={`/companies/${job.company?.id}`} className="company-name-link text-primary">
                  {job.company?.name}
                </Link>
                {job.industry && (
                  <p className="text-muted mt-1">{job.industry.name}</p>
                )}
                
                <div className="job-meta-grid mt-4">
                  <div className="meta-item">
                    <DollarSign className="text-muted" size={18} />
                    <div>
                      <p className="meta-label text-muted">Mức lương</p>
                      <p className="meta-value font-semibold">{(job.minSalary / 1000000).toFixed(0)} - {(job.maxSalary / 1000000).toFixed(0)} Triệu</p>
                    </div>
                  </div>
                  <div className="meta-item">
                    <MapPin className="text-muted" size={18} />
                    <div>
                      <p className="meta-label text-muted">Địa điểm</p>
                      <p className="meta-value font-semibold">{job.location}</p>
                    </div>
                  </div>
                  <div className="meta-item">
                    <Briefcase className="text-muted" size={18} />
                    <div>
                      <p className="meta-label text-muted">Hình thức</p>
                      <p className="meta-value font-semibold">{job.type}</p>
                    </div>
                  </div>
                  <div className="meta-item">
                    <Users className="text-muted" size={18} />
                    <div>
                      <p className="meta-label text-muted">Đã ứng tuyển</p>
                      <p className="meta-value font-semibold">{job.appliedCount} / {job.totalPositions}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="apply-section">
                <button className="btn btn-primary btn-large w-full mb-2">Ứng tuyển ngay</button>
                <p className="text-center text-muted text-sm flex items-center justify-center gap-1">
                  <Clock size={14} /> Hạn nộp: {new Date(job.deadline).toLocaleDateString('vi-VN')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container content-container mt-6">
        <div className="main-col">
          <div className="glass-panel p-6 mb-6">
            <h2 className="section-title">Kỹ năng yêu cầu</h2>
            <div className="skills-tags mt-4">
              {job.skills?.map(skill => (
                <span key={skill.id} className="skill-badge-large">{skill.name}</span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 mb-6">
            <h2 className="section-title">Mô tả công việc</h2>
            <div className="rich-text mt-4">
              <p>{job.description}</p>
            </div>
          </div>

          <div className="glass-panel p-6 mb-6">
            <h2 className="section-title">Yêu cầu ứng viên</h2>
            <div className="rich-text mt-4">
              <p>{job.requirements}</p>
            </div>
          </div>

          <div className="glass-panel p-6 mb-6">
            <h2 className="section-title">Quyền lợi</h2>
            <div className="rich-text mt-4">
              <p>{job.benefits}</p>
            </div>
          </div>
        </div>

        <div className="side-col">
          {/* Company Summary */}
          <div className="glass-panel p-6 mb-6">
            <h3 className="section-title text-lg mb-4">Về công ty</h3>
            <div className="flex items-center gap-3 mb-4">
              {job.company?.logo ? (
                <img src={job.company.logo} alt={job.company.name} className="company-logo" style={{width: 40, height: 40}} />
              ) : (
                <Building className="text-muted" />
              )}
              <Link to={`/companies/${job.company?.id}`} className="font-semibold">{job.company?.name}</Link>
            </div>
            <p className="text-muted text-sm mb-4 line-clamp-3">{job.company?.description}</p>
            <Link to={`/companies/${job.company?.id}`} className="text-primary text-sm font-semibold hover:underline">Xem trang công ty</Link>
          </div>

          {/* Related Jobs */}
          {relatedJobs.length > 0 && (
            <div>
              <h3 className="section-title text-lg mb-4">Việc làm liên quan</h3>
              <div className="flex flex-col gap-4">
                {relatedJobs.map(rJob => (
                  <JobCard key={rJob.id} job={rJob} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
