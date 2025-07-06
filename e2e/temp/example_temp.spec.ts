import { test, expect } from '@playwright/test';

test('临时专项流程-仅调试用', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // 仅做简单断言或调试
  await expect(page.locator('body')).toBeVisible();
  // 可插入任意调试代码，不影响主流程归档
}); 