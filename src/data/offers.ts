export type OfferPerk = {
    icon: string;
    label: string;
    details: string;
};

export type Offer = {
    slug: string;
    title: string;
    desc?: string;
    details: string;
    perks?: OfferPerk[];
};

export const offers: Offer[] = [
    {
        slug: 'treningi-medyczne',
        title: 'Treningi medyczne',
        desc: 'wróć do sprawności bez bólu',
        details:
            'Jeśli jesteś po urazie, masz przeciążenia lub dolegliwości bólowe, ten trening pomoże Ci poprawić sprawność, zmniejszyć ból i bezpiecznie wrócić do aktywności, żebyś znów mógł czuć się pewnie we własnym ciele i funkcjonować bez ograniczeń.',
        perks: [
            { icon: '🚀', label: 'Szybka poprawa', details: 'Pierwsze efekty w krótkim czasie' },
            { icon: '🎯', label: 'Indywidualnie', details: 'Dopasowanie do Twojego stanu zdrowia' },
            { icon: '🔒', label: 'Bezpieczeństwo', details: 'Trening bez ryzyka pogłębienia urazu' },
            { icon: '🧠', label: 'Reedukacja ruchu', details: 'Poprawa wzorców ruchowych' },
            { icon: '📈', label: 'Postęp', details: 'Stałe monitorowanie wyników' }
        ]
    },

    {
        slug: 'treningi-funkcjonalne',
        title: 'Treningi funkcjonalne',
        desc: 'zdrowe funkcjonowanie na co dzień',
        details:
            'dużo siedzisz? ten trening jest dla ciebie. świetnie sprawdzi się jako rekompensata siedzącego trybu życia. Trening funkcjonalny może Ci lepiej "funkcjonować" w codziennych czynnościach',
        perks: [
            { icon: '🧠', label: 'Lepsze ciało', details: 'Poprawa codziennego ruchu' },
            { icon: '⚡', label: 'Energia', details: 'Więcej siły na co dzień' },
            { icon: '🏃', label: 'Mobilność', details: 'Lepsza sprawność ruchowa' },
            { icon: '🪑', label: 'Anty-siedzenie', details: 'Rekompensata siedzącego trybu życia' },
            { icon: '🚀', label: 'Szybka poprawa', details: 'Pierwsze efekty w krótkim czasie' }
        ]
    },

    {
        slug: 'odchudzanie',
        title: 'Odchudzanie',
        desc: 'tłuszcz się pali!',
        details:
            'Jeśli Twoim celem jest pozbycie się nadmiernych kilogramów, ten trening połączy intensywną pracę z dopasowaniem do Twoich możliwości, dzięki czemu efekty będą widoczne, a proces bezpieczny.',
        perks: [
            { icon: '🔥', label: 'Spalanie', details: 'Skuteczna redukcja tkanki tłuszczowej' },
            { icon: '📉', label: 'Kontrola', details: 'Monitorowanie postępów' },
            { icon: '🥗', label: 'Styl życia', details: 'Zmiana nawyków żywieniowych' },
            { icon: '⚖️', label: 'Balans', details: 'Zdrowe tempo redukcji' },
            { icon: '🧠', label: 'Reedukacja ruchu', details: 'Poprawa wzorców ruchowych' },
            { icon: '📈', label: 'Postęp', details: 'Stałe monitorowanie wyników' }
        ]
    },

    {
        slug: 'treningi-motoryczne',
        title: 'Treningi motoryczne',
        desc: 'lepsze wyniki w twojej dyscyplinie',
        details:
            'Jeśli jesteś sportowcem lub osobą regularnie trenującą, ten trening pomoże Ci rozwinąć siłę, szybkość, moc i koordynację czyli efekty Twojej pracy',
        perks: [
            { icon: '🏃', label: 'Szybkość', details: 'Poprawa dynamiki ruchu' },
            { icon: '💪', label: 'Siła', details: 'Większa moc w sporcie' },
            { icon: '⚡', label: 'Eksplozywność', details: 'Lepszy start i reakcja' },
            { icon: '🎯', label: 'Precyzja', details: 'Lepsza kontrola ruchu' },
            { icon: '⚡', label: 'Energia', details: 'Więcej siły na co dzień' },
            { icon: '🏃', label: 'Mobilność', details: 'Lepsza sprawność ruchowa' },
            { icon: '🪑', label: 'Anty-siedzenie', details: 'Rekompensata siedzącego trybu życia' },
            { icon: '🚀', label: 'Szybka poprawa', details: 'Pierwsze efekty w krótkim czasie' }
        ]
    },

    {
        slug: 'treningi-ogolnorozwojowe',
        title: 'Treningi ogólnorozwojowe',
        desc: 'coś więcej niż siła',
        details:
            'popraw kondycję, siłę, sprawność i samopoczucie! ten wszechstronny trening da Ci solidną bazę do lepszej sprawności, większej energii na co dzień i zdrowszego stylu życia.',
        perks: [
            { icon: '🌍', label: 'Całe ciało', details: 'Rozwój ogólnej sprawności' },
            { icon: '🎯', label: 'Balans', details: 'Harmonia siły i mobilności' },
            { icon: '⚡', label: 'Energia', details: 'Więcej siły na co dzień' },
            { icon: '🧘', label: 'Zdrowie', details: 'Lepsze samopoczucie' }
        ]
    },

    {
        slug: 'plany-treningowe',
        title: 'Plany treningowe',
        desc: 'plan pod kątem twoich potrzeb',
        details:
            'Najlepszy plan treningowy to taki, który jest dopasowany do Twoich możliwości treningowych! Nie każdy ma możliwość trenowania 4-5 razy w tygodniu po dwie godziny.',
        perks: [
            { icon: '📋', label: 'Plan', details: 'Dopasowany harmonogram' },
            { icon: '🎯', label: 'Cel', details: 'Skupienie na efektach' },
            { icon: '📊', label: 'Struktura', details: 'Jasny system treningowy' },
            { icon: '⏱️', label: 'Efektywność', details: 'Maksimum efektu w czasie' }
        ]
    },

    {
        slug: 'treningi-dla-dwojga',
        title: 'treningi dla dwojga / w małych grupach',
        desc: 'druga osoba to najlepsza motywacja i lepsza cena;)!',
        details:
            'Wszystkie rodzaje treningów mogą być również realizowane w parach lub małych grupach...',
        perks: [
            { icon: '🤝', label: 'Wspólna motywacja', details: 'Trening z partnerem lub grupą' },
            { icon: '💰', label: 'Niższy koszt', details: 'Cena na osobę jest niższa' },
            { icon: '🔥', label: 'Rywalizacja', details: 'Większa motywacja przez rywalizację' },
            { icon: '🎉', label: 'Atmosfera', details: 'Więcej zabawy w grupie' }
        ]
    },

    {
        slug: 'gry-i-zabawy',
        title: 'Gry i zabawy',
        desc: 'aktywność, integracja, dobra zabawa!',
        details:
            'Jeśli szukasz aktywnej formy zajęć dla grup zapraszam do kontaktu!...',
        perks: [
            { icon: '🎉', label: 'Zabawa', details: 'Aktywność w dobrej atmosferze' },
            { icon: '🤸', label: 'Ruch', details: 'Aktywność fizyczna przez gry' },
            { icon: '👥', label: 'Integracja', details: 'Budowanie relacji w grupie' }
        ]
    },

    {
        slug: 'personal-training-in-english',
        title: 'personal training sessions in English',
        details:
            'I provide personal training sessions in English – perfect for international clients living in Poland...',
        perks: [
            { icon: '🇬🇧', label: 'English', details: 'Trening w języku angielskim' },
            { icon: '🌍', label: 'International', details: 'Dla klientów z zagranicy' },
            { icon: '💬', label: 'Communication', details: 'Jasne instrukcje po angielsku' }
        ]
    }
];