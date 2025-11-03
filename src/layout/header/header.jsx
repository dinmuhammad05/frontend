import { Link } from 'react-router-dom'
import { SearchBar } from './search-bar'
import { Logo } from '../../assets/icons/logo'
import { Category } from './category'
import { Navbar } from './navbar'
import { Lang } from '../../assets/icons/lang'
import { Signin } from '../../assets/icons/signin'


export const Header = () => {
    return (
        <header className='py-5' >
            <div className='container flex justify-between gap-5 items-center'>
                <div className='flex gap-11 grow'>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                    <div className='flex gap-1 max-w-[740px]'>
                        <Category />
                        <SearchBar />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <Lang />
                    <Signin />
                </div>
            </div>
            <Navbar />
        </header >
    )
}
