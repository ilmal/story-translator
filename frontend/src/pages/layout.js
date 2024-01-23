import { Outlet, Link } from "react-router-dom";


const Layout = () => {

    return (
        <>

            <p>This is the default layout with links</p>
            <Link to="/">Landing!</Link>
            <p>   </p>
            <Link to="/story">STORY!</Link>

            <Outlet />
        </>
    )

}

export default Layout