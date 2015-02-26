Object.defineProperty(NodeList.prototype, 'forEach' {
  enumerable: false,
  value: Array.prototype.forEach
})

Object.defineProperty(Element.prototype, 'setAttributes', {
  enumerable: false,
  value: function(attributes){
    for (var attribute in attributes){
      if attributes.hasOwnProperty(attribute){
        this.setAttribute(attribute, attributes[attribute])
      }
    }
  }
})

Object.defineProperty(Element, 'create', {
  enumerable: false,
  value: function(tag, attributes, content){
    var element = document.createElement(tag)
    element.setAttributes(attributes)
    element.innerHTML = content
    return element
  }
})
