# DOMSugar
## A tiny library that adds useful functions to DOM host objects.

## API

### Element.create(tagName, attributes, content)
Creates and returns a new Element.
```javascript
  nav = Element.create('div', {id: 'nav'}, "<p>Hello</p>")
```

### element.setAttributes(attributes)
A shortcut for setAttribute with multiple values.
```javascript
  nav.setAttributes({id: 'jack', name: 'people'})
```

### NodeList.forEach(function(node){})
Array-like iteration over NodeLists.
```javascript
  document.querySelectorAll('div').forEach(function(element){
    console.log(element.tagName)
  })
```
