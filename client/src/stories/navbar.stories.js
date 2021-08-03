import React from 'react';

import NavBar from "../components/NavBar"

  
  export default {
    title: 'Event/navbar',
    component: NavBar,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Template = (args) => <NavBar {...args} />;
  
  export const simpleNav = Template.bind({});
  simpleNav.args = {
    primary: true,
    label: 'Button',
  };

  export const selectedNav = Template.bind({});
  selectedNav.args = {
    primary: true,
    label: 'Button',
  };
  