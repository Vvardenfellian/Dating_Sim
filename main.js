var game = new Phaser.Game(600,600,Phaser.CANVAS, "gameDev");

var content = [];
//var OwenTextBox;
//var SarahTextBox;
//var MaddieTextBox;
//var AnnaTextBox;
//var TempTitle;
var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 40;
var lineDelay = 0;

var storyTracker = 0;		//controls progression
var storyScene = 1;
var storyDay =  1;
var dialogue;
var z;						//progress button
var change = true; 
var menuSwitch = false;   				//controls whether or not progress can be made

var sarahApp = 3;
var annaApp = 3;
var maddieApp = 3;

var choice = 0;

var mainState = {  

	

	preload:function(){
		 this.load.image('OwenTextBox', 'assets/OwenTextBox');
		 this.load.image('SarahTextBox', 'assets/SarahTextBox');
		 this.load.image('AnnaTextBox', 'assets/AnnaTextBox');			//loads images from disk for game
		 this.load.image('MaddieTextBox', 'assets/MaddieTextBox');
		 this.load.image('TempTitle','assets/TempTitle');
		 this.load.image('StreetBackground','assets/StreetBackground');
		 this.load.image('StoreBackground','assets/StoreBackground');
		 this.load.image('RoomBackground','assets/RoomBackground');
		 this.load.image('Menu','assets/Menu');
		 this.load.image('ABarEmpty','assets/ABarEmpty');
		 this.load.image('ABar25','assets/ABar25');
		 this.load.image('ABarHalf','assets/ABarHalf');
		 this.load.image('ABar75','assets/ABar75');
		 this.load.image('ABarFull','assets/ABarFull');
		 this.load.image('Highlight','assets/Highlight');
		 this.load.image('Day2','assets/Day2');
		 
	},

	

	create:function(){
		 z = game.input.keyboard.addKey(Phaser.Keyboard.Z);


		 this.tempTitle = this.game.add.sprite(0, 0, "TempTitle");

		 this.streetBackground = this.game.add.sprite(0, 0, "StreetBackground");
		 this.storeBackground = this.game.add.sprite(0, 0, "StoreBackground");
		 this.roomBackground = this.game.add.sprite(0, 0, "RoomBackground");

		 this.day2 = this.game.add.sprite(0,0, "Day2");

		 this.owenTextBox = this.game.add.sprite(0, 0, "OwenTextBox");
		 this.sarahTextBox = this.game.add.sprite(0, 0, "SarahTextBox");
		 this.annaTextBox = this.game.add.sprite(0, 0, "AnnaTextBox");
		 this.maddieTextBox = this.game.add.sprite(0, 0, "MaddieTextBox");
		 this.highlight = this.game.add.sprite(0, 152, "Highlight");

		 this.menu = this.game.add.sprite(0, 0, "Menu");

		 this.sABarFull = this.game.add.sprite(70, 47, "ABarFull");
		 this.sABar75 = this.game.add.sprite(70, 47, "ABar75");
		 this.sABarHalf = this.game.add.sprite(70, 47, "ABarHalf");
		 this.sABar25 = this.game.add.sprite(70, 47, "ABar25");
		 this.sABarEmpty = this.game.add.sprite(70, 47, "ABarEmpty");

		 this.aABarFull = this.game.add.sprite(70, 86, "ABarFull");
		 this.aABar75 = this.game.add.sprite(70, 86, "ABar75");
		 this.aABarHalf = this.game.add.sprite(70, 86, "ABarHalf");
		 this.aABar25 = this.game.add.sprite(70, 86, "ABar25");
		 this.aABarEmpty = this.game.add.sprite(70, 86, "ABarEmpty");

		 this.mABarFull = this.game.add.sprite(70, 125, "ABarFull");
		 this.mABar75 = this.game.add.sprite(70, 125, "ABar75");
		 this.mABarHalf = this.game.add.sprite(70, 125, "ABarHalf");
		 this.mABar25 = this.game.add.sprite(70, 125, "ABar25");
		 this.mABarEmpty = this.game.add.sprite(70, 125, "ABarEmpty");

		 this.streetBackground.kill();
		 this.storeBackground.kill();
		 this.roomBackground.kill();

		 this.owenTextBox.kill();
		 this.sarahTextBox.kill();
		 this.annaTextBox.kill();
		 this.maddieTextBox.kill();

		 this.sABarFull.kill();
		 this.sABar75.kill();
		 this.sABarHalf.kill();
		 this.sABar25.kill();
		 this.sABarEmpty.kill();

		 this.aABarFull.kill();
		 this.aABar75.kill();
		 this.aABarHalf.kill();
		 this.aABar25.kill();
		 this.aABarEmpty.kill();

		 this.mABarFull.kill();
		 this.mABar75.kill();
		 this.mABarHalf.kill();
		 this.mABar25.kill();
		 this.mABarEmpty.kill();

		 this.menu.kill();
		 this.highlight.kill();

		 this.day2.alpha = 0;
		 this.day2.kill();
		 
		 text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
		 //this.tempTitle.kill();
		 this.tempTitle.alpha = 0;
		 game.add.tween(this.tempTitle).to( { alpha: 1000 }, 1000000, Phaser.Easing.Linear.None, true, 0, 1000, false);
	},

	

	update:function(){

		if(choice == 1){

		}

		if(choice == 2){

		}

		function changeBool() {
			change = false;
		}

		if(menuSwitch == true){
			this.menu.revive();
			this.menu.bringToTop();
				if(sarahApp == 1){
					this.sABarEmpty.revive();
					this.sABarEmpty.bringToTop();
				}

				if(sarahApp == 2){
					this.sABar25.revive();
					this.sABar25.bringToTop();
				}
				
				if(sarahApp == 3){
					this.sABarHalf.revive();
					this.sABarHalf.bringToTop();
				}

				if(sarahApp == 4){
					this.sABar75.revive();
					this.sABar75.bringToTop();
				}

				if(sarahApp == 5){
					this.sABarFull.revive();
					this.sABarFull.bringToTop();
				}




				if(annaApp == 1){
					this.aABarEmpty.revive();
					this.aABarEmpty.bringToTop();
				}

				if(annaApp == 2){
					this.aABar25.revive();
					this.aABar25.bringToTop();
				}

				if(annaApp == 3){
					this.aABarHalf.revive();
					this.aABarHalf.bringToTop();
				}

				if(annaApp == 4){
					this.aABar75.revive();
					this.aABar75.bringToTop();
				}

				if(annaApp == 5){
					this.aABarFull.revive();
					this.aABarFull.bringToTop();
				}


				

				if(maddieApp == 1){
					this.mABarEmpty.revive();
					this.mABarEmpty.bringToTop();
				}

				if(maddieApp == 2){
					this.mABar25.revive();
					this.mABar25.bringToTop();
				}

				if(maddieApp == 3){
					this.mABarHalf.revive();
					this.mABarHalf.bringToTop();
				}

				if(maddieApp == 4){
					this.mABar75.revive();
					this.mABar75.bringToTop();
				}

				if(maddieApp == 5){
					this.mABarFull.revive();
					this.mABarFull.bringToTop();
				}

		}
		

		if(menuSwitch == false){
			this.menu.kill();
			this.sABarFull.kill();
		 	this.sABar75.kill();
			this.sABarHalf.kill();
		 	this.sABar25.kill();
			this.sABarEmpty.kill();

		 	this.aABarFull.kill();
		 	this.aABar75.kill();
		 	this.aABarHalf.kill();
		 	this.aABar25.kill();
		 	this.aABarEmpty.kill();

		 	this.mABarFull.kill();
		 	this.mABar75.kill();
		 	this.mABarHalf.kill();
		 	this.mABar25.kill();
		 	this.mABarEmpty.kill();
		}
		



		

//STORY PROGRESSION




		//DAY 1 SCENE 1
		


		if(change == true && storyTracker == 1 && storyScene == 1 && storyDay == 1){
			this.tempTitle.kill();
			this.streetBackground.revive();
			content = ["Ahhh, it's always so nice to see warmer ",
			"weather, isn't it?"
			];
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 2 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I agree, but I like the cold weather, ",
			"too. Winter is so pretty!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["I don't like the cold, but winter ",
			"is definitely pretty - at least until the ",
			"snow turns grimy."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I love when the snow is fresh and sparkles",
			"in the sunlight. It's blinding but so ",
			"beautiful!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["I had no idea you liked snow so much.",
			"It's weird that after all this time we",
			"still find out new things about eachother."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yeah, you're right. How long has it",
			"been now? Nine years?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["Let's see... We met when I was twelve,",
			"and I'm twenty-one now, so yeah, nine years."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["It's crazy right?! We still have a",
			"lot of years ahead of us too, Owen! Isn't it",
			"exciting that you get to spend so much more",
			"time with me and my wild antics?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Haha, of course!",
			"",
			"",
			"Oh no..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			this.highlight.revive();
			change = false;
		}


		//CHOICE SPLIT

		if(change == true && storyTracker == 10 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			wordDelay = 40;
			content = ["I knew you loved me, Owen! You'll",
			"have to deal with me forever!"
			];
			choice = 0;
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			this.highlight.kill();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["Strangely, I'm okay with that."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Well, I would hope so! Anyway,",
			"here's your workplace! Have fun!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			this.highlight.kill();
			change = false;
		}

			if(change == true && storyTracker == 13 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["Yeah, well, I'll definitely try.",
			"I'll see you later, Sarah."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}


		//CHOICE SPLIT

		if(change == true && storyTracker == 29 && storyScene == 1 && storyDay == 1){
			this.owenTextBox.kill();
			wordDelay = 40;
			content = ["Awh, Owen, you're no fun... Oh well.",
			"Here's your workplace! Have fun!"
			];
			choice = 0;
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.sarahTextBox.revive();
			this.highlight.kill();
			change = false;
		}

		if(change == true && storyTracker == 30 && storyScene == 1 && storyDay == 1){
			this.sarahTextBox.kill();
			content = ["Yeah, well, I'll definitely try.",
			"I'll see you later, Sarah."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 31 && storyScene == 1 && storyDay == 1){
			storyScene = 2;
			storyTracker = 1;
		}

		if(change == true && storyTracker == 14 && storyScene == 1 && storyDay == 1){
			storyScene = 2;
			storyTracker = 1;
		}


		// DAY 1 SCENE 2



		if(change == true && storyTracker == 1 && storyScene == 2 && storyDay == 1){
			game.add.tween(this.streetBackground).to( { alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			change = false;
		}

		if(storyScene == 2 && this.streetBackground.alpha == 0 && storyDay == 1 && storyTracker == 1){
			this.streetBackground.kill();
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyTracker == 2 && storyScene == 2 && storyDay == 1){
			this.storeBackground.revive();
			this.storeBackground.alpha = 0;
			game.add.tween(this.storeBackground).to( { alpha: 1000}, 1000000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			content = ["Well hey there, Owen! How was your trip here?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Hey Anna! My trip was fine.",
			"How long have you been here?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I actually just got here about five",
			"minutes ago! I just clocked in."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["I need to clock in, too. Wanna come",
			"with me?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Of course!",
			"Hey, Owen..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah? What is it, Anna?",
			"Are you okay?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yes, I'm fine. I was just wondering",
			"who that girl I see you with all the time is.",
			"Is that your girlfriend?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Oh, Sarah? No she isn't my girlfriend.",
			"She's my best friend. I've known her since",
			"I was twelve. "
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Oh, okay. You two seem really close.",
			"I'm happy for you guys."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, we are. She walks to work with me",
			"most days. She makes me food a lot, too. She's",
			"really good at cooking! What about you?",
			"Do YOU have a boyfriend, Anna?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

			if(change == true && storyTracker == 12 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["What? No! Nothing like that for me."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Haha, don't be so embarrassed!",
			"I'm just messing around."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I- I know!",
			"What time do you get off work tonight?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["I get off at eight I think."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 16 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["I get off at seven-thirty.",
			"Do you want to walk home together?",
			"I'll wait for you."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 17 && storyScene == 2 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, I'll walk home with you, Anna.",
			"Sounds fun."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 18 && storyScene == 2 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Okay! Great! I'm glad."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 19 && storyScene == 2 && storyDay == 1){
			storyScene = 3;
			storyTracker = 1;
		}



		//DAY 1 SCENE 3




		if(change == true && storyTracker == 1 && storyScene == 3 && storyDay == 1){
			this.storeBackground.alpha = 1;
			game.add.tween(this.storeBackground).to( { alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			change = false;
		}

		if( storyScene == 3 && this.storeBackground.alpha == 0 && storyDay == 1 && storyTracker == 1){
			this.storeBackground.kill();
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyTracker == 2 && storyScene == 3 && storyDay == 1){
			this.streetBackground.revive();
			game.add.tween(this.streetBackground).to( { alpha: 1000}, 1000000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			content = ["So where do you live, Owen?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.kill();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["I live on Staton Road.",
			"It's about a fifteen minute walk."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["That's pretty close to me!",
			"I live about a two minute walk away from",
			"you on Haven Road."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 5 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Wow, that's really cool! I didn't",
			"know you were so close by."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 6 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yeah! Since we're so close we should",
			"do something someti- Hey, you okay, Owen?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 7 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, it's just that that girl over there",
			"looks familiar. I think I went to",
			"school with her."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 8 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Did you want to go say hi?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 9 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, sure. I think her name is Maddie."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 10 && storyScene == 3 && storyDay == 1){
			content = ["Hey, Maddie!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 11 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Huh? Do I know you?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 12 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["Yeah, it's Owen!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 13 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["...?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 14 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["You know, from high school?",
			"We had multiple classes together."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 15 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Oh, I think I remember you now.",
			"You're the kid who spilled the chemicals",
			"on himself in chemistry. It looked like",
			"you peed yourself, hehe."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 16 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 17 && storyScene == 3 && storyDay == 1){
			content = ["Yeah. That's me. Say... You look",
			"a lot different than you used to. I'm actually",
			"surprised I recognized you."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 18 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Yeah, I dyed my hair blonde,",
			"and I only buy designer clothes now.",
			"My dad is rich now and likes to buy me stuff."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 19 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["Sounds like you are quite wealthy now!",
			"Good for you, Maddie!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 20 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Well, thanks."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 21 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			choice = 1;
			wordDelay = 0;
			content = ["Hey, do you wanna keep in touch?",
			"",
			"",
			"Alright, well it was nice to see you again",
			"Bye!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.reset(0, 152);
			this.owenTextBox.revive();
			change = false;
		}



		//CHOICE SPLIT



		if(change == true && storyTracker == 22 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			wordDelay = 40;
			choice = 0;
			annaApp = 2;
			content = ["Hmm, sure, you're actually kinda cute.",
			"Here you go. Give me a call tomorrow."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.kill();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 23 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["I definitely will! Seeya, Maddie!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 24 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Bye bye!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 25 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 26 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Anna, are you alright?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 27 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Uhhh, yeah, I- I'm fine.",
			"I think I want to walk home by myself."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 28 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Oh, o- okay.",
			"Bye, Anna..."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 29 && storyScene == 3 && storyDay == 1){
			storyScene = 4;
			storyTracker = 1;
		}





		//CHOICE SPLIT



		if(change == true && storyTracker == 41 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			choice = 0;
			wordDelay = 40;
			maddieApp = 1;
			content = ["Bye."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.highlight.kill();
			this.maddieTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 42 && storyScene == 3 && storyDay == 1){
			this.maddieTextBox.kill();
			content = ["Well, that was a little awkward."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 43 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Yeah, tell me about it."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 44 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["So, you peed yourself in high school?"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 45 && storyScene == 3 && storyDay == 1){
			this.annaTextBox.kill();
			content = ["Oh god, get out of here, haha!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 46 && storyScene == 3 && storyDay == 1){
			this.owenTextBox.kill();
			content = ["Hehe, well this is my road.",
			"I'll see you at work tomorrow, Owen!"
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.annaTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 47 && storyScene == 3 && storyDay == 1){
			storyScene = 4;
			storyTracker = 1;
		}

		
		//DAY 1 SCENE 4



		if(change == true && storyTracker == 1 && storyScene == 4 && storyDay == 1){
			this.streetBackground.alpha = 1;
			game.add.tween(this.streetBackground).to( { alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			change = false;
		}

		if( storyScene == 4 && this.storeBackground.alpha == 0 && storyDay == 1 && storyTracker == 1){
			this.streetBackground.kill();
			storyTracker = storyTracker + 1;
			change = true;
		}

		if(change == true && storyTracker == 2 && storyScene == 4 && annaApp == 3 && storyDay == 1){
			this.roomBackground.revive();
			this.roomBackground.alpha = 0;
			this.annaTextBox.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1000}, 1000000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			content = ["Heh, today was a pretty good day.",
			"Anna is really cool. She's never asked",
			"me to walk home with her before."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 4 && annaApp == 3 && storyDay == 1){
			content = ["Ugh, I'm beat. My bed looks so nice.",
			"Bed time."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}






		if(change == true && storyTracker == 1 && storyScene == 4 && storyDay == 1){
			this.streetBackground.alpha = 1;
			game.add.tween(this.streetBackground).to( { alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			change = false;
		}

		if( storyScene == 4 && this.storeBackground.alpha == 0 && storyDay == 1){
			this.streetBackground.kill();
		}

		if(change == true && storyTracker == 2 && storyScene == 4 && annaApp == 2 && storyDay == 1){
			this.roomBackground.revive();
			this.roomBackground.alpha = 0;
			this.annaTextBox.kill();
			game.add.tween(this.roomBackground).to( { alpha: 1000}, 1000000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			content = ["Anna seemed really bummed out...",
			"I wonder what was bothering her.",
			"Things are going to be awkward at work."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			this.owenTextBox.revive();
			change = false;
		}

		if(change == true && storyTracker == 3 && storyScene == 4 && annaApp == 2 && storyDay == 1){
			content = ["Ugh, I'm beat. My bed looks so nice.",
			"Bed time."
			];
			text = game.add.text(26, 415, '', { font: "22px Consolas", fill: "#544232" });
			nextLine();
			change = false;
		}

		if(change == true && storyTracker == 4 && storyScene == 4 && storyDay == 1){
			storyScene = 1;
			storyTracker = 1;
			storyDay = 2;
		}



		//DAY TRANSITION 1



		if(change == true && storyTracker == 1 && storyScene == 1 && storyDay == 2){
			this.roomBackground.alpha = 1;
			game.add.tween(this.roomBackground).to( { alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
			change = false;
		}

		if(storyScene == 1 && this.roomBackground.alpha == 0 && storyDay == 2){
			this.roomBackground.kill();
			game.add.tween(this.owenTextBox).to( { alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
		}

		if(storyScene == 1 && this.owenTextBox.alpha == 0 && storyDay == 2){
			this.owenTextBox.kill();
			//this.day2.alpha = 0;
			this.day2.revive();
			game.add.tween(this.day2).to( { alpha: 100}, 100000, Phaser.Easing.Linear.None, true, 0, 1000, false);
		}




		//END OF DAY 1

		//BEGINNING OF DAY 2















		



//INPUT MANAGEMENT





		document.onkeyup = checkKey;
		function checkKey(e) {
    		e = e || window.event;
    			if (e.keyCode == '90' && change == false && storyTracker >= 1 && menuSwitch == false && choice == 0 
    				&& lineIndex === content.length && wordIndex === line.length){

    				storyTracker = storyTracker + 1;
    				change = true;
    				text.kill();
    				//line = [];
					lineIndex = 0;
					wordIndex = 0;
					content = [];
       			}

       			if(e.keyCode == '90' && storyTracker == 0){   //title to first dialogue
    				storyTracker = storyTracker + 1;
    			}

    			if(e.keyCode == '90' && choice == 1 && menuSwitch == false){
    				change = true;
    				choice = 0;
    				text.kill();
    				line = [];
					lineIndex = 0;
					wordIndex = 0;
    				storyTracker = storyTracker + 1;
    			}

    			if(e.keyCode == '90' && choice == 2 && menuSwitch == false){
    				change = true;
    				choice = 0;
    				text.kill();
    				line = [];
					lineIndex = 0;
					wordIndex = 0;
    				storyTracker = storyTracker + 20;
    			}

    			

    			if(e.keyCode == '32' && storyTracker >= 1 && menuSwitch == false){
    				menuSwitch = true;
    				console.log(menuSwitch);
    			}

    			else if(e.keyCode == '32' && storyTracker >= 1 && menuSwitch == true){
    				menuSwitch = false;
    				console.log(menuSwitch);
      			}

      			

      			if(e.keyCode == '38' && choice == 1 && menuSwitch == false){    //up arrow
      				mainState.highlight.y = 243;
      				choice = 2;
      			}

      			else if(e.keyCode == '38' && choice == 2 && menuSwitch == false){
      				mainState.highlight.y = 152;
      				choice = 1;
      			}


      			else if(e.keyCode == '40' && choice == 1 && menuSwitch == false){	//down arrow
      				mainState.highlight.y = 243;
      				choice = 2;
      			}

      			else if(e.keyCode == '40' && choice == 2 && menuSwitch == false){
      				mainState.highlight.y = 152;
      				choice = 1;
      			}      			
       	}
       
       	console.log(storyTracker);



        
        		
    	
    	

    	function nextLine() {
    		if (lineIndex === content.length){
        		return;    //  We're finished

    		}



    		line = content[lineIndex].split(' ');    //  Split the current line on spaces, so one word per array element
    		wordIndex = 0;    //  Reset the word index to zero (the first word in the line)
    		game.time.events.repeat(wordDelay, line.length, nextWord, this);    //  Call the 'nextWord' function once for each word in the line (line.length)
    		lineIndex++;   //  Advance to the next line

		}

		

		function nextWord() {
    		text.text = text.text.concat(line[wordIndex] + " ");    //  Add the next word onto the text string, followed by a space
    		wordIndex++;    //  Advance the word index to the next word in the line
    			if (wordIndex === line.length){    //  Last word?
        			text.text = text.text.concat("\n");    //  Add a carriage return
        			game.time.events.add(lineDelay, nextLine, this);    //  Get the next line after the lineDelay amount of ms has elapsed
    			}
		}		
	}
};

game.state.add('mainState', mainState);

game.state.start('mainState');