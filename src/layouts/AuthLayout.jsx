import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AuthLayout() {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
        <header className="w-11/12 mx-auto py-3">
            <NavBar></NavBar>
        </header>
        <Outlet></Outlet>
    </div>
  )
}
