import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";



export default function Home() {
  return (
    <MainLayout>
      <h1> Home Page </h1>
      asdas
      {/* <h1> Ir a <a href='/about'>About</a> </h1> */}
      <h1>
        {" "}
        Ir a <Link href="/about"> About</Link>{" "}
      </h1>
    </MainLayout>
  );
}
