import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, DollarSign, Clock, Briefcase, Building, ChevronLeft, Users } from 'lucide-react';
import { getJobById, getJobs } from '../mock/mockData';
import JobCard from '../components/JobCard';

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
    <div className="min-h-screen bg-background">
      {/* Header section */}
      <div className="border-b border-border py-12" style={{ background: 'linear-gradient(135deg, hsl(var(--color-primary) / 0.05) 0%, hsl(var(--color-background)) 100%)' }}>
        <div className="container">
          <button onClick={() => navigate(-1)} className="btn btn-outline mb-6">
            <ChevronLeft size={16} /> Quay lại
          </button>

          <div className="glass-panel p-8 rounded-xl">
            <div className="flex gap-6 items-start">
              {job.company?.logo && (
                <img
                  src={job.company.logo}
                  alt={job.company.name}
                  className="w-24 h-24 rounded-lg object-contain bg-white border border-border p-2 shrink-0"
                />
              )}
              <div className="flex-1">
                <h1 className="text-3xl font-extrabold text-text-base mb-1 leading-tight">{job.title}</h1>
                <Link to={`/companies/${job.company?.id}`} className="text-lg font-semibold text-primary hover:underline">
                  {job.company?.name}
                </Link>
                {job.industry && (
                  <p className="text-text-muted mt-1">{job.industry.name}</p>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="text-text-muted shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted mb-1">Mức lương</p>
                      <p className="text-[0.95rem] font-semibold text-text-base">{(job.minSalary / 1000000).toFixed(0)} - {(job.maxSalary / 1000000).toFixed(0)} Triệu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-text-muted shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted mb-1">Địa điểm</p>
                      <p className="text-[0.95rem] font-semibold text-text-base">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-text-muted shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted mb-1">Hình thức</p>
                      <p className="text-[0.95rem] font-semibold text-text-base">{job.type}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="text-text-muted shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-text-muted mb-1">Đã ứng tuyển</p>
                      <p className="text-[0.95rem] font-semibold text-text-base">{job.appliedCount} / {job.totalPositions}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[250px] shrink-0">
                <button className="btn btn-primary w-full py-3 text-lg mb-2">Ứng tuyển ngay</button>
                <p className="text-center text-text-muted text-sm flex items-center justify-center gap-1">
                  <Clock size={14} /> Hạn nộp: {new Date(job.deadline).toLocaleDateString('vi-VN')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-6 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 items-start">
        {/* Main column */}
        <div>
          <div className="glass-panel p-6 rounded-lg mb-6">
            <h2 className="section-title">Kỹ năng yêu cầu</h2>
            <div className="mt-4">
              {job.skills?.map(skill => (
                <span
                  key={skill.id}
                  className="inline-block px-4 py-2 rounded-md font-medium mr-3 mb-3 text-sm"
                  style={{ backgroundColor: 'hsl(var(--color-primary-light) / 0.5)', color: 'hsl(var(--color-primary))' }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 rounded-lg mb-6">
            <h2 className="section-title">Mô tả công việc</h2>
            <div className="rich-text mt-4">
              <p>{job.description}</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-lg mb-6">
            <h2 className="section-title">Yêu cầu ứng viên</h2>
            <div className="rich-text mt-4">
              <p>{job.requirements}</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-lg mb-6">
            <h2 className="section-title">Quyền lợi</h2>
            <div className="rich-text mt-4">
              <p>{job.benefits}</p>
            </div>
          </div>
        </div>

        {/* Side column */}
        <div>
          {/* Company Summary */}
          <div className="glass-panel p-6 rounded-lg mb-6">
            <h3 className="section-title text-lg mb-4">Về công ty</h3>
            <div className="flex items-center gap-3 mb-4">
              {job.company?.logo ? (
                <img src={job.company.logo} alt={job.company.name} className="w-10 h-10 rounded-md object-contain border border-border" />
              ) : (
                <Building className="text-text-muted" />
              )}
              <Link to={`/companies/${job.company?.id}`} className="font-semibold hover:text-primary transition-colors">{job.company?.name}</Link>
            </div>
            <p className="text-text-muted text-sm mb-4 line-clamp-3">{job.company?.description}</p>
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
