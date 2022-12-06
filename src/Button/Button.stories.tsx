import React from 'react'
import {EyeClosedIcon, EyeIcon, SearchIcon, TriangleDownIcon, XIcon, HeartIcon} from '@primer/octicons-react'
import {Story, Meta} from '@storybook/react'
import {Button} from '.'
import {OcticonArgType} from '../utils/story-helpers'

export default {
  title: 'Components/Button',
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'primary', 'danger', 'invisible'],
      },
    },
    alignContent: {
      control: {
        type: 'radio',
        options: ['center', 'start'],
      },
    },
    block: {
      control: {
        type: 'boolean',
      },
    },
    leadingVisual: OcticonArgType([EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon]),
    trailingVisual: OcticonArgType([EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon]),
    trailingAction: OcticonArgType([TriangleDownIcon]),
    trailingVisualCount: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    block: false,
    size: 'medium',
    disabled: false,
    variant: 'default',
    alignContent: 'center',
    trailingVisual: null,
    leadingVisual: null,
    trailingAction: null,
    trailingVisualCount: undefined,
  },
} as Meta<typeof Button>

export const Playground: Story<typeof Button> = args => <Button {...args}>Default</Button>
