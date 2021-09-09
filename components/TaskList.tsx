import { Task } from "../generated/graphql-frontend";
import Link from "next/link";

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <li key={task.id} className="task-list-item">
            <Link href="/update/[id" as={`/update/${task.id}`}>
              <a className="task-list-item-title">{task.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
