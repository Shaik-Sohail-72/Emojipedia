const emojipedia = [
  {
    id: 1,
    emoji: "😇",
    name: "Smiling Face With Halo",
    meaning:
      "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
  },
  {
    id: 2,
    emoji: "🔥",
    name: "Fire",
    meaning:
      "You're as hot as a volcano! The fire emoji is often used as a compliment and also in connection with “to be enlightened”, or for spicy food."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 4,
    emoji: "✨",
    name: "Sparkles",
    meaning:
      "Three decoratively sparkling stars. For example, can mean: I polished my car or my apartment to mirror finish."
  },
  {
    id: 5,
    emoji: "👀",
    name: "Eyes",
    meaning:
      "Beware, someone is watching you! Two eyes are looking to the left. Something is being watched or checked. You're under observation!"
  },
  {
    id: 6,
    emoji: "🤲",
    name: "Holding hands up, palms against each other",
    meaning:
      "I'm praying that everything will go smoothly today or “Can you lend me some money please?“ The upturned palms represent a form of praying or asking for handouts. In American sign language, the symbol of an open book."
  },
  {
    id: 7,
    emoji: "😊",
    name: "Smiling Face With Smiling Eyes",
    meaning:
      "Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^."
  },
  {
    id: 8,
    emoji: "😳",
    name: "Flushed Face",
    meaning:
      "Person is shocked, in an uncomfortable situation or has made a mistake. Expresses shame; something is very embarrassing. Reacts to a compliment or a flattering message that the person did not want to receive."
  },
  {
    id: 9,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "The thinker's pose: Thoughtful face with the characteristic hand on the chin. Puts a statement, a person's intelligence, or an idea into question. Is mulling over something or thinking about a brilliant idea."
  },
  {
    id: 10,
    emoji: "🤨",
    name: "Face With a Raised Eyebrow",
    meaning:
      "With the questioning look on the face, resembles the actor “The Rock“ (Dwayne Johnson). Can be used to express skepticism, disbelief or disapproval."
  },
  {
    id: 11,
    emoji: "😂",
    name: "Face With Tears of Joy",
    meaning:
      "I am laughing to hard that I can hardly keep myself on my chair! Something is so incredibly funny that you cry laughing. Gets the giggles and can hardly contain himself. This emoji is the most popular and was named Word of the Year 2015."
  },
  { 
    id: 12,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "Smiley with drooping eyebrows is sad and crying. A tear drop is running down the cheek. A picture of misery. Not so much general sadness, but rather pain over one thing. It still hurts to remember a certain event."
  },
  { 
    id: 13,
    emoji: "🤯",
    name: "Face With Exploding Head",
    meaning:
      "I cannot believe it. or “That will blow you away.“ Something is very exciting or surprising. The exploding head can also be used to express shock or awe."
  },
  { 
    id: 14,
    emoji: "😠",
    name: "Angry Face",
    meaning:
      "Smiley is upset, angry, and totally furious. Reaction to something unfavorable or a sign of rejection. You had better keep out of the person's way."
  },
  { 
    id: 15,
    emoji: "🥳",
    name: "Face with party blower and party hat",
    meaning:
      "That was a wild party or “Let's celebrate“. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season."
  },
  {  
    id: 16,
    emoji: "🎂",
    name: "Birthday Cake",
    meaning:
      "Traditionally, the cake with the burning candles is a birthday cake. The birthday child blows out the candles and wishes for something. Generally for celebrations and congratulations."
  },
  {
    id: 17,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "Happy Birthday! The confetti bomb explodes in a fountain of paper streamers and confetti. A party might be in progress or someone has been successful and is very happy about something."
  },
  {
    id: 18,
    emoji: "🎁",
    name: "Wrapped present",
    meaning:
      "Congratulations! Be it at Christmas, for a birthday or other occasions: Gifts are usually delivered beautifully wrapped and with a bow. Can refer to the gift itself or a special occasion, such as a wedding."
  },
  {
    id: 19,
    emoji: "👏",
    name: "Clapping Hands",
    meaning:
      "Bravo, very well done! Emoji shows two clapping hands. Is mostly used for expressing consent and appreciation. Can also be used sarcastically, if something truly doesn't deserve any applause!"
  },
  {  
    id: 20,
    emoji: "👌",
    name: "Ok Hand Sign",
    meaning:
      "Thumb and forefinger form an O. Symbol for “Okay!“ Sign of approval, agreement or that everything is okay. Careful, in some countries it is considered offensive and insulting (“you a**hole“)."
  },
  { 
    id: 21,
    emoji: "👍",
    name: "“Thumbs-Up” Sign",
    meaning:
      "Well done! Hand with thumb turned up. Stands for commitment, agreement and approval! Caution: In Arab countries, this is interpreted as showing the two fingers."
  },
  { 
    id: 22,
    emoji: "👎",
    name: "Thumbs Down Sign",
    meaning:
      "That was really bad! Thumb turned down stands for rejection, disapproval and dislike. Also known as the false death myth meaning with Roman gladiators."
  },
  { 
    id: 23,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  { 
    id: 24,
    emoji: "🤦",
    name: "Man Grabbing His Head",
    meaning:
      "Facepalm describes a gesture that became popular through the Star Trek series. “That cannot be true!“ is what you think when facing the stupidity of other people. Can also be used if you are embarrassed for someone else."
  },
  { 
    id: 25,
    emoji: "🤷",
    name: "Person Shrugs",
    meaning:
      "“I don't know how I can help you” or “Such is life” . The shrug of the shoulders shows ignorance, confusion or the lack of interest in something. Text version: ¯\_(ツ)_/¯"
  },
  { 
    id: 26,
    emoji: "💫",
    name: "Dizzy Symbol",
    meaning:
      "My head is spinning! Swinging star. Means, I'm totally dazed (drunken) and only see stars."
  },
  { 
    id: 27,
    emoji: "💍",
    name: "Ring",
    meaning:
      "Will you marry me? Also “I'm spoken for!” The ring is set with a diamond, the most precious gem ever. Is mostly used in conjunction with relationships or for expressing approval."
  },
  {
    id: 28,
    emoji: "❣",
    name: "Heavy Heart Exclamation Mark Ornament",
    meaning:
      "I totally agree with that! A heart with a dot below forms a decorative exclamation mark. This gesture comes from the heart and emphasizes that you really like something or someone."
  },
  { 
    id: 29,
    emoji: "💚",
    name: "Green Heart",
    meaning:
      "Expression of life or lifestyle (e.g. healthy diet) and closeness to nature. Also known as the jealous heart, it may indicate relationship issues or the hope for reconciliation. Often used on the Irish St. Patrick's Day."
  },
  { 
    id: 30,
    emoji: "🖤",
    name: "Black Heart",
    meaning:
      "The black heart shows a dark and twisted sense of humor. It can reflect the dark side of the soul. Also used to express grief and sorrow."
  },
  {
    id: 31,
    emoji: "🏋",
    name: "Weightlifter",
    meaning:
      "Are we going to work out a little at the gym tomorrow? Athletic sports serve to build up physical strength and muscles. Either for competitions or to toughen the body. Symbol for the gym, a fitness lifestyle and sports nutrition."
  },
  {
    id: 32,
    emoji: "🙋",
    name: "Happy Person Raising One Hand",
    meaning:
      "Person is cheerful and lifts a hand. Wants to be noticed and to say that he or she has a question or an answer."
  },
  {
    id: 33,
    emoji: "👨‍💻",
    name: "Male technologist",
    meaning:
      "I find new technologies exciting! The man is sitting in front of the computer or laptop and is working, either as a developer or IT expert. Someone is spending too much time online playing video games."
  },
  {
    id: 34,
    emoji: "👩‍💻",
    name: "Female technologist",
    meaning:
      "You spend too much time online! A computer freak, student, blogger or online shopping enthusiast. The woman spends a lot of time in front of the computer because of her hobby, her education or her job."
  },
  {
    id: 35,
    emoji: "🎓",
    name: "Alumnus Hat",
    meaning:
      "The graduation ceremony will be tomorrow! The black, square hat with a tassel is also called graduation hat, bachelor hat or scholar hat. The graduates collectively toss up their hats at the ceremony after having obtained their academic degrees. Symbol for graduation of school or examinations, and for education."
  },
  { 
    id: 36,
    emoji: "👨‍🎓",
    name: "Male student",
    meaning:
      "A brand new university graduate! At some colleges, cap and gown or doctoral cap are worn at graduation ceremonies following the American example. Symbol for (further) education."
  },
  {
    id: 37,
    emoji: "👩‍🎓",
    name: "Female student",
    meaning:
      "The swotting was worth the trouble, now the celebration can start! The school, vocational training, further education or the studies were successfully completed. Represents education and knowledge."
  },
];

export default emojipedia;