export interface ITodo {
  id: number;
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  importance: string;
  isDrag: boolean;
}

export type date = string | null;

export interface Importance {
  [key: string]: boolean;
  high: boolean;
  low: boolean;
  none: boolean;
}
