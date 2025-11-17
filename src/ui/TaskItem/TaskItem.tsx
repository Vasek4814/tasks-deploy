import {type TaskItemApiData} from "../../dal/api.ts";
import styles from './TaskItem.module.css'
import clsx from "clsx";

type Props = {
  task: TaskItemApiData
  isSelected: boolean
  onTaskSelected: (taskId: string, TaskAttributesBoardId: string) => void
}

export function TaskItem({task, isSelected, onTaskSelected}: Props) {
  const handleClick = (task: TaskItemApiData) => {

    const taskId = task.id
    const TaskAttributesBoardId = task.attributes.boardId

    onTaskSelected(taskId, TaskAttributesBoardId)
  }
  const className = clsx({
    [styles.default]: true,
    [styles.task]: true,
    [styles.selected]: isSelected,
    [styles[`priority_${task.attributes.priority}`]]: task.attributes.priority,
  })
  const tasksTitle = clsx({
    [styles.tasks_title]: task.attributes.status
  })

  return (
    <li
      onClick={() => {
        handleClick(task)
      }}
      className={className}
    >
      <div className={styles.tasks_title}>
        <h3 className={tasksTitle}>{task.attributes.title}</h3>
      </div>
      <span><b>Статус: </b></span>
      <input
        type={"checkbox"}
        checked={task.attributes.status}
      />
      <p><b>Дата создания: {new Date(task.attributes.addedAt).toLocaleDateString()}</b></p>
    </li>
  )
}