import { getSession, signOut, useSession } from "next-auth/react";
import Dashboard from "@/components/layout/dashboard";
import { useRouter } from "next/router";

const DashboardPage = ({ surveys, users }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/");
  }

  const personalDetails = users.filter(
    (detail) => detail.email === session?.user.email
  )[0];

  if (!personalDetails) {
    signOut("/register");
  }

  return (
    <Dashboard
      user={personalDetails}
      surveys={surveys}
      users={users}
    ></Dashboard>
  );
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

  const surveyJSON = await fetch(
    "https://foshizi.herokuapp.com/api/getallsurveys"
  );
  const surveys = await surveyJSON.json();

  const usersData = await fetch(
    "https://foshizi.herokuapp.com/api/getallusers"
  );
  const { data: users } = await usersData.json();

  return {
    props: {
      session,
      surveys,
      users,
    },
  };
};
