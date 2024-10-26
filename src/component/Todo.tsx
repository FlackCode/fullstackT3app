import type { Todo } from "~/types"

type TodoProps = {
    todo: Todo
}

export default function Todo({todo} : TodoProps) {
    const { id, text, done } = todo
    return (
        <>
        <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
                <input type="checkbox" name="done" id="done" checked={done} className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                <label htmlFor="done" className="cursor-pointer">{text}</label>
            </div>
            <button 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Delete</button>
        </div>
        </>
    )
}