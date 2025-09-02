import { IInputAdapter } from "./IInputAdapter.js";

export class KeyboardInputAdapter extends IInputAdapter {
  onLeft(cb) { onKeyPress("left", cb); }
  onRight(cb) { onKeyPress("right", cb); }
  onJump(cb) { onKeyPress("space", cb); }
}
