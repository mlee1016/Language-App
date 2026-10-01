// koreanData.js

      
export const koreanData = {
  "userId": "4",
  "id": "8",
  "name": "introduction",
  "done": true,
  "speechLevel": "polite",

  "category":"tourist",
  "phrases": [
    {
      "phrase": "_____ -을 좋아해요",
      "name": "korean_1",
      "pr": "_____ -eul joahaeyo",
      "en": "I like _____",
      "choose":"noun",
      "example": { "ko": "음악을 좋아해요", "pr": "eumageul joahaeyo", "en": "I like music" },
      "des": "Complete with a noun. Object particle distinction: Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel.",
      "dictionary": [
        {
          kr: "을",
          pr: "eul",
          enTargets: [], // Put words in an array
          explanation: `을 (eul): particle.
            <p></p>Complete with a noun. Object particle distinction`
        },
        {
          kr: "좋아해요",
          pr: "joahaeyo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아해요 (joahaeyo): 'to like (a person or oject)' :
          polite  <p></p>stem : johada`
        },

        
      ]
    },
    
    {
      "phrase": "_____ -를 좋아해요",
      "pr": "_____ -reul joahaeyo",
      "name": "korean_1",
      "en": "I like _____",
      "choose":"noun",
      "example": { "ko": "한국어를 좋아해요", "pr": "hangugeoreul joahaeyo", "en": "I like the Korean language" },
      "des": "Complete with a noun. Object particle distinction: Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel."
        ,dictionary: [
        {
          kr: "를",
          pr: "reul",
          enTargets: [], // Put words in an array
          explanation: `을 (eul): particle.
            <p></p>Complete with a noun. Object particle distinction`
        },
        {
          kr: "좋아해요",
          pr: "joahaeyo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아해요 (joahaeyo): 'to like (a person or oject)' :
          polite  <p></p>stem : johada`
        },
      ]
    },
    {
      "phrase": "_____ 기 시작했어요",
      "pr": "_____ gi sijakhaesseoyo",
      "name": "korean_1",
      "en": "Started to _____",
      "choose":"sten",

      "example": { "ko": "공부하기 시작했어요", "pr": "gongbuhagi sijakhaesseoyo", "en": "I started to study" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem.",
      dictionary: [
        {
          kr: "기",
          pr: "gi",
          enTargets: [], // Put words in an array
          explanation: `기 (gi): grammar pattern attach to verb sten.
            <p></p>Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem`
        },
        {
          kr: "시작했어요",
          pr: "sijakhaesseoyo",
          enTargets: ["Started","to"], // Put words in an array
          explanation: `시작했어요 (sijakhaesseoyo): ''.
            <p></p>`
        },
      ]
    },
    {
      "phrase": "_____ 기 좋아요",
      "pr": "_____ gi joayo",
      "name": "korean_1",
      "en": "Good for _____ing / It is easy to _____",
      "choose":"stem",
      "example": { "ko": "먹기 좋아요", "pr": "meokgi joayo", "en": "It is good to eat" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem.",
        dictionary: [
        {
          kr: "기",
          pr: "gi",
          enTargets: [], // Put words in an array
          explanation: `기 (gi): Grammar pattern .
            <p></p>Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem.`
        },
        {
          kr: "좋아요",
          pr: "joayo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아요 (joayo): 'to like' : polite.
            <p></p>
            • It is good / Nice: When describing the condition of something like the weather or an atmosphere.<br>
            • I like it: When expressing that something is pleasing to you. <br>
            • Okay / All right / Sounds good: When agreeing to a plan, or idea. <br>
            • Like: When used as a button or reaction on social media.`        
        },
      ]
    },
    {
      "phrase": "_____ 네요",
      "pr": "_____ neyo",
      "name": "korean_1",
      "en": "It is so _____!",
      "choose":"stem",
      
      "example": { "ko": "맛있네요", "pr": "masittneyo", "en": "It is so delicious!" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining adjective stem.",
        dictionary: [
        {
          kr: "네요",
          pr: "neyo",
          enTargets: ["is","so"], // Put words in an array
          explanation: `네요 (neyo): Grammar pattern.
            <p></p>Drop the dictionary ending '다' and attach this pattern directly to the remaining adjective stem.`
        },
        
      ]
    },

    
    {
      "phrase": "_____ 을 좋아해요",
      "name": "korean_2",
      "pr": "_____ eul joahaeyo",
      "en": "I like _____",
      "choose":"noun",
      "example": { "ko": "음악을 좋아해요", "pr": "eumageul joahaeyo", "en": "I like music" },
      "des": "Complete with a noun. Object particle distinction: Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel."
    ,  dictionary: [
        {
          kr: "을",
          pr: "eul",
          enTargets: [], // Put words in an array
          explanation: `을 (eul): particle.
            <p></p>Complete with a noun. Object particle distinction`
        },
        {
          kr: "좋아해요",
          pr: "joahaeyo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아해요 (joahaeyo): 'to like'.
            <p></p>`
        },
      ]
    },
    
    {
      "phrase": "_____ 를 좋아해요",
      "pr": "_____ reul joahaeyo",
      "name": "korean_2",
      "en": "I like _____",
      "choose":"noun",
            "example": { "ko": "한국어를 좋아해요", "pr": "hangugeoreul joahaeyo", "en": "I like the Korean language" }
,
      "des": "Complete with a noun. Object particle distinction: Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel."
      ,  dictionary: [
        {
          kr: "을",
          pr: "eul",
          enTargets: [], // Put words in an array
          explanation: `을 (eul): particle.
            <p></p>Complete with a noun. Object particle distinction`
        },
        {
          kr: "좋아해요",
          pr: "joahaeyo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아해요 (joahaeyo): 'to like'.
            <p></p>`
        },
      ]
    },
    {
      "phrase": "_____ 기 시작했어요",
      "pr": "_____ gi sijakhaesseoyo",
      "name": "korean_2",
      "en": "Started to _____",
      "choose":"sten",
      "example": { "ko": "한국어를 좋아해요", "pr": "hangugeoreul joahaeyo", "en": "I like the Korean language" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem.",
        dictionary: [
        {
          kr: "을",
          pr: "eul",
          enTargets: [], // Put words in an array
          explanation: `을 (eul): particle.
            <p></p>Complete with a noun. Object particle distinction`
        },
        {
          kr: "좋아해요",
          pr: "joahaeyo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아해요 (joahaeyo): 'to like'.
            <p></p>`
        },
      ]

    },
    {
      "phrase": "_____ 기 좋아요",
      "pr": "_____ gi joayo",
      "name": "korean_2",
      "en": "Good for _____ing / It is easy to _____",
      "choose":"stem",
      "example": { "ko": "먹기 좋아요", "pr": "meokgi joayo", "en": "It is good to eat" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem.",
        dictionary: [
        {
          kr: "을",
          pr: "eul",
          enTargets: [], // Put words in an array
          explanation: `을 (eul): particle.
            <p></p>Complete with a noun. Object particle distinction`
        },
        {
          kr: "좋아해요",
          pr: "joahaeyo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아해요 (joahaeyo): 'to like'.
            <p></p>`
        },
      ]
    },
    {
      "phrase": "_____ 네요",
      "pr": "_____ neyo",
      "name": "korean_2",
      "en": "It is so _____!",
      "choose":"stem",
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining adjective stem.",
      "example": { "ko": "맛있네요", "pr": "masittneyo", "en": "It is so delicious!" },
        dictionary: [
        {
          kr: "을",
          pr: "eul",
          enTargets: [], // Put words in an array
          explanation: `을 (eul): particle.
            <p></p>Complete with a noun. Object particle distinction`
        },
        {
          kr: "좋아해요",
          pr: "joahaeyo",
          enTargets: ["like"], // Put words in an array
          explanation: `좋아해요 (joahaeyo): 'to like'.
            <p></p>`
        },
      ]

    }
  ],

  "dictionary": [
    {
      "type": "noun",
      "dictionaryForm": "한국어",
      "politeForm": "한국어",
      "stem": "한국어",
      "name": "korean_2",
      "s": "한국어",
      "pr": "hangugeo",
      "en": "Korean language",
      "des": "Ends in a vowel. Connects with object particle '를'.",
      "example": { "ko": "한국어를 좋아해요", "pr": "hangugeoreul joahaeyo", "en": "I like the Korean language" }
    },
    {
      "type": "noun",
      "dictionaryForm": "음악",
      "politeForm": "음악",
      "s": "음악",
      "stem": "음악",
      "name": "korean_2",

      "pr": "eumak",
      "en": "music",
      "des": "Ends in a final consonant. Connects with object particle '을'.",
      "example": { "ko": "음악을 좋아해요", "pr": "eumageul joahaeyo", "en": "I like music" }
    },
    {
      "type": "verb",
      "dictionaryForm": "공부하다",
      "politeForm": "공부해요",
      "stem": "공부하",
      "s": "공부하다",

      "name": "korean_2",
      "pr": "gongbuhada",
      "en": "to study",
      "des": "Drop '다' from the dictionary form to get the stem.",
      "example": { "ko": "공부하기 시작했어요", "pr": "gongbuhagi sijakhaesseoyo", "en": "I started to study" }
    },
    {
      "type": "verb",
      "dictionaryForm": "살다",
      "politeForm": "살아요",
      "s": "살다",
      "stem": "살",
      "name": "korean_2",

      "pr": "salda",
      "en": "to live",
      "des": "Drop '다' from the dictionary form to get the stem.",
      "example": { "ko": "살기 좋아요", "pr": "salgi joayo", "en": "It is good for living" }
    },

    {
      "type": "verb",
      "dictionaryForm": "먹다",
      "politeForm": "먹어요",
      "s": "먹다",
      "name": "korean_2",

      "stem": "먹",
      "pr": "meokda",
      "en": "to eat",
      "des": "Drop '다' from the dictionary form to get the stem.",
      "example": { "ko": "먹기 좋아요", "pr": "meokgi joayo", "en": "It is good to eat" }
    },
    {
      "type": "adjective",
      "dictionaryForm": "춥다",
      "politeForm": "추워요",
      "s": "춥다",
      "name": "korean_2",

      "stem": "춥",
      "pr": "chupda",
      "en": "to be cold",
      "des": "Drop '다' from the dictionary form to get the stem.",
      "example": { "ko": "춥네요", "pr": "chupneyo", "en": "It is so cold!" }
    },
    {
      "type": "adjective",
      "dictionaryForm": "맛있다",
      "politeForm": "맛있어요",
      "s": "맛있다",
      "name": "korean_2",

      "stem": "맛있",
      "pr": "masitta",
      "en": "to be delicious",
      "des": "Drop '다' from the dictionary form to get the stem.",
      "example": { "ko": "맛있네요", "pr": "masittneyo", "en": "It is so delicious!" }
    }
  ]
  
};

    // --- DATABASE SCHEMAS & MOCK PROFILES ---
export const mockUserProfile = {
    "userId": "ObjectId('65a123bc45de678f90123456')",
    "username": "User_2026",
    "languageSelected": ["Korean"],
    "completed": ["korean_1", "korean_2"], // Courses finished in user profile
    "inProgress":["korean_4"],
    "scorePoints": 720
  };

export const courseCatalog= [
        { id: "korean_1", name: "Course 1", desc: "Basics" },
        { id: "korean_2", name: "Course 2", desc: "Phrases" },
        { id: "korean_3", name: "Course 3", desc: "Grammar Structure" },
        { id: "korean_4", name: "Course 4", desc: "Speaking" },
        { id: "korean_5", name: "Course 5", desc: "Listening" },
        { id: "korean_6", name: "Course 6", desc: "Conversational Master" }
      ];

export default koreanData;