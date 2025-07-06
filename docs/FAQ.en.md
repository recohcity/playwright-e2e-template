# Playwright Automation Testing Project FAQ

[English FAQ](FAQ.en.md) | [中文FAQ](FAQ.zh-CN.md)

## 1. Why do E2E flows occasionally fail?
- Check if assertions are based on a unique result area, avoid relying on animation/asynchronous rendering.
- Recommended: `await expect(page.locator('#result-tip')).toHaveText('Success');`

## 2. Test reports are not grouped correctly or data is mixed?
- Check environment detection logic (e.g. window.__ENV_MODE__), ensure commands match the documentation.
- Check if the archiving script groups by environment.

## 3. testAPI is still accessible in production?
- Check testAPI mounting logic, only expose in development/testing.
- Strongly recommend disabling testAPI in production.

## 4. Performance metrics not collected or report not generated?
- Check performance collection code in E2E scripts, ensure archiving script runs successfully.
- Check if there are new reports in playwright-test-logs/.

## 5. Local and CI test results are inconsistent?
- Check dependency version lock, recommend using `npm ci`.
- Team should unify Node version.

## 6. Temporary files or test reports are accidentally committed?
- Check .gitignore/.gitkeep config, separate main and temporary tests.

## 7. Dashboard cannot display grouping/trends?
- Check API aggregation logic and frontend rendering, ensure data structure is consistent.

## 8. CI/CD integration fails or reports are not uploaded?
- Check GitHub Actions config, ensure dependencies, browsers, report directories are correct.

## 9. Frontend report does not update after test script changes?
- Only changing E2E scripts does not require restart; changes to API/frontend/archiving scripts may require restart.

## 10. How to troubleshoot other issues?
- Refer to Section 7 of docs/automated_testing_workflow.md for troubleshooting flowchart. 