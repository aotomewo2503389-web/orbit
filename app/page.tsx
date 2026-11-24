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
          <a href="#faq" className="land-only">FAQ</a>
          <button className="btn btn-primary" id="navStart" hidden>Get started</button>
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
            <div className="hero-copy">
              <p className="hero-kicker">Exam practice, built around your courses</p>
              <h1><span className="ln"><span className="hero-line-mount" /></span><span className="ln soft"><span className="hero-line-mount" /></span></h1>
              <p className="hero-description">Choose a course, practise the questions that matter, and see what to work on next.</p>
              <div className="hero-actions"><button className="btn btn-primary" id="heroStart" data-start>Get started</button><a className="hero-link" href="#how">See how it works</a><span>For Covenant University students</span></div>
            </div>
            <div className="hero-product" role="img" aria-label="Orbit course dashboard preview showing GST211, ENT211 and TMC211">
              <div className="product-window-bar"><span className="window-dots"><i /><i /><i /></span><span>orbit.study</span><span className="product-avatar">A</span></div>
              <div className="product-layout">
                <aside className="product-sidebar"><span className="product-logo"><i /> orbit</span><span className="sidebar-label">YOUR SPACE</span><span className="sidebar-link active">◫ &nbsp; My courses</span><span className="sidebar-link">◷ &nbsp; Recent practice</span><span className="sidebar-link">⌁ &nbsp; Progress</span><div className="sidebar-profile"><i>A</i><span>Alex Morgan<small>200 level</small></span></div></aside>
                <div className="product-main"><div className="product-greeting"><div><span>MONDAY, 9 JUNE</span><h2>Good morning, Alex.</h2><p>Ready to make a little progress?</p></div><b>☼</b></div><div className="product-section-label">YOUR COURSES <span>See all →</span></div><div className="product-course-list"><div className="product-course"><i className="course-icon gst">G</i><span><b>GST211</b><small>Philosophy, Logic and Human Existence</small></span><em>Continue →</em></div><div className="product-course"><i className="course-icon ent">E</i><span><b>ENT211</b><small>Entrepreneurial Development</small></span><em>Start →</em></div><div className="product-course"><i className="course-icon tmc">T</i><span><b>TMC211</b><small>Success Parameters</small></span><em>Start →</em></div></div><div className="product-progress"><div><span>THIS WEEK</span><b>You're building a good rhythm.</b></div><strong>4 <small>sessions</small></strong><i><span /></i></div></div>
              </div>
            </div>
          </header>
          <section className="section walkthrough" id="how">
            <div className="section-head"><div><p className="eyebrow">One good session at a time</p><h2>From course page to exam day.</h2></div></div>
            <div className="walkthrough-list">
              <article className="walkthrough-step"><div className="walkthrough-copy"><span>01</span><h3>Start with your courses.</h3><p>Keep the subjects you’re working on together. Open GST211, ENT211, or TMC211 and see what’s ready to practise.</p></div><div className="walkthrough-visual course-picker" aria-hidden="true"><div className="mock-heading"><span>YOUR COURSES</span><b>See all →</b></div><div className="mock-course"><i>G</i><span><b>GST211</b><small>Philosophy, Logic and Human Existence</small></span><em>Open ↗</em></div><div className="mock-course"><i>E</i><span><b>ENT211</b><small>Entrepreneurial Development</small></span><em>Open ↗</em></div><div className="mock-course"><i>T</i><span><b>TMC211</b><small>Success Parameters</small></span><em>Open ↗</em></div></div></article>
              <article className="walkthrough-step"><div className="walkthrough-copy"><span>02</span><h3>Choose a way to practise.</h3><p>Warm up with a short set or shape a session by topic, difficulty, and pace. You decide what to work on.</p></div><div className="walkthrough-visual session-picker" aria-hidden="true"><div className="mock-window-top"><i /><i /><i /><span>GST211 · PRACTICE</span></div><p className="mock-eyebrow">CHOOSE YOUR NEXT SET</p><h4>What would you like to focus on?</h4><div className="mock-session-card"><i>◷</i><span><b>Quick warm-up</b><small>5 questions · about 10 minutes</small></span><strong>→</strong></div><div className="mock-session-card"><i>⌘</i><span><b>Build your own</b><small>Pick topics and set the pace</small></span><strong>→</strong></div></div></article>
              <article className="walkthrough-step"><div className="walkthrough-copy"><span>03</span><h3>Try the question first.</h3><p>Answer one question at a time. If you miss it, Orbit shows the working and the idea behind the correct answer.</p></div><div className="walkthrough-visual question-preview" aria-hidden="true"><div className="mock-window-top"><i /><i /><i /><span>QUESTION 04 OF 10</span></div><div className="mock-progress"><i /></div><p className="mock-eyebrow">GST211 · LOGIC</p><h4>Which statement best describes a valid argument?</h4><div className="mock-option"><i>A</i> A conclusion supported by true premises</div><div className="mock-option correct"><i>B</i> A conclusion that follows from its premises <b>✓</b></div><div className="mock-option"><i>C</i> A statement most people agree with</div><div className="mock-explanation"><b>That’s the idea.</b><span>Validity is about the connection between premises and conclusion.</span></div></div></article>
              <article className="walkthrough-step"><div className="walkthrough-copy"><span>04</span><h3>See your progress take shape.</h3><p>Review your accuracy by topic, revisit recurring mistakes, and use your results to choose what comes next.</p></div><div className="walkthrough-visual progress-preview" aria-hidden="true"><div className="mock-heading"><span>YOUR GST211 PROGRESS</span><b>This month⌄</b></div><div className="mock-score"><strong>78%</strong><span>accuracy so far<small>↑ 12% from last week</small></span></div><div className="mock-topic"><span>Deductive reasoning</span><i><b style={customWidth("78%")} /></i><strong>78%</strong></div><div className="mock-topic"><span>Ethics</span><i><b style={customWidth("62%")} /></i><strong>62%</strong></div><div className="mock-topic"><span>Human existence</span><i><b style={customWidth("44%")} /></i><strong>44%</strong></div><div className="mock-next">NEXT UP <b>Review human existence →</b></div></div></article>
            </div>
          </section>
          <section className="section feature-highlights" aria-labelledby="feature-highlights-title">
            <div className="section-head"><div><p className="eyebrow">Made for how you study</p><h2 id="feature-highlights-title">Everything you need to keep moving.</h2></div></div>
            <div className="highlight-grid">
              <article className="highlight-card"><span>↗</span><h3>Course-specific questions</h3><p>Practise with question banks organized around your actual courses.</p></article>
              <article className="highlight-card"><span>⌘</span><h3>Sessions that fit your day</h3><p>Choose a quick warm-up or customize a longer practice set.</p></article>
              <article className="highlight-card"><span>✓</span><h3>Explanations that teach</h3><p>See the reasoning and working after each answer—not just a score.</p></article>
              <article className="highlight-card"><span>⌁</span><h3>A map of your weak spots</h3><p>Find topics that need more attention and practise them directly.</p></article>
              <article className="highlight-card"><span>◎</span><h3>Progress worth coming back to</h3><p>Your account keeps your course practice and results together.</p></article>
              <article className="highlight-card"><span>↔</span><h3>Challenge a friend</h3><p>Go head to head on the same set and compare how you did.</p></article>
            </div>
          </section>
          <section className="section courses-section" id="courses">
            <div className="section-head"><div><p className="eyebrow">Your course space</p><h2>Start with the courses in orbit.</h2></div><p className="showcase-intro">Choose your course after signing in to see its question bank and practice options.</p></div>
            <div className="lineup" id="lineup" aria-label="Courses" />
          </section>
          <section className="section faq-section" id="faq" aria-labelledby="faq-title">
            <div className="section-head"><div><p className="eyebrow">Frequently asked questions</p><h2 id="faq-title">A few straight answers.</h2></div></div>
            <div className="faq-list">
              <details><summary>What is Orbit?</summary><p>Orbit is a course-based exam practice app. Choose a course, answer questions, and review explanations and progress by topic.</p></details>
              <details><summary>Which courses are available?</summary><p>Orbit currently focuses on Covenant University courses. Available course pages and question banks are listed in the course catalogue.</p></details>
              <details><summary>How do I get started?</summary><p>Sign in with Google, complete the short course setup, and choose a course to open its practice space.</p></details>
              <details><summary>Can I choose what to practise?</summary><p>Yes. Depending on the course bank, you can build a set by topic, difficulty, question count, and timer—or start a short warm-up.</p></details>
              <details><summary>What happens when I get a question wrong?</summary><p>Orbit shows the correct answer, explains the underlying idea, and records the topic so you can review it later.</p></details>
              <details><summary>Can I practise with a friend?</summary><p>Yes. Start a live duel or create a challenge code to compare results on the same question set.</p></details>
              <details><summary>Will Orbit save my progress?</summary><p>Your practice history and course progress are saved to your account so you can pick up where you left off.</p></details>
              <details><summary>Can I use Orbit on my phone?</summary><p>Yes. Orbit runs in a mobile browser and can be installed from the browser when supported.</p></details>
            </div>
          </section>
          <section className="section closing"><p className="eyebrow">Your next session starts here</p><h2><span>Bring your courses.</span><span>We’ll take it from there.</span></h2><button className="btn btn-primary" id="closingStart" data-start>Get started</button></section>
          <footer className="glass">
            <div><div className="logo" style={{ marginBottom: 10 }}>orbit <small>by SLAWN</small></div><p>Study, practise, and prepare for the courses ahead.</p></div>
            <div><h4>Product</h4><a href="#how">How it works</a><a href="#courses">Courses</a><a href="#faq">FAQ</a><a href="#" data-start>Get started</a></div>
            <div><h4>Theme</h4><a href="#" data-theme-set="light">Light</a><a href="#" data-theme-set="dark">Dark</a></div>
            <div><h4>Legal</h4><a href="/legal/privacy.html">Privacy Policy</a><a href="/legal/terms.html">Terms of Service</a></div>
            <p className="fine">© 2026 Orbit by SLAWN. Your progress is saved privately to your account.</p>
          </footer>
        </section>
        <section className="view" id="v-onboard" hidden><div className="app-wrap" style={{ justifyContent: "center" }}><div className="panel glass" id="obPanel" /></div></section>
        <section className="view" id="v-system" hidden><div className="app-wrap"><div className="sys-band" aria-hidden="true"><svg id="band" viewBox="0 0 760 180" /></div><div className="sys-head"><div className="course-university"><img src="/universities/covenant-university.jpeg" alt="" /><span>Covenant University</span></div><div id="sysProgramTag" className="profile-program" /> <p className="eyebrow" id="sysHello">Your courses</p><h2 className="title">Pick a course</h2><p className="sub">Search Covenant University courses, then tap one to set up your session.</p><form className="course-search" id="courseSearchForm" role="search"><input id="courseSearch" type="search" aria-label="Search Covenant University courses" placeholder="Search by course code or title" /><button className="btn btn-soft" type="submit">Search</button></form></div><div className="grid" id="grid" /></div></section>
        <section className="view" id="v-course" hidden><div className="app-wrap course-app-wrap"><div className="course-page" id="coursePage" /></div></section>
        <section className="view" id="v-profile" hidden><div className="app-wrap"><div className="panel glass" id="profilePanel" /></div></section>
        <section className="view" id="v-practice" hidden><div className="app-wrap practice-app-wrap"><div className="pq"><header className="practice-heading"><div><p className="eyebrow" id="practiceCourse" /><h1 className="practice-title" id="practiceTitle">Practice session</h1></div><button className="btn btn-soft" id="practiceLeave" type="button">Leave session</button></header><div className="pq-top"><div className="prog"><i id="progBar" style={{ width: 0 }} /></div><span className="pq-count" id="pqCount" /></div><div className="hud glass" id="hud" hidden /><div className="qcard glass" id="qcard" /><div className="pq-actions"><button className="btn btn-soft" id="prevBtn" hidden>Previous</button><button className="btn btn-primary" id="nextBtn" hidden>Next question</button></div></div></div></section>
        <section className="view" id="v-summary" hidden><div className="app-wrap"><div className="panel glass" id="summaryPanel" style={{ textAlign: "center" }} /></div></section>
        <section className="view" id="v-dash" hidden><div className="app-wrap"><div className="panel glass" id="dashPanel" /></div></section>
        <section className="view" id="v-duel" hidden><div className="app-wrap"><div className="panel glass" id="duelPanel" /></div></section>
      </main>
      <div className="scrim" id="scrim" />
      <div className="sheet glass" id="sheet" role="dialog" aria-modal="true" aria-label="Session settings" />
    </>
  );
}
