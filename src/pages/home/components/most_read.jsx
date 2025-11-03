import girl from '../../../assets/girl_img.svg'
import { Book } from './book'
import { StrelkaRight, StrelkaLeft } from './strelka'
export const MostRead = () => {
    return (
        <div className='relative flex h-full p-2 justify-between gap-15 w-full'>
            <div className='mt-10'>
                <p className='pl-6 text-[18px] font-semibold w-55'>Кўп ўқилаётганлар</p>
                <img src={girl} alt="girl" className='absolute bottom-0 left-0 w-[230px]' />
            </div>
            <div className='flex items-center'>
                <StrelkaLeft />
                <Book />
                <StrelkaRight />
            </div>
        </div>
    )
}
