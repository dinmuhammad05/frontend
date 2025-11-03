import { Link } from "react-router-dom"
import { dataMost } from "../data/data"
import { Card } from "./card"

export const Book = () => {
    return (
        <div className="flex">
            {dataMost.map((item) => (
                <Link key={item.id} to={`most-read/${item.id}`}>
                    <Card title={item.title} img={item.img} />
                </Link>
            ))}
        </div>
    )
}
