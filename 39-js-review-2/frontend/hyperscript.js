let tagNames = [ 'form', 'input', 'button', 'li', 'h3', 'img']

tagNames.forEach(function(tagName){
    window[tagName] = function(...children){
        let element =  document.createElement(tagName)

        if(!(children[0] instanceof Element) && typeof children[0] != 'string'){
            let attributes = children.shift()
            for(let attribute in attributes){
                if(typeof attributes[attribute] == 'function'){
                    element.addEventListener(attribute, attributes[attribute])
                } else {
                    element.setAttribute(attribute, attributes[attribute])
                }
            }
        }


        element.append(...children)
        return element
    }
})