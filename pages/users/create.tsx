import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getServerSession, User } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

import { prisma } from '@/db';
import { UserInfo } from '@/types/interfaces';

interface UserCreateProps {
  user: UserInfo
}

const UserCreate = ({user}: UserCreateProps) => {
  return (
    <>
      <Head>
        <title>Novo Usuário</title>
        <meta name="description" content="Sistema Gerenciador de Projetos — Prefeitura de Mesquita." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form action="/users/create" method="POST">
        New user
      </form>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<UserCreateProps> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      },
      props: {}
    }
  } else {
    const authUser = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      }
    });

    return {
      props: {
        user: {
          id: authUser.id,
          name: authUser.name,
          email: authUser.email,
          role: authUser.role
        }
      }
    }
  }
}

UserCreate.layout = "dashboard";
export default UserCreate;