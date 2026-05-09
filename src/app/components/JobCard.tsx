import { Bookmark, MapPin, Clock, Building2, DollarSign } from 'lucide-react';
import { Link } from 'react-router';
import { useDesign } from '../context/DesignContext';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary?: string;
    postedDate: string;
    description: string;
    saved?: boolean;
  };
  onSave?: (id: string) => void;
}

export function JobCard({ job, onSave }: JobCardProps) {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  const cardStyles = isWireframe
    ? 'bg-white border-2 border-gray-400 p-4'
    : 'bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow rounded-lg';

  const badgeVariant = isWireframe ? 'outline' : 'secondary';

  return (
    <div className={cardStyles}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <Link to={`/jobs/${job.id}`}>
            <h3
              className={
                isWireframe
                  ? 'text-lg font-bold text-black mb-2'
                  : 'text-lg font-semibold text-[#0F172A] hover:text-[#2563EB] mb-2'
              }
            >
              {job.title}
            </h3>
          </Link>
          <div className="flex items-center gap-2 mb-3">
            {!isWireframe && <Building2 className="h-4 w-4 text-gray-500" />}
            <span className={isWireframe ? 'text-black' : 'text-gray-700'}>{job.company}</span>
          </div>

          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1">
              {!isWireframe && <MapPin className="h-4 w-4 text-gray-500" />}
              <span className={isWireframe ? 'text-black' : 'text-gray-600'}>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              {!isWireframe && <Clock className="h-4 w-4 text-gray-500" />}
              <span className={isWireframe ? 'text-black' : 'text-gray-600'}>{job.postedDate}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-1">
                {!isWireframe && <DollarSign className="h-4 w-4 text-gray-500" />}
                <span className={isWireframe ? 'text-black' : 'text-gray-600'}>{job.salary}</span>
              </div>
            )}
          </div>

          <p className={isWireframe ? 'text-black text-sm mb-4' : 'text-gray-600 text-sm mb-4 line-clamp-2'}>
            {job.description}
          </p>

          <div className="flex gap-2">
            <Badge variant={badgeVariant} className={isWireframe ? 'border-gray-400' : ''}>
              {job.type}
            </Badge>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onSave?.(job.id)}
          className={isWireframe ? 'border border-gray-400' : ''}
        >
          <Bookmark className={job.saved && !isWireframe ? 'fill-[#2563EB] text-[#2563EB]' : 'text-gray-500'} />
        </Button>
      </div>
    </div>
  );
}
