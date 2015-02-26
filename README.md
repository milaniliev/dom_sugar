# DOMSugar
## A tiny library that adds useful functions to DOM host objects.

## API

### element.setAttributes({id: 'jack', name: 'people'})
A shortcut for setAttribute with multiple values.


### Element.create('div', {id: 'nav'}, "<p>Hello</p>")
Creates and returns a new Element.


### NodeList.forEach(function(node){})
Array-like iteration over NodeLists.
