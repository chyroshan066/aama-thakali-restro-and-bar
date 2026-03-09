'use client';

import { useEffect, useState, useMemo } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Topbar } from "../../components/Topbar";
import { getStoredToken } from "../../lib/clientApi";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Subscriber {
  id: number;
  email: string;
  subscribed_at: string;
}

type SubscribersState =
  | { status: "idle" | "loading" }
  | { status: "error"; message: string }
  | { status: "success"; subscribers: Subscriber[] };

export default function SubscribersPage() {
  const [state, setState] = useState<SubscribersState>({ status: "loading" });
  const [searchQuery, setSearchQuery] = useState("");

  async function loadSubscribers() {
    setState({ status: "loading" });
    try {
      const token = getStoredToken();
      const res = await fetch(`${API_BASE_URL}/subscribers`, {
        headers: { 
          Authorization: `Bearer ${token}` 
        }
      });
      
      if (!res.ok) throw new Error("Could not sync with the registry.");
      
      const data = await res.json();
      setState({ status: "success", subscribers: data.data || [] });
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Failed to load the registry."
      });
    }
  }

  useEffect(() => { loadSubscribers(); }, []);

  // Instant filtering logic
  const filteredSubscribers = useMemo(() => {
    if (state.status !== "success") return [];
    return state.status === "success" 
      ? state.subscribers.filter(s => s.email.toLowerCase().includes(searchQuery.toLowerCase()))
      : [];
  }, [state, searchQuery]);

  return (
    <div className="flex min-h-screen bg-[#080808] text-gray-100 selection:bg-[#c19977]/30">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Topbar />
        
        <div className="p-6 lg:p-10">
          {/* Branded Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#c19977] font-semibold mb-2">
                Marketing Outreach
              </h2>
              <h1 className="text-4xl font-serif italic tracking-tight text-white"> Subscribers </h1>
              <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-[#c19977] to-transparent"></div>
            </div>

            {/* Search Input */}
            <div className="relative group w-full md:w-80">
              <input
                type="text"
                placeholder="Search by identity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/50 border border-white/10 px-4 py-2.5 text-[11px] text-white focus:outline-none focus:border-[#c19977]/50 transition-all placeholder:text-gray-600 font-light"
              />
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c19977] transition-all duration-300 group-focus-within:w-full"></div>
            </div>
          </div>

          {state.status === "loading" && (
            <div className="flex h-96 flex-col items-center justify-center space-y-4">
               <div className="h-10 w-10 animate-spin border-[1px] border-[#c19977] border-t-transparent rounded-full"></div>
               <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 animate-pulse">Synchronizing Registry...</p>
            </div>
          )}

          {state.status === "error" && (
            <div className="border border-rose-950/30 bg-rose-950/5 p-8 text-rose-400 text-xs tracking-widest uppercase text-center">
              System Alert: {state.message}
            </div>
          )}

          {state.status === "success" && (
            <div className="overflow-x-auto border border-white/[0.05] bg-zinc-950/20 backdrop-blur-sm">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.01]">
                    <th className="px-6 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Ref ID</th>
                    <th className="px-6 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Subscriber Identity</th>
                    <th className="px-6 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 text-right">Date Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {filteredSubscribers.length > 0 ? (
                    filteredSubscribers.map((s) => (
                      <tr key={s.id} className="group transition-colors hover:bg-white/[0.02]">
                        <td className="px-6 py-5 font-mono text-[14px] text-[#c19977]/60">#{s.id}</td>
                        <td className="px-6 py-5">
                          <p className="text-sm font-medium text-white group-hover:text-[#c19977] transition-colors">
                            {s.email}
                          </p>
                          <p className="text-[9px] text-gray-600 uppercase tracking-widest mt-1">Confirmed Subscriber</p>
                        </td>
                        <td className="px-6 py-5 text-right font-mono text-[11px] text-gray-500">
                          {new Date(s.subscribed_at).toLocaleDateString('en-GB', { 
                            day: '2-digit', 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-32 text-center">
                        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-700">No matching identities in the ledger</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
          
          <footer className="mt-24 text-center">
              <p className="text-[9px] uppercase tracking-[0.6em] text-gray-800">Precision • Connectivity • Gurung BBQ</p>
          </footer>
        </div>
      </main>
    </div>
  );
}