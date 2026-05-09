import React, { createContext, useContext, useState, ReactNode } from 'react';

type DesignMode = 'wireframe' | 'highfidelity';

interface DesignContextType {
  mode: DesignMode;
  setMode: (mode: DesignMode) => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<DesignMode>('highfidelity');

  return (
    <DesignContext.Provider value={{ mode, setMode }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesign() {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
}
