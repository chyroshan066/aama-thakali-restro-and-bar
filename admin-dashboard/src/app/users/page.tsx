"use client";

import { useEffect, useState, useMemo } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { fetchUsers, type User } from "@/lib/api"; 
import { getStoredToken } from "@/lib/clientApi"; 

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const token = getStoredToken(); 
        const res = await fetchUsers({ token: token ?? undefined });
        
        if (res && res.data) {
          setUsers(res.data);
        }
      } catch (err) {
        console.error("Registry Sync Error:", err);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  // Filter logic for the search bar
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const query = searchQuery.toLowerCase();
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        (user.phone_no && user.phone_no.includes(query))
      );
    });
  }, [users, searchQuery]);

  return (
    <div className="flex min-h-screen bg-[#080808] text-gray-100 selection:bg-[#791B1B]/30">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <Topbar />

        <div className="p-6 lg:p-10">
          {/* Header & Search Bar */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#791B1B] font-semibold mb-2">
                Member Registry
              </h2>
              <h1 className="text-4xl font-serif italic tracking-tight text-white">System Users</h1>
              <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-[#791B1B] to-transparent"></div>
            </div>

            <div className="relative group w-full md:w-80">
              <input
                type="text"
                placeholder="Search by name, email or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/50 border border-white/10 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#791B1B]/50 transition-all placeholder:text-gray-600 font-light"
              />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#791B1B] transition-all duration-300 group-focus-within:w-full"></div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-white/[0.05] bg-zinc-950/20 backdrop-blur-sm">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.01]">
                  <th className="registry-tr">Ref. ID</th>
                  <th className="registry-tr">Identity</th>
                  <th className="registry-tr">Contact Details</th>
                  <th className="registry-tr text-center">Role</th>
                  <th className="registry-tr text-right">Registration Date</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/[0.03]">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-32 text-center">
                       <div className="inline-block h-8 w-8 animate-spin border border-[#791B1B] border-t-transparent rounded-full"></div>
                    </td>
                  </tr>
                ) : filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-5 font-mono text-[15px] text-[#791B1B]/60">#{user.id}</td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-white group-hover:text-[#791B1B] transition-colors">{user.name}</p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-white group-hover:text-[#791B1B] transition-colors">{user.email}</p>
                        <p className="text-[11px] font-mono text-[#791B1B] mt-1">{user.phone_no || "—"}</p>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className={`px-3 py-1 text-[9px] uppercase tracking-widest border ${
                          user.role === 'admin' ? 'border-[#791B1B] text-[#791B1B]' : 'border-white/10 text-gray-500'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <p className="text-sm font-medium text-white group-hover:text-[#791B1B] transition-colors">
                          {new Date(user.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </p>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-24 text-center text-[10px] uppercase tracking-widest text-gray-600 italic">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}