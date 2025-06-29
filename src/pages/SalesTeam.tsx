import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Salesperson } from '../types';

export function SalesTeam() {
  const [team] = useLocalStorage<Salesperson[]>('sales-team', []);

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">Name</th>
          <th className="border-b p-2">Phone</th>
          <th className="border-b p-2">Region</th>
        </tr>
      </thead>
      <tbody>
        {team.map((s) => (
          <tr key={s.id} className="border-b hover:bg-gray-50">
            <td className="p-2">{s.name}</td>
            <td className="p-2">{s.phone}</td>
            <td className="p-2">{s.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
