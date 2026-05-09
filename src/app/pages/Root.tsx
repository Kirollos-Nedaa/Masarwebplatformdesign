import { Outlet } from 'react-router';
import { DesignProvider, useDesign } from '../context/DesignContext';
import { Button } from '../components/ui/button';
import { Palette } from 'lucide-react';

function DesignToggle() {
  const { mode, setMode } = useDesign();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setMode(mode === 'wireframe' ? 'highfidelity' : 'wireframe')}
        className="bg-[#2563EB] hover:bg-[#1d4ed8] shadow-lg gap-2"
      >
        <Palette className="h-4 w-4" />
        {mode === 'wireframe' ? 'High Fidelity' : 'Wireframe'} Mode
      </Button>
    </div>
  );
}

function RootContent() {
  const { mode } = useDesign();
  const isWireframe = mode === 'wireframe';

  return (
    <div className={isWireframe ? 'bg-gray-100 min-h-screen' : 'bg-[#F8FAFC] min-h-screen'}>
      <Outlet />
      <DesignToggle />
    </div>
  );
}

export default function Root() {
  return (
    <DesignProvider>
      <RootContent />
    </DesignProvider>
  );
}
