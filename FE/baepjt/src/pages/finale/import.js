const FinaleimportJs = {
    suspectcount: 4,
    suspectimg: [
        require('../../images/character/baekjh/face/emotionless.png'),
        require('../../images/character/limij/face/emotionless.png'),
        require('../../images/character/kimsy/face/emotionless.png'),
        require('../../images/character/limsy/face/emotionless.png'),
    ],
    DialogIndex: [
        100, // 무능한 탐정
        1, // 무고 : 백지현
        2, // 무고 : 임이지
        31, // 증거불충분
        4, // 무고 : 임시윤
        32, // 동기가 무엇이었을까
        33, // 사건 해결
    ],
    selectable: [
        {
            count: 3,
            clue: [5,6,7],
            index: 1
        },
        {
            count: 3,
            clue: [5,10,13],
            index: 2
        },
        {
            count: 3,
            clue: [5,14,17],
            index: 3
        },
        {
            count: 3,
            clue: [5,18,21],
            index: 4
        }
    ],
    cluelist: [5,6,8,11,14,15,17,20],
    truecluelist: [7],
    truesuspect: 3,
    suspectList: [{index:0, value:false},{index:1, value:false},{index:2, value:false},{index:3, value:false}],
};

export default FinaleimportJs;
