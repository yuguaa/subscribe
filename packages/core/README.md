# Subscribe发布订阅类
使用`import Subscribe from "@yugu/subscribe"`导入类
通过`const pool = new Subscribe`创建发布订阅实例
该类实例可以通过`add`方式向订阅池中添加事件，`pool.add(fn)`
该类实例可以通过`remove`方式从订阅池中移除事件，`pool.remove(fn)`
该类实例可以通过`fire`方式触发订阅池中所有的函数，`pool.fire()`
```js
<script type="module">
  import Subscribe from "@yugu/subscribe";
  const btn = document.querySelector(".submit");
  const pool = new Subscribe();
  const fn1 = () => {
    console.log(1);
  };
  const fn2 = () => {
    console.log(2);
    pool.remove(fn1);
  };
  const fn3 = () => {
    console.log(3);
  };
  const fn4 = () => {
    console.log(4);
  };
  pool.add(fn1);
  pool.add(fn2);
  pool.add(fn3);
  pool.add(fn4);
  btn.onclick = function (event) {
    pool.fire();
    console.log(pool);
  };
</script>
```
