const kimsy = {
  setting: {
    chapterbg: require('../images/background/chapter7/background.png'),
    background_just: [
      require('../images/background/chapter7/background.png'),
      require('../images/background/chapter1/room.png'),
    ],
    episode: 1,
    chapter: 9,
  },
  scripts: [
    // 결말 bad ending: 증거 불충분
    {
      name: '배교수',
      text: '김세영씨, 당신이 오종오씨를 살해하셨죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '김세영',
      text: '네? 왜 저라고 생각하시죠?',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/kimsy/body/whole.png')],
      bg: 1,
    },

    {
      name: '배교수',
      text: '김세영씨, 당신에게는 당신이 아끼는 여동생이 있습니다. 그리고 한 달 전 교통사고를 당했죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '응급 수술이 성공적으로 끝난 덕에 큰 고비는 넘겼습니다. 하지만 여동생의 무릎이 회복되지 않자 병원에서는 빠른 시일 내에 추가 수술을 해야 한다고 했습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: ' 그런데 수술에 필요한 돈이 없으셨죠? 그래서 돈을 급하게 구하기 위해 휴학까지 했구요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '하지만 오종오씨가 빌려간 돈을 바로 갚는다면 수술비를 금방 모을 수 있었겠죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '그래서 김세영씨는 오종오씨에게 지금 당장 돈을 갚으라고 요구했습니다. 그러나 오종오씨는 당장은 갚을 돈이 없다고 둘러댔죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '하지만 김세영씨가 보기에는 오종오씨는 돈을 계속 쓰고 있었겠죠. 거기서 화가 났을 겁니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '김세영',
      text: '그건 사실입니다. 하지만 말씀드렸다시피 종오는 제가 힘들 때 도와준 은인이었고, 또 친한 친구였습니다! 제가 어떻게 종오를 죽이겠습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/angry/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '그래도 혹시나 하는 마음에 김세영씨는 오종오씨가 돈을 어디에 쓰고 있는지 확인을 하고 싶어졌습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/angry/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '그렇게 오종오씨의 행적을 조사해보니 데이트 비용, 선물 비용, 스포츠 도박 등에 사용한다는 것을 알게 되었죠. 백지현씨와 연인 관계였던 것도, 임이지씨에게 구애를 한다는 것도 알게 되었습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '임이지씨, 오종오씨에게 선물을 받으셨죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },

    {
      name: '임이지',
      text: '네 맞아요... 종오 오빠가 저에게 계속 선물을 사서 주려고 했어요. 저는 부담스러워서 매번 거절했지만 계속 새로운 걸 사더라구요..',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/limij/body/whole.png')],
      bg: 1,
    },

    {
      name: '배교수',
      text: '돈을 아무 데나 쓴다는 것을 알게 된 김세영씨는 친한 친구에 대한 배신감이 치밀어 올랐을테죠. 여동생 수술비에 보탤 생각도 없이 자기만 생각하며 돈을 쓰고 있었으니까요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '...',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그래서 김세영씨는 모든 걸 계획했습니다. 날짜는 어제로 정했구요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '우선 모임을 끝내고 오종오씨의 뒷정리를 도와주겠다고 나섰죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/angry/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그 때 오종오씨가 마시던 물 컵 하나만 제외하고 전부 치웠죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/angry/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '김세영씨는 그 컵에 담긴 물에 니코틴 원액을 탔습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그리고 오종오씨가 이를 마실 가능성을 높이기 위해서 한 가지 설계를 했죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '',
      text: '교수님은 김세영씨의 드라이버를 꺼냈다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/item/driver.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '이건 김세영씨의 드라이버입니다. 김세영씨는 이 드라이버를 어제 모임에서도 가져왔습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그리고 여기를 보시죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
      bg: 1,
    },
    {
      name: '',
      text: '교수님은 오종오씨의 방 문을 가리켰다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [require('../images/character/prof/body/less/right.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '오종오씨의 방 문 앞 스탠드 2개. 이건 오종오씨의 대칭 강박을 가장 잘 드러내는 장식입니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그런데 보시면 한 쪽이 삐뚤어져 있습니다. 나사가 빠져 있었죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '김세영씨는 본인이 가지고 있던 이 드라이버를 이용해서 나사를 뺐습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '오종오씨는 이 스탠드 두 개가 좌우 대칭이 맞지 않는 것을 보고 불편했겠죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그래서 스탠드 갓을 똑바로 돌리려고 했지만 마음대로 되지 않았을 겁니다. 나사가 빠졌으니까요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그리고 이를 보고 답답하기 시작했던 오종오씨는 찬물을 들이켰겠죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: ' 김세영씨가 니코틴 원액을 투여한 그 물 컵에 담긴 물 말입니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '제 말이 맞지 않나요, 김세영씨?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '말도 안 되는군요. 확률에 의존해서 사람을 죽일 계획을 세우는 사람이 어디 있습니까?',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [3],
      character: [
        require('../images/character/prof/body/less/right_camera.png'),
      ],
      bg: 1,
    },

    // 결말 normal ending : 동기가 무엇이었을까
    {
      name: '배교수',
      text: '김세영씨, 당신이 오종오씨를 살해한 범인 아닙니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },
    {
      name: '김세영',
      text: ' 뭐라구요? 말도 안 됩니다!',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/kimsy/body/whole.png')],
      bg: 1,
    },
    {
      name: '배교수',
      text: '김세영씨, 당신에게는 당신이 아끼는 여동생이 있습니다. 그리고 한 달 전 교통사고를 당했죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '응급 수술이 성공적으로 끝난 덕에 큰 고비는 넘겼습니다. 하지만 여동생의 무릎이 회복되지 않자 병원에서는 빠른 시일 내에 추가 수술을 해야 한다고 했습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: ' 그런데 수술에 필요한 돈이 없으셨죠? 그래서 돈을 급하게 구하기 위해 휴학까지 했구요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '하지만 오종오씨가 빌려간 돈을 바로 갚는다면 수술비를 금방 모을 수 있었겠죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '그래서 김세영씨는 오종오씨에게 지금 당장 돈을 갚으라고 요구했습니다. 그러나 오종오씨는 당장은 갚을 돈이 없다고 둘러댔죠.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '하지만 김세영씨가 보기에는 오종오씨는 돈을 계속 쓰고 있었겠죠. 거기서 화가 났을 겁니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '김세영',
      text: '그건 사실입니다. 하지만 말씀드렸다시피 종오는 제가 힘들 때 도와준 은인이었고, 또 친한 친구였습니다! 제가 어떻게 종오를 죽이겠습니까?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/angry/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '그래도 혹시나 하는 마음에 김세영씨는 오종오씨가 돈을 어디에 쓰고 있는지 확인을 하고 싶어졌습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/angry/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '그렇게 오종오씨의 행적을 조사해보니 데이트 비용, 선물 비용, 스포츠 도박 등에 사용한다는 것을 알게 되었죠. 백지현씨와 연인 관계였던 것도, 임이지씨에게 구애를 한다는 것도 알게 되었습니다.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    {
      name: '배교수',
      text: '임이지씨, 오종오씨에게 선물을 받으셨죠?',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/prof/body/whole.png')],
      bg: 1,
    },

    {
      name: '임이지',
      text: '네 맞아요... 종오 오빠가 저에게 계속 선물을 사서 주려고 했어요. 저는 부담스러워서 매번 거절했지만 계속 새로운 걸 사더라구요..',
      img: require('../images/character/limij/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [2],
      character: [require('../images/character/limij/body/whole.png')],
      bg: 1,
    },

    {
      name: '배교수',
      text: '돈을 아무 데나 쓴다는 것을 알게 된 김세영씨는 친한 친구에 대한 배신감이 치밀어 올랐을테죠. 여동생 수술비에 보탤 생각도 없이 자기만 생각하며 돈을 쓰고 있었으니까요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '김세영',
      text: '...',
      img: require('../images/character/kimsy/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '배교수',
      text: '그래서 김세영씨는 모든 걸 계획했습니다. 날짜는 어제로 정했구요.',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/sad/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '',
      text: '',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '',
      text: '',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },
    {
      name: '',
      text: '',
      img: require('../images/character/prof/face/emotionless.png'),
      type: 2,
      audio: '',
      position: [1, 3],
      character: [
        require('../images/character/prof/body/less/left.png'),
        // kimsy/body/less/right.png
        require('../images/character/kimsy/body/whole.png'),
      ],
      bg: 1,
    },

    // 결말 true ending: 사건 해결
  ],
};
