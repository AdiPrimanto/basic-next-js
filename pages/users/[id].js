// import { useRouter } from "next/router";
import Layout from "../../components/Layouts";

export default function UserDetail(props) {
  // const router = useRouter();
  // const { id } = router.query;

  const { user } = props;

  return (
    <Layout pageTitle="User Detail">
      <p>User Detail Page</p>
      {/* <p>User detail {id}</p>
      <p>User detail {id}</p> */}
      <hr />
      <p>User {user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      {/* <p>{user?.website}</p> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await response.json();

  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
      // convert number to string with backtik
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const user = await response.json();

  return {
    props: {
      user: user,
    },
  };
}
