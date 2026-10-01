// koreanDataCasual.js

export const koreanData1 = {
  "userId": "4",
  "id": "8",
  "category":"tourist",
  "name": "korean_1",
  "done": true,
  "speechLevel": "casual", // Changed to casual (반말)
  "phrases": [

    {
      "phrase": "_____ 을 좋아해",
      "pr": "_____ eul joahae",
      "name": "korean_1",
      "en": "I like _____",
      "des": "Complete with a noun. Dropped the polite '요'. Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel.",
      "choose": "noun",
            "example": { "ko": "음악을 좋아해", "pr": "eumageul joahae", "en": "I like music" }


    },
    
    {
      "phrase": "_____ 를 좋아해",
      "pr": "_____ reul joahae",
      "name": "korean_1",
      "en": "I like _____",
      "des": "Complete with a noun. Dropped the polite '요'. Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel.",
      "choose": "noun",
      "example": { "ko": "한국어를 좋아해", "pr": "hangugeoreul joahae", "en": "I like the Korean language" }

    },
    {
      "phrase": "_____ 기 시작했어",
      "pr": "_____ gi sijakhaesseo",
      "name": "korean_2",
      "choose": "noun",
      "example": { "ko": "공부하기 시작했어", "pr": "gongbuhagi sijakhaesseo", "en": "I started to study" },

      "en": "Started to _____",
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem. Politeness dropped at the end."
    },
    {
      "phrase": "_____ 기 좋아",
      "pr": "_____ gi joa",
      "en": "Good for _____ing / It is easy to _____",
      "name": "korean_2",
      "choose": "noun",
      "example": { "ko": "살기 좋아", "pr": "salgi joa", "en": "It is good for living" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem."
    },
    {
      "name": "korean_2",
      "phrase": "_____ 네",
      "pr": "_____ ne",
      "en": "It is so _____!",
      "choose": "noun",
      "example": { "ko": "맛있네", "pr": "masittne", "en": "It is so delicious!" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining adjective stem. Casual exclamation pattern."
      
    }
  ],
  "dictionary": [
    {
      "type": "noun",
      "dictionaryForm": "한국어",
      "casualForm": "한국어",
      "stem": "한국어",
      "name": "korean_2",
      "s": "한국어",

      "pr": "hangugeo",
      "en": "Korean language",
      "des": "Nouns stay the same, but it connects with the casual pattern '좋아해'.",
      "example": { "ko": "한국어를 좋아해", "pr": "hangugeoreul joahae", "en": "I like the Korean language" }
    },
    {
      "type": "noun",
      "dictionaryForm": "음악",
      "casualForm": "음악",
      "stem": "음악",
      "name": "korean_2",
      "s": "음악",
      "pr": "eumak",
      "en": "music",
      "des": "Nouns stay the same, but it connects with the casual pattern '좋아해'.",
      "example": { "ko": "음악을 좋아해", "pr": "eumageul joahae", "en": "I like music" }
    },
    {
      "type": "verb",
      "name": "korean_2",
      "dictionaryForm": "공부하다",
      "casualForm": "공부해",
      "stem": "공부하",
      "s": "공부해",
      "pr": "gongbuhae",
      "en": "to study (casual: I study / you study)",
      "des": "Casual form is 공부해. Use the stem '공부하' to attach grammar patterns.",
      "example": { "ko": "공부하기 시작했어", "pr": "gongbuhagi sijakhaesseo", "en": "I started to study" }
    },
    {
      "type": "verb",
      "name": "korean_2",
      "dictionaryForm": "살다",
      "casualForm": "살아",
      "s": "살아",
      "stem": "살",
      "pr": "sara",
      "en": "to live (casual: I live / you live)",
      "des": "Casual form is 살아. Use the stem '살' to attach grammar patterns.",
      "example": { "ko": "살기 좋아", "pr": "salgi joa", "en": "It is good for living" }
    },
    {
      "type": "verb",
      "name": "korean_1",
      "dictionaryForm": "먹다",
      "casualForm": "먹어",
      "stem": "먹",
      "s": "먹어",
      "pr": "meogeo",
      "en": "to eat (casual: I eat / you eat)",
      "des": "Casual form is 먹어. Use the stem '먹' to attach grammar patterns.",
      "example": { "ko": "먹기 좋아", "pr": "meokgi joa", "en": "It is good to eat" }
    },
    {
      "type": "adjective",
      "dictionaryForm": "춥다",
      "name": "korean_2",
      "casualForm": "추워",
      "stem": "춥",
      "s": "추워",
      "pr": "chuwo",
      "en": "to be cold (casual: It is cold)",
      "des": "Casual form is 추워. Use the stem '춥' to attach grammar patterns.",
      "example": { "ko": "춥네", "pr": "chupne", "en": "It is so cold!" }
    },
    {
      "type": "adjective",
      "name": "korean_2",
      "dictionaryForm": "맛있다",
      "casualForm": "맛있어",
      "stem": "맛있",
      "s": "맛있어",
      "pr": "masisseo",
      "en": "to be delicious (casual: It is delicious)",
      "des": "Casual form is 맛있어. Use the stem '맛있' to attach grammar patterns.",
      "example": { "ko": "맛있네", "pr": "masittne", "en": "It is so delicious!" }
    }
  ]
};
export const koreanData = {
  "userId": "4",
  "id": "8",
  "name": "korean_2",
  "done": true,
  "speechLevel": "casual", // Changed to casual (반말)
  "phrases": [

    {
      "phrase": "_____ 을 좋아해",
      "pr": "_____ eul joahae",
      "name": "korean_2",
      "en": "I like _____",
      "des": "Complete with a noun. Dropped the polite '요'. Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel.",
      "choose": "noun",
            "example": { "ko": "음악을 좋아해", "pr": "eumageul joahae", "en": "I like music" }


    },
    
    {
      "phrase": "_____ 를 좋아해",
      "pr": "_____ reul joahae",
      "name": "korean_2",
      "en": "I like _____",
      "des": "Complete with a noun. Dropped the polite '요'. Use '을' if the noun ends in a final consonant (받침), use '를' if the noun ends in a vowel.",
      "choose": "noun",
      "example": { "ko": "한국어를 좋아해", "pr": "hangugeoreul joahae", "en": "I like the Korean language" }

    },
    {
      "phrase": "_____ 기 시작했어",
      "pr": "_____ gi sijakhaesseo",
      "name": "korean_2",
      "choose": "noun",
      "example": { "ko": "공부하기 시작했어", "pr": "gongbuhagi sijakhaesseo", "en": "I started to study" },

      "en": "Started to _____",
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem. Politeness dropped at the end."
    },
    {
      "phrase": "_____ 기 좋아",
      "pr": "_____ gi joa",
      "en": "Good for _____ing / It is easy to _____",
      "name": "korean_2",
      "choose": "noun",
      "example": { "ko": "살기 좋아", "pr": "salgi joa", "en": "It is good for living" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining verb stem."
    },
    {
      "name": "korean_2",
      "phrase": "_____ 네",
      "pr": "_____ ne",
      "en": "It is so _____!",
      "choose": "noun",
      "example": { "ko": "맛있네", "pr": "masittne", "en": "It is so delicious!" },
      "des": "Drop the dictionary ending '다' and attach this pattern directly to the remaining adjective stem. Casual exclamation pattern."
      
    }
  ],
  "dictionary": [
    {
      "type": "noun",
      "dictionaryForm": "한국어",
      "casualForm": "한국어",
      "stem": "한국어",
      "name": "korean_2",
      "s": "한국어",

      "pr": "hangugeo",
      "en": "Korean language",
      "des": "Nouns stay the same, but it connects with the casual pattern '좋아해'.",
      "example": { "ko": "한국어를 좋아해", "pr": "hangugeoreul joahae", "en": "I like the Korean language" }
    },
    {
      "type": "noun",
      "dictionaryForm": "음악",
      "casualForm": "음악",
      "stem": "음악",
      "name": "korean_2",
      "s": "음악",
      "pr": "eumak",
      "en": "music",
      "des": "Nouns stay the same, but it connects with the casual pattern '좋아해'.",
      "example": { "ko": "음악을 좋아해", "pr": "eumageul joahae", "en": "I like music" }
    },
    {
      "type": "verb",
      "name": "korean_2",
      "dictionaryForm": "공부하다",
      "casualForm": "공부해",
      "stem": "공부하",
      "s": "공부해",
      "pr": "gongbuhae",
      "en": "to study (casual: I study / you study)",
      "des": "Casual form is 공부해. Use the stem '공부하' to attach grammar patterns.",
      "example": { "ko": "공부하기 시작했어", "pr": "gongbuhagi sijakhaesseo", "en": "I started to study" }
    },
    {
      "type": "verb",
      "name": "korean_2",
      "dictionaryForm": "살다",
      "casualForm": "살아",
      "s": "살아",
      "stem": "살",
      "pr": "sara",
      "en": "to live (casual: I live / you live)",
      "des": "Casual form is 살아. Use the stem '살' to attach grammar patterns.",
      "example": { "ko": "살기 좋아", "pr": "salgi joa", "en": "It is good for living" }
    },
    {
      "type": "verb",
      "name": "korean_1",
      "dictionaryForm": "먹다",
      "casualForm": "먹어",
      "stem": "먹",
      "s": "먹어",
      "pr": "meogeo",
      "en": "to eat (casual: I eat / you eat)",
      "des": "Casual form is 먹어. Use the stem '먹' to attach grammar patterns.",
      "example": { "ko": "먹기 좋아", "pr": "meokgi joa", "en": "It is good to eat" }
    },
    {
      "type": "adjective",
      "dictionaryForm": "춥다",
      "name": "korean_2",
      "casualForm": "추워",
      "stem": "춥",
      "s": "추워",
      "pr": "chuwo",
      "en": "to be cold (casual: It is cold)",
      "des": "Casual form is 추워. Use the stem '춥' to attach grammar patterns.",
      "example": { "ko": "춥네", "pr": "chupne", "en": "It is so cold!" }
    },
    {
      "type": "adjective",
      "name": "korean_2",
      "dictionaryForm": "맛있다",
      "casualForm": "맛있어",
      "stem": "맛있",
      "s": "맛있어",
      "pr": "masisseo",
      "en": "to be delicious (casual: It is delicious)",
      "des": "Casual form is 맛있어. Use the stem '맛있' to attach grammar patterns.",
      "example": { "ko": "맛있네", "pr": "masittne", "en": "It is so delicious!" }
    }
  ]
};
export default koreanData;