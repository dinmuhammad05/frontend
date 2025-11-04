import { Footer } from './header/footer'
import { Header } from './header/header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <div className=" dark:bg-[#364e9c] ">
                <Header />
                <main className=''>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
