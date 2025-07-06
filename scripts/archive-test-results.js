const fs = require('fs');
const path = require('path');
const resultPath = 'test-results/test-results.json';
const reportDir = 'playwright-test-logs';
if (!fs.existsSync(resultPath)) {
  console.error('测试结果文件不存在:', resultPath);
  process.exit(1);
}
const results = JSON.parse(fs.readFileSync(resultPath, 'utf-8'));
const dateStr = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12);
const reportFile = path.join(reportDir, `test-report-${dateStr}.md`);

// 遍历所有测试，找到 performance-metrics（修正为遍历 test.results[].attachments）
let metrics = {};
let testTitle = '';
let status = '';
let time = new Date().toLocaleString();
if (results.suites) {
  for (const suite of results.suites) {
    for (const spec of suite.specs || []) {
      for (const test of spec.tests || []) {
        testTitle = test.title || '';
        status = test.status || '';
        for (const result of test.results || []) {
          const perf = (result.attachments || []).find(a => a.name === 'performance-metrics');
          if (perf) {
            metrics = JSON.parse(Buffer.from(perf.body, 'base64').toString('utf-8'));
          }
        }
      }
    }
  }
}
const content = `<!-- { "env": "development", "metrics": ${JSON.stringify(metrics)}, "title": "${testTitle}", "status": "${status}", "date": "${time}" } -->\n# 自动化流程测试报告\n- **测试时间**: ${time}\n- **测试用例**: ${testTitle}\n- **测试结果**: ${status}\n- **性能数据**: ${JSON.stringify(metrics)}\n`;
fs.writeFileSync(reportFile, content);

// 自动生成 index.md 索引，单独列出关键指标
const files = fs.readdirSync(reportDir).filter(f => f.endsWith('.md') && f !== 'index.md');
let table = '| 测试报告 | 时间 | 用例 | 结果 | 加载时长(ms) | 按钮点击 | 结果文字 |\n|---|---|---|---|---|---|---|\n';
for (const file of files.sort().reverse()) {
  const content = fs.readFileSync(path.join(reportDir, file), 'utf-8');
  const match = content.match(/<!--\s*(\{[\s\S]*?\})\s*-->/);
  if (match && match[1]) {
    const meta = JSON.parse(match[1]);
    const m = meta.metrics || {};
    table += `| [${file}](${file}) | ${meta.date || '-'} | ${meta.title || '-'} | ${meta.status || '-'} | ${m.pageLoad ?? '-'} | ${m.buttonClicked ? '✅' : '❌'} | ${m.resultText || '-'} |\n`;
  }
}
fs.writeFileSync(path.join(reportDir, 'index.md'), table);

// 自动同步到 public/playwright-test-logs 供前端访问
const fse = require('fs-extra');
const publicDir = path.join(__dirname, '../public/playwright-test-logs');
fse.ensureDirSync(publicDir);
fse.copySync(reportDir, publicDir, { overwrite: true });
