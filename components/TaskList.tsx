import { Task } from "../generated/graphql-frontend";

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="task-list-item">
            {task.title} ({task.status})
          </div>
        );
      })}
    </ul>
  );
};

export default TaskList;
