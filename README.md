# Playwright End-to-End Automation Testing Template

[![CI](https://github.com/recohcity/playwright-e2e-template/actions/workflows/playwright.yml/badge.svg)](https://github.com/recohcity/playwright-e2e-template/actions)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E=18.0.0-blue.svg)](https://nodejs.org/)

English | [中文文档 (Chinese)](README.zh-CN.md)

This template repository provides best practices for Playwright + Next.js end-to-end automation testing, performance data collection, report archiving, API aggregation, and frontend visualization. It is suitable for modern web project engineering and team collaboration.

- [Engineering Guide & Migration](docs/automated_testing_workflow.md) | [Engineering Guide (EN)](docs/automated_testing_workflow.en.md)
- [FAQ (EN)](docs/FAQ.en.md) | [FAQ (中文)](docs/FAQ.zh-CN.md)
- [Contributing Guide (EN)](CONTRIBUTING.en.md) | [贡献指南 (中文)](CONTRIBUTING.zh-CN.md)
- [Changelog](CHANGELOG.md)

## Features
- Separation of main and temporary tests, clear directory structure
- Unique assertion in test scripts, eliminating UI race conditions and false negatives
- Performance metrics collection and auto-archiving, supporting trend analysis
- API aggregation and frontend dashboard visualization, supporting grouping/comparison
- .gitignore/.gitkeep conventions, ensuring data safety
- One-click migration, suitable for multi-project/multi-team

## Directory Structure
```
playwright-e2e-template/
  e2e/                  # Main and temporary tests
  scripts/              # Archiving scripts
  app/                  # API aggregation, dashboard, environment detection
  playwright-test-logs/ # Test report archive
  playwright-report/    # Playwright HTML report
  test-results/         # Playwright raw results
  docs/                 # Engineering guide & migration
  ...
```

## Quick Start
```bash
npm install
npm run dev        # Start development server
npm run test:e2e   # Run main E2E automation and archive reports
npm run test       # Run Playwright tests only
npm run test:report # View HTML test report
```

## Dashboard Entry
- Visit [http://localhost:3000/test/dashboard](http://localhost:3000/test/dashboard) to view the E2E test dashboard

## LICENSE
This project is licensed under the MIT License.
