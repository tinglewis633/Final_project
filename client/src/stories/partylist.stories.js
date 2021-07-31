import React from 'react';

import PartyList from "../components/PartyList"

  
  export default {
    title: 'Event/partylist',
    component: PartyList,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Template = (args) => <PartyList {...args} />;
  
  export const simpledsCard = Template.bind({});
  simpledsCard.args = {
    primary: true,
    label: 'Button',
  };
  