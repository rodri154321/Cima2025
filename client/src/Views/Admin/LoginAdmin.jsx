import React from "react";
import style from "./LoginAdmin.module.css";

function LoginAdmin() {

    return (
        <div className={style.contenedor}>
            <form action="" class={style.formmain}>
                <p class={style.heading}>Login</p>
                <div class={style.inputContainer}>
                    <input type="text" class={style.inputField} id="username" placeholder="Username"/>
                </div>

                <div class={style.inputContainer}>
                    <input type="password" class={style.inputField} id="password" placeholder="Password"/>
                </div>


                <button id="button">Submit</button>
            </form>

        </div>
    )

}

export default LoginAdmin;