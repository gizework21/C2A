"use client";
import { useState } from "react";
import NotificationPopup from "./notification-popup";
import { Bell } from "lucide-react";

interface VendorHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const notifications = [
  {
    id: 1,
    tittle: "Low Stock",
    message: "iPhone 15 pro max",
    info: "10 pieces left",
    time: "15 min ago",
    image:
      "https://plus.unsplash.com/premium_photo-1679086008007-dded8f7d26a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    tittle: "Customer left a review",
    message:
      "I like this phone but it got so hot that I could fry an egg on it",
    info: "10 pieces left",
    time: "6h ago",
    image:
      "https://images.unsplash.com/photo-1585150317860-4ed3b34da0e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    tittle: "Return Request",
    message: "Approved",
    info: "10 pieces left",
    time: "3h ago",
    image:
      "https://plus.unsplash.com/premium_photo-1679086008007-dded8f7d26a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    tittle: "Low Stock",
    message: "iPhone 15 pro max",
    info: "10 pieces left",
    time: "15 min ago",
    image:
      "https://images.unsplash.com/photo-1585150317860-4ed3b34da0e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const VendorHeader = ({ title, icon }: VendorHeaderProps) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="flex w-full justify-between my-6 relative">
      <h1 className="montserrat text-[22px] font-bold">{title}</h1>

      <button
        onClick={togglePopup}
        className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#ECECEC] outline-none"
      >
        {icon ?? <Bell size={24} />}
      </button>

      {isPopupVisible && (
        <NotificationPopup
          notifications={notifications}
          onClose={() => setIsPopupVisible(false)}
        />
      )}
    </div>
  );
};

export default VendorHeader;
