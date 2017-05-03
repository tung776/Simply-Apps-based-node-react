###1 first step you need to install modules need such as: ###
    babel-cli, babel-register, babel-polyfill and babel-preset-es2015
Airm to install please type this command below in your terminal
```
yarn add -D babel-cli babel-register babel-polyfill babel-preset-es2015
```
###2. Make index.js file in root folder with content below:###
```
require('babel-register');
require('babel-polyfill');
require('./server');
```
###3. make .babelrc in root folder with content below:###
```
{
    "presets": ["es2015"]
}
```
###===========================================================================###
###1. Cài đặt các module cần thiết: 
babel-cli babel-register babel-polifill babel-preset-es2015
```
yarn add -D babel-cli babel-register babel-polifill babel-preset-es2015
```
####2 Tạo file index.js tại thư mục gốc với nội dung###
```
require("babel-register");
require("babel-polyfill");
require("./server/index");
```
####3. Tạo file .babelrc tại thư mục gốc###

{
    "presets": ["es2015"]
}