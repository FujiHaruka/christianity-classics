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
					"en": "Understand, then, you children of gladness, that the good Lord has foreshown all things to us, that we might know to whom we ought for everything to render thanksgiving and praise.",
					"ja": "私たちは誰に我々はすべてのために感謝と賛美をレンダリングするべきで知っているかもしれないことを、良い主は私たちにすべてのものをforeshownたことを、喜びのその後、あなたの子供を理解します。"
				},
				{
					"id": 2,
					"en": " If therefore the Son of God, who is Lord [of all things], and who will judge the living and the dead, suffered, that His stroke might give us life, let us believe that the Son of God could not have suffered except for our sakes.",
					"ja": "リビングとを判断し、[すべての物事の]主である神の子、したがってもし死んで、苦しんで、彼のストロークが私たちに命を与える可能性があることを、私たちは神の御子はを除いて苦しんでいることができなかったことを信じてみましょう私たちの日本酒。"
				},
				{
					"id": 3,
					"en": " Moreover, when fixed to the cross, He had given Him to drink vinegar and gall.",
					"ja": "クロスに固定されたときにまた、彼は酢と胆嚢を飲むために彼を与えました。"
				},
				{
					"id": 4,
					"en": " Hearken how the priests of the people gave previous indications of this.",
					"ja": "人の司祭が、この前の兆候を与えたか聞け。"
				},
				{
					"id": 5,
					"en": " His commandment having been written, the Lord enjoined, that whosoever did not keep the fast should be put to death, because He also Himself was to offer in sacrifice for our sins the vessel of the Spirit, in order that the type established in Isaac when he was offered upon the altar might be fully accomplished.",
					"ja": "彼の戒めは、彼はまた、自身のタイプが時アイザックに設立された順序で、私たちの罪のために犠牲に御霊の容器を提供することだったので、誰でも高速を守らなかったことは、死刑にすべきであると、主は差し止め、書かれました祭壇が完全に達成されるかもしれない時に彼が提供されていました。"
				},
				{
					"id": 6,
					"en": " What, then, says He in the prophet?",
					"ja": "その後、彼は預言者に言って、？"
				},
				{
					"id": 7,
					"en": " And let them eat of the goat which is offered, with fasting, for all their sins.",
					"ja": "そして、彼らはすべて彼らの罪のために、断食して、提供されているヤギを食べてみましょう。"
				},
				{
					"id": 8,
					"en": " Attend carefully: And let all the priests alone eat the inwards, unwashed with vinegar.",
					"ja": "慎重に出席：そして一人ですべての司祭は、酢と洗っていない、内側に食べてみましょう。"
				},
				{
					"id": 9,
					"en": " Wherefore?",
					"ja": "何のために？"
				},
				{
					"id": 10,
					"en": " Because to me, who am to offer my flesh for the sins of my new people, you are to give gall with vinegar to drink: eat alone, while the people fast and mourn in sackcloth and ashes.",
					"ja": "しばらく人々速く、一人で食べて、荒布と灰の中嘆く：私の新しい人々の罪のため私の肉を提供しています私にあるので、あなたが飲むために酢と胆嚢を与えることです。"
				},
				{
					"id": 11,
					"en": " [These things were done] that He might show that it was necessary for Him to suffer for them.",
					"ja": "彼は彼が彼らのために苦しむすることが必要であったことを示している可能性があることを[これらの事が行われました]。"
				},
				{
					"id": 12,
					"en": " How, then, ran the commandment?",
					"ja": "どのように、その後、命令を実行しましたか？"
				},
				{
					"id": 13,
					"en": " Give your attention.",
					"ja": "あなたの注意を与えます。"
				},
				{
					"id": 14,
					"en": " Take two goats of goodly aspect, and similar to each other, and offer them.",
					"ja": "立派な側面の2ヤギを取り、互いに類似し、それらを提供しています。"
				},
				{
					"id": 15,
					"en": " And let the priest take one as a burnt-offering for sins.",
					"ja": "祭司は罪のために燔祭として1を取りましょう。"
				},
				{
					"id": 16,
					"en": " And what should they do with the other?",
					"ja": "そして、彼らは他に何をすべきでしょうか？"
				},
				{
					"id": 17,
					"en": " Accursed, says He, is the one.",
					"ja": "呪われた、彼は言う、1です。"
				},
				{
					"id": 18,
					"en": " Mark how the type of Jesus now comes out.",
					"ja": "マルコはイエスの種類は今出てきますか。"
				},
				{
					"id": 19,
					"en": " And all of you spit upon it, and pierce it, and encircle its head with scarlet wool, and thus let it be driven into the wilderness.",
					"ja": "そして、あなたのすべては、それに唾し、それを貫通し、緋色の羊毛とその頭を包囲し、したがって、それは荒野に駆動することができます。"
				},
				{
					"id": 20,
					"en": " And when all this has been done, he who bears the goat brings it into the desert, and takes the wool off from it, and places that upon a shrub which is called Rachia, of which also we are accustomed to eat the fruits when we find them in the field.",
					"ja": "このすべてが行われているときや、ヤギを負う彼は砂漠にそれをもたらし、そしてそれから羊毛を離陸し、低木時Rachiaと呼ばれる場所は、また、我々は、ときに我々の果物を食べるために慣れているのフィールドにそれらを見つけます。"
				},
				{
					"id": 21,
					"en": " Of this kind of shrub alone the fruits are sweet.",
					"ja": "単独の低木のこの種の果実は甘いです。"
				},
				{
					"id": 22,
					"en": " Why then, again, is this?",
					"ja": "その後、再び、これはなぜですか？"
				},
				{
					"id": 23,
					"en": " Give good heed.",
					"ja": "良好な注意を与えます。"
				},
				{
					"id": 24,
					"en": " [You see] one upon the altar, and the other accursed; and why [do you behold] the one that is accursed crowned?",
					"ja": "祭壇1 [あなたは参照]、およびその他のは呪わ。そしてなぜ戴冠呪われているいずれかを[あなたは見よますか]？"
				},
				{
					"id": 25,
					"en": " Because they shall see Him then in that day having a scarlet robe about his body down to his feet; and they shall say, Is not this He whom we once despised, and pierced, and mocked, and crucified?",
					"ja": "彼らは彼の足に至るまで、彼の体は約緋色のローブを持つその日に、その後彼を見なければならないからです。そして彼らが言わなければならない、これは我々がかつて軽蔑し、ピアス、と嘲笑、そして十字架につけられ適う者ではないですか？"
				},
				{
					"id": 26,
					"en": " Truly this is He who then declared Himself to be the Son of God.",
					"ja": "本当にこれは、その後、自身が神の御子であると宣言誰彼です。"
				},
				{
					"id": 27,
					"en": " For how like is He to Him!",
					"ja": "好きな方法については彼が彼にあります！"
				},
				{
					"id": 28,
					"en": " With a view to this, [He required] the goats to be of goodly aspect, and similar, that, when they see Him then coming, they may be amazed by the likeness of the goat.",
					"ja": "これを視野に入れて、彼らは彼が次に来るのを見るとき、彼らはヤギの肖像に驚いてもよいことが、立派な側面であることがヤギを[彼が必要]、および同様。"
				},
				{
					"id": 29,
					"en": " Behold, then, the type of Jesus who was to suffer.",
					"ja": "見よ、その後、イエスのタイプは苦しむことだった人。"
				},
				{
					"id": 30,
					"en": " But why is it that they place the wool in the midst of thorns?",
					"ja": "しかし、なぜそれはいばらの真っ只中にウールを置くということですか？"
				},
				{
					"id": 31,
					"en": " It is a type of Jesus set before the view of the Church.",
					"ja": "それは、教会のビューの前にイエス・セットのタイプです。"
				},
				{
					"id": 32,
					"en": " [They place the wool among thorns], that any one who wishes to bear it away may find it necessary to suffer much, because the thorn is formidable, and thus obtain it only as the result of suffering.",
					"ja": "それを離れて負担することを希望するいずれかのとげは手ごわいですので、それが必要なくらいに苦しむ見つけ、そのためだけ苦しみの結果としてそれを得ることができることは、[彼らはいばらの中にウールを置きます]。"
				},
				{
					"id": 33,
					"en": " Thus also, says He, Those who wish to behold Me, and lay hold of My kingdom, must through tribulation and suffering obtain Me.",
					"ja": "このように、また、彼は、私を見よ、とわたしの王国のホールドを築くためにご希望の方は、試練と苦難を通して私を取得する必要がありますと言います。"
				},
				{
					"id": 34,
					"en": " Acts 14:22",
					"ja": "行為14時22分"
				}
			]
		}
	];

/***/ }
/******/ ]);