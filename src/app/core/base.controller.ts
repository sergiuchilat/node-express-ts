export default class BaseController {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    Object.getOwnPropertyNames(proto)
          .filter(name => typeof (this as any)[name] === 'function' && name !== 'constructor')
          .forEach(name => {
            // @ts-ignore
            this[name] = (this[name] as any).bind(this);
          });
  }
}
