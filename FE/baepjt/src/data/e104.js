const e104 = {
  setting: {
    chapterbg: require('../images/background/chapter4/chapter4_main.png'),
    // background_touch: [require('../images/background/ep1_toilet.jpg')],
    background_just: [
      require('../images/background/chapter4/chapter4_main.png'),
      require('../images/background/chapter4/chapter4_bedroom.png'),
      require('../images/background/chapter4/chapter4_wardrobe.png'),
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
      {location: ['57%', '15%']},
      {location: ['75%', '10%']},
      {location: ['40%', '52%']},
      {location: ['35%', '25%']},
      {location: ['-15%', '75%']},
    ],
    [
      {location: ['80%', '8%']},
      {location: ['25%', '90%']},
      {location: ['35%', '30%']},
      {location: ['10%', '55%']},
    ],
  ],
  clue: [
    [
      {
        name: 'clock', //table
        start_index: [1, 102],
        isdetected: 0, // 조사한지
      },
      {
        name: 'desk',
        start_index: [2, 102],
        isdetected: 0, // 조사한지
      },
      {
        name: 'chair',
        start_index: [5, 102],
        isdetected: 0, // 조사한지
      },
      {
        name: 'bookshelf',
        start_index: [3, 102],
        isdetected: 0, // 조사한지
      },
      {
        name: 'book',
        start_index: [4, 102],
        isdetected: 0, // 조사한지
      },
    ],
    [
      {
        name: 'gloves',
        start_index: [7, 202],
        isdetected: 0, // 조사한지
      },
      {
        name: 'shirt',
        start_index: [9, 202],
        isdetected: 0, // 조사한지
      },
      {
        name: 'drawers',
        start_index: [10, 202],
        isdetected: 0, // 조사한지
      },
      {
        name: 'hanger',
        start_index: [8, 202],
        isdetected: 0, // 조사한지
      },
    ],
  ],
  backgroundsetting: [
    {
      index: 0,
      location: ['55%', '35%'], // 버튼 위치
      size: ['10%', '10%'], // 버튼 사이즈
      bgimage: require('../images/background/chapter4/chapter4_bedroom.png'),
    },
    {
      index: 1,
      location: ['55%', '60%'],
      size: ['10%', '10%'],
      bgimage: require('../images/background/chapter4/chapter4_wardrobe.png'),
    },
  ],
  scripts: [
    {
      name: '배교수',
      text: '백지현씨, 집을 조사해도 되겠습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: 'chapter4_1',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '백지현',
      text: '네 좋아요. 하지만 들어가면 먼저 손을 깨끗이 씻어주시겠어요?',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: 'chapter4_2',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/baekjh/body/whole.png')],
      bg: 0,
    },
    {
      name: '백지현',
      text: '제가 더러운 손으로 제 물건들 만지는 건 정말 못 참아서요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: 'chapter4_3',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/baekjh/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '네 알겠습니다. 손을 씻은 후에 장갑까지 착용할테니 걱정하지 않으셔도 됩니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: 'chapter4_4',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 0,
    },
    {
      name: '백지현',
      text: '여기 왼쪽 문을 열면 침실이 나오고, 오른쪽 문을 열면 옷방이에요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 1,
      audio: 'chapter4_5',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
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
      text: '백지현의 방은 여기까지 보도록 하지',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 100,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {name: 'end', text: 'gotoMain', bg: 0},

    // 대사가 겹치거나 없으면
    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 11,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
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
      bg: 0,
    },
    {
      name: 'end',
      text: 'end',
      bg: 0,
    },

    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 111,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 2,
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
      bg: 0,
    },
    {
      name: 'end',
      text: 'end',
      bg: 0,
    },

    // 모달 띄울 때 나오는 대사
    // 침실
    // 시게
    {
      name: '',
      text: '백지현씨는 아날로그 탁상 알람 시계를 사용하고 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 1,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: '이 시계는 중요한 증거품이 되지 않을 것 같은데...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: '책상 자체를 촬영해 볼까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 1,
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
    // 물티슈, 책상
    {
      name: '배교수',
      text: '물티슈가 굉장히 많이 있군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: 'things',
      index: 2,
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
      bg: 1,
      getItem: 6,
    },
    {
      name: '백지현',
      text: '아무래도 결벽증이 있다보니 책상을 수시로 닦아서요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '시중에 파는 건 살균도 잘 안 되고 깨끗하게 닦아지지도 않아서 제가 직접 만든 물티슈로 넣어서 쓰거든요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '직접 만든다고요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/surprise/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '네. 화학 연구원으로 일하다 보니 살균 효과가 뛰어난 각종 화학 약품으로 직접 만들어 넣어다녀요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/surprise/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '미끄럽거나 찐득한 액체도, 미세한 먼지나 가루도 모두 닦을 수 있죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/surprise/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '티슈 재질이 변기에 버려도 안 막히는 걸로 되어 있어서 집에서는 쓰고 나면 보통 변기에 버려요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: ' 당연히 인체에는 무해하구요, 가방에도 계속 챙겨 다니고 있어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '어제도 챙겨가셨나요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '네, 물론 어제도 챙겨 갔죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그렇다면 어제 가방에 챙기신 물티슈를 증거품으로 수집해도 괜찮겠습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '네, 마음대로 하시죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/baekjh/body/less/left.png'),
        require('../images/character/prof/body/less/right.png'),
      ],
      bg: 1,
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

    //책장
    {
      name: '',
      text: '책장에 올려져 있는 탁상액자 속 사진을 보니 오종오씨와 함께 찍은 사진이 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: 'firework',
      index: 3,
      position: [2],
      character: [require('../images/background/chapter4/couple.png')],
      bg: 1,
      getItem: 7,
    },
    {
      name: '',
      text: '둘이 되게 친밀해보인다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/background/chapter4/couple.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '백지현씨, 혹시 오종오씨와 연인관계입니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '... 종오의 죽음을 밝히기 위해서라도 말해야겠군요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '전 사실 종오의 전 여자친구였어요. 9개월 전에 만나서 4개월 만에 사귀기 시작했죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '종오가 처음 저를 좋아하게 됐어요. 하지만 저는 그 당시에 연애를 할 생각이 없었어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '그 전 남자친구와도 2년을 사귀었지만... 제 집착이 너무 심하다는 이유로 헤어졌거든요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '저의 그 집착하는 성격으론 더 이상 정상적인 연애를 할 수 없겠다고 생각했죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '하지만 종오는 모든 걸 이해해준다고 했어요. 그렇게 네 달 동안 저에게 진심을 보였고 저도 마음을 열게 됐어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/happy/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '그렇게 모두에게 알리지 않은 채 비밀 연애를 하게 됐어요. 치료를 위한 모임에서 연애한다는 것을 밝히면 좋을리 없었으니까요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/happy/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그럼 혹시 어떻게 헤어지게 되셨습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '사귄지 100일이 되던 때부터 종오가 점점 멀어지는 게 느껴졌어요. 여자의 감이라는 게 있잖아요? 종오에게 다른 여자가 생긴 것 같았어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '한 달 전에는 데이트를 했는데 빨리 끝내려고 하더라구요. 그리고 저를 집에 데려다주고나서 약속이 있다고 어딘가 갔어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '그 날 밤까지 연락이 없길래 제가 몇 번을 전화했는데도 받질 않더라구요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/angry/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '그러고나서 며칠 후 이지가 고민 상담을 하고 싶다고 저를 찾아왔어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '어떤 남자가 자꾸 이지에게 밥과 술을 사주면서 대쉬를 하는데 본인은 조금 부담스럽다고 하더군요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '그리고 그 남자가... 바로 종오라는 걸 알게 됐죠. 그래서 헤어지게 됐어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/surprise/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '엄청 미웠어요. 배신감도 엄청났죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/angry/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '하지만... 아직까지도 종오를 좋아하는 마음을 못 버리고 있었어요...',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '제 집착 때문인지도 모르죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '그래도 그 일로 인해 종오를 죽이려고 생각한 적은 한번도 없어요!',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '제가 집착이 아무리 심해도 사람을 죽일 정도도 아니구요...',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 1,
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
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 1,
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

    // 책
    {
      name: '',
      text: '백지현씨의 책장에는 책이 정말 많이 꽂혀져 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 4,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: '책장에 책 말고도 다른 것도 있는 것 같은데...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: '책장 자체를 촬영해 볼까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 1,
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
    // 의자
    {
      name: '배교수',
      text: '방석이 매우 깨끗하군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 5,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '네 아무래도 앉는 곳도 청결을 신경쓰게 되더라구요. 그래서 방석을 자주 빨고 있어요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 1,
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

    // 옷방
    // 장갑
    {
      name: '배교수',
      text: '장갑을 상당히 많이 가지고 계시는군요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 7,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
      getItem: 8,
    },
    {
      name: '백지현',
      text: '네, 아무래도 맨손으로 만지는 것보단 장갑이 더 청결하니까요. 더러운 곳을 갈 때는 장갑을 끼는 편이에요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
    },
    {
      name: '백지현',
      text: '어제 노래방에 갔을 때도 장갑을 끼고 있었죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
    },
    {
      name: '백지현',
      text: '아 그리고... 종오에게도 장갑을 선물한 적이 있어요...',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/sad/right.png'),
      ],
      bg: 2,
    },
    {
      name: '배교수',
      text: '어떤 이유로 선물하게 되었나요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/surprise/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
    },
    {
      name: '백지현',
      text: '종오는 당황하면 엄지손가락을 무는 버릇이 있거든요. 손에 세균이 얼마나 많은데...',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
    },
    {
      name: '백지현',
      text: '그래서 그 버릇 좀 고치라고 제가 장갑을 선물했죠. 장갑을 끼면 의식적으로 손가락을 물지 않을테니까요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
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

    //옷걸이
    {
      name: '배교수',
      text: '옷걸이에 옷이 하나도 걸려 있지 않군요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 8,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
      getItem: 9,
    },
    {
      name: '백지현',
      text: '네, 옷걸이는 주로 한 번 입고 다시 입을 수 있을 때만 걸어놓고 빨래하고 난 옷들은 전부 개서 넣어놓거든요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
    },
    {
      name: '백지현',
      text: ' 옷걸이에 걸어 놓으면 먼지가 쌓여서 웬만하면 안에 넣어두는 편이에요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
    },
    {
      name: '백지현',
      text: '마침 어제 모임을 마치고 집에 오자마자 빨래를 예약으로 돌렸고 아침에 일어나서 건조기에 넣고 돌린 다음에 종오 집으로 출발한 거였어요. 그래서 옷걸이에 걸려진 것이 없죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/baekjh/body/less/right.png'),
      ],
      bg: 2,
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

    // 상의, 하의
    {
      name: '',
      text: '백지현씨가 빨래 및 건조를 끝낸 후 개어 둔 옷들인 것 같다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 9,
      position: [],
      character: [],
      bg: 2,
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

    // 서랍장
    {
      name: '',
      text: '서랍장에 옷들이 모두 가지런하게 개어져 들어 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 10,
      position: [],
      character: [],
      bg: 2,
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

export default e104;
