const posts = [
    {
      "id": 1,
      "author": "David_ClassOf08",
      "content": "Does anyone remember the meat pies at the canteen? I’ve traveled the world and still haven't found anything that hits the same way.",
      "likes": 84,
      "date_posted": "2026-02-10T10:30:00Z",
      "comments": [
        {"id": 201, "user": "Sarah_M", "text": "They were 80% air but 100% soul.", "date": "2026-02-10T11:15:00Z"},
        {"id": 202, "user": "Big_Mike", "text": "And the ginger beer! My stomach still misses it.", "date": "2026-02-10T12:05:00Z"},
        {"id": 203, "user": "Tasha_W", "text": "Remember when the lady used to give us extra if we were late?", "date": "2026-02-10T14:45:00Z"},
        {"id": 204, "user": "Kevin_The_King", "text": "I heard she retired last year. End of an era.", "date": "2026-02-11T09:20:00Z"},
        {"id": 205, "user": "Jenny_89", "text": "Nothing beats the Friday special.", "date": "2026-02-11T10:00:00Z"}
      ]
    },
    {
      "id": 2,
      "author": "Dr_Samuel_O",
      "content": "Big news! Finally finished my residency. If you told the 16-year-old me in detention that I’d be a surgeon, I wouldn’t believe you.",
      "likes": 215,
      "date_posted": "2026-01-25T16:45:00Z",
      "comments": [
        {"id": 206, "user": "Principal_Fans", "text": "Proud of you, Samuel! We always knew.", "date": "2026-01-25T17:10:00Z"},
        {"id": 207, "user": "Chris_P", "text": "Congrats Doc! Can you look at this weird mole?", "date": "2026-01-25T18:30:00Z"},
        {"id": 208, "user": "Linda_K", "text": "Remember you failed Biology in year 10? Look at you now!", "date": "2026-01-26T08:15:00Z"},
        {"id": 209, "user": "Sam_O", "text": "Thanks guys, the grind was real.", "date": "2026-01-26T09:00:00Z"},
        {"id": 210, "user": "Physics_Pete", "text": "Well deserved, mate.", "date": "2026-01-26T12:45:00Z"}
      ]
    },
    {
      "id": 3,
      "author": "Marcus_Admin",
      "content": "REUNION ALERT: We are looking at the weekend of August 15th for the 10-year anniversary. Drop a comment if you can make it.",
      "likes": 56,
      "date_posted": "2026-02-15T08:00:00Z",
      "comments": [
        {"id": 211, "user": "Lucy_Lu", "text": "I'm in! Can't wait to see everyone.", "date": "2026-02-15T08:30:00Z"},
        {"id": 212, "user": "Tom_B", "text": "Depends on the venue. Not the school hall again please!", "date": "2026-02-15T09:15:00Z"},
        {"id": 213, "user": "Becky_G", "text": "I'll fly in from London for this.", "date": "2026-02-15T11:00:00Z"},
        {"id": 214, "user": "Gary_V", "text": "Is Mrs. Gable coming? I still owe her an apology.", "date": "2026-02-15T14:20:00Z"},
        {"id": 215, "user": "Stacy_S", "text": "Count me and the husband in!", "date": "2026-02-16T07:45:00Z"}
      ]
    },
    {
      "id": 4,
      "author": "Elena_Creative",
      "content": "Rest in peace to Mr. Henderson (Geography). He was the only teacher who truly believed in my art. Such a loss.",
      "likes": 342,
      "date_posted": "2025-11-12T09:00:00Z",
      "comments": [
        {"id": 216, "user": "Old_School_Robby", "text": "Oh no! He was a legend. That mustache was iconic.", "date": "2025-11-12T10:15:00Z"},
        {"id": 217, "user": "Maria_H", "text": "He used to let us play music during lab work. RIP.", "date": "2025-11-12T11:45:00Z"},
        {"id": 218, "user": "Dan_The_Man", "text": "Sad news. He really cared about his students.", "date": "2025-11-12T13:30:00Z"},
        {"id": 219, "user": "School_News", "text": "The funeral is this Thursday for those nearby.", "date": "2025-11-13T08:00:00Z"},
        {"id": 220, "user": "Claire_C", "text": "A true gentleman and a scholar.", "date": "2025-11-13T10:00:00Z"}
      ]
    },
    {
      "id": 5,
      "author": "Rich_Richard",
      "content": "Whatever happened to ‘The Trio’ (Jason, Leo, and Sarah)? You guys used to run the sports field and then just vanished after graduation!",
      "likes": 45,
      "date_posted": "2024-05-20T14:20:00Z",
      "comments": [
        {"id": 221, "user": "Jason_Sports", "text": "Still here! Working in tech now. Leo is in Australia.", "date": "2024-05-21T09:10:00Z"},
        {"id": 222, "user": "Sarah_Zee", "text": "I'm a mom of three now! No more sprinting for me.", "date": "2024-05-21T11:45:00Z"},
        {"id": 223, "user": "Leo_Aussie", "text": "G'day from Sydney! Miss the old pitch.", "date": "2024-05-22T02:00:00Z"},
        {"id": 224, "user": "Mikey_M", "text": "Those inter-house sports days were legendary.", "date": "2024-05-22T10:00:00Z"},
        {"id": 225, "user": "Coach_T", "text": "I still have the 2005 relay trophy in my office!", "date": "2024-05-23T15:30:00Z"}
      ]
    },
    {
      "id": 6,
      "author": "Wedding_Bells_Ava",
      "content": "So happy to announce I married my high school sweetheart, Darren, last weekend! 12 years and counting.",
      "likes": 512,
      "date_posted": "2026-02-14T10:00:00Z",
      "comments": [
        {"id": 226, "user": "BFF_Chloe", "text": "The cutest couple in school history!", "date": "2026-02-14T10:30:00Z"},
        {"id": 227, "user": "Math_Matt", "text": "I remember you guys passing notes in Algebra.", "date": "2026-02-14T12:00:00Z"},
        {"id": 228, "user": "Darren_H", "text": "Lucky to have her. Thanks for the love guys.", "date": "2026-02-14T13:15:00Z"},
        {"id": 229, "user": "Kim_Q", "text": "Stunning photos! You haven't aged a day.", "date": "2026-02-14T16:45:00Z"},
        {"id": 230, "user": "Nostalgic_Ned", "text": "High school sweethearts are so rare these days.", "date": "2026-02-15T09:00:00Z"}
      ]
    },
    {
      "id": 7,
      "author": "John_RealEstate",
      "content": "If anyone is looking for a home in the North district, hit me up! Doing a special 'Alumni Discount' on agency fees this month.",
      "likes": 22,
      "date_posted": "2026-02-01T09:00:00Z",
      "comments": [
        {"id": 231, "user": "Opportunist_Ian", "text": "Always the businessman, John!", "date": "2026-02-01T10:00:00Z"},
        {"id": 232, "user": "Lisa_Home", "text": "Messaging you now, we're looking to upgrade.", "date": "2026-02-01T14:30:00Z"},
        {"id": 233, "user": "Pete_S", "text": "Does the discount apply if I bullied you in year 7? Joking!", "date": "2026-02-02T08:15:00Z"},
        {"id": 234, "user": "John_RealEstate", "text": "Haha, Pete! For you, it's double.", "date": "2026-02-02T09:00:00Z"},
        {"id": 235, "user": "Real_Talk", "text": "Great to see you doing well, man.", "date": "2026-02-02T11:45:00Z"}
      ]
    },
    {
      "id": 8,
      "author": "History_Buff_Ben",
      "content": "Found my old school tie while cleaning the attic. It's surprisingly small. How did we ever fit into those uniforms?",
      "likes": 103,
      "date_posted": "2025-08-30T15:00:00Z",
      "comments": [
        {"id": 236, "user": "Wide_Load_Will", "text": "Mine wouldn't fit around my thigh now.", "date": "2025-08-30T16:30:00Z"},
        {"id": 237, "user": "Fashion_Faye", "text": "The itchy wool sweaters were the worst part.", "date": "2025-08-30T18:00:00Z"},
        {"id": 238, "user": "Uniform_Police", "text": "Remember Mr. Briggs checking our skirt lengths at the gate?", "date": "2025-08-31T09:00:00Z"},
        {"id": 239, "user": "Old_Tie_Fan", "text": "Keep it! It's a collector's item now.", "date": "2025-08-31T12:00:00Z"},
        {"id": 240, "user": "Brad_B", "text": "I think I burned mine on the last day.", "date": "2025-09-01T10:45:00Z"}
      ]
    },
    {
      "id": 9,
      "author": "Tech_Entrepreneur_Tim",
      "content": "Looking for a junior dev for my startup. Would love to hire someone from the old school. Any recent grads here?",
      "likes": 67,
      "date_posted": "2026-02-12T11:00:00Z",
      "comments": [
        {"id": 241, "user": "Young_Cody", "text": "I just graduated! Sent you a DM.", "date": "2026-02-12T12:30:00Z"},
        {"id": 242, "user": "Mentor_Mel", "text": "Great initiative, Tim. Support the roots.", "date": "2026-02-12T14:00:00Z"},
        {"id": 243, "user": "Hiring_Manager", "text": "What stack are you using?", "date": "2026-02-12T15:45:00Z"},
        {"id": 244, "user": "Proud_Alum", "text": "The CS department at school has really improved lately.", "date": "2026-02-13T08:00:00Z"},
        {"id": 245, "user": "Zoe_Dev", "text": "Is this remote or on-site?", "date": "2026-02-13T10:30:00Z"}
      ]
    },
    {
      "id": 10,
      "author": "Chef_Carlos",
      "content": "Opening my first restaurant in the city center next Tuesday. First round of drinks is on me for anyone from the Class of 2012!",
      "likes": 188,
      "date_posted": "2026-02-15T19:00:00Z",
      "comments": [
        {"id": 246, "user": "Hungry_Hana", "text": "I will be there! What's the cuisine?", "date": "2026-02-15T19:30:00Z"},
        {"id": 247, "user": "Party_Pat", "text": "Free drinks? Say no more.", "date": "2026-02-15T21:00:00Z"},
        {"id": 248, "user": "Foodie_Fred", "text": "Been following your journey on IG, so proud.", "date": "2026-02-16T08:15:00Z"},
        {"id": 249, "user": "Chef_Carlos", "text": "Fusion Italian-Asian, Hana!", "date": "2026-02-16T09:00:00Z"},
        {"id": 250, "user": "Gourmet_Grace", "text": "Can't wait to try the menu.", "date": "2026-02-16T10:45:00Z"}
      ]
    },
    {
      "id": 11,
      "author": "Parenting_Pam",
      "content": "Just dropped my eldest off for his first day at our old school. Walking through those gates as a parent is a trip!",
      "likes": 156,
      "date_posted": "2025-09-05T08:30:00Z",
      "comments": [
        {"id": 251, "user": "Mother_Hen", "text": "Wait until they start complaining about the same teachers!", "date": "2025-09-05T09:15:00Z"},
        {"id": 252, "user": "Dad_Bod_Dan", "text": "Is the big oak tree still there?", "date": "2025-09-05T11:00:00Z"},
        {"id": 253, "user": "Pam_P", "text": "Yes! And the same scratchy benches.", "date": "2025-09-05T13:45:00Z"},
        {"id": 254, "user": "Teacher_T", "text": "We are happy to have the next generation!", "date": "2025-09-06T08:00:00Z"},
        {"id": 255, "user": "Nostalgia_Nan", "text": "Time flies so fast.", "date": "2025-09-06T10:00:00Z"}
      ]
    },
    {
      "id": 12,
      "author": "Political_Paul",
      "content": "Does anyone remember the 2010 student council election? I’m still convinced it was rigged lol.",
      "likes": 39,
      "date_posted": "2024-11-12T10:30:00Z",
      "comments": [
        {"id": 256, "user": "Ex_President_Precious", "text": "Don't be a sore loser, Paul!", "date": "2024-11-12T12:00:00Z"},
        {"id": 257, "user": "Voter_Vic", "text": "I only voted for the person who promised more vending machines.", "date": "2024-11-12T14:45:00Z"},
        {"id": 258, "user": "Debate_Deb", "text": "Your speech was better, but her posters were everywhere.", "date": "2024-11-13T09:15:00Z"},
        {"id": 259, "user": "Paul_P", "text": "The vending machine promise was a lie anyway!", "date": "2024-11-13T11:30:00Z"},
        {"id": 260, "user": "Laughter_L", "text": "This is the drama I come here for.", "date": "2024-11-14T08:00:00Z"}
      ]
    },
    {
      "id": 13,
      "author": "Yoga_Yvonne",
      "content": "Hosting a mindfulness session in the park this Saturday. Class of '05, let’s destress from adulting together.",
      "likes": 31,
      "date_posted": "2026-02-16T15:00:00Z",
      "comments": [
        {"id": 261, "user": "Zen_Zack", "text": "I desperately need this. Count me in.", "date": "2026-02-16T15:30:00Z"},
        {"id": 262, "user": "Stressed_Steph", "text": "Can I bring my kids? They are the source of the stress.", "date": "2026-02-16T15:45:00Z"},
        {"id": 263, "user": "Yvonne_Yoga", "text": "Haha, yes! There's a playground nearby.", "date": "2026-02-16T16:00:00Z"},
        {"id": 264, "user": "Fitness_Fiona", "text": "Love this idea. See you there.", "date": "2026-02-16T16:15:00Z"},
        {"id": 265, "user": "Relax_Rick", "text": "Will there be mats provided?", "date": "2026-02-16T16:30:00Z"}
      ]
    },
    {
      "id": 14,
      "author": "Phil_The_Musician",
      "content": "My band is playing at the Blue Note this Friday. We’re doing a cover of the song we played at the Talent Show in 2009!",
      "likes": 78,
      "date_posted": "2026-02-13T18:00:00Z",
      "comments": [
        {"id": 266, "user": "Rockstar_Ray", "text": "Please tell me it's the Green Day cover!", "date": "2026-02-13T18:30:00Z"},
        {"id": 267, "user": "Phil_M", "text": "You bet it is, Ray.", "date": "2026-02-13T19:00:00Z"},
        {"id": 268, "user": "Groupie_Gail", "text": "I still have the video from that show!", "date": "2026-02-13T20:15:00Z"},
        {"id": 269, "user": "Drummer_Don", "text": "I'll try to stop by after work.", "date": "2026-02-14T09:00:00Z"},
        {"id": 270, "user": "Music_Lover", "text": "Best of luck with the gig!", "date": "2026-02-14T11:45:00Z"}
      ]
    },
    {
      "id": 15,
      "author": "Admin_Sheila",
      "content": "Reminder: Annual dues for the Alumni Association are now due. This helps fund the scholarship for underprivileged students.",
      "likes": 12,
      "date_posted": "2026-01-01T09:00:00Z",
      "comments": [
        {"id": 271, "user": "Good_Guy_Greg", "text": "Just paid mine. Great cause.", "date": "2026-01-01T10:30:00Z"},
        {"id": 272, "user": "Skeptical_Scott", "text": "Where exactly does the money go?", "date": "2026-01-01T14:15:00Z"},
        {"id": 273, "user": "Sheila_Admin", "text": "Check the pinned post for the full transparency report, Scott!", "date": "2026-01-02T08:00:00Z"},
        {"id": 274, "user": "Generous_Gemma", "text": "I've added a bit extra this year.", "date": "2026-01-02T10:00:00Z"},
        {"id": 275, "user": "Community_Chris", "text": "Let's help the kids out.", "date": "2026-01-03T09:00:00Z"}
      ]
    }
  ]

export default posts;