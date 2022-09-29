const e105 = {
  setting: {
    chapterbg: require('../images/background/chapter5/2doors.png'),
    // background_touch: [require('../images/background/ep1_toilet.jpg')],
    background_just: [
      require('../images/background/chapter5/2doors.png'),
      require('../images/background/chapter1/room.png'),
      require('../images/background/chapter1/room_info.png'),
    ],
    episode: 1,
    chapter: 1,
    initial: [
      {index: 0, value: false},
      {index: 1, value: false},
      {index: 2, value: false},
    ],
  },
  clue: [
    {
      name: 'bottle',
      start_index: [8, 11],
      isimportant: 0, // 중요한거
      image: '../images/clue/ep1_bottle.jpg',
      isdetected: 0, // 조사한지
    },
  ],
  backgroundsetting: [
    {
      index: 0,
      location: ['14%', '58%'], // 버튼 위치
      size: ['20%', '80%'], // 버튼 사이즈
      bgimage: require('../images/background/chapter5/bathroom.png'),
    },
    {
      index: 1,
      location: ['14%', '22%'],
      size: ['20%', '80%'],
      bgimage: require('../images/background/chapter5/kitchen.png'),
    },
  ],
  scripts: [
    {
      name: '',
      text: '날씨가 꽤 좋다.',
      img: require('../images/character/user/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 0,
    },
    {
      name: 'end',
      text: 'end',
      bg: 0,
    },
  ],
};

export default e105;
