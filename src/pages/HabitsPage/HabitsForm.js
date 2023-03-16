import { CreateHabitMenu, DaysContainer, FormConatiner, ButtonDays, ButtonsContainer, DotsLogin } from "./styled";
import { idDays } from "../../constants/days";
import { useState } from "react";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function HabistForm({ setNewHabit, config, setReloadPage }) {

    const [habitName, setHabitName] = useState("");
    const [selectedDay, setSelectedDay] = useState([]);
    const [disabled, setDisabled] = useState(false);
    let counter = 0;

    function choseDay(id) {
        if (selectedDay.includes(id)) {
            setSelectedDay(selectedDay.filter((dayId) => dayId !== id));
        } else {
            setSelectedDay([...selectedDay, id]);
        }
    }

    function cancelNewHabit() {
        setNewHabit("")
    }

    function salveNewHabit() {

        const body = {
            name: habitName,
            days: selectedDay
        }

        setDisabled(true);

        axios
            .post(`${URL_API}/habits`, body, config)
            .then(() => {
                setDisabled(false)
                setHabitName("")
                setSelectedDay([])
                setNewHabit("")
                setReloadPage(counter + 1)
            })
            .catch((err) => {
                setDisabled(false)
                alert(err.response.message)
            })
    }

    return (
        <CreateHabitMenu>
            <FormConatiner>
                <input
                    placeholder="nome do hábito"
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                    disabled={disabled}
                />
            </FormConatiner>
            <DaysContainer>
                {idDays.map((day) => {
                    const select = selectedDay.includes(day.id)
                    return (
                        <ButtonDays disabled={disabled} selected={select}
                            key={day.id} onClick={() => choseDay(day.id)}>{day.name}
                        </ButtonDays>
                    )
                })}
            </DaysContainer>
            <ButtonsContainer disabled={disabled}>
                <button onClick={cancelNewHabit}>Cancelar</button>
                <button onClick={salveNewHabit}>{!disabled ? "Salvar" : <DotsLogin><ThreeDots color="#FFFFFF" /></DotsLogin>}</button>
            </ButtonsContainer>
        </CreateHabitMenu>
    )
}