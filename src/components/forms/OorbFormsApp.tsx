import React, { useState } from 'react';
import FormDashboard from './FormDashboard';
import FormBuilder from './FormBuilder';

type View = 'dashboard' | 'builder' | 'responses';

const OorbFormsApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [currentFormId, setCurrentFormId] = useState<string | null>(null);

  const handleCreateForm = () => {
    setCurrentFormId(null);
    setCurrentView('builder');
  };

  const handleEditForm = (formId: string) => {
    setCurrentFormId(formId);
    setCurrentView('builder');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setCurrentFormId(null);
  };

  switch (currentView) {
    case 'dashboard':
      return (
        <FormDashboard 
          onCreateForm={handleCreateForm}
          onEditForm={handleEditForm}
        />
      );
    
    case 'builder':
      return <FormBuilder />;
    
    default:
      return (
        <FormDashboard 
          onCreateForm={handleCreateForm}
          onEditForm={handleEditForm}
        />
      );
  }
};

export default OorbFormsApp;