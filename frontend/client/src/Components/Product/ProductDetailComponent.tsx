import style from "../../../public/css/Product.module.scss";

export const ProductDetailComponent = () =>{

    return(
        <div className={style.productDetailWrapper}>
            <div className={style.productDetailContainer}>
                <div className={style.productDetailHead}></div>
                <div className={style.productDetail}></div>

            </div>
        </div>
    )

}