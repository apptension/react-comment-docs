# react-comment-docs

Low-effort self-documented components

## Getting started

[TBD]

## How to use it? 

### Syntax:

```javascript
// @doc {field}
-> code here
// @ 
```
#### Component description
```javascript
 // @doc description This is example component description. Keep it simple and easy to understand, try to describe all the component logic. @
```

#### Component props
```javascript
// @docs props
props = { 
  text,
  props2,
  props3,
}
// @
function ExampleComponent(props) {
  return ()
}
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
You can specify the `fields` used in your docs, allowed component `extensions`, components and templates `directory`.
```javascript
export const config = {
  fields: ["name", "description", "functions", "DOM", "props", "translation"],
  templatePath: "./template.md",
  dynamicTemplatePath: "./dynamic-template-fragment.md",
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  componentsDir: "./components",
};

```

## Custom docs fields
You can specify your own `fields` by adding them in `config.js` file and use it in your components; 
```javascript
export const config = {
  fields: ["your-field"],
};
```
```javascript
// @docs your-field

 const example = some.important.code.to.document();

// @
```

