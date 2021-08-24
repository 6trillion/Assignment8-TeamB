interface IStorage {
  getItem(key: string): any | null;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
}

abstract class Storage<T extends string> {
  storage: IStorage;

  constructor(getStorage = (): IStorage => window.localStorage) {
    this.storage = getStorage();
  }

  get(key: T): any | null {
    return JSON.parse(this.storage.getItem(key));
  }
  set(key: T, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
  clearItem(key: T): void {
    this.storage.removeItem(key);
  }
}

export default Storage;
