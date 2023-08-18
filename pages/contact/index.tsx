import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1> About Page </h1>

      <h1> Contact Page </h1>
      {/* <h1> Ir a <a href='/about'>About</a> </h1> */}
      <h1>
        {" "}
        Ir a <Link href="/about"> About</Link>{" "}
      </h1>
    </MainLayout>
  );
}
