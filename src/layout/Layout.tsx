import { ReactNode } from "react"
import Footer from "../components/Footer"
import { Navbar } from "../components/Navbar"


const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="max-w-[1440px] font-roboto">
            <Navbar />
            <div className="w-full">
                {children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout