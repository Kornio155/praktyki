import {type IconName} from '../assets/icons'
import medyczne from '../assets/oferty/medyczne.png'
import funkcjonalne from '../assets/oferty/funkcjonalne.png'
import motoryczne from '../assets/oferty/motoryczne.png'
import odchudzanie from '../assets/oferty/odchudzanie.png'
import plany from '../assets/oferty/plany.png'
import ogolne from '../assets/oferty/ogolne.png'
import dladwojga from '../assets/oferty/dladwojga.png';
import games from '../assets/oferty/grupy.png';
import english from '../assets/oferty/english.png';


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
    image?: string;
    type: string;
    imagePosition?: string;


};

export const offers: Offer[] = [
    {
        slug: 'treningi-medyczne',
        title: 'Treningi medyczne',
        desc: 'Wróć do sprawności bez bólu',
        imagePosition: "center 60%",
        image: medyczne,
        details:
            'Jeśli jesteś po urazie, masz przeciążenia lub dolegliwości bólowe, ten trening pomoże Ci poprawić sprawność, zmniejszyć ból i bezpiecznie wrócić do aktywności, żebyś znów mógł czuć się pewnie we własnym ciele i funkcjonować bez ograniczeń.',
        type:'offer',
        perks: [
            {
                icon: 'bullseye',
                label: 'Diagnostykę słabych punktów',
                details: 'Określenie, co przeszkadza Ci w osiągnięciu lepszych wyników.'
            },
            {
                icon: 'lifting',
                label: 'Dopasowany trening',
                details: 'Treningi skrojone w 100% pod Twoje potrzeby.'
            },
            {
                icon: 'therapy',
                label: 'Program naprawczy',
                details: 'Ćwiczenia naprawcze do realizacji samodzielnie.'
            },
            {
                icon: 'stretching',
                label: 'Program rozgrzewki',
                details: 'Dopasowana forma rozgrzewki uwzględniająca Twoje dysfunkcje.'
            },
            {
                icon: 'support',
                label: 'Kontakt i wsparcie 24/7',
                details: 'Pytaj, o co chcesz i kiedy chcesz :)'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            },
            {
                icon: 'light_bulb',
                label: 'Dostęp do wiedzy i doświadczenia',
                details: 'Służę pomocą w każdej sytuacji!'
            }
        ]
    },

    {
        slug: 'treningi-funkcjonalne',
        title: 'Treningi funkcjonalne',
        desc: 'Zdrowe funkcjonowanie na co dzień',
        image: funkcjonalne,
        details:
            'Dużo siedzisz? ten trening jest dla ciebie. świetnie sprawdzi się jako rekompensata siedzącego trybu życia. Trening funkcjonalny omoże Ci lepiej "funkcjonować" w codziennych czynnościach\n',
        type:'offer',
        perks: [
            {
                icon: 'lifting',
                label: 'Dopasowany trening',
                details: 'Treningi skrojone w 100% pod Twoje potrzeby.'
            },
            {
                icon: 'therapy',
                label: 'Program naprawczy',
                details: 'Ćwiczenia naprawcze do realizacji samodzielnie.'
            },
            {
                icon: 'stretching',
                label: 'Program rozgrzewki',
                details: 'Dopasowana forma rozgrzewki uwzględniająca Twoje dysfunkcje.'
            },
            {
                icon: 'support',
                label: 'Kontakt i wsparcie 24/7',
                details: 'Pytaj, o co chcesz i kiedy chcesz :)'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            },
            {
                icon:'light_bulb',
                label: 'Dostęp do wiedzy i doświadczenia',
                details: 'Służę pomocą w każdej sytuacji!'
            }
        ]
    },
    {
        slug: 'treningi-motoryczne',
        title: 'Treningi motoryczne',
        desc: 'Lepsze wyniki w twojej dyscyplinie',
        image: motoryczne,
        details:
            'Jeśli jesteś sportowcem lub osobą regularnie trenującą, ten trening pomoże Ci rozwinąć siłę, szybkość, moc i koordynację czyli polepszy efekty w Twojej dyscyplinie sportowej',
        type:'offer',
        perks: [
            {
                icon: 'bullseye',
                label: 'Diagnostyka słabych punktów',
                details: 'Określenie, co przeszkadza Ci w osiągnięciu lepszych wyników.'
            },
            {
                icon: 'lifting',
                label: 'Dopasowany trening',
                details: 'Treningi skrojone w 100% pod Twoje potrzeby.'
            },
            {
                icon: 'therapy',
                label: 'Program naprawczy',
                details: 'Ćwiczenia naprawcze do realizacji samodzielnie.'
            },
            {
                icon: 'calculator',
                label: 'Zapotrzebowanie kaloryczne',
                details: 'Wyliczone na podstawie pomiarów składu ciała.'
            },
            {
                icon: 'nutrition',
                label: 'Wytyczne żywieniowe',
                details: 'Wytyczne pod kątem Twojego zapotrzebowania.'
            },
            {
                icon: 'support',
                label: 'Kontakt i wsparcie 24/7',
                details: 'Pytaj, o co chcesz i kiedy chcesz :)'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            },
            {
                icon: 'light_bulb',
                label: 'Dostęp do wiedzy i doświadczenia',
                details: 'Służę pomocą w każdej sytuacji!'
            }
        ]
    },

    {
        slug: 'odchudzanie',
        title: 'Odchudzanie',
        desc: 'Tłuszcze się pali!',
        imagePosition: "center 80%",
        image: odchudzanie,
        details:
            'Jeśli Twoim celem jest pozbycie się nadmiernych kilogramów, , ten trening połączy intensywną pracę z dopasowaniem do Twoich możliwości, dzięki czemu efekty będą widoczne, a proces bezpieczny.',
        type:'offer',
        perks: [
            {
                icon: 'map',
                label: 'Poradnik skutecznego odchudzania',
                details: 'Opracowany poradnik, który pomoże Ci zrzucić kilogramy łatwiej.'
            },
            {
                icon: 'lifting',
                label: 'Dopasowany trening',
                details: 'Treningi skrojone w 100% pod Twoje potrzeby.'
            },
            {
                icon: 'waistline',
                label: 'Pomiary składu ciała',
                details: 'Analiza % udziału tkanki tłuszczowej w ciele.'
            },
            {
                icon: 'calculator',
                label: 'Zapotrzebowanie kaloryczne',
                details: 'Wyliczone na podstawie pomiarów składu ciała.'
            },
            {
                icon: 'nutrition',
                label: 'Wytyczne żywieniowe',
                details: 'Wytyczne pod kątem Twojego zapotrzebowania.'
            },
            {
                icon: 'support',
                label: 'Kontakt i wsparcie 24/7',
                details: 'Pytaj, o co chcesz i kiedy chcesz :)'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            },
            {
                icon:'light_bulb',
                label: 'Dostęp do wiedzy i doświadczenia',
                details: 'Służę pomocą w każdej sytuacji!'
            }
        ]
    },


    {
        slug: 'treningi-ogolnorozwojowe',
        title: 'Treningi ogólnorozwojowe',
        desc: 'Coś więcej niż siła',
        image: ogolne,
        details:
            'popraw kondycję, siłę, sprawność i samopoczucie!  ten wszechstronny trening da Ci solidną bazę do lepszej sprawności, większej energii na co dzień i zdrowszego stylu życia. Niekonwencjonalne ćwiczenia z dziedzin streetmovement, animal movement lub gimnastyki pomogą ci się rozwinąć, i dodadzą nutkę świetnej zabawy!',
        type:'offer',
        perks: [
            {
                icon: 'lifting',
                label: 'Dopasowany trening',
                details: 'Treningi skrojone w 100% pod Twoje potrzeby.'
            },
            {
                icon: 'stretching',
                label: 'Program rozgrzewki',
                details: 'Dopasowana forma rozgrzewki uwzględniająca Twoje dysfunkcje.'
            },
            {
                icon: 'therapy',
                label: 'Program naprawczy',
                details: 'Ćwiczenia naprawcze do realizacji samodzielnie.'
            },
            {
                icon: 'support',
                label: 'Kontakt i wsparcie 24/7',
                details: 'Pytaj, o co chcesz i kiedy chcesz :)'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            },
            {
                icon: 'light_bulb',
                label: 'Dostęp do wiedzy i doświadczenia',
                details: 'Służę pomocą w każdej sytuacji!'
            }
        ]
    },

    {
        slug: 'plany-treningowe',
        title: 'Plany treningowe',
        desc: 'Plan pod kątem Twoich potrzeb',
        image: plany,
        imagePosition: "center 80%",
        details:
            'Najlepszy plan treningowy to taki, który jest dopasowany do Twoich możliwości treningowych!  Nie każdy ma możliwośc trenowania 4-5 razy w tygodniu po dwie godziny. Dlatego przygotowuję plany ćwiczeń uwględniające to, że nie mieszkasz na siłowni i masz wiele innych obowiązków w życiu prócz cwiczeń.',
        type:'offer',
        perks: [
            {
                icon: 'lifting',
                label: 'Dopasowany trening',
                details: 'Treningi skrojone w 100% pod Twoje potrzeby.'
            },
            {
                icon: 'stretching',
                label: 'Program rozgrzewki',
                details: 'Dopasowana forma rozgrzewki uwzględniająca Twoje dysfunkcje.'
            },
            {
                icon: 'map',
                label: 'Plan treningowy',
                details: 'Plan uwzględniający progresję, RIR, MSP oraz strukturę treningów.'
            },
            {
                icon: 'support',
                label: 'Kontakt i wsparcie 24/7',
                details: 'Pytaj, o co chcesz i kiedy chcesz :)'
            },
            {
                icon: 'light_bulb',
                label: 'Dostęp do wiedzy i doświadczenia',
                details: 'Służę pomocą w każdej sytuacji!'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            },
            {
                icon: 'nutrition',
                label: 'Wytyczne żywieniowe',
                details: 'Wytyczne pod kątem Twojego zapotrzebowania.'
            },
            {
                icon: 'waistline',
                label: 'Pomiary składu ciała',
                details: 'Analiza % udziału tkanki tłuszczowej w ciele.'
            }
        ]
    },
    {
        slug: 'treningi-dla-dwojga',
        title: 'Treningi dla dwojga / w małych grupach',
        desc: 'Druga osoba to najlepsza motywacja i lepsza cena ;)!',
        image: dladwojga,
        type: 'service',
        details: 'Wszystkie rodzaje treningów mogą być również realizowane w parach lub małych grupach. To świetne rozwiązanie, jeśli chcesz ćwiczyć z partnerem, znajomymi lub rodziną! To nie tylko dodatkowa motywacja, ale też przyjemniejsza forma wspólnego spędzania czasu. Taki typu trening wciąż zachowuje indywidualne podejście i wysoką jakość, ale jednocześnie pozwala obniżyć koszt na osobę. Skontaktuj się ze mną, a dobierzemy najlepszą formę treningu dla Ciebie i Twojej grupy'
    },
    {
        slug: 'gry-i-zabawy',
        title: 'Gry i zabawy',
        image: games,
        imagePosition: "center 40%",
        desc: 'Aktywność, integracja, dobra zabawa!',
        type: 'service',
        details: 'Jeśli szukasz aktywnej formy zajęć dla grup zapraszam do kontaktu! Prowadzę szereg gier i zabawruchowych, które zapewnią ruch, integrację i pozytywne doświadczenia w dobrej atmosferze w każdej ekipie!'
    },
    {
        slug: 'personal-training-in-english',
        title: 'Personal training sessions in English',
        image: english,
        type: 'service',
        desc: 'Personal training sessions in English',
        details: 'I provide personal training sessions in English – perfect for international clients living in Poland or anyone who feels more comfortable communicating in English. Feel free to reach out and book your session – I’ll be happy to help you achieve your fitness goals. For more information, feel free to contact me using any of the available options on my website or by clicking the button below. See you on trainings!'
    }
];