"use client";
import { useState } from "react";
export default function Page() {
  const [showTip, setShowTip] = useState(false);
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 80 }}>
      <button id="action-btn" onClick={() => setShowTip(true)} style={{ fontSize: 20 }}>
        点击我
      </button>
      {showTip && (
        <div id="result-tip" style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32 }}>
          操作成功
        </div>
      )}
    </main>
  );
} 