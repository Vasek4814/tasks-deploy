import {TaskItem} from "../TaskItem/TaskItem.tsx";
import {useTaskList} from "../../bll/useTaskList.tsx";
import styles from './TasksList.module.css'

type Props = {
  selectedTaskId: string | null
  onTaskSelected: (taskId: string | null, boardId: string | null) => void
}


function TasksList({onTaskSelected, selectedTaskId}: Props) {
  const {tasks, isLoading} = useTaskList()

  const handleTaskSelected = (taskId: string | null, boardId: string | null): void => {
    onTaskSelected(taskId, boardId)
  }
  const handleReset = (): void => {
    onTaskSelected(null, null)
  }

  if (isLoading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }
  if (tasks?.length === 0) {
    return (
      <div>
        <span>No tasks</span>)
      </div>
    )
  }


  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <div>
        <ul className={styles.tasks_list}>
          {Array.isArray(tasks) && tasks.map((task => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                isSelected={task.id === selectedTaskId}
                onTaskSelected={handleTaskSelected}
              />
            )
          }))}
        </ul>
      </div>
    </div>
  )
}

export default TasksList