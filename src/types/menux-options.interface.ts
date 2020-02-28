import { TriggerEvent } from '../enums/trigger-event.enum';

export interface MenuxOptions {
  triggerOn: TriggerEvent[];
  selector?: string;
  enableDefaultEvent?: boolean;
}
