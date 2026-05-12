import Background from "@/components/background";
import ClientPage from "./Client";
import Navbar, { FakeNavbar } from "@/components/NavBar";


export default function Home() {
  return (
    <>

      <Navbar />
      <Background/>
      <ClientPage />
    </>
  );
}
