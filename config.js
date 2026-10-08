/* =====================================================================
   FREE GROK 101 · SITE CONFIG  (edit this file only; both pages use it)
   ===================================================================== */

/* ---- SESSIONS ------------------------------------------------------
   One entry per class session. The first upcoming one shows in the hero.
   format: "in-person" or "online"
   minutes: length of the slot (sets the end time + calendar invite)
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
    date: "2026-10-21T12:00:00-05:00", // Wed Oct 21, 12:00 PM CT (CDT)
    minutes: 90,                       // 12:00 to 1:30 PM CT
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
   Google Form "Free Grok 101 Registration" (owned by aitheeasyway@gmail.com).
   action = the form's .../formResponse URL (NOT /viewform).
   fields = each question's entry id. Format options must match exactly:
   "In person" / "Online (Zoom)". If the submit fails (network error),
   the page falls back to opening a pre-filled email to CONTACT_EMAIL.  */
const REG_FORM = {
  action: "https://docs.google.com/forms/d/e/1FAIpQLSfDg-2_0DAr7dtTBC8LO2CH0vaBz_1a6xV_Vj5lM_U6O8NCfg/formResponse",
  fields: {
    name:     "entry.927359473",       // Name (required)
    email:    "entry.1838659936",      // Email (required)
    phone:    "entry.813348282",       // Phone (optional)
    business: "entry.1357160823",      // Business name (optional)
    format:   "entry.30640087",        // Format: "In person" / "Online (Zoom)" (required)
    session:  "entry.509934597"        // Session label text
  }
};

/* ---- LINKS --------------------------------------------------------- */
const PAID_CLASS_URL  = "https://buy.stripe.com/8x2eV52QE9wM2PK5do8AE04"; // $97 hands-on AI Helpers setup class (Stripe)
const CONTACT_EMAIL   = "aitheeasyway@gmail.com";
const MESSENGER_URL   = "https://m.me/aitheeasyway";
const X_URL           = "https://x.com/aitheeasyway";
const FACEBOOK_URL    = "https://facebook.com/aitheeasyway";

/* ---- TESTIMONIALS ("What LANG members say") ----------------------
   Leave EMPTY to hide the section. Only add real quotes, with permission.
   Example shape (do not publish made-up quotes):
   { quote: "...", name: "First L.", role: "Owner, Business Name" }      */
const TESTIMONIALS = [];

/* ---- helpers (no need to edit) ------------------------------------ */
function sessionWhen(s, opts){
  if(!s.date) return DATE_TBD_TEXT;
  const d = new Date(s.date); if(isNaN(d)) return DATE_TBD_TEXT;
  const day = d.toLocaleDateString('en-US',{timeZone:'America/Chicago',weekday:'short',month:'short',day:'numeric'});
  const tf = x => x.toLocaleTimeString('en-US',{timeZone:'America/Chicago',hour:'numeric',minute:'2-digit'});
  let t = tf(d);
  if (s.minutes) {                       // "12:00–1:30 PM" style range
    const e = new Date(d.getTime() + s.minutes*60000), et = tf(e);
    const sm = t.slice(-2), em = et.slice(-2);
    t = (sm === em ? t.slice(0,-3) : t) + '–' + et;
  }
  return (opts && opts.dayOnly) ? day : day + ' · ' + t + ' CT';
}
function formatLabel(f){ return f === 'online' ? 'Online (Zoom)' : 'In person'; }
function upcomingSessions(){
  const now = Date.now();
  return SESSIONS.filter(s => !s.date || new Date(s.date).getTime() + (s.minutes||45)*60000 > now);
}
