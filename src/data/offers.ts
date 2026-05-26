import {type IconName} from '../assets/icons'
import medyczne from '../assets/oferty/medyczne.png'
import funkcjonalne from '../assets/oferty/funkcjonalne.png'
import motoryczne from '../assets/oferty/motoryczne.png'
import odchudzanie from '../assets/oferty/odchudzanie.png'
import plany from '../assets/oferty/plany.png'
import ogolne from '../assets/oferty/ogolne.png'
import dladwojga from '../assets/oferty/dladwojga.png';
import games from '../assets/oferty/grupy.png';
import english from '../assets/oferty/anglia.svg';


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

};

export const offers: Offer[] = [
    {
        slug: 'treningi-medyczne',
        title: 'Treningi medyczne',
        desc: 'wróć do sprawności bez bólu',
        image: medyczne,
        details:
            'Jeśli jesteś po urazie, masz przeciążenia lub dolegliwości bólowe, ten trening pomoże Ci poprawić sprawność, zmniejszyć ból i bezpiecznie wrócić do aktywności.',
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
        desc: 'zdrowe funkcjonowanie na co dzień',
        image: funkcjonalne,
        details:
            'Trening dla osób prowadzących siedzący tryb życia. Poprawia sprawność, mobilność i jakość codziennego ruchu.',
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
        slug: 'odchudzanie',
        title: 'Odchudzanie',
        desc: 'redukcja tkanki tłuszczowej',
        image: odchudzanie,
        details:
            'Kompleksowy proces redukcji masy ciała oparty na treningu, analizie i dopasowaniu strategii.',
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
        slug: 'treningi-motoryczne',
        title: 'Treningi motoryczne',
        desc: 'lepsze wyniki w twojej dyscyplinie',
        image: motoryczne,
        details:
            'Trening dla sportowców rozwijający siłę, szybkość, moc i koordynację.',
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
        slug: 'treningi-ogolnorozwojowe',
        title: 'Treningi ogólnorozwojowe',
        desc: 'siła, sprawność i energia',
        image: ogolne,
        details:
            'Wszechstronny trening poprawiający kondycję, siłę i ogólną sprawność fizyczną.',
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
        desc: 'plan dopasowany do Ciebie',
        image: plany,
        details:
            'Indywidualne plany treningowe dopasowane do Twojego czasu, możliwości i celu.',
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
        title: 'Treningi dla dwojga / grupowe',
        desc: 'motywacja + lepsza cena',
        image: dladwojga,
        type: 'service',
        details: 'Wszystkie rodzaje treningów mogą być również realizowane w parach lub małych grupach. To świetne rozwiązanie, jeśli chcesz ćwiczyć z partnerem, znajomymi lub rodziną! To nie tylko dodatkowa motywacja, ale też przyjemniejsza forma wspólnego spędzania czasu. Taki typu trening wciąż zachowuje indywidualne podejście i wysoką jakość, ale jednocześnie pozwala obniżyć koszt na osobę. Skontaktuj się ze mną, a dobierzemy najlepszą formę treningu dla Ciebie i Twojej grupy'
    },
    {
        slug: 'gry-i-zabawy',
        title: 'Gry i zabawy',
        image: games,
        desc: 'aktywność i integracja',
        type: 'service',
        details: 'Jeśli szukasz aktywnej formy zajęć dla grup zapraszam do kontaktu! Prowadzę szereg gier i zabawruchowych, które zapewnią ruch, integrację i pozytywne doświadczenia w dobrej atmosferze w każdej ekipie!'
    },
    {
        slug: 'personal-training-in-english',
        title: 'Personal training (English)',
        image: english,
        desc: 'training sessions in English',
        type: 'service',
        details: 'I provide personal training sessions in English – perfect for international clients living in Poland or anyone who feels more comfortable communicating in English. Feel free to reach out and book your session – I’ll be happy to help you achieve your fitness goals. For more information, feel free to contact me using any of the available options on my website or by clicking the button below. See you on trainings!'
    }
];