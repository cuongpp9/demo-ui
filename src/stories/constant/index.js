export default {
  optionSelect: {
    Closed: '1',
    Active: '2',
    Inactive: '3',
  },

  headerTable: [
    {
      key: 'ACCTNo',
      name: 'ACCT No',
    },
    {
      key: 'firstName',
      name: 'First Name',
    },
    {
      key: 'lastName',
      name: 'Last Name',
    },
    {
      key: 'Organization',
      name: 'organization',
    },
    {
      key: 'email',
      name: 'Email',
    },
    {
      key: 'city',
      name: 'City',
    },
    {
      key: 'state',
      name: 'State',
    },
    {
      key: 'currency',
      name: 'Currency',
    },
    {
      key: 'createdDate',
      name: 'Created Date',
    },
    {
      key: 'status',
      name: 'Status',
    },
    {
      key: 'reason',
      name: 'Reason',
    },
  ],

  dataTableTest: [
    {
      ACCTNo: 'Demo-14 May-1',
      firstName: 'Diego',
      lastName: 'Marsella',
      Organization: 'Pepsi',
      email: 'abc@def.com',
      city: 'irving',
      state: 'Maryland',
      currency: 'USD',
      createdDate: '2020-10-10',
      status: 'Active',
      reason: 'View Order',
    },
    {
      ACCTNo: 'Demo-14 May-1',
      firstName: 'Diego',
      lastName: 'Marsella',
      Organization: 'Pepsi',
      email: 'abc@def.com',
      city: 'irving',
      state: 'Maryland',
      currency: 'USD',
      createdDate: '2020-10-10',
      status: 'Inactive',
      reason: 'View Order',
    },
    {
      ACCTNo: 'Demo-14 May-1',
      firstName: 'Diego',
      lastName: 'Marsella',
      Organization: 'Pepsi',
      email: 'abc@def.com',
      city: 'irving',
      state: 'Maryland',
      currency: 'USD',
      createdDate: '2020-10-10',
      status: 'Closed',
      reason: 'View Order',
    },
  ],
  itemStatus: ['status'],
  itemButton: ['reason'],
  FilterTest: [
    {
      fieldName: 'ACCTNo',
      labelFilter: 'ACCT No',
    },
    {
      fieldName: 'firstName',
      labelFilter: 'First Name',
    },
    {
      fieldName: 'lastName',
      labelFilter: 'Last Name',
    },
    {
      fieldName: 'organization',
      labelFilter: 'organization',
    },
    {
      fieldName: 'email',
      labelFilter: 'Email',
    },
    {
      labelFilter: 'City',
      fieldSelect: 'city',
      optionSelect: {
        NewYork: 'NewYork',
        Chicago: 'Chicago',
        California: 'California',
      },
    },
    {
      labelFilter: 'State',
      fieldSelect: 'state',
      optionSelect: {
        State1: 'State1',
        State2: 'State2',
        State3: 'State3',
      },
    },
    {
      labelFilter: 'Currency',
      fieldSelect: 'currency',
      optionSelect: {
        USD: 'USD',
        VND: 'VND',
        EUR: 'EUR',
      },
    },
    {
      dateSelect: 'createdDate',
      labelFilter: 'Created Date',
    },
    {
      labelFilter: 'Status',
      fieldSelect: 'status',
      optionSelect: {
        Closed: '1',
        Active: '2',
        Inactive: '3',
      },
    },
  ],

  testCollapsible: [
    {
      id: 1,
      title: 'Create Account Info',
      state: 'Create Account Info',
    },
    {
      id: 2,
      title: 'Create Contact',
      state: 'Create Contact',
    },
    {
      id: 3,
      title: 'Create Address',
      state: 'Create Address',
    },
    {
      id: 4,
      title: 'Create Payment Profile',
      state: 'Create Payment Profile',
    },
  ],
};
