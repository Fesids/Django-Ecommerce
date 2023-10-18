import { useParams } from "react-router"
import { useAppDispatch } from "../../../STORE/store";
import { useEffect, useState } from "react";
import { IProduct } from "../../../MODELS/Product";
import { fetchProductById } from "../../../STORE/features/productSlice";
import style from "../../../../public/css/Product.module.scss"
import { ProductDetailComponent } from "../../Product/ProductDetailComponent";

export const ProductDetailPage = () =>{

    const {id} = useParams();
    let productId = 0;
    const [productDetail, setProductDetail] = useState({} as IProduct);
    const dispatch = useAppDispatch();

    if(id){
        productId = parseInt(id);
    }

    useEffect(()=>{
        dispatch(fetchProductById(productId))
        .unwrap()
        .then(resp => setProductDetail(resp))
    }, [id])
    
    console.log(productDetail);

    return(
        <div className={style.productDetailPage}>
           <ProductDetailComponent/>
        </div>
    )

}