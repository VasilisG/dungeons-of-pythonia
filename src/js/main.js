// Game window size: 768x640

/* Game constants. */
const GAME_WIDTH = 768;
const GAME_HEIGHT = 640;
const TILE_SIZE = 32;

const ENABLE_BODY_DEBUG = false;

const UI_GAME_TITLE = 'Dungeons of Pythonia';
const UI_BRIEFING = 'Help the wizard to escape the dungeons\nby beating the enemies and answering correctly to Python questions.';
const UI_CONTROLS = 'CONTROLS\n-\nARROW KEYS: move\nSPACE: cast a fire spell\nE: interact'
const UI_PLAY_GAME = 'PLAY GAME';
const UI_LIVES = 'Lives: ';
const UI_PRESS_E_PROMPT = 'Press E to answer the question.';
const UI_GAME_OVER = 'GAME OVER';
const UI_GAME_OVER_INFO = 'You lost all your lives...';
const UI_VICTORY = 'VICTORY!';
const UI_VICTORY_INFO = 'You manage to defeat all enemies and answer all questions!';
const UI_PLAY_AGAIN = 'PLAY AGAIN';

const QUESTIONS = [
    {
        'question': 'How do you declare a variable named "a" and assign the value\n of 5 in Python?',
        'answers': [
            {
                'answer': 'a=5',
                'correct': true
            },
            {
                'answer': 'int a=5;',
                'correct': false
            },
            {
                'answer': 'var a=5',
                'correct': false
            }
        ]
    },
    {
        'question': 'How do you create a list with the elements of 5, 12, 8?',
        'answers': [
            {
                'answer': 'a=List(5,12,8);',
                'correct': false
            },
            {
                'answer': 'a={5,12,8}',
                'correct': false
            },
            {
                'answer': 'a=[5,12,8]',
                'correct': true
            }
        ]
    },
    {
        'question': 'How do you create a dictionary with a key of "k" and a value\nof 10?',
        'answers': [
            {
                'answer': 'd={"k" : 10}',
                'correct': true
            },
            {
                'answer': 'd=["k" => 10]',
                'correct': false
            },
            {
                'answer': 'd=dict("k", 10)',
                'correct': false
            }
        ]
    },
    {
        'question': 'Which function is used to return the string representation of\na variable "v"?',
        'answers': [
            {
                'answer': 'str(v)',
                'correct': true
            },
            {
                'answer': 'string(v)',
                'correct': false
            },
            {
                'answer': 'stringval(v)',
                'correct': false
            }
        ]
    },
    {
        'question': 'How can we loop from 1 to 10 with a steo of 2?',
        'answers': [
            {
                'answer': 'for(i=1; i<10; i+=2)',
                'correct': false
            },
            {
                'answer': 'for i in [1,10] step 2',
                'correct': false
            },
            {
                'answer': 'for i in range(1,10,2)',
                'correct': true
            }
        ]
    },
    {
        'question': 'How can we reverse a list "l"?',
        'answers': [
            {
                'answer': 'l[::-1]',
                'correct': true
            },
            {
                'answer': 'reverse(l)',
                'correct': false
            },
            {
                'answer': 'rev(l)',
                'correct': false
            }
        ]
    },
    {
        'question': 'How do we define a function "f" with parameters "a" and "b"?',
        'answers': [
            {
                'answer': 'def f(a,b)',
                'correct': true
            },
            {
                'answer': 'func f(a,b)',
                'correct': false
            },
            {
                'answer': 'function f(a,b)',
                'correct': true
            }
        ]
    }
];

const TITLE_FONT_SIZE = 32;
const BRIEFING_FONT_SIZE = 18;
const PLAY_GAME_FONT_SIZE = 24;
const QUESTION_FONT_SIZE = 16;

const TOTAL_LEVELS = 8;

const PLAYER_LIVES = 3;
const PLAYER_SPEED = 250;
const PLAYER_DIRECTION = {
    0 : 'up',
    1 : 'down',
    2 : 'left',
    3 : 'right'
};

const ANIMATION_SPEED = 7;

const LEVEL_DATA = [
    [2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [4, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5]
];

const LEVEL_ENEMIES = [2, 2, 3, 3, 4, 4];
const ENEMY_HEALTH = 3;
const ENEMY_SPEED = 120;

const LEVEL_POSITIONS = [
    [
        [220, 50],
        [490, 50]
    ],
    [
        [50, 300],
        [700, 300]
    ],
    [
        [100, 500],
        [370, 30],
        [620, 500]
    ],
    [
        [70, 80],
        [680, 300],
        [70, 550]
    ],
    [
        [370, 50],
        [370, 560],
        [50, 280],
        [660, 280]
    ],
    [
        [70, 80],
        [680, 80],
        [680, 550],
        [70, 550]
    ]
];

const LEVEL_BOULDERS = [
    [
        [120, 150],
        [120, 450],
        [550, 150],
        [550, 450]
    ],
    [
        [120, 150],
        [120, 450],
        [550, 150],
        [550, 450]
    ],
    [
        [350, 100],
        [350, 480],
        [100, 280],
        [580, 280]
    ],
    [
        [180, 160],
        [340, 120],
        [500, 160],
        [180, 450],
        [340, 500],
        [500, 450],
    ],
    [
        [350, 100],
        [350, 480],
        [100, 280],
        [580, 280]
    ],
    [
        [350, 100],
        [350, 480],
        [100, 280],
        [580, 280]
    ]
];

let game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.CANVAS, 'gameDiv');
let fireButton;
let weapon;

let playerSprite;
let playerCanTakeDamage;

let blueOrb;
let greenOrb;
let orangeOrb;

let canAnswerQuestion;
let isLightOrbPlaced;
let questionAnswered;
let isCorrectAnswer;

let nearOrb;
let isPopupShown;

let promptText;

let enemies = [];
let enemiesKilled = 0;

let boulders = [];

let buttonHoverSound;
let canAnswerSound;
let enemyDeathSound;
let enemyHurtSound;
let fireballSound;
let playerHurtSound;
let openQuestionSound;

let playerFired;

/* Player class. */
function Player(){

    this.pSprite = null;
    this.lives = PLAYER_LIVES;
    this.direction = 1;
    this.speed = 0;

    this.setSprite = function(pSprite){
        this.pSprite = pSprite;
    }

    this.getSprite = function(){
        return this.pSprite;
    }

    this.getDirection = function(){
        return this.direction;
    }

    this.setAnimations = function(){
        this.pSprite.animations.add('move_down', [0, 1, 2]);
        this.pSprite.animations.add('move_left', [3, 4, 5]);
        this.pSprite.animations.add('move_right', [6, 7, 8]);
        this.pSprite.animations.add('move_up', [9, 10, 11]);
        this.pSprite.animations.add('idle_down', [1]);
        this.pSprite.animations.add('idle_left', [4]);
        this.pSprite.animations.add('idle_right', [7]);
        this.pSprite.animations.add('idle_up', [10]);
    }

    this.getLives = function(){
        return this.lives;
    }

    this.takeDamage = function(){
        if(this.lives > 0){
            this.lives--;
        }
    }

    this.animate = function(){
        if(this.speed == 0){
            this.pSprite.animations.play('idle_' + PLAYER_DIRECTION[this.direction], ANIMATION_SPEED);
        }
        else {
            this.pSprite.animations.play('move_' + PLAYER_DIRECTION[this.direction], ANIMATION_SPEED);
        }
    }

    this.move = function(){     
        let isLeftPressed = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        let isRightPressed = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        let isUpPressed = game.input.keyboard.isDown(Phaser.Keyboard.UP);
        let isDownPressed = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);

        if(isLeftPressed && isDownPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 1;
        }
        if(isLeftPressed && isUpPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 0;
        }
        if(isRightPressed && isDownPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 1;
        }
        if(isRightPressed && isUpPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 0;
        }
        if(isLeftPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 2;
        }
        if(isRightPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 3;
        }
        if(isUpPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 0;
        }
        if(isDownPressed){
            this.speed = PLAYER_SPEED;
            this.direction = 1;
        }
        if(!isDownPressed && !isUpPressed && !isLeftPressed && !isRightPressed){
            this.speed = 0;
            this.halt();
        }

        this.pSprite.body.velocity.x = (-isLeftPressed + isRightPressed) * PLAYER_SPEED;
        this.pSprite.body.velocity.y = (-isUpPressed + isDownPressed) * PLAYER_SPEED;
    }

    this.checkWorldCollision = function(){
        if(this.pSprite.x < 10){
            this.pSprite.x = 10;
        }
        if(this.pSprite.x > GAME_WIDTH - 10 - this.pSprite.width){
            this.pSprite.x = GAME_WIDTH - 10 - this.pSprite.width;
        }
        if(this.pSprite.y < 0){
            this.pSprite.y = 0;
        }
        if(this.pSprite.y > GAME_HEIGHT - 10 - this.pSprite.height){
            this.pSprite.y = GAME_HEIGHT - 10 - this.pSprite.height;
        }
    }

    this.halt = function(){
        this.pSprite.body.velocity.x = 0;
        this.pSprite.body.velocity.y = 0;
    }

    this.update = function(){
        this.move();
        this.checkWorldCollision();
        this.animate();
    }
}

/* Health bar class. */
function HealthBar(player){
    this.player = player;
    this.heartSprites = [];

    this.initHearts = function(){
        game.add.text(16, 16, UI_LIVES, {
            fontSize: BRIEFING_FONT_SIZE + 'px', 
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });
        for(let i=0; i<PLAYER_LIVES; i++){
            this.heartSprites.push(game.add.sprite(80 + i * 18, 22, 'heart'));
            this.heartSprites[i].scale.setTo(0.8, 0.8);
        }
    }

    this.update = function(){        
        for(let i=0; i<PLAYER_LIVES; i++){
            if(player.getLives() >= i+1){
                this.heartSprites[i].animations.frame = 0;
            }
            else this.heartSprites[i].animations.frame = 4;
        }
    }
}

/* Question orb class. */
function QuestionOrb(){
    this.orbSprite = null;
    this.state = 0;

    this.setSprite = function(orbSprite){
        this.orbSprite = orbSprite;
    }

    this.setState = function(state){
        this.state = state;
    }
}

/* Enemy class. */
function Enemy(){
    this.health = ENEMY_HEALTH;
    this.sprite = null;
    this.player = null;

    this.setSprite = function(enemySprite){
        this.sprite = enemySprite;
    }

    this.getSprite = function(){
        return this.sprite;
    }

    this.setPlayer = function(player){
        this.player = player;
    }

    this.getPlayer = function(){
        return this.player;
    }

    this.setHealth = function(health){
        this.health = health;
    }

    this.getHealth = function(){
        return this.health;
    }

    this.takeDamage = function(){
        if(this.health > 0){
            this.health--;
        }
    }

    this.update = function(){
        this.lookAtPlayer();
        game.time.events.add(Phaser.Timer.SECOND, this.followPlayer, this);
    }

    this.lookAtPlayer = function(){
        let pSprite = this.player.getSprite();
        if(this.sprite.x <= pSprite.x){
            this.sprite.animations.frame = 0;
        }
        else this.sprite.animations.frame = 2;
    }

    this.followPlayer = function(){
        game.physics.arcade.moveToObject(this.sprite, this.player.getSprite(), ENEMY_SPEED, 0);
    }
}

/* Question popup class. */
function QuestionPopup(entry, nextLevel){
    this.question = entry['question'];
    this.answers = entry['answers'];
    this.nextLevel = nextLevel;
    this.popupBox = null;
    this.questionText = null;
    this.answerSprites = [];

    this.create = function(){
        this.popupBox = game.add.graphics();
        this.popupBox.beginFill(0x000000, 1);
        this.popupBox.drawRect(GAME_WIDTH / 6, 200, GAME_WIDTH / 1.5, 250);
        this.popupBox.endFill();
        this.popupBox.lineStyle(2, 0xFFDB46, 1);
        this.popupBox.drawRect(GAME_WIDTH / 6, 200, GAME_WIDTH / 1.5, 250);

        this.questionText = game.add.text(GAME_WIDTH / 6 + 20, 220, this.question, {
            fontSize: QUESTION_FONT_SIZE + 'px', 
            fill: '#d0d0d0',
        });

        for(let i=0; i<this.answers.length; i++){
            this.createAnswer(i);
        }
    }

    this.createAnswer = function(index){
        let answerButton = game.add.graphics();
        answerButton.beginFill(0x000000, 1);
        answerButton.drawRect(GAME_WIDTH / 6 + 20, 300 + index * 40, GAME_WIDTH / 1.5 - 40, 30);
        answerButton.endFill();
        answerButton.lineStyle(1, 0xB76F02, 1);
        answerButton.drawRect(GAME_WIDTH / 6 + 20, 300 + index * 40, GAME_WIDTH / 1.5 - 40, 30);

        let answerText = game.add.text(GAME_WIDTH / 6 + 30, 300 + index * 40 + 5, this.answers[index]['answer'], {
            fontSize: QUESTION_FONT_SIZE + 'px',
            fill: '#d0d0d0'
        });

        let answerSprite = game.add.sprite(GAME_WIDTH / 6 + 20, 300 + index * 40);
        answerSprite.width = GAME_WIDTH / 1.5 - 20;
        answerSprite.height = 30;
        answerSprite.inputEnabled = true;
        answerSprite.isCorrectAnswer = this.answers[index]['correct'];
        
        answerSprite.events.onInputDown.add(function(){
            if(answerSprite.isCorrectAnswer){
                game.state.start(this.nextLevel);
            }
            else {
                game.state.start(game.state.current);
            }
        }, this);

        answerSprite.events.onInputOver.add(function(){
            answerButton.beginFill(0x333333, 1);
            answerButton.drawRect(GAME_WIDTH / 6 + 20, 300 + index * 40, GAME_WIDTH / 1.5 - 40, 30);
            answerButton.endFill();
            answerButton.lineStyle(1, 0xFFFFFF, 0);
            answerButton.drawRect(GAME_WIDTH / 6 + 20, 300 + index * 40, GAME_WIDTH / 1.5 - 40, 30);
            buttonHoverSound.play();
        }, this);

        answerSprite.events.onInputOut.add(function(){
            answerButton.beginFill(0x000000, 1);
            answerButton.drawRect(GAME_WIDTH / 6 + 20, 300 + index * 40, GAME_WIDTH / 1.5 - 40, 30);
            answerButton.endFill();
            answerButton.lineStyle(1, 0xB76F02, 0);
            answerButton.drawRect(GAME_WIDTH / 6 + 20, 300 + index * 40, GAME_WIDTH / 1.5 - 40, 30);
        }, this);

    }
}

let player;
let healthBar;
let questionOrb;
let questionPopup;

let intro = {

    preload: function(){
        game.load.image('tiles', 'assets/images/tilesets/tileset_dungeon.png');
        game.load.audio('buttonHover', 'assets/sounds/buttonHover.ogg');
    },

    create: function(){
        centerGameInWindow();
        createMap(true);
        buttonHoverSound = game.add.audio('buttonHover');
        createGameIntro();
    },

    update: function(){}
}

let gameOver = {
    
    preload: function(){
        game.load.image('tiles', 'assets/images/tilesets/tileset_dungeon.png');
        game.load.audio('buttonHover', 'assets/sounds/buttonHover.ogg');
    },

    create: function(){
        centerGameInWindow();
        createMap(true);
        buttonHoverSound = game.add.audio('buttonHover');
        createOutro(UI_GAME_OVER, UI_GAME_OVER_INFO);
    },

    update: function(){}
}

let victory = {
    
    preload: function(){
        game.load.image('tiles', 'assets/images/tilesets/tileset_dungeon.png');
        game.load.audio('buttonHover', 'assets/sounds/buttonHover.ogg'); 
    },

    create: function(){
        centerGameInWindow();
        createMap(true);
        buttonHoverSound = game.add.audio('buttonHover');
        createOutro(UI_VICTORY, UI_VICTORY_INFO);
    },

    update: function(){}
}

let level1 = generateLevel(0, 'level2', 'Level 1');
let level2 = generateLevel(1, 'level3', 'Level 2');
let level3 = generateLevel(2, 'level4', 'Level 3');
let level4 = generateLevel(3, 'level5', 'Level 4');
let level5 = generateLevel(4, 'level6', 'Level 5');
let level6 = generateLevel(5, 'victory', 'Level 6');

function generateLevel(levelIndex, nextLevel, levelText){
    return {
    
        preload: function(){
            preloadLevelAssets();
        },
    
        create: function(){
            createLevel(QUESTIONS[levelIndex], nextLevel, LEVEL_BOULDERS[levelIndex], LEVEL_ENEMIES[levelIndex], LEVEL_POSITIONS[levelIndex], levelText);
        },
    
        update: function(){
            updateLevel();
        },
    
        render: function(){
            renderDebugBodies();
        }
    }
}

function preloadLevelAssets(){
    preloadSprites();
    preloadAudio();
}

function preloadSprites(){
    game.load.image('background', 'assets/images/sprites/background.png');
    game.load.image('orb_blue', 'assets/images/sprites/orb_blue.png');
    game.load.image('orb_green', 'assets/images/sprites/orb_green.png');
    game.load.image('orb_orange', 'assets/images/sprites/orb_orange.png');
    game.load.image('boulder', 'assets/images/sprites/boulder.png');
    game.load.spritesheet('player', 'assets/images/sprites/player.png', 32, 48, 12);
    game.load.spritesheet('heart', 'assets/images/sprites/heart.png', 17, 17, 5);
    game.load.spritesheet('fireball', 'assets/images/sprites/fireball.png', 32, 32, 2);
    game.load.spritesheet('enemy', 'assets/images/sprites/enemy.png', 56, 71, 4);
}

function preloadAudio(){
    game.load.audio('buttonHover', 'assets/sounds/buttonHover.ogg');
    game.load.audio('canAnswer', 'assets/sounds/canAnswer.ogg');
    game.load.audio('enemyDeath', 'assets/sounds/enemyDeath.ogg');
    game.load.audio('enemyHurt', 'assets/sounds/enemyHurt.ogg');
    game.load.audio('fireball', 'assets/sounds/fireball.ogg');
    game.load.audio('playerHurt', 'assets/sounds/playerHurt.ogg');
    game.load.audio('openQuestion', 'assets/sounds/openQuestion.ogg');
}

function createLevel(question, nextLevel, level_boulders, level_enemies, level_positions, levelText){
    centerGameInWindow();
    initObjects(question, nextLevel);
    initLevelData(levelText);
    initAudio();
    initBoulders(level_boulders);
    initEnemies(level_enemies, level_positions);
    initPlayer();
    createPromptText();
}

function updateLevel(){
    if(canAnswerQuestion && nearOrb && game.input.keyboard.isDown(Phaser.Keyboard.E)){
        if(!isPopupShown){
            questionPopup.create();
            openQuestionSound.play();
            isPopupShown = true;
        }
    }
    else {
        if(!isPopupShown){
            player.update();
            healthBar.update();
            if(fireButton.isDown){
                if(!playerFired){
                    weapon.fire();
                    fireballSound.play();
                    playerFired = true;
                }
            }
            else playerFired = false;

            updateSpellDirection();
            updateCollisions();
            updateBulletCollisions();
            updateBoulderCollisions();
            updateEnemies();
            updateCanAnswerQuestion();
            updateOrbs();
            updatePromptText();
        }
    }
}

function renderDebugBodies(){
    if(ENABLE_BODY_DEBUG){
        game.debug.body(playerSprite);
        game.debug.body(blueOrb);
        for(let enemy of enemies){
            game.debug.body(enemy.getSprite());
        }

        for(let bullet of weapon.bullets.children){
            game.debug.body(bullet);
        }
        for(let boulder of boulders){
            game.debug.body(boulder);
        }
    }
}

function centerGameInWindow(){
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
}

function getLevelTile(tile_xy, intro){
    switch(tile_xy){
        case 0:
            return intro ? '45' : '41';
        case 2:
            return intro ? '36' : '32';
        case 3:
            return intro ? '38' : '34';
        case 4:
            return intro ? '52' : '48';
        case 5:
            return intro ? '54' : '50';
        case 6:
            return intro ? '37' : '33';
        case 7:
            return intro ? '53' : '49';
        case 8:
            return intro ? '44' : '40';
        case 9:
            return intro ? '46' : '42';
        default:
            return '';
    }
}

function createMap(intro=false){
    let data = '';
    for(let y=0; y < GAME_HEIGHT / TILE_SIZE; y++){
        for(let x=0; x < GAME_WIDTH / TILE_SIZE; x++){
            data += getLevelTile(LEVEL_DATA[y][x], intro);
            if (x < GAME_WIDTH / TILE_SIZE - 1){
                data += ',';
            }
        }
        if (y < GAME_HEIGHT / TILE_SIZE - 1){
            data += '\n';
        }
    }
    game.cache.addTilemap('levelMap', null, data, Phaser.Tilemap.CSV);
    let map = game.add.tilemap('levelMap', TILE_SIZE, TILE_SIZE);
    map.addTilesetImage('tiles', 'tiles', TILE_SIZE, TILE_SIZE);
    let layer = map.createLayer(0);
    layer.resizeWorld();
}

function createGameIntro(){

    let titleText = game.add.text(0, 0, UI_GAME_TITLE, {
        fontSize: TITLE_FONT_SIZE + 'px', 
        fill: '#ffffff',
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });

    let briefText = game.add.text(0, 0, UI_BRIEFING, {
        fontSize: BRIEFING_FONT_SIZE + 'px', 
        fill: '#e3e3e3',
        align: 'center',
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });

    let controlText = game.add.text(0, 0, UI_CONTROLS, {
        fontSize: BRIEFING_FONT_SIZE + 'px', 
        fill: '#b3b3b3',
        align: 'center',
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });

    let playButton = game.add.graphics();
    playButton.beginFill(0x000000, 1);
    playButton.drawRect(GAME_WIDTH / 2 - 100, 553, 200, 50);
    playButton.endFill();
    playButton.lineStyle(2, 0xAE703A, 1);
    playButton.drawRect(GAME_WIDTH / 2 - 100, 553, 200, 50);

    let playText = game.add.text(0, 0, UI_PLAY_GAME, {
        fontSize: PLAY_GAME_FONT_SIZE + 'px', 
        fill: '#e3e3e3',
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });

    let buttonSprite = game.add.sprite(GAME_WIDTH / 2 - 100, 553);
    buttonSprite.width = 200;
    buttonSprite.height = 50;
    buttonSprite.inputEnabled = true;
    
    buttonSprite.events.onInputDown.add(function(){
        game.state.start('level1');
    }, this);

    buttonSprite.events.onInputOver.add(function(){
        playButton.beginFill(0x303030, 1);
        playButton.drawRect(GAME_WIDTH / 2 - 100, 553, 200, 50);
        playButton.endFill();
        playButton.lineStyle(2, 0xFFD04D, 1);
        playButton.drawRect(GAME_WIDTH / 2 - 100, 553, 200, 50);
        buttonHoverSound.play();
    }, this);

    buttonSprite.events.onInputOut.add(function(){
        playButton.beginFill(0x000000, 1);
        playButton.drawRect(GAME_WIDTH / 2 - 100, 553, 200, 50);
        playButton.endFill();
        playButton.lineStyle(2, 0xAE703A, 1);
        playButton.drawRect(GAME_WIDTH / 2 - 100, 553, 200, 50);
    }, this);

    titleText.setTextBounds(0, GAME_WIDTH / 4, GAME_WIDTH, 20);
    briefText.setTextBounds(0, GAME_WIDTH / 4, GAME_WIDTH, 280);
    controlText.setTextBounds(0, GAME_WIDTH / 4, GAME_WIDTH, 550);
    playText.setTextBounds(0, GAME_WIDTH / 4, GAME_WIDTH, 780);
}

function createOutro(largeText, middleText){
    let gameOverText = game.add.text(0, 0, largeText, {
        fontSize: TITLE_FONT_SIZE + 'px', 
        fill: '#ffffff',
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });

    let gameOverInfoText = game.add.text(0, 0, middleText, {
        fontSize: BRIEFING_FONT_SIZE + 'px', 
        fill: '#e3e3e3',
        align: 'center',
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });

    let restartButton = game.add.graphics();
    restartButton.beginFill(0x000000, 1);
    restartButton.drawRect(GAME_WIDTH / 2 - 100, 450, 200, 50);
    restartButton.endFill();
    restartButton.lineStyle(2, 0xAE703A, 1);
    restartButton.drawRect(GAME_WIDTH / 2 - 100, 450, 200, 50);

    let restartText = game.add.text(0, 0, UI_PLAY_AGAIN, {
        fontSize: PLAY_GAME_FONT_SIZE + 'px', 
        fill: '#e3e3e3',
        boundsAlignH: "center",
        boundsAlignV: "middle"
    });

    let restartSprite = game.add.sprite(GAME_WIDTH / 2 - 100, 450);
    restartSprite.width = 200;
    restartSprite.height = 50;
    restartSprite.inputEnabled = true;
    
    restartSprite.events.onInputDown.add(function(){
        game.state.start('intro');
    }, this);

    restartSprite.events.onInputOver.add(function(){
        restartButton.beginFill(0x303030, 1);
        restartButton.drawRect(GAME_WIDTH / 2 - 100, 450, 200, 50);
        restartButton.endFill();
        restartButton.lineStyle(2, 0xFFD04D, 1);
        restartButton.drawRect(GAME_WIDTH / 2 - 100, 450, 200, 50);
        buttonHoverSound.play();
    }, this);

    restartSprite.events.onInputOut.add(function(){
        restartButton.beginFill(0x000000, 1);
        restartButton.drawRect(GAME_WIDTH / 2 - 100, 450, 200, 50);
        restartButton.endFill();
        restartButton.lineStyle(2, 0xAE703A, 1);
        restartButton.drawRect(GAME_WIDTH / 2 - 100, 450, 200, 50);
    }, this);

    gameOverText.setTextBounds(0, GAME_WIDTH / 4, GAME_WIDTH, 20);
    gameOverInfoText.setTextBounds(0, GAME_WIDTH / 4, GAME_WIDTH, 280);
    restartText.setTextBounds(0, GAME_WIDTH / 4, GAME_WIDTH, 570);
}

function initAudio(){
    buttonHoverSound = game.add.audio('buttonHover');
    canAnswerSound = game.add.audio('canAnswer');
    enemyDeathSound = game.add.audio('enemyDeath');
    enemyHurtSound = game.add.audio('enemyHurt');
    fireballSound = game.add.audio('fireball');
    playerHurtSound = game.add.audio('playerHurt');
    openQuestionSound = game.add.audio('openQuestion');
}

function initLevelData(levelText){
    game.add.sprite(0, 0, 'background');

    game.add.text(GAME_WIDTH / 2 - levelText.length * 2, 18, levelText, {
        fontSize: '16px', 
        fill: '#FFFFFF',
        stroke: '#000000',
        strokeThickness: 1
    });

    blueOrb = game.add.sprite(-200, -200, 'orb_blue');
    greenOrb = game.add.sprite(-200, -200, 'orb_green');
    orangeOrb = game.add.sprite(-200, -200, 'orb_orange');

    blueOrb.width = 24;
    blueOrb.height = 40;

    greenOrb.width = 24;
    greenOrb.height = 40;

    orangeOrb.width = 24;
    orangeOrb.height = 40;

    addOrb(blueOrb, orangeOrb, greenOrb);

    healthBar.initHearts();

    questionOrb.setSprite(blueOrb);

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.physics.enable(blueOrb, Phaser.Physics.ARCADE);
    game.physics.enable(greenOrb, Phaser.Physics.ARCADE);
    game.physics.enable(orangeOrb, Phaser.Physics.ARCADE);

    blueOrb.body.setSize(101, 30, 0, 50);
    greenOrb.body.setSize(101, 30, 0, 50);
    orangeOrb.body.setSize(101, 30, 0, 50);

    blueOrb.body.immovable = true;
    greenOrb.body.immovable = true;
    orangeOrb.body.immovable = true;

    createSpellPhysics();
    initQuestionVariables();
}

function initObjects(question, level){
    player = new Player();
    healthBar = new HealthBar(player);
    questionOrb = new QuestionOrb();
    questionPopup = new QuestionPopup(question, level);
}

function initPlayer(){
    playerSprite = game.add.sprite(GAME_WIDTH / 2 - 16, GAME_HEIGHT / 1.5 - 60, 'player');
    player.setSprite(playerSprite);
    player.setAnimations();

    game.physics.enable(playerSprite, Phaser.Physics.ARCADE);
    playerSprite.body.setSize(20, 38, 6, 10);
}

function initQuestionVariables(){
    playerCanTakeDamage = true;
    canAnswerQuestion = false;
    isLightOrbPlaced = false;
    questionAnswered = false;
    isCorrectAnswer = false;
    isPopupShown = false;
    nearOrb = false;
    playerFired = false;
    enemiesKilled = 0;
    enemies = [];
}

function initEnemySprite(x, y){
    let e = game.add.sprite(x, y, 'enemy');
    e.width = 39;
    e.height = 50
    e.animations.frame = 1;
    game.physics.enable(e, Phaser.Physics.ARCADE);
    e.body.setSize(45, 65, 5, 0);
    e.body.immovable = true;
    return e;
}

function initEnemies(totalEnemies, positions){
    enemies = [];
    for(let i=0; i<totalEnemies; i++){
        let e = initEnemySprite(positions[i][0], positions[i][1]);
        let enemy = new Enemy();
        enemy.setSprite(e);
        enemy.setPlayer(player);
        enemies.push(enemy);
    }
}

function initBoulders(positions){
    for(let position of positions){
        let boulder = game.add.sprite(position[0], position[1], 'boulder');
        game.physics.enable(boulder, Phaser.Physics.ARCADE);
        boulder.body.setSize(boulder.width - 10, boulder.height - 30, 5, 9);
        boulder.body.immovable = true;
        boulders.push(boulder);
    }
}

function updateBoulderCollisions(){
    for(let boulder of boulders){
        game.physics.arcade.collide(playerSprite, boulder);
    }
}

function createPromptText(){
    promptText = game.add.text(GAME_WIDTH / 2 - UI_PRESS_E_PROMPT.length * 4, GAME_HEIGHT / 2 - 80, UI_PRESS_E_PROMPT, {
        fontSize: BRIEFING_FONT_SIZE + 'px', 
        fill: '#FFFFFF'
    });
    promptText.alpha = 1;
}

function updatePromptText(){
    nearOrb = Phaser.Math.distance(playerSprite.x, playerSprite.y, orangeOrb.x, orangeOrb.y) < 40;
    if(canAnswerQuestion && nearOrb){
        promptText.alpha = 1;
    }
    else promptText.alpha = 0;
}

function updateEnemies(){
    for(let enemy of enemies){
        enemy.update();
    }
}

function createSpellPhysics(){
    weapon = game.add.weapon(30, 'fireball');
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletAngleOffset = 90;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 300;
    weapon.bullets.width = 32;
    weapon.bullets.setAll('scale.x', 0.5);
    weapon.bullets.setAll('scale.y', 0.5);
    weapon.trackSprite(player.getSprite(), 14, 0);
    game.physics.arcade.enable(weapon);
    for(let i=0; i<weapon.bullets.children.length; i++){
        weapon.bullets.children[i].body.setSize(16, 16, 0, 0);
    }
    fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
}

function updateSpellDirection(){
    let dir = player.getDirection();
    switch(dir){
        case 0:
            weapon.fireAngle = 270;
            weapon.trackSprite(player.getSprite(), 14, 5);
            break;
        case 1:
            weapon.fireAngle = 90;
            weapon.trackSprite(player.getSprite(), 18, 40);
            break;
        case 2:
            weapon.fireAngle = 180;
            weapon.trackSprite(player.getSprite(), 5, 30);
            break;
        case 3:
            weapon.fireAngle = 0;
            weapon.trackSprite(player.getSprite(), 25, 30);
            break;
    }
}

function updateCollisions(){
    game.physics.arcade.collide(playerSprite, blueOrb);
	game.physics.arcade.collide(playerSprite, greenOrb);
    game.physics.arcade.collide(playerSprite, orangeOrb);
    for(let enemy of enemies){
       let collided = game.physics.arcade.collide(playerSprite, enemy.getSprite());
       if(collided){
           if(playerCanTakeDamage){
               player.takeDamage();
               if(player.getLives() <= 0){
                   playerHurtSound.play();
                   game.state.start('gameOver');
               }
               else {
                player.getSprite().alpha = 0.5;
                playerCanTakeDamage = false;
                playerHurtSound.play();
                game.time.events.add(Phaser.Timer.SECOND * 2, updateCanTakeDamage, this);
               }
           }
       }
    }
}

function updateCanTakeDamage(){
    player.getSprite().alpha = 1;
    playerCanTakeDamage = true;
}

function updateBulletCollisions(){
    for(let i=0; i<enemies.length; i++){
        let collided = game.physics.arcade.collide(enemies[i].getSprite(), weapon.bullets, this.atWeaponEnemyCollision, null, this);
        if(collided){
            enemies[i].takeDamage();
            if(enemies[i].getHealth() == 0){
                enemyDeathSound.play();
                enemies[i].getSprite().kill();
                enemiesKilled++;
            }
            else enemyHurtSound.play();
        }
    }

    for(let boulder of boulders){
        game.physics.arcade.collide(boulder, weapon.bullets, this.atWeaponEnemyCollision, null, this);
    }

    game.physics.arcade.collide(blueOrb, weapon.bullets, this.atWeaponEnemyCollision, null, this);
    game.physics.arcade.collide(orangeOrb, weapon.bullets, this.atWeaponEnemyCollision, null, this);
    game.physics.arcade.collide(greenOrb, weapon.bullets, this.atWeaponEnemyCollision, null, this);
}

function atWeaponEnemyCollision(enemy, bullet){
    bullet.kill();
}

function updateCanAnswerQuestion(){
    canAnswerQuestion = enemiesKilled == enemies.length;
}

function addOrb(firstOrb, secondOrb, thirdOrb){
    firstOrb.x = GAME_WIDTH / 2 - 12;
    firstOrb.y = GAME_HEIGHT / 2 - 20;
    secondOrb.x = -200;
    secondOrb.y = -200;
    thirdOrb.x = -200;
    thirdOrb.y = -200;
}

function updateOrbs(){
    if(canAnswerQuestion){
        if(!isLightOrbPlaced){
            addOrb(orangeOrb, greenOrb, blueOrb);
            canAnswerSound.play();
            isLightOrbPlaced = true;
        }
    }
    else {
        if(isCorrectAnswer){
            addOrb(greenOrb, blueOrb, orangeOrb);
        }
        else addOrb(blueOrb, orangeOrb, greenOrb);
    }
}

game.state.add('intro', intro);
game.state.add('level1', level1);
game.state.add('level2', level2);
game.state.add('level3', level3);
game.state.add('level4', level4);
game.state.add('level5', level5);
game.state.add('level6', level6);
game.state.add('gameOver', gameOver);
game.state.add('victory', victory);

game.state.start('intro');