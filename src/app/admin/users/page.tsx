import React from 'react';
import { Typography } from '@/components/shared/Typography';
import { ShieldCheck, MoreVertical, KeyRound, Ban } from 'lucide-react';

const users = [
    { id: "UID_XYZ123", name: "Varun Mahajan", phone: "9915255710", role: "admin", status: "Active" },
    { id: "UID_DEF456", name: "Amit Sir", phone: "98144XXXXX", role: "teacher", status: "Active" },
    { id: "UID_GHI789", name: "Sunita Parent", phone: "98765XXXXX", role: "parent", status: "Active" },
    { id: "UID_JKL012", name: "Rajat Student", phone: "88776XXXXX", role: "student", status: "Pending Registration" },
    { id: "UID_MNO345", name: "Unknown", phone: "99887XXXXX", role: "unassigned", status: "Requires Approval" },
];

export default function UsersManager() {
    return (
        <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
                <div>
                    <Typography variant="h2" className="text-2xl md:text-3xl mb-1">Access Control</Typography>
                    <Typography variant="body" className="text-text-secondary text-sm">Manage roles and permissions mapping to Firebase.</Typography>
                </div>
            </div>

            <div className="flex-1 bg-bg-secondary border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-text-secondary border-collapse">
                        <thead className="text-xs text-text-tertiary uppercase bg-bg-primary/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-5 font-semibold">User Profile</th>
                                <th className="px-6 py-5 font-semibold">Contact (Phone/Auth)</th>
                                <th className="px-6 py-5 font-semibold">System Role</th>
                                <th className="px-6 py-5 font-semibold">Status</th>
                                <th className="px-6 py-5 text-right font-semibold">Admin Overrides</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-bg-primary/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-bg-primary border border-border flex items-center justify-center font-bold text-accent-primary text-xs">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-text-primary">{user.name}</div>
                                                <div className="text-[10px] text-text-tertiary tracking-wider font-mono mt-0.5">{user.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs">{user.phone}</td>
                                    <td className="px-6 py-4">
                                        <span className={`flex items-center gap-1.5 w-max text-xs font-semibold px-2.5 py-1.5 rounded-md border 
                                            ${user.role === 'admin' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 
                                              user.role === 'teacher' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                                              user.role === 'parent' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                              user.role === 'student' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                                              'bg-zinc-800 text-zinc-400 border-zinc-700'}`
                                        }>
                                            {user.role === 'admin' && <ShieldCheck size={14} />} 
                                            {user.role === 'teacher' && <KeyRound size={14} />}
                                            {user.role.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-medium">
                                        {user.status === "Active" ? (
                                            <span className="text-emerald-500 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active</span>
                                        ) : user.status === "Requires Approval" ? (
                                            <span className="text-amber-500 animate-pulse">Needs Auth Override</span>
                                        ) : (
                                            <span className="text-text-tertiary">{user.status}</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {user.role === 'unassigned' && (
                                                <button className="text-xs bg-accent-primary hover:bg-accent-secondary text-white px-3 py-1.5 rounded-full font-medium transition-colors">
                                                    Assign Role
                                                </button>
                                            )}
                                            {user.role !== 'admin' && (
                                                <button className="text-text-tertiary hover:text-red-400 p-2 transition-colors" title="Revoke Access">
                                                    <Ban size={16} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
