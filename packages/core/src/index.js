/**
 * 发布订阅类的实现
 * 通过构造函数生成订阅池，用于保存所有触发时间的回调函数
 * add方法，向订阅池中添加回调函数
 * remove方法，从订阅池中移除回调函数
 * fire方法，触发订阅池中的所有回调函数
 */
const isFn = (fn) => {
	return typeof fn === "function" && typeof fn.nodeType !== "number";
};
class Subscribe {
	constructor() {
		this.callbacks = [];
	}
	/**
	 * 添加方法，判断是否是函数，并且需要做去重的校验
	 * @param {*} fn
	 */
	add(fn) {
		if (isFn(fn)) {
			const isExist = this.callbacks.some((cb) => fn === cb);
			!isExist ? this.callbacks.push(fn) : null;
		}
	}
	/**
	 * 移除方法
	 * @param {*} fn
	 */
	remove(fn) {
		const index = this.callbacks.indexOf(fn);
		if (index !== -1) {
			this.callbacks.splice(index, 1, null);
		}
	}
	/**
	 * 触发方法并支持传值
	 * @param  {...any} args
	 */
	fire(...args) {
		// 数组中存在null
		// this.callbacks.forEach(cb => {
		// 	if (isFn(cb)) {
		// 		cb.call(this, ...args);
		// 	}
		// });

		//保持回调函数数组的干净
		for (let index = 0; index < this.callbacks.length; index++) {
			const cb = this.callbacks[index];
			if (!isFn(cb)) {
				this.callbacks.splice(index, 1);
				index--;
				continue;
			}
			cb.call(this, ...args);
		}
	}
}
export default Subscribe;
