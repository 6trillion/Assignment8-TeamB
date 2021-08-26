import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { ITodo } from 'types/index';
import { storage } from 'utils/Tokens';

export const TODO_STATUS_TEXT = {
  TODO: 'TO DO',
  ON_PROGRESS: 'On Progress',
  DONE: 'DONE',
};

export const STATUS = {
  NOT_STARTED: '시작안함',
  ONGOING: '진행중',
  FINISHED: '완료',
};

export const TODO_ITEM_LIST = [
  {
    id: 1,
    taskName: '자소서 쓰기 ',
    status: STATUS.NOT_STARTED,
    createdAt: '2021-02-03',
    updatedAt: '2021-02-03',
    importance: 'none',
  },
  {
    id: 2,
    taskName: '할일2',
    status: STATUS.NOT_STARTED,
    createdAt: '2021-03-03',
    updatedAt: '2021-03-03',
    importance: 'high',
  },
  {
    id: 3,
    taskName: '할일3',
    status: STATUS.ONGOING,
    createdAt: '2021-04-03',
    updatedAt: '2021-04-03',
    importance: 'low',
  },
  {
    id: 4,
    taskName: '할일4',
    status: STATUS.FINISHED,
    createdAt: '2021-05-03',
    updatedAt: '2021-08-07',
    importance: 'none',
  },
  {
    id: 5,
    taskName: '할일5',
    status: STATUS.ONGOING,
    createdAt: '2021-06-03',
    updatedAt: '2021-06-20',
    importance: 'high',
  },
];

export const DATE_FORMAT = 'YYYY-MM-DD';

type TodosState = ITodo[];
const localTodosList = storage.load();
const TodosStateContext = createContext<TodosState>(localTodosList);

type Action =
  | { type: 'CREATE'; taskName: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined,
);

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(0, ...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        taskName: action.taskName,
        status: '시작안함',
        createdAt: '',
        updatedAt: '',
        importance: '',
      });
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled action');
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, TODO_ITEM_LIST);
  storage.save(todos);
  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error('TodosProvider not found!');
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found!');
  return dispatch;
}
