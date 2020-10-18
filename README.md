# @aktriver/types-lib-jitsi-meet

Type definitions for [lib-jitsi-meet](https://github.com/jitsi/lib-jitsi-meet), created manually (incomplete).

I was looking for type definitions package for lib-jitsi-meet, but it wasn't found.<br>
(Same thing is being discussed in [original repo's issue](https://github.com/jitsi/lib-jitsi-meet/issues/1025).)

So I created it manually for my uses.<br>
This includes some main type definitions picked by API documents and original sources.

**This type definitions is incomplete and may have many mistakes.**<br>
Be careful if using this.<br>
Any PR is welcome.

## Usage

Install this package.

```sh
npm install --save-dev @aktriver/types-lib-jitsi-meet
// yarn add --dev @aktriver/types-lib-jitsi-meet
```

Import it from any ts file.<br>
e.g. index.ts

```typescript
// This doesn't load lib-jitsi-meet.min.js.
// Just importing type definitions.
import "@aktriver/types-lib-jitsi-meet";
```

Then you can find `JitsiMeetJS` interface in window object.

Of course you need to load lib-jitsi-meet.min.js in [official way](https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/API.md#installation).
