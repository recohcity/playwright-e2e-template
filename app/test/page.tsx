"use client";
import { useState } from 'react';

export default function TestPage() {
  const [result, setResult] = useState('');
  return (
    <div>
      <button id="action-btn" onClick={() => setResult('操作成功')}>
        点击我
      </button>
      <div id="result-tip">{result}</div>
    </div>
  );
}
