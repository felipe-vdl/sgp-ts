import { GetServerSideProps } from 'next';
import { UserInfo } from '@/types/interfaces';

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { prisma } from '@/db';
import { User } from '@prisma/client'

import Head from 'next/head';
import Table from '@/components/Table/Table';
import { createColumnHelper } from '@tanstack/react-table';

interface RowActionsProps {
  id: number;
  user: UserInfo;
}
const RowActions = ({ id }: RowActionsProps) => {
  return (
    <div className="flex gap-2">
      <button
        className="ratio-square bg-sky-500 hover:bg-sky-700 transition-colors text-white p-2 rounded"
        title={`View user of ID: ${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg>
      </button>
      <button
        className="ratio-square bg-blue-500 hover:bg-blue-700 transition-colors text-white p-2 rounded"
        title={`Print user of ID: ${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
          <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
        </svg>
      </button>
      <button
        className="ratio-square bg-yellow-500 hover:bg-yellow-700 transition-colors text-white p-2 rounded"
        title={`Edit user of ID: ${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      </button>
      <button
        className="ratio-square bg-red-500 hover:bg-red-700 transition-colors text-white p-2 rounded"
        title={`Delete user of ID: ${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </button>
    </div>
  );
}

interface UserIndexProps {
  users: User[];
  user: UserInfo;
}
const UserCreate = ({ user, users }: UserIndexProps) => {
  const columnHelper = createColumnHelper<User>();
  const columns = [
    columnHelper.accessor("id", {
      header: 'ID',
      cell: info => info.getValue(),
      sortingFn: "basic",
      filterFn: "numToString"
    }),
    columnHelper.accessor("name", {
      header: 'Nome',
      cell: info => info.getValue(),
      sortingFn: "alphanumeric",
      filterFn: "includesString"
    }),
    columnHelper.accessor("email", {
      header: 'Email',
      cell: info => info.getValue(),
      sortingFn: "alphanumeric",
      filterFn: "includesString"
    }),
    columnHelper.accessor(row => row.createdAt.toLocaleDateString('pt-br'), {
      id: 'created_at',
      header: 'Data de Criação',
      cell: info => info.getValue(),
      sortingFn: "stringDate",
      sortDescFirst: true,
      filterFn: "includesString",
    }),
    columnHelper.display({
      id: 'actions',
      header: "Ações",
      cell: props => <RowActions id={props.row.original.id} user={user} />
    })
  ]

  return (
    <>
      <Head>
        <title>Usuários</title>
        <meta name="description" content="Sistema Gerenciador de Projetos — Prefeitura de Mesquita." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Table<User> data={users} columns={columns} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<UserIndexProps> = async (context) => {
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

    const users = await prisma.user.findMany({});

    return {
      props: {
        user: {
          id: authUser.id,
          name: authUser.name,
          email: authUser.email,
          role: authUser.role
        },
        users
      }
    }
  }
}

UserCreate.layout = "dashboard";
export default UserCreate;