import { Button } from './ui/button';

const tabs = [
  'Lead List',
  'Onboarded',
  'Sales Team',
  'Performance',
  'Daily Check-In',
] as const;

export type Tab = typeof tabs[number];

export function TabNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <Button
          key={tab}
          onClick={() => onChange(tab)}
          className={active === tab ? 'bg-primary text-white' : 'bg-gray-200 text-black'}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
}
