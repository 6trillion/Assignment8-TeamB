import { ReactElement, useState } from 'react';

import TodoBody from 'components/body/TodoBody';
import Header from 'components/header/Header';

import { DATE_FORMAT } from 'constants/index';

import { date, Importance, ITodo } from 'types/index';

function App(): ReactElement {
  const [createdAtPeriod, setCreatedAtPeriod] = useState<date[]>([null, null]);
  const [importance, setImportance] = useState<Importance>({
    high: false,
    low: false,
    none: false,
  });

  const createdAtFilter = ({ createdAt }: { createdAt: string }): boolean => {
    const startDate: string = createdAtPeriod[0] ?? '';
    const endDate: string = createdAtPeriod[1] ?? DATE_FORMAT;

    return startDate <= createdAt && createdAt <= endDate;
  };

  const importanceFilter = (todo: ITodo): boolean => {
    const { high, low, none } = importance;

    if (!high && !low && !none) return true;

    return importance[todo.importance];
  };

  return (
    <>
      <Header
        createdAtPeriod={createdAtPeriod}
        setCreatedAtPeriod={setCreatedAtPeriod}
        setImportance={setImportance}
      />
      <TodoBody
        createdAtFilter={createdAtFilter}
        importanceFilter={importanceFilter}
      />
    </>
  );
}

export default App;
