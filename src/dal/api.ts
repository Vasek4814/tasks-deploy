// api-TaskDetails=======================
export type TaskDetailsData = {
  id: string
  attributes: TaskDetailsDto
}
export type TaskDetailsDto = {
  boardTitle: string
  description: string | null
  title: string
}
type GetTaskOutput = {
  data: TaskDetailsData
}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if (!apiKey) return undefined
  return {
    'api-key': apiKey
  }
}

export const getTask = (boardId: string, taskId: string) => {
  const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
    headers: prepareHeaders()
  })
    .then((res) => res.json())
  return promise
}
//=======================================

// api-TasksList and TaskItem=============
export type TaskItemApiData = {
  id: string
  type: string
  attributes: TaskListItemDto
}
export type TaskListItemDto = {
  id: string
  boardId: string
  status: boolean | undefined
  priority: number
  title: string
  addedAt: string
}

type GlobalTaskListResponse = {
  data: TaskItemApiData[]
}

export const getTasks = () => {
  const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
    headers: prepareHeaders()
  })
    .then((resp) => resp.json())
  return promise
}
//=======================================