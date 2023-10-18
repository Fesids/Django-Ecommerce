import style from "../../../public/css/Product.module.scss"
import { IProduct } from "../../MODELS/Product"
import { Product } from "../Product/Product"

interface latestProductListProps{
    data: Array<IProduct>
}
export const LatestProductList = ({data}:latestProductListProps) =>{

    return(
        <div className={style.latestProductList}>
            <div className={style.productsContainer}>
                {data?.slice(0, 3).map(product => <Product data={product}/>)}
            </div>
        </div>
    )
}