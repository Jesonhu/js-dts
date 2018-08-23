// @see ./types/test.d.ts
// 这里可以检测到
cA

HELLO

cB

var a = 1;

// 虽然可以检测到
// 但是没有实现功能的话
// 没实现的会报错
cGetName('Tom');

cSayHello();

Person.maxAge
Person.getMaxAge()
const person = new Person();
person.getName()
person.age
person.name

Ooo.Person
Ooo.a
Ooo.getName

Ooo.Person.maxAge
Ooo.Person.setMaxAge
const oPerson = new Ooo.Person();

Ooo.Dog.leg
Ooo.Dog.wang();

// 对象里面嵌套对象
jQuery('#app');
jQuery.ajax();

// 作为函数使用
Bird();
// 类的静态方法
Bird.getMaxAge();
// 类的构造函数
let bird = new Bird();
// 类的实例
bird.eat
bird.isCanFly
bird.getAge()

// 引入模块
// import abab from 'abab';
// or
const abab = require('abab')
abab.a
abab.b()
abab.c.cd

// 默认导出效果
import tdtd from 'tdtd';
// 只有cd
tdtd.cd

// umd 方式
$.ajax();

let _$ = require('$');
_$.ajax();

// 其他方式
const date = new Date();
date.format('yy-mm-dd');