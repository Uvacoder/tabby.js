# Tabby
Simple Vue 3 tab component

## Example
Import the `Tabs` and `Tab` components from the component file, and include components as necessary:
```js
import { Tabs, Tab } from './Tabby.js'
```

Then, just nest your `<tab>` elements with their content inside a `<tabs>` element, and set the `name` attribute for the tab text:
```html
<tabs>
  <tab name="First Tab">
    ...
  </tab>
  <tab name="Second Tab">
    ...
  </tab>
  <tab name="Third Tab">
    ...
  </tab>
</tabs>
```

## Styling
Pre-defined classes are provided, but styling is up to implementation. Use the following classes to style:

- `.tabs`: Wrapper for <tabs> element
- `.tabs-btns`: Wrapper for collection of interactive tab elements
- `.tab-btn`: Class for each interactive tab element
- `.tab-btn.active`: State class for active interactive tab element
- `.tab-cont`: Wrapper for the container div of the active tab component

Here is a boilerplate to get started, influenced from the card tab component from Bootstrap:

```css
.tabs {
  font-family: Arial;
  border: 1px solid;
  border-radius: 5px;
  overflow: hidden;
}
.tabs-btns {
  display: flex;
  gap: 5px;
  padding: 8px 8px 0px 8px;
  margin-bottom: -1px;
  background: #ddd;
}
.tab-btn {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  min-width: 50px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  overflow: hidden;
}
.tab-btn.active {
  border-bottom-color: #fff;
  font-weight: bold;
}
.tab-cont {
  border-top: 1px solid;
  padding: 15px;
  background: #fff;
}
```
