# Patcher

This lib allows to use jsonpath rules inside a json patch rules

## How to use it

if you want to use json path rules you can use add a jsonpath pro inside the rules,
 oother

```js
import {mergeConfigsPatch} from '@mapstore/patcher';


const sourceFile = {
  name: "Alfredo",
  isValid: true,
  children: [{
    name: "Luke"
  }]
}
const patchFile = [{
  "op": "remove",
  "jsonpath": "$.name"
}]

const result = mergeConfigsPatch(sourceFile, patchFile);

// console.log(result)
{
  isValid: true,
  children: [{
    name: "Luke"
  }]
}
```

## build

we use rollup for building this

`npm run build`

## references

[jsonpath](https://goessner.net/articles/JsonPath/)

[jsonpatch](http://jsonpatch.com/)
