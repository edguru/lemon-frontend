// For full API documentation, including code examples, visit https://wix.to/94BuAAs

import wixLocation from 'wix-location';
import wixData from 'wix-data';
import wixUsers from 'wix-users';
$w.onReady(function () {
  // TODO: write your page related code here...
  $w('#button8').hide();
  $w('#text18').hide();
  $w('#text19').hide();
  $w('#text17').hide();
  let query = wixLocation.query;
  const level = query['level'];
  const SPEED = query['speed'] ? query['speed'] : 0;
  const numberOfQuestions = query['count'];
  const practiceMode = query['practiceMode'] ? query['practiceMode'] : 'withoutAbacus';
  const applyTimeLimit = query['applyTimeLimit'] ? query['applyTimeLimit'] : false;
  const TIME_LIMIT = 300;
  const resultScreenTimer = 7.5;
  let COUNTER = 0;
  let START_TIME;
  let END_TIME;
  let TIME_TAKEN;

  const UNIT_PLACE_ADD_RESTRICTION_CONFIG1 = {
    5: [1, 2, 3, 4, 5],
    6: [1, 2, 3, 4, 5, 9],
    7: [1, 2, 3, 4, 5, 8, 9],
    8: [1, 2, 3, 4, 5, 7, 8, 9],
  };
  const UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG1 = {
    4: [1, 2, 3, 4, 5],
    3: [1, 2, 3, 4, 5, 9],
    2: [1, 2, 3, 4, 5, 8, 9],
    1: [1, 2, 3, 4, 5, 7, 8, 9],
  };

  const UNIT_PLACE_ADD_RESTRICTION_CONFIG2 = {
    1: [1, 2, 3, 5, 6, 7, 8],
    2: [1, 2, 5, 6, 7],
    3: [1, 5, 6],
    4: [5],
    5: [1, 2, 3, 4],
    6: [1, 2, 3],
    7: [1, 2],
    8: [1],
    9: [],
  };
  const UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG2 = {
    9: [1, 2, 3, 5, 6, 7, 8, 9],
    8: [1, 2, 3, 5, 6, 7, 8],
    7: [1, 2, 5, 6, 7],
    6: [1, 5, 6],
    5: [5],
    4: [1, 2, 3, 4],
    3: [1, 2, 3],
    2: [1, 2],
    1: [1],
  };

  const UNIT_PLACE_ADD_RESTRICTION_CONFIG_MAP = {
    junior_level_0: UNIT_PLACE_ADD_RESTRICTION_CONFIG2,
    junior_level_1: UNIT_PLACE_ADD_RESTRICTION_CONFIG1,
    senior_level_0: UNIT_PLACE_ADD_RESTRICTION_CONFIG1,
  };

  const UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG_MAP = {
    junior_level_0: UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG2,
    junior_level_1: UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG1,
    senior_level_0: UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG1,
  };

  const CONFIG_WITHOUT_ABACUS = {
    junior_level_0: {
      ADDITION: [
        // {digits: [1], rows: 5, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2},
        // {digits: [1], rows: 5, minRows: 3, compliment: [0, 9], digitScore: 0.5, speed: 2},
        { digits: [1], rows: 4, minRows: 3, unitPlaceRestriction: true, digitScore: 0.5, speed: 2 },
      ],
    },
    junior_level_1: {
      ADDITION: [
        { digits: [1], rows: 5, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 5, minRows: 3, compliment: [0, 9], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 4, minRows: 3, unitPlaceRestriction: true, digitScore: 0.5, speed: 2 },
      ],
    },
    junior_level_2: {
      ADDITION: [
        { digits: [1], rows: 4, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 5, minRows: 3, compliment: [5, 9], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 5, minRows: 3, digitScore: 0.5, speed: 2 },
      ],
    },
    junior_level_3: {
      ADDITION: [
        { digits: [1], rows: 7, minRows: 4, digitScore: 0.5, speed: 2 },
        { digits: [2], rows: 3, minRows: 2, digitScore: 0.5, speed: 3 },
      ],
    },
    junior_level_4: {
      ADDITION: [
        { digits: [1], rows: 10, minRows: 4, digitScore: 0.5, speed: 3 },
        { digits: [2], rows: 5, minRows: 3, digitScore: 0.5, speed: 3 },
      ],
    },
    junior_level_5: {
      ADDITION: [
        { digits: [1], rows: 10, minRows: 4, digitScore: 0.5, speed: 3 },
        { digits: [2], rows: 5, minRows: 3, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 3, minRows: 2, digitScore: 0.5, speed: 4 },
      ],
      MULTIPLICATION: [
        { digits: [1, 2], score: 1.5, speed: 4 },
        { digits: [2, 1], score: 1.5, speed: 4 },
      ],
    },
    junior_level_6: {
      ADDITION: [
        { digits: [2], rows: 5, minRows: 3, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 3, minRows: 2, digitScore: 0.5, speed: 3 },
      ],
      MULTIPLICATION: [
        { digits: [1, 2], score: 1.5, speed: 5 },
        { digits: [2, 1], score: 1.5, speed: 5 },
        { digits: [1, 3], score: 2.5, speed: 12 },
        { digits: [3, 1], score: 2.5, speed: 12 },
      ],
    },
    senior_level_0: {
      ADDITION: [
        { digits: [1], rows: 6, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 6, minRows: 3, compliment: [0, 9], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 6, minRows: 3, unitPlaceRestriction: true, digitScore: 0.5, speed: 2 },
      ],
    },
    senior_level_1: {
      ADDITION: [
        { digits: [1], rows: 7, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 6, minRows: 3, compliment: [0, 9], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 6, minRows: 3, unitPlaceRestriction: true, digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 8, minRows: 4, digitScore: 0.5, speed: 2 },
      ],
    },
    senior_level_2: {
      ADDITION: [
        { digits: [1], rows: 10, minRows: 5, digitScore: 0.5, speed: 2 },
        { digits: [2], rows: 4, minRows: 3, digitScore: 0.5, speed: 3 },
      ],
    },
    senior_level_3: {
      ADDITION: [
        { digits: [1], rows: 10, minRows: 5, digitScore: 0.5, speed: 3 },
        { digits: [2], rows: 5, minRows: 3, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 3, minRows: 2, digitScore: 0.5, speed: 4 },
      ],
    },
    senior_level_4: {
      ADDITION: [
        { digits: [2], rows: 6, minRows: 4, digitScore: 0.5, speed: 2 },
        { digits: [3], rows: 4, minRows: 3, digitScore: 0.5, speed: 3 },
      ],
      MULTIPLICATION: [
        { digits: [2, 1], score: 1.5, speed: 3 },
        { digits: [1, 2], score: 1.5, speed: 3 },
        { digits: [3, 1], score: 2.5, speed: 6 },
        { digits: [1, 3], score: 2.5, speed: 6 },
      ],
    },
    senior_level_5: {
      ADDITION: [
        { digits: [2], rows: 8, minRows: 5, digitScore: 0.5, speed: 2 },
        { digits: [3], rows: 5, minRows: 4, digitScore: 0.5, speed: 3 },
      ],
      MULTIPLICATION: [
        { digits: [3, 1], score: 2.5, speed: 6 },
        { digits: [1, 3], score: 2.5, speed: 6 },
        { digits: [2, 2], score: 3.5, speed: 9 },
      ],
    },
    senior_level_6: {
      ADDITION: [
        { digits: [2], rows: 10, minRows: 6, digitScore: 0.5, speed: 2 },
        { digits: [3], rows: 6, minRows: 4, digitScore: 0.5, speed: 3 },
        { digits: [4], rows: 2, minRows: 2, digitScore: 0.5, speed: 3 },
      ],
      MULTIPLICATION: [{ digits: [2, 2], score: 3.5, speed: 9 }],
      DIVISION: [
        { digits: [3, 1], completeDivisibility: true, score: 1.5, speed: 5 },
        { digits: [4, 1], completeDivisibility: true, score: 2.5, speed: 8 },
      ],
    },
    senior_level_7: {
      ADDITION: [
        { digits: [3], rows: 5, precision: [1], minRows: 3, digitScore: 0.5, speed: 3 },
        // {digits:[3,4], rows: 5, precision: [1,2], minRows: 3, digitScore: 0.5, speed: 3},
        // {digits:[4,3], rows: 5, precision: [1,2], minRows: 2, digitScore: 0.5, speed: 12}
      ],
      MULTIPLICATION: [
        { digits: [2, 2], score: 3.5, speed: 9 },
        { digits: [3, 2], score: 5, speed: 12 },
        { digits: [2, 3], score: 5, speed: 12 },
      ],
      DIVISION: [
        { digits: [3, 2], completeDivisibility: true, score: 2.5, speed: 5 },
        { digits: [4, 2], completeDivisibility: true, score: 3.5, speed: 8 },
      ],
    },
    senior_level_8: {
      ADDITION: [
        { digits: [3], rows: 5, precision: [1], minRows: 3, digitScore: 0.5, speed: 3 },
        // {digits:[4,4], rows: 5, precision: [1,2], minRows: 2, digitScore: 0.5, speed: 12},
      ],
      MULTIPLICATION: [
        { digits: [2, 2], score: 3.5, speed: 9 },
        { digits: [3, 2], score: 5, speed: 12 },
        { digits: [2, 3], score: 5, speed: 12 },
        { digits: [0, 0], precision: [2, 2], startWithZero: true, resultNoPrecisionBound: true, score: 5, speed: 1 },
        { digits: [0, 0], precision: [3, 2], startWithZero: true, resultNoPrecisionBound: true, score: 5, speed: 1 },
        { digits: [0, 0], precision: [2, 3], startWithZero: true, resultNoPrecisionBound: true, score: 5, speed: 1 },
        { digits: [1, 1], precision: [2, 1], score: 5, speed: 1 },
        { digits: [1, 1], precision: [1, 2], score: 5, speed: 1 },
        { digits: [1, 2], precision: [2, 1], score: 7.5, speed: 3 },
        { digits: [2, 1], precision: [1, 2], score: 7.5, speed: 3 },
      ],
      DIVISION: [
        { digits: [2, 1], completeDivisibility: false, score: 1, speed: 3 },
        { digits: [3, 1], completeDivisibility: false, score: 1, speed: 5 },
        { digits: [3, 2], completeDivisibility: true, score: 2.5, speed: 5 },
        { digits: [4, 2], completeDivisibility: true, score: 3.5, speed: 8 },
      ],
      LCM: [
        // {digits: [2,1], score: 0},
        { digits: [3, 1], score: 3, speed: 5 },
        // {digits: [4,1], score: 0},
        { digits: [2, 2], score: 4, speed: 9 },
        { digits: [3, 2], score: 5, speed: 12 },
        // {digits: [4,2], score: 0}
      ],
      GCD: [
        // {digits: [2,1], score: 0},
        { digits: [3, 1], score: 1.5, speed: 4 },
        // {digits: [4,1], score: 0},
        { digits: [2, 2], score: 2, speed: 8 },
        { digits: [3, 2], score: 2.5, speed: 12 },
        // {digits: [4,2], score: 0}
      ],
    },
  };

  const CONFIG_WITH_ABACUS = {
    junior_level_0: {
      ADDITION: [
        // {digits: [1], rows: 5, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2},
        // {digits: [1], rows: 5, minRows: 3, compliment: [0, 9], digitScore: 0.5, speed: 2},
        { digits: [1], rows: 4, minRows: 3, unitPlaceRestriction: true, digitScore: 0.5, speed: 2 },
      ],
    },
    junior_level_1: {
      ADDITION: [
        { digits: [1], rows: 5, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 5, minRows: 3, compliment: [0, 9], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 4, minRows: 3, unitPlaceRestriction: true, digitScore: 0.5, speed: 2 },
      ],
    },
    junior_level_2: {
      ADDITION: [
        { digits: [1], rows: 4, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 6, minRows: 3, compliment: [5, 9], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 5, minRows: 3, digitScore: 0.5, speed: 2 },
      ],
    },
    junior_level_3: {
      ADDITION: [
        { digits: [1], rows: 7, minRows: 4, digitScore: 0.5, speed: 2 },
        { digits: [2], rows: 5, minRows: 3, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 3, minRows: 2, digitScore: 0.5, speed: 4 },
      ],
    },
    junior_level_4: {
      ADDITION: [
        { digits: [2], rows: 5, minRows: 3, digitScore: 0.5, speed: 3 },
        { digits: [3, 4], rows: 3, minRows: 2, digitScore: 0.5, speed: 5 },
      ],
      MULTIPLICATION: [
        { digits: [1, 2], score: 1.5, speed: 4 },
        { digits: [2, 1], score: 1.5, speed: 4 },
      ],
    },
    junior_level_5: {
      ADDITION: [
        { digits: [2], rows: 5, minRows: 4, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 5, minRows: 3, digitScore: 0.5, speed: 4 },
      ],
      MULTIPLICATION: [
        { digits: [1, 3], score: 2.5, speed: 5 },
        { digits: [3, 1], score: 2.5, speed: 5 },
        { digits: [3, 2], score: 5, speed: 12 },
        { digits: [2, 3], score: 5, speed: 12 },
        { digits: [2, 2], score: 3.5, speed: 10 },
      ],
    },
    junior_level_6: {
      ADDITION: [{ digits: [2, 3], rows: 5, minRows: 4, digitScore: 0.5, speed: 3 }],
      MULTIPLICATION: [
        { digits: [2, 3], score: 5, speed: 12 },
        { digits: [3, 2], score: 5, speed: 12 },
        { digits: [2, 2], score: 3.5, speed: 10 },
      ],
      DIVISION: [
        { digits: [2, 1], completeDivisibility: true, score: 1, speed: 3 },
        { digits: [3, 1], completeDivisibility: true, score: 1, speed: 5 },
        { digits: [4, 1], completeDivisibility: true, score: 0, speed: 8 },
      ],
    },
    senior_level_0: {
      ADDITION: [
        { digits: [1], rows: 5, minRows: 3, compliment: [0, 4], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 5, minRows: 3, compliment: [0, 9], digitScore: 0.5, speed: 2 },
        { digits: [1], rows: 4, minRows: 3, unitPlaceRestriction: true, digitScore: 0.5, speed: 2 },
      ],
    },
    senior_level_1: {
      ADDITION: [{ digits: [1], rows: 8, minRows: 4, digitScore: 0.5, speed: 2 }],
    },
    senior_level_2: {
      ADDITION: [
        { digits: [1], rows: 10, minRows: 5, digitScore: 0.5, speed: 2 },
        { digits: [2], rows: 6, minRows: 4, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 4, minRows: 2, digitScore: 0.5, speed: 5 },
      ],
    },
    senior_level_3: {
      ADDITION: [
        { digits: [2], rows: 7, minRows: 5, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 5, minRows: 3, digitScore: 0.5, speed: 4 },
      ],
      MULTIPLICATION: [
        { digits: [2, 1], score: 1.5, speed: 3 },
        { digits: [1, 2], score: 1.5, speed: 3 },
        { digits: [3, 1], score: 2.5, speed: 6 },
        { digits: [1, 3], score: 2.5, speed: 6 },
      ],
    },
    senior_level_4: {
      ADDITION: [
        { digits: [2, 3], rows: 6, minRows: 4, digitScore: 0.5, speed: 3 },
        { digits: [4], rows: 4, minRows: 3, digitScore: 0.5, speed: 4 },
      ],
      MULTIPLICATION: [
        { digits: [2, 2], score: 3.5, speed: 9 },
        { digits: [3, 2], score: 5, speed: 12 },
        { digits: [2, 3], score: 5, speed: 12 },
      ],
    },
    senior_level_5: {
      MULTIPLICATION: [
        { digits: [2, 2], score: 3.5, speed: 9 },
        { digits: [3, 2], score: 5, speed: 12 },
        { digits: [2, 3], score: 5, speed: 12 },
        { digits: [3, 3], score: 7.5, speed: 1 },
      ],
      DIVISION: [
        { digits: [3, 1], completeDivisibility: true, score: 1, speed: 5 },
        { digits: [4, 1], completeDivisibility: true, score: 0, speed: 8 },
      ],
    },
    senior_level_6: {
      ADDITION: [
        { digits: [1, 2], rows: 5, precision: [1, 2], minRows: 3, digitScore: 0.5, speed: 3 },
        { digits: [2, 3], rows: 5, precision: [1, 2], minRows: 2, digitScore: 0.5, speed: 12 },
      ],
      DIVISION: [
        { digits: [3, 1], completeDivisibility: true, score: 1, speed: 5 },
        { digits: [3, 2], completeDivisibility: true, score: 2.5, speed: 5 },
        { digits: [4, 2], completeDivisibility: true, score: 3.5, speed: 8 },
        { digits: [4, 3], completeDivisibility: true, score: 2.5, speed: 5 },
      ],
    },
    senior_level_7: {
      MULTIPLICATION: [
        { digits: [2, 2], score: 3.5, speed: 9 },
        { digits: [3, 2], score: 5, speed: 12 },
        { digits: [2, 3], score: 5, speed: 12 },
        { digits: [3, 3], score: 7.5, speed: 18 },
        { digits: [0, 0], precision: [3, 2], startWithZero: true, resultNoPrecisionBound: true, score: 5, speed: 1 },
        { digits: [0, 0], precision: [2, 3], startWithZero: true, resultNoPrecisionBound: true, score: 5, speed: 1 },
        { digits: [1, 1], precision: [2, 1], score: 5, speed: 1 },
        { digits: [1, 1], precision: [1, 2], score: 5, speed: 1 },
        { digits: [1, 2], precision: [2, 1], score: 7.5, speed: 3 },
        { digits: [2, 1], precision: [1, 2], score: 7.5, speed: 3 },
      ],
      DIVISION: [
        { digits: [2, 1], completeDivisibility: false, score: 1, speed: 3 },
        { digits: [3, 1], completeDivisibility: false, score: 1, speed: 5 },
        { digits: [3, 2], completeDivisibility: false, score: 2.5, speed: 5 },
        { digits: [4, 2], completeDivisibility: false, score: 3.5, speed: 8 },
        { digits: [4, 3], completeDivisibility: false, score: 2.5, speed: 5 },
      ],
      LCM: [
        // {digits: [2,1], score: 0},
        { digits: [3, 1], score: 3, speed: 5 },
        // {digits: [4,1], score: 0},
        { digits: [2, 2], score: 4, speed: 9 },
        { digits: [3, 2], score: 5, speed: 12 },
        // {digits: [4,2], score: 0}
      ],
      GCD: [
        // {digits: [2,1], score: 0},
        { digits: [3, 1], score: 1.5, speed: 4 },
        // {digits: [4,1], score: 0},
        { digits: [2, 2], score: 2, speed: 8 },
        { digits: [3, 2], score: 2.5, speed: 12 },
        // {digits: [4,2], score: 0}
      ],
    },
    senior_level_8: {
      ADDITION: [
        { digits: [2], rows: 10, negativeAllowed: true, minRows: 6, digitScore: 0.5, speed: 3 },
        { digits: [3], rows: 6, negativeAllowed: true, minRows: 4, digitScore: 0.5, speed: 4 },
        { digits: [4], rows: 4, negativeAllowed: true, minRows: 3, digitScore: 0.5, speed: 5 },
      ],
      PERCENTAGE: [
        { digits: [1, 2], score: 1.5, speed: 5 },
        { digits: [2, 3], score: 5, speed: 12 },
        { digits: [1, 3], score: 2.5, speed: 8 },
      ],
      SQUARE_ROOT: [{ digits: [2, 3, 4, 5, 6], score: 3, speed: 12 }],
      CUBE_ROOT: [{ digits: [4, 5, 6], score: 3, speed: 9 }],
    },
  };

  const CONFIG = practiceMode === 'withAbacus' ? CONFIG_WITH_ABACUS : CONFIG_WITHOUT_ABACUS;

  let isPracticeFinish = false;
  let RESULT;

  const user = wixUsers.currentUser;

  let TOTAL_QUESTIONS = 0;
  let CORRECT_QUESTIONS = 0;

  let TOTAL_SCORE = 0;
  let SCORE = 0;

  let CORRECT_SCORE = 0;

  let timeSeconds = 1.5;

  $w('#text14').text = 'Starting...';
  $w('#box1').hide();
  $w('#text16').hide();
  $w('#textBox2').hide();
  $w('#button6').show();
  $w('#button7').hide();
  $w('#text22').hide();
  $w('#input4').hide();

  let SHOW_QUESTION_TIMEOUT;
  let REMAINING_TIME;
  let TIMER_INTERVAL;
  let SHOW_QUES_TIMEOUT;
  let SHOW_RESULT_TIMEOUT;

  let LAST_BUTTON_CLICK;

  let EMAIL_ID = '';
  user.getEmail().then((email) => {
    EMAIL_ID = email;
  });

  if (applyTimeLimit) {
    REMAINING_TIME = TIME_LIMIT;
    $w('#text22').text = msToTime(REMAINING_TIME * 1000);
    $w('#text22').show();
    $w('#button6').hide();
  }
  SHOW_QUESTION_TIMEOUT = setTimeout(showQuestion, 2000);
  let counterId;

  $w('#button6').onClick(() => {
    isPracticeFinish = true;
    clearTimeout(SHOW_QUESTION_TIMEOUT);
    showFinalScore();
  });

  $w('#button8').onClick(() => {
    wixLocation.to('/practice');
  });

  $w('#button7').onClick((handler) => {
    if (!LAST_BUTTON_CLICK) {
      LAST_BUTTON_CLICK = new Date().getTime();
    } else {
      if (new Date().getTime() - LAST_BUTTON_CLICK <= 500) {
        return;
      }
      LAST_BUTTON_CLICK = new Date().getTime();
    }
    enterInput(RESULT);
  });

  $w('#textBox2').onKeyPress((event, $w) => {
    console.log('textBox entered', event);
    if (event.key === 'Enter') {
      enterInput(RESULT);
      $w('#textBox2').value = '';
    }
  });

  function updateTimer() {
    REMAINING_TIME = REMAINING_TIME - 1;
    if (REMAINING_TIME <= 0) {
      clearTimeout(SHOW_QUESTION_TIMEOUT);
      clearInterval(TIMER_INTERVAL);
      $w('#text22').hide();
      showFinalScore();
    }
    const timer = msToTime(REMAINING_TIME * 1000);

    $w('#text22').text = timer;
  }

  function msToTime(duration) {
    let milliseconds = parseInt((duration % 1000) / 100, 10),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  }

  function showFinalScore() {
    END_TIME = new Date().getTime();
    TIME_TAKEN = END_TIME - START_TIME;
    const duration = msToTime(TIME_TAKEN);
    $w('#text14').hide();
    $w('#text16').hide();
    $w('#text17').hide();
    $w('#textBox2').hide();
    $w('#button6').hide();
    $w('#button7').hide();
    $w('#box1').hide();

    let text = ``;
    text += `Email ID: ${EMAIL_ID}\n`;
    text += `Date & Time: ${new Date()}\n`;
    text += `Correct Answers: ${CORRECT_QUESTIONS} / ${TOTAL_QUESTIONS}\n`;
    text += `Your Score: ${SCORE} / ${TOTAL_SCORE}\n`;
    text += `Time Taken: ${duration}\n`;
    text += `Level: ${level}\n`;
    $w('#text19').text = text;

    const toInsert = {
      name: 'Name',
      emailAddress: 'email@site.com',
      level: level,
      correctAnswers: CORRECT_QUESTIONS,
      totalQuestions: TOTAL_QUESTIONS,
      score: SCORE,
      totalScore: TOTAL_SCORE,
      timeTaken: duration,
      timeTakenMs: TIME_TAKEN,
      isPracticeForTest: false,
    };

    // let userEmail = '';
    user.getEmail().then((email) => {
      toInsert.emailAddress = email;
      wixData
        .insert('PracticeResults', toInsert)
        .then((result) => {
          // console.log('Entry Added:', result);
        })
        .catch((err) => {
          // console.log('Entry Addition Failed:', toInsert);
          // console.log(err);
        });
    });
    // console.log(user.getRoles());

    $w('#text18').show();
    $w('#text19').show();
    $w('#button8').show();
  }

  function showQuestion() {
    // console.log(COUNTER,  numberOfQuestions);

    $w('#textBox2').show();
    if (COUNTER === 0) {
      START_TIME = new Date().getTime();
      if (applyTimeLimit) {
        TIMER_INTERVAL = setInterval(updateTimer, 1000);
      }
    }
    COUNTER++;
    if (!applyTimeLimit) {
      if (COUNTER > numberOfQuestions) {
        isPracticeFinish = true;
        clearTimeout(SHOW_QUESTION_TIMEOUT);
        showFinalScore();
        return;
      }
      TOTAL_QUESTIONS = COUNTER;
    }
    // showTimer();
    $w('#text17').show();
    $w('#text17').text = `Question #${COUNTER}`;
    $w('#textBox2').enable();
    $w('#textBox2').value = '';
    // $w('#textBox2').onInput((event) => {
    // 	let input = event.target.value;
    // 	if (input.trim() === '' || isNaN(input)) {
    // 		$w('#button7').disable();
    // 	} else {
    // 		$w('#button7').enable();
    // 	}
    // });
    $w('#button7').enable();

    const quesTypes = Object.keys(CONFIG[level]);
    const quesTypeLength = quesTypes.length;
    const quesType = quesTypes[(COUNTER - 1) % quesTypeLength];
    const quesConfigs = CONFIG[level][quesType];
    const quesConfig = quesConfigs[Math.floor(Math.random() * quesConfigs.length)];

    const quesNumbers = getQuesNumbers(quesType, quesConfig);
    // console.log('quesNumbers');
    // console.log(quesNumbers);
    const numbers = quesNumbers['numbers'];
    const operations = quesNumbers['operations'];
    RESULT = quesNumbers['result'];
    const quesSpeed = quesConfig['speed'];
    showQuesNumbers(0, numbers, operations, RESULT, quesSpeed);

    let arr_values = [];

    // $w('#box1').hide();
    // $w('#textBox2').hide();
    // $w('#button7').hide();

    // $w('#textBox2').onKeyPress((event) => {
    // 	if (event.code === 13) {
    // 		console.log('enterInput')
    // 		enterInput(result);
    // 	}
    // });

    // $w('#button7').onClick((handler) => {
    // 	enterInput(RESULT);
    // });
  }

  function randomNumber(digits, precision = 0, startWithZero = false) {
    let powNum = Math.pow(10, precision);
    if (startWithZero && precision) {
      let num = Math.floor(Math.random() * 9 * Math.pow(10, digits - 1) + Math.pow(10, digits - 1));
      num = num * powNum;
      let decimalNum = Math.floor(Math.random() * 9 * Math.pow(10, precision - 2) + Math.pow(10, precision - 2));
      num += decimalNum;
      return num / powNum;
    }
    let totalDigits = digits + precision;
    return Math.floor(Math.random() * 9 * Math.pow(10, totalDigits - 1) + Math.pow(10, totalDigits - 1)) / powNum;
  }

  function randomNumberInInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function showQuesNumbers(idx, numbers, operations, result, quesSpeed) {
    let speed = SPEED;

    if ((applyTimeLimit && REMAINING_TIME <= 1) || (!applyTimeLimit && isPracticeFinish)) {
      clearTimeout(SHOW_RESULT_TIMEOUT);
      clearTimeout(SHOW_QUES_TIMEOUT);
      return;
    }

    if (speed === 0 || speed === '0') {
      speed = quesSpeed;
    }

    if (idx === numbers.length) {
      SHOW_RESULT_TIMEOUT = setTimeout(showResult, speed * 1000, result, speed);

      return;
    }
    if (['GCD', 'LCM', 'SQUARE_ROOT', 'CUBE_ROOT', '*', '/', '%'].indexOf(operations) > -1) {
      showCompleteQues(numbers, operations);
    } else {
      showNumber(idx, numbers, operations, result);
    }
    // setTimeout(showQuesNumbers, speed * 1000, idx+1, numbers, operations, result, speed);
  }

  function showResult(result) {
    $w('#text16').hide();
    if ((applyTimeLimit && REMAINING_TIME <= 1) || (!applyTimeLimit && isPracticeFinish)) {
      return;
    }
    $w('#text14').text = '=';
    $w('#textBox2').show();
    $w('#button7').show();
  }

  function showNumber(idx, numbers, operations, result) {
    let text = '';
    let num;
    let opsText = '';
    for (let i = 0; i < numbers.length; i++) {
      num = numbers[i];
      if (i > 0) {
        opsText += operations[i - 1] + '\n';
      } else {
        opsText += '\n';
      }
      text += `${num}\n`;
    }
    text += '=';

    $w('#text14').text = text;
    $w('#text16').text = opsText;
    $w('#text14').show();
    $w('#text16').show();
    $w('#textBox2').show();
    $w('#button7').show();
  }

  function showCompleteQues(num, operation) {
    let text = '';
    if (operation === 'GCD') {
      text = `GCD (${num[0]}, ${num[1]})`;
    } else if (operation === 'LCM') {
      text = `LCM (${num[0]}, ${num[1]})`;
    } else if (operation === 'SQUARE_ROOT') {
      text = `Square Root of ${num[0]}`;
    } else if (operation === 'CUBE_ROOT') {
      text = `Cube Root of ${num[0]}`;
    } else if (operation === '*') {
      text = `${num[0]} X ${num[1]}`;
    } else if (operation === '/') {
      text = `${num[0]} / ${num[1]}`;
    } else if (operation === '%') {
      text = `${num[0]} % ${num[1]}`;
    }

    $w('#text14').text = text;
    $w('#text14').show();
    $w('#text16').hide();
    $w('#textBox2').show();
    $w('#button7').show();
  }

  function getQuesNumbers(quesType, quesConfig) {
    let numbers = [];
    let calc = [];
    let result;
    let score = 0;
    if (['ADDITION'].indexOf(quesType) > -1) {
      const digits = quesConfig['digits'];
      let digitScore = quesConfig['digitScore'];
      let totalDigits = 0;
      let rows = quesConfig['rows'];
      let minRows = quesConfig['minRows'];
      let precision = quesConfig['precision'];
      let compliment = quesConfig['compliment'];
      let unitPlaceRestriction = quesConfig['unitPlaceRestriction'];
      let prec = 0;

      if (!minRows) {
        minRows = 2;
      }
      rows = randomNumberInInterval(minRows, rows);
      let tempResult = 0;
      let operations = ['+', '-'];
      let oper;
      let temp;
      let num;
      let op;
      let unitDigit;
      let maxPrec = 0;
      for (let cnt = 0; cnt < rows; cnt++) {
        let digit = digits[Math.floor(Math.random() * digits.length)];
        if (precision) {
          prec = precision[Math.floor(Math.random() * precision.length)];
          maxPrec = Math.max(maxPrec, prec);
        }
        if (compliment) {
          if (cnt === 0) {
            num = randomNumberInInterval(compliment[0] ? compliment[0] : 1, compliment[1]);
          } else {
            temp = randomNumberInInterval(compliment[0], compliment[1]);
            while (temp === tempResult) {
              temp = randomNumberInInterval(compliment[0], compliment[1]);
            }
            num = temp - tempResult;
            if (num >= 0) {
              op = '+';
            } else {
              op = '-';
            }
          }
        } else if (unitPlaceRestriction) {
          const UNIT_PLACE_ADD_RESTRICTION_CONFIG = UNIT_PLACE_ADD_RESTRICTION_CONFIG_MAP[level];
          const UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG = UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG_MAP[level];
          if (cnt === 0) {
            num = randomNumber(digit, prec);
          } else {
            unitDigit = tempResult % 10;
            if (UNIT_PLACE_ADD_RESTRICTION_CONFIG && unitDigit in UNIT_PLACE_ADD_RESTRICTION_CONFIG && UNIT_PLACE_ADD_RESTRICTION_CONFIG[unitDigit].length === 0) {
              op = '-';
            } else if (tempResult <= 4) {
              op = '+';
            } else {
              op = operations[Math.floor(Math.random() * operations.length)];
            }
            if (op === '+') {
              if (UNIT_PLACE_ADD_RESTRICTION_CONFIG && unitDigit in UNIT_PLACE_ADD_RESTRICTION_CONFIG) {
                const allowedDigits = UNIT_PLACE_ADD_RESTRICTION_CONFIG[unitDigit];
                num = allowedDigits[Math.floor(Math.random() * allowedDigits.length)];
              } else {
                num = randomNumber(digit, prec);
              }
              temp = tempResult + num;
            } else {
              let isNumSet = false;
              temp = tempResult;
              while (!isNumSet || temp < 0 /*num >= tempResult*/) {
                console.log(num, tempResult);
                if (UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG && unitDigit in UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG) {
                  const allowedDigits = UNIT_PLACE_SUBTRACT_RESTRICTION_CONFIG[unitDigit];
                  num = allowedDigits[Math.floor(Math.random() * allowedDigits.length)];
                } else {
                  num = randomNumber(digit, prec);
                }
                isNumSet = true;
                temp = tempResult - num;
              }
            }
          }
        } else {
          num = randomNumber(digit, prec);
        }
        totalDigits += digit + prec;

        num = Math.abs(num);
        numbers.push(num);

        if (cnt === 0) {
          tempResult += num;
        } else {
          if (!compliment && !quesConfig.negativeAllowed && tempResult < num) {
            calc.push('+');
            tempResult += num;
          } else {
            if (compliment || unitPlaceRestriction) {
              oper = op;
            } else {
              oper = operations[Math.floor(Math.random() * operations.length)];
            }
            calc.push(oper);
            if (oper === '+') {
              tempResult += num;
            }
            if (oper === '-') {
              tempResult -= num;
            }
          }
        }
        console.log('numbers:', numbers);
        console.log('calc:', calc);
        console.log('tempResult:', tempResult);
      }
      score = totalDigits * digitScore;

      let powNum = Math.pow(10, prec);
      result = Math.round(tempResult * powNum) / powNum;
    } else if (quesType === 'MULTIPLICATION') {
      const digits = quesConfig['digits'];
      const precision = quesConfig['precision'];
      const startWithZero = quesConfig['startWithZero'];
      const resultNoPrecisionBound = quesConfig['resultNoPrecisionBound'];
      let num1;
      let num2;
      let prec = 0;
      if (precision) {
        num1 = randomNumber(digits[0], precision[0], startWithZero ? startWithZero : false);
        num2 = randomNumber(digits[1], precision[1], startWithZero ? startWithZero : false);
        prec = precision[0] + precision[1];
      } else {
        num1 = randomNumber(digits[0]);
        num2 = randomNumber(digits[1]);
      }
      numbers.push(num1);
      numbers.push(num2);
      calc = '*';
      score = quesConfig['score'];
      result = numbers[0] * numbers[1];

      let powNum = Math.pow(10, prec);
      result = Math.round(result * powNum) / powNum;
    } else if (quesType === 'DIVISION') {
      const digits = quesConfig['digits'];
      numbers.push(randomNumber(digits[0]));
      const isCompleteDivisibility = quesConfig['completeDivisibility'];
      calc = '/';
      if (!isCompleteDivisibility) {
        numbers.push(randomNumber(digits[1]));
        result = numbers[0] / numbers[1];
      } else {
        let divisors = getDivisors(numbers[0], digits[1]);
        numbers.push(divisors[Math.floor(Math.random() * divisors.length)]);
      }
      score = quesConfig['score'];
      result = Math.floor((numbers[0] / numbers[1]) * 100) / 100;
    } else if (quesType === 'LCM') {
      const digits = quesConfig['digits'];
      numbers.push(randomNumber(digits[0]));
      numbers.push(randomNumber(digits[1]));
      calc = 'LCM';
      score = quesConfig['score'];
      result = lcm(numbers[0], numbers[1]);
    } else if (quesType === 'GCD') {
      const digits = quesConfig['digits'];
      numbers.push(randomNumber(digits[0]));
      numbers.push(randomNumber(digits[1]));
      calc = 'GCD';
      score = quesConfig['score'];
      result = gcd(numbers[0], numbers[1]);
    } else if (quesType === 'SQUARE_ROOT') {
      const digits = quesConfig['digits'];
      let digit = digits[Math.floor(Math.random() * digits.length)];
      const possible_nums = sq_root_numbers(digit);
      const num = possible_nums[Math.floor(Math.random() * possible_nums.length)];
      numbers.push(num);
      calc = 'SQUARE_ROOT';
      score = quesConfig['score'];
      result = Math.sqrt(num);
    } else if (quesType === 'CUBE_ROOT') {
      const digits = quesConfig['digits'];
      let digit = digits[Math.floor(Math.random() * digits.length)];
      const possible_nums = cube_root_numbers(digit);
      const num = possible_nums[Math.floor(Math.random() * possible_nums.length)];
      numbers.push(num);
      calc = 'CUBE_ROOT';
      score = quesConfig['score'];
      result = Math.cbrt(num);
    } else if (quesType === 'PERCENTAGE') {
      const digits = quesConfig['digits'];
      numbers.push(randomNumber(digits[0]));
      numbers.push(randomNumber(digits[1]));
      calc = '%';
      score = quesConfig['score'];
      result = Math.floor((numbers[0] / numbers[1]) * 100 * 100) / 100;
    }
    CORRECT_SCORE = score;
    if (!applyTimeLimit) {
      TOTAL_SCORE += CORRECT_SCORE;
    }

    user.getEmail().then((email) => {
      console.info('email:', email, 'ques:', COUNTER, 'numbers:', numbers, 'operations:', calc);
    });

    return { numbers: numbers, operations: calc, result: result };
  }

  function getDivisors(num, digit) {
    let divs = [1];
    let maxNumberToCheckDivisor = Math.min(Math.pow(10, digit), Math.sqrt(num) + 1);
    for (let i = 2; i < maxNumberToCheckDivisor; i++) {
      if (num % i === 0) {
        if (i * i === num) {
          divs.push(i);
        } else {
          divs.push(i);
          if (num / i < Math.pow(10, digit)) {
            divs.push(num / i);
          }
        }
      }
    }
    divs.push(num);

    if (divs.length > 2) {
      divs.shift();
      divs.pop();
    }

    return divs;
  }

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function enterInput(result) {
    // console.log('enterInput', result);
    if (applyTimeLimit) {
      TOTAL_SCORE += CORRECT_SCORE;
      TOTAL_QUESTIONS = COUNTER;
    }
    $w('#button7').disable();
    $w('#textBox2').disable();
    let correct_ans_text = `Correct Answer: ${result}`;
    $w('#text15').text = correct_ans_text;
    // $w('#box1').show();
    let val = $w('#textBox2').value;
    let answer = val === null || val === undefined || val.trim() === '' ? -1 : Number(val);
    console.log('Enter Input', val, answer);
    user.getEmail().then((email) => {
      console.info('email:', email, 'ques:', COUNTER, 'result:', result, 'answer:', answer);
    });

    if (answer === result) {
      CORRECT_QUESTIONS++;
      SCORE += CORRECT_SCORE;
      // console.log(CORRECT_QUESTIONS, ' out of ', TOTAL_QUESTIONS, ' | ', SCORE, ' out of ',  TOTAL_SCORE);
      // $w('#textBox2').style.backgroundColor = "green";
    } else {
      // $w('#textBox2').style.backgroundColor = "red";
    }
    sleep(500).then(() => ($w('#textBox2').value = ''));
    $w('#textBox2').hide();

    if (applyTimeLimit && REMAINING_TIME >= 1) {
      showQuestion();
    } else {
      showQuestion();
    }
  }

  function gcd(x, y) {
    if (x === 0) {
      return y;
    }
    return gcd(y % x, x);
  }

  function lcm(x, y) {
    return (x * y) / gcd(x, y);
  }

  function sq_root_numbers(digits) {
    let numbers = [];
    let num;
    let minNum = Math.ceil(Math.sqrt(Math.pow(10, digits - 1)));
    let maxNum = Math.ceil(Math.sqrt(Math.pow(10, digits)));
    for (let i = minNum; i < maxNum; i++) {
      numbers.push(i * i);
    }
    return numbers;
  }

  function cube_root_numbers(digits) {
    let numbers = [];
    let num;
    let minNum = Math.ceil(Math.cbrt(Math.pow(10, digits - 1)));
    let maxNum = Math.ceil(Math.cbrt(Math.pow(10, digits)));
    for (let i = minNum; i < maxNum; i++) {
      numbers.push(i * i * i);
    }
    return numbers;
  }
});
