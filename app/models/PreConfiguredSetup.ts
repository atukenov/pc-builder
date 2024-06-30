import { IComponent } from "./Component";

export interface IPreConfiguredSetup {
  id: number;
  name: string;
  description: string;
  price: number;
  components: IComponent[];
  createdAt: Date;
  updatedAt: Date;
}
