/* =====================================================================
   FREE GROK 101 · SITE CONFIG  (edit this file only; both pages use it)
   ===================================================================== */

/* ---- SESSIONS ------------------------------------------------------
   One entry per class session. The first upcoming one shows in the hero.
   format: "in-person" or "online"
   date:   ISO with Central offset, e.g. "2026-10-15T12:00:00-05:00"
           (CDT = -05:00 until Nov 1, 2026; CST = -06:00 after).
           null  -> shows "Date announced soon"
   place:  shown under the session (address, or "Zoom link sent after you register")
   To add a Zoom session, copy the commented example below and fill it in.     */
const SESSIONS = [
  {
    id: "osage-1",
    format: "in-person",
    title: "In person · Osage Beach Library",
    date: null,                       // SWAP ME: e.g. "2026-10-15T12:00:00-05:00"
    minutes: 45,
    place: "Osage Beach Library, Osage Beach, MO"
  }
  // ,{
  //   id: "zoom-1",
  //   format: "online",
  //   title: "Online (Zoom)",
  //   date: "2026-10-20T18:30:00-05:00",
  //   minutes: 45,
  //   place: "Zoom link emailed after you register"
  // }
];

/* Text shown when a session has no date yet */
const DATE_TBD_TEXT = "Date announced soon";

/* ---- REGISTRATION (Google Form) ------------------------------------
   SWAP ME once the Google Form "Free Grok 101 Registration" exists:
   action = the form's .../formResponse URL (NOT /viewform), e.g.
     "https://docs.google.com/forms/d/e/1FAIpQLS.../formResponse"
   fields = each question's entry id (from "Get pre-filled link").
   While action is "", the form falls back to opening an email to
   aitheeasyway@gmail.com with the details filled in.                  */
const REG_FORM = {
  action: "",                          // SWAP ME
  fields: {
    name:     "entry.0000000001",      // SWAP ME  Full name (short answer)
    email:    "entry.0000000002",      // SWAP ME  Email (short answer)
    phone:    "entry.0000000003",      // SWAP ME  Phone, optional (short answer)
    business: "entry.0000000004",      // SWAP ME  Business name (short answer)
    format:   "entry.0000000005",      // SWAP ME  "In person" / "Online (Zoom)" (multiple choice)
    session:  "entry.0000000006"       // SWAP ME  Session (short answer)
  }
};

/* ---- LINKS --------------------------------------------------------- */
const PAID_CLASS_URL  = "http://mysihelpers.com";      // switch to https once the cert is issued
const CONTACT_EMAIL   = "aitheeasyway@gmail.com";
const MESSENGER_URL   = "https://m.me/aitheeasyway";
const X_URL           = "https://x.com/aitheeasyway";
const FACEBOOK_URL    = "https://facebook.com/aitheeasyway";

/* ---- helpers (no need to edit) ------------------------------------ */
function sessionWhen(s, opts){
  if(!s.date) return DATE_TBD_TEXT;
  const d = new Date(s.date); if(isNaN(d)) return DATE_TBD_TEXT;
  const day = d.toLocaleDateString('en-US',{timeZone:'America/Chicago',weekday:'short',month:'short',day:'numeric'});
  const t = d.toLocaleTimeString('en-US',{timeZone:'America/Chicago',hour:'numeric',minute:'2-digit'});
  return (opts && opts.dayOnly) ? day : day + ' · ' + t + ' CT';
}
function formatLabel(f){ return f === 'online' ? 'Online (Zoom)' : 'In person'; }
function upcomingSessions(){
  const now = Date.now();
  return SESSIONS.filter(s => !s.date || new Date(s.date).getTime() + (s.minutes||45)*60000 > now);
}
