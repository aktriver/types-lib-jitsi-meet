import { JitsiTrack } from "./JitsiTrack";
import { LogLevels } from "./utils";

export interface JitsiMeetJS {
  version: string;
  JitsiConnection: any;
  ProxyConnectionService: any;
  constants: {
    participantConnectionStatus: any;
    recording: any;
    sipVideoGW: any;
    transcriptionStatus: any;
  };
  events: {
    conference: any;
    connection: any;
    detection: any;
    track: any;
    mediaDevices: any;
    connectionQuality: any;
    e2eping: any;
  };
  errors: {
    conference: any;
    connection: any;
    track: any;
  };
  errorTypes: {
    JitsiTrackError: any;
  };
  logLevels: LogLevels;
  mediaDevices: any;
  analytics: any;
  init: (options?: JitsiMeetJSInitOptions) => void;
  isDesktopSharingEnabled: () => boolean;
  isWebRtcSupported: () => boolean;
  setLogLevel: (level: string) => void;
  setLogLevelById: (level: any, id: any) => void;
  addGlobalLogTransport: (globalTransport: any) => void;
  removeGlobalLogTransport: (globalTransport: any) => void;
  setGlobalLogOptions: (options: any) => void;
  createLocalTracks: (
    options?: CreateLocalTracksOptions,
    firePermissionPromptIsShownEvent?: any
  ) => Promise<JitsiTrack[]>;
  createTrackVADEmitter: (
    localAudioDeviceId: any,
    sampleRate: any,
    vadProcessor: any
  ) => any;
  createAudioMixer: () => any;
  getActiveAudioDevice: () => any;
  isDeviceListAvailable: () => Promise<boolean>;
  isDeviceChangeAvailable: (deviceType: string) => boolean;
  isMultipleAudioInputSupported: () => boolean;
  isCollectingLocalStats: () => boolean;
  enumerateDevices: (callback: Function) => void;
  getGlobalOnErrorHandler: (
    message: any,
    source: any,
    lineno: any,
    colno: any,
    error: any
  ) => any;
  setNetworkInfo: (isOnline: boolean) => void;
  setVideoTrackContentHints: (track: any, hint: string) => void;
  precallTest: any;
  util: {
    AuthUtil: any;
    ScriptUtil: any;
    browser: any;
  };
}

export type JitsiMeetJSInitOptions = {
  useIPv6?: boolean;
  disableAudioLevels?: boolean;
  disableSimulcast?: boolean;
  enableWindowOnErrorHandler?: boolean;
  disableThirdPartyRequests?: boolean;
  enableAnalyticsLogging?: boolean;
  externalStorage?: Record<string, unknown>;
  callStatsCustomScriptUrl?: string;
  disableRtx?: boolean;
  disableH264?: boolean;
  preferH264?: boolean;
};

export type CreateLocalTracksOptions = {
  devices?: string[];
  resolution?: any;
  cameraDeviceId?: string;
  micDeviceId?: string;
  minFps?: number;
  maxFps?: number;
  facingMode?: "user" | "unvironment";
};
