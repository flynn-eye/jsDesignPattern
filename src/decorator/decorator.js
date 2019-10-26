class Food{
    constructor(){
        this.batch = []
        this.batch.push(new Noodle())
    }
    sell(){
        let str = ""
        let money = 0
        this.batch.forEach(
            p=>{
                money+=p.price
                str+=p.name+"--"
            }
        )
        console.log(money,str)
    }
}
class Decorator{
    constructor(arr){
        let food = new Food();
        arr.forEach(a=>{
            food.batch.push(a)
        })
        food.sell()
    }

}
class Fish{
    constructor(){
        this.name = "鱼肉"
        this.price = 3
    }
}
class Pork{
    constructor(){
        this.name = "猪肉"
        this.price = 5
    }
}
class Noodle{
    constructor(){
        this.name = "面条"
        this.price = 3
    }
}
export {Decorator,Fish,Pork}
