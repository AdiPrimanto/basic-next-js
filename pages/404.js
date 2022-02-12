import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <div>
      <h1 className="title-not-found">Oooops...</h1>
      <h1 className="title-not-found">Halaman tidak ditemukan</h1>
      <br />
      <br />
      <br />
    </div>
  );
}
