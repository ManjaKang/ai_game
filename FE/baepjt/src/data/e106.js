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
  allclue: [
    [
      {location: ['54%', '71%']},
      {location: ['63%', '25%']},
      {location: ['65%', '46%']},
    ],
    [
      {location: ['60%', '2%']},
      {location: ['75%', '50%']},
      {location: ['35%', '73%']},
    ],
  ],
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
      name: '배교수',
      text: '김세영씨, 집을 조사하도록 하겠습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '김세영',
      text: '들어오십시오.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/kimsy/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '그림이 많이 있군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 0,
    },
    {
      name: '김세영',
      text: '네, 제가 회화과 학생이다보니 그림을 주로 그려요. 거의 다 제 작품이라고 보시면 됩니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 0,
    },
    {
      name: '김세영',
      text: '여기 왼쪽 문은 작업실 방이고, 오른쪽 문은 침실입니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
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
    {
      name: '배교수',
      text: '이젠 임시윤 집만 남았군. 가보자고.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 100,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: 'end',
      text: 'gotoMain',
      bg: 0,
    },

    // 단서가 아니거나, 이미 획득한 단서를 찾았을 경우
    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 101,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },
    {
      name: '배교수',
      text: '그 단서는 이미 찾은 단서야. 다른 단서를 찾아보도록 하지!',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 102,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },

    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 201,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 2,
    },
    {
      name: 'end',
      text: 'end',
      bg: 2,
    },
    {
      name: 'end',
      text: 'end',
      bg: 2,
    },
    {
      name: '배교수',
      text: '그 단서는 이미 찾은 단서야. 다른 단서를 찾아보도록 하지!',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 202,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 2,
    },
    {
      name: 'end',
      text: 'end',
      bg: 2,
    },
    {
      name: 'end',
      text: 'end',
      bg: 2,
    },

    // 단서를 찾았을 경우
    // 침실
    // 서랍장
    {
      name: '배교수',
      text: ' 서랍장 속에 뭔가 물건들이 많네요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 1,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 2,
    },
    {
      name: '김세영',
      text: '네, 밑에는 옷을 넣어두고 있고, 위에는 통장, 사진, 또 여러가지가 있습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '배교수',
      text: '통장 하니까 하는 말인데, 오종오씨가 돈을 빌렸다가 안 갚아서 싸웠다고 하셨죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '네 맞습니다. 여기 통장에도 내역이 나와 있습니다. 150만원을 한번에 빌려준 건 아닌데 조금씩 빌려주다보니 어느새 150만원이 됐네요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '배교수',
      text: '무슨 말을 하고 빌렸나요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '그냥 급하게 필요하다면서 조금씩 빌리더라구요. 종오는 옛날에도 자주 빌렸지만 금방 금방 갚았었습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: ' 그리고 작년에 제가 금전적 문제로 힘들 땐 오히려 종오가 저를 많이 도와줬거든요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '그때가 너무 고마워서 잊지 않고 있던 터라 종오한테는 그냥 안 갚아도 상관없다는 생각으로 빌려줬습니다',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '배교수',
      text: '그런데 왜 싸우셨죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '음... 잠시만요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/kimsy/body/whole.png')],
      bg: 2,
    },
    {
      name: '',
      text: '김세영씨가 서랍에서 사진 한 장을 꺼냈다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 2,
    },
    {
      name: '김세영',
      text: ' 여기 있는 사진 보이시나요? 이 애가 제 여동생입니다. 이제 고등학생이 됐죠.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      // position : [1, 2, 3]
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/happy/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '그런데...',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      // position : [1, 2, 3]
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '한 달 전 교통사고를 당했습니다... 크게 다쳤지만 다행히 응급 수술도 잘 됐고 생명엔 지장이 없었죠.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '하지만 의사 선생님 말에 의하면 재활 회복이 잘 안 돼서 십자인대 수술을 받아야 한다고 하더라구요. 빠르면 빠를수록 좋다고요...',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '이미 응급 수술 때 돈을 다 써버려서 당장 돈이 없었어요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '제가 이번 학기를 중도 휴학한 이유도 제 동생의 수술비를 급하게 마련해야 했기 때문입니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: ' 종오가 돈을 갚았다면 빨리 모을 수 있었지만... 종오는 지금 당장은 돈이 없다며 나중에 갚겠다고 하더라구요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: ' 하지만 돈이 없다는 게 본인이 쓸 돈 말고는 없다는 말이잖아요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/angry/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '본인의 생활비가 내 동생의 수술비보다 중요하다는 건가? 이런 생각이 들었습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: ' 그래도 1년 전에 도와줬던 것 때문에 참아보려고 했지만... 어제 얘기를 하다보니 순간적으로 화가 나더라구요. 그래서 잠시 다퉜던 겁니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '하지만... 그 때문에 제가 종오를 죽이거나 그럴 일은 절대 없습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '어차피 수술비도 거의 다 모아가는 중이었고... 무엇보다 제 친한 친구였으니까요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '배교수',
      text: '그렇군요... 알겠습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // 여동생과 함께 찍은 사진
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },

    // 침대
    {
      name: '배교수',
      text: '침대가 좀 더러워 보이네요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 2,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 2,
    },
    {
      name: '김세영',
      text: '제가 그림을 그리는 도중에 뭔가 잘 안 되면 침대에 누워서 고민을 하거든요.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '김세영',
      text: '그래서 물감이 좀 묻을 때가 있어서 침대가 이렇게 더러워지곤 합니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    // 노트북
    {
      name: '배교수',
      text: '노트북 암호를 알려주실 수 있겠습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 3,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 2,
    },
    {
      name: '김세영',
      text: '"333"입니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '배교수',
      text: '배경화면도 삼각형 패턴 그림으로 되어 있군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 2,
    },
    {
      name: '유저',
      text: '노트북에서 별다른 증거는 발견되지 않았다',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 2,
    },

    // 작업실 문
    // 붓
    {
      name: '배교수',
      text: ' 그림을 그리셔서 그런지 붓이 많군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 4,
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
      bg: 1,
    },
    {
      name: '김세영',
      text: '이 정도면 약과죠, 보통 미술하는 분들 작업실에는 이보다 훨씬 많이 가지고 있습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '저는 해당 작업에 필요한 붓들만 이렇게 통에 꽂아놓고 나머지 붓들은 여기에 보관해놓고 있습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '숫자 3을 좋아하다보니 이렇게 붓 통도 3개로 나눠서 관리하죠.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '제가 그림을 자주 그리는 편이다보니 붓을 자주 씻으면 붓 수명이 금방 떨어져서 이렇게 관리하고 있습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그럼 오늘 아침에도 그림을 그리셨나요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '아침에 그림을 그리려고 하던 찰나에 종오가 죽었다는 연락을 받고 오게 되었습니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    // 선풍기
    {
      name: '배교수',
      text: '작업실에 에어컨이 있는데도 선풍기가 있네요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 5,
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
      bg: 1,
    },
    {
      name: '김세영',
      text: '보통 유화는 그린 다음에 거기에 한 번 더 붓으로 덧칠해서 그리게 되는데, 한 번 말리는 데에 한 달 정도가 소요됩니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '이렇게 선풍기를 통해서 말리면 그 시간이 훨씬 단축되죠.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },

    // 의자
    {
      name: '배교수',
      text: '이 의자는 작업할 때 쓰시는 겁니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 6,
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
      bg: 1,
    },
    {
      name: '김세영',
      text: '그건 제가 만든 의자입니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '그림에만 관심이 있는 게 아니라 공예에도 관심이 있어서요, 이런 식으로 자주 만듭니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '나무를 깎아서 의자를 만드시나요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '아니요, 여기 이 드라이버를 이용해서 나사를 쪼아서 만드는 방식입니다.',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        // kimsy/body/less/left.png
        require('../images/character/kimsy/body/whole.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
  ],
};

export default e106;
