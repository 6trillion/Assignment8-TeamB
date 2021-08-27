import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { storage } from 'utils/Tokens';
import { ITodo } from 'types/index';

type TodosState = ITodo[];
const localTodosList = storage.load();
const TodosStateContext = createContext<TodosState>(localTodosList);

type Action =
  // 수정
  | {
      type: 'CREATE';
      taskName: string;
      status: string;
      createdAt: string;
      updatedAt: string;
      importance: string;
    }
  | { type: 'TOGGLE'; id: number }
  | {
      type: 'UPDATE';
      id: number;
      newText: string;
      newDate: string;
      newImportance: string;
    }
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
        //수정
        status: action.status,
        createdAt: action.createdAt,
        updatedAt: action.updatedAt,
        importance: action.importance,
      });
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'UPDATE':
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              taskName: action.newText,
              updatedAt: action.newDate,
              importance: action.newImportance,
            }
          : todo,
      );
    default:
      throw new Error('Unhandled action');
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, localTodosList);
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
