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
					"en": "In like manner He points to the cross of Christ in another prophet, who says, And when shall these things be accomplished?",
					"ja": "同様に、彼は言い、別の預言者でキリストの十字架、を指し、そしてときにこれらの事を達成しなければなりませんか？"
				},
				{
					"id": 2,
					"en": " And the Lord says, When a tree shall be bent down, and again arise, and when blood shall flow out of wood.",
					"ja": "主は木が曲がって、そして再び生じ、血液が木材から流出しなければならないときにしなければならないときは、述べています。"
				},
				{
					"id": 3,
					"en": " Here again you have an intimation concerning the cross, and Him who should be crucified.",
					"ja": "ここで再び、あなたはクロスに関する通告があり、十字架につけられるべきである彼。"
				},
				{
					"id": 4,
					"en": " Yet again He speaks of this in Moses, when Israel was attacked by strangers.",
					"ja": "またしても彼はイスラエルが見知らぬ人に襲われたとき、モーセにこののことを話します。"
				},
				{
					"id": 5,
					"en": " And that He might remind them, when assailed, that it was on account of their sins they were delivered to death, the Spirit speaks to the heart of Moses, that he should make a figure of the cross, and of Him about to suffer thereon; for unless they put their trust in Him, they shall be overcome for ever.",
					"ja": "襲わとき、彼がそれらを思い出させるかもしれないと、それは彼らの罪のためにあったことを彼らは死に配信された、スピリットは、彼が十字架の姿をしなければならないことを、モーセの心に話すと、彼のその苦しみについて;彼らは彼に信頼を置いていない限りために、彼らは永遠に克服しなければなりません。"
				},
				{
					"id": 6,
					"en": " Moses therefore placed one weapon above another in the midst of the hill, and standing upon it, so as to be higher than all the people, he stretched forth his hands, and thus again Israel acquired the mastery.",
					"ja": "モーセは、したがって、丘の真っ只中に別の1つ上の武器を置いて、その上に立って、すべての人々よりも高くなるように、彼は彼の手を伸ばし、したがって、再びイスラエルが支配を獲得しました。"
				},
				{
					"id": 7,
					"en": " But when again he let down his hands, they were again destroyed.",
					"ja": "再び、彼は彼の手を失望させたときしかし、彼らは再び破壊されました。"
				},
				{
					"id": 8,
					"en": " For what reason?",
					"ja": "いかなる理由で？"
				},
				{
					"id": 9,
					"en": " That they might know that they could not be saved unless they put their trust in Him.",
					"ja": "彼らは彼に信頼を置いていない限り、彼らは保存できませんでしたことを知っているかもしれないこと。"
				},
				{
					"id": 10,
					"en": " And in another prophet He declares, All day long I have stretched forth My hands to an unbelieving people, and one that gainsays My righteous way.",
					"ja": "そして、彼は宣言し、他の預言者で、一日中、私は懐疑的な人々に私の手を伸ばして、私の正義の道をgainsays 1しています。"
				},
				{
					"id": 11,
					"en": " Isaiah 65:2 And again Moses makes a type of Jesus, [signifying] that it was necessary for Him to suffer, [and also] that He would be the author of life [to others], whom they believed to have destroyed on the cross when Israel was failing.",
					"ja": "イザヤ65：2そして再びモーセは、[他の人に]彼は人生の著者であろうと、彼が苦しむすることが必要であること[意味]、イエスの種類を作る[も]、彼らは上で破壊されたと考えられて誰イスラエルが失敗したときに渡ります。"
				},
				{
					"id": 12,
					"en": " For since transgression was committed by Eve through means of the serpent, [the Lord] brought it to pass that every [kind of] serpents bit them, and they died, Numbers 21:6-9; John 3:14-18 that He might convince them, that on account of their transgression they were given over to the straits of death.",
					"ja": "; 6-9：罪が蛇の手段を通じてイブが犯したためには、[主は]、番号21のすべての[種類の]蛇はそれらをビット、およびそれらが死亡したことを渡すためにそれをもたらしましたヨハネ3：彼は自分の罪のために彼らは死の海峡に渡って与えられたことは、彼らを納得させる可能性がある14-18。"
				},
				{
					"id": 13,
					"en": " Moreover Moses, when he commanded, You shall not have any graven or molten [image] for your God, did so that he might reveal a type of Jesus.",
					"ja": "さらにモーセは、彼が命じたとき、あなたはあなたの神のための任意の刻ん又は溶融[画像]を持ってはならないので、彼はイエスの種類を明らかにする可能性があることでした。"
				},
				{
					"id": 14,
					"en": " Moses then makes a brazen serpent, and places it upon a beam, and by proclamation assembles the people.",
					"ja": "モーセはその後、厚かましい蛇を作り、ビーム上にそれを置き、そして布告によって人々を組み立てます。"
				},
				{
					"id": 15,
					"en": " When, therefore, they had come together, they besought Moses that he would offer sacrifice in their behalf, and pray for their recovery.",
					"ja": "、したがって、彼らは一緒に来たとき、彼らは彼が彼らのために犠牲を提供し、その回復のために祈るだろうとモーセを懇願しました。"
				},
				{
					"id": 16,
					"en": " And Moses spoke unto them, saying, When any one of you is bitten, let him come to the serpent placed on the pole; and let him hope and believe, that even though dead, it is able to give him life, and immediately he shall be restored.",
					"ja": "モーセはあなたのいずれかをかまされたとき、彼はポール上に配置された蛇に来てみましょう、と言って、彼らに話を聞きました。さらには死んだが、彼に命を与えることができる、とすぐに彼が復元されなければならないことを、彼は希望と信じましょう。"
				},
				{
					"id": 17,
					"en": " Numbers 21:9 And they did so.",
					"ja": "数字21：9彼らはそのようにしました。"
				},
				{
					"id": 18,
					"en": " You have in this also [an indication of] the glory of Jesus; for in Him and to Him are all things.",
					"ja": "また、この中で[の表示]イエスの栄光を持っています。彼および彼のためには、すべてのものです。"
				},
				{
					"id": 19,
					"en": " Colossians 1:16 What, again, says Moses to Jesus (Joshua) the son of Nave, when he gave him this name, as being a prophet, with this view only, that all the people might hear that the Father would reveal all things concerning His Son Jesus to the son of Nave?",
					"ja": "コロサイ1:16何を、再び、彼は彼にこの名前を与えたイエス（ヨシュア）身廊の息子、とモーセは言って、すべての人が父がすべてのものを明らかにすることを聞くかもしれない、これだけ見ると、預言者であるとしてネーブの息子に御子イエスに関する？"
				},
				{
					"id": 20,
					"en": " This name then being given him when he sent him to spy out the land, he said, Take a book into your hands, and write what the Lord declares, that the Son of God will in the last days cut off from the roots all the house of Amalek.",
					"ja": "彼は土地を偵察するために彼を送ったときに彼に与えられているこの名前は、彼によると、神の子が最後の日で根からすべて遮断されることを、あなたの手に本を取る、と主は宣言して何を書きますアマレクの家。"
				},
				{
					"id": 21,
					"en": " Exodus 17:14 Behold again: Jesus who was manifested, both by type and in the flesh, 1 Timothy 3:16 is not the Son of man, but the Son of God.",
					"ja": "出エジプト記17時14分見よ再び：タイプによって肉の両方で、明らかにされたイエスは、1テモテ3:16人の子ではなく、神の子。"
				},
				{
					"id": 22,
					"en": " Since, therefore, they were to say that Christ was the son of David, fearing and understanding the error of the wicked, he says, The Lord said unto my Lord, Sit at My right hand, until I make Your enemies Your footstool.",
					"ja": "以来、したがって、彼らは邪悪のエラーを恐れと理解し、キリストはダビデの子であったことを言っていた、と彼は言う、主は、私はあなたの敵をあなたの足台を作るまでは、私の右に座って、私の主に言いました。"
				},
				{
					"id": 23,
					"en": " And again, thus says Isaiah, The Lord said to Christ, my Lord, whose right hand I have holden, that the nations should yield obedience before Him; and I will break in pieces the strength of kings.",
					"ja": "そして再び、こうしてイザヤは言い、主は国が彼の前に服従を得なければならないこと、その右手私はホールデン持っているキリストは、私の主よ、と言いました。そして、私はバラバラに王の強さを中断します。"
				},
				{
					"id": 24,
					"en": " Isaiah 45:1 Behold how David calls Him Lord and the Son of God.",
					"ja": "イザヤ45：1ダビデは彼の主と神の御子を呼び出す方法見よ。"
				}
			]
		}
	];

/***/ }
/******/ ]);