"use client";

import { useState } from "react";

export default function DubLab() {
  const [language, setLanguage] = useState("Hindi");
  const [fileName, setFileName] = useState("");

  return (
    <main style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>D</span>
          <span>DubLab</span>
        </div>

        <div style={styles.navLinks}>
          <span>Home</span>
          <span>Features</span>
          <span>Pricing</span>
        </div>

        <button style={styles.loginButton}>Login</button>
      </nav>

      <section style={styles.hero}>
        <div style={styles.badge}>AI VIDEO DUBBING</div>

        <h1 style={styles.heading}>
          Make your videos speak
          <br />
          <span style={styles.gradientText}>every language.</span>
        </h1>

        <p style={styles.description}>
          Dub your videos into multiple languages with AI-powered voices.
          Create content for audiences around the world.
        </p>

        <div style={styles.card}>
          <div style={styles.uploadArea}>
            <div style={styles.uploadIcon}>↑</div>

            <h2 style={styles.uploadTitle}>
              Upload your video
            </h2>

            <p style={styles.uploadText}>
              MP4, MOV or WEBM • Maximum 500MB
            </p>

            <label style={styles.uploadButton}>
              Choose Video
              <input
                type="file"
                accept="video/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setFileName(file.name);
                }}
              />
            </label>

            {fileName && (
              <p style={styles.fileName}>
                Selected: {fileName}
              </p>
            )}
          </div>

          <div style={styles.settings}>
            <div style={styles.settingGroup}>
              <label style={styles.label}>
                Target Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={styles.select}
              >
                <option>Hindi</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Japanese</option>
                <option>Portuguese</option>
              </select>
            </div>

            <button
              style={styles.dubButton}
              onClick={() => {
                alert(
                  fileName
                    ? `Ready to dub ${fileName} into ${language}.`
                    : "Please choose a video first."
                );
              }}
            >
              Start Dubbing →
            </button>
          </div>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>⚡</div>
          <h3>Fast AI Dubbing</h3>
          <p>
            Convert your videos into different languages quickly.
          </p>
        </div>

        <div style={styles.feature}>
          <div style={styles.featureIcon}>🌍</div>
          <h3>Multiple Languages</h3>
          <p>
            Reach viewers across different countries and regions.
          </p>
        </div>

        <div style={styles.feature}>
          <div style={styles.featureIcon}>🎙️</div>
          <h3>Natural Voices</h3>
          <p>
            Create natural-sounding AI voiceovers for your content.
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 DubLab. AI dubbing for creators.
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #070b16 0%, #0d1222 50%, #10182d 100%)",
    color: "#ffffff",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  nav: {
    height: "72px",
    padding: "0 7%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "22px",
    fontWeight: "700",
  },

  logoIcon: {
    width: "34px",
    height: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    background:
      "linear-gradient(135deg, #7c3aed, #06b6d4)",
    fontWeight: "800",
  },

  navLinks: {
    display: "flex",
    gap: "30px",
    color: "#aab3c5",
    fontSize: "14px",
  },

  loginButton: {
    background: "transparent",
    color: "#ffffff",
    border: "1px solid #39445c",
    borderRadius: "9px",
    padding: "9px 18px",
    cursor: "pointer",
  },

  hero: {
    maxWidth: "1050px",
    margin: "0 auto",
    padding: "80px 20px 50px",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "7px 13px",
    borderRadius: "30px",
    background: "rgba(124,58,237,0.15)",
    border: "1px solid rgba(124,58,237,0.35)",
    color: "#b99cff",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  heading: {
    fontSize: "clamp(42px, 7vw, 78px)",
    lineHeight: "1.02",
    margin: "25px 0 20px",
    letterSpacing: "-3px",
  },

  gradientText: {
    background:
      "linear-gradient(90deg, #a78bfa, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  description: {
    maxWidth: "650px",
    margin: "0 auto",
    color: "#9da8bd",
    fontSize: "18px",
    lineHeight: "1.7",
  },

  card: {
    maxWidth: "760px",
    margin: "50px auto 0",
    background: "rgba(17,24,39,0.8)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
  },

  uploadArea: {
    border: "2px dashed #34405a",
    borderRadius: "16px",
    padding: "45px 20px",
  },

  uploadIcon: {
    width: "58px",
    height: "58px",
    margin: "0 auto 18px",
    borderRadius: "50%",
    background: "#202a40",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "#a78bfa",
  },

  uploadTitle: {
    margin: "0 0 8px",
    fontSize: "22px",
  },

  uploadText: {
    margin: "0 0 22px",
    color: "#7f8aa3",
    fontSize: "14px",
  },

  uploadButton: {
    display: "inline-block",
    padding: "12px 22px",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, #7c3aed, #4f46e5)",
    cursor: "pointer",
    fontWeight: "600",
  },

  fileName: {
    marginTop: "18px",
    color: "#67e8f9",
    fontSize: "14px",
  },

  settings: {
    display: "flex",
    gap: "15px",
    alignItems: "end",
    marginTop: "20px",
  },

  settingGroup: {
    flex: "1",
    textAlign: "left",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    color: "#9da8bd",
    fontSize: "13px",
  },

  select: {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "1px solid #34405a",
    background: "#151d30",
    color: "#ffffff",
    fontSize: "15px",
  },

  dubButton: {
    padding: "13px 22px",
    border: "none",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, #06b6d4, #2563eb)",
    color: "#ffffff",
    fontWeight: "700",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  features: {
    maxWidth: "1050px",
    margin: "20px auto 0",
    padding: "40px 20px 80px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  feature: {
    padding: "25px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.07)",
  },

  featureIcon: {
    fontSize: "26px",
    marginBottom: "12px",
  },

  feature: {
    padding: "25px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.07)",
  },

  footer: {
    padding: "25px",
    textAlign: "center",
    color: "#657087",
    borderTop: "1px solid rgba(255,255,255,0.07)",
    fontSize: "13px",
  },
};
