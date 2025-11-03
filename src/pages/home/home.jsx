import { Banner } from './components/banner'
import { Hero } from './components/hero'
import { BookCard } from './components/book-card'
import { RuknCard } from './components/rukn-card'
import { infoData } from './data/infoData'
import { newAdd } from './data/newAdd'
import { ruknData } from './data/rukn'
import { LeftRightArrow } from '../../assets/icons/left-right-arrow'
import { audioBookData } from './data/audioBook'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <Banner />
            <section>
                <div className='container'>
                    { /* tezkor yetkazish */}
                    <div className='mt-[82px] flex'>
                        {infoData.map((item) => (
                            <Hero title={item.title} img={item.img} desc={item.desc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Ruknlar */}
            <section>
                <div className="container">
                    <div className='mt-16 '>
                        <h3 className='font-bold text-[32px] text-[#242424] mb-8'>Рукнлар</h3>
                        <div className='flex gap-4'>
                            {ruknData.map((item) => (
                                <Link key={item.id} to={`/rukn-book/${item.id}`}>
                                    <RuknCard title={item.title} img={item.img} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Yangi qo'shilganlar */}
            <section>
                <div className="container mt-16 mb-8">
                    <div className=''>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold text-black text-[32px]'>Янги қўшилганлар</h3>
                            <LeftRightArrow />
                        </div>
                        <div className='flex justify-between gap-5 mt-8'>
                            {newAdd.map((item) => (
                                <Link key={item.id} to={`/new-book/${item.id}`}>
                                    <BookCard title={item.title} img={item.img} ganre={item.ganre} star={item.star} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Audio kitoblar */}
            <section>
                <div className="container mb-[93px]">
                    <div className='flex items-center justify-between'>
                        <h3 className='font-semibold text-black text-[32px]'>Аудио китоблар</h3>
                        <LeftRightArrow />
                    </div>
                    <div className='flex gap-6 mt-8'>
                        {audioBookData.map((item) => (
                            <Link key={item.id} to={`/audio-book/${item.id}`}>
                                <BookCard title={item.title} img={item.img} ganre={item.ganre} star={item.star} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
