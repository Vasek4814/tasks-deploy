import {useEffect, useState} from "react";
import {getTask, type TaskDetailsData} from "../dal/api.ts";

export function useTaskDetails(taskId: string | null, boardId: string | null) {
  const [details, setDetails] = useState<TaskDetailsData | null>(null)
  useEffect(() => {
    if (taskId && boardId) {
      getTask(boardId, taskId)
        .then((boardsInfo) => setDetails(boardsInfo.data))
    } else {
      setDetails(null)
    }
  }, [taskId, boardId])
  return {details,}
}