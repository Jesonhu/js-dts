// ========================= 全局类型 =========================
// 通过 `script` 引入
// 变量
declare let cA: number

declare const HELLO: 'hello'

declare let cB: number|string|boolean

// 函数
/** 
 * 输出名字.
 * 
 * @param {string} name 名字.
 * @return {string} 名字
 */
declare function cGetName(name: string): string

// 参数可以省略
declare function cSayHello(words?: string): string


// class
declare class Person {
  // 静态变量
  /** 最大年龄 */
  static maxAge: number
  // 静态方法
  static getMaxAge(): number
  // 构造函数
  constructor(name: string, age: number)
  name: string
  age: number
  getName(): string
}

// 对象
declare namespace Ooo {
  let a: number|string
  function getName(name: stirng): string
  class Person {
    static maxAge: number
    static setMaxAge(maxAge: number)
    constructor(name: string, age: number)
    name: string
    age: number
    getName(): string
  }

  // 对象里面嵌套对象
  namespace Dog {
    let leg: number
    function wang(): string
  }
}

// 既是函数又是对象
declare function jQuery(selector: string): jQuery
declare namespace jQuery {
  function ajax(): XMLHttpRequest
}

// 既是函数又是类
interface Bird {
  isCanFly: boolean
  eat: string
  egg?: boolean
  getAge(): string
}
interface Bird_Static {
  new (isCanFly: boolean, eat: string): Bird
  // 静态方法
  static getMaxAge(): number
  (w: number): number
}
declare var Bird: Bird_Static


// ========================= 模块方式使用 =========================
// 模块化
// 多个导出
declare module 'abab' {
  export let a: number
  export function b(): number
  export namespace c {
    let cd: number
  }
  // namespace d {
  //   function getDD(cd: number): number
  // }
  // export default d
}

// 默认导出
// export default 有且只能有一个
declare module 'tdtd' {
  export let a: number
  namespace c {
    let cd: number
  }
  export default c
}

// ========================= UMD =========================
// 全局变量 and require
declare namespace $ {
  function ajax(): XMLHttpRequest
}
declare module '$' {
  export = $
}

// ========================= 其他 =========================
// 扩展新方法 Date.prototype.format
interface Date {
  /** 格式化日期 */
  format(f: string): string
}

