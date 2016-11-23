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
					"en": "Further, also, it is written concerning the Sabbath in the Decalogue which [the Lord] spoke, face to face, to Moses on Mount Sinai, And sanctify the Sabbath of the Lord with clean hands and a pure heart.",
					"ja": "さらに、また、それは、[主は]シナイ山でモーセに、顔に、顔を話した十戒で安息日について書かれた、そして清潔な手と純粋な心で主の安息日を聖れます。"
				},
				{
					"id": 2,
					"en": " Exodus 20:8; Deuteronomy 5:12 And He says in another place, If my sons keep the Sabbath, then will I cause my mercy to rest upon them.",
					"ja": "出エジプト記20：8;私の息子は、私は私の慈悲が彼らに載ることになります、安息日を維持する場合申命記5：12そして彼は、別の場所で述べています。"
				},
				{
					"id": 3,
					"en": " Jeremiah 17:24-25 The Sabbath is mentioned at the beginning of the creation [thus]: And God made in six days the works of His hands, and made an end on the seventh day, and rested on it, and sanctified it.",
					"ja": "エレミヤ17：24-25安息日は[こうして]創造の冒頭で言及されている：そして神は6日で彼の手の作品を作って、七日目に終わりを作り、その上に休んだし、それを聖別。"
				},
				{
					"id": 4,
					"en": " Attend, my children, to the meaning of this expression, He finished in six days.",
					"ja": "出席し、私の子供たちは、この式の意味に、彼は6日で終了しました。"
				},
				{
					"id": 5,
					"en": " This implies that the Lord will finish all things in six thousand years, for a day is with Him a thousand years.",
					"ja": "これは、主が彼と共に千年である日のために、6000年にすべてのものを終えることを意味します。"
				},
				{
					"id": 6,
					"en": " And He Himself testifies, saying, Behold, today will be as a thousand years.",
					"ja": "そして、彼自身が見よ、今日は千年のようになります、と言って、証言します。"
				},
				{
					"id": 7,
					"en": " Therefore, my children, in six days, that is, in six thousand years, all things will be finished.",
					"ja": "したがって、私の子供たちは、6日間で、つまり、6000年には、すべての物事が完了します。"
				},
				{
					"id": 8,
					"en": " And He rested on the seventh day.",
					"ja": "そして、彼は七日目に休みました。"
				},
				{
					"id": 9,
					"en": " This means: when His Son, coming [again], shall destroy the time of the wicked man, and judge the ungodly, and change the-sun, and the moon, and the stars, then shall He truly rest on the seventh day.",
					"ja": "これは、意味：御子は、[再び]来て、邪悪な男の時間を破壊し、とんでもないを判断し、-日を変更し、月と星が、その後、彼は本当に七日目に休まなければならないものとしたとき。"
				},
				{
					"id": 10,
					"en": " Moreover, He says, You shall sanctify it with pure hands and a pure heart.",
					"ja": "また、彼は言う、あなたは純粋な手と純粋な心でそれを聖別しなければなりません。"
				},
				{
					"id": 11,
					"en": " If, therefore, any one can now sanctify the day which God has sanctified, except he is pure in heart in all things, we are deceived.",
					"ja": "彼はすべての事に心に純粋であることを除き、したがって、任意の1は今、神が聖別した日を聖ことができれば、我々はだまされています。"
				},
				{
					"id": 12,
					"en": " Behold, therefore: certainly then one properly resting sanctifies it, when we ourselves, having received the promise, wickedness no longer existing, and all things having been made new by the Lord, shall be able to work righteousness.",
					"ja": "見よ、それゆえ：確かにその後正しく聖別にそれを休ん1は、私たち自身が、約束を受けた時、邪悪は、もはや既存の、そしてすべてのものは主によって新たなされた、義を作業することができないものとします。"
				},
				{
					"id": 13,
					"en": " Then we shall be able to sanctify it, having been first sanctified ourselves.",
					"ja": "その後、我々は最初に自分自身を聖別された、それを聖できるようにしなければなりません。"
				},
				{
					"id": 14,
					"en": " Further, He says to them, Your new moons and your Sabbath I cannot endure.",
					"ja": "さらに、彼はあなたの新月とあなたの安息日は、私は耐えられない、彼らに言います。"
				},
				{
					"id": 15,
					"en": " Isaiah 1:13 You perceive how He speaks: Your present Sabbaths are not acceptable to Me, but that is which I have made, [namely this,] when, giving rest to all things, I shall make a beginning of the eighth day, that is, a beginning of another world.",
					"ja": "あなたは彼が話すどのように知覚イザヤ1:13：[すなわち、この、]、貴方の現在の安息日は、わたしにとって受け入れられないが、それは私が作っているあるすべてのものに休息を与えたとき、私は八日目の始まりをしなければなりません、それは、別の世界の始まりです。"
				},
				{
					"id": 16,
					"en": " Wherefore, also, we keep the eighth day with joyfulness, the day also on which Jesus rose again from the dead.",
					"ja": "何のために、また、私たちは、喜びで八日、イエスが死から再び上昇しているにも日を保ちます。"
				},
				{
					"id": 17,
					"en": " And when He had manifested Himself, He ascended into the heavens.",
					"ja": "彼は自分自身を明らかにしていた時、彼が天に昇っ。"
				}
			]
		}
	];

/***/ }
/******/ ]);