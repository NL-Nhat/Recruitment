import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock, Users } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="p-6 rounded-lg transition-all duration-300 flex flex-col gap-5 cursor-pointer bg-white glass-panel animate-fade-in hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-4">
          {job.company && (
            <img
              src={job.company.logo}
              alt={job.company.name}
              className="w-12 h-12 rounded-md object-contain border border-border p-1 bg-white shrink-0"
            />
          )}
          <div>
            <Link to={`/jobs/${job.id}`}>
              <h3 className="text-lg font-semibold text-text-base mb-1 hover:text-primary transition-colors">{job.title}</h3>
            </Link>
            {job.company && (
              <Link to={`/companies/${job.company.id}`}>
                <p className="text-sm text-text-muted hover:underline">{job.company.name}</p>
              </Link>
            )}
            {job.industry && (
              <p className="text-text-muted text-sm mt-1">{job.industry.name}</p>
            )}
          </div>
        </div>
        <div
          className="text-xs font-semibold px-3 py-1 rounded-full h-fit"
          style={{ backgroundColor: 'hsl(var(--color-primary-light))', color: 'hsl(var(--color-primary))' }}
        >
          {job.type}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 text-text-muted">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-primary">
          <DollarSign size={16} />
          <span>{(job.minSalary / 1000000).toFixed(0)} - {(job.maxSalary / 1000000).toFixed(0)} Triệu</span>
        </div>
        <div className="flex items-center gap-2 text-text-muted">
          <Clock size={16} />
          <span>Hạn nộp: {new Date(job.deadline).toLocaleDateString('vi-VN')}</span>
        </div>
      </div>

      {/* Applied count */}
      <div className="flex gap-4 text-text-muted text-[0.85rem]">
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>Đã nộp: {job.appliedCount} / {job.totalPositions}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-dashed border-border pt-4 flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {job.skills && job.skills.slice(0, 3).map(skill => (
            <span
              key={skill.id}
              className="px-2 py-1 rounded-sm text-xs border border-border text-text-muted"
              style={{ backgroundColor: 'hsl(var(--color-background))' }}
            >
              {skill.name}
            </span>
          ))}
          {job.skills && job.skills.length > 3 && (
            <span
              className="px-2 py-1 rounded-sm text-xs border border-border text-text-muted"
              style={{ backgroundColor: 'hsl(var(--color-background))' }}
            >
              +{job.skills.length - 3}
            </span>
          )}
        </div>
        <Link to={`/jobs/${job.id}`} className="btn btn-outline text-sm py-1.5 px-4">Chi tiết</Link>
      </div>
    </div>
  );
};

export default JobCard;
