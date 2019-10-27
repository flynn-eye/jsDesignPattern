class  Observer {
    constructor(name,subject){
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update(){
        console.log(`${this.name}你关注的商品降价了 现在只要 ${this.subject.state}`)
    }
}
class Subject{
    constructor(){
        this.state = 99
        this.observers = []
    }
    getState(){
        return this.state
    }
    setState(state){
        if(this.state>state){
            this.state = state
         this.notifyAllObservers()
        }

    }
    attach(Observer){
this.observers.push(Observer)
    }
    notifyAllObservers(){
        this.observers.forEach(p=>{
            p.update()
        })
    }
}
export {Subject,Observer}
