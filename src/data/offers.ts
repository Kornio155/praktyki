import type { IconName } from '../assets/icons';

export type OfferPerk = {
    icon: IconName;
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
            { icon: 'lifting', label: 'Dopasowany trening', details: 'Trening pod dolegliwości' },
            { icon: 'therapy', label: 'Program naprawczy', details: 'Ćwiczenia rehabilitacyjne' },
            { icon: 'stretching', label: 'Rozgrzewka', details: 'Indywidualna mobilizacja' },
            { icon: 'support', label: 'Wsparcie 24/7', details: 'Stały kontakt' },
            { icon: 'heart', label: 'Zaangażowanie', details: 'Pełna opieka procesowa' },
            { icon: 'light_bulb', label: 'Wiedza', details: 'Doświadczenie terapeutyczne' }
        ]
    },

    {
        slug: 'treningi-funkcjonalne',
        title: 'Treningi funkcjonalne',
        desc: 'zdrowe funkcjonowanie na co dzień',
        details:
            'dużo siedzisz? ten trening jest dla ciebie. świetnie sprawdzi się jako rekompensata siedzącego trybu życia. Trening funkcjonalny może Ci lepiej "funkcjonować" w codziennych czynnościach',
        perks: [
            { icon: 'lifting', label: 'Dopasowany trening', details: 'Trening pod Twoje potrzeby' },
            { icon: 'therapy', label: 'Program naprawczy', details: 'Ćwiczenia korekcyjne' },
            { icon: 'stretching', label: 'Rozgrzewka', details: 'Mobilizacja funkcjonalna' },
            { icon: 'support', label: 'Wsparcie 24/7', details: 'Stały kontakt' },
            { icon: 'heart', label: 'Zaangażowanie', details: 'Pełne prowadzenie' }
        ]
    },

    {
        slug: 'odchudzanie',
        title: 'Odchudzanie',
        desc: 'tłuszcz się pali!',
        details:
            'Jeśli Twoim celem jest pozbycie się nadmiernych kilogramów, ten trening połączy intensywną pracę z dopasowaniem do Twoich możliwości, dzięki czemu efekty będą widoczne, a proces bezpieczny.',
        perks: [
            { icon: 'map', label: 'Poradnik odchudzania', details: 'Kompletny przewodnik redukcji' },
            { icon: 'lifting', label: 'Dopasowany trening', details: 'Treningi pod redukcję tkanki tłuszczowej' },
            { icon: 'therapy', label: 'Program naprawczy', details: 'Ćwiczenia wspierające ruch i zdrowie' },
            { icon: 'waistline', label: 'Pomiary składu ciała', details: 'Monitorowanie zmian sylwetki' },
            { icon: 'calculator', label: 'Kalorie', details: 'Obliczone zapotrzebowanie energetyczne' },
            { icon: 'nutrition', label: 'Wytyczne żywieniowe', details: 'Indywidualne zalecenia dietetyczne' },
            { icon: 'support', label: 'Wsparcie 24/7', details: 'Stały kontakt i analiza postępów' },
            { icon: 'light_bulb', label: 'Wiedza', details: 'Edukacja i doświadczenie' }
        ]
    },

    {
        slug: 'treningi-motoryczne',
        title: 'Treningi motoryczne',
        desc: 'lepsze wyniki w twojej dyscyplinie',
        details:
            'Jeśli jesteś sportowcem lub osobą regularnie trenującą, ten trening pomoże Ci rozwinąć siłę, szybkość, moc i koordynację czyli efekty Twojej pracy',
        perks: [
            { icon: 'waistline', label: 'Diagnostyka', details: 'Analiza słabych punktów' },
            { icon: 'lifting', label: 'Dopasowany trening', details: 'Trening pod Twoje potrzeby' },
            { icon: 'therapy', label: 'Program naprawczy', details: 'Ćwiczenia korekcyjne' },
            { icon: 'waistline', label: 'Pomiary', details: 'Monitoring progresu' },
            { icon: 'calculator', label: 'Zapotrzebowanie', details: 'Analiza energetyczna' },
            { icon: 'nutrition', label: 'Wytyczne', details: 'Wsparcie żywieniowe' },
            { icon: 'support', label: 'Wsparcie 24/7', details: 'Stała kontrola procesu' },
            { icon: 'heart', label: 'Zaangażowanie', details: 'Rozwój sportowy' },
            { icon: 'light_bulb', label: 'Wiedza', details: 'Ekspercka analiza' }
        ]
    },

    {
        slug: 'treningi-ogolnorozwojowe',
        title: 'Treningi ogólnorozwojowe',
        desc: 'coś więcej niż siła',
        details:
            'popraw kondycję, siłę, sprawność i samopoczucie! ten wszechstronny trening da Ci solidną bazę do lepszej sprawności, większej energii na co dzień i zdrowszego stylu życia.',
        perks: [
            { icon: 'lifting', label: 'Dopasowany trening', details: 'Trening pod Twoje potrzeby' },
            { icon: 'stretching', label: 'Rozgrzewka', details: 'Indywidualna mobilizacja' },
            { icon: 'therapy', label: 'Program naprawczy', details: 'Ćwiczenia korekcyjne' },
            { icon: 'nutrition', label: 'Wytyczne', details: 'Podstawy żywienia' },
            { icon: 'support', label: 'Wsparcie 24/7', details: 'Stały kontakt' },
            { icon: 'heart', label: 'Zaangażowanie', details: 'Pełne prowadzenie procesu' },
            { icon: 'light_bulb', label: 'Wiedza', details: 'Edukacja treningowa' }
        ]
    },

    {
        slug: 'plany-treningowe',
        title: 'Plany treningowe',
        desc: 'plan pod kątem twoich potrzeb',
        details:
            'Najlepszy plan treningowy to taki, który jest dopasowany do Twoich możliwości treningowych! Nie każdy ma możliwość trenowania 4-5 razy w tygodniu po dwie godziny.',
        perks: [
            { icon: 'lifting', label: 'Dopasowany trening', details: 'Trening pod Twoje możliwości' },
            { icon: 'stretching', label: 'Rozgrzewka', details: 'Uwzględniona w planie' },
            { icon: 'map', label: 'Plan treningowy', details: 'Struktura z progresją i RIR' },
            { icon: 'calculator', label: 'Analiza', details: 'Pomiary i kontrola postępów' },
            { icon: 'nutrition', label: 'Wytyczne', details: 'Zalecenia żywieniowe' },
            { icon: 'support', label: 'Wsparcie 24/7', details: 'Stałe korekty planu' },
            { icon: 'light_bulb', label: 'Wiedza', details: 'Coaching i analiza' }
        ]
    },

    {
        slug: 'treningi-dla-dwojga',
        title: 'treningi dla dwojga / w małych grupach',
        desc: 'druga osoba to najlepsza motywacja i lepsza cena;)!',
        details:
            'Wszystkie rodzaje treningów mogą być również realizowane w parach lub małych grupach...',

    },

    {
        slug: 'gry-i-zabawy',
        title: 'Gry i zabawy',
        desc: 'aktywność, integracja, dobra zabawa!',
        details:
            'Jeśli szukasz aktywnej formy zajęć dla grup zapraszam do kontaktu!...',

    },

    {
        slug: 'personal-training-in-english',
        title: 'personal training sessions in English',
        details:
            'I provide personal training sessions in English – perfect for international clients living in Poland...',

    }
];