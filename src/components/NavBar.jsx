import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  Search,
  Bell,
  Moon,
  MessageCircle,
  Home,
  Heart,
  Trophy,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { name: "Discover", icon: <Home size={18} /> },
  { name: "Matches", icon: <Heart size={18} /> },
  { name: "Chat", icon: <MessageCircle size={18} /> },
  { name: "Leaderboard", icon: <Trophy size={18} /> },
];

const NavBar = () => {
  const user = useSelector((store) => store.User);
  console.log(user);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-2xl border-b border-white/10">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        {/* ---------------- Logo ---------------- */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 shadow-[0_0_35px_rgba(168,85,247,.6)]">
            🤖
          </div>

          <div>
            <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              DevTinder
            </h1>

            <p className="text-xs text-gray-400 tracking-[4px]">
              FIND • CONNECT • BUILD
            </p>
          </div>
        </motion.div>

        {/* ---------------- Center ---------------- */}

        <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}>
              {item.icon}

              {item.name}

              {index !== 0 && (
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 group-hover:w-3/4"></span>
              )}
            </motion.button>
          ))}
        </div>

        {/* ---------------- Right ---------------- */}

        <div className="flex items-center gap-3">
          {[<Search size={20} />, <Moon size={20} />, <Bell size={20} />].map(
            (icon, index) => (
              <motion.button
                key={index}
                whileHover={{
                  scale: 1.08,
                  rotate: index === 2 ? 10 : 0,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-xl transition hover:bg-white/10 hover:text-white">
                {icon}

                {index === 2 && (
                  <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></span>
                )}
              </motion.button>
            ),
          )}

          {/* Avatar */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-pink-500/30 bg-white/5 px-2 py-1 backdrop-blur-xl hover:border-pink-500">
              <div className="avatar online">
                {user && (
                  <div className="w-14 rounded-2xl ring ring-pink-500 ring-offset-2 ring-offset-[#0B0F19]">
                    <img src={user.photoUrl} />
                  </div>
                )}
              </div>

              <ChevronDown size={18} className="mr-1 text-gray-400" />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[100] mt-5 w-72 rounded-3xl border border-white/10 bg-[#121826]/95 p-3 shadow-2xl backdrop-blur-3xl">
              <div className="mb-3 flex items-center gap-4 border-b border-white/10 pb-4">
                <img
                  src="https://i.pravatar.cc/300?img=12"
                  className="h-14 w-14 rounded-2xl"
                />

                <div>
                  <h2 className="font-bold text-white">Prakritish</h2>

                  <p className="text-sm text-pink-400">Full Stack Developer</p>
                </div>
              </div>

              <li>
                <a>👤 My Profile</a>
              </li>
              <li>
                <a>📊 Dashboard</a>
              </li>
              <li>
                <a>⚙ Settings</a>
              </li>
              <li>
                <a>⭐ Saved Developers</a>
              </li>

              <div className="divider my-2"></div>

              <li>
                <a className="text-red-400">🚪 Logout</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
