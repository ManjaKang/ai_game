const e101 = {
  setting: {
    chapterbg: require('../images/background/chapter1/profroom.jpg'),
    // background_touch: [require('../images/background/ep1_toilet.jpg')],
    background_just: [
      require('../images/background/chapter1/profroom.jpg'),
      require('../images/background/chapter1/room.png'),
      require('../images/background/chapter1/room_info.png'),
      require('../images/background/chapter1/death.png'),
      require('../images/background/chapter1/table.jpg'),
      require('../images/background/chapter1/door.png'),
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
      {
        location: ['45%', '50%'], // 버튼 위치
      },
      {
        location: ['51%', '78%'], // 버튼 위치
      },
      {
        location: ['50%', '75%'], // 버튼 위치
      },
      {
        location: ['8%', '33%'], // 버튼 위치
      },
    ],
    [
      {
        location: ['52%', '20%'], // 버튼 위치
      },
      {
        location: ['25%', '50%'], // 버튼 위치
      },
    ],
    [
      {
        location: ['55%', '50%'], // 버튼 위치
      },
      {
        location: ['35%', '69%'], // 버튼 위치
      },
    ],
  ],
  clue: [
    [
      {
        name: 'shirts',
        start_index: [4, 302],
        isdetected: 0, // 조사한지
      },
      {
        name: 'pants',
        start_index: [5, 302],
        isdetected: 0, // 조사한지
      },
      {
        name: 'cell phone',
        start_index: [7, 302],
        isdetected: 0, // 조사한지
      },
      {
        name: 'hand',
        start_index: [3, 302],
        isdetected: 0, // 조사한지
      },
    ],
    [
      {
        name: 'pet bottle',
        start_index: [1, 402],
        isdetected: 0, // 조사한지
      },
      {
        name: 'cup',
        start_index: [2, 402],
        isdetected: 0, // 조사한지
      },
    ],
    [
      {
        name: 'door',
        start_index: [8, 502],
        isdetected: 0, // 조사한지
      },
      {
        name: 'table lamp',
        start_index: [9, 502],
        isdetected: 0, // 조사한지
      },
    ],
  ],
  backgroundsetting: [
    {
      index: 0,
      location: ['60%', '25%'], // 버튼 위치
      size: ['10%', '10%'], // 버튼 사이즈
      bgimage: require('../images/background/chapter1/death.png'),
    },
    {
      index: 1,
      location: ['52%', '59%'],
      size: ['10%', '10%'],
      bgimage: require('../images/background/chapter1/table.jpg'),
    },
    {
      index: 2,
      location: ['30%', '5%'],
      size: ['10%', '10%'],
      bgimage: require('../images/background/chapter1/door.png'),
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
      name: '',
      text: '이제 막 서류 분류를 끝낸 나는 화창한 날씨에 압도되어 나도 모르게 콧노래를 불렀다.',
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
      name: '배교수',
      text: '자네 무슨 좋은 일 있나?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '',
      text: '이 분은 배교수님. 범죄심리학계에서 많은 사건을 해결한 프로파일러로 유명하시며 우리나라에 탐정이 법제화 된 후 공식 탐정으로 활동하고 계신 분이다.',
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
      name: '',
      text: '나는 날씨가 화창해서 콧노래가 절로 나왔다고 말씀드렸다.',
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
      name: '배교수',
      text: '날씨가 좋은 건 좋지. 하지만 내 교수실에서 그 말을 하면 항상 무슨 사건이 일어나던데...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '',
      text: '그러자 거짓말처럼 교수님의 핸드폰에서 전화 벨소리가 울리기 시작했다.',
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
      name: '배교수',
      text: '여보세요?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '',
      text: '교수님은 전화를 받고 곧내 심각한 표정으로 통화를 이어 나가시다가 종료했다.',
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
      name: '배교수',
      text: ' 말이 씨가 될 줄이야... 방금 급한 호출이 도착했네.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '배교수',
      text: '우리 대학교 근처의 아파트에서 사망 사건이 발생했다는 군. 어서 가보자고.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 0,
    },
    {
      name: '',
      text: '교수님과 나는 급하게 사건이 일어난 건물로 달려갔다.',
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
      name: '조사관',
      text: '여기 사망자에 대한 정보입니다.',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: 'end',
      bg: 2,
    },
    {
      name: '배교수',
      text: '혹시 신고자는 누구죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '조사관',
      text: '여기 이 분입니다.',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '백지현',
      text: '안녕하세요..',
      img: require('../images/character/baekjh/face/emotionless.png'),
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
      name: '배교수',
      text: '사망자와는 어떤 관계시죠?',
      img: require('../images/character/prof/face/emotionless.png'),
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
      text: '저는... 종오와 같이 강박증 모임을 하던 사이에요. 어제도 그 모임의 정모가 있었구요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
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
      name: '배교수',
      text: '강박증 모임이요?',
      img: require('../images/character/prof/face/emotionless.png'),
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
      text: '강박증을 가진 사람들이 모여서 같이 치유해나가며 친목도 다지는 모임이에요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
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
      name: '배교수',
      text: '사망한 오종오씨는 어떤 강박증을 가지고 있었나요?',
      img: require('../images/character/prof/face/emotionless.png'),
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
      text: '대칭 강박증이요. 모든 물건을 대칭으로 정리하는 걸 좋아하죠.',
      img: require('../images/character/baekjh/face/emotionless.png'),
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
      name: '배교수',
      text: '모임에 참여한 사람은 총 몇 명이죠?',
      img: require('../images/character/prof/face/emotionless.png'),
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
      text: '저랑 종오 포함해서 5명이요.',
      img: require('../images/character/baekjh/face/emotionless.png'),
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
      name: '배교수',
      text: '그렇다면 그분들을 지금 모두 불러야겠군요. 경위를 자세히 알아야겠습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '조사관',
      text: '교수님은 이를 살인사건으로 보십니까?',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '사망자의 몸에서 발견되는 특징을 봤을 때 급성 중독으로 사망한 것 같습니다만, 약에 의한 자살이었다면 소파나 침대에서 잠이 드는 방식을 선택했을 겁니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '하지만 이 자는 바닥에 핸드폰을 들고 쓰러져 있죠. 아마도 119에 신고를 하려다 실패했을 겁니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '물론 사고사일 가능성이 크지만... 모임 직후의 사망이기 때문에 살인의 가능성을 배제할 수는 없습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '조사관',
      text: '독살... 말씀이신가요?',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '네, 그렇습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '현장을 조금 더 조사해 볼 필요가 있을 것 같은데, 자네가 좀 도와줄 수 있겠나?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 1,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '',
      text: '현장에서 도움이 될만한 단서들을 찾아보자.',
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
      bg: 1,
    },
    {name: 'end', text: 'end', bg: 1},
    {
      name: '조사관',
      text: '교수님, 모임에 참여했던 사람들 백지현씨 외 3명 모두 도착했습니다.',
      img: require('../images/character/examiner/face/emotionless.png'),
      type: 2,
      audio: '',
      sfx: '',
      index: 100,
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        require('../images/character/examiner/body/less/right.png'),
      ],
      bg: 1,
    },
    {
      name: 'end',
      text: 'gotoMain',
      bg: 1,
    },

    // 단서 가져오기
    {
      name: '배교수',
      text: '음,, 그건 단서가 될 수 없을 것 같군',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 3,
      audio: '',
      sfx: '',
      index: 11,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 3,
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
      index: 302,
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
      index: 111,
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
      index: 402,
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
      index: 211,
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
      index: 502,
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

    // 촬영하면 나오는 대사
    // 테이블
    // 페트병, 양주병
    {
      name: '배교수',
      text: '테이블을 보니 어제 모임에서 술을 한바탕 마신 것 같군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 1,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '',
      text: '빈 술병들과 페트병들이 매우 가지런하게 정리가 되어 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: '어제 그 모임의 사람들이 이곳에서 술을 마신 듯하다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
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
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },

    // 컵
    {
      name: '',
      text: '컵 하나가 테이블 위에 놓여 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 2,
      position: [],
      character: [],
      bg: 1,
      getItem: 1,
    },
    {
      name: '',
      text: '이렇게 병이 많은데 왜 컵은 하나만 놓여 있을까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
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
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },

    // 사체
    // 손
    {
      name: '배교수',
      text: '사체는 사건 현장에서 가장 중요한 단서라고 할 수 있지.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 3,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '손바닥이 약간 붉은 색을 띄고 있군. 이러한 특징은 보통 중독으로 인해 사망할 때 나타나지.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '가스나 일산화탄소가 퍼진 흔적이 없으니까... 이 손바닥은 독살일 가능성을 나타내는 거야.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '',
      text: '교수님이 말씀하신대로 손바닥이 붉다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: '그리고 손톱이 매우 짧게 잘라져 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
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
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },
    //상의
    {
      name: '배교수',
      text: '외투를 하나 걸쳤고 그 주머니에 지갑이 들어있는 걸 보니 집 밖으로 외출을 하려다가 죽은 것 같군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 4,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그리고 다른 주머니에는 전자담배가 발견됐어. 평소에 전자담배를 폈던 것 같아.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
      getItem: 2,
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
    // 하의
    {
      name: '배교수',
      text: '청바지를 입고 외출 하려다 죽은 것 같다. 상의도 조사했나?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 5,
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

    // 핸드폰
    {
      name: '',
      text: '핸드폰을 들고 죽었다. 교수님이 말씀하신대로 신고하려다가 죽은 것일까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 7,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: ' ...',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [],
      character: [],
      bg: 1,
    },
    {
      name: '',
      text: '확인해보니 핸드폰은 꺼져 있다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
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
      bg: 1,
    },
    {
      name: 'end',
      text: 'end',
      bg: 1,
    },

    // 방입구
    // 방문
    {
      name: '배교수',
      text: '오종오씨의 방으로 들어가는 문인 것 같아.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 8,
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '방은 나중에 용의자들의 조사가 끝난 후에 살펴보자구.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
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
      bg: 1,
    },

    // 스탠드
    {
      name: '배교수',
      text: '대칭 강박증을 가지고 있어서인지 똑같은 스탠드를 양 옆으로 배치했군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 9,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
      bg: 1,
      getItem: 3,
    },
    {
      name: '배교수',
      text: '그런데 한 쪽의 스탠드 갓이 삐뚤어져 있어. 몸싸움의 가능성도 있겠군.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 0,
      audio: '',
      sfx: '',
      index: 0,
      position: [1],
      character: [require('../images/character/prof/body/less/left.png')],
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
  ],
};

export default e101;
