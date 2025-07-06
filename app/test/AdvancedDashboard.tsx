import { useEffect, useState } from 'react';

function groupByEnv(data) {
  return data.reduce((acc, item) => {
    const env = item.env || 'unknown';
    acc[env] = acc[env] || [];
    acc[env].push(item);
    return acc;
  }, {});
}

export default function AdvancedDashboard() {
  const [trendData, setTrendData] = useState([]);
  const [env, setEnv] = useState('production');
  useEffect(() => {
    fetch('/api/performance-trend').then(res => res.json()).then(setTrendData);
  }, []);
  const grouped = groupByEnv(trendData);
  const envs = Object.keys(grouped);
  const current = grouped[env] || [];
  return (
    <div>
      <h2>自动化测试趋势（高级仪表盘）</h2>
      <div>
        <label>分组切换：</label>
        {envs.map(e => (
          <button key={e} onClick={() => setEnv(e)} style={{fontWeight: env===e?'bold':'normal'}}>{e}</button>
        ))}
      </div>
      <table border="1" cellPadding={4} style={{marginTop:8}}>
        <thead>
          <tr>
            <th>测试时间</th>
            <th>资源加载(ms)</th>
            <th>端到端加载(ms)</th>
            <th>FPS</th>
            <th>差异高亮</th>
          </tr>
        </thead>
        <tbody>
          {current.map((row, i) => (
            <tr key={i} style={{background: i>0 && row.metrics && current[i-1].metrics && row.metrics.pageLoad > current[i-1].metrics.pageLoad ? '#ffeaea' : undefined}}>
              <td>{row.date || row.time || '-'}</td>
              <td>{row.metrics?.pageLoad ?? '-'}</td>
              <td>{row.metrics?.e2eLoad ?? '-'}</td>
              <td>{row.metrics?.fps ?? '-'}</td>
              <td>{i>0 && row.metrics && current[i-1].metrics ? (row.metrics.pageLoad - current[i-1].metrics.pageLoad) : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 可扩展为趋势折线图、均值对比等 */}
    </div>
  );
} 