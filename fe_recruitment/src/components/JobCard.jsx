import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock, Users } from 'lucide-react';
import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card glass-panel animate-fade-in">
      <div className="job-card-header flex justify-between">
        <div className="job-company-info flex gap-4">
          {job.company && (
            <img src={job.company.logo} alt={job.company.name} className="company-logo" />
          )}
          <div>
            <Link to={`/jobs/${job.id}`}>
              <h3 className="job-title">{job.title}</h3>
            </Link>
            {job.company && (
              <Link to={`/companies/${job.company.id}`}>
                <p className="company-name text-muted">{job.company.name}</p>
              </Link>
            )}
            {job.industry && (
              <p className="text-muted text-sm mt-1">{job.industry.name}</p>
            )}
          </div>
        </div>
        <div className="job-type-badge">
          {job.type}
        </div>
      </div>
      
      <div className="job-details flex gap-4">
        <div className="detail-item flex items-center gap-2 text-muted">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className="detail-item flex items-center gap-2 text-primary">
          <DollarSign size={16} />
          <span>{(job.minSalary / 1000000).toFixed(0)} - {(job.maxSalary / 1000000).toFixed(0)} Triệu</span>
        </div>
        <div className="detail-item flex items-center gap-2 text-muted">
          <Clock size={16} />
          <span>Hạn nộp: {new Date(job.deadline).toLocaleDateString('vi-VN')}</span>
        </div>
      </div>

      <div className="job-stats flex gap-4 text-muted" style={{marginTop: '0.5rem', fontSize: '0.85rem'}}>
        <div className="detail-item flex items-center gap-2">
          <Users size={16} />
          <span>Đã nộp: {job.appliedCount} / {job.totalPositions}</span>
        </div>
      </div>
      
      <div className="job-card-footer flex justify-between items-center">
        <div className="job-skills flex gap-2">
          {job.skills && job.skills.slice(0, 3).map(skill => (
            <span key={skill.id} className="skill-badge">{skill.name}</span>
          ))}
          {job.skills && job.skills.length > 3 && (
            <span className="skill-badge">+{job.skills.length - 3}</span>
          )}
        </div>
        <Link to={`/jobs/${job.id}`} className="btn btn-outline btn-apply">Chi tiết</Link>
      </div>
    </div>
  );
};

export default JobCard;
