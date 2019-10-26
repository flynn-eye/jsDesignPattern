class Typec{
    responce(str){
        return str
    }
}
class TargetCircle{
    transform(str){
        console.log("圆口转typec:"+(new Typec()).responce(str))
    }
}
class TargetRect{
    transform(str){
        console.log("方口转typec:"+(new Typec()).responce(str))
    }
}
export {TargetCircle,TargetRect}
