import Link from "next/link";
import Layout from "../../components/Layouts";
import styles from "../../styles/Users.module.css";
import { useRouter } from "next/router";

export default function Users(props) {
  const { dataUsers } = props;

  const router = useRouter();

  return (
    <Layout pageTitle="User Page">
      <p className="title">Default jika link ke users</p>
      {dataUsers.map((user) => {
        return (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className={styles.card}
          >
            <p>
              {user.name} | {user.email}
            </p>
          </div>
        );
      })}

      <Link href="/users/detail">
        <a>Detail Users</a>
      </Link>
    </Layout>
  );
}

// getStaticProps: seluruh data halaman sudah disiapkan di server dan cocok digunakan untuk data yang tidak terlalu sering berubah
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await response.json();
  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
