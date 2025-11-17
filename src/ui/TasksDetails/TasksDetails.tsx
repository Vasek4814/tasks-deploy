import {useTaskDetails} from "../../bll/UseTaskDetails.tsx";
import styles from './TaskDetails.module.css'

type Props = {
  taskId: string | null
  boardId: string | null
}

export function TasksDetails({taskId, boardId}: Props) {
  const {details} = useTaskDetails(taskId, boardId)
  return (
    <div className={styles.task}>
      <h3>Details</h3>
      {!details && !taskId && 'Task is not selected'}
      {!details && taskId && 'Loading...'}
      {details && taskId && details.id !== taskId && 'Loading...'}
      {details && <div>
        <h3>{details.attributes.title}</h3>
        <ul>
          <li><b>Board title: </b>{details?.attributes?.boardTitle || 'No board title'}</li>
          <li><b>Description: </b>{details?.attributes?.description || 'No description'}</li>
        </ul>
      </div>}
    </div>
  )
}