export default class Dom{
    createElement(type, className, attribute){
        const element = document.createElement(type)
        if(className){
            element.classList.add(className)
        }
        if(attribute){    
            attribute.forEach(el=>{
                const {key, value} = el
                element.setAttribute(key, value)
            })
        }
        return element
    }
}