import React, { useState } from 'react'
import { BookCard } from '../../home/components/book-card'
import { newAdd } from "../../home/data/newAdd"
import { Link } from 'react-router-dom'

const Saqlanganlar = () => {

  const [count, setCount] = useState(4) // nechta ko‘rsatish

  return (
    <div className="grid grid-cols-4 gap-6">
      {newAdd.slice(0, count).map((item) => (
        <Link key={item.id} to={`/new-book/${item.id}`}>
          <BookCard
            title={item.title}
            img={item.img}
            ganre={item.ganre}
            star={item.star}
          />
        </Link>
      ))}

      {/* Agar hammasi chiqmagan bo‘lsa, "Yana ko‘rish" tugmasi */}
      {count < newAdd.length && (
        <button
          onClick={() => setCount(count + 4)}
          className="col-span-4 text-center text-[#3F51B5] hover:text-[#24339b] font-semibold mt-6"
        >
          Yana ko‘rsatish
        </button>
      )}
    </div>
  )
}

export default Saqlanganlar
