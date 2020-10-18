import { JitsiConference } from "./JitsiConference";

export interface JitsiConnection {
  constructor(
    appID: string | null,
    token: string | null,
    options: JitsiConnectionOptions
  ): void;
  connect: (options?: any) => void;
  disconnect: () => void;
  initJitsiConference: (name: string, options: any) => JitsiConference;
  addEventListener: (...args: any[]) => void;
  removeEventListener: (...args: any[]) => void;
  addFeature: (...args: any[]) => void;
  removeFeature: (...args: any[]) => void;
}

type JitsiConnectionOptions = {};
