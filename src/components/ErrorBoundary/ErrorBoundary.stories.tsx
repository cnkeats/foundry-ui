import React from 'react';

import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ErrorBoundary, { ErrorBoundaryProps } from './ErrorBoundary';
import { has } from 'lodash';

const Template: Story<ErrorBoundaryProps> = ({ hasError, ...args }: ErrorBoundaryProps) => {
  return (
    <div>
      <ErrorBoundary
        {...args}
        hasError={hasError}
      />
      <br/>
      <ErrorBoundary
        {...args}
        hasError={!hasError}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  hasError: true,
  errorText: 'Internal server error',
  errorCode: '502',
};

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    design: {
      type: 'figma',
      url: '-',
    },
  },
} as Meta;
