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
            'Jeśli jesteś po urazie, masz przeciążenia lub dolegliwości bólowe, ten trening pomoże Ci poprawić sprawność, zmniejszyć ból i bezpiecznie wrócić do aktywności.',
        perks: [
            {
                icon: 'bullseye',
                label: 'Diagnostykę słabych punktów',
                details: 'Określenie co przeszkadza Ci w osiągnięciu lepszych wyników.'
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
                details: 'Pytaj o co chcesz i kiedy chcesz :).'
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
        details:
            'Trening dla osób prowadzących siedzący tryb życia. Poprawia sprawność, mobilność i jakość codziennego ruchu.',
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
                details: 'Pytaj o co chcesz i kiedy chcesz :).'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            }
        ]
    },

    {
        slug: 'odchudzanie',
        title: 'Odchudzanie',
        desc: 'redukcja tkanki tłuszczowej',
        details:
            'Kompleksowy proces redukcji masy ciała oparty na treningu, analizie i dopasowaniu strategii.',
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
                details: 'Pytaj o co chcesz i kiedy chcesz :).'
            },
            {
                icon: 'heart',
                label: 'Zaangażowanie',
                details: 'W 100% !'
            }
        ]
    },

    {
        slug: 'treningi-motoryczne',
        title: 'Treningi motoryczne',
        desc: 'lepsze wyniki w twojej dyscyplinie',
        details:
            'Trening dla sportowców rozwijający siłę, szybkość, moc i koordynację.',
        perks: [
            {
                icon: 'bullseye',
                label: 'Diagnostykę słabych punktów',
                details: 'Określenie co przeszkadza Ci w osiągnięciu lepszych wyników.'
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
                details: 'Pytaj o co chcesz i kiedy chcesz :).'
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
        details:
            'Wszechstronny trening poprawiający kondycję, siłę i ogólną sprawność fizyczną.',
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
                details: 'Pytaj o co chcesz i kiedy chcesz :).'
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
        details:
            'Indywidualne plany treningowe dopasowane do Twojego czasu, możliwości i celu.',
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
                details: 'Pytaj o co chcesz i kiedy chcesz :).'
            },
            {
                icon: 'light_bulb',
                label: 'Dostęp do wiedzy i doświadczenia',
                details: 'Służę pomocą w każdej sytuacji!'
            }
        ]
    },
    { slug: 'treningi-dla-dwojga', title: 'Treningi dla dwojga / grupowe', desc: 'motywacja + lepsza cena', details: 'Treningi w parach lub małych grupach – idealne dla motywacji i wspólnego rozwoju.', perks: [ { icon: 'lifting', label: 'Trening partnerski', details: 'Wspólna jednostka treningowa' }, { icon: 'support', label: 'Motywacja grupowa', details: 'Większe zaangażowanie i regularność' } ] }, { slug: 'gry-i-zabawy', title: 'Gry i zabawy', desc: 'aktywność i integracja', details: 'Zajęcia ruchowe w formie gier i zabaw – idealne dla grup i integracji.', perks: [] }, { slug: 'personal-training-in-english', title: 'Personal training (English)', desc: 'training sessions in English', details: 'I provide personal training sessions in English for international clients living in Poland.', perks: [ { icon: 'lifting', label: 'Personal training', details: '1-on-1 coaching sessions' }, { icon: 'support', label: 'Ongoing support', details: 'Continuous guidance and feedback' } ] }
];