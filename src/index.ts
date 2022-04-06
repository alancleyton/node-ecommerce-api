interface IHello {
  helloThere(): string;
}

export class Hello implements IHello {
  constructor(public name: string) {
    this.name = name;
  }

  helloThere(): string {
    return `Hello ${this.name}, Welcome to Node FCKN JS!!`;
  }
}

const h = new Hello('Alan Cleyton');
console.log(h.helloThere());
