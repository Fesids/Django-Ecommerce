import style from "../../../public/css/Button.module.scss";

interface ButtonProps{
    content: string
}


export const Button = ({content}: ButtonProps) =>{

    return(
        <button className={style.buttonComponent}>
            {content}
        </button>
    )
}