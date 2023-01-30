import { useState } from "react";

export default function ({ group }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(st => !st);
  }

  return (
    <div key={`${group.id}-${group.name}`} className="border-b border-light-500 dark:border-dark-500 shadow shadow-black/20">
      <div className="flex items-center justify-between gap-2 cursor-pointer p-2 hover:bg-slate-200 dark:hover:bg-slate-900/50" onClick={handleClick}>
        <h2 className="py-1">{group.name}</h2>
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
        <a href="#" className="flex items-center gap-2 hover:bg-indigo-400/80 dark:hover:bg-slate-900/80 p-2 border-b border-light-500 dark:border-dark-50/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
          </svg>
          <h3>Projetos</h3>
        </a>
        <a href="#" className="flex items-center gap-2 hover:bg-indigo-400/80 dark:hover:bg-slate-900/80 p-2 border-light-500 dark:border-dark-500/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>
          <h3>Membros</h3>
        </a>
      </div>
    </div>
  );
}