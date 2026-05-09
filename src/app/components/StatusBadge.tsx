import { useDesign } from '../context/DesignContext';
import { Badge } from './ui/badge';

type Status = 'Applied' | 'Under Review' | 'Rejected' | 'Accepted' | 'Active' | 'Closed';

interface StatusBadgeProps {
  status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  if (isWireframe) {
    return (
      <Badge variant="outline" className="border-2 border-gray-400">
        {status}
      </Badge>
    );
  }

  const statusStyles: Record<Status, string> = {
    Applied: 'bg-blue-100 text-blue-800 border-blue-300',
    'Under Review': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Rejected: 'bg-red-100 text-red-800 border-red-300',
    Accepted: 'bg-green-100 text-green-800 border-green-300',
    Active: 'bg-green-100 text-green-800 border-green-300',
    Closed: 'bg-gray-100 text-gray-800 border-gray-300',
  };

  return (
    <Badge variant="outline" className={statusStyles[status]}>
      {status}
    </Badge>
  );
}
