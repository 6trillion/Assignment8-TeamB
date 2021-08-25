import { ReactElement, useState } from 'react';

import TodoBody from 'components/body/TodoBody';
import Header from 'components/header/Header';

import { DATE_FORMAT } from 'constants/index';

import { date } from 'types/index';

function App(): ReactElement {
  const [createdAtPeriod, setCreatedAtPeriod] = useState<date[]>([null, null]);

  const createdAtFilter = ({ createdAt }: { createdAt: string }): boolean => {
    const startDate: string = createdAtPeriod[0] ?? '';
    const endDate: string = createdAtPeriod[1] ?? DATE_FORMAT;

    return startDate <= createdAt && createdAt <= endDate;
  };

  return (
    <>
      <Header
        createdAtPeriod={createdAtPeriod}
        setCreatedAtPeriod={setCreatedAtPeriod}
      />
      <TodoBody createdAtFilter={createdAtFilter} />
    </>
  );
}

export default App;
