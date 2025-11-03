export const AboutBook = ({ ISBN, lang, pages, publisherYear, title, author, publisher, genre }) => {
    return (
        <div>
            {/* info */}
            <div className="w-[840px]">

                <div className="flex gap-50 items-center">
                    <h2 className="font-bold text-[32px]">Маълумотлар</h2>
                    <h2 className="font-bold text-[#9a9a9a] text-[32px]">Фикрлар</h2>
                </div>

                <div className="">

                    <div className="grid grid-cols-2 p-4 border rounded-t-2xl border-[#EEF4FF]">
                        <h3 className="font-bold">Китоб номи</h3>
                        <p>{title}</p>
                    </div>

                    <div className="grid grid-cols-2 p-4 border border-[#EEF4FF]">
                        <h3 className="font-bold">Муаллиф</h3>
                        <p>{author}</p>
                    </div>

                    <div className="grid grid-cols-2 p-4 border border-[#EEF4FF]">
                        <h3 className="font-bold">ISBN</h3>
                        <p>{ISBN}</p>
                    </div>

                    <div className="grid grid-cols-2 p-4 border border-[#EEF4FF]">
                        <h3 className="font-bold">Тил</h3>
                        <p>{lang}</p>
                    </div>

                    <div className="grid grid-cols-2 p-4 border border-[#EEF4FF]">
                        <h3 className="font-bold">Сахифалар</h3>
                        <p>{pages}</p>
                    </div>

                    <div className="grid grid-cols-2 p-4 border border-[#EEF4FF]">
                        <h3 className="font-bold">Чоп этилган сана</h3>
                        <p>{publisherYear}</p>
                    </div>

                    <div className="grid grid-cols-2 p-4 border border-[#EEF4FF]">
                        <h3 className="font-bold">Нашриёт</h3>
                        <p>{publisher}</p>
                    </div>

                    <div className="grid grid-cols-2 p-4 border rounded-b-2xl border-[#EEF4FF]">
                        <h3 className="font-bold">Рукн</h3>
                        <p className="bg-primary_soft text-primary_color py-2 px-4 font-semibold rounded-2xl block w-[200px]">{genre}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}