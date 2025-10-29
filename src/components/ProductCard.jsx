import { product } from "../data/product"
import { CardList } from "./CardList"

export const ProductCard = () => {
    return <CardList title="Янги қўшилганлар" items={product} />
}
