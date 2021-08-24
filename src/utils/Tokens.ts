import Storage from './localStorage';

enum Locals {
  TODO_LIST = 'todoList',
}

export default class Tokens extends Storage<Locals> {
  private static instance?: Tokens;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Tokens();
    }

    return this.instance;
  }

  public load() {
    return this.get(Locals.TODO_LIST);
  }

  public save(accessToken: any) {
    this.set(Locals.TODO_LIST, accessToken);
  }

  public clear() {
    this.clearItem(Locals.TODO_LIST);
  }
}
