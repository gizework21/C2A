import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface NotificationPopupProps {
  notifications: {
    id: number;
    tittle: string;
    message: string;
    info: string;
    time: string;
    image: string;
  }[];
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({
  notifications,
  onClose,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-[500px] z-50"
    >
      <div className="flex justify-between items-center mb-4 p-4">
        <h2 className="font-bold text-lg">Notifications</h2>
        <button className="text-[#6C7275] text-sm hover:underline underline-offset-[2px]">
          Mark all as read
        </button>
      </div>

      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="flex items-start justify-between py-2 px-5 bg-[#C9D3A133] border-b h-16 hover:opacity-80 cursor-pointer"
          >
            <div className="w-12 h-10 bg-[#F2F2F2] rounded-full">
              <Image
                src={notification.image}
                alt={notification.tittle}
                width={40}
                height={40}
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <div className="w-[80%] h-full pl-4 flex gap-2">
              <div className="flex flex-col justify-between gap-2 w-[60%]">
                <p className="text-sm">{notification.tittle}</p>
                <p>{notification.info}</p>
              </div>
              <div className="text-xs text-gray-500 flex flex-col justify-between gap-2 w-[40%]">
                <p className="truncate">{notification.message}</p>
                <p>{notification.time}</p>
              </div>
            </div>

            <div className="h-full w-10 flex items-center justify-end">
              <ChevronRight />
            </div>
          </li>
        ))}
      </ul>

      <div className="flex w-full items-center justify-end p-4">
        <button className="text-[#6C7275] text-sm hover:underline underline-offset-[2px]">
          View More
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
