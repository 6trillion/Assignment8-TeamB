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

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  const todoList = useTodosState();
  const dispatch = useTodosDispatch();

  const onDrop = () => {
    const test = todoList.filter((todoList: any) => todoList.isDrag);
    dispatch({
      type: 'DRAG',
      id: test[0].id,
      isDrag: false,
    });
  };

  return (
    <div onDrop={onDrop} onDragOver={onDragOver}>
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
