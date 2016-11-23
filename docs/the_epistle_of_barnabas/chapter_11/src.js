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
					"en": "Let us further inquire whether the Lord took any care to foreshadow the water [of baptism] and the cross.",
					"ja": "私たちはさらに主が[洗礼の]水とクロスを予示するために、任意の世話をしたかどうかを問い合わせてみましょう。"
				},
				{
					"id": 2,
					"en": " Concerning the water, indeed, it is written, in reference to the Israelites, that they should not receive that baptism which leads to the remission of sins, but should procure another for themselves.",
					"ja": "水に関しては、確かに、彼らが罪の赦しをもたらすこと洗礼を受けるべきではありませんが、自分自身のために別のものを調達する必要があること、イスラエル人を参照して、書かれています。"
				},
				{
					"id": 3,
					"en": " The prophet therefore declares, Be astonished, O heaven, and let the earth tremble at this, because this people has committed two great evils: they have forsaken Me, a living fountain, and have hewn out for themselves broken cisterns.",
					"ja": "彼らは、生きている噴水をわたしを捨てている、と自分自身のために壊れた水槽を切りっぱなしいます。この人は、2つの偉大な悪を犯したので、それゆえ預言者は、びっくりして、宣言するOの天、地、この時に震えてみましょう"
				},
				{
					"id": 4,
					"en": " Is my holy hill Zion a desolate rock?",
					"ja": "私の聖なる山シオンは、荒涼とした岩ですか？"
				},
				{
					"id": 5,
					"en": " For you shall be as the fledglings of a bird, which fly away when the nest is removed.",
					"ja": "あなたが巣を除去したとき飛び立つ鳥のfledglings、ようでなければならないために。"
				},
				{
					"id": 6,
					"en": " Isaiah 16:1-2 And again says the prophet, I will go before you and make level the mountains, and will break the brazen gates, and bruise in pieces the iron bars; and I will give you the secret, hidden, invisible treasures, that they may know that I am the Lord God.",
					"ja": "イザヤ16：1-2そして再び預言者は、私はあなたの前に行くとレベルの山を作り、厚かましいゲート、および片鉄の棒であざを破壊するであろうと言います。そして、私は彼らが私は主なる神だということを知っている可能性があること、あなたの秘密、隠された、目に見えない宝物を与えます。"
				},
				{
					"id": 7,
					"en": " Isaiah 45:2-3 And He shall dwell in a lofty cave of the strong rock.",
					"ja": "イザヤ45：2-3そして、彼は強い岩の高尚な洞窟に住むものとします。"
				},
				{
					"id": 8,
					"en": " Furthermore, what says He in reference to the Son?",
					"ja": "また、どのような彼は息子を参照して言いましたか？"
				},
				{
					"id": 9,
					"en": " His water is sure; you shall see the King in His glory, and your soul shall meditate on the fear of the Lord.",
					"ja": "彼の水は確実です。あなたは彼の栄光に王を見なければならない、とあなたの魂は主を恐れることに黙想しなければなりません。"
				},
				{
					"id": 10,
					"en": " Isaiah 33:16-18 And again He says in another prophet, The man who does these things shall be like a tree planted by the courses of waters, which shall yield its fruit in due season; and his leaf shall not fade, and all that he does shall prosper.",
					"ja": "イザヤ33：16-18そして再び彼は別の預言者で述べているが、これらの事をして男が原因でシーズン中のフルーツを得なければならない水のコース、によって植えられた木のようでなければなりません。そして彼の葉は色あせてはならない、と彼はその全てが繁栄しなければなりません。"
				},
				{
					"id": 11,
					"en": " Not so are the ungodly, not so, but even as chaff, which the wind sweeps away from the face of the earth.",
					"ja": "それほど不信心ではないので、それでも風が地球の表面から一掃もみ殻、として、です。"
				},
				{
					"id": 12,
					"en": " Therefore the ungodly shall not stand in judgment, nor sinners in the counsel of the just; for the Lord knows the way of the righteous, but the way of the ungodly shall perish.",
					"ja": "したがって、不信心はただの弁護士で判断、また罪人に立ってはなりません。主のために義の道を知っているが、不信心の方法は滅びます。"
				},
				{
					"id": 13,
					"en": " Mark how He has described at once both the water and the cross.",
					"ja": "彼は一度に水とクロスの両方を説明した方法をマーク。"
				},
				{
					"id": 14,
					"en": " For these words imply, Blessed are they who, placing their trust in the cross, have gone down into the water; for, says He, they shall receive their reward in due time: then He declares, I will recompense them.",
					"ja": "これらの言葉が暗示については、クロスに信頼を置いて、水の中にダウンした彼らを祝福しています。その後、彼は宣言し、私はそれらを報いるます：のために、彼は、彼らが期限内に自分の報酬を受けなければならないと言います。"
				},
				{
					"id": 15,
					"en": " But now He says, Their leaves shall not fade.",
					"ja": "しかし、今彼は、彼らの葉は色あせてはならない、と言います。"
				},
				{
					"id": 16,
					"en": " This means, that every word which proceeds out of your mouth in faith and love shall tend to bring conversion and hope to many.",
					"ja": "これは、信仰と愛であなたの口から出て進行するすべての言葉は、多くのへの変換と希望をもたらす傾向にあるものとすること、を意味します。"
				},
				{
					"id": 17,
					"en": " Again, another prophet says, And the land of Jacob shall be extolled above every land.",
					"ja": "ここでも、他の預言者は言います、そして、ヤコブの土地は、すべての土地の上に絶賛されなければなりません。"
				},
				{
					"id": 18,
					"en": " Zephaniah 3:19 This means the vessel of His Spirit, which He shall glorify.",
					"ja": "ゼパニヤ3:19これは、彼が賛美しなければならない聖霊の容器を意味します。"
				},
				{
					"id": 19,
					"en": " Further, what says He?",
					"ja": "さらに、彼は何を言いましたか？"
				},
				{
					"id": 20,
					"en": " And there was a river flowing on the right, and from it arose beautiful trees; and whosoever shall eat of them shall live for ever.",
					"ja": "そして、そこを右に流れる川があって、そこから美しい木を生じました。そして、誰でもそれらを食べなければならないことは永遠に生きます。"
				},
				{
					"id": 21,
					"en": " Ezekiel 47:12 This means, that we indeed descend into the water full of sins and defilement, but come up, bearing fruit in our heart, having the fear [of God] and trust in Jesus in our spirit.",
					"ja": "エゼキエル47:12これは、我々は確かに私たちの心の中でイエスの[神の]恐れと信頼を持つ、罪や汚れを完全に水に降り、私たちの心の中で実を結び、出てくることを意味します。"
				},
				{
					"id": 22,
					"en": " And whosoever shall eat of these shall live for ever, This means: Whosoever, He declares, shall hear you speaking, and believe, shall live for ever.",
					"ja": "そして、永遠に生きるこれらの誰でもを食べなければならない、これは意味：誰でも、彼は宣言し、永遠に生きる、あなたが話し聞き、信じなければなりません。"
				}
			]
		}
	];

/***/ }
/******/ ]);