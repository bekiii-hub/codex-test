import { useLocalStorage } from '../hooks/useLocalStorage';
import type { OnboardedLeader } from '../types';

export function Onboarded() {
  const [leaders] = useLocalStorage<OnboardedLeader[]>('onboarded', []);

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">Name</th>
          <th className="border-b p-2">Phone</th>
          <th className="border-b p-2">Location</th>
          <th className="border-b p-2">Upgrade Date</th>
        </tr>
      </thead>
      <tbody>
        {leaders.map((l) => (
          <tr key={l.id} className="border-b hover:bg-gray-50">
            <td className="p-2">{l.name}</td>
            <td className="p-2">{l.phone}</td>
            <td className="p-2">{l.location}</td>
            <td className="p-2">{l.upgradeDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
