export interface MenuItem {
  name: string;
  action?: Function;
  children?: MenuItem[]
  disabled?: boolean;
  icon?: string;
  image?: string;
}
