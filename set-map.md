## Set 和 Map 数据结构
### 基本用法:
		Set本身是一个构造函数，用来生成Set数据结构
		const s=new set()
		[2,3,4,5,5,2,2,2,2,2,3].forEach(x=>s.add(x));//2  3  4   5//通过add方法向set结构加入成员，结果表明set结构不会添加重复的值
		Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
### 例一
        const set = new Set([1, 2, 3, 4, 4]);
        [...set]
        // [1, 2, 3, 4]

### 例二
        const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
        items.size // 5
### 例三
        function divs () {
          return [...document.querySelectorAll('div')];
        }
        const set = new Set(divs());
        set.size // 56
        类似于
        divs().forEach(div => set.add(div));
        set.size // 56  //例一和例二都是Set函数接受数组作为参数，例三是接受类似数组的对象作为参数。
## Set 实例的属性和方法
### Set 结构的实例有以下属性。
		Set.prototype.constructor：构造函数，默认就是Set函数。
		Set.prototype.size：返回Set实例的成员总数。
### Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
        add(value)：添加某个值，返回 Set 结构本身。
        delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
        has(value)：返回一个布尔值，表示该值是否为Set的成员。
        clear()：清除所有成员，没有返回值。
### Set 结构的实例有四个遍历方法，可以用于遍历成员。
        keys()：返回键名的遍历器
        values()：返回键值的遍历器，由于Set 结构没有键名,只有键值（或者说键名和键值是同一个值,所以keys方法和values方法的行为完全一致。Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法
        entries()：返回键值对的遍历器上面代码中，entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。
        forEach()：使用回调函数遍历每个成员  上面代码说明，forEach方法的参数就是一个处理函数。该函数的参数与数组的forEach一致，依次为键值、键名、集合本身（上例省略了该参数）。这里需要注意，Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。
        另外，forEach方法还可以有第二个参数，表示绑定处理函数内部的this对象。
        需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
## WeakSet
### WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
        首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
        其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
### WeakSet 结构有以下三个方法。
        WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
        WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
        WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。