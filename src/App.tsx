import { ReactElement, useState } from 'react';
import { TodoBody } from 'components/body';
import { Header } from 'components/header';
import { DATE_FORMAT } from 'constants/index';
import { date, Importance, ITodo } from 'types/index';
import GlobalStyle from 'styles/GlobalStyle';
import { useTodosDispatch, useTodosState } from 'utils/TodosContext';

function App(): ReactElement {
  const [createdAtPeriod, setCreatedAtPeriod] = useState<date[]>([null, null]);
  const [importance, setImportance] = useState<Importance>({
    high: false,
    low: false,
    none: false,
  });

  const applyAllFilters = (todo: ITodo) => {
    return createdAtFilter(todo.createdAt) && importanceFilter(todo);
  };

  const createdAtFilter = (createdAt: string): boolean => {
    const startDate: string = createdAtPeriod[0] ?? '';
    const endDate: string = createdAtPeriod[1] ?? DATE_FORMAT;

    return startDate <= createdAt && createdAt <= endDate;
  };

  const importanceFilter = (todo: ITodo): boolean => {
    const { high, low, none } = importance;
    if (!high && !low && !none) return true;

    return importance[todo.importance];
  };

  const todoList = useTodosState();
  const dispatch = useTodosDispatch();

  const onDragOver = (e: React.DragEvent<HTMLElement>): void => {
    e.preventDefault();
  };

  const onDrop = (): void => {
    const draggingItem = todoList.filter((todo: ITodo) => todo.isDrag)[0];

    dispatch({
      type: 'DRAG',
      id: draggingItem.id,
      isDrag: false,
    });
  };

  return (
    <div onDragOver={onDragOver} onDrop={onDrop}>
      <GlobalStyle />
      <Header
        createdAtPeriod={createdAtPeriod}
        setCreatedAtPeriod={setCreatedAtPeriod}
        setImportance={setImportance}
        importance={importance}
      />
      <TodoBody applyAllFilters={applyAllFilters} />
    </div>
  );
}

export default App;
