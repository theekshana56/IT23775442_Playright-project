import { test, expect } from '@playwright/test';

test('Pos_Fun_01 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka oona.');
  await page.getByText('මට ඒක ඕන').click();
});

test('Pos_Fun_02 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kadee yamu');
  await page.getByText('අපි කඩේ යමු.').click();
});