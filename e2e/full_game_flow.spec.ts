import { test, expect } from '@playwright/test';

test('极简交互流程', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#action-btn')).toBeVisible();
  await page.click('#action-btn');
  // 检查按钮点击后结果文字
  const resultText = await page.locator('#result-tip').textContent();
  await expect(page.locator('#result-tip')).toHaveText('操作成功');
  // 性能采集
  const pageLoad = await page.evaluate(() => performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart);
  await test.info().attach('performance-metrics', {
    body: Buffer.from(JSON.stringify({
      pageLoad,
      buttonClicked: true,
      resultText: resultText?.trim() || ''
    }), 'utf-8'),
    contentType: 'application/json'
  });
});
