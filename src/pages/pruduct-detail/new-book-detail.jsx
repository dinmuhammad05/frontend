import { useParams } from "react-router-dom"
import { newAdd } from '../../pages/home/data/newAdd'

import { BookPage } from "./components/book-page"
import { LookLikeBook } from "./components/look-like-book"
import { AboutBook } from "./components/about-book"

export const NewBookDetail = () => {
    const { id } = useParams()
    const book = newAdd.find((item) => item.id == id)
    const books = newAdd.filter((_, index) => index < 3)

    return (
        <div className="container">
            {/* UP */}
            <div>
                {/* Book img and buy */}
                {book && (
                    <BookPage
                        img={book.img}
                        title={book.title}
                        genre={book.ganre}
                        desc={book.desc}
                        star={book.star}
                        comment={book.comment}
                        author={book.author}
                        publisher={book.publisher}
                        year={book.year}
                        bookPrice={book.bookPrice}
                        audioPrice={book.audioPrice}
                        onlineBookPrice={book.onlineBookPrice}
                    />
                )}
            </div>

            {/* DOWN */}
            <div className="flex mt-10 mb-80 gap-4">
                {/* Info */}
                <div>
                    {book && (
                        <AboutBook
                            title={book.title}
                            author={book.author}
                            genre={book.ganre}
                            ISBN={book.info?.ISBN}
                            publisher={book.publisher}
                            lang={book.info?.lang}
                            pages={book.info?.pages}
                            publisherYear={book.info?.publisherYear}
                        />
                    )}
                </div>

                {/* Most read */}
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-[32px]">Ўхшаш китоблар</h2>
                    {books && (
                        books.map((item) => (
                            <LookLikeBook title={item.title} img={item.img} ganre={item.ganre} comment={item.comment} star={item.star} />
                        ))
                    )}
                    <a href="#">
                        <p className="bg-primary_soft text-center py-3 text-primary_color rounded-2xl font-bold" >Кўпроқ</p>
                    </a>
                </div>
            </div>

        </div>
    )
}