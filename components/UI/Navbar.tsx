import sgpLogo from "../../assets/logo-sgp.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import Router from 'next/router';

export default function Navbar() {
  const { data, status } = useSession();
  
  console.log(data);

  const handleSignOut = async () => {
    await signOut({redirect: false});
    Router.push('/login');
  }

  return (
    <header className={`flex justify-between items-center px-6 bg-dourado text-white text-2xl font-bold z-10 shadow shadow-black/30`}>
      <Link href="/">
        <Image
          src={sgpLogo}
          width={250}
          alt="Mesquita SGP"
          className="py-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] w-[190px] sm:w-[230px] md:w-[250px]"
        />
      </Link>
      <ul className="flex gap-6 relative self-stretch items-center">
        {status === "unauthenticated" &&
          <>
            <li>
              <Link href="/login">LOGIN</Link>
            </li>
          </>
        }
        <ThemeToggler />
        {status === "authenticated" &&
          <>
            <div className="peer self-stretch flex items-center">
              <button className="aspect-square bg-roxo px-4 py-2 rounded-full text-4xl">{data.user.name.charAt(0)}</button>
            </div>
            <div className="w-[8rem] font-light absolute left-[-1.2rem] border border-t-0 dark:border-dark-500 shadow shadow-black/30 z-10 top-[5.45rem] sm:top-[6.25rem] md:top-[6.7rem] text-base hidden peer-hover:flex hover:flex flex-col items-end text-light-50 bg-light-500 dark:bg-dark-500 dark:text-dark-50">
              <Link className="text-end p-2 hover:bg-light-900 dark:hover:bg-dark-900 border-b light:border-light-500 dark:border-dark-900 w-full" href="/changepassword">Alterar Senha</Link>
              <button className="text-end w-full p-2 hover:bg-light-900 dark:hover:bg-dark-900" onClick={handleSignOut}>Sair</button>
            </div>
          </>
        }
      </ul>
    </header>
  );
}