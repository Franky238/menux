import { MenuxOptions } from './types/menux-options.interface';
import { MenuItem } from './types/menu-items.interface';
export declare class Menux {
    private defaultOptions;
    private _menuItems;
    constructor(opts: Partial<MenuxOptions>);
    set menuItems(val: MenuItem[]);
    private registerListeners;
    invoke(items: MenuItem[]): void;
}
