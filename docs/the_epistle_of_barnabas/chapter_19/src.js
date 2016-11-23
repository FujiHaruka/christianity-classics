var Src =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const chapterSrc = __webpack_require__(1)
	const article = __webpack_require__(4)

	module.exports = Object.assign({
	  article
	}, chapterSrc)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const books = __webpack_require__(2)
	const chapters = __webpack_require__(3)

	module.exports = {
	  books,
	  chapters
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    id: 1,
	    title: {
	      en: 'The Epistle of Barnabas',
	      ja: 'バルナバの手紙'
	    },
	    directory: 'the_epistle_of_barnabas',
	    author: {
	      en: 'Barnabas',
	      ja: 'バルナバ'
	    },
	    authorInfo: '',
	    writtenYear: '80-190',
	    description: '使徒教父文書',
	    comment: '',
	    originalUrl: 'http://www.newadvent.org/fathers/0124.htm'
	  }
	]


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": 1,
			"title": {
				"en": "Chapter 1. After the salutation, the writer declares that he would communicate to his brethren something of that which he had himself received",
				"ja": "第1章 挨拶の後、著者は自身が受け取ってきたものを兄弟たちに伝えることを宣言する"
			},
			"directory": "chapter_1"
		},
		{
			"id": 2,
			"title": {
				"en": "Chapter 2. The Jewish sacrifices are now abolished",
				"ja": "第2章 ユダヤ教の犠牲は今日廃止されている"
			},
			"directory": "chapter_2"
		},
		{
			"id": 3,
			"title": {
				"en": "Chapter 3. The fasts of the Jews are not true fasts, nor acceptable to God",
				"ja": "第3章 ユダヤ人の断食は、真の断食ではなく、神に受け入れられない"
			},
			"directory": "chapter_3"
		},
		{
			"id": 4,
			"title": {
				"en": "Chapter 4. Antichrist is at hand: let us therefore avoid Jewish errors",
				"ja": "第4章 反キリストは、すぐすばにある。だからユダヤ教の過ちを避けるようにしよう"
			},
			"directory": "chapter_4"
		},
		{
			"id": 5,
			"title": {
				"en": "Chapter 5. The new covenant, founded on the sufferings of Christ, tends to our salvation, but to the Jews' destruction",
				"ja": "第5章 キリストの苦しみに基礎を置いた新しい契約は、私たちには救いになるが、ユダヤ人にとって破壊である"
			},
			"directory": "chapter_5"
		},
		{
			"id": 6,
			"title": {
				"en": "Chapter 6. The sufferings of Christ, and the new covenant, were announced by the prophets",
				"ja": "第6章 キリストの苦しみ、そして新しい契約は、預言者によって告げられていた"
			},
			"directory": "chapter_6"
		},
		{
			"id": 7,
			"title": {
				"en": "Chapter 7. Fasting, and the goat sent away, were types of Christ",
				"ja": "第7章 断食と放たれた山羊は、キリストの予型だった"
			},
			"directory": "chapter_7"
		},
		{
			"id": 8,
			"title": {
				"en": "Chapter 8. The red heifer a type of Christ",
				"ja": "第8章 赤の若雌牛もキリストの予型"
			},
			"directory": "chapter_8"
		},
		{
			"id": 9,
			"title": {
				"en": "Chapter 9. The spiritual meaning of circumcision",
				"ja": "第9章 割礼の霊的な意味"
			},
			"directory": "chapter_9"
		},
		{
			"id": 10,
			"title": {
				"en": "Chapter 10. Spiritual significance of the precepts of Moses respecting different kinds of food",
				"ja": "第10章 食物の種類に関するモーセの戒律の霊的な意義"
			},
			"directory": "chapter_10"
		},
		{
			"id": 11,
			"title": {
				"en": "Chapter 11. Baptism and the cross prefigured in the Old Testament",
				"ja": "第11章 旧約で予表されていたバプテスマと十字架"
			},
			"directory": "chapter_11"
		},
		{
			"id": 12,
			"title": {
				"en": "Chapter 12. The cross of Christ frequently announced in the Old Testament",
				"ja": "第12章 キリストの十字架は、何度も旧約聖書で告げられてきた"
			},
			"directory": "chapter_12"
		},
		{
			"id": 13,
			"title": {
				"en": "Chapter 13. Christians, and not Jews, the heirs of the covenant",
				"ja": "第13章 ユダヤ人ではなくクリスチャンが契約の相続人"
			},
			"directory": "chapter_13"
		},
		{
			"id": 14,
			"title": {
				"en": "Chapter 14. The Lord has given us the testament which Moses received and broke",
				"ja": "第14章 主は私たちにモーセが受けた契約を与え、それを破棄した"
			},
			"directory": "chapter_14"
		},
		{
			"id": 15,
			"title": {
				"en": "Chapter 15. The false and the true Sabbath",
				"ja": "第15章 偽の安息日と真の安息日"
			},
			"directory": "chapter_15"
		},
		{
			"id": 16,
			"title": {
				"en": "Chapter 16. The spiritual temple of God",
				"ja": "第16章 神の霊的な神殿"
			},
			"directory": "chapter_16"
		},
		{
			"id": 17,
			"title": {
				"en": "Chapter 17. Conclusion of the first part of the epistle",
				"ja": "第17章 手紙の最初の部分の結論"
			},
			"directory": "chapter_17"
		},
		{
			"id": 18,
			"title": {
				"en": "Chapter 18. Second part of the epistle.",
				"ja": "第18章 手紙の第二部"
			},
			"directory": "chapter_18"
		},
		{
			"id": 19,
			"title": {
				"en": "Chapter 19. The way of light",
				"ja": "第19章 光の道"
			},
			"directory": "chapter_19"
		},
		{
			"id": 20,
			"title": {
				"en": "Chapter 20. The way of darkness",
				"ja": "第20章 闇の道"
			},
			"directory": "chapter_20"
		},
		{
			"id": 21,
			"title": {
				"en": "Chapter 21. Conclusion",
				"ja": "第21章 結論"
			},
			"directory": "chapter_21"
		}
	];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = [
		{
			"paragraphId": 1,
			"sentences": [
				{
					"id": 1,
					"en": "The way of light, then, is as follows.",
					"ja": "次のように光の方法は、その後、です。"
				},
				{
					"id": 2,
					"en": " If any one desires to travel to the appointed place, he must be zealous in his works.",
					"ja": "いずれかが任命場所に旅行することを希望する場合は、彼は彼の作品に熱心でなければなりません。"
				},
				{
					"id": 3,
					"en": " The knowledge, therefore, which is given to us for the purpose of walking in this way, is the following.",
					"ja": "このようにして歩くの目的のために私たちに与えられ、そのための知識は、、次のとおりです。"
				},
				{
					"id": 4,
					"en": " You shall love Him that created you: you shall glorify Him that redeemed you from death.",
					"ja": "あなたは死からあなたを償還その彼を賛美しなければならない：あなたはあなたを作成し、その彼を愛しなければなりません。"
				},
				{
					"id": 5,
					"en": " You shall be simple in heart, and rich in spirit.",
					"ja": "あなたは心の中でシンプル、そして精神に富んでなければなりません。"
				},
				{
					"id": 6,
					"en": " You shall not join yourself to those who walk in the way of death.",
					"ja": "あなたは死の道を歩く人たちに自分自身に参加してはなりません。"
				},
				{
					"id": 7,
					"en": " You shall hate doing what is unpleasing to God: you shall hate all hypocrisy.",
					"ja": "あなたは神に不快である何を嫌いしなければならない：あなたはすべての偽善を憎むしなければなりません。"
				},
				{
					"id": 8,
					"en": " You shall not forsake the commandments of the Lord.",
					"ja": "あなたは主の戒めを捨ててはなりません。"
				},
				{
					"id": 9,
					"en": " You shall not exalt yourself, but shall be of a lowly mind.",
					"ja": "あなたは自分自身を称揚してはならないが、卑しい心のものでなければなりません。"
				},
				{
					"id": 10,
					"en": " You shall not take glory to yourself.",
					"ja": "あなたは自分自身に栄光を負わないものとします。"
				},
				{
					"id": 11,
					"en": " You shall not take evil counsel against your neighbour.",
					"ja": "あなたは隣人に対して悪助言を負わないものとします。"
				},
				{
					"id": 12,
					"en": " You shall not allow over-boldness to enter into your soul.",
					"ja": "あなたはあなたの魂に入るオーバー大胆させてはなりません。"
				},
				{
					"id": 13,
					"en": " You shall not commit fornication: you shall not commit adultery: you shall not be a corrupter of youth.",
					"ja": "あなたは姦淫をコミットしてはならない：あなたは姦淫してはならない。あなたは若者の堕落であってはなりません。"
				},
				{
					"id": 14,
					"en": " You shall not let the word of God issue from your lips with any kind of impurity.",
					"ja": "あなたは、不純物の任意の種類であなたの唇から神の問題の言葉を聞かせてはなりません。"
				},
				{
					"id": 15,
					"en": " You shall not accept persons when you reprove any one for transgression.",
					"ja": "あなたが罪のためのいずれかを非難するときに、人物を受け入れてはなりません。"
				},
				{
					"id": 16,
					"en": " You shall be meek: you shall be peaceable.",
					"ja": "あなたは柔和でなければならない：あなたは平和なものでなければなりません。"
				},
				{
					"id": 17,
					"en": " You shall tremble at the words which you hear.",
					"ja": "あなたが聞く言葉に震えなければなりません。"
				},
				{
					"id": 18,
					"en": " You shall not be mindful of evil against your brother.",
					"ja": "あなたはあなたの兄弟に対する悪の心に留めてはなりません。"
				},
				{
					"id": 19,
					"en": " You shall not be of doubtful mind James 1:8 as to whether a thing shall be or not.",
					"ja": "ものがあるか、ないものかどうかの8：あなたは疑わしい心ジェームズ1であってはなりません。"
				},
				{
					"id": 20,
					"en": " You shall not take the name of the Lord in vain.",
					"ja": "あなたは無駄に主の名を取ってはなりません。"
				},
				{
					"id": 21,
					"en": " You shall love your neighbour more than your own soul.",
					"ja": "あなたはもっと自分自身の魂よりもあなたの隣人を愛しなければなりません。"
				},
				{
					"id": 22,
					"en": " You shall not slay the child by procuring abortion; nor, again, shall you destroy it after it is born.",
					"ja": "あなたは中絶を調達して子を殺すならありません。それが生まれた後も、再び、あなたはそれを破壊しなければなりません。"
				},
				{
					"id": 23,
					"en": " You shall not withdraw your hand from your son, or from your daughter, but from their infancy you shall teach them the fear of the Lord.",
					"ja": "あなたはあなたの息子から手を撤回、またはあなたの娘から、彼らの幼年時代から、あなたは彼らに主を恐れることを教えなければならないものとします。"
				},
				{
					"id": 24,
					"en": " You shall not covet what is your neighbour's, nor shall you be avaricious.",
					"ja": "あなたは隣人のが何であるかをむさぼってはならない、また、あなたは貪欲でなければなりません。"
				},
				{
					"id": 25,
					"en": " You shall not be joined in soul with the haughty, but you shall be reckoned with the righteous and lowly.",
					"ja": "あなたは傲慢と魂に参加してはならないが、あなたは正しい者と卑しい一目置かなければなりません。"
				},
				{
					"id": 26,
					"en": " Receive as good things the trials which come upon you.",
					"ja": "良いものあなたに来る試練を受けます。"
				},
				{
					"id": 27,
					"en": " You shall not be of double mind or of double tongue, for a double tongue is a snare of death.",
					"ja": "あなたは死のわなである二重舌のために、二重の心のまたは二重の舌であってはなりません。"
				},
				{
					"id": 28,
					"en": " You shall be subject to the Lord, and to [other] masters as the image of God, with modesty and fear.",
					"ja": "あなたは主に、そして謙虚さと恐怖との神の像、など[その他]マスターに従うものとします。"
				},
				{
					"id": 29,
					"en": " You shall not issue orders with bitterness to your maidservant or your man-servant, who trust in the same [God ], lest you should not reverence that God who is above both; for He came to call men not according to their outward appearance, Ephesians 6:9 but according as the Spirit had prepared them.",
					"ja": "あなたは両方の上にある人の神ことを尊敬ないといけないあなたは、同じ[神]に信頼はしためまたはあなたの男-しもべに苦味との命令を発行しません。 9しかし、御霊がそれらを準備していたとして従った：彼は自分の外見、エペソ人への手紙6に記載のない男性を呼ぶようになったために。"
				},
				{
					"id": 30,
					"en": " Romans 8:29-30 You shall communicate in all things with your neighbour; you shall not call things your own; for if you are partakers in common of things which are incorruptible, how much more [should you be] of those things which are corruptible!",
					"ja": "ローマ8：29-30あなたはあなたの隣人とのすべてのものに通知しなければなりません。あなた自身の事を呼んではなりません。あなたは清廉潔白であるものの共通のあずかるある場合のために、どのようにはるかに[あなたがあるべき]堕落しているものの！"
				},
				{
					"id": 31,
					"en": " You shall not be hasty with your tongue, for the mouth is a snare of death.",
					"ja": "あなたの口は死のわなであるために、あなたの舌と性急であってはなりません。"
				},
				{
					"id": 32,
					"en": " As far as possible, you shall be pure in your soul.",
					"ja": "可能な限り、あなたはあなたの魂に純粋でなければなりません。"
				},
				{
					"id": 33,
					"en": " Do not be ready to stretch forth your hands to take, while you contract them to give.",
					"ja": "あなたが与えるためにそれらを縮小しながら、取るために手を伸ばしする準備ができてはいけません。"
				},
				{
					"id": 34,
					"en": " You shall love, as the apple of your eye, every one that speaks to you the word of the Lord.",
					"ja": "あなたは、あなたの目のリンゴ、あなたに主の言葉を話す一人一人のように、愛するものとします。"
				},
				{
					"id": 35,
					"en": " You shall remember the day of judgment, night and day.",
					"ja": "あなたが判断、夜と昼の日を覚えていなければなりません。"
				},
				{
					"id": 36,
					"en": " You shall seek out every day the faces of the saints, either by word examining them, and going to exhort them, and meditating how to save a soul by the word, or by your hands you shall labour for the redemption of your sins.",
					"ja": "あなたはそれらを調べ、それらを熱心に勧めるつもり、と言葉によって魂を保存する方法瞑想、またはあなたの罪の贖いのためにあなたが条労働あなたの手によっていずれかの単語によって、毎日に聖人の顔を模索しなければなりません。"
				},
				{
					"id": 37,
					"en": " You shall not hesitate to give, nor murmur when you give.",
					"ja": "あなたが与えることを躊躇し、また、あなたが与えるときつぶやくてはなりません。"
				},
				{
					"id": 38,
					"en": " Give to every one that asks you, and you shall know who is the good Recompenser of the reward.",
					"ja": "お願いします一人一人に与え、あなたは報酬の良いRecompenserが誰であるか知っていなければなりません。"
				},
				{
					"id": 39,
					"en": " You shall preserve what you have received [in charge], neither adding to it nor taking from it.",
					"ja": "あなたはどちらも、それに追加することも、それから取って、[担当]受け取ったものを保存しなければなりません。"
				},
				{
					"id": 40,
					"en": " To the last you shall hate the wicked [one].",
					"ja": "最後に、あなたは邪悪な[1]を憎むしなければなりません。"
				},
				{
					"id": 41,
					"en": " You shall judge righteously.",
					"ja": "あなたは義にかなった判断しなければなりません。"
				},
				{
					"id": 42,
					"en": " You shall not make a schism, but you shall pacify those that contend by bringing them together.",
					"ja": "あなたは分裂してはならないが、あなたはそれらを一緒にもたらすことによって競合するものをなだめるしなければなりません。"
				},
				{
					"id": 43,
					"en": " You shall confess your sins.",
					"ja": "あなたはあなたの罪を告白しなければなりません。"
				},
				{
					"id": 44,
					"en": " You shall not go to prayer with an evil conscience.",
					"ja": "あなたは邪悪な良心と祈りに行くものではありません。"
				},
				{
					"id": 45,
					"en": " This is the way of light.",
					"ja": "これは、光の道です。"
				}
			]
		}
	];

/***/ }
/******/ ]);