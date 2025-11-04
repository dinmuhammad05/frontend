import { Link } from "react-router-dom"
import { BookProfileCard } from "../components/book-horizont-card"
import { newAdd } from "../../home/data/newAdd"

const Kitoblarim = () => {
  return (
    <div>

      <div className="shadow-2xl rounded-[10px] flex  h-[102px] items-center mb-[30px] ">

        <h2 className="font-extrabold text-3xl m-[33px]">Китобларим</h2>

        <ul className="flex gap-6">
            <li className="ml-20 text-[#6F7DC7] border-b">Аудиокитоб</li>
          <li>Электрон китоб</li>

        </ul>
      </div>

      <div className="flex flex-col gap-5 w-full">

        {newAdd.map((item) => (
          <Link key={item.id} to={`/new-book/${item.id}`}>
            <BookProfileCard
              img={item.img}
              title={item.title}
              ganre={item.ganre}
              star={item.star}
              desc={item.desc}
            />
          </Link>
        ))}

      </div>

    </div>
  )
}

export default Kitoblarim;
