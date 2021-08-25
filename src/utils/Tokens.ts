import Storage from './localStorage';
import { ITodo } from 'types/index';

enum Locals {
  TODO_LIST = 'todoList',
}

export default class Tokens extends Storage<Locals> {
  private static instance?: Tokens;

  private constructor() {
    super();
  }

  public static getInstance(): Tokens {
    if (!this.instance) {
      this.instance = new Tokens();
    }

    return this.instance;
  }

  public load(): ITodo[] {
    return this.get(Locals.TODO_LIST);
  }

  public save(value: ITodo[]): void {
    this.set(Locals.TODO_LIST, value);
  }

  public clear(): void {
    this.clearItem(Locals.TODO_LIST);
  }
}

export const storage = Tokens.getInstance();
