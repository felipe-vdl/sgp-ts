import React from "react";
import { useState } from "react";
import Link from "next/link";

interface ConfigsProps {
  className: string;
}

export default function Configs(props: ConfigsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(st => !st);
  }

  return (
    <div className={`border-y border-light-500 dark:border-dark-500 shadow shadow-black/20 ${props.className}`}>
      <div className="flex items-center justify-between gap-2 cursor-pointer p-2 hover:bg-slate-200 dark:hover:bg-slate-900/50" onClick={handleClick}>
        <h2 className="flex items-center gap-2 justify-center py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
          Configurações
        </h2>
        {isOpen ?
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        }
      </div>
      <div className={`flex flex-col text-sm bg-indigo-300 dark:bg-dark-500 overflow-hidden transition-all ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <Link href="/users" className="flex items-center gap-2 hover:bg-indigo-400/80 dark:hover:bg-slate-900/80 p-2 border-b border-light-500 dark:border-dark-50/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>
          <h3>Usuários</h3>
        </Link>
      </div>
    </div>
  );
}