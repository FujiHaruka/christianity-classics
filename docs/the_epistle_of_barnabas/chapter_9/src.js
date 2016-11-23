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
					"en": "He speaks moreover concerning our ears, how He has circumcised both them and our heart.",
					"ja": "彼はさらに、彼は彼らと私たちの心の両方を割礼しているか、私たちの耳について話します。"
				},
				{
					"id": 2,
					"en": " The Lord says in the prophet, In the hearing of the ear they obeyed me.",
					"ja": "主は彼らが私に従っ耳の聴力では、預言者に言います。"
				},
				{
					"id": 3,
					"en": " And again He says, By hearing, those shall hear who are afar off; they shall know what I have done.",
					"ja": "そして再び彼はそれらが遠く離れている人聴かなければならない、聞くことで、言います。彼らは私がやっていることを知っているものとします。"
				},
				{
					"id": 4,
					"en": " Isaiah 33:13 And, Be circumcised in your hearts, says the Lord.",
					"ja": "イザヤ33:13そして、あなたの心に割礼され、主は言います。"
				},
				{
					"id": 5,
					"en": " Jeremiah 4:4 And again He says, Hear, O Israel, for these things says the Lord your God.",
					"ja": "エレミヤ4：4そして再び彼は聞く、言う、イスラエルは、これらの事のためにあなたがたの神、主と言います。"
				},
				{
					"id": 6,
					"en": " Jeremiah 7:2 And once more the Spirit of the Lord proclaims, Who is he that wishes to live for ever?",
					"ja": "エレミヤ7：2そして、もう一度、彼は永遠に生きることを望むものである主は宣言する、の精神？"
				},
				{
					"id": 7,
					"en": " By hearing let him hear the voice of my servant.",
					"ja": "公聴会によって彼はわたしの僕の声を聞いてみましょう。"
				},
				{
					"id": 8,
					"en": " And again He says, Hear, O heaven, and give ear, O earth, for God has spoken.",
					"ja": "そして再び彼は、Oの天を聞く、と言うと、神が語られたために、耳、Oの地球を与えます。"
				},
				{
					"id": 9,
					"en": " Isaiah 1:2 These are in proof.",
					"ja": "イザヤ1：2これらは証明されています。"
				},
				{
					"id": 10,
					"en": " And again He says, Hear the word of the Lord, you rulers of this people.",
					"ja": "そして再び彼はこの民の主よ、あなたの支配者の言葉を聞き、言います。"
				},
				{
					"id": 11,
					"en": " Isaiah 1:10 And again He says, Hear, you children, the voice of one crying in the wilderness.",
					"ja": "イザヤ書1時10分そして再び彼は言う、聞く、あなたの子供たち、荒野で叫ぶの声。"
				},
				{
					"id": 12,
					"en": " Therefore He has circumcised our ears, that we might hear His word and believe, for the circumcision in which they trusted is abolished.",
					"ja": "そこで彼は、我々は、彼らが廃止され、信頼された割礼のために、彼の言葉を聞き、信じる私たちの耳を、割礼しています。"
				},
				{
					"id": 13,
					"en": " For He declared that circumcision was not of the flesh, but they transgressed because an evil angel deluded them.",
					"ja": "彼は、割礼は肉のではなかったことを宣言したが、邪悪な天使がそれらを惑わさので、彼らが犯しについて。"
				},
				{
					"id": 14,
					"en": " He says to them, These things says the Lord your God— (here I find a new commandment)— Sow not among thorns, but circumcise yourselves to the Lord.",
					"ja": "いばらの中にないソウ、しかし主に身を割礼 - 彼は、これらのことは、主なるあなたGOD-（ここでは、私は新しい戒めを見つける。）と言い、彼らに言います。"
				},
				{
					"id": 15,
					"en": " And why speaks He thus: Circumcise the stubbornness of your heart, and harden not your neck?",
					"ja": "そして、なぜ彼はこのように話す：あなたの心の頑固さを割礼し、あなたの首をない硬化しますか？"
				},
				{
					"id": 16,
					"en": " Deuteronomy 10:16 And again: Behold, says the Lord, all the nations are uncircumcised in the flesh, but this people are uncircumcised in heart.",
					"ja": "申命記10：16そして再び：見よ、主は言う、すべての国が肉に割礼を受けていますが、この人は心に割礼を受けていないです。"
				},
				{
					"id": 17,
					"en": " Jeremiah 9:25-26 But you will say, Yea, verily the people are circumcised for a seal.",
					"ja": "エレミヤ9：25-26しかし、あなたはいや、本当に人々は、シールのために割礼されている、と言うだろう。"
				},
				{
					"id": 18,
					"en": " But so also is every Syrian and Arab, and all the priests of idols: are these then also within the bond of His covenant?",
					"ja": "しかし、これもまた、すべてのシリアとアラブであり、偶像のすべての司祭：これらは彼の契約の結合内でも、その後ですか？"
				},
				{
					"id": 19,
					"en": " Yea, the Egyptians also practise circumcision.",
					"ja": "いや、エジプト人にも割礼を実践しています。"
				},
				{
					"id": 20,
					"en": " Learn then, my children, concerning all things richly, that Abraham, the first who enjoined circumcision, looking forward in spirit to Jesus, practised that rite, having received the mysteries of the three letters.",
					"ja": "アブラハムは、イエスに精神で楽しみにして、割礼を差し止め最初の人は、その儀式を実践していること、豊かなすべてのものについて、その後、私の子供を学び、3文字の謎を受けました。"
				},
				{
					"id": 21,
					"en": " For [the Scripture] says, And Abraham circumcised ten, and eight, and three hundred men of his household.",
					"ja": "[聖書]は言い、アブラハムは10、8、および彼の世帯の300人を割礼。"
				},
				{
					"id": 22,
					"en": " What, then, was the knowledge given to him in this?",
					"ja": "、その後、この中で彼に与えられた知識は何でしたか？"
				},
				{
					"id": 23,
					"en": " Learn the eighteen first, and then the three hundred.",
					"ja": "18まず、次に300をご覧ください。"
				},
				{
					"id": 24,
					"en": " The ten and the eight are thus denoted— Ten by Ι, and Eight by Η .",
					"ja": "10と8はΙによってテンdenoted-このようにしており、Ηによってエイト。"
				},
				{
					"id": 25,
					"en": " You have [the initials of the, name of] Jesus.",
					"ja": "あなたはイエス[の、名前のイニシャル]を持っています。"
				},
				{
					"id": 26,
					"en": " And because the cross was to express the grace [of our redemption] by the letter Τ, he says also, Three Hundred.",
					"ja": "クロスは文字Τによって[私たちの償還の]恵みを表現することだったのでそして、彼は、また、三百を言います。"
				},
				{
					"id": 27,
					"en": " He signifies, therefore, Jesus by two letters, and the cross by one.",
					"ja": "彼は2文字、一つのクロスによって、したがって、イエスを意味します。"
				},
				{
					"id": 28,
					"en": " He knows this, who has put within us the engrafted gift of His doctrine.",
					"ja": "彼は私たちの中に彼の教義の生着贈り物を入れている人は、このことを知っています。"
				},
				{
					"id": 29,
					"en": " No one has been admitted by me to a more excellent piece of knowledge than this, but I know that you are worthy.",
					"ja": "誰がこれよりも知識のより優れた作品に私が入院されていないが、私はあなたが価値があることを知っています。"
				}
			]
		}
	];

/***/ }
/******/ ]);