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
// import {Observer,Subject} from "./observer/observer";
// let sub = new Subject()
// let obj1 = new Observer("qw",sub)
// let obj2 = new Observer("zy",sub)
// sub.setState(96)
//迭代器模式 顺序访问一个聚合对象中每个元素，并且不暴露该对象内部。
// import {Container} from "./Iterator/iterator";
// let arr1 = [1,2,3]
// let arr2= [
//     {
//         name:'a',
//         age:21
//     },{
//     name:'b',
//         age:22
//     },{
//     name:'c',
//         age:23
//     }
// ]
// let con1 = new Container(arr1)
// let it1 = con1.getIterator()
// let con2 = new Container(arr2)
// let it2 = con2.getIterator()
// while(it1.hasNext()){
//     console.log(it1.next())
// }
// while(it2.hasNext()){
//     console.log(it2.next())
// }

