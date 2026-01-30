import { test, expect } from '@playwright/test';

test('Pos_Fun_01 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka oona.');
  await page.getByText('මට ඒක ඕන.').click();
});

test('Pos_Fun_02 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kadee yamu');
  await page.getByText('අපි කඩේ යමු').click();
});

test('Pos_Fun_03 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mee vaahanee oyaagedha?');
  await page.getByText('මේ වාහනේ ඔයාගෙද?').click();
});

test('Pos_Fun_04 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gaalle yanava saha iitapasse maathara yanava');
  await page.getByText('මම ගාල්ලෙ යනව සහ ඊටපස්සෙ මාතර යනව').click();
});

test('Pos_Fun_05 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa enavanam mama ennam');
  await page.getByText('ඔයා එනවනම් මම එන්නම්').click();
});

test('Pos_Fun_06 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('meheeta enna');
  await page.getByText('මෙහේට එන්න').click();
});

test('Pos_Fun_07 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eyaa enavaa');
  await page.getByText('එයා එනවා').click();
});

test('Pos_Fun_08 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('eyaa enne naethuva inne naee');
  await page.getByText('එයා එන්නෙ නැතුව ඉන්නේ නෑ').click();
});

test('Pos_Fun_09 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakarala ehaapaeththe kenaata kathaakaranna');
  await page.getByText('කරුණාකරල එහාපැත්තෙ කෙනාට කතාකරන්න').click();
});

test('Pos_Fun_10 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('UBa aave aeyi?');
  await page.getByText('උඹ ආවෙ ඇයි?').click();
});

test('Pos_Fun_11 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('SuBha upandhinayak veevaa !');
  await page.getByText('සුභ උපන්දිනයක් වේවා !').click();
});

test('Pos_Fun_12 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('yamu yamu');
  await page.getByText('යමු යමු').click();
});

test('Pos_Fun_13 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa iiyedha aave ?');
  await page.getByText('ඔයා ඊයෙද ආවෙ ?').click();
});

test('Pos_Fun_14 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Mama sindhuvak ahanavaa');
  await page.getByText('මම සින්දුවක් අහනවා').click();
});

test('Pos_Fun_15 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama labana sathiye rata yanavaa');
  await page.getByText('මම ලබන සතියෙ රට යනවා').click();
});

test('Pos_Fun_16 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama Facebook ekata post ekak dhaemmaa.');
  await page.getByText('මම Facebook එකට post එකක් දැම්මා.').click();
});

test('Pos_Fun_17 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('EUR 200');
  await page.getByText('EUR 200').click();
});

test('Pos_Fun_18 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api trip eka Galle yamu');
  await page.getByText('අපි trip එක Galle යමු').click();
});

test('Pos_Fun_19 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa koheedha yannee ?');
  await page.getByText('ඔයා කොහේද යන්නේ ?').click();
});

test('Pos_Fun_20 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api dhuvamu');
  await page.getByText('අපි දුවමු').click();
});

test('Pos_Fun_21 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata godak dhukayi');
  await page.getByText('මට ගොඩක් දුකයි').click();
});

test('Pos_Fun_22 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Api anivaaren mee vaedee karanna oona.');
  await page.getByText('අපි අනිවාරෙන් මේ වැඩේ කරන්න ඕන.').click();
});

test('Pos_Fun_23 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Oya kaaladha ?');
  await page.getByText('ඔය කාලද ?').click();
});

test('Pos_Fun_24 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama exam ekata yadhdhi magee ayadhumpathraya amathaka unaa. iita passe mama Ayiyata call karala eeka aran edhdhi exam eka patan aran vinaadi dhayak vithara parakku unaa kiyala shaalaadhipathi mata baennaa.');
  await page.getByText('මම exam එකට යද්දි මගේ අයදුම්පත්‍රය අමතක උනා. ඊට පස්සෙ මම අයියට call කරල ඒක අරන් එද්දි exam එක පටන් අරන් විනාඩි දයක් විතර පරක්කු උනා කියල ශාලාදිපති මට බැන්නා.').click();
});

//Negative functional tests

test('Neg_Fun_01 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyage sup ekta sthuuthiyi');
  const output = await page.locator('text=ඔයගෙ සුප් එක්ට ස්තූතියි').textContent();
  expect(output).not.toBe('ඔයගෙ සප් එක්ට ස්තූතියි');
});

test('Neg_Fun_02 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('anna boss oyata files tikath aran enna kivvaa');
  const output = await page.locator('text=අන්න boss ඔයට files ටිකත් අරන් එන්න කිව්වා').textContent();
  expect(output).not.toBe('අන්න ප්‍රදානියා ඔයට ලිපිගොණු ටිකත් අරන් එන්න කිව්වා');
});

test('Neg_Fun_03 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('matayannoone');
  const output = await page.locator('text=මටයන්නෝනෙ').textContent();
  expect(output).not.toBe('මට යන්න ඕනෙ');
});

test('Neg_Fun_04 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama oyaata godak lv');
  const output = await page.locator('text=මම ඔයාට ගොඩක් ල්ව්').textContent();
  expect(output).not.toBe('මම ඔයාට ගොඩක් lv');
});

test('Neg_Fun_05 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Thanksssss a lottttt');
  const output = await page.locator('text=ථන්ක්ස්ස්ස්ස්ස් a ලොට්ට්ට්ට්').textContent();
  expect(output).not.toBe('ගොඩක් ස්තූතියි');
});

test('Neg_Fun_06 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Apple gedi 2k dhenna');
  const output = await page.locator('text=Apple ගෙඩි 2ක් දෙන්න ').textContent();
  expect(output).not.toBe('ඇපල් ගෙඩි 2ක් දෙන්න');
});

test('Neg_Fun_07 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('OyA HeTA EnaWA Neda');
  const output = await page.locator('text=ඔය හෙඨ එනWඅ ණෙඩ').textContent();
  expect(output).not.toBe('ඔයා හෙට එනවද');
});

test('Neg_Fun_08 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ehema kohomadha venne !');
  const output = await page.locator('text=එහෙම කොහොමද වෙන්නෙ !').textContent();
  expect(output).not.toBe('එහෙම කොහොමද වෙන්නෙ ?');
});

test('Neg_Fun_09 - Empty input should produce no output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  }).fill('');
  await page.waitForTimeout(1000);
  const output = page.locator('div').filter({ hasText: '' });
});




test('Neg_Fun_10 - Joined words handling should fail for matabanisoone', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata    godak       sathutuyi');
  const output = await page.locator('text=මට    ගොඩක්       සතුටුයි').textContent();
  expect(output).not.toBe('මට ගොඩක් සතුටුයි');
});

test('Pos_UI_01 - Real-time output update',async({page}) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', {name: 'Input Your Singlish text here.'}).fill('oyaa godak hodha kenek');
  await expect(page.getByText('ඔයා ගොඩක් හොද කෙනෙක්')).toBeVisible();
});