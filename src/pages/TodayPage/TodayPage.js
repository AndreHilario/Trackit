import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { CheckCard, TodayContainer, TodayContent, MainHeaderToday, Sequence, Record } from "./styled";
import useAuthTo from "../../context/useAuthTo";
import check from "../../assets/Check.png";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useCheckHabits, useGetTodayHabits, useUncheckHabits } from "../../hooks/api/useToday";

export default function TodayPage() {

    const [habitsToday, setHabitsToday] = useState([]);
    const { auth, percentage, setPercentage } = useAuthTo();

    const { getTodayHabits } = useGetTodayHabits();
    const { checkHabit } = useCheckHabits();
    const { uncheckHabit } = useUncheckHabits();

    const today = dayjs().locale("pt-br").format("dddd, DD/MM");
    const showToday = today.replace(/^\w/, (c) => c.toUpperCase());

    useEffect(() => {
        let total = habitsToday.length;
        let doneTrue = habitsToday.filter(check => check.done).length;

        const percentageUpdated = (doneTrue / total) * 100;
        setPercentage(percentageUpdated);
    }, [habitsToday, setPercentage]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getTodayHabits(auth.getToken);
                setHabitsToday(res);
            } catch (error) {
                alert("Erro ao carregar, tente mais tarde!");
            }
        }
        fetchData();
    }, [getTodayHabits, auth.getToken]);

    if (habitsToday.length === 0) {
        return (
            <TodayContainer>
                <Header />
                <TodayContent>
                    <MainHeaderToday>
                        <h2 data-test="today">{showToday}</h2>
                        <p data-test="today-counter">Nenhum hábito concluído ainda</p>
                    </MainHeaderToday>
                </TodayContent>
                <Menu percentage={percentage} />
            </TodayContainer>
        );
    }

    async function checkNewHabit(check, id) {

        const newHabitsToday = habitsToday.map((habit) => {
            if (habit.id === id) {
                return {
                    ...habit,
                    done: !check,
                };
            }
            return habit;
        });

        if (check === false) {
            try {
                await checkHabit(auth.getToken, {}, id);
                setHabitsToday(newHabitsToday);
            } catch (error) {
                alert("Algo deu errado ao dar o check");
            }
        }

        if (check === true) {
            try {
                await uncheckHabit(auth.getToken, {}, id);
                setHabitsToday(newHabitsToday);
            } catch (error) {
                alert("Algo deu errado ao dar o uncheck");
            }
        }

    }
    return (
        <TodayContainer>
            <Header />
            <TodayContent>
                <MainHeaderToday percentage={percentage !== 0 ? 1 : 0}>
                    <h2 data-test="today">{showToday}</h2>
                    <p data-test="today-counter">
                        {percentage !== 0
                            ? `${percentage.toFixed(0)}% dos hábitos concluídos`
                            : (habitsToday.length === 0 || percentage === 0) && "Nenhum hábito concluído ainda"}
                    </p>
                </MainHeaderToday>
                {habitsToday.map((h) => {
                    return (
                        <CheckCard data-test="today-habit-container" key={h.id} concluded={h.done}>
                            <h5 data-test="today-habit-name">{h.name}</h5>
                            <p data-test="today-habit-sequence">
                                Sequência atual: <Sequence concluded={h.done}>{h.currentSequence} dias</Sequence>
                            </p>
                            <p data-test="today-habit-record">
                                Seu recorde: <Record record={h.highestSequence === h.currentSequence && h.done && h.currentSequence > 0}>{h.highestSequence} dias</Record>
                            </p>
                            <div data-test="today-habit-check-btn" onClick={() => checkNewHabit(h.done, h.id)}>
                                <img src={check} alt="check" />
                            </div>
                        </CheckCard>
                    )
                })}
            </TodayContent>
            <Menu percentage={percentage} />
        </TodayContainer>
    );
}