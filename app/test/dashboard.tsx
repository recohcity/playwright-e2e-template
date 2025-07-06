"use client";
import { useEffect, useState } from "react";

interface RowData {
  report: string;
  time: string;
  title: string;
  status: string;
  pageLoad: string;
  buttonClicked: string;
  resultText: string;
}

export default function TestDashboard() {
  const [rows, setRows] = useState<RowData[]>([]);

  useEffect(() => {
    fetch("/playwright-test-logs/index.md")
      .then(res => res.text())
      .then(md => {
        // 解析 markdown 表格为数组
        const lines = md.split("\n").filter(l => l.startsWith("|") && !l.startsWith("|---"));
        const data = lines.slice(1).map(line => {
          const cols = line.split("|").map(s => s.trim());
          return {
            report: cols[1],
            time: cols[2],
            title: cols[3],
            status: cols[4],
            pageLoad: cols[5],
            buttonClicked: cols[6],
            resultText: cols[7]
          };
        });
        setRows(data);
      });
  }, []);

  return (
    <div>
      <h2>自动化测试趋势仪表盘</h2>
      <table border={1} cellPadding={4}>
        <thead>
          <tr>
            <th>报告</th>
            <th>时间</th>
            <th>用例</th>
            <th>结果</th>
            <th>加载时长(ms)</th>
            <th>按钮点击</th>
            <th>结果文字</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td><a href={`/playwright-test-logs/${row.report.replace('[','').replace(']','').replace('(','').replace(')','')}`}>{row.report}</a></td>
              <td>{row.time}</td>
              <td>{row.title}</td>
              <td>{row.status}</td>
              <td>{row.pageLoad}</td>
              <td>{row.buttonClicked}</td>
              <td>{row.resultText}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 