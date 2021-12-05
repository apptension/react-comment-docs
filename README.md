# react-comment-docs

Low-effort self-documented components.

This small package allow you to create documentation for your components on the fly. It's as simple as writing comments in your files. 
It will create a `markdown` file for each of your components automatically! You can customize it however you want in `config.js`.
For even better experience, we recommend using our [snippets](##Add-component-snippets-with-docs-indluded-in-VSCODE) for VSCode.

## Getting started

Install npm package ✨
```bash
npm i npm i @apptension/react-comment-docs
```

Run watcher 👀
```bash
npx react-comment-docs
```


## How to use it? 

### Syntax:

```javascript
// @docs {field}
-> code here
// !docs {field}
```
#### Component description
```javascript
// @docs description
 This is example component description. Keep it simple and easy to understand, try to describe all the component logic. 
// !docs
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
  // !docs functions
```

#### DOM elements
```javascript
function ExampleComponent(props) {
  return (
    // @docs DOM
    <div>
        <p>Lorem ipsum</p>
    </div>
    // !docs DOM
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
// !docs propTypes
```

#### Translations
```javascript
// @docs translations
<CustomButton
 label={intl.formatMessage({
    description: 'A11Y: Navigation Button',
    defaultMessage: 'Navigate',
  })}
 />
// !docs translations
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

// !docs your-field
```

## Add component snippets with docs indluded in VSCODE 
1. Copy the code from `SNIPPETS.json` file
2. Open VSCode console using cmd + P then type and select `>Configure User Snippets`
3. Select `javascriptreact.json` file.
4. Paste the code from `SNIPPETS.json` file
 

