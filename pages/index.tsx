import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]';
import { prisma } from "../db";
import Head from "next/head";

interface IndexProps {
  user: {
    id: number,
    name: string;
    email: string;
    role: string;
  }
}

const IndexPage = ({ user }: IndexProps) => {
  return (
    <>
      <Head>
        <title>SGP Dashboard</title>
      </Head>
      <div className="m-auto">
        <h1 className="font-medium text-3xl">Olá, {user.name.split(" ")[0]}.</h1>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async context => {
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

IndexPage.layout = "dashboard";
export default IndexPage;