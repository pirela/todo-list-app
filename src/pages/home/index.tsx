import { useEffect, useState } from "react";
import { MyCustomButtonToOpenModal } from "../../components/Buttons/Buttons";

import { MyCustomCard } from "../../components/Cards/Cards";

import { TypeCard, EnumStatus } from "../../const/Types";

import {
  StyledContainer,
  StyledContainerTasks,
  StyledTitleCard,
} from "./styled";

const allDataTodo: TypeCard[] = [
  {
    date: "20-20-22",
    description: "description",
    name: "name asd qwe qjeqwj zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxxxxxxx",
    status: EnumStatus.PENDING,
  },
  {
    date: "20-20-22 2",
    description: "description 2",
    name: "name 2",
    status: EnumStatus.BLOCKED,
  },
];

function Home() {
  const [dataTodo, setDataTodo] = useState<TypeCard[]>([]);

  useEffect(() => {
    setDataTodo(allDataTodo);
  }, []);

  return (
    <StyledContainer>
      <MyCustomButtonToOpenModal />

      <StyledContainerTasks>
        <StyledTitleCard>Todo List</StyledTitleCard>
        {dataTodo.map(({ date, description, name, status }) => (
          <MyCustomCard
            date={date}
            description={description}
            name={name}
            status={status}
          />
        ))}
      </StyledContainerTasks>

      <hr />

      <StyledContainerTasks>
        <StyledTitleCard>Done List</StyledTitleCard>
        {dataTodo.map(({ date, description, name, status }) => (
          <MyCustomCard
            date={date}
            description={description}
            name={name}
            status={status}
          />
        ))}
      </StyledContainerTasks>
    </StyledContainer>
  );
}

export default Home;
