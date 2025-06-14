import { MessageSquare, Newspaper, Baby, Calendar } from "lucide-react";
import { Link, useLocation } from "wouter";
import { TOTAL_UNREAD_COUNT } from "@/lib/constants";

export function BottomNavbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", icon: Newspaper, label: "Story" },
    { href: "/profile", icon: Calendar, label: "Events" },
    { href: "/messages", icon: MessageSquare, label: "Messages" },
    { href: "/alerts", icon: Baby, label: "Children", hasNotification: TOTAL_UNREAD_COUNT > 0 },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-2 px-4 lg:hidden z-20 relative w-full max-w-full">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          
          return (
            <div key={item.href} className="flex-1 text-center">
              <Link 
                href={item.href}
                className={`flex flex-col items-center p-2 rounded-md transition-colors ${
                  isActive 
                    ? "text-primary" 
                    : "text-gray-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
                }`}
              >
                <div className="relative">
                  <Icon className="h-6 w-6" />
                  {item.hasNotification && (
                    <div className="absolute -top-1 -right-1 bg-red-500 rounded-full h-2 w-2"></div>
                  )}
                </div>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </footer>
  );
}