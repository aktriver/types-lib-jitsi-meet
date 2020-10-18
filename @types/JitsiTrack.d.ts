export interface JitsiTrack {
  type: "video" | "audio" | "desktop";
  addEventListener: (event: string, listener: Function) => void;
  removeEventListener: (event: string, listener: Function) => void;
  addFeature: Function;
  removeFeature: Function;
  isLocal: () => boolean;
  getType: () => this["type"];
  mute: () => Promise<void>;
  unmute: () => Promise<void>;
  isMuted: () => boolean;
  attach: (container: any) => void;
  dettach: (container: any) => void;
  dispose: () => Promise<any>;
  getId: () => string;
  getParticipantId: () => string;
  setAudioOutput: (audioOutputDeviceId: string) => void;
  getDeviceId: () => string;
  isEnded: () => boolean;
  setEffect: (effect: any) => void;
}
