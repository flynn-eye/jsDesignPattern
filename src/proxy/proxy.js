class Restaurant{
    constructor(){
        this.food = "满汉全席"
    }
    EleSell(){
        return this.food  //有代理
    }
    sell(str){
        console.log(`${str}去餐厅吃${this.food}`) //没有代理
    }
}
class Ele{//饿了么外卖  proxy
    request(){
       return this.delivery()
    }


    delivery(){
         let re = new Restaurant()
       return re.EleSell()
    }
}
class Person{
    constructor(name){
        this.name = name
    }

    eat(){
        let re = new Restaurant()
        re.sell(this.name)
    }
    useEle(){
        let ele = new Ele()
        console.log(`${this.name}在家吃${ele.request()}`)
    }
}
export {Person}
