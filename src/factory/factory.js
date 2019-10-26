 class Water{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    sell(){
        console.log(`water ${this.name} sell price is ${this.price} `)
    }
}
class Coffe{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    sell(){
        console.log(`Coffe ${this.name} sell price is ${this.price} `)
    }
}
class Factory{
    constructor(type,name,price){
        switch (type) {
            case 'Water':return new Water(name,price);
            case 'Coffe':return new Coffe(name,price);
            default :console.log("不存在实例")
        }

    }
}
 export {Factory}
