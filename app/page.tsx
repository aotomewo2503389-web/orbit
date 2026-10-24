"use client";

import { useEffect, type CSSProperties } from "react";

type WidthStyle = CSSProperties & { "--w": string };
const customWidth = (width: string): WidthStyle => ({ "--w": width });

export default function HomePage() {
  useEffect(() => {
    const loadOrbit = async () => {
      const globalWindow = window as Window & { supabase?: unknown };

      if (!globalWindow.supabase) {
        await new Promise<void>((resolve) => {
          let attempts = 0;

          const tick = () => {
            attempts += 1;
            if ((window as Window & { supabase?: unknown }).supabase || attempts >= 50) {
              resolve();
              return;
            }
            setTimeout(tick, 100);
          };

          tick();
        });
      }

      await Promise.all([import("../app.js"), import("../landing-interactions.js")]);
    };

    loadOrbit().catch((error: unknown) => {
      console.error("Orbit could not initialize.", error);
    });
  }, []);

  return (
    <>
      <div className="cosmos" aria-hidden="true" />
      <div className="pblur top" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="pblur bottom" aria-hidden="true"><i /><i /><i /></div>

      <nav className="nav glass" aria-label="Main">
        <button className="nav-back" id="navBack" aria-label="Back" hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          <span>Back</span>
        </button>
        <a className="logo" href="#" id="logoHome" aria-label="Orbit by SLAWN home">
          <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="7" fill="var(--violet)" /><ellipse cx="16" cy="16" rx="14" ry="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(-24 16 16)" /><circle cx="28" cy="10.6" r="2" fill="var(--ink-2)" /></svg>
          orbit <small>by SLAWN</small>
        </a>
        <div className="nav-links">
          <a href="#how" className="land-only">How it works</a>
          <a href="#courses" className="land-only">Courses</a>
          <button className="btn btn-primary" id="navStart" hidden>Start practising</button>
          <button className="btn btn-soft nav-install" id="navInstall" type="button" hidden>Install app</button>
          <button className="btn btn-soft" id="navProfile" type="button" hidden>Profile</button>
          <button className="theme-toggle" id="navTheme" type="button" aria-label="Switch to dark mode" aria-pressed="false" title="Switch to dark mode" hidden>
            <span className="theme-toggle-sun" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg></span>
            <span className="theme-toggle-moon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.7 8.7 0 1 0 20.2 15.2Z" /></svg></span>
            <span className="theme-toggle-thumb" aria-hidden="true" />
          </button>
          <button className="btn btn-soft" id="navOut" hidden>Sign out</button>
        </div>
      </nav>

      <main>
        <section className="view" id="v-boot">
          <div className="app-wrap" style={{ justifyContent: "center" }}>
            <div className="panel glass" id="bootPanel"><div className="launch"><div className="planet ringed" /><h2 className="title">Getting things ready</h2></div></div>
          </div>
        </section>
        <section className="view" id="v-signin" hidden>
          <div className="app-wrap" style={{ justifyContent: "center" }}><div className="panel glass" id="signinPanel" style={{ textAlign: "center" }} /></div>
        </section>
        <section className="view" id="v-landing" hidden>
          <header className="hero">
            <div className="hero-orbit" aria-hidden="true">
              <svg viewBox="0 0 900 900">
                <circle className="ring" cx="450" cy="450" r="210" /><circle className="ring r2" cx="450" cy="450" r="320" /><circle className="ring r3" cx="450" cy="450" r="430" />
                <g className="spin"><circle cx="660" cy="450" r="16" fill="var(--violet)" /></g>
                <g className="spin s2"><circle cx="450" cy="130" r="10" fill="var(--amber)" /></g>
                <g className="spin" style={{ animationDuration: "90s" }}><circle cx="20" cy="450" r="7" fill="var(--teal)" /></g>
              </svg>
            </div>
            <h1><span className="ln"><span className="hero-line-mount" /></span><span className="ln soft"><span className="hero-line-mount" /></span><span className="ln"><span className="hero-line-mount" /></span><span className="ln"><span className="hero-line-mount" /></span></h1>
            <div className="hero-foot">
              <p>Past questions for your courses, asked cold. Miss one and Orbit shows you the exact mistake you made, then brings it back until it sticks.</p>
              <button className="btn btn-primary" id="heroStart" data-start>Start practising</button>
            </div>
          </header>
          <section className="section" id="how">
            <div className="section-head">
              <h2>How Orbit works</h2>
              <div className="section-tools">
                <div className="drag-hint"><i className="glass"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg></i>Swipe or drag</div>
                <div id="rail-controls" />
              </div>
            </div>
            <div className="rail" id="rail">
              <article className="story s1"><div className="art"><div className="paper-stack"><div className="paper"><b>Past question</b>Define magnetic flux density and state its SI unit.</div><div className="paper"><b>Past question</b>State Lenz’s law and explain how it follows from conservation of energy.</div><div className="paper"><b>Past question</b>A transformer steps 240 V down to 12 V. If the primary has 1200 turns, how many turns are on the secondary?</div></div></div><div className="cap glass"><span>Question bank</span><h3>Built from course papers and lecture notes</h3></div></article>
              <article className="story s2"><div className="art"><div className="mini-q"><p>The north pole of a magnet is pushed into a coil. The near end becomes…</p><div>A south pole</div><div className="pick">A north pole</div><div>Nothing, there’s no battery</div></div></div><div className="cap glass"><span>Practice first</span><h3>The question comes before the explanation</h3></div></article>
              <article className="story s3"><div className="art"><div className="chips"><div className="chip">Inverted turns ratio <em>×3</em></div><div className="chip">Forgot to square r <em>×2</em></div><div className="chip">Lenz direction flipped <em>×1</em></div></div></div><div className="cap glass"><span>Mistake tagging</span><h3>Every wrong answer gets a name, so you can fix the habit</h3></div></article>
              <article className="story s4"><div className="art"><div className="bars"><div>Transformers<s style={customWidth("38%")} /></div><div>Induction<s style={customWidth("54%")} /></div><div>Capacitance<s style={customWidth("72%")} /></div><div>Electrostatics<s style={customWidth("88%")} /></div></div></div><div className="cap glass"><span>Weak-spot map</span><h3>See where you lose marks, then practise only that</h3></div></article>
              <article className="story s5"><div className="art"><div className="vs"><div>You<s style={customWidth("70%")} /><b>7</b></div><div>Tolu<s style={customWidth("60%")} /><b>6</b></div></div></div><div className="cap glass"><span>Head to head</span><h3>Same questions as a friend, live or by challenge code</h3></div></article>
            </div>
          </section>
          <section className="section phone-showcase" aria-labelledby="phone-showcase-title">
            <div className="section-head">
              <div><p className="eyebrow">A closer look</p><h2 id="phone-showcase-title">Made for the way you practise.</h2></div>
              <p className="showcase-intro">Three small glimpses of a calmer, more useful study session.</p>
            </div>
            <div id="phone-showcase-mount" />
          </section>
          <section className="section"><div className="statement"><h2>Question<br />first.</h2><h2 className="right">Explanation<br />after.</h2><p>Most study tools hand you a summary and hope it sticks. Orbit asks the exam question first. Get it wrong and you see why that specific answer was wrong, followed by the working. Then a similar question comes back later to check the fix held.</p></div></section>
          <section className="section" id="universities">
            <div className="section-head"><h2>Universities in orbit</h2></div>
            <div className="university-list">
              <article className="university-tile glass" aria-label="Covenant University, available now">
                <img className="university-logo" src="/universities/covenant-university.jpeg" alt="" aria-hidden="true" />
                <h3>Covenant University</h3>
                <span className="university-status">Available now</span>
              </article>
              <article className="university-tile glass coming-soon" tabIndex={0} aria-label="UNILAG, coming soon">
                <img className="university-logo" src="/universities/unilag.jpeg" alt="" aria-hidden="true" />
                <h3>UNILAG</h3>
                <span className="university-status" aria-hidden="true">Coming soon</span>
              </article>
              <article className="university-tile glass coming-soon" tabIndex={0} aria-label="Landmark University, coming soon">
                <img className="university-logo" src="/universities/landmark-university.jpeg" alt="" aria-hidden="true" />
                <h3>Landmark University</h3>
                <span className="university-status" aria-hidden="true">Coming soon</span>
              </article>
            </div>
          </section>
          <section className="section" id="courses">
            <div className="section-head"><h2>Courses in orbit</h2></div>
            <div className="lineup" id="lineup" aria-label="Courses" />
          </section>
          <section className="section closing"><h2><span>Start</span><span>your orbit.</span></h2><button className="btn btn-primary" id="closingStart" data-start>Start practising</button></section>
          <footer className="glass">
            <div><div className="logo" style={{ marginBottom: 10 }}>orbit <small>by SLAWN</small></div><p>Exam practice for Covenant University courses, built from course papers and lecture notes.</p></div>
            <div><h4>Product</h4><a href="#how">How it works</a><a href="#courses">Courses</a><a href="#" data-start>Start practising</a></div>
            <div><h4>Theme</h4><a href="#" data-theme-set="light">Light</a><a href="#" data-theme-set="dark">Dark</a></div>
            <div><h4>Legal</h4><a href="/legal/privacy.html">Privacy Policy</a><a href="/legal/terms.html">Terms of Service</a></div>
            <p className="fine">© 2026 Orbit by SLAWN. Your progress is saved privately to your account.</p>
          </footer>
        </section>
        <section className="view" id="v-onboard" hidden><div className="app-wrap" style={{ justifyContent: "center" }}><div className="panel glass" id="obPanel" /></div></section>
        <section className="view" id="v-system" hidden><div className="app-wrap"><div className="sys-band" aria-hidden="true"><svg id="band" viewBox="0 0 760 180" /></div><div className="sys-head"><div className="course-university"><img src="/universities/covenant-university.jpeg" alt="" /><span>Covenant University</span></div><div id="sysProgramTag" className="profile-program" /> <p className="eyebrow" id="sysHello">Your courses</p><h2 className="title">Pick a course</h2><p className="sub">Search Covenant University courses, then tap one to set up your session.</p><form className="course-search" id="courseSearchForm" role="search"><input id="courseSearch" type="search" aria-label="Search Covenant University courses" placeholder="Search by course code or title" /><button className="btn btn-soft" type="submit">Search</button></form></div><div className="grid" id="grid" /></div></section>
        <section className="view" id="v-profile" hidden><div className="app-wrap"><div className="panel glass" id="profilePanel" /></div></section>
        <section className="view" id="v-practice" hidden><div className="app-wrap"><div className="pq"><div className="pq-top"><div className="prog"><i id="progBar" style={{ width: 0 }} /></div><span className="pq-count" id="pqCount" /></div><div className="hud glass" id="hud" hidden /><div className="qcard glass" id="qcard" /><div className="pq-actions"><button className="btn btn-soft" id="prevBtn" hidden>Previous</button><button className="btn btn-primary" id="nextBtn" hidden>Next question</button></div></div></div></section>
        <section className="view" id="v-summary" hidden><div className="app-wrap"><div className="panel glass" id="summaryPanel" style={{ textAlign: "center" }} /></div></section>
        <section className="view" id="v-dash" hidden><div className="app-wrap"><div className="panel glass" id="dashPanel" /></div></section>
        <section className="view" id="v-duel" hidden><div className="app-wrap"><div className="panel glass" id="duelPanel" /></div></section>
      </main>
      <div className="scrim" id="scrim" />
      <div className="sheet glass" id="sheet" role="dialog" aria-modal="true" aria-label="Session settings" />
    </>
  );
}
