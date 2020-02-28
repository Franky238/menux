import { MenuxOptions } from './types/menux-options.interface';
import { TriggerEvent } from './enums/trigger-event.enum';
import { MenuItem } from './types/menu-items.interface';

export class Menux {

  private defaultOptions: MenuxOptions = {
    triggerOn: [TriggerEvent.CONTEXT_MENU],
    enableDefaultEvent: false,
  };

  private _menuItems: MenuItem[] = [];

  constructor(opts: Partial<MenuxOptions>) {
    const options = {
      ...this.defaultOptions,
      ...opts,
    };
    this.registerListeners(options.triggerOn, options.selector, options.enableDefaultEvent);
  }

  set menuItems(val: MenuItem[]) {
    this._menuItems = val;
  }

  private registerListeners(
    eventNames: TriggerEvent[],
    selector: string | null = null,
    enableDefaultEvent = false
  ) {
    for (const eventName of eventNames) {
      if (selector === null) {
        document.addEventListener(eventName, event => {
          this.invoke(this._menuItems);
          if (!enableDefaultEvent) {
            event.preventDefault();
          }
        });
      } else {
        document.addEventListener(eventName, event => {
          if (event.target && event.target instanceof Element && event.target.matches(selector)) {
            this.invoke(this._menuItems);
            if (!enableDefaultEvent) {
              event.preventDefault();
            }
          }
        });
      }
    }
  }

  public invoke(items: MenuItem[]) {
    console.log(items);
  }
}
