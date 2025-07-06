# Playwright 全链路自动化测试闭环模板

[![CI](https://github.com/recohcity/playwright-e2e-template/actions/workflows/playwright.yml/badge.svg)](https://github.com/recohcity/playwright-e2e-template/actions)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E=18.0.0-blue.svg)](https://nodejs.org/)

[English README](README.md) | 中文文档

本模板仓库沉淀了 Playwright + Next.js 全链路自动化测试、性能采集、报告归档、API聚合、前端可视化等最佳实践，适用于现代Web项目的工程落地与团队协作。

- [工程实践与迁移指南](docs/automated_testing_workflow.md)
- [常见问题FAQ (EN)](docs/FAQ.en.md) | [常见问题FAQ (中文)](docs/FAQ.zh-CN.md)
- [Contributing Guide (EN)](CONTRIBUTING.en.md) | [贡献指南 (中文)](CONTRIBUTING.zh-CN.md)
- [更新日志](CHANGELOG.md)

## 主要特性
- 主流程与临时测试分离，目录结构清晰
- 测试脚本唯一断言，杜绝UI竞态与假失败
- 性能分项采集与自动归档，支持趋势分析
- API聚合与前端仪表盘可视化，支持分组/对比
- .gitignore/.gitkeep规范，保障数据安全
- 一键迁移，适配多项目/多团队

## 目录结构
```
playwright-e2e-template/
  e2e/                  # 主流程与临时测试分离
  scripts/              # 归档脚本
  app/                  # API聚合、前端仪表盘、环境识别
  playwright-test-logs/ # 测试报告归档
  playwright-report/    # Playwright HTML报告
  test-results/         # Playwright原始结果
  docs/                 # 工程实践与迁移指引
  ...
```

## 快速上手
```bash
npm install
npm run dev        # 启动开发环境
npm run test:e2e   # 运行主流程自动化测试并归档
npm run test       # 仅运行Playwright测试
npm run test:report # 查看HTML测试报告
```

## 仪表盘页面入口
- 访问 [http://localhost:3000/test/dashboard](http://localhost:3000/test/dashboard) 查看自动化测试趋势仪表盘

## LICENSE
本项目采用 MIT License 许可。 