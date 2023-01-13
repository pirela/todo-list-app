import { useCallback, useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import { deleteTask, getAllTask } from "../../api/public";

import { MyCustomButtonToOpenModal } from "../../components/Buttons/Buttons";
import { MyCustomCard } from "../../components/Cards/Cards";

import { TypeCard } from "../../const/Types";

import {
  StyledContainer,
  StyledContainerTasks,
  StyledMainTitle,
  StyledTitleCard,
} from "./styled";

function Home() {
  const [dataTodo, setDataTodo] = useState<TypeCard[]>([]);
  const [dataDone, setDataDone] = useState<TypeCard[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllData = async () => {
      setIsLoading(true);
      const { data, dataDone } = await getAllTask();
      setDataTodo(data);
      setDataDone(dataDone);
      setIsLoading(false);
    };
    getAllData();
  }, [refresh]);

  const handleDelete = useCallback(
    async (id: string) => {
      setIsLoading(true);
      const { data } = await deleteTask(id);
      if (data) {
        setRefresh(!refresh);
      }
      setIsLoading(false);
    },
    [refresh]
  );

  return (
    <>
      <StyledMainTitle>Todo list App - Jose Pirela</StyledMainTitle>

      <StyledContainer>
        <MyCustomButtonToOpenModal refresh={refresh} setRefresh={setRefresh} />

        <StyledContainerTasks>
          <StyledTitleCard>Todo List</StyledTitleCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            dataTodo.map(({ createdAt, description, name, status, id }) => (
              <MyCustomCard
                id={id}
                createdAt={createdAt}
                description={description}
                name={name}
                status={status}
                handleDelete={(id: string) => {
                  handleDelete(id);
                }}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            ))
          )}
        </StyledContainerTasks>

        <hr />

        <StyledContainerTasks>
          <StyledTitleCard>Done List</StyledTitleCard>
          {isLoading ? (
            <CircularProgress />
          ) : (
            dataDone.map(({ createdAt, description, name, status, id }) => (
              <MyCustomCard
                refresh={refresh}
                setRefresh={setRefresh}
                id={id}
                createdAt={createdAt}
                description={description}
                name={name}
                status={status}
                handleDelete={(id: string) => {
                  handleDelete(id);
                }}
              />
            ))
          )}
        </StyledContainerTasks>
      </StyledContainer>
    </>
  );
}

export default Home;
