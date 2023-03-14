import { FormRegisterContainer, ButtonRegister, Dots } from "./styled";
import { useState } from "react";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function RegisterForm() {

    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" });
    const [disabled, setDisabled] = useState(false);

    const { email, password, name, image } = form;

    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function sendInfoProfile(e) {
        e.preventDefault()

        setDisabled(true);

        axios
            .post(`${URL_API}/auth/sign-up`, form)
            .then(() => {
                setDisabled(false);
                navigate("/")
            })
            .catch((err) => {
                setDisabled(false);
                alert(err.response.data.message)
            })
    }
    console.log(form)

    return (
        <FormRegisterContainer onSubmit={sendInfoProfile}>
            <input
                placeholder="email"
                type="email"
                name="email"
                value={email}
                onChange={handleForm}
                required
                disabled={disabled}
            />
            <input
                placeholder="senha"
                type="password"
                name="password"
                value={password}
                onChange={handleForm}
                required
                disabled={disabled}
            />
            <input
                placeholder="nome"
                type="text"
                name="name"
                value={name}
                onChange={handleForm}
                required
                disabled={disabled}
            />
            <input
                placeholder="foto"
                type="text"
                name="image"
                value={image}
                onChange={handleForm}
                required
                disabled={disabled}
            />
            <ButtonRegister type="submit" disabled={disabled}>
                {!disabled ? "Cadastrar" : <Dots><ThreeDots color="#FFFFFF" /></Dots>}
            </ButtonRegister>
        </FormRegisterContainer>
    )
}