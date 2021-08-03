import React from 'react';

import PartyListItem from "../components/PartyListItem"

  
  export default {
    title: 'Event/partylistitem',
    component: PartyListItem,
    argTypes: {
      backgroundColor: { control: 'color' },
  }
  };
  const eventsa = {
    "id": 1,
    "name": "party1",
    "date": "1999-02-02T05:00:00.000Z",
    "address": "123 Test Road, Toronto, Canada",
    "start_time": "1999-02-02T21:30:00.000Z",
    "end_time": "1999-02-03T03:00:00.000Z",
    "price": 2000,
    "population": 15,
    "description": "come drink and have fun",
    "eventprivate": true,
    "agerange": "19+",
    "host_id": 1,
    "username": "lewistheG"
  }

const Template = (args) => <PartyListItem event={eventsa} {...args} />;
  
export const simpleCard = Template.bind({});
  
simpleCard.args = {
  primary: true,
  label: 'Button',      
  };
  