# react-comment-docs

## Getting started

[TBD]

## How to use it? 

### Syntax:

```javascript
// @doc {variable}
-> code here
// @ 
```
#### Component description
```javascript
 // @doc description This is example component description. Keep it simple and easy to understand, try to describe all the component logic. @
```

#### Component props
```javascript
// @docs params
props = { 
  text,
  props2,
  props3,
}
// @
```


#### Component functions 
```javascript
  // @docs functions
  const getNameLength = (name) => {
  return name.length;

  function getNameType(name){
  return typeof(name)  
  }
  // @
```

#### DOM elements
```javascript
function ExampleComponent(props) {
  return (
    // @docs DOM
    <div>
        <p>Lorem ipsum</p>
    </div>
    // @
  )
}
```

#### PropTypes
```javascript
// @docs propTypes
ExampleComponent.propTypes = {
  name: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
};
// @
```

### Config 
You can specify the `fields` used in your docs, allowed component `extensions`, components and template `directory`.
```javascript
export const config = {
  fields: ["name", "description", "functions", "DOM", "params"],
  templatePath: "./template.md",
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  componentsDir: "./components",
};

```

