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

export const DATE_FORMAT = 'YYYY-MM-DD';

interface IFilterIcon {
  [key: string]: string;
  high: string;
  low: string;
  none: string;
}

export const FILTER_ICON: IFilterIcon = {
  high: '🔥',
  low: '🎵',
  none: '🧨',
};
