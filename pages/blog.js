import Layout from "../components/Layouts";
import styles from "../styles/Blog.module.css";

export default function Blog(props) {
  const { dataBlog } = props;

  return (
    <Layout pageTitle="Blog Page">
      <p className="title">Blog page</p>
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

// getServerSideProps: cocok digunakan untuk data yang selalu berubah
export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await response.json();

  return {
    props: {
      dataBlog: dataBlog,
    },
  };
}
