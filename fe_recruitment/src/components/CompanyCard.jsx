import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Briefcase } from 'lucide-react';
import './CompanyCard.css';

const CompanyCard = ({ company, jobCount = 0 }) => {
  return (
    <div className="company-card glass-panel animate-fade-in">
      <div className="company-card-header flex gap-4 items-center">
        {company.logo ? (
          <img src={company.logo} alt={company.name} className="company-logo-large" />
        ) : (
          <div className="company-logo-placeholder flex items-center justify-center bg-gray-100 rounded-md" style={{width: 64, height: 64}}>
            <Briefcase className="text-muted" size={24} />
          </div>
        )}
        <div>
          <Link to={`/companies/${company.id}`}>
            <h3 className="company-title">{company.name}</h3>
          </Link>
          <div className="company-meta flex gap-4 text-muted mt-1">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{company.address?.split(',').pop().trim() || 'Việt Nam'}</span>
            </div>
            {company.website && (
              <div className="flex items-center gap-1">
                <Globe size={14} />
                <a href={company.website} target="_blank" rel="noreferrer" className="website-link">Website</a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <p className="company-desc text-muted">
        {company.description?.length > 100 
          ? `${company.description.substring(0, 100)}...` 
          : company.description}
      </p>
      
      <div className="company-card-footer flex justify-between items-center">
        <div className="job-count-badge">
          <Briefcase size={14} />
          <span>{jobCount} việc làm đang tuyển</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
