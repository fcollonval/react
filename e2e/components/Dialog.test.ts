import {test, expect} from '@playwright/test'
import {visit} from '../test-helpers/storybook'
import {themes} from '../test-helpers/themes'

test.describe('Dialog', () => {
  test.describe('Default', () => {
    for (const theme of themes) {
      test.describe(theme, () => {
        test('default @vrt', async ({page}) => {
          await visit(page, {
            id: 'components-dialog--default',
            globals: {
              colorScheme: theme,
            },
          })

          // Default state
          await page.getByRole('button', {name: 'Show dialog'}).click()
          expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot(`Dialog.Default.${theme}.png`)
        })

        test('axe @aat', async ({page}) => {
          await visit(page, {
            id: 'components-dialog--default',
            globals: {
              colorScheme: theme,
            },
          })
          await expect(page).toHaveNoViolations()
        })
      })
    }
  })

  test.describe('Stress Test', () => {
    for (const theme of themes) {
      test.describe(theme, () => {
        test('default @vrt', async ({page}) => {
          await visit(page, {
            id: 'components-dialog-features--stress-test',
            globals: {
              colorScheme: theme,
            },
          })

          await page.getByRole('button', {name: 'Show dialog'}).click()
          expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot(`Dialog.Stress Test.${theme}.png`)
        })

        test('axe @aat', async ({page}) => {
          await visit(page, {
            id: 'components-dialog-features--stress-test',
            globals: {
              colorScheme: theme,
            },
          })
          await expect(page).toHaveNoViolations()
        })
      })
    }
  })

  test.describe('With Custom Renderers', () => {
    for (const theme of themes) {
      test.describe(theme, () => {
        test('default @vrt', async ({page}) => {
          await visit(page, {
            id: 'components-dialog-features--with-custom-renderers',
            globals: {
              colorScheme: theme,
            },
          })

          await page.getByRole('button', {name: 'Show dialog'}).click()
          expect(await page.screenshot({animations: 'disabled'})).toMatchSnapshot(
            `Dialog.With Custom Renderers.${theme}.png`,
          )
        })

        test('axe @aat', async ({page}) => {
          await visit(page, {
            id: 'components-dialog-features--with-custom-renderers',
            globals: {
              colorScheme: theme,
            },
          })
          await expect(page).toHaveNoViolations()
        })
      })
    }
  })
})
