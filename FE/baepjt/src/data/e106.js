const e106 = {
  setting: {
    chapterbg: require('../images/background/chapter6/background.jpg'),
    // background_touch: [require('../images/background/ep1_toilet.jpg')],
    background_just: [
      require('../images/background/chapter6/background.jpg'),
      require('../images/background/chapter6/paintingroom.png'),
      require('../images/background/chapter6/sy_room.png'),
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
      location: ['14%', '10%'], // 버튼 위치
      size: ['20%', '80%'], // 버튼 사이즈
      bgimage: require('../images/background/chapter6/paintingroom.png'),
    },
    {
      index: 1,

      location: ['5%', '80%'],
      size: ['20%', '75%'],
      bgimage: require('../images/background/chapter6/sy_room.png'),
    },
  ],
  scripts: [
    {
      name: '',
      text: '날씨가 꽤 좋다.',
      img: require('../images/character/prof/face/emotionless.png'),
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
    {
      name: 'end',
      text: 'end',
      bg: 0,
    },
  ],
};

export default e106;
