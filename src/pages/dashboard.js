import { getSession, useSession } from "next-auth/react";
import Dashboard from "@/components/layout/dashboard";
import { useRouter } from "next/router";

const DashboardPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/");
  }

  return <Dashboard user={session?.user}></Dashboard>;
};

export default DashboardPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
