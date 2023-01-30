import { useState, useEffect } from "react";

import Group from "./Group";
import Configs from "./Configs";

export default function Sidebar() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch('/api/user/get-user', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      setAuthUser(data);
    }

    getUserData();
  }, []);

  const groups = [
    { id: 1, name: "Desenvolvimento" },
    { id: 2, name: "Infraestrutura" },
    { id: 2, name: "Suporte" },
  ]
  return (
    <div className="bg-light-900 text-light-50 dark:text-dark-50 dark:bg-dark-900 z-10 shadow shadow-black/30 flex">
      <ul className="flex flex-col border-r border-light-500 dark:border-dark-500 min-w-[14rem]">
        {groups.map(group => (
          <Group key={`${group.name}-${group.id}`} group={group} />
        ))}
        {
          authUser && authUser.role === "STAFF" && <Configs className="mt-auto" />
        }
      </ul>
    </div>
  );
}