import { createClient } from "@/utils/supabase/server";
import { insert, update, remove } from "./crud/actions";
import { logOut } from "../logOut/actions";

type Task = {
  id: number;
  Task: string;
};

export default async function page() {
  const supabase = createClient();
  const { data: tasks, error } = await supabase.from("tasks").select("*");

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-sky-400">
        <h1 className="text-xl font-bold text-white mb-2 sm:mb-0">
          Task Manager
        </h1>
        <form action={logOut}>
          <button
            type="submit"
            className="p-1 border-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors"
          >
            Log Out
          </button>
        </form>
      </div>

      <div className="p-4">
        {(tasks ?? []).map((task, index) => (
          <div
            key={task.id}
            className="flex flex-col sm:flex-row items-center justify-between my-2 p-3 bg-gray-100 rounded-md shadow-md text-black"
          >
            <span className="font-medium mb-2 sm:mb-0">
              {index + 1}. {task.Task}
            </span>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <form action={update} className="flex items-center">
                <input type="hidden" name="id" value={task.id} />
                <input
                  className="m-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="task"
                  name="task"
                  required
                />
                <button
                  type="submit"
                  className="p-1 border-2 border-white bg-yellow-400 hover:bg-yellow-500 rounded-md transition-colors"
                >
                  Update
                </button>
              </form>
              <form action={remove}>
                <input type="hidden" name="id" value={task.id} />
                <button
                  type="submit"
                  className="p-1 border-2 border-white bg-red-400 hover:bg-red-500 rounded-md transition-colors"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 h-screen">
        <form
          action={insert}
          className="flex flex-col sm:flex-row items-center bg-sky-400 p-3 rounded-md shadow-md"
        >
          <input
            className="m-1 p-2 flex-grow border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="task"
            name="task"
            required
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="p-2 mt-2 sm:mt-0 border-2 border-white bg-sky-600 hover:bg-sky-700 rounded-md transition-colors"
          >
            Insert Task
          </button>
        </form>
      </div>
    </>
  );
}
