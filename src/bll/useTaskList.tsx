import {useEffect, useState} from "react";
import {getTasks, type TaskItemApiData} from "../dal/api.ts";

export function useTaskList() {
  const [tasks, setTasks] = useState<Array<TaskItemApiData> | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    getTasks()
      .then((tasksData) => setTasks(tasksData.data))
      .finally(() => {
        setLoading(false)
      })
  }, []);
  return {tasks, isLoading, setLoading}
}