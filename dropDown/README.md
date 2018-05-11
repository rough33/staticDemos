# dropdown
## Basic project setup

#### Dropdown list improved by using jQuery with mark.js
Open dropdown.html

#### Dropdown list with ajax and search filter version2
Open dropdownVer2.html 

#### e2e Protractor test
Used Protractor for e2e test
test.gif
Test screenshot url: http://recordit.co/kIZMXZLDe3

```
npm install -g protractor
webdriver-manager update
webdriver-manager start
#run test locally, need to change path in conf.js
cd test
protractor conf.js
```
处理大量数据及提高匹配效率：
  1. 使用第三方lib如mark.js, 避免一次次的频繁触发dom重渲染，例如innerHTML。
  2. 定时器：因为在此场景中数据处理可以不同步且不按顺序进行，在面对大量数据时可以利用定时器优化遍历数组，让遍历异步进行。

  ```
     function chunk (data) {
       setTimeout(function() {
           processData(data.shift());
           if (data.length > 0) {
               setTimeout(arguments.callee, 100);
         }
       }, 100);
   }
   ```
  3. 数据过滤：只保留需要的数据。
  4. 使用其它工具如web workers。
  5. 使用懒加载。
