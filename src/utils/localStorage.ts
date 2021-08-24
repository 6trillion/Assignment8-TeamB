import { ITodo } from 'types/index';

interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

abstract class Storage<T extends string> {
  storage: IStorage;

  constructor(getStorage = (): IStorage => window.localStorage) {
    this.storage = getStorage();
  }

  get(key: T): ITodo[] {
    const item = this.storage.getItem(key);

    if (!item) return [];

    return JSON.parse(item);
  }

  set(key: T, value: ITodo[]): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  clearItem(key: T): void {
    this.storage.removeItem(key);
  }
}

export default Storage;
