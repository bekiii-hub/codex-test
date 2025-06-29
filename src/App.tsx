import { useState } from 'react';
import './index.css';
import { TabNav } from './components/TabNav';
import type { Tab } from './components/TabNav';
import { LeadList } from './pages/LeadList';
import { Onboarded } from './pages/Onboarded';
import { SalesTeam } from './pages/SalesTeam';
import { PerformanceDashboard } from './pages/PerformanceDashboard';
import { DailyCheckin } from './pages/DailyCheckin';

function App() {
  const [tab, setTab] = useState<Tab>('Lead List');

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-primary text-center">ChipChip Super Group Leader Tracker</h1>
      <TabNav active={tab} onChange={setTab} />
      {tab === 'Lead List' && <LeadList />}
      {tab === 'Onboarded' && <Onboarded />}
      {tab === 'Sales Team' && <SalesTeam />}
      {tab === 'Performance' && <PerformanceDashboard />}
      {tab === 'Daily Check-In' && <DailyCheckin />}
    </div>
  );
}

export default App;
