"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { type MenuItem } from "@/lib/api";
import { getStoredToken } from "@/lib/clientApi";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type MenuState =
  | { status: "idle" | "loading" }
  | { status: "error"; message: string }
  | { status: "success"; items: MenuItem[]; hasMore: boolean };

export default function MenuPage() {
  const [state, setState] = useState<MenuState>({ status: "loading" });
  const [page, setPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false); // New: Tracks form submission
  
  const [form, setForm] = useState({
    id: null as number | null,
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  function resetForm() {
    setForm({ id: null, name: "", description: "", price: "", category: "" });
    setImageFile(null);
  }

  async function loadMenu(pageNumber = 1, append = false) {
    if (pageNumber === 1 && !append) setState({ status: "loading" });
    
    try {
      const res = await fetch(`${API_BASE_URL}/menu?page=${pageNumber}&limit=10`);
      const data = await res.json();
      
      if (!Array.isArray(data.data)) throw new Error("Unexpected response");

      const newItems = data.data;
      const hasMore = newItems.length === 10; 

      setState((prev) => {
        const currentItems = append && prev.status === "success" ? prev.items : [];
        return {
          status: "success",
          items: [...currentItems, ...newItems],
          hasMore,
        };
      });
      setPage(pageNumber);
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Failed to load menu items.",
      });
    }
  }

  useEffect(() => {
    loadMenu(1, false);
  }, []);

  const handleLoadMore = () => {
    loadMenu(page + 1, true);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = getStoredToken();
    if (!token) {
      alert("Admin login required");
      return;
    }

    setIsSubmitting(true); // Start loading

    const isEditing = form.id != null;
    const url = isEditing
      ? `${API_BASE_URL}/menu/${form.id}`
      : `${API_BASE_URL}/menu`;
    const method = isEditing ? "PUT" : "POST";

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("category", form.category);
    if (imageFile) formData.append("image", imageFile);

    try {
      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) throw new Error("Save failed");
      
      resetForm();
      await loadMenu(1, false); 
    } catch (err) {
      alert("Error saving item.");
    } finally {
      setIsSubmitting(false); // End loading
    }
  }

  async function handleDelete(id: number) {
    const token = getStoredToken();
    if (!token || !confirm("Are you sure you want to delete this item?"))
      return;
    try {
      await fetch(`${API_BASE_URL}/menu/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await loadMenu(1, false);
    } catch (err) {
      alert("Delete failed.");
    }
  }

  return (
    <div className="flex min-h-screen bg-[#080808] text-gray-100 selection:bg-[#791B1B]/30">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative">
        <Topbar />

        <div className="p-6 lg:p-10 relative z-10">
          <div className="mb-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#791B1B] font-semibold mb-2">Culinary Portfolio</h2>
            <h1 className="text-4xl font-serif italic tracking-tight text-white">Menu Gallery</h1>
            <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-[#791B1B] to-transparent"></div>
          </div>

          <section className="mb-16 border border-white/[0.05] bg-white/[0.01] p-8 backdrop-blur-md relative overflow-hidden group">
            <h2 className="mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500 border-b border-white/[0.05] pb-3">
              {form.id ? "Refine Selection" : "Register New Dish"}
            </h2>
            <form onSubmit={handleSubmit} className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#791B1B] font-bold">Item Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border-b border-white/10 bg-transparent py-2.5 text-sm text-white outline-none focus:border-[#791B1B] transition-all" placeholder="e.g. Signature Truffle Ramen" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#791B1B] font-bold">Category</label>
                  <input required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border-b border-white/10 bg-transparent py-2.5 text-sm text-white outline-none focus:border-[#791B1B] transition-all" placeholder="e.g. Small Plates" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#791B1B] font-bold">Price (NPR)</label>
                  <input type="number" step="1" required value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full border-b border-white/10 bg-transparent py-2.5 text-sm text-white outline-none focus:border-[#791B1B] transition-all" placeholder="00.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#791B1B] font-bold">Display Image</label>
                  <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} className="w-full text-[10px] text-gray-500 file:mr-4 file:border file:border-[#791B1B]/30 file:bg-transparent file:px-4 file:py-1.5 file:text-[9px] file:uppercase file:text-[#791B1B] cursor-pointer" />
                </div>
                <div className="sm:col-span-2 lg:col-span-3 space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#791B1B] font-bold">Composition</label>
                  <input required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full border-b border-white/10 bg-transparent py-2.5 text-sm text-white outline-none focus:border-[#791B1B] transition-all" placeholder="Describe the flavor profile..." />
                </div>
                
                <div className="flex items-end gap-3">
                   <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`flex-1 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 
                      ${isSubmitting ? "bg-[#791B1B]/50 cursor-not-allowed text-black/50" : "bg-[#791B1B] text-black hover:bg-[#d4b580]"}`}
                   >
                     {isSubmitting ? (
                       <>
                         <div className="h-3 w-3 animate-spin border-2 border-black/20 border-t-black rounded-full"></div>
                         Processing
                       </>
                     ) : (
                       form.id ? "Sync Changes" : "Confirm Entry"
                     )}
                   </button>
                   {form.id && !isSubmitting && (
                     <button type="button" onClick={resetForm} className="bg-white/5 px-5 py-3.5 text-[11px] text-gray-400 border border-white/10 hover:bg-white/10 transition-all">✕</button>
                   )}
                </div>
            </form>
          </section>

          <section>
            {state.status === "loading" && (
              <div className="flex flex-col items-center justify-center py-32 space-y-4">
                <div className="h-10 w-10 animate-spin border-[1px] border-[#791B1B] border-t-transparent rounded-full"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 animate-pulse">Accessing Registry</p>
              </div>
            )}
            
            {state.status === "success" && (
              <>
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {state.items.map((item) => (
                    <article key={item.id} className="group relative border border-white/[0.05] bg-zinc-950/40 p-4 transition-all hover:border-[#791B1B]/40">
                      <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden bg-black">
                        {item.image_url ? (
                          <Image src={item.image_url} alt={item.name} fill className="object-cover opacity-80 grayscale-[0.5] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[9px] uppercase tracking-[0.3em] text-zinc-800">Visual Missing</div>
                        )}
                        <div className="absolute top-0 right-0 bg-[#791B1B] px-3 py-1.5 text-[10px] font-bold text-black tracking-tighter">NPR {Number(item.price)}</div>
                      </div>
                      <h3 className="font-serif italic text-xl text-white group-hover:text-[#791B1B] transition-colors">{item.name}</h3>
                      <p className="text-[12px] leading-relaxed text-gray-500 line-clamp-3 mt-2">{item.description}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-white/[0.05] pt-5">
                        <button onClick={() => setForm({ id: item.id, name: item.name, description: item.description, price: String(item.price), category: item.category })} className="text-[9px] uppercase tracking-[0.3em] text-gray-500 hover:text-[#791B1B]">Modify</button>
                        <button onClick={() => handleDelete(item.id)} className="text-[9px] uppercase tracking-[0.3em] text-zinc-800 hover:text-red-500">Eliminate</button>
                      </div>
                    </article>
                  ))}
                </div>

                {state.hasMore && (
                   <div className="mt-16 text-center">
                     <button onClick={handleLoadMore} className="border border-[#791B1B] px-8 py-3 text-[10px] uppercase tracking-[0.3em] text-[#791B1B] hover:bg-[#791B1B] hover:text-black transition-all">
                       Load More Items
                     </button>
                   </div>
                )}
              </>
            )}
          </section>

          <footer className="mt-24 border-t border-white/[0.05] pt-12 text-center">
            <p className="text-[9px] uppercase tracking-[0.6em] text-gray-700">Meraki Restro Culinary Registry • Kathmandu</p>
          </footer>
        </div>
      </main>
    </div>
  );
}