# Playwright自动化测试工程常见问题FAQ

[English FAQ](FAQ.en.md) | [中文FAQ](FAQ.zh-CN.md)

## 1. 为什么E2E流程偶发失败？
- 检查断言是否基于页面唯一提示区域，避免依赖动画/异步渲染。
- 推荐：`await expect(page.locator('#result-tip')).toHaveText('操作成功');`

## 2. 测试报告未正确分组或数据混淆？
- 检查环境识别逻辑（如window.__ENV_MODE__），确保命令与文档一致。
- 检查归档脚本是否根据环境自动分组。

## 3. 生产环境下testAPI仍可访问？
- 检查testAPI挂载逻辑，仅在开发/测试环境暴露。
- 生产环境建议彻底关闭testAPI。

## 4. 性能指标未采集或报告未生成？
- 检查E2E脚本中性能采集代码，归档脚本是否执行成功。
- 查看playwright-test-logs/目录下是否有最新报告。

## 5. 本地与CI测试结果不一致？
- 检查依赖版本锁定，推荐统一使用`npm ci`。
- 建议团队统一Node版本。

## 6. 临时文件、测试报告误提交？
- 检查.gitignore/.gitkeep配置，主流程与临时测试分离。

## 7. 前端仪表盘无法展示分组/趋势？
- 检查API聚合逻辑与前端渲染，确认数据结构一致。

## 8. CI/CD集成失败或报告未上传？
- 检查GitHub Actions配置，确认依赖、浏览器、报告目录等步骤无误。

## 9. 测试脚本变更后前端报告无变化？
- 只改E2E脚本无需重启服务，改动API/前端/归档脚本建议重启。

## 10. 其他问题如何排查？
- 参考docs/automated_testing_workflow.md第7章问题排查流程图。 