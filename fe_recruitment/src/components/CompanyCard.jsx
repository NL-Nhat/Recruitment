import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Briefcase } from 'lucide-react';

const CompanyCard = ({ company, jobCount = 0 }) => {
  return (
    <div className="p-6 rounded-lg transition-all duration-300 flex flex-col gap-5 bg-white glass-panel animate-fade-in hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex gap-4 items-center">
        {company.logo ? (
          <img
            src={company.logo}
            alt={company.name}
            className="w-16 h-16 rounded-md object-contain border border-border p-1 shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded-md flex items-center justify-center bg-gray-100 shrink-0">
            <Briefcase className="text-text-muted" size={24} />
          </div>
        )}
        <div>
          <Link to={`/companies/${company.id}`}>
            <h3 className="text-lg font-semibold text-text-base hover:text-primary transition-colors">{company.name}</h3>
          </Link>
          <div className="flex gap-4 text-text-muted text-[0.85rem] mt-1">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{company.address?.split(',').pop().trim() || 'Việt Nam'}</span>
            </div>
            {company.website && (
              <div className="flex items-center gap-1">
                <Globe size={14} />
                <a href={company.website} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline">Website</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[0.9rem] text-text-muted leading-relaxed flex-1">
        {company.description?.length > 100
          ? `${company.description.substring(0, 100)}...`
          : company.description}
      </p>

      {/* Footer */}
      <div className="border-t border-dashed border-border pt-4 flex justify-between items-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-[0.85rem] font-medium"
          style={{ backgroundColor: 'hsl(var(--color-primary-light) / 0.5)', color: 'hsl(var(--color-primary))' }}
        >
          <Briefcase size={14} />
          <span>{jobCount} việc làm đang tuyển</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
