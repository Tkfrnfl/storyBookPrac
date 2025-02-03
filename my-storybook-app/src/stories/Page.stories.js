import { expect, userEvent, within } from '@storybook/test';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    //layout: 'fullscreen',
    viewport: {
      viewports: {
        customMobile: {
          name: 'Custom Mobile',
          styles: { width: '360px', height: '640px' }, 
        },
        customTablet: {
          name: 'Custom Tablet',
          styles: { width: '768px', height: '1024px' },
        },
      },
      defaultViewport: 'customMobile',
    },
  },
};

export const LoggedOut = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
