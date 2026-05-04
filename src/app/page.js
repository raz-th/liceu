import ClientPage from "./Client";
import Navbar, { FakeNavbar } from "@/components/NavBar";


export default function Home() {
  return (
    <>
      <FakeNavbar />
      <Navbar />
      <ClientPage />
    </>
  );
}
