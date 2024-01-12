import { Outlet } from "react-router-dom";


export default function Layout() {
    window.scrollTo(0,0)
    return (
        <Outlet></Outlet>
    )
}