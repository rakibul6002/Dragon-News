import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftNavbar from "../layout-component/LeftNavbar";
import RightNavbar from "../layout-component/RightNavbar";

export default function HomeLayout() {
  return (
    <div className="font-poppins">
        <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
              <LatestNews></LatestNews>
            </section>
        </header>
        <nav>
            <section className="w-11/12 mx-auto py-5">
              <NavBar></NavBar>
            </section>
        </nav>
        <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12 gap-5">
            <aside className="left col-span-3">
              <LeftNavbar/>
            </aside>
            <section className="col-span-6"><Outlet/></section>
            <aside className=" col-span-3">
              <RightNavbar/>
            </aside>
        </main>
    </div>
  )
}
