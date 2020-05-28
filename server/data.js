const moment = require('moment');

module.exports = [
  {
    id: 1,
    contact: 'James Doohan',
    messages: [
      {
        id: 11,
        content: 'Hey!',
        postedAt: moment().subtract(1, 'd').hours(18).minutes(30).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      },
      {
        id: 12,
        content: "There's an API to get random Chuck Norris jokes!",
        postedAt: moment().subtract(1, 'd').hours(18).minutes(30).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      },
      {
        id: 13,
        content: 'https://api.chucknorris.io/jokes/random\nYou knew?',
        postedAt: moment().subtract(1, 'd').hours(18).minutes(31).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      },
      {
        id: 14,
        content: "Wait, I'll get you one...",
        postedAt: moment().subtract(1, 'd').hours(18).minutes(31).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      },
      {
        id: 15,
        content: '"Chuck Norris can SEE invisible tape"',
        postedAt: moment().subtract(1, 'd').hours(18).minutes(32).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      },
      {
        id: 16,
        content: 'lmao XD',
        postedAt: moment().subtract(1, 'd').hours(18).minutes(32).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      }
    ]
  },
  {
    id: 2,
    contact: 'Ken Bogard',
    messages: [
      {
        id: 21,
        content: 'Hi there!',
        postedAt: moment().hours(12).minutes(57).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: true
      },
      {
        id: 22,
        content: "Hey, hello you! What's up?",
        postedAt: moment().hours(13).minutes(5).toDate(),
        postedBy: 'me',
        alignment: 'left',
        read: true
      },
      {
        id: 23,
        content: "Same old, same old. Wanna come'n play some SFV?!",
        postedAt: moment().hours(13).minutes(16).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: true
      }
    ]
  },
  {
    id: 3,
    contact: 'Dad',
    messages: [
      {
        id: 31,
        content: "You're late!",
        postedAt: moment().subtract(1, 'd').hours(19).minutes(33).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      }
    ]
  },
  {
    id: 4,
    contact: 'Levar Burton',
    messages: [
      {
        id: 41,
        content: "Dude! Logan's awesome!",
        postedAt: moment().hours(7).minutes(12).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      }
    ]
  },
  {
    id: 5,
    contact: 'Tasha Yar',
    messages: [
      {
        id: 51,
        content: 'See you on the other side',
        postedAt: moment().subtract(1, 'd').hours(21).minutes(41).toDate(),
        postedBy: 'them',
        alignment: 'left',
        read: false
      }
    ]
  }
];
