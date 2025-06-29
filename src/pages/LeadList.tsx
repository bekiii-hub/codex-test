import { useState } from 'react';
import { Button } from '../components/ui/button';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Lead } from '../types';
import { normalizePhone } from '../lib/utils';

export function LeadList() {
  const [leads, setLeads] = useLocalStorage<Lead[]>('leads', []);
  const [form, setForm] = useState({ name: '', phone: '', location: '' });

  const addLead = () => {
    const newLead: Lead = {
      id: Date.now().toString(),
      name: form.name,
      phone: normalizePhone(form.phone),
      location: form.location,
      status: 'Not contacted',
      source: 'From List',
    };
    setLeads([...leads, newLead]);
    setForm({ name: '', phone: '', location: '' });
  };

  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <input
          className="border px-2 py-1 rounded-chip"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border px-2 py-1 rounded-chip"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          className="border px-2 py-1 rounded-chip"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <Button type="button" onClick={addLead}>
          Add Lead
        </Button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Phone</th>
            <th className="border-b p-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{lead.name}</td>
              <td className="p-2">{lead.phone}</td>
              <td className="p-2">{lead.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
