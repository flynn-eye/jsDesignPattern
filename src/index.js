//简单工厂模式
// import {Factory} from "./factory/factory";
// let water = new Factory("Water","农夫山泉",2)
// let coffe = new Factory("Coffe","雀巢",3)
// water.sell()
// coffe.sell()
//单例模式
// import  {Singleton} from "./singleton/singleton";
// let objFalse = new Singleton()//false
// let obj1 = Singleton.instance()
// let obj2 = Singleton.instance()
// console.log(obj1===obj2,obj1===objFalse)
//适配器模式
// import {TargetCircle ,TargetRect} from "./adaptee/adaptee";
// let targetCircle = new TargetCircle()
// let targetRect = new TargetRect()
// targetCircle.transform("音乐MP3")
// targetRect.transform("电影MP3")
//装饰器模式
// import {Decorator,Fish,Pork} from "./decorator/decorator";
// let decorator = new Decorator([new Fish(),new Pork()])
//代理模式
// import {Person} from "./proxy/proxy";
//     let p = new Person("zy")
// p.eat()//不代理
// p.useEle()//代理
//观察者模式
import {Observer,Subject} from "./observer/observer";
let sub = new Subject()
let obj1 = new Observer("qw",sub)
let obj2 = new Observer("zy",sub)
sub.setState(96)
