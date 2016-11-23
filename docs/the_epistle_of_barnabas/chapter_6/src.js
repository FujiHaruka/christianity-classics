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
					"en": "When, therefore, He has fulfilled the commandment, what says He?",
					"ja": "そのため、彼は戒めを満たしたとき、彼が何を言いましたか？"
				},
				{
					"id": 2,
					"en": " Who is he that will contend with Me?",
					"ja": "わたしと争うだろう、彼は誰ですか？"
				},
				{
					"id": 3,
					"en": " Let him oppose Me: or who is he that will enter into judgment with Me?",
					"ja": "彼は私に反対してみましょう：またはMeでの判断に入ります、彼は誰ですか？"
				},
				{
					"id": 4,
					"en": " Let him draw near to the servant of the Lord.",
					"ja": "彼は主のしもべに近づいてみましょう。"
				},
				{
					"id": 5,
					"en": " Isaiah 50:8 Woe unto you, for you shall all wax old, like a garment, and the moth shall eat you up.",
					"ja": "イザヤ50：8あなたがたに災い、あなたは衣服のような古いすべてのワックスは、ものとし、蛾はあなたを食べなければならないため。"
				},
				{
					"id": 6,
					"en": " Isaiah 50:9 And again the prophet says, Since as a mighty stone He is laid for crushing, behold I cast down for the foundations of Zion a stone, precious, elect, a corner-stone, honourable.",
					"ja": "イザヤ50：9そして再び預言者は、彼は粉砕のために敷設されているので、強大な石のように、と言うが、私はシオンの基礎石、貴重な、エレクト、コーナーストーン、名誉のために投げ落とさ見よ。"
				},
				{
					"id": 7,
					"en": " Next, what says He?",
					"ja": "次に、彼が何を言いましたか？"
				},
				{
					"id": 8,
					"en": " And he who shall trust in it shall live for ever.",
					"ja": "そして、彼は永遠に生きることに誰を信用しなければなりません。"
				},
				{
					"id": 9,
					"en": " Is our hope, then, upon a stone?",
					"ja": "私たちの希望は石の上に、その後、ありますか？"
				},
				{
					"id": 10,
					"en": " Far from it.",
					"ja": "それどころか。"
				},
				{
					"id": 11,
					"en": " But [the language is used] inasmuch as He laid his flesh [as a foundation] with power; for He says, And He placed me as a firm rock.",
					"ja": "しかし、彼はパワーと[基盤として]身を置い限り、[言語が使用されています]。彼は言うために、そして、彼は会社の岩のように私を置きました。"
				},
				{
					"id": 12,
					"en": " Isaiah 50:7 And the prophet says again, The stone which the builders rejected, the same has become the head of the corner.",
					"ja": "イザヤ50：7そして、預言者は再び言い、ビルダーは拒否された石は、同じことが隅の頭となっています。"
				},
				{
					"id": 13,
					"en": " And again he says, This is the great and wonderful day which the Lord has made.",
					"ja": "そして再び彼は、これは主がなされた素晴らしい、素晴らしい日です、と言います。"
				},
				{
					"id": 14,
					"en": " I write the more simply unto you, that you may understand.",
					"ja": "私はあなたが理解することが、あなたがたに単により多くを記述します。"
				},
				{
					"id": 15,
					"en": " I am the off-scouring of your love.",
					"ja": "私はあなたの愛のオフ精練しています。"
				},
				{
					"id": 16,
					"en": " What, then, again says the prophet?",
					"ja": "何、その後、再び預言者は述べていますか？"
				},
				{
					"id": 17,
					"en": " The assembly of the wicked surrounded me; they encompassed me as bees do a honeycomb, and upon my garment they cast lots.",
					"ja": "邪悪の組み立てが私を囲みました。ミツバチが蜂の巣がそうであるように、彼らは私を包含し、私の衣服の際に、彼らはくじを引きました。"
				},
				{
					"id": 18,
					"en": " Since, therefore, He was about to be manifested and to suffer in the flesh, His suffering was foreshown.",
					"ja": "そのため、彼は明らかにされようとしていたし、肉に苦しむことに、以来、彼の苦しみをforeshownました。"
				},
				{
					"id": 19,
					"en": " For the prophet speaks against Israel, Woe to their soul, because they have counselled an evil counsel against themselves, Isaiah 3:9 saying, Let us bind the just one, because he is displeasing to us.",
					"ja": "彼は私たちに不快にされているので9、私たちは一つだけをバインドしてみましょう、と言って：預言者のために、彼らは自分自身に対して邪悪な助言を助言しているので、イザヤ3は、彼らの魂に、イスラエル、災いに対して話します。"
				},
				{
					"id": 20,
					"en": " And Moses also says to them, Behold these things, says the Lord God: Enter into the good land which the Lord swore [to give] to Abraham, and Isaac, and Jacob, and inherit it, a land flowing with milk and honey.",
					"ja": "モーセはまた、これらの事を見よ、彼らに言って、主なる神は言う：アブラハムに[与える]主は誓った良い土地に入り、イサク、ヤコブ、そして、乳と蜜の流れる地を、それを継承します。"
				},
				{
					"id": 21,
					"en": " Exodus 33:1; Leviticus 20:24 What, then, says Knowledge?",
					"ja": "出エジプト記33：1;レビ記20時24とは何、それから、知識を言いますか？"
				},
				{
					"id": 22,
					"en": " Learn: Trust, she says, in Him who is to be manifested to you in the flesh— that is, Jesus.",
					"ja": "こちらをご覧ください：イエスであるflesh-のあなたに明らかにされるべきである彼への信頼を、彼女は言います。"
				},
				{
					"id": 23,
					"en": " For man is earth in a suffering state, for the formation of Adam was from the face of the earth.",
					"ja": "男は苦しみの状態に地球であるために、アダムの形成のために地の面からでした。"
				},
				{
					"id": 24,
					"en": " What, then, means this: into the good land, a land flowing with milk and honey?",
					"ja": "何、それから、このことを意味：良い地、乳と蜜の流れる地に？"
				},
				{
					"id": 25,
					"en": " Blessed be our Lord, who has placed in us wisdom and understanding of secret things.",
					"ja": "私たちに知恵と秘密の物事の理解置いている私たちの主、祝福されます。"
				},
				{
					"id": 26,
					"en": " For the prophet says, Who shall understand the parable of the Lord, except him who is wise and prudent, and who loves his Lord?",
					"ja": "預言者のために誰が賢明かつ賢明である、と誰が彼の主を愛し、彼を除いて、主のたとえを理解しなければならない、と言いますか？"
				},
				{
					"id": 27,
					"en": " Since, therefore, having renewed us by the remission of our sins, He has made us after another pattern, [it is His purpose] that we should possess the soul of children, inasmuch as He has created us anew by His Spirit.",
					"ja": "、したがって、私たちの罪の赦しによって私達を更新したので、彼は別のパターンの後に私たちを作った、彼は彼の御霊によって新たに私たちを作成したとして、我々は限り、子どもたちの魂を持っているべきである[それは彼の目的です]。"
				},
				{
					"id": 28,
					"en": " For the Scripture says concerning us, while He speaks to the Son, Let Us make man after Our image, and after Our likeness; and let them have dominion over the beasts of the earth, and the fowls of heaven, and the fishes of the sea.",
					"ja": "聖書は私たちについて言うために、彼は息子に語りか​​けながら、私たちのイメージの後に男を作り、そして私たちの肖像後にしましょう。そして彼らは地球の獣、天の鳥、海の魚を支配してみましょう。"
				},
				{
					"id": 29,
					"en": " Genesis 1:26 And the Lord said, on beholding the fair creature man, Increase, and multiply, and replenish the earth.",
					"ja": "創世記1時26主は公正な生き物の男をbeholdingに、大きくしていき、乗算、および地球を補充する、と述べました。"
				},
				{
					"id": 30,
					"en": " Genesis 1:28 These things [were spoken] to the Son.",
					"ja": "創世記1時28これらのことは息子に[話されました]。"
				},
				{
					"id": 31,
					"en": " Again, I will show you how, in respect to us, He has accomplished a second fashioning in these last days.",
					"ja": "繰り返しますが、私たちに関してで、彼はこれらの最後の日に第二の成形を達成したか、あなたが表示されます。"
				},
				{
					"id": 32,
					"en": " The Lord says, Behold, I will make the last like the first.",
					"ja": "主は見よ、と言う、私は最初のように最後になります。"
				},
				{
					"id": 33,
					"en": " In reference to this, then, the prophet proclaimed, Enter into the land flowing with milk and honey, and have dominion over it.",
					"ja": "これを参照するには、その後、預言者は宣言し、乳と蜜の流れる地に入力し、それを支配しています。"
				},
				{
					"id": 34,
					"en": " Exodus 33:3 Behold, therefore, we have been refashioned, as again He says in another prophet, Behold, says the Lord, I will take away from these, that is, from those whom the Spirit of the Lord foresaw, their stony hearts, and I will put hearts of flesh within them, Ezekiel 11:19, Ezekiel 36:26 because He was to be manifested in flesh, and to sojourn among us.",
					"ja": "出エジプト記33：3見よ、したがって、我々はrefashionedされている、など再び彼は別の預言者、見よに、主は言う、私は、主の御霊が予見した人たちから、つまり、離れてこれらから、その石の心を取る予定だという、と私は彼が肉で明らかにされることになっていたので、それらの中にエゼキエル11時19分、エゼキエル36:26を肉の心を置く、と私たちの間滞在します。"
				},
				{
					"id": 35,
					"en": " For, my brethren, the habitation of our heart is a holy temple to the Lord.",
					"ja": "私の兄弟、のために、私たちの心の居住は、主の聖なる神殿です。"
				},
				{
					"id": 36,
					"en": " Ephesians 2:21 For again says the Lord, And wherewith shall I appear before the Lord my God, and be glorified?",
					"ja": "再びについてエペソ2:21主は言う、そして何では、私は主私の神の前に出頭しなければならない、と見せかけできますか？"
				},
				{
					"id": 37,
					"en": " He says, I will confess to you in the Church in the midst of my brethren; and I will praise you in the midst of the assembly of the saints.",
					"ja": "彼は私が私の兄弟たちの真っ只中に教会であなたに告白します、と言います。そして、私は聖人のアセンブリの真っ只中にあなたをほめたたえます。"
				},
				{
					"id": 38,
					"en": " We, then, are they whom He has led into the good land.",
					"ja": "私たちは、その後、彼らは彼が良い地につながっている人です。"
				},
				{
					"id": 39,
					"en": " What, then, mean milk and honey?",
					"ja": "何、その後、乳と蜜を意味ですか？"
				},
				{
					"id": 40,
					"en": " This, that as the infant is kept alive first by honey, and then by milk, so also we, being quickened and kept alive by the faith of the promise and by the word, shall live ruling over the earth.",
					"ja": "幼児が蜂蜜による最初の、そしてその後、牛乳によって生かされているので、また、我々は、速めと約束の信仰によって、ワードによって生かされているように、これは、地球上で支配生きること。"
				},
				{
					"id": 41,
					"en": " But He said above, Let them increase, and rule over the fishes.",
					"ja": "しかし彼は、彼らが増加し、魚を支配しよう、上記と述べました。"
				},
				{
					"id": 42,
					"en": " Genesis 1:28 Who then is able to govern the beasts, or the fishes, or the fowls of heaven?",
					"ja": "創世記1:28誰がその後、獣、または魚、または天の鳥を支配することができますか？"
				},
				{
					"id": 43,
					"en": " For we ought to perceive that to govern implies authority, so that one should command and rule.",
					"ja": "1コマンドを入力し、支配する必要がありますように、私たちが支配することを認識するべきであるためにするには、権限を意味します。"
				},
				{
					"id": 44,
					"en": " If, therefore, this does not exist at present, yet still He has promised it to us.",
					"ja": "場合は、そのため、これは現時点では存在しないが、それでも彼は私たちにそれを約束しました。"
				},
				{
					"id": 45,
					"en": " When?",
					"ja": "いつ？"
				},
				{
					"id": 46,
					"en": " When we ourselves also have been made perfect [so as] to become heirs of the covenant of the Lord.",
					"ja": "主の契約の相続人になるために[ように]ときに私たち自身も完璧行われています。"
				}
			]
		}
	];

/***/ }
/******/ ]);