"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState, useCallback } from "react";
import { Alert } from "./Alert";
import { AlertState } from "@/types";
import { NavButton } from "./utility/Button/NavButton";

const AuthModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/70 animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm bg-[#0d0d0d] border border-white/10 p-8 text-center shadow-2xl rounded-sm">
        <div className="w-12 h-[1px] bg-[#c19977] mx-auto mb-6 opacity-50"></div>
        <p className="text-[#c19977] uppercase tracking-[0.4em] text-[10px] mb-3">
          Login Required
        </p>
        <h2 className="text-2xl font-serif italic text-white mb-4">
          Savor the Experience
        </h2>
        <p className="text-gray-400 text-xl mb-8 leading-relaxed tracking-wide">
          To finalize your order and explore our curated flavors, please sign in
          to your Meraki Restro account.
        </p>
        <div className="space-y-3">
          <Link
            href="/login"
            className="  block w-full bg-[#c19977] py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white border hover:border-[#c19977] hover:border-width-[2px] transition-all shadow-lg active:scale-[0.98]"
          >
            Authorize Access
          </Link>
          <button
            onClick={onClose}
            className="block w-full py-3 text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};

interface BackendMenuType {
  id: number;
  name: string;
  description?: string;
  price: string;
  category: string;
  image_url?: string;
  badge?: string;
}

const MenuCard = memo(
  ({
    id,
    title,
    badge,
    cost,
    description,
    image,
  }: {
    id: number;
    title: string;
    badge?: string;
    cost: string;
    description?: string;
    image?: string;
  }) => {
    const [isOrdering, setIsOrdering] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const [alertState, setAlertState] = useState<AlertState>({
      isVisible: false,
      type: "success",
      message: "",
    });

    const showAlert = useCallback(
      (type: AlertState["type"], message: string, title?: string) => {
        setAlertState({ isVisible: true, type, message, title });
      },
      [],
    );

    const hideAlert = useCallback(() => {
      setAlertState((prev) => ({ ...prev, isVisible: false }));
    }, []);

    const handleOrder = async () => {
      if (quantity < 1) return;
      const token = localStorage.getItem("token");
      if (!token) {
        setShowAuthModal(true);
        return;
      }

      setIsOrdering(true);
      const numericPrice = parseFloat(cost.replace(/[^0-9.]/g, ""));
      const orderPayload = {
        items: [{ menu_id: id, quantity: quantity, unit_price: numericPrice }],
      };

      try {
        const response = await fetch(
          "https://meraki-cafe-restaurant-and-bar-one.vercel.app/api/orders",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(orderPayload),
          },
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to place order");
        }

        // Consistent Success Alert
        showAlert(
          "success",
          `${quantity}x ${title} has been added to your selection.`,
          "Order Placed",
        );
        setQuantity(1); // Reset quantity on success
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to place order.";
        showAlert("error", errorMessage, "Order Failed");
      } finally {
        setIsOrdering(false);
      }
    };

    return (
      <li className="-mb-10">
        <div className="menu-card hover:card">
          <div className="flex gap-5 p-4 items-start">
            {image && (
              <figure
                className="card-banner img-holder flex-shrink-0"
                style={{ width: "80px", height: "80px" }}
              >
                <Image
                  src={image}
                  width={80}
                  height={80}
                  loading="lazy"
                  alt={title}
                  className="img-cover rounded-sm"
                />
              </figure>
            )}

            <div className="flex-grow">
              <div className="title-wrapper flex justify-between items-baseline mobile:block">
                <div className="flex gap-2 items-center">
                  <h3 className="title-3">
                    <p className="card-title">{title}</p>
                  </h3>
                  {badge && <span className="badge label-1">{badge}</span>}
                </div>
                <span className="span title-2">Rs. {cost}</span>
              </div>

              {description && (
                <p className="card-text label-1 mt-1 opacity-60 line-clamp-1">
                  {description}
                </p>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3 border border-white/10 rounded-sm px-2 py-1">
                  <button
                    onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                    className="text-[#c19977] font-bold px-2 hover:scale-125 transition-transform"
                  >
                    -
                  </button>
                  <span className="label-2 min-w-[15px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-[#c19977] font-bold px-2 hover:scale-125 transition-transform"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleOrder}
                  disabled={isOrdering}
                  className=" btn-secondary px-6 py-2 label-2 uppercase tracking-widest border border-[#c19977] text-black font-bold hover:bg-black hover:text-white transition-all disabled:opacity-50"
                >
                  {isOrdering ? "Ordering" : "Order"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />

        <Alert
          type={alertState.type}
          title={alertState.title}
          message={alertState.message}
          isVisible={alertState.isVisible}
          onDismiss={hideAlert}
          autoDismiss={true}
          autoDismissDelay={5000}
        />
      </li>
    );
  },
);

MenuCard.displayName = "MenuCard";

const MenuCategory = memo(
  ({
    title,
    arr,
    className,
  }: {
    title: string;
    arr: BackendMenuType[];
    className?: string;
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Set your limit here
    const LIMIT = 4;
    
    // Use the LIMIT for the slice so it only shows 4 initially
    const itemsToShow = isExpanded ? arr : arr.slice(0, LIMIT);

    return (
      <div className={className}>
        <h2 className="headline-1 section-title text-center">{title}</h2>
        <ul className="grid-list">
          {itemsToShow.map((menu) => (
            <MenuCard
              key={menu.id}
              id={menu.id}
              title={menu.name}
              badge={menu.badge}
              cost={menu.price}
              description={menu.description}
              image={menu.image_url}
            />
          ))}
        </ul>
        
        {/* Only show button if array is longer than your limit */}
        {arr.length > LIMIT && (
          <button
            className="btn btn-primary mt-30 mx-auto"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="text text-1">
              {isExpanded ? "See Less" : "See More"}
            </span>
            <span className="text text-2" aria-hidden="true">
              {isExpanded ? "See Less" : "See More"}
            </span>
          </button>
        )}
      </div>
    );
  },
);

MenuCategory.displayName = "MenuCategory";

export const Menu = memo(() => {
  const [menuList, setMenuList] = useState<BackendMenuType[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Separate function to fetch data for a specific page
  const fetchMenu = async (pageNumber: number) => {
    try {
      const res = await fetch(
        `https://meraki-cafe-restaurant-and-bar-one.vercel.app/api/menu?page=${pageNumber}&limit=10`
      );
      const json = await res.json();
      
      const newItems = json.data || [];
      
      // Append new items to existing list
      setMenuList((prev) => [...prev, ...newItems]);
      
      // If we got fewer items than the limit, there's no more data
      setHasMore(newItems.length === 10); 
    } catch (err) {
      console.error("Failed to fetch menu:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu(1); // Initial load
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMenu(nextPage);
  };

  if (loading && menuList.length === 0)
    return <div className="section text-center"><p className="headline-1">Loading...</p></div>;

  const groupedMenu = menuList.reduce((acc: Record<string, BackendMenuType[]>, item) => {
    const category = item.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="custom-container">
        {/* ... (Header remains the same) */}

        {Object.entries(groupedMenu).map(([category, items]) => (
          <MenuCategory key={category} title={category} arr={items} className="mt-40" />
        ))}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-20">
            <button 
              onClick={handleLoadMore}
              className="btn btn-primary px-8 py-3 hover:text-black transition-colors"
              
            >
              Load More Items
            </button>
          </div>
        )}

        {/* ... (Footer images/shapes remain the same) */}
      </div>
    </section>
  );
});

Menu.displayName = "Menu";
