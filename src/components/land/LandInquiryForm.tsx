"use client";

import { useRef, useState } from "react";
import { businessInfo } from "@/lib/config/business";
import styles from "./LandInquiryForm.module.css";

const STEP_NAMES = ["Contact", "Property", "Access", "Intentions", "Review"] as const;
const TOTAL_STEPS = STEP_NAMES.length;

const PROPERTY_TYPES = [
  "Woodland", "Woodlot", "Farmland", "Wetland", "Waterfront",
  "Vacant land", "Clear-cut", "Old homestead", "Mixed-use rural land", "Other",
] as const;

const INTENTIONS = [
  "Considering donating the property",
  "May leave it in my will",
  "Interested in selling",
  "Open to a below-market sale",
  "Want the land preserved",
  "Want the land restored",
  "Unsure — want to discuss options",
] as const;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
  province: string;
  municipality: string;
  address: string;
  pid: string;
  acreage: string;
  propertyTypes: string[];
  roadAccess: string;
  vehicleAccess: string;
  buildings: string;
  electricity: string;
  wellSeptic: string;
  mortgage: string;
  intentions: string[];
  why: string;
  ideal: string;
}

const initialData: FormData = {
  fullName: "", email: "", phone: "", preferredContact: "Email",
  province: "", municipality: "", address: "", pid: "", acreage: "",
  propertyTypes: [],
  roadAccess: "Yes", vehicleAccess: "Yes", buildings: "No",
  electricity: "No", wellSeptic: "No", mortgage: "No",
  intentions: [], why: "", ideal: "",
};

function orDash(value: string) {
  return value.trim() === "" ? "—" : value;
}

function buildSummary(d: FormData): string {
  return [
    "LAND STEWARDSHIP INQUIRY",
    "",
    "— Contact —",
    `Name: ${d.fullName}`,
    `Email: ${d.email}`,
    `Phone: ${orDash(d.phone)}`,
    `Preferred contact: ${d.preferredContact}`,
    "",
    "— Property —",
    `Province: ${orDash(d.province)}`,
    `Municipality/county: ${orDash(d.municipality)}`,
    `Address: ${orDash(d.address)}`,
    `PID: ${orDash(d.pid)}`,
    `Approx. acreage: ${orDash(d.acreage)}`,
    `Type: ${d.propertyTypes.length ? d.propertyTypes.join(", ") : "—"}`,
    "",
    "— Access & condition —",
    `Legal road access: ${d.roadAccess}`,
    `Vehicle access: ${d.vehicleAccess}`,
    `Buildings: ${d.buildings}`,
    `Electricity: ${d.electricity}`,
    `Well/septic: ${d.wellSeptic}`,
    `Mortgage/lien: ${d.mortgage}`,
    "",
    "— Intentions —",
    d.intentions.length ? d.intentions.map((i) => `· ${i}`).join("\n") : "—",
    "",
    `Why now: ${orDash(d.why)}`,
    `Ideal future for the land: ${orDash(d.ideal)}`,
  ].join("\n");
}

export function LandInquiryForm() {
  const [step, setStep] = useState<number | "done">(1);
  const [data, setData] = useState<FormData>(initialData);
  const [error, setError] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const toggleList = (key: "propertyTypes" | "intentions", value: string) =>
    setData((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));

  const goTo = (n: number) => {
    setError(null);
    setStep(n);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const validateStep = (n: number): string | null => {
    if (n === 1) {
      if (data.fullName.trim() === "") return "Please tell us your name so we know who we're talking with.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
        return "Please enter a valid email address so we can reply.";
    }
    return null;
  };

  const next = () => {
    if (typeof step !== "number") return;
    const problem = validateStep(step);
    if (problem) {
      setError(problem);
      return;
    }
    if (step < TOTAL_STEPS) goTo(step + 1);
  };

  const back = () => {
    if (typeof step === "number" && step > 1) goTo(step - 1);
  };

  const send = () => {
    const subject = `Land stewardship inquiry — ${data.fullName.trim()}`;
    const body = buildSummary(data);
    window.location.href = `mailto:${businessInfo.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setError(null);
    setStep("done");
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof step !== "number") return;
    if (step === TOTAL_STEPS) send();
    else next();
  };

  const currentStep = typeof step === "number" ? step : TOTAL_STEPS;

  return (
    <div className={styles.shell}>
      {step !== "done" && (
        <ol className={styles.progress} aria-label="Form progress">
          {STEP_NAMES.map((name, i) => {
            const n = i + 1;
            const state = n === currentStep ? "active" : n < currentStep ? "done" : "todo";
            return (
              <li
                key={name}
                className={`${styles.progressItem} ${state === "active" ? styles.progressActive : ""} ${state === "done" ? styles.progressDone : ""}`}
                aria-current={state === "active" ? "step" : undefined}
              >
                {name}
              </li>
            );
          })}
        </ol>
      )}

      <form className={styles.body} onSubmit={handleSubmit} noValidate={step !== "done"}>
        <div className={styles.errorRegion} aria-live="polite">
          {error && <p className={styles.error} role="alert">{error}</p>}
        </div>

        {step === 1 && (
          <fieldset className={styles.stepPanel}>
            <legend className={styles.stepLegend}>
              <h3 ref={headingRef} tabIndex={-1} className={styles.stepHeading}>First, a little about you</h3>
            </legend>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="liq-name">Full name <span className={styles.req} aria-hidden="true">*</span></label>
                <input id="liq-name" type="text" autoComplete="name" required value={data.fullName} onChange={(e) => set("fullName", e.target.value)} />
              </div>
              <div className={styles.field}>
                <label htmlFor="liq-email">Email <span className={styles.req} aria-hidden="true">*</span></label>
                <input id="liq-email" type="email" autoComplete="email" required value={data.email} onChange={(e) => set("email", e.target.value)} />
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="liq-phone">Phone number <span className={styles.hint}>optional</span></label>
                <input id="liq-phone" type="tel" autoComplete="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
              </div>
              <div className={styles.field}>
                <label htmlFor="liq-contact">Preferred contact method</label>
                <select id="liq-contact" value={data.preferredContact} onChange={(e) => set("preferredContact", e.target.value)}>
                  <option>Email</option><option>Phone</option><option>Either</option>
                </select>
              </div>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className={styles.stepPanel}>
            <legend className={styles.stepLegend}>
              <h3 ref={headingRef} tabIndex={-1} className={styles.stepHeading}>Now, the property itself</h3>
            </legend>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="liq-prov">Province <span className={styles.hint}>optional</span></label>
                <input id="liq-prov" type="text" placeholder="e.g. Nova Scotia" value={data.province} onChange={(e) => set("province", e.target.value)} />
              </div>
              <div className={styles.field}>
                <label htmlFor="liq-mun">Municipality or county <span className={styles.hint}>optional</span></label>
                <input id="liq-mun" type="text" value={data.municipality} onChange={(e) => set("municipality", e.target.value)} />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="liq-addr">Property address <span className={styles.hint}>optional</span></label>
              <input id="liq-addr" type="text" autoComplete="street-address" value={data.address} onChange={(e) => set("address", e.target.value)} />
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="liq-pid">Property ID (PID), if available <span className={styles.hint}>optional</span></label>
                <input id="liq-pid" type="text" value={data.pid} onChange={(e) => set("pid", e.target.value)} />
              </div>
              <div className={styles.field}>
                <label htmlFor="liq-acre">Approximate acreage <span className={styles.hint}>optional</span></label>
                <input id="liq-acre" type="text" inputMode="numeric" value={data.acreage} onChange={(e) => set("acreage", e.target.value)} />
              </div>
            </div>
            <fieldset className={styles.checkGroup}>
              <legend>Property type <span className={styles.hint}>choose all that apply</span></legend>
              <div className={styles.checks}>
                {PROPERTY_TYPES.map((t) => (
                  <label className={styles.chk} key={t}>
                    <input type="checkbox" checked={data.propertyTypes.includes(t)} onChange={() => toggleList("propertyTypes", t)} />
                    {t}
                  </label>
                ))}
              </div>
            </fieldset>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className={styles.stepPanel}>
            <legend className={styles.stepLegend}>
              <h3 ref={headingRef} tabIndex={-1} className={styles.stepHeading}>Access and existing features</h3>
            </legend>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="liq-road">Is there legal road access?</label>
                <select id="liq-road" value={data.roadAccess} onChange={(e) => set("roadAccess", e.target.value)}>
                  <option>Yes</option><option>No</option><option>Not sure</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="liq-vehicle">Is the property accessible by vehicle?</label>
                <select id="liq-vehicle" value={data.vehicleAccess} onChange={(e) => set("vehicleAccess", e.target.value)}>
                  <option>Yes</option><option>No</option><option>Seasonally</option>
                </select>
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="liq-buildings">Are there buildings?</label>
                <select id="liq-buildings" value={data.buildings} onChange={(e) => set("buildings", e.target.value)}>
                  <option>No</option><option>Yes</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="liq-power">Is electricity available?</label>
                <select id="liq-power" value={data.electricity} onChange={(e) => set("electricity", e.target.value)}>
                  <option>No</option><option>Yes</option>
                </select>
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="liq-well">Is there a well or septic system?</label>
                <select id="liq-well" value={data.wellSeptic} onChange={(e) => set("wellSeptic", e.target.value)}>
                  <option>No</option><option>Yes</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="liq-mortgage">Mortgage, lien or registered debt?</label>
                <select id="liq-mortgage" value={data.mortgage} onChange={(e) => set("mortgage", e.target.value)}>
                  <option>No</option><option>Yes</option><option>Not sure</option>
                </select>
              </div>
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className={styles.stepPanel}>
            <legend className={styles.stepLegend}>
              <h3 ref={headingRef} tabIndex={-1} className={styles.stepHeading}>What you hope happens</h3>
            </legend>
            <fieldset className={styles.checkGroup}>
              <legend>Your intentions <span className={styles.hint}>choose all that apply</span></legend>
              <div className={styles.checks}>
                {INTENTIONS.map((t) => (
                  <label className={styles.chk} key={t}>
                    <input type="checkbox" checked={data.intentions.includes(t)} onChange={() => toggleList("intentions", t)} />
                    {t}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className={styles.field}>
              <label htmlFor="liq-why">Why are you considering this now? <span className={styles.hint}>optional</span></label>
              <textarea id="liq-why" rows={3} value={data.why} onChange={(e) => set("why", e.target.value)} />
            </div>
            <div className={styles.field}>
              <label htmlFor="liq-ideal">What would you ideally like the land to become? <span className={styles.hint}>optional</span></label>
              <textarea id="liq-ideal" rows={3} value={data.ideal} onChange={(e) => set("ideal", e.target.value)} />
            </div>
          </fieldset>
        )}

        {step === 5 && (
          <fieldset className={styles.stepPanel}>
            <legend className={styles.stepLegend}>
              <h3 ref={headingRef} tabIndex={-1} className={styles.stepHeading}>Review before sending</h3>
            </legend>
            <p className={styles.reviewIntro}>Take a moment — you can go back and change anything. Nothing is stored or sent until your email leaves your own outbox.</p>
            <dl className={styles.summary}>
              <div className={styles.summaryGroup}>
                <div className={styles.summaryHead}><dt>Contact</dt><button type="button" onClick={() => goTo(1)}>Edit</button></div>
                <dd>{data.fullName.trim() || "—"} · {data.email.trim() || "—"}{data.phone.trim() ? ` · ${data.phone.trim()}` : ""} · prefers {data.preferredContact.toLowerCase()}</dd>
              </div>
              <div className={styles.summaryGroup}>
                <div className={styles.summaryHead}><dt>Property</dt><button type="button" onClick={() => goTo(2)}>Edit</button></div>
                <dd>{[data.province, data.municipality, data.address].filter((v) => v.trim()).join(", ") || "—"}{data.acreage.trim() ? ` · ~${data.acreage.trim()} acres` : ""}{data.pid.trim() ? ` · PID ${data.pid.trim()}` : ""}{data.propertyTypes.length ? ` · ${data.propertyTypes.join(", ")}` : ""}</dd>
              </div>
              <div className={styles.summaryGroup}>
                <div className={styles.summaryHead}><dt>Access &amp; condition</dt><button type="button" onClick={() => goTo(3)}>Edit</button></div>
                <dd>Road: {data.roadAccess.toLowerCase()} · Vehicle: {data.vehicleAccess.toLowerCase()} · Buildings: {data.buildings.toLowerCase()} · Power: {data.electricity.toLowerCase()} · Well/septic: {data.wellSeptic.toLowerCase()} · Mortgage/lien: {data.mortgage.toLowerCase()}</dd>
              </div>
              <div className={styles.summaryGroup}>
                <div className={styles.summaryHead}><dt>Intentions</dt><button type="button" onClick={() => goTo(4)}>Edit</button></div>
                <dd>{data.intentions.length ? data.intentions.join("; ") : "—"}{data.why.trim() ? ` · Why now: “${data.why.trim()}”` : ""}{data.ideal.trim() ? ` · Ideally becomes: “${data.ideal.trim()}”` : ""}</dd>
              </div>
            </dl>
          </fieldset>
        )}

        {step === "done" && (
          <div className={styles.thanks}>
            <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
              <circle cx="26" cy="26" r="23" fill="none" stroke="#c8a96e" strokeWidth="1.4" />
              <circle cx="26" cy="26" r="15" fill="none" stroke="#c8a96e" strokeWidth="1" />
              <circle cx="26" cy="26" r="7" fill="none" stroke="#c8a96e" strokeWidth="1" />
              <circle cx="26" cy="26" r="2.4" fill="#c8a96e" />
            </svg>
            <h3 ref={headingRef} tabIndex={-1}>One last step — press send</h3>
            <p>Your email app should have opened with everything filled in and addressed to us. Press send there, and your inquiry is on its way. If it didn&apos;t open, you can email us directly at <a href={`mailto:${businessInfo.contact.email}`}>{businessInfo.contact.email}</a> — or start over below.</p>
            <p className={styles.thanksNote}>We read every inquiry personally and reply within a few days. Photos, surveys or documents can wait until we&apos;ve connected.</p>
            <button type="button" className={styles.restart} onClick={() => { setData(initialData); goTo(1); }}>Start a new inquiry</button>
          </div>
        )}

        {step !== "done" && (
          <div className={styles.nav}>
            <button type="button" className={styles.navBack} onClick={back} disabled={step === 1}>Back</button>
            {typeof step === "number" && step < TOTAL_STEPS ? (
              <button type="submit" className={styles.navNext}>Continue</button>
            ) : (
              <button type="submit" className={styles.navNext}>Send Inquiry</button>
            )}
          </div>
        )}

        {step !== "done" && (
          <p className={styles.privacyNote}>Confidential and without obligation. Your details stay in this page until you send them yourself — nothing is stored on our servers.</p>
        )}
      </form>
    </div>
  );
}
