import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'common/components/Navbar',
    component: Navbar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        title: { control: 'title' },
        href: { control: 'href' },
        color: { control: 'primary', options: ['primary', 'tertiary'] },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Primary Title',
        href: '#',
        color: 'primary'
    },
};

export const Tertiary: Story = {
    args: {
        title: 'Tertiary Title',
        href: '#',
        color: 'tertiary'
    },
};
