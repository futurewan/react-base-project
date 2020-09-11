export const logger = (txt: string) => {
  enum Color {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
  }
  let red: Color = Color['RED'];
  console.log('logger', Color, red);
};

interface SquareConfig {
  color: string;
  width: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return { color: config.color, area: config.width };
}

let mySquare = createSquare({ o: 'red', color: 'red', width: 100 } as SquareConfig);

function swap<T, U>(arr: [T, U]): [U, T] {
  return [arr[1], arr[0]];
}
console.log(swap(['1', 2]));

//type
type Str = string;
let name: Str = '9';
console.log(name);

interface He {
  name: string;
}
interface Ha {
  country: string;
}
type Hs = He | Ha;
let l1: Hs;
l1 = {
  name: '1',
  country: '--',
};
console.log(l1);

interface Person {
  name: string;
  sex: string;
}

type Partial<T> = {
  [P in keyof T]?: T[P];
};
type PersonPartial = Partial<Person>;
let p: PersonPartial = {};
//id 泛类型函数
interface Sizeable {
  size: number;
}
function trace<T extends Sizeable>(arg: T): T {
  console.log(arg.size);
  return arg;
}
let a = 1;

interface SearchFun {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFun = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
};

var arr: [string] = ['1'];

/*
联合类型：通常与null或undefined一起使用
可辨识联合：
  3个要点：可辨识、联合类型、类型守卫
类型别名：type Message = string | string[];


交叉类型
```
interface IPerson {
  id: string;
  age: number;
}

interface IWorker {
  companyId: string;
}

type IStaff = IPerson & IWorker;

const staff: IStaff = {
  id: 'E1006',
  age: 33,
  companyId: 'EFT'
};
```

## 接口
interface Person{
  readonly name:string;
  age?:number;
}
*/
export default {
  logger,
};
