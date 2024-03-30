import Header from "./Header"
import Footer from './Footer'

export default function layout({children}){
    return(
        <>
        <Header/>
            <main>{children}</main>
        <Footer/>
        </>
    )
}