import React from 'react';

import PartyListItem from "../components/PartyListItem"

  
  export default {
    title: 'Event/partylistitem',
    component: PartyListItem,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Template = (args) => <PartyListItem {...args} />;
  
  export const simpleCard = Template.bind({});
  simpleCard.args = {
    primary: true,
    label: 'Button',
  };
  