const movies = [
    {
        "id": 1,
        "Название": "Spirited Away",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Приключения",
        "Студия": "Studio Ghibli",
        "Год": 2001,
        "Рейтинг": 8.6
    },
    {
        "id": 2,
        "Название": "My Neighbor Totoro",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Приключения",
        "Студия": "Studio Ghibli",
        "Год": 1988,
        "Рейтинг": 8.2
    },
    {
        "id": 3,
        "Название": "Akira",
        "Режиссёр": "Katsuhiro Otomo",
        "Жанр": "Научная фантастика",
        "Студия": "Tokyo Movie Shinsha",
        "Год": 1988,
        "Рейтинг": 8.0
    },
    {
        "id": 4,
        "Название": "Princess Mononoke",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Фэнтези",
        "Студия": "Studio Ghibli",
        "Год": 1997,
        "Рейтинг": 8.4
    },
    {
        "id": 5,
        "Название": "Ghost in the Shell",
        "Режиссёр": "Mamoru Oshii",
        "Жанр": "Научная фантастика",
        "Студия": "Production I.G",
        "Год": 1995,
        "Рейтинг": 8.0
    },
    {
        "id": 6,
        "Название": "Howl's Moving Castle",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Фэнтези",
        "Студия": "Studio Ghibli",
        "Год": 2004,
        "Рейтинг": 8.2
    },
    {
        "id": 7,
        "Название": "Nausicaä of the Valley of the Wind",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Фэнтези",
        "Студия": "Topcraft",
        "Год": 1984,
        "Рейтинг": 8.1
    },
    {
        "id": 8,
        "Название": "Your Name",
        "Режиссёр": "Makoto Shinkai",
        "Жанр": "Романтика",
        "Студия": "CoMix Wave Films",
        "Год": 2016,
        "Рейтинг": 8.4
    },
    {
        "id": 9,
        "Название": "A Silent Voice",
        "Режиссёр": "Naoko Yamada",
        "Жанр": "Драма",
        "Студия": "Kyoto Animation",
        "Год": 2016,
        "Рейтинг": 8.2
    },
    {
        "id": 10,
        "Название": "The Wind Rises",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Драма",
        "Студия": "Studio Ghibli",
        "Год": 2013,
        "Рейтинг": 7.8
    },
    {
        "id": 11,
        "Название": "Grave of the Fireflies",
        "Режиссёр": "Isao Takahata",
        "Жанр": "Драма",
        "Студия": "Studio Ghibli",
        "Год": 1988,
        "Рейтинг": 8.5
    },
    {
        "id": 12,
        "Название": "Wolf Children",
        "Режиссёр": "Mamoru Hosoda",
        "Жанр": "Драма",
        "Студия": "Madhouse",
        "Год": 2012,
        "Рейтинг": 8.1
    },
    {
        "id": 13,
        "Название": "The Tale of the Princess Kaguya",
        "Режиссёр": "Isao Takahata",
        "Жанр": "Драма",
        "Студия": "Studio Ghibli",
        "Год": 2013,
        "Рейтинг": 8.0
    },
    {
        "id": 14,
        "Название": "The Girl Who Leapt Through Time",
        "Режиссёр": "Mamoru Hosoda",
        "Жанр": "Фэнтези",
        "Студия": "Madhouse",
        "Год": 2006,
        "Рейтинг": 7.7
    },
    {
        "id": 15,
        "Название": "Perfect Blue",
        "Режиссёр": "Satoshi Kon",
        "Жанр": "Психологический триллер",
        "Студия": "Madhouse",
        "Год": 1997,
        "Рейтинг": 8.0
    },
    {
        "id": 16,
        "Название": "Paprika",
        "Режиссёр": "Satoshi Kon",
        "Жанр": "Научная фантастика",
        "Студия": "Madhouse",
        "Год": 2006,
        "Рейтинг": 7.7
    },
    {
        "id": 17,
        "Название": "Redline",
        "Режиссёр": "Takeshi Koike",
        "Жанр": "Экшен",
        "Студия": "Madhouse",
        "Год": 2009,
        "Рейтинг": 7.5
    },
    {
        "id": 18,
        "Название": "Summer Wars",
        "Режиссёр": "Mamoru Hosoda",
        "Жанр": "Приключения",
        "Студия": "Madhouse",
        "Год": 2009,
        "Рейтинг": 7.5
    },
    {
        "id": 19,
        "Название": "Weathering With You",
        "Режиссёр": "Makoto Shinkai",
        "Жанр": "Романтика",
        "Студия": "CoMix Wave Films",
        "Год": 2019,
        "Рейтинг": 7.6
    },
    {
        "id": 20,
        "Название": "The Secret World of Arrietty",
        "Режиссёр": "Hiromasa Yonebayashi",
        "Жанр": "Фэнтези",
        "Студия": "Studio Ghibli",
        "Год": 2010,
        "Рейтинг": 7.6
    },
    {
        "id": 21,
        "Название": "Tokyo Godfathers",
        "Режиссёр": "Satoshi Kon",
        "Жанр": "Драма",
        "Студия": "Madhouse",
        "Год": 2003,
        "Рейтинг": 8.1
    },
    {
        "id": 22,
        "Название": "The Garden of Words",
        "Режиссёр": "Makoto Shinkai",
        "Жанр": "Романтика",
        "Студия": "CoMix Wave Films",
        "Год": 2013,
        "Рейтинг": 7.5
    },
    {
        "id": 23,
        "Название": "Millennium Actress",
        "Режиссёр": "Satoshi Kon",
        "Жанр": "Драма",
        "Студия": "Madhouse",
        "Год": 2001,
        "Рейтинг": 7.9
    },
    {
        "id": 24,
        "Название": "Kiki's Delivery Service",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Приключения",
        "Студия": "Studio Ghibli",
        "Год": 1989,
        "Рейтинг": 7.9
    },
    {
        "id": 25,
        "Название": "Castle in the Sky",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Приключения",
        "Студия": "Studio Ghibli",
        "Год": 1986,
        "Рейтинг": 8.0
    },
    {
        "id": 26,
        "Название": "The Red Turtle",
        "Режиссёр": "Michael Dudok de Wit",
        "Жанр": "Драма",
        "Студия": "Studio Ghibli",
        "Год": 2016,
        "Рейтинг": 7.5
    },
    {
        "id": 27,
        "Название": "Ponyo",
        "Режиссёр": "Hayao Miyazaki",
        "Жанр": "Приключения",
        "Студия": "Studio Ghibli",
        "Год": 2008,
        "Рейтинг": 7.6
    },
    {
        "id": 28,
        "Название": "The Boy and the Beast",
        "Режиссёр": "Mamoru Hosoda",
        "Жанр": "Фэнтези",
        "Студия": "Studio Chizu",
        "Год": 2015,
        "Рейтинг": 7.7
    },
    {
        "id": 29,
        "Название": "Sword of the Stranger",
        "Режиссёр": "Masahiro Ando",
        "Жанр": "Экшен",
        "Студия": "Bones",
        "Год": 2007,
        "Рейтинг": 7.8
    },
    {
        "id": 30,
        "Название": "The Secret Life of Arrietty",
        "Режиссёр": "Hiromasa Yonebayashi",
        "Жанр": "Приключения",
        "Студия": "Studio Ghibli",
        "Год": 2010,
        "Рейтинг": 7.5
    },
    {
        "id": 31,
        "Название": "Vampire Hunter D: Bloodlust",
        "Режиссёр": "Yoshiaki Kawajiri",
        "Жанр": "Ужасы",
        "Студия": "Madhouse",
        "Год": 2000,
        "Рейтинг": 7.7
    },
    {
        "id": 32,
        "Название": "Metropolis",
        "Режиссёр": "Rintaro",
        "Жанр": "Киберпанк",
        "Студия": "Madhouse",
        "Год": 2001,
        "Рейтинг": 7.3
    },
    {
        "id": 33,
        "Название": "Children of the Sea",
        "Режиссёр": "Ayumu Watanabe",
        "Жанр": "Фэнтези",
        "Студия": "Studio 4°C",
        "Год": 2019,
        "Рейтинг": 6.8
    },
    {
        "id": 34,
        "Название": "Jin-Roh: The Wolf Brigade",
        "Режиссёр": "Hiroyuki Okiura",
        "Жанр": "Политический триллер",
        "Студия": "Production I.G",
        "Год": 1999,
        "Рейтинг": 7.5
    },
    {
        "id": 35,
        "Название": "The Night is Short, Walk On Girl",
        "Режиссёр": "Masaaki Yuasa",
        "Жанр": "Сюрреализм",
        "Студия": "Science SARU",
        "Год": 2017,
        "Рейтинг": 7.7
    },
    {
        "id": 36,
        "Название": "Maquia: When the Promised Flower Blooms",
        "Режиссёр": "Mari Okada",
        "Жанр": "Драма",
        "Студия": "P.A. Works",
        "Год": 2018,
        "Рейтинг": 7.6
    },
    {
        "id": 37,
        "Название": "Promare",
        "Режиссёр": "Hiroyuki Imaishi",
        "Жанр": "Экшен",
        "Студия": "Trigger",
        "Год": 2019,
        "Рейтинг": 7.5
    },
    {
        "id": 38,
        "Название": "The Anthem of the Heart",
        "Режиссёр": "Tatsuyuki Nagai",
        "Жанр": "Романтика",
        "Студия": "A-1 Pictures",
        "Год": 2015,
        "Рейтинг": 7.6
    },
    {
        "id": 39,
        "Название": "In This Corner of the World",
        "Режиссёр": "Sunao Katabuchi",
        "Жанр": "Исторический",
        "Студия": "MAPPA",
        "Год": 2016,
        "Рейтинг": 8.0
    },
    {
        "id": 40,
        "Название": "Belle",
        "Режиссёр": "Mamoru Hosoda",
        "Жанр": "Фэнтези",
        "Студия": "Studio Chizu",
        "Год": 2021,
        "Рейтинг": 7.2
    },
    {
        "id": 41,
        "Название": "The Case of Hana & Alice",
        "Режиссёр": "Shunji Iwai",
        "Жанр": "Повседневность",
        "Студия": "Rockwell Eyes",
        "Год": 2015,
        "Рейтинг": 7.1
    },
    {
        "id": 42,
        "Название": "Ride Your Wave",
        "Режиссёр": "Masaaki Yuasa",
        "Жанр": "Романтика",
        "Студия": "Science SARU",
        "Год": 2019,
        "Рейтинг": 7.3
    },
    {
        "id": 43,
        "Название": "Words Bubble Up Like Soda Pop",
        "Режиссёр": "Kyohei Ishiguro",
        "Жанр": "Романтика",
        "Студия": "Signal.MD",
        "Год": 2021,
        "Рейтинг": 6.9
    },
    {
        "id": 44,
        "Название": "The Deer King",
        "Режиссёр": "Masashi Ando",
        "Жанр": "Фэнтези",
        "Студия": "Production I.G",
        "Год": 2021,
        "Рейтинг": 6.6
    },
    {
        "id": 45,
        "Название": "Fortune Favors Lady Nikuko",
        "Режиссёр": "Ayumu Watanabe",
        "Жанр": "Драма",
        "Студия": "Studio 4°C",
        "Год": 2021,
        "Рейтинг": 7.0
    },
    {
        "id": 46,
        "Название": "Goodbye, Don Glees!",
        "Режиссёр": "Atsuko Ishizuka",
        "Жанр": "Приключения",
        "Студия": "Madhouse",
        "Год": 2022,
        "Рейтинг": 7.4
    },
    {
        "id": 47,
        "Название": "Blue Giant",
        "Режиссёр": "Yuzuru Tachikawa",
        "Жанр": "Музыкальный",
        "Студия": "NUT",
        "Год": 2023,
        "Рейтинг": 8.1
    },
    {
        "id": 48,
        "Название": "Lonely Castle in the Mirror",
        "Режиссёр": "Keiichi Hara",
        "Жанр": "Фэнтези",
        "Студия": "A-1 Pictures",
        "Год": 2022,
        "Рейтинг": 7.3
    },
    {
        "id": 49,
        "Название": "The First Slam Dunk",
        "Режиссёр": "Takehiko Inoue",
        "Жанр": "Спорт",
        "Студия": "Toei Animation",
        "Год": 2022,
        "Рейтинг": 8.5
    },
    {
        "id": 50,
        "Название": "Suzume",
        "Режиссёр": "Makoto Shinkai",
        "Жанр": "Фэнтези",
        "Студия": "CoMix Wave Films",
        "Год": 2022,
        "Рейтинг": 7.8
    }
];

export default movies;