import { IInputAdapter } from "./IInputAdapter.js";

export class SimulatedInputAdapter extends IInputAdapter {
  onLeft(cb) { loop(2, cb); }
  onRight(cb) { loop(3, cb); }
  onJump(cb) { loop(5, cb); }
}
