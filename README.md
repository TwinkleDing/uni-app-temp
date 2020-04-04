# uni-app-diy

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。

写法：以 #ifdef 或 #ifndef 加 %PLATFORM% 开头，以 #endif 结尾。

#ifdef：if defined 仅在某平台存在
#ifndef：if not defined 除了某平台均存在
%PLATFORM%：平台名称(APP-PLUS || H5)

样式的条件编译
/*  #ifdef  %PLATFORM%  */
平台特有样式
/*  #endif  */

API 的条件编译
// #ifdef  %PLATFORM%
平台特有的API实现
// #endif