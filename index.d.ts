/*
 * This module just provides type definitions.
 * You need to load lib-jitsi-meet.min.js by your self.
 * https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/API.md#installation
 *
 *
 * https://github.com/jitsi/lib-jitsi-meet
 * https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/API.md
 */

import { JitsiMeetJS } from "./types";

export * from "./types";

declare global {
  interface Window {
    JitsiMeetJS: JitsiMeetJS;
  }
}
