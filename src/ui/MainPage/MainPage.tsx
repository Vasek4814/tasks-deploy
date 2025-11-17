import TasksList from "../TasksList/TasksList.tsx";
import {TasksDetails} from "../TasksDetails/TasksDetails.tsx";
import {useTaskSelection} from "../../bll/UseTaskSelection.tsx";
import styles from './MainPage.module.css'

export function MainPage() {
  const {selectedTaskId, setSelectedTaskId, boardId, setBoardId} = useTaskSelection()
  return (
    <div>
      <div className={styles.container}>
        <TasksList
          onTaskSelected={(taskId: string | null, boardId: string | null): void => {
            setSelectedTaskId(taskId)
            setBoardId(boardId)
          }}
          selectedTaskId={selectedTaskId}
        />
        <TasksDetails
          taskId={selectedTaskId}
          boardId={boardId}
        />
      </div>
    </div>
  )
}