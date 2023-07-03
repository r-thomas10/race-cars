import { Racer } from "./Racer";

export interface SolarCar implements Racer {
  team: string;
  speed: number;

  constructor(team: string) {
    this.team = team;
  }

  accelerate(): number {
    return this.speed + 1;
  }
  isFuelEmpty(): boolean {
    return false;
  }
} 