import { Port } from "@/types";

export const navbarRoutes = [
  { name: "navbar.main", link: "/" },
  { name: "navbar.market", link: "/market" },
  { name: "navbar.about", link: "/about" },
  { name: "navbar.products", link: "/products" },
  { name: "navbar.contact", link: "#contact" },
];
export const metadataByLocale: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string;
    authors: { name: string }[];
    openGraph: {
      title: string;
      description: string;
      type: string;
      locale: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
    };
  }
> = {
  en: {
    title: "CkFish - Trusted Moroccan Premium Seafood Exporter",
    description:
      "CkFish is a trusted Moroccan company specializing in the export of premium-quality seafood to international markets. Located in Safi, we source fresh and frozen fish from major Moroccan ports, ensuring quality and sustainability.",
    keywords:
      "CkFish, seafood export, Moroccan seafood, fresh fish Morocco, frozen fish Morocco, Safi port, food safety, sustainability, premium seafood export",
    authors: [{ name: "CkFish" }],
    openGraph: {
      title: "CkFish - Trusted Moroccan Premium Seafood Exporter",
      description:
        "Based in Safi, CkFish exports fresh and frozen seafood worldwide with strict quality control and adherence to global safety standards.",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "CkFish - Trusted Moroccan Premium Seafood Exporter",
      description:
        "CkFish delivers premium seafood from Morocco to global markets with quality, transparency, and sustainability.",
    },
  },
  fr: {
    title:
      "CkFish - Exportateur marocain de produits de la mer haut de gamme",
    description:
      "CkFish est une entreprise marocaine basée à Safi, spécialisée dans l’exportation de poissons frais et surgelés vers les marchés internationaux. Qualité, sécurité alimentaire et durabilité garanties.",
    keywords:
      "CkFish, exportation produits de la mer, poissons frais Maroc, poissons surgelés, Safi, produits de la mer haut de gamme, export Maroc, sécurité alimentaire, durabilité, export poisson Afrique, export poisson Europe",
    authors: [{ name: "CkFish" }],
    openGraph: {
      title:
        "CkFish - Exportateur marocain de produits de la mer haut de gamme",
      description:
        "Entreprise marocaine basée à Safi, exportant poissons frais et surgelés vers l’Europe, Asie, Afrique, Amérique et Moyen-Orient.",
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "CkFish - Exportateur marocain de produits de la mer haut de gamme",
      description:
        "Exportation de produits de la mer frais et surgelés depuis le Maroc, avec contrôle qualité rigoureux et respect des normes internationales.",
    },
  },
  es: {
    title: "CkFish - Exportación marroquí de mariscos de alta calidad",
    description:
      "CkFish es una empresa marroquí de confianza especializada en la exportación de mariscos de alta calidad a mercados internacionales. Ubicada en Safi, ofrecemos pescado fresco y congelado cumpliendo normas internacionales de seguridad alimentaria y sostenibilidad.",
    keywords:
      "CkFish, exportación mariscos, pescado fresco Marruecos, pescado congelado, Safi, seguridad alimentaria, sostenibilidad, exportación marroquí, mariscos de alta calidad",
    authors: [{ name: "CkFish" }],
    openGraph: {
      title: "CkFish - Exportación marroquí de mariscos de alta calidad",
      description:
        "Empresa marroquí ubicada en Safi, que garantiza calidad y sostenibilidad en la exportación de mariscos frescos y congelados a Europa, Asia, África, América y Oriente Medio.",
      type: "website",
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: "CkFish - Exportación marroquí de mariscos de alta calidad",
      description:
        "Calidad y transparencia en la exportación de mariscos desde Marruecos hacia mercados internacionales.",
    },
  },
  de: {
    title:
      "CkFish - Vertrauenswürdiger marokkanischer Exporteur von Premium-Meeresfrüchten",
    description:
      "CkFish ist ein vertrauenswürdiges marokkanisches Unternehmen, das sich auf den Export von Premium-Meeresfrüchten in internationale Märkte spezialisiert hat. Mit Sitz in Safi beziehen wir frischen und gefrorenen Fisch aus den wichtigsten marokkanischen Häfen und stellen Qualität und Nachhaltigkeit sicher.",
    keywords:
      "CkFish, Export von Meeresfrüchten, marokkanische Meeresfrüchte, frischer Fisch Marokko, gefrorener Fisch Marokko, Hafen von Safi, Lebensmittelsicherheit, Nachhaltigkeit, Export von Premium-Meeresfrüchten",
    authors: [{ name: "CkFish" }],
    openGraph: {
      title:
        "CkFish - Vertrauenswürdiger marokkanischer Exporteur von Premium-Meeresfrüchten",
      description:
        "CkFish mit Sitz in Safi exportiert weltweit frische und gefrorene Meeresfrüchte unter strenger Qualitätskontrolle und Einhaltung globaler Sicherheitsstandards.",
      type: "website",
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "CkFish - Vertrauenswürdiger marokkanischer Exporteur von Premium-Meeresfrüchten",
      description:
        "CkFish liefert Premium-Meeresfrüchte aus Marokko an globale Märkte mit Qualität, Transparenz und Nachhaltigkeit.",
    },
  },
  it: {
    title:
      "CkFish - Esportatore marocchino di fiducia di frutti di mare di alta qualità",
    description:
      "CkFish è un'azienda marocchina di fiducia specializzata nell'esportazione di frutti di mare di alta qualità verso i mercati internazionali. Con sede a Safi, ci riforniamo di pesce fresco e congelato dai principali porti marocchini, garantendo qualità e sostenibilità.",
    keywords:
      "CkFish, esportazione frutti di mare, frutti di mare marocchini, pesce fresco Marocco, pesce congelato Marocco, porto di Safi, sicurezza alimentare, sostenibilità, esportazione frutti di mare premium",
    authors: [{ name: "CkFish" }],
    openGraph: {
      title:
        "CkFish - Esportatore marocchino di fiducia di frutti di mare di alta qualità",
      description:
        "Con sede a Safi, CkFish esporta frutti di mare freschi e congelati in tutto il mondo con un rigoroso controllo di qualità e l'adesione agli standard di sicurezza globali.",
      type: "website",
      locale: "it_IT",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "CkFish - Esportatore marocchino di fiducia di frutti di mare di alta qualità",
      description:
        "CkFish fornisce frutti di mare di alta qualità dal Marocco ai mercati globali con qualità, trasparenza e sostenibilità.",
    },
  },
  pt: {
    title:
      "CkFish - Exportador marroquino de confiança de frutos do mar premium",
    description:
      "A CkFish é uma empresa marroquina de confiança especializada na exportação de frutos do mar de alta qualidade para mercados internacionais. Localizada em Safi, fornecemos peixe fresco e congelado dos principais portos marroquinos, garantindo qualidade e sustentabilidade.",
    keywords:
      "CkFish, exportação de frutos do mar, frutos do mar marroquinos, peixe fresco Marrocos, peixe congelado Marrocos, porto de Safi, segurança alimentar, sustentabilidade, exportação de frutos do mar premium",
    authors: [{ name: "CkFish" }],
    openGraph: {
      title:
        "CkFish - Exportador marroquino de confiança de frutos do mar premium",
      description:
        "Com sede em Safi, a CkFish exporta frutos do mar frescos e congelados para todo o mundo com rigoroso controle de qualidade e adesão aos padrões globais de segurança.",
      type: "website",
      locale: "pt_PT",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "CkFish - Exportador marroquino de confiança de frutos do mar premium",
      description:
        "A CkFish fornece frutos do mar premium de Marrocos para mercados globais com qualidade, transparência e sustentabilidade.",
    },
  },
  ru: {
    title:
      "CkFish - Надежный марокканский экспортер морепродуктов премиум-класса",
    description:
      "CkFish - это надежная марокканская компания, специализирующаяся на экспорте высококачественных морепродуктов на международные рынки. Расположенная в Сафи, мы поставляем свежую и замороженную рыбу из основных марокканских портов, обеспечивая качество и устойчивость.",
    keywords:
      "CkFish, экспорт морепродуктов, марокканские морепродукты, свежая рыба Марокко, замороженная рыба Марокко, порт Сафи, безопасность пищевых продуктов, устойчивость, экспорт морепродуктов премиум-класса",
    authors: [{ name: "CkFish" }],
    openGraph: {
      title:
        "CkFish - Надежный марокканский экспортер морепродуктов премиум-класса",
      description:
        "Компания CkFish, базирующаяся в Сафи, экспортирует свежие и замороженные морепродукты по всему миру со строгим контролем качества и соблюдением мировых стандартов безопасности.",
      type: "website",
      locale: "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "CkFish - Надежный марокканский экспортер морепродуктов премиум-класса",
      description:
        "CkFish поставляет морепродукты премиум-класса из Марокко на мировые рынки с качеством, прозрачностью и устойчивостью.",
    },
  },
};
export const fishCategories = [
  {
    id: "demersal",
    image: "/img/fish/SOLE.png",
    name: {
      en: "Demersal Fish",
      fr: "Poisson Démersal",
      es: "Pescado Demersal",
      de: "Demersaler Fisch",
      it: "Pesce demersale",
      pt: "Peixe Demersal",
      ru: "Демеральная рыба",
    },
  },
  {
    id: "pelagic",
    image: "/img/fish/PEZ_LEMON.png",
    name: {
      en: "Pelagic Fish",
      fr: "Poisson Pélagique",
      es: "Pescado Pelágico",
      de: "Pelagischer Fisch",
      it: "Pesce pelagico",
      pt: "Peixe Pelágico",
      ru: "Пелагическая рыба",
    },
  },
  {
    id: "cephalopod",
    image: "/img/fish/CALAMAR.png",
    name: {
      en: "Cephalopods",
      fr: "Céphalopodes",
      es: "Cefalópodos",
      de: "Kopffüßer",
      it: "Cefalopodi",
      pt: "Cefalópodes",
      ru: "Головоногие",
    },
  },
];

export const products =
 {
  cephalopod: [
    {
      id: "CALAMAR",
      image: "/img/fish/CALAMAR.png",
      name: "CALAMAR",
      desc: {
        en: "European squid (Loligo vulgaris) is a fast-swimming cephalopod with tender white meat, widely used in Mediterranean and Atlantic cuisines. Its delicate taste makes it ideal for grilling, frying, or stewi",
        fr: "Calmar européen (Loligo vulgaris) est un céphalopode rapide à la chair blanche et tendre, très prisé dans la cuisine méditerranéenne et atlantique. Son goût subtil le rend idéal pour la grillade, la friture ou le mijoté.",
        es: "Calamar europeo (Loligo vulgaris) es un cefalópodo de rápido nado con carne blanca y tierna, muy usado en la cocina mediterránea y atlántica. Su sabor delicado lo hace perfecto para asar, freír o guisar.",
        de: "Der Europäische Kalmar (Loligo vulgaris) ist ein schnell schwimmender Kopffüßer mit zartem weißem Fleisch, der in der mediterranen und atlantischen Küche weit verbreitet ist. Sein feiner Geschmack macht ihn ideal zum Grillen, Braten oder Schmoren.",
        it: "Il calamaro europeo (Loligo vulgaris) è un cefalopode dal nuoto veloce con carne bianca e tenera, ampiamente utilizzato nelle cucine mediterranee e atlantiche. Il suo gusto delicato lo rende ideale per grigliare, friggere o stufare.",
        pt: "A lula-europeia (Loligo vulgaris) é um cefalópode de natação rápida com carne branca e tenra, amplamente utilizada nas cozinhas mediterrânica e atlântica. O seu sabor delicado torna-o ideal para grelhar, fritar ou estufar.",
        ru: "Европейский кальмар (Loligo vulgaris) — быстро плавающий головоногий моллюск с нежным белым мясом, широко используемый в средиземноморской и атлантической кухнях. Его нежный вкус делает его идеальным для жарки на гриле, во фритюре или тушения.",
      },
      scientifcName: "Loligo vulgaris",
    },
    {
      id: "PUNTILLA",
      image: "/img/fish/PUNTILLA.png",
      name: "PUNTILLA",
      desc: {
        en: "Alloteuthis media, known as the Middle squid, is a cephalopod found in the Mediterranean Sea and adjacent Atlantic waters. It is valued for its tender white meat and is commonly used in Mediterranean dishes.",
        fr: "Alloteuthis media, appelée calmar moyen, est un céphalopode présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche tendre est appréciée dans la cuisine méditerranéenne.",
        es: "Alloteuthis media, conocida como calamar medio, es un cefalópodo del Mediterráneo y el Atlántico cercano. Su carne blanca y tierna es valorada en la gastronomía local.",
        de: "Alloteuthis media, bekannt als der Mittlere Kalmar, ist ein Kopffüßer, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er wird für sein zartes weißes Fleisch geschätzt und häufig in mediterranen Gerichten verwendet.",
        it: "L'Alloteuthis media, noto come calamaretto, è un cefalopode che si trova nel Mar Mediterraneo e nelle acque atlantiche adiacenti. È apprezzato per la sua carne bianca e tenera e viene comunemente utilizzato nei piatti mediterranei.",
        pt: "A Alloteuthis media, conhecida como lula-média, é um cefalópode encontrado no Mar Mediterrâneo e nas águas adjacentes do Atlântico. É valorizada pela sua carne branca tenra e é comum em pratos mediterrânicos.",
        ru: "Alloteuthis media, известная как средний кальмар, — это головоногий моллюск, обитающий в Средиземном море и прилегающих водах Атлантики. Он ценится за нежное белое мясо и часто используется в средиземноморских блюдах.",
      },
      scientifcName: "Alloteuthis media",
    },
    {
      id: "SEPIOLA",
      image: "/img/fish/SEPIOLA.png",
      name: "SEPIOLA",
      desc: {
        en: "Sepia elegans, known as the Elegant cuttlefish, is a small cephalopod found in Mediterranean and nearby Atlantic waters. It is valued for its tender flesh and delicate flavor, commonly used in local cuisines.",
        fr: "Sepia elegans, appelée Seiche élégante, est un petit céphalopode présent en Méditerranée et dans l’Atlantique proche. Sa chair tendre et délicate est appréciée en cuisine locale.",
        es: "Sepia elegans, conocida como Sepia elegante, es un cefalópodo pequeño que habita el Mediterráneo y el Atlántico cercano. Su carne tierna y sabor delicado son valorados en la gastronomía regional.",
        de: "Sepia elegans, bekannt als der Elegante Tintenfisch, ist ein kleiner Kopffüßer, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er wird für sein zartes Fleisch und seinen feinen Geschmack geschätzt und häufig in lokalen Küchen verwendet.",
        it: "La Sepia elegans, nota come seppia elegante, è un piccolo cefalopode che si trova nel Mediterraneo e nelle vicine acque atlantiche. È apprezzata per la sua carne tenera e il sapore delicato, comunemente usata nelle cucine locali.",
        pt: "A Sepia elegans, conhecida como choco-elegante, é um pequeno cefalópode encontrado no Mediterrâneo e nas águas próximas do Atlântico. É valorizada pela sua carne tenra e sabor delicado, comummente utilizada na culinária local.",
        ru: "Sepia elegans, известная как изящный каракатица, — это маленький головоногий моллюск, обитающий в Средиземном море и близлежащих водах Атлантики. Он ценится за нежное мясо и тонкий вкус, часто используемый в местных кухнях.",
      },
      scientifcName: "Sepia elegans",
    },
    {
      id: "CHOCO",
      image: "/img/fish/CHOCO.png",
      name: "CHOCO",
      desc: {
        en: "Common cuttlefish (Sepia officinalis) is a cephalopod renowned for its soft texture, subtle flavor, and intelligent behavior. It inhabits coastal waters and is widely used in Mediterranean cuisine.",
        fr: "Seiche commune (Sepia officinalis) est un céphalopode apprécié pour sa chair tendre et son goût délicat. Présente dans les eaux côtières, elle est très utilisée dans la cuisine méditerranéenne.",
        es: "Sepia común (Sepia officinalis) es un cefalópodo muy valorado por su carne tierna y su sabor suave. Vive en aguas costeras y es popular en la cocina mediterránea.",
        de: "Der Gewöhnliche Tintenfisch (Sepia officinalis) ist ein Kopffüßer, der für seine weiche Textur, seinen feinen Geschmack und sein intelligentes Verhalten bekannt ist. Er lebt in Küstengewässern und wird in der mediterranen Küche häufig verwendet.",
        it: "La seppia comune (Sepia officinalis) è un cefalopode rinomato per la sua consistenza morbida, il sapore delicato e il comportamento intelligente. Abita le acque costiere ed è ampiamente utilizzata nella cucina mediterranea.",
        pt: "A choco-comum (Sepia officinalis) é um cefalópode conhecido pela sua textura macia, sabor subtil e comportamento inteligente. Habita águas costeiras e é amplamente utilizada na culinária mediterrânica.",
        ru: "Обыкновенная каракатица (Sepia officinalis) — это головоногий моллюск, известный своей мягкой текстурой, тонким вкусом и умным поведением. Обитает в прибрежных водах и широко используется в средиземноморской кухне.",
      },
      scientifcName: "Sepia officinalis",
    },
  ],
  pelagic: [
    {
      id: "PEZ_LEMON",
      image: "/img/fish/PEZ_LEMON.png",
      name: "PEZ LEMON",
      desc: {
        en: "Greater amberjack (Seriola dumerili) is a powerful pelagic fish prized for its firm, flavorful flesh. Found in open waters and near reefs, it’s popular in both commercial and sport fishing.",
        fr: "Sériole couronnée (Seriola dumerili) est un poisson pélagique de grande taille, apprécié pour sa chair ferme et savoureuse. On la trouve dans les eaux libres et près des récifs.",
        es: "Serviola (Seriola dumerili) es un pez pelágico grande y rápido, valorado por su carne firme y sabrosa. Habita aguas abiertas y zonas cercanas a arrecifes.",
        de: "Der Große Gabelmakrele (Seriola dumerili) ist ein kräftiger pelagischer Fisch, der für sein festes, schmackhaftes Fleisch geschätzt wird. Er kommt in offenen Gewässern und in der Nähe von Riffen vor und ist sowohl in der kommerziellen als auch in der Sportfischerei beliebt.",
        it: "La ricciola (Seriola dumerili) è un potente pesce pelagico apprezzato per la sua carne soda e saporita. Trovato in acque aperte e vicino a barriere coralline, è popolare sia nella pesca commerciale che sportiva.",
        pt: "O charuteiro (Seriola dumerili) é um poderoso peixe pelágico valorizado pela sua carne firme e saborosa. Encontrado em águas abertas e perto de recifes, é popular tanto na pesca comercial como na desportiva.",
        ru: "Большая амберджек (Seriola dumerili) — это мощная пелагическая рыба, ценящаяся за свое упругое и ароматное мясо. Обитает в открытых водах и возле рифов, популярна как в коммерческом, так и в спортивном рыболовстве.",
      },
      scientifcName: "Seriola dumerili",
    },
    {
      id: "sardines",
      image: "/img/fish/SARDINE.png",
      name: "Sardines",
      desc: {
        en: "Sardines",
        fr: "Sardines",
        es: "Sardinas",
        de: "Sardinen",
        it: "Sardine",
        pt: "Sardinhas",
        ru: "Сардины",
      },
      scientifcName: "",
    },
    {
      id: "ALMENDRITA",
      image: "/img/fish/ALMENDRITA.png",
      name: "ALMENDRITA",
      desc: {
        en: "Boops boops, commonly called Bogue, is a small pelagic fish found in Mediterranean and Atlantic coastal waters. It has a slender silver body and is popular for light frying and grilling.",
        fr: "Boops boops, appelé Bogue, est un petit poisson pélagique présent en Méditerranée et dans l’Atlantique. Il se distingue par son corps argenté et ses yeux en forme d’amande.",
        es: "Boops boops, conocido como Almendrita, es un pequeño pez pelágico del Mediterráneo y Atlántico. Destaca por su cuerpo plateado y ojos almendrados.",
        de: "Boops boops, allgemein Bogue genannt, ist ein kleiner pelagischer Fisch, der in den Küstengewässern des Mittelmeers und des Atlantiks vorkommt. Er hat einen schlanken silbernen Körper und ist beliebt zum leichten Braten und Grillen.",
        it: "La boga (Boops boops) è un piccolo pesce pelagico che si trova nelle acque costiere del Mediterraneo e dell'Atlantico. Ha un corpo snello e argentato ed è popolare per fritture e grigliate leggere.",
        pt: "A boga (Boops boops) é um pequeno peixe pelágico encontrado nas águas costeiras do Mediterrâneo e do Atlântico. Tem um corpo prateado e esguio e é popular para fritar e grelhar ligeiramente.",
        ru: "Boops boops, широко известная как бопс, — это маленькая пелагическая рыба, обитающая в прибрежных водах Средиземного моря и Атлантики. У нее стройное серебристое тело, и она популярна для легкой жарки и приготовления на гриле.",
      },
      scientifcName: "Boops boops",
    },
    {
      id: "F.SAN_PEDRO",
      image: "/img/fish/SAN_PEDRO.png",
      name: "F.SAN PEDRO",
      desc: {
        en: "Zenopsis conchifer, known as the Silvery John dory, is a demersal fish found in Mediterranean and nearby Atlantic waters. It is prized for its firm white flesh and delicate flavor.",
        fr: "Zenopsis conchifer, appelé Saint-Pierre argenté, est un poisson démersal présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche ferme et délicate est très appréciée.",
        es: "Zenopsis conchifer, conocido como San Pedro plateado, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne blanca firme y sabor delicado son valorados en la gastronomía regional.",
        de: "Zenopsis conchifer, bekannt als Silberner Petersfisch, ist ein demersaler Fisch, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er wird für sein festes weißes Fleisch und seinen feinen Geschmack geschätzt.",
        it: "Lo Zenopsis conchifer, noto come Pesce San Pietro argentato, è un pesce demersale che si trova nel Mediterraneo e nelle vicine acque atlantiche. È apprezzato per la sua carne bianca soda e il sapore delicato.",
        pt: "A Zenopsis conchifer, conhecida como peixe-prata, é um peixe demersal encontrado no Mediterrâneo e nas águas próximas do Atlântico. É valorizada pela sua carne branca firme e sabor delicado.",
        ru: "Zenopsis conchifer, известная как серебристый солнечник, — это донная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. Она ценится за упругое белое мясо и нежный вкус.",
      },
      scientifcName: "Zenopsis conchifer",
    },
  ],
  demersal: [
    {
      id: "ACEDIA",
      image: "/img/fish/ACEDIA.png",
      name: "ACEDIA",
      desc: {
        en: "Dicologlossa spp. are demersal fish species that live close to the seabed. They are known for their flattened bodies adapted for life near the ocean floor. These fish are commonly found in coastal waters and are valued for their mild flavor and firm texture.",
        fr: "Les espèces Dicologlossa spp. sont des poissons démersaux vivant près du fond marin. Ils sont reconnaissables à leur corps aplati, adapté à la vie au fond de l’océan. Ces poissons se trouvent généralement en eaux côtières et sont appréciés pour leur saveur douce et leur texture ferme.",
        es: "Las especies Dicologlossa spp. son peces demersales que viven cerca del fondo marino. Se caracterizan por sus cuerpos aplanados adaptados para la vida en el lecho oceánico. Estos peces se encuentran comúnmente en aguas costeras y son valorados por su sabor suave y textura firme.",
        de: "Dicologlossa spp. sind demersale Fischarten, die in der Nähe des Meeresbodens leben. Sie sind bekannt für ihren abgeflachten Körper, der an das Leben am Meeresboden angepasst ist. Diese Fische kommen häufig in Küstengewässern vor und werden wegen ihres milden Geschmacks und ihrer festen Textur geschätzt.",
        it: "Dicologlossa spp. sono specie di pesci demersali che vivono vicino al fondale marino. Sono noti per i loro corpi appiattiti adattati alla vita vicino al fondo dell'oceano. Questi pesci si trovano comunemente nelle acque costiere e sono apprezzati per il loro sapore delicato e la consistenza soda.",
        pt: "Dicologlossa spp. são espécies de peixes demersais que vivem perto do fundo do mar. São conhecidos pelos seus corpos achatados, adaptados à vida perto do leito oceânico. Estes peixes são encontrados em águas costeiras e são valorizados pelo seu sabor suave e textura firme.",
        ru: "Dicologlossa spp. — это донные виды рыб, обитающие вблизи морского дна. Они известны своими уплощенными телами, приспособленными к жизни у дна океана. Эти рыбы обычно встречаются в прибрежных водах и ценятся за свой мягкий вкус и упругую текстуру.",
      },
      scientifcName: "Dicologlossa spp",
    },
    {
      id: "LENGUADO_RUBIO",
      image: "/img/fish/LENGUADO_RUBIO.png",
      name: "LENGUADO RUBIO",
      desc: {
        en: "Solea senegalensis is a demersal flatfish species known as the Senegalese sole. It lives on sandy or muddy seabeds in shallow coastal waters. It is highly valued for its delicate flesh and is commonly used in Mediterranean cuisine.",
        fr: "Solea senegalensis est une espèce de poisson plat démersal, connue sous le nom de sole sénégalaise. Elle vit sur les fonds sablonneux ou vaseux dans les eaux côtières peu profondes. Elle est très appréciée pour sa chair délicate et utilisée dans la cuisine méditerranéenne.",
        es: "Solea senegalensis es una especie de pez plano demersal conocida como la lenguado senegalés. Vive sobre fondos arenosos o fangosos en aguas costeras poco profundas. Es muy apreciada por su carne delicada y se utiliza comúnmente en la cocina mediterránea.",
        de: "Solea senegalensis ist eine demersale Plattfischart, bekannt als Senegalesische Seezunge. Sie lebt auf sandigen oder schlammigen Meeresböden in flachen Küstengewässern. Sie wird wegen ihres zarten Fleisches sehr geschätzt und häufig in der mediterranen Küche verwendet.",
        it: "La Solea senegalensis è una specie di pesce piatto demersale conosciuta come sogliola senegalese. Vive su fondali sabbiosi o fangosi in acque costiere poco profonde. È molto apprezzata per la sua carne delicata e viene comunemente utilizzata nella cucina mediterranea.",
        pt: "A Solea senegalensis é uma espécie de peixe plano demersal conhecida como linguado senegalês. Vive em fundos arenosos ou lamacentos em águas costeiras rasas. É altamente valorizada pela sua carne delicada e é comummente utilizada na culinária mediterrânica.",
        ru: "Solea senegalensis — это донная камбалообразная рыба, известная как сенегальский солея. Она обитает на песчаном или илистом дне в неглубоких прибрежных водах. Она высоко ценится за нежное мясо и часто используется в средиземноморской кухне.",
      },
      scientifcName: "Solea senegalensis",
    },
    {
      id: "RODABALLO",
      image: "/img/fish/RODABALLO.png",
      name: "RODABALLO",
      desc: {
        en: "Psetta maxima (Turbot) is a premium demersal flatfish valued for its delicate white flesh and rich flavor. Found in the Atlantic and Mediterranean, it's a top choice for gourmet seafood dishes.",
        fr: "Psetta maxima (Turbot) est un poisson plat démersal prisé pour sa chair blanche et savoureuse. Originaire de l’Atlantique et de la Méditerranée, il est très utilisé en cuisine gastronomique.",
        es: "Psetta maxima (Rodaballo) es un pez plano demersal valorado por su carne blanca y sabor delicado. Presente en el Atlántico y Mediterráneo, es ideal para la cocina gourmet.",
        de: "Psetta maxima (Steinbutt) ist ein erstklassiger demersaler Plattfisch, der für sein zartes weißes Fleisch und seinen reichen Geschmack geschätzt wird. Im Atlantik und Mittelmeer zu finden, ist er eine Top-Wahl für Gourmet-Gerichte mit Meeresfrüchten.",
        it: "La Psetta maxima (rombo chiodato) è un pesce piatto demersale pregiato per la sua carne bianca delicata e il sapore ricco. Presente nell'Atlantico e nel Mediterraneo, è una scelta di punta per i piatti di pesce gourmet.",
        pt: "O Psetta maxima (rodovalho) é um peixe plano demersal premium valorizado pela sua carne branca delicada e sabor rico. Encontrado no Atlântico e no Mediterrâneo, é uma escolha de topo para pratos gourmet de marisco.",
        ru: "Psetta maxima (палтус) — это премиальная донная камбалообразная рыба, ценящаяся за свое нежное белое мясо и насыщенный вкус. Обитает в Атлантике и Средиземноморье и является одним из лучших выборов для изысканных блюд из морепродуктов.",
      },
      scientifcName: "Psetta maxima",
    },
    {
      id: "PLATOSA",
      image: "/img/fish/PLATOSA.png",
      name: "PLATOSA",
      desc: {
        en: "Scophthalmus spp. are demersal flatfish species found in the Atlantic and Mediterranean waters. Known for their mild flavor and firm white flesh, they are highly valued in high-end seafood cuisine.",
        fr: "Scophthalmus spp. sont des poissons plats démersaux présents dans l’Atlantique et la Méditerranée. Appréciés pour leur chair blanche ferme et leur goût doux, ils sont utilisés en cuisine raffinée.",
        es: "Scophthalmus spp. son peces planos demersales que habitan en el Atlántico y el Mediterráneo. Son valorados por su carne blanca firme y sabor suave, ideales para platos gourmet.",
        de: "Scophthalmus spp. sind demersale Plattfischarten, die in den Gewässern des Atlantiks und des Mittelmeers vorkommen. Sie sind bekannt für ihren milden Geschmack und ihr festes weißes Fleisch und werden in der gehobenen Meeresfrüchteküche sehr geschätzt.",
        it: "Le Scophthalmus spp. sono specie di pesci piatti demersali che si trovano nelle acque dell'Atlantico e del Mediterraneo. Conosciuti per il loro sapore delicato e la carne bianca e soda, sono molto apprezzati nella cucina di pesce di alta gamma.",
        pt: "Scophthalmus spp. são espécies de peixes planos demersais encontradas nas águas do Atlântico e do Mediterrâneo. Conhecidas pelo seu sabor suave e carne branca firme, são altamente valorizadas na alta culinária de marisco.",
        ru: "Scophthalmus spp. — это донные виды камбалообразных, обитающие в водах Атлантики и Средиземноморья. Известные своим мягким вкусом и упругим белым мясом, они высоко ценятся в элитной кухне морепродуктов.",
      },
      scientifcName: "Scophthalmus spp",
    },

    {
      id: "LENGUARDO_NEGRO",
      image: "/img/fish/LENGUARDO_NEGRO.png",
      name: "LENGUARDO NEGRO",
      desc: {
        en: "Microchirus spp. are demersal flatfish commonly found in sandy or muddy bottoms of the Atlantic Ocean and Mediterranean Sea. Known for their delicate texture and mild flavor, they are suitable for a variety of seafood recipes.",
        fr: "Microchirus spp. sont des poissons plats démersaux vivant sur des fonds sableux ou vaseux de l’Atlantique et de la Méditerranée. Leur chair fine et leur goût doux en font un ingrédient apprécié en cuisine marine.",
        es: "Microchirus spp. son peces planos demersales que habitan fondos arenosos o fangosos del Atlántico y del Mediterráneo. Se valoran por su textura delicada y sabor suave, ideales para recetas de mariscos.",
        de: "Microchirus spp. sind demersale Plattfische, die häufig auf sandigen oder schlammigen Böden im Atlantischen Ozean und im Mittelmeer vorkommen. Sie sind bekannt für ihre zarte Textur und ihren milden Geschmack und eignen sich für eine Vielzahl von Fischrezepten.",
        it: "Microchirus spp. sono pesci piatti demersali comunemente trovati su fondali sabbiosi o fangosi dell'Oceano Atlantico e del Mar Mediterraneo. Noti per la loro consistenza delicata e il sapore delicato, sono adatti a una varietà di ricette di pesce.",
        pt: "Microchirus spp. são peixes planos demersais comuns em fundos arenosos ou lamacentos do Oceano Atlântico e do Mar Mediterrâneo. Conhecidos pela sua textura delicada e sabor suave, são adequados para uma variedade de receitas de marisco.",
        ru: "Microchirus spp. — это донные камбалообразные рыбы, обычно обитающие на песчаных или илистых участках дна Атлантического океана и Средиземного моря. Известные своей нежной текстурой и мягким вкусом, они подходят для различных рецептов из морепродуктов.",
      },
      scientifcName: "Microchirus spp",
    },
    {
      id: "BRECA",
      image: "/img/fish/BRECA.png",
      name: "BRECA",
      desc: {
        en: "Pagellus acarne, also known as Common Pandora, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. It is valued for its tender flesh and mild flavor, making it ideal for grilling or baking in Mediterranean cuisine.",
        fr: "Pagellus acarne, appelé également Pageot acarné, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair tendre et son goût délicat en font un choix populaire pour les grillades ou les plats au four.",
        es: "Pagellus acarne, conocido como Besugo acarne, es un pez demersal que habita en el mar Mediterráneo y el Atlántico oriental. Se aprecia por su carne tierna y sabor suave, ideal para asados y recetas mediterráneas.",
        de: "Pagellus acarne, auch bekannt als Gemeiner Pandora, ist ein demersaler Fisch, der im Mittelmeer und im Ostatlantik vorkommt. Er wird wegen seines zarten Fleisches und milden Geschmacks geschätzt und eignet sich ideal zum Grillen oder Backen in der mediterranen Küche.",
        it: "Il Pagellus acarne, noto anche come Mormora comune, è un pesce demersale che si trova nel Mar Mediterraneo e nell'Atlantico orientale. È apprezzato per la sua carne tenera e il sapore delicato, il che lo rende ideale per grigliate o cotture al forno nella cucina mediterranea.",
        pt: "A Pagellus acarne, também conhecida como pampo-comum, é um peixe demersal encontrado no Mar Mediterrâneo e no Atlântico Oriental. É valorizada pela sua carne tenra e sabor suave, o que a torna ideal para grelhar ou assar na culinária mediterrânica.",
        ru: "Pagellus acarne, также известная как обыкновенный пагелл, — это донная рыба, обитающая в Средиземном море и Восточной Атлантике. Она ценится за нежное мясо и мягкий вкус, что делает ее идеальной для жарки на гриле или запекания в средиземноморской кухне.",
      },
      scientifcName: "Pagellus acarne",
    },
    {
      id: "BESUGO",
      image: "/img/fish/BESUGO.png",
      name: "BESUGO",
      desc: {
        en: "Pagellus bogaraveo, known as Blackspot Seabream, is a demersal fish found in the Eastern Atlantic and Mediterranean Sea. Recognized by its red-pink body and black spot near the head, it’s appreciated for its firm, tasty flesh — perfect for grilling and traditional dishes.",
        fr: "Pagellus bogaraveo, appelé Pageot rose, est un poisson démersal présent dans l’Atlantique Est et la Méditerranée. Reconnaissable à sa couleur rosée et sa tache noire près de la tête, il est prisé pour sa chair ferme et savoureuse, idéale pour les grillades.",
        es: "Pagellus bogaraveo, conocido como Besugo, es un pez demersal del Atlántico oriental y el mar Mediterráneo. Se distingue por su cuerpo rosado y una mancha negra cerca de la cabeza. Su carne firme y sabrosa lo convierte en una elección ideal para asar y recetas tradicionales.",
        de: "Pagellus bogaraveo, bekannt als Schwarzer Fleck-Brassen, ist ein demersaler Fisch, der im Ostatlantik und Mittelmeer vorkommt. Erkennbar an seinem rot-rosa Körper und einem schwarzen Fleck in der Nähe des Kopfes, wird er für sein festes, schmackhaftes Fleisch geschätzt — perfekt zum Grillen und für traditionelle Gerichte.",
        it: "Il Pagellus bogaraveo, noto come Pagello, è un pesce demersale che si trova nell'Atlantico orientale e nel Mar Mediterraneo. Riconosciuto per il suo corpo rosso-rosa e una macchia nera vicino alla testa, è apprezzato per la sua carne soda e saporita, perfetta per grigliate e piatti tradizionali.",
        pt: "O Pagellus bogaraveo, conhecido como goraz, é um peixe demersal encontrado no Atlântico Oriental e no Mar Mediterrâneo. Reconhecido pelo seu corpo rosa-avermelhado e uma mancha preta perto da cabeça, é apreciado pela sua carne firme e saborosa, perfeita para grelhados e pratos tradicionais.",
        ru: "Pagellus bogaraveo, известный как чернохвостый пагелл, — это донная рыба, обитающая в Восточной Атлантике и Средиземном море. Узнаваемая по красно-розовому телу и черному пятну возле головы, она ценится за свое упругое и вкусное мясо, идеально подходящее для жарки на гриле и традиционных блюд.",
      },
      scientifcName: "Pagellus bogaraveo",
    },
    {
      id: "DORADA",
      image: "/img/fish/DORADA.png",
      name: "DORADA",
      desc: {
        en: "Sparus aurata, known as Gilthead Seabream, is a demersal fish commonly found in the Mediterranean Sea and Eastern Atlantic. It’s prized for its tender white flesh and mild, slightly sweet flavor, making it a favorite in Mediterranean cuisine and healthy seafood dishes.",
        fr: "Sparus aurata, appelé Dorade royale, est un poisson démersal très répandu en Méditerranée et dans l’Atlantique Est. Il est reconnu pour sa chair blanche tendre et son goût doux légèrement sucré, très apprécié en cuisine méditerranéenne.",
        es: "Sparus aurata, conocido como Dorada, es un pez demersal muy común en el mar Mediterráneo y el Atlántico oriental. Su carne blanca y tierna, con un sabor suave y ligeramente dulce, lo hace muy popular en la cocina mediterránea.",
        de: "Sparus aurata, bekannt als Goldbrasse, ist ein demersaler Fisch, der häufig im Mittelmeer und im Ostatlantik vorkommt. Er wird für sein zartes weißes Fleisch und seinen milden, leicht süßlichen Geschmack geschätzt, was ihn zu einem Favoriten in der mediterranen Küche und bei gesunden Fischgerichten macht.",
        it: "Lo Sparus aurata, noto come Orata, è un pesce demersale comunemente presente nel Mar Mediterraneo e nell'Atlantico orientale. È apprezzato per la sua carne bianca e tenera e il sapore delicato e leggermente dolce, che lo rende uno dei preferiti nella cucina mediterranea e nei piatti di pesce salutari.",
        pt: "A Sparus aurata, conhecida como dourada, é um peixe demersal comum no Mar Mediterrâneo e no Atlântico Oriental. É valorizada pela sua carne branca tenra e sabor suave, levemente adocicado, o que a torna uma das favoritas na culinária mediterrânica e em pratos de marisco saudáveis.",
        ru: "Sparus aurata, известная как золотистый спар, — это донная рыба, широко распространенная в Средиземном море и Восточной Атлантике. Она ценится за нежное белое мясо и мягкий, слегка сладковатый вкус, что делает ее любимым продуктом в средиземноморской кухне и полезных блюдах из морепродуктов.",
      },
      scientifcName: "Sparus aurata",
    },
    {
      id: "SAMA",
      image: "/img/fish/SAMA.png",
      name: "SAMA",
      desc: {
        en: "Dentex gibbosus, also called Large-eye Dentex, is a demersal predator fish found in the Mediterranean Sea and Eastern Atlantic. With its firm flesh and strong flavor, it is ideal for grilling, baking, or seafood stews.",
        fr: "Dentex gibbosus, aussi appelé Denté bossu, est un poisson prédateur démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair ferme et sa saveur marquée en font un excellent choix pour les grillades, les cuissons au four ou les plats mijotés.",
        es: "Dentex gibbosus, conocido como Dentón ojón, es un pez depredador demersal del Mediterráneo y del Atlántico oriental. Su carne firme y sabor intenso lo hacen perfecto para asar, hornear o preparar guisos marinos.",
        de: "Dentex gibbosus, auch bekannt als Großer Zahnbrasse, ist ein demersaler Raubfisch, der im Mittelmeer und im Ostatlantik vorkommt. Mit seinem festen Fleisch und starken Geschmack eignet er sich ideal zum Grillen, Backen oder für Meeresfrüchte-Eintöpfe.",
        it: "Il Dentex gibbosus, chiamato anche Dentice, è un pesce predatore demersale che si trova nel Mar Mediterraneo e nell'Atlantico orientale. Con la sua carne soda e il sapore deciso, è ideale per grigliate, cotture al forno o stufati di pesce.",
        pt: "A Dentex gibbosus, também conhecida como pargo-olho-de-boi, é um peixe predador demersal encontrado no Mar Mediterrâneo e no Atlântico Oriental. Com a sua carne firme e sabor forte, é ideal para grelhar, assar ou em guisados de marisco.",
        ru: "Dentex gibbosus, также известная как зубан-зубатка, — это донная хищная рыба, обитающая в Средиземном море и Восточной Атлантике. Своим упругим мясом и сильным вкусом она идеально подходит для жарки на гриле, запекания или приготовления рагу из морепродуктов.",
      },
      scientifcName: "Dentex gibbosus",
    },
    {
      id: "PARGO",
      image: "/img/fish/PARGO.png",
      name: "PARGO",
      desc: {
        en: "Pagrus pagrus, known as Red Seabream, is a demersal fish native to the Eastern Atlantic and Mediterranean Sea. It’s appreciated for its firm white flesh and rich flavor, making it a popular choice for grilling and seafood dishes.",
        fr: "Pagrus pagrus, appelé Pageot commun, est un poisson démersal originaire de l’Atlantique Est et de la Méditerranée. Sa chair blanche ferme et sa saveur prononcée en font un poisson très apprécié pour les grillades et plats de fruits de mer.",
        es: "Pagrus pagrus, conocido como Pargo rosado, es un pez demersal del Atlántico oriental y del mar Mediterráneo. Su carne blanca firme y su sabor intenso lo hacen ideal para asar y preparar platos marinos.",
        de: "Pagrus pagrus, bekannt als Roter Brassen, ist ein demersaler Fisch, der im Ostatlantik und Mittelmeer heimisch ist. Er wird für sein festes weißes Fleisch und seinen reichen Geschmack geschätzt und ist eine beliebte Wahl zum Grillen und für Fischgerichte.",
        it: "Il Pagrus pagrus, noto come Pagro, è un pesce demersale originario dell'Atlantico orientale e del Mar Mediterraneo. È apprezzato per la sua carne bianca soda e il sapore ricco, che lo rende una scelta popolare per grigliate e piatti di pesce.",
        pt: "O Pagrus pagrus, conhecido como pargo, é um peixe demersal nativo do Atlântico Oriental e do Mar Mediterrâneo. É apreciado pela sua carne branca firme e sabor rico, o que o torna uma escolha popular para grelhados e pratos de marisco.",
        ru: "Pagrus pagrus, известный как красный пагр, — это донная рыба, обитающая в Восточной Атлантике и Средиземном море. Она ценится за упругое белое мясо и насыщенный вкус, что делает ее популярным выбором для жарки на гриле и блюд из морепродуктов.",
      },
      scientifcName: "Pagrus pagrus",
    },
    {
      id: "HURTA",
      image: "/img/fish/HURTA.png",
      name: "HURTA",
      desc: {
        en: "Pagrus auriga, also known as Redband Seabream, is a demersal fish found in the Eastern Atlantic and Mediterranean waters. Recognized by the red band near its gill, it offers firm white flesh and a refined flavor, perfect for grilled or baked dishes.",
        fr: "Pagrus auriga, appelé Pageot à bande, est un poisson démersal présent dans l’Atlantique Est et la Méditerranée. Reconnaissable à la bande rouge près de ses ouïes, il possède une chair blanche ferme et un goût raffiné, idéal pour les grillades ou les cuissons au four",
        es: "Pagrus auriga, conocido como Pargo listado, es un pez demersal que habita en el Atlántico oriental y el mar Mediterráneo. Identificable por su banda roja cerca de las agallas, ofrece carne blanca firme y sabor delicado, ideal para asar u hornear.",
        de: "Pagrus auriga, auch bekannt als Rotband-Brassen, ist ein demersaler Fisch, der im Ostatlantik und in den Gewässern des Mittelmeers vorkommt. Erkennbar an dem roten Band in der Nähe seiner Kiemen, bietet er festes weißes Fleisch und einen raffinierten Geschmack, perfekt für gegrillte oder gebackene Gerichte.",
        it: "Il Pagrus auriga, noto anche come Pagro reale, è un pesce demersale che si trova nell'Atlantico orientale e nelle acque del Mediterraneo. Riconoscibile per la banda rossa vicino alle branchie, offre carne bianca soda e un sapore raffinato, perfetto per piatti alla griglia o al forno.",
        pt: "A Pagrus auriga, também conhecida como pargo-listado, é um peixe demersal encontrado no Atlântico Oriental e nas águas do Mediterrâneo. Reconhecido pela faixa vermelha perto das guelras, oferece carne branca firme e um sabor refinado, perfeito para pratos grelhados ou assados.",
        ru: "Pagrus auriga, также известный как краснополосый пагр, — это донная рыба, обитающая в Восточной Атлантике и водах Средиземного моря. Узнаваемая по красной полосе возле жабр, она обладает упругим белым мясом и изысканным вкусом, идеальным для жарки на гриле или запекания.",
      },
      scientifcName: "Pagrus auriga",
    },
    {
      id: "SARGO",
      image: "/img/fish/SARGO.png",
      name: "SARGO",
      desc: {
        en: "Diplodus sargus, commonly called White Seabream, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. Known for its firm texture and mild flavor, it is popular in Mediterranean seafood dishes.",
        fr: "Diplodus sargus, appelé Sargo commun, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair ferme et son goût doux en font un poisson apprécié dans la cuisine méditerranéenne.",
        es: "Diplodus sargus, conocido como Sargo blanco, es un pez demersal del mar Mediterráneo y del Atlántico oriental. Su carne firme y sabor suave lo hacen popular en la cocina mediterránea.",
        de: "Diplodus sargus, allgemein als Weißbrasse bezeichnet, ist ein demersaler Fisch, der im Mittelmeer und im Ostatlantik vorkommt. Bekannt für seine feste Textur und seinen milden Geschmack, ist er in mediterranen Fischgerichten beliebt.",
        it: "Il Diplodus sargus, comunemente chiamato Sarago maggiore, è un pesce demersale che si trova nel Mar Mediterraneo e nell'Atlantico orientale. Conosciuto per la sua consistenza soda e il sapore delicato, è popolare nei piatti di pesce della cucina mediterranea.",
        pt: "A Diplodus sargus, vulgarmente chamada de sargo, é um peixe demersal encontrado no Mar Mediterrâneo e no Atlântico Oriental. Conhecido pela sua textura firme e sabor suave, é popular em pratos de marisco mediterrânicos.",
        ru: "Diplodus sargus, широко известный как белый сарг, — это донная рыба, обитающая в Средиземном море и Восточной Атлантике. Известная своей упругой текстурой и мягким вкусом, она популярна в средиземноморских блюдах из морепродуктов.",
      },
      scientifcName: "Diplodus sargus",
    },
    {
      id: "RAPE",
      image: "/img/fish/RAPE.png",
      name: "RAPE",
      desc: {
        en: "Lophius budegassa, known as the Blackbellied Angler, is a demersal predator fish found in the Mediterranean Sea and Eastern Atlantic. It is prized for its firm, white flesh and unique appearance, often used in gourmet seafood dishes.",
        fr: "Lophius budegassa, appelé Baudroie noire, est un poisson prédateur démersal présent en Méditerranée et dans l’Atlantique Est. Sa chair blanche ferme et son aspect particulier en font un choix apprécié en cuisine gastronomique.",
        es: "Lophius budegassa, conocido como Rape negra, es un pez depredador demersal del Mediterráneo y Atlántico oriental. Se valora por su carne blanca firme y su apariencia singular, muy utilizado en la cocina gourmet.",
        de: "Lophius budegassa, bekannt als der Seeteufel, ist ein demersaler Raubfisch, der im Mittelmeer und im Ostatlantik vorkommt. Er wird für sein festes, weißes Fleisch und sein einzigartiges Aussehen geschätzt und oft in Gourmet-Fischgerichten verwendet.",
        it: "Il Lophius budegassa, noto come Rana pescatrice, è un pesce predatore demersale che si trova nel Mar Mediterraneo e nell'Atlantico orientale. È apprezzato per la sua carne bianca e soda e per il suo aspetto unico, spesso utilizzato in piatti di pesce gourmet.",
        pt: "A Lophius budegassa, conhecida como tamboril-preto, é um peixe predador demersal encontrado no Mar Mediterrâneo e no Atlântico Oriental. É valorizada pela sua carne branca firme e aparência única, sendo frequentemente utilizada em pratos gourmet de marisco.",
        ru: "Lophius budegassa, известная как черная морская рыба, — это донная хищная рыба, обитающая в Средиземном море и Восточной Атлантике. Она ценится за упругое белое мясо и уникальный внешний вид, часто используется в изысканных блюдах из морепродуктов.",
      },
      scientifcName: "Lophius budegassa",
    },
    {
      id: "GALLO",
      image: "/img/fish/GALLO.png",
      name: "GALLO",
      desc: {
        en: "Zeus faber, commonly called John Dory, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. Known for its distinctive flat body and mild, firm flesh, it is popular in fine dining and seafood cuisine.",
        fr: "Zeus faber, appelé Saint-Pierre, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Reconnu pour son corps plat distinctif et sa chair ferme et délicate, il est prisé en gastronomie.",
        es: "Zeus faber, conocido como San Pedro, es un pez demersal del mar Mediterráneo y el Atlántico oriental. Se caracteriza por su cuerpo plano distintivo y su carne firme y suave, muy valorado en la alta cocina.",
        de: "Zeus faber, allgemein als Petersfisch bezeichnet, ist ein demersaler Fisch, der im Mittelmeer und im Ostatlantik vorkommt. Er ist bekannt für seinen markanten flachen Körper und sein mildes, festes Fleisch und ist in der gehobenen Gastronomie und Meeresfrüchteküche beliebt.",
        it: "Il Zeus faber, comunemente chiamato Pesce San Pietro, è un pesce demersale che si trova nel Mar Mediterraneo e nell'Atlantico orientale. Conosciuto per il suo corpo piatto distintivo e la carne delicata e soda, è popolare nella ristorazione di alta qualità e nella cucina di pesce.",
        pt: "O Zeus faber, vulgarmente chamado de peixe-galo, é um peixe demersal encontrado no Mar Mediterrâneo e no Atlântico Oriental. Conhecido pelo seu corpo plano distintivo e carne suave e firme, é popular em alta gastronomia e culinária de marisco.",
        ru: "Zeus faber, широко известный как рыба-солнечник, — это донная рыба, обитающая в Средиземном море и Восточной Атлантике. Известная своим характерным плоским телом и мягким, упругим мясом, она популярна в изысканной кухне и среди гурманов, любящих морепродукты.",
      },
      scientifcName: "Zeus faber",
    },
    {
      id: "RASCACIO",
      image: "/img/fish/RASCACIO.png",
      name: "RASCACIO",
      desc: {
        en: "Scorpaena scrofa, known as the Large Red Scorpionfish, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. Recognized for its reddish color and venomous spines, it has firm flesh prized in Mediterranean cuisine.",
        fr: "Scorpaena scrofa, appelée Rascasse rouge, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Reconnue pour sa couleur rouge et ses épines venimeuses, sa chair ferme est appréciée en cuisine méditerranéenne.",
        es: "Scorpaena scrofa, conocido como Rascacio rojo, es un pez demersal del Mediterráneo y Atlántico oriental. Destacado por su color rojizo y espinas venenosas, su carne firme es valorada en la cocina mediterránea.",
        de: "Scorpaena scrofa, bekannt als Großer Roter Drachenkopf, ist ein demersaler Fisch, der im Mittelmeer und im Ostatlantik vorkommt. Er ist für seine rötliche Farbe und giftigen Stacheln bekannt und hat festes Fleisch, das in der mediterranen Küche geschätzt wird.",
        it: "Lo Scorpaena scrofa, noto come scorfano rosso maggiore, è un pesce demersale che si trova nel Mar Mediterraneo e nell'Atlantico orientale. Riconosciuto per il suo colore rossastro e le spine velenose, ha una carne soda e molto apprezzata nella cucina mediterranea.",
        pt: "A Scorpaena scrofa, conhecida como rascasso-vermelho, é um peixe demersal encontrado no Mar Mediterrâneo e no Atlântico Oriental. Reconhecida pela sua cor avermelhada e espinhos venenosos, a sua carne firme é muito apreciada na culinária mediterrânica.",
        ru: "Scorpaena scrofa, известная как большой красный скорпион, — это донная рыба, обитающая в Средиземном море и Восточной Атлантике. Узнаваемая по красноватому цвету и ядовитым шипам, она имеет упругое мясо, которое ценится в средиземноморской кухне.",
      },
      scientifcName: "Scorpaena scrofa",
    },
    {
      id: "MERO_BLANCO",
      image: "/img/fish/MERO_BLANCO.png",
      name: "MERO BLANCO",
      desc: {
        en: "Epinephelus aeneus, known as the Honeycomb Grouper, is a demersal fish found in the Mediterranean Sea and Eastern Atlantic. It features firm flesh with a mild flavor and is highly prized in seafood cuisine.",
        fr: "Epinephelus aeneus, appelé Mérou bronze, est un poisson démersal présent en Méditerranée et dans l’Atlantique Est. Il possède une chair ferme au goût doux, très apprécié en gastronomie marine.",
        es: "Epinephelus aeneus, conocido como Mero bronce, es un pez demersal del Mediterráneo y Atlántico oriental. Tiene carne firme y sabor suave, muy valorado en la cocina de mariscos.",
        de: "Epinephelus aeneus, bekannt als Waben-Zackenbarsch, ist ein demersaler Fisch, der im Mittelmeer und im Ostatlantik vorkommt. Er zeichnet sich durch festes Fleisch mit mildem Geschmack aus und wird in der Fischküche hoch geschätzt.",
        it: "L'Epinephelus aeneus, noto come cernia, è un pesce demersale che si trova nel Mar Mediterraneo e nell'Atlantico orientale. Presenta una carne soda dal sapore delicato ed è molto apprezzato nella cucina di pesce.",
        pt: "A Epinephelus aeneus, conhecida como mero-bronze, é um peixe demersal encontrado no Mar Mediterrâneo e no Atlântico Oriental. Tem carne firme e de sabor suave, sendo muito apreciada na culinária de marisco.",
        ru: "Epinephelus aeneus, известный как медовый групер, — это донная рыба, обитающая в Средиземном море и Восточной Атлантике. У нее упругое мясо с мягким вкусом, и она высоко ценится в кухне морепродуктов.",
      },
      scientifcName: "Epinephelus aeneus",
    },
    {
      id: "MERO_AMARILLO",
      image: "/img/fish/MERO_AMARILLO.png",
      name: "MERO AMARILLO",
      desc: {
        en: "Epinephelus marginatus, commonly known as the Dusky Grouper, is a large demersal fish inhabiting rocky coastal areas in the Mediterranean and Atlantic Ocean. It is highly valued for its firm texture, delicate flavor, and significance in marine biodiversity.",
        fr: "Epinephelus marginatus, appelé Mérou brun, est un gros poisson démersal vivant dans les zones rocheuses côtières de la Méditerranée et de l’Atlantique. Il est très recherché pour sa chair ferme, sa saveur délicate et son rôle écologique.",
        es: "Epinephelus marginatus, conocido como Mero moreno, es un pez demersal grande que habita en zonas rocosas del Mediterráneo y del Atlántico. Su carne firme y su sabor delicado lo hacen muy apreciado, además de su importancia ecológica.",
        de: "Epinephelus marginatus, gemeinhin als Brauner Zackenbarsch bekannt, ist ein großer demersaler Fisch, der in felsigen Küstengebieten im Mittelmeer und im Atlantischen Ozean lebt. Er wird wegen seiner festen Textur, seines feinen Geschmacks und seiner Bedeutung für die marine Artenvielfalt hoch geschätzt.",
        it: "L'Epinephelus marginatus, comunemente noto come Cernia bruna, è un grande pesce demersale che abita le aree costiere rocciose del Mediterraneo e dell'Oceano Atlantico. È molto apprezzato per la sua consistenza soda, il sapore delicato e l'importanza nella biodiversità marina.",
        pt: "A Epinephelus marginatus, conhecida como mero-castanho, é um grande peixe demersal que habita áreas costeiras rochosas no Mediterrâneo e no Oceano Atlântico. É altamente valorizada pela sua textura firme, sabor delicado e importância na biodiversidade marinha.",
        ru: "Epinephelus marginatus, широко известная как темный групер, — это крупная донная рыба, обитающая в скалистых прибрежных районах Средиземного моря и Атлантического океана. Она высоко ценится за упругую текстуру, нежный вкус и значение в морском биоразнообразии.",
      },
      scientifcName: "Epinephelus marginatus",
    },
    {
      id: "BERYX",
      image: "/img/fish/BERYX.png",
      name: "BERYX",
      desc: {
        en: "Beryx decadactylus, commonly known as the Alfonsino, is a deep-sea demersal species characterized by its bright red color and excellent flesh quality. Found in deep Atlantic and Mediterranean waters, it is prized for its sweet, firm meat and is often used in gourmet cuisine.",
        fr: "Beryx decadactylus, ou Beryx long, est un poisson démersal des grandes profondeurs, reconnu pour sa couleur rouge vif et sa chair de qualité supérieure. Présent dans les eaux profondes de l’Atlantique et de la Méditerranée, il est très apprécié en gastronomie.",
        es: "Beryx decadactylus, conocido como Bericio rojo, es un pez demersal de aguas profundas, famoso por su color rojo brillante y su carne sabrosa. Habita en aguas profundas del Atlántico y el Mediterráneo, siendo muy valorado en la alta cocina.",
        de: "Beryx decadactylus, gemeinhin als Alfonsino bekannt, ist eine demersale Tiefseeart, die sich durch ihre leuchtend rote Farbe und ausgezeichnete Fleischqualität auszeichnet. Er kommt in den tiefen Gewässern des Atlantiks und des Mittelmeers vor und wird wegen seines süßen, festen Fleisches geschätzt und oft in der Gourmet-Küche verwendet.",
        it: "Il Beryx decadactylus, comunemente noto come occhione, è una specie demersale di acque profonde caratterizzata dal suo colore rosso vivo e dall'eccellente qualità della carne. Trovato nelle acque profonde dell'Atlantico e del Mediterraneo, è apprezzato per la sua carne dolce e soda e viene spesso utilizzato nella cucina gourmet.",
        pt: "A Beryx decadactylus, vulgarmente conhecida como imperador, é uma espécie demersal de águas profundas, caracterizada pela sua cor vermelha brilhante e excelente qualidade da carne. Encontrada em águas profundas do Atlântico e do Mediterrâneo, é valorizada pela sua carne doce e firme e é frequentemente utilizada na culinária gourmet.",
        ru: "Beryx decadactylus, широко известная как большеглазый берикс, — это глубоководная донная рыба, отличающаяся ярко-красным цветом и отличным качеством мяса. Обитает в глубоких водах Атлантики и Средиземноморья, ценится за сладкое, упругое мясо и часто используется в изысканной кухне.",
      },
      scientifcName: "Beryx decadactylus",
    },
    {
      id: "POLLO",
      image: "/img/fish/POLLO.png",
      name: "POLLO",
      desc: {
        en: "Helicolenus dactylopterus, commonly known as the Blackbelly rosefish, is a deep-water demersal fish found in the Atlantic Ocean and the Mediterranean Sea. It is recognized for its firm texture and is often used in stews and oven-baked recipes.",
        fr: "Helicolenus dactylopterus, aussi appelé Rascasse noire, est un poisson démersal des eaux profondes de l’Atlantique et de la Méditerranée. Il est apprécié pour sa chair ferme, idéale pour les plats mijotés ou au four.",
        es: "Helicolenus dactylopterus, conocido como Gallineta, es un pez demersal de aguas profundas, común en el Atlántico y el Mediterráneo. Tiene una textura firme y es muy utilizado en guisos y al horno.",
        de: "Helicolenus dactylopterus, gemeinhin als Schwarzer Rotbarsch bekannt, ist ein demersaler Tiefwasserfisch, der im Atlantischen Ozean und im Mittelmeer vorkommt. Er ist bekannt für seine feste Textur und wird oft in Eintöpfen und Ofengerichten verwendet.",
        it: "L'Helicolenus dactylopterus, comunemente noto come scorfano di fondale, è un pesce demersale di acque profonde che si trova nell'Oceano Atlantico e nel Mar Mediterraneo. È riconosciuto per la sua consistenza soda e viene spesso utilizzato in stufati e ricette al forno.",
        pt: "A Helicolenus dactylopterus, vulgarmente conhecida como rascasso-negro, é um peixe demersal de águas profundas encontrado no Oceano Atlântico e no Mar Mediterrâneo. É reconhecida pela sua textura firme e é frequentemente utilizada em guisados e receitas assadas no forno.",
        ru: "Helicolenus dactylopterus, широко известная как черная розовая рыба, — это глубоководная донная рыба, обитающая в Атлантическом океане и Средиземном море. Она ценится за упругую текстуру и часто используется в рагу и запеченных блюдах.",
      },
      scientifcName: "Helicolenus dactylopterus",
    },
    {
      id: "CORVINA",
      image: "/img/fish/CORVINA.png",
      name: "CORVINA",
      desc: {
        en: "Argyrosomus regius, known as the Meagre, is a large demersal fish found in the Mediterranean and Eastern Atlantic waters. With a delicate, flaky texture and mild flavor, it is highly prized in gastronomy and aquaculture.",
        fr: "Argyrosomus regius, appelé Maigre, est un grand poisson démersal vivant dans les eaux méditerranéennes et de l’Atlantique Est. Sa chair tendre et savoureuse en fait un poisson très recherché en gastronomie et aquaculture.",
        es: "Argyrosomus regius, conocido como Corvina, es un pez demersal grande que habita en el Mediterráneo y el Atlántico oriental. Su carne blanca, suave y sabrosa lo hace muy apreciado tanto en la cocina como en la acuicultura.",
        de: "Argyrosomus regius, bekannt als der Umberfisch, ist ein großer demersaler Fisch, der im Mittelmeer und im Ostatlantik vorkommt. Mit seiner zarten, flockigen Textur und seinem milden Geschmack wird er in der Gastronomie und Aquakultur hoch geschätzt.",
        it: "L'Argyrosomus regius, noto come ombrina, è un grande pesce demersale che si trova nelle acque del Mediterraneo e dell'Atlantico orientale. Con una consistenza delicata e sfaldabile e un sapore delicato, è molto apprezzato in gastronomia e acquacoltura.",
        pt: "A Argyrosomus regius, conhecida como corvina, é um grande peixe demersal encontrado no Mediterrâneo e nas águas do Atlântico Oriental. Com uma textura delicada e escamosa e um sabor suave, é altamente valorizada em gastronomia e aquacultura.",
        ru: "Argyrosomus regius, известная как горбыль, — это крупная донная рыба, обитающая в водах Средиземноморья и Восточной Атлантики. Обладая нежной, слоистой текстурой и мягким вкусом, она высоко ценится в гастрономии и аквакультуре.",
      },
      scientifcName: "Argyrosomus regius",
    },
    {
      id: "BURRO",
      image: "/img/fish/BURRO.png",
      name: "BURRO",
      desc: {
        en: "Plectorhinchus mediterraneus, commonly known as the Rubberlip grunt, is a demersal fish inhabiting the Mediterranean Sea and adjacent Atlantic waters. It has a firm white flesh and is popular in traditional Mediterranean cuisine.",
        fr: "Plectorhinchus mediterraneus, appelé Grondin à lèvres épaisses, est un poisson démersal que l'on trouve dans la Méditerranée et l'Atlantique proche. Sa chair blanche et ferme est appréciée dans la cuisine méditerranéenne.",
        es: "Plectorhinchus mediterraneus, conocido como Roncador mediterráneo, es un pez demersal del Mediterráneo y del Atlántico oriental. Su carne blanca y firme es muy valorada en la cocina local.",
        de: "Plectorhinchus mediterraneus, gemeinhin als Mittelmeer-Lippfisch bekannt, ist ein demersaler Fisch, der im Mittelmeer und in den angrenzenden Atlantikgewässern vorkommt. Er hat festes weißes Fleisch und ist in der traditionellen mediterranen Küche beliebt.",
        it: "Il Plectorhinchus mediterraneus, comunemente noto come pesce labbra di gomma, è un pesce demersale che abita il Mar Mediterraneo e le acque atlantiche adiacenti. Ha una carne bianca e soda ed è popolare nella cucina tradizionale mediterranea.",
        pt: "A Plectorhinchus mediterraneus, vulgarmente conhecida como roncador-mediterrâneo, é um peixe demersal que habita o Mar Mediterrâneo e as águas adjacentes do Atlântico. Tem uma carne branca firme e é popular na culinária tradicional mediterrânica.",
        ru: "Plectorhinchus mediterraneus, широко известная как рыбий рык, — это донная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. У нее упругое белое мясо, и она популярна в традиционной средиземноморской кухне.",
      },
      scientifcName: "Plectorhinchus mediterraneus",
    },
    {
      id: "CHERNA",
      image: "/img/fish/CHERNA.png",
      name: "CHERNA",
      desc: {
        en: "Polyprion americanus, commonly known as the Atlantic wreckfish, is a large demersal fish inhabiting deep rocky waters of the Atlantic Ocean. It has a firm, mild-flavored white flesh, ideal for grilling or baking.",
        fr: "Polyprion americanus, ou Mérou de l'Atlantique, est un gros poisson démersal vivant dans les fonds rocheux de l'océan Atlantique. Sa chair blanche, ferme et savoureuse, est très prisée en cuisine.",
        es: "Polyprion americanus, conocido como Cherna americana, es un pez demersal de gran tamaño que habita en aguas profundas y rocosas del Atlántico. Su carne blanca y firme es ideal para platos asados o al horno.",
        de: "Polyprion americanus, gemeinhin als Amerikanischer Wrackbarsch bekannt, ist ein großer demersaler Fisch, der in tiefen felsigen Gewässern des Atlantischen Ozeans lebt. Er hat ein festes, mildes weißes Fleisch, ideal zum Grillen oder Backen.",
        it: "Il Polyprion americanus, comunemente noto come cernia dell'Atlantico, è un grande pesce demersale che abita le acque profonde e rocciose dell'Oceano Atlantico. Ha una carne bianca soda e dal sapore delicato, ideale per grigliare o cuocere al forno.",
        pt: "O Polyprion americanus, vulgarmente conhecido como cherne-do-atlântico, é um grande peixe demersal que habita águas rochosas profundas do Oceano Atlântico. Tem uma carne branca firme e de sabor suave, ideal para grelhar ou assar.",
        ru: "Polyprion americanus, широко известная как американский многошип, — это крупная донная рыба, обитающая в глубоких скалистых водах Атлантического океана. У нее упругое, мягкое белое мясо, идеально подходящее для жарки на гриле или запекания.",
      },
      scientifcName: "Polyprion americanus",
    },
    {
      id: "ARAÑA",
      image: "/img/fish/ARAÑA.png",
      name: "ARAÑA",
      desc: {
        en: "Greater weever (Trachinus draco) is a venomous demersal fish with a slender body and sharp dorsal spines. Found in shallow sandy coastal waters, it has delicate, tasty flesh but must be handled with care.",
        fr: "Grande vive (Trachinus draco), appelée 'Araignée de mer' ou 'Araña' dans certains pays, est un poisson démersal venimeux. Sa chair est fine et délicieuse, bien qu'il faille se méfier de ses épines dorsales.",
        es: "Araña (Trachinus draco) es un pez demersal venenoso muy común en el Mediterráneo. Tiene espinas dorsales peligrosas, pero su carne es fina y apreciada en la gastronomía local.",
        de: "Der Große Petermännchen (Trachinus draco) ist ein giftiger demersaler Fisch mit einem schlanken Körper und scharfen Rückenstacheln. Er kommt in flachen, sandigen Küstengewässern vor, hat zartes, schmackhaftes Fleisch, muss aber vorsichtig behandelt werden.",
        it: "Il Trachinus draco, noto come tracina drago, è un pesce demersale velenoso con un corpo snello e spine dorsali affilate. Trovato in acque costiere sabbiose e poco profonde, ha una carne delicata e gustosa ma deve essere maneggiato con cura.",
        pt: "A Trachinus draco, conhecida como aranha-dragão, é um peixe demersal venenoso com um corpo esguio e espinhos dorsais afiados. Encontrada em águas costeiras arenosas rasas, tem uma carne delicada e saborosa, mas deve ser manuseada com cuidado.",
        ru: "Большой морской дракон (Trachinus draco) — это ядовитая донная рыба с тонким телом и острыми спинными шипами. Обитает в неглубоких песчаных прибрежных водах, имеет нежное, вкусное мясо, но обращаться с ней нужно осторожно.",
      },
      scientifcName: "Trachinus draco",
    },
    {
      id: "MERO_DENTON",
      image: "/img/fish/MERO_DENTON.png",
      name: "MERO DENTON",
      desc: {
        en: "Epinephelus caninus, known as the Dogtooth Grouper, is a large demersal fish found in deep waters of the Mediterranean Sea and Atlantic Ocean. Prized for its firm texture and rich flavor, it is a sought-after species in sport and commercial fishing.",
        fr: "Epinephelus caninus, appelé Mérou canin, est un gros poisson démersal vivant dans les eaux profondes de la Méditerranée et de l’Atlantique. Sa chair ferme et savoureuse est très appréciée en pêche sportive et commerciale.",
        es: "Epinephelus caninus, conocido como Mero canino, es un pez demersal grande que habita en aguas profundas del Mediterráneo y Atlántico. Su carne firme y sabor intenso lo hacen muy valorado en pesca deportiva y comercial.",
        de: "Epinephelus caninus, bekannt als Hundszahn-Zackenbarsch, ist ein großer demersaler Fisch, der in den tiefen Gewässern des Mittelmeers und des Atlantischen Ozeans vorkommt. Er wird wegen seiner festen Textur und seines reichen Geschmacks geschätzt und ist eine begehrte Art in der Sport- und Handelsfischerei.",
        it: "L'Epinephelus caninus, noto come cernia dentice, è un grande pesce demersale che si trova nelle acque profonde del Mar Mediterraneo e dell'Oceano Atlantico. Apprezzato per la sua consistenza soda e il sapore ricco, è una specie molto ricercata nella pesca sportiva e commerciale.",
        pt: "A Epinephelus caninus, conhecida como mero-dentão, é um grande peixe demersal encontrado em águas profundas do Mar Mediterrâneo e do Oceano Atlântico. Valorizada pela sua textura firme e sabor rico, é uma espécie muito procurada na pesca desportiva e comercial.",
        ru: "Epinephelus caninus, известный как клыкастый групер, — это крупная донная рыба, обитающая в глубоких водах Средиземного моря и Атлантического океана. Ценящаяся за упругую текстуру и насыщенный вкус, она является востребованным видом в спортивном и коммерческом рыболовстве.",
      },
      scientifcName: "Epinephelus caninus",
    },
    {
      id: "MERO_ABADEJO",
      image: "/img/fish/MERO_ABADEJO.png",
      name: "MERO ABADEJO",
      desc: {
        en: "Epinephelus costae, known as the Goldblotch Grouper, is a demersal fish inhabiting rocky bottoms of the Mediterranean Sea and adjacent Atlantic waters. It is prized for its firm, flavorful flesh and distinctive golden blotches.",
        fr: "Epinephelus costae, appelé Mérou doré, est un poisson démersal vivant sur les fonds rocheux de la Méditerranée et de l’Atlantique proche. Sa chair ferme et savoureuse, marquée de taches dorées, est très appréciée.",
        es: "Epinephelus costae, conocido como Mero dorado, es un pez demersal que habita fondos rocosos del Mediterráneo y el Atlántico adyacente. Su carne firme y sabrosa con manchas doradas lo hacen muy valorado.",
        de: "Epinephelus costae, bekannt als Goldfleck-Zackenbarsch, ist ein demersaler Fisch, der auf felsigen Böden des Mittelmeers und der angrenzenden Atlantikgewässer lebt. Er wird wegen seines festen, schmackhaften Fleisches und der markanten goldenen Flecken geschätzt.",
        it: "L'Epinephelus costae, noto come cernia dorata, è un pesce demersale che abita i fondali rocciosi del Mar Mediterraneo e delle acque atlantiche adiacenti. È apprezzato per la sua carne soda e saporita e per le distintive macchie dorate.",
        pt: "A Epinephelus costae, conhecida como mero-dourado, é um peixe demersal que habita fundos rochosos do Mar Mediterrâneo e águas adjacentes do Atlântico. É valorizada pela sua carne firme e saborosa e pelas suas distintivas manchas douradas.",
        ru: "Epinephelus costae, известная как золотистый групер, — это донная рыба, обитающая на скалистых участках дна Средиземного моря и прилегающих вод Атлантики. Она ценится за упругое, ароматное мясо и характерные золотистые пятна.",
      },
      scientifcName: "Epinephelus costae",
    },
    {
      id: "HERRERA",
      image: "/img/fish/HERRERA.png",
      name: "HERRERA",
      desc: {
        en: "Lithognathus mormyrus, known as the Striped seabream, is a demersal fish found in Mediterranean and nearby Atlantic coastal waters. It has a firm texture and a mild, sweet flavor, popular in local cuisines.",
        fr: "Lithognathus mormyrus, appelé Sargo rayado, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche des côtes. Sa chair ferme et douce est très appréciée en cuisine locale.",
        es: "Lithognathus mormyrus, conocido como Sargo listado, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne firme y sabor suave es valorada en la gastronomía regional.",
        de: "Lithognathus mormyrus, bekannt als Marmorbrasse, ist ein demersaler Fisch, der in den Küstengewässern des Mittelmeers und des angrenzenden Atlantiks vorkommt. Er hat eine feste Textur und einen milden, süßen Geschmack, der in lokalen Küchen beliebt ist.",
        it: "Il Lithognathus mormyrus, noto come mormora, è un pesce demersale che si trova nelle acque costiere del Mediterraneo e dell'Atlantico adiacente. Ha una consistenza soda e un sapore delicato e dolce, popolare nelle cucine locali.",
        pt: "A Lithognathus mormyrus, conhecida como boga-listada, é um peixe demersal encontrado no Mediterrâneo e nas águas costeiras próximas do Atlântico. Tem uma textura firme e um sabor suave e doce, popular na culinária local.",
        ru: "Lithognathus mormyrus, известная как морской карась, — это донная рыба, обитающая в прибрежных водах Средиземного моря и прилегающих вод Атлантики. У нее упругая текстура и мягкий, сладковатый вкус, популярный в местных кухнях.",
      },
      scientifcName: "Lithognathus mormyrus",
    },
    {
      id: "COLA",
      image: "/img/fish/COLA.png",
      name: "COLA",
      desc: {
        en: "Merluccius merluccius, known as the European hake, is a widely distributed demersal fish in the Mediterranean Sea and Eastern Atlantic. It has a delicate, white, flaky flesh and is popular in many European cuisines.",
        fr: "Merluccius merluccius, appelé Merlu, est un poisson démersal largement présent en Méditerranée et dans l’Atlantique Est. Sa chair blanche délicate est très appréciée en cuisine européenne.",
        es: "Merluccius merluccius, conocido como Merluza, es un pez demersal común en el Mediterráneo y Atlántico oriental. Su carne blanca y delicada es popular en muchas cocinas europeas.",
        de: "Merluccius merluccius, bekannt als der Europäische Seehecht, ist ein weit verbreiteter demersaler Fisch im Mittelmeer und im Ostatlantik. Er hat zartes, weißes, flockiges Fleisch und ist in vielen europäischen Küchen beliebt.",
        it: "Il Merluccius merluccius, noto come nasello europeo, è un pesce demersale ampiamente diffuso nel Mar Mediterraneo e nell'Atlantico orientale. Ha una carne delicata, bianca e sfaldabile ed è popolare in molte cucine europee.",
        pt: "A Merluccius merluccius, conhecida como pescada-europeia, é um peixe demersal amplamente distribuído no Mar Mediterrâneo e no Atlântico Oriental. Tem uma carne delicada, branca e escamosa e é popular em muitas culinárias europeias.",
        ru: "Merluccius merluccius, известная как европейский хек, — это широко распространенная донная рыба в Средиземном море и Восточной Атлантике. У нее нежное, белое, слоистое мясо, и она популярна во многих европейских кухнях.",
      },
      scientifcName: "Merluccius merluccius",
    },
    {
      id: "CAZON",
      image: "/img/fish/CAZON.png",
      name: "CAZON",
      desc: {
        en: "Mustelus mustelus, known as the Common smoothhound, is a demersal shark species found in Mediterranean and nearby Atlantic waters. It has a mild flavor and firm texture, commonly used in regional seafood dishes.",
        fr: "Mustelus mustelus, appelé Musette, est une espèce de requin démersal présente en Méditerranée et dans l’Atlantique proche. Sa chair ferme au goût doux est souvent utilisée en cuisine locale.",
        es: "Mustelus mustelus, conocido como Tiburón pintarroja, es una especie de tiburón demersal que habita en el Mediterráneo y Atlántico cercano. Su carne firme y sabor suave es muy apreciada.",
        de: "Mustelus mustelus, bekannt als der Gemeine Glatthai, ist eine demersale Haiart, die im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er hat einen milden Geschmack und eine feste Textur und wird häufig in regionalen Fischgerichten verwendet.",
        it: "Il Mustelus mustelus, noto come palombo comune, è una specie di squalo demersale che si trova nel Mediterraneo e nelle acque atlantiche adiacenti. Ha un sapore delicato e una consistenza soda, comunemente utilizzato nei piatti di pesce regionali.",
        pt: "O Mustelus mustelus, conhecido como cação, é uma espécie de tubarão demersal encontrada no Mediterrâneo e nas águas próximas do Atlântico. Tem um sabor suave e uma textura firme, comum em pratos regionais de marisco.",
        ru: "Mustelus mustelus, известная как обыкновенный кунья акула, — это донный вид акулы, обитающий в Средиземном море и прилегающих водах Атлантики. Она имеет мягкий вкус и упругую текстуру, часто используется в региональных блюдах из морепродуктов.",
      },
      scientifcName: "Mustelus mustelus",
    },
    {
      id: "SALMONETE",
      image: "/img/fish/SALMONETE.png",
      name: "SALMONETE",
      desc: {
        en: "Mullus surmuletus, known as the Red mullet, is a demersal fish found in the Mediterranean Sea and nearby Atlantic waters. It is prized for its delicate flavor and tender, flaky flesh, widely used in Mediterranean cuisine.",
        fr: "Mullus surmuletus, appelé Rouget barbet, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche. Sa chair tendre et son goût délicat sont très appréciés en cuisine méditerranéenne.",
        es: "Mullus surmuletus, conocido como Salmonete, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne tierna y sabor delicado son muy valorados en la gastronomía mediterránea.",
        de: "Mullus surmuletus, bekannt als Rote Meerbarbe, ist ein demersaler Fisch, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er wird für seinen feinen Geschmack und sein zartes, schuppiges Fleisch geschätzt und ist in der mediterranen Küche weit verbreitet.",
        it: "Il Mullus surmuletus, noto come triglia di scoglio, è un pesce demersale che si trova nel Mar Mediterraneo e nelle acque atlantiche adiacenti. È apprezzato per il suo sapore delicato e la carne tenera e sfaldabile, ampiamente utilizzato nella cucina mediterranea.",
        pt: "A Mullus surmuletus, conhecida como salmonete, é um peixe demersal encontrado no Mar Mediterrâneo e nas águas próximas do Atlântico. É valorizada pelo seu sabor delicado e carne tenra e escamosa, amplamente utilizada na culinária mediterrânica.",
        ru: "Mullus surmuletus, известная как султанка, — это донная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. Она ценится за нежный вкус и мягкое, слоистое мясо, широко используемое в средиземноморской кухне.",
      },
      scientifcName: "Mullus surmuletus",
    },
    {
      id: "BRECA",
      image: "/img/fish/BRECA.png",
      name: "BRECA",
      desc: {
        en: "Pagellus erythrinus, known as the Common pandora, is a demersal fish found in Mediterranean and nearby Atlantic waters. It has a firm texture and delicate flavor, popular in local seafood dishes.",
        fr: "Pagellus erythrinus, appelé Pageot commun, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche. Sa chair ferme et son goût délicat sont très appréciés en cuisine locale.",
        es: "Pagellus erythrinus, conocido como Pagel común, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne firme y sabor delicado son valorados en la gastronomía regional.",
        de: "Pagellus erythrinus, bekannt als Roter Pandora, ist ein demersaler Fisch, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er hat eine feste Textur und einen feinen Geschmack, der in lokalen Fischgerichten beliebt ist.",
        it: "Il Pagellus erythrinus, noto come fragolino, è un pesce demersale che si trova nel Mediterraneo e nelle acque atlantiche adiacenti. Ha una consistenza soda e un sapore delicato, popolare nei piatti di pesce locali.",
        pt: "O Pagellus erythrinus, conhecido como pargo-comum, é um peixe demersal encontrado no Mediterrâneo e nas águas próximas do Atlântico. Tem uma textura firme e sabor delicado, popular em pratos de marisco locais.",
        ru: "Pagellus erythrinus, известная как обыкновенный морской лещ, — это донная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. У нее упругая текстура и нежный вкус, популярный в местных блюдах из морепродуктов.",
      },
      scientifcName: "Pagellus erythrinus",
    },
    {
      id: "ZAPATA",
      image: "/img/fish/ZAPATA.png",
      name: "ZAPATA",
      desc: {
        en: "Pagrus caeruleostictus, known as the Blue-spotted seabream, is a demersal fish found in the Mediterranean and nearby Atlantic waters. It is recognized by its firm flesh and distinctive blue spots, prized in local culinary traditions.",
        fr: "Pagrus caeruleostictus, appelé Daurade tachetée bleue, est un poisson démersal présent en Méditerranée et dans l’Atlantique proche. Sa chair ferme et ses taches bleues distinctives sont très appréciées en cuisine locale.",
        es: "Pagrus caeruleostictus, conocido como Besugo azul, es un pez demersal del Mediterráneo y Atlántico cercano. Su carne firme y sus manchas azules distintivas son valoradas en la gastronomía regional.",
        de: "Pagrus caeruleostictus, bekannt als Blaugepunktete Brasse, ist ein demersaler Fisch, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er wird wegen seines festen Fleisches und seiner markanten blauen Flecken geschätzt und ist in lokalen kulinarischen Traditionen sehr beliebt.",
        it: "Il Pagrus caeruleostictus, noto come pagro azzurro, è un pesce demersale che si trova nel Mediterraneo e nelle acque atlantiche adiacenti. È riconosciuto per la sua carne soda e le distintive macchie blu, apprezzato nelle tradizioni culinarie locali.",
        pt: "O Pagrus caeruleostictus, conhecido como pargo-de-pintas-azuis, é um peixe demersal encontrado no Mediterrâneo e nas águas próximas do Atlântico. É reconhecido pela sua carne firme e manchas azuis distintas, valorizado nas tradições culinárias locais.",
        ru: "Pagrus caeruleostictus, известная как голубопятнистый пагр, — это донная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. Она узнаваема по упругому мясу и характерным голубым пятнам, ценится в местных кулинарных традициях.",
      },
      scientifcName: "Pagrus caeruleostictus",
    },
    {
      id: "ARMADIO",
      image: "/img/fish/ARMADIO.png",
      name: "ARMADIO",
      desc: {
        en: "Peristedion cataphractum, known as the Armored searobin, is a demersal fish characterized by its bony armored plates. Found in the Mediterranean and nearby Atlantic waters, it has firm white flesh and a mild flavor.",
        fr: "Peristedion cataphractum, appelé Poisson-couronne cuirassé, est un poisson démersal reconnaissable à ses plaques osseuses armurées. Présent en Méditerranée et dans l’Atlantique proche, sa chair blanche est ferme et délicate.",
        es: "Peristedion cataphractum, conocido como Gallineta acorazada, es un pez demersal caracterizado por sus placas óseas armadas. Habita el Mediterráneo y el Atlántico cercano, con carne blanca firme y sabor suave.",
        de: "Peristedion cataphractum, bekannt als Panzerfisch, ist ein demersaler Fisch, der durch seine knöchernen Panzerplatten gekennzeichnet ist. Er kommt im Mittelmeer und den angrenzenden Atlantikgewässern vor und hat festes weißes Fleisch mit einem milden Geschmack.",
        it: "Il Peristedion cataphractum, noto come pesce-capra corazzato, è un pesce demersale caratterizzato dalle sue placche ossee corazzate. Trovato nel Mediterraneo e nelle acque atlantiche adiacenti, ha una carne bianca e soda e un sapore delicato.",
        pt: "A Peristedion cataphractum, conhecida como cabra-armada, é um peixe demersal caracterizado pelas suas placas ósseas blindadas. Encontrada no Mediterrâneo e nas águas próximas do Atlântico, tem uma carne branca firme e um sabor suave.",
        ru: "Peristedion cataphractum, известная как панцерный триглоид, — это донная рыба, отличающаяся костными бронированными пластинами. Обитает в Средиземном море и прилегающих водах Атлантики, имеет упругое белое мясо и мягкий вкус.",
      },
      scientifcName: "Peristedion cataphractum",
    },
    {
      id: "MOSTELLE",
      image: "/img/fish/MOSTELLE.png",
      name: "MOSTELLE",
      desc: {
        en: "Phycis phycis, known as the Forkbeard, is a demersal fish commonly found in the Mediterranean Sea and nearby Atlantic waters. It has firm white flesh with a mild flavor, popular in local seafood dishes.",
        fr: "Phycis phycis, appelé Phycis commun, est un poisson démersal fréquent en Méditerranée et dans l’Atlantique proche. Sa chair blanche ferme au goût doux est appréciée en cuisine locale.",
        es: "Phycis phycis, conocido como Phycis común, es un pez demersal común en el Mediterráneo y Atlántico cercano. Su carne blanca firme y sabor suave son valorados en la gastronomía regional.",
        de: "Phycis phycis, bekannt als Gabeldorsch, ist ein demersaler Fisch, der häufig im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er hat festes weißes Fleisch mit einem milden Geschmack und ist in lokalen Fischgerichten beliebt.",
        it: "Il Phycis phycis, noto come fisciola, è un pesce demersale comunemente trovato nel Mar Mediterraneo e nelle acque atlantiche adiacenti. Ha una carne bianca e soda con un sapore delicato, popolare nei piatti di pesce locali.",
        pt: "A Phycis phycis, conhecida como abrótea-de-barbas, é um peixe demersal comum no Mar Mediterrâneo e nas águas próximas do Atlântico. Tem carne branca e firme com um sabor suave, popular em pratos de marisco locais.",
        ru: "Phycis phycis, известная как обыкновенная фицида, — это донная рыба, широко распространенная в Средиземном море и прилегающих водах Атлантики. У нее упругое белое мясо с мягким вкусом, популярное в местных блюдах из морепродуктов.",
      },
      scientifcName: "Phycis phycis",
    },
    {
      id: "PAMPANO",
      image: "/img/fish/PAMPANO.png",
      name: "PAMPANO",
      desc: {
        en: "Schedophilus ovalis, known as the Round whiff, is a demersal flatfish found in Mediterranean and nearby Atlantic waters. It has tender white flesh and is appreciated for its mild flavor.",
        fr: "Schedophilus ovalis, appelé Poisson-plat rond, est un poisson démersal plat présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche tendre est appréciée pour sa saveur douce.",
        es: "Schedophilus ovalis, conocido como Lenguado redondo, es un pez plano demersal que habita el Mediterráneo y el Atlántico cercano. Su carne blanca y tierna es valorada por su sabor suave.",
        de: "Schedophilus ovalis, bekannt als Rundflunder, ist ein demersaler Plattfisch, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er hat zartes weißes Fleisch und wird für seinen milden Geschmack geschätzt.",
        it: "Lo Schedophilus ovalis, noto come pesce-ronde, è un pesce piatto demersale che si trova nel Mediterraneo e nelle acque atlantiche adiacenti. Ha una carne bianca e tenera ed è apprezzato per il suo sapore delicato.",
        pt: "A Schedophilus ovalis, conhecida como peixe-oval, é um peixe plano demersal encontrado no Mediterrâneo e nas águas próximas do Atlântico. Tem uma carne branca e tenra e é apreciada pelo seu sabor suave.",
        ru: "Schedophilus ovalis, известная как круглая птерикомия, — это донная камбалообразная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. У нее нежное белое мясо, и она ценится за мягкий вкус.",
      },
      scientifcName: "Schedophilus ovalis",
    },
    {
      id: "LENGUADO_ARENA",
      image: "/img/fish/LENGUADO_ARENA.png",
      name: "LENGUADO ARENA",
      desc: {
        en: "Solea lascaris, known as the Mediterranean sole, is a demersal flatfish found in the Mediterranean Sea and nearby Atlantic waters. It has tender white flesh and a mild, delicate flavor, highly prized in regional cuisine.",
        fr: "Solea lascaris, appelée Sole méditerranéenne, est un poisson plat démersal présent en Méditerranée et dans l’Atlantique proche. Sa chair blanche tendre et son goût délicat sont très appréciés en cuisine locale.",
        es: "Solea lascaris, conocida como Lenguado mediterráneo, es un pez plano demersal del Mediterráneo y Atlántico cercano. Su carne blanca tierna y sabor delicado son valorados en la gastronomía regional.",
        de: "Solea lascaris, bekannt als Mittelmeer-Seezunge, ist ein demersaler Plattfisch, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er hat zartes weißes Fleisch und einen milden, feinen Geschmack, der in der regionalen Küche hoch geschätzt wird.",
        it: "La Solea lascaris, nota come sogliola del Mediterraneo, è un pesce piatto demersale che si trova nel Mar Mediterraneo e nelle acque atlantiche adiacenti. Ha una carne bianca e tenera e un sapore delicato e raffinato, molto apprezzato nella cucina regionale.",
        pt: "A Solea lascaris, conhecida como linguado-mediterrânico, é um peixe plano demersal encontrado no Mar Mediterrâneo e nas águas próximas do Atlântico. Tem uma carne branca tenra e um sabor suave e delicado, muito apreciado na culinária regional.",
        ru: "Solea lascaris, известная как средиземноморский солея, — это донная камбалообразная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. У нее нежное белое мясо и мягкий, тонкий вкус, высоко ценимый в региональной кухне.",
      },
      scientifcName: "Solea lascaris",
    },
    {
      id: "VIVE",
      image: "/img/fish/VIVE.png",
      name: "VIVE",
      desc: {
        en: "Trachinus radiatus, known as the Spotted weever, is a demersal fish found in Mediterranean and nearby Atlantic coastal waters. It has venomous spines and is known for its spotted body. The flesh is firm and mild in flavor.",
        fr: "Trachinus radiatus, appelé Grondin tacheté, est un poisson démersal présent en Méditerranée et dans l’Atlantique proche des côtes. Il possède des épines venimeuses et un corps tacheté. Sa chair est ferme et au goût doux.",
        es: "Trachinus radiatus, conocido como Rascacio manchado, es un pez demersal del Mediterráneo y Atlántico cercano. Tiene espinas venenosas y un cuerpo manchado. Su carne es firme y de sabor suave.",
        de: "Trachinus radiatus, bekannt als Gestreiftes Petermännchen, ist ein demersaler Fisch, der im Mittelmeer und den angrenzenden atlantischen Küstengewässern vorkommt. Er hat giftige Stacheln und ist für seinen gefleckten Körper bekannt. Das Fleisch ist fest und mild im Geschmack.",
        it: "Il Trachinus radiatus, noto come tracina raggiata, è un pesce demersale che si trova nel Mediterraneo e nelle acque costiere atlantiche adiacenti. Ha spine velenose ed è noto per il suo corpo macchiato. La carne è soda e dal sapore delicato.",
        pt: "A Trachinus radiatus, conhecida como aranha-pintada, é um peixe demersal encontrado no Mediterrâneo e nas águas costeiras próximas do Atlântico. Tem espinhos venenosos e é conhecido pelo seu corpo pintado. A carne é firme e de sabor suave.",
        ru: "Trachinus radiatus, известная как лучистый морской дракон, — это донная рыба, обитающая в прибрежных водах Средиземного моря и прилегающих вод Атлантики. У нее ядовитые шипы и пятнистое тело. Мясо упругое и мягкое на вкус.",
      },
      scientifcName: "Trachinus radiatus",
    },
    {
      id: "RATA",
      image: "/img/fish/RATA.png",
      name: "RATA",
      desc: {
        en: "Uranoscopus scaber, known as the Stargazer, is a demersal fish found in Mediterranean and nearby Atlantic waters. It is known for its upward-facing eyes and venomous spines. The flesh is firm and mild in flavor.",
        fr: "Uranoscopus scaber, appelé Poisson-soleil, est un poisson démersal vivant en Méditerranée et dans l’Atlantique proche. Il se distingue par ses yeux tournés vers le haut et ses épines venimeuses. Sa chair est ferme et au goût doux.",
        es: "Uranoscopus scaber, conocido como Pez astrólogo, es un pez demersal del Mediterráneo y Atlántico cercano. Se caracteriza por sus ojos orientados hacia arriba y espinas venenosas. Su carne es firme y de sabor suave.",
        de: "Uranoscopus scaber, bekannt als Himmelsgucker, ist ein demersaler Fisch, der im Mittelmeer und den angrenzenden Atlantikgewässern vorkommt. Er ist bekannt für seine nach oben gerichteten Augen und giftigen Stacheln. Das Fleisch ist fest und mild im Geschmack.",
        it: "L'Uranoscopus scaber, noto come pesce prete, è un pesce demersale che si trova nel Mediterraneo e nelle acque atlantiche adiacenti. È noto per i suoi occhi rivolti verso l'alto e le spine velenose. La carne è soda e dal sapore delicato.",
        pt: "O Uranoscopus scaber, conhecido como peixe-lua, é um peixe demersal encontrado no Mediterrâneo e nas águas próximas do Atlântico. É conhecido pelos seus olhos voltados para cima e espinhos venenosos. A carne é firme e de sabor suave.",
        ru: "Uranoscopus scaber, известная как морской звездочет, — это донная рыба, обитающая в Средиземном море и прилегающих водах Атлантики. Она известна своими обращенными вверх глазами и ядовитыми шипами. Мясо упругое и мягкое на вкус.",
      },
      scientifcName: "Uranoscopus scaber",
    },
  ],
};
export const portsSeed: Port[] = [
  {
    id: "tangier",
    name: "Tangier",
    city: "Tanger",
    lat: 35.7806,
    lng: -5.8083,
    fish: [
      {
        species: "Sardine",
        price: 8.5,
        qty: 2500,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Mackerel",
        price: 18.0,
        qty: 1200,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Anchovy",
        price: 12.0,
        qty: 1600,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "al-hoceima",
    name: "Al Hoceima",
    city: "Al Hoceima",
    lat: 35.242,
    lng: -3.936,
    fish: [
      {
        species: "Sardine",
        price: 9.2,
        qty: 1400,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Octopus",
        price: 65.0,
        qty: 320,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "nador",
    name: "Nador (Beni Ensar)",
    city: "Nador",
    lat: 35.172,
    lng: -2.927,
    fish: [
      {
        species: "Sardine",
        price: 8.8,
        qty: 1800,
        unit: "kg",
        currency: "MAD",
      },
      { species: "Hake", price: 48.0, qty: 500, unit: "kg", currency: "MAD" },
    ],
  },
  {
    id: "larache",
    name: "Larache",
    city: "Larache",
    lat: 35.196,
    lng: -6.151,
    fish: [
      {
        species: "Sardine",
        price: 8.0,
        qty: 2200,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Anchovy",
        price: 12.5,
        qty: 900,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "kenitra",
    name: "Kenitra (Mehdia)",
    city: "Kenitra",
    lat: 34.261,
    lng: -6.671,
    fish: [
      {
        species: "Sardine",
        price: 8.3,
        qty: 1300,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Mackerel",
        price: 17.2,
        qty: 700,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "casablanca",
    name: "Casablanca",
    city: "Casablanca",
    lat: 33.608,
    lng: -7.611,
    fish: [
      {
        species: "Sardine",
        price: 9.0,
        qty: 2800,
        unit: "kg",
        currency: "MAD",
      },
      { species: "Hake", price: 50.0, qty: 600, unit: "kg", currency: "MAD" },
      { species: "Squid", price: 75.0, qty: 200, unit: "kg", currency: "MAD" },
    ],
  },
  {
    id: "mohammedia",
    name: "Mohammedia",
    city: "Mohammedia",
    lat: 33.7,
    lng: -7.389,
    fish: [
      {
        species: "Sardine",
        price: 8.6,
        qty: 1000,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Anchovy",
        price: 12.1,
        qty: 850,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "jorf-lasfar",
    name: "Jorf Lasfar",
    city: "El Jadida",
    lat: 33.106,
    lng: -8.625,
    fish: [
      { species: "Hake", price: 49.0, qty: 350, unit: "kg", currency: "MAD" },
      {
        species: "Mackerel",
        price: 18.5,
        qty: 500,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "safi",
    name: "Safi",
    city: "Safi",
    lat: 32.3,
    lng: -9.24,
    fish: [
      {
        species: "Sardine",
        price: 8.1,
        qty: 2100,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Octopus",
        price: 68.0,
        qty: 260,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "essaouira",
    name: "Essaouira",
    city: "Essaouira",
    lat: 31.512,
    lng: -9.769,
    fish: [
      {
        species: "Sardine",
        price: 8.9,
        qty: 1700,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Mackerel",
        price: 19.0,
        qty: 600,
        unit: "kg",
        currency: "MAD",
      },
      { species: "Squid", price: 78.0, qty: 190, unit: "kg", currency: "MAD" },
    ],
  },
  {
    id: "agadir",
    name: "Agadir",
    city: "Agadir",
    lat: 30.422,
    lng: -9.619,
    fish: [
      {
        species: "Sardine",
        price: 8.7,
        qty: 3000,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Octopus",
        price: 70.0,
        qty: 400,
        unit: "kg",
        currency: "MAD",
      },
      { species: "Hake", price: 47.0, qty: 700, unit: "kg", currency: "MAD" },
    ],
  },
  {
    id: "tan-tan",
    name: "Tan-Tan (El Ouatia)",
    city: "Tan-Tan",
    lat: 28.48,
    lng: -11.347,
    fish: [
      {
        species: "Sardine",
        price: 7.9,
        qty: 2600,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Mackerel",
        price: 17.5,
        qty: 900,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "tarfaya",
    name: "Tarfaya",
    city: "Tarfaya",
    lat: 27.939,
    lng: -12.925,
    fish: [
      {
        species: "Sardine",
        price: 7.7,
        qty: 1100,
        unit: "kg",
        currency: "MAD",
      },
      { species: "Hake", price: 46.5, qty: 280, unit: "kg", currency: "MAD" },
    ],
  },
  {
    id: "laayoune",
    name: "Laayoune",
    city: "Laayoune",
    lat: 27.144,
    lng: -13.206,
    fish: [
      {
        species: "Sardine",
        price: 7.8,
        qty: 3500,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Octopus",
        price: 66.0,
        qty: 450,
        unit: "kg",
        currency: "MAD",
      },
    ],
  },
  {
    id: "dakhla",
    name: "Dakhla",
    city: "Dakhla",
    lat: 23.714,
    lng: -15.936,
    fish: [
      {
        species: "Sardine",
        price: 7.5,
        qty: 4200,
        unit: "kg",
        currency: "MAD",
      },
      {
        species: "Octopus",
        price: 72.0,
        qty: 500,
        unit: "kg",
        currency: "MAD",
      },
      { species: "Squid", price: 80.0, qty: 230, unit: "kg", currency: "MAD" },
    ],
  },
];

export const countriesToSelect = [
  { code: "at", name: "Austria" },
  { code: "be", name: "Belgium" },
  { code: "bg", name: "Bulgaria" },
  { code: "hr", name: "Croatia" },
  { code: "cy", name: "Cyprus" },
  { code: "cz", name: "Czech Republic" },
  { code: "dk", name: "Denmark" },
  { code: "ee", name: "Estonia" },
  { code: "fi", name: "Finland" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "gr", name: "Greece" },
  { code: "hu", name: "Hungary" },
  { code: "ie", name: "Ireland" },
  { code: "it", name: "Italy" },
  { code: "lv", name: "Latvia" },
  { code: "lt", name: "Lithuania" },
  { code: "lu", name: "Luxembourg" },
  { code: "mt", name: "Malta" },
  { code: "nl", name: "Netherlands" },
  { code: "pl", name: "Poland" },
  { code: "pt", name: "Portugal" },
  { code: "ro", name: "Romania" },
  { code: "sk", name: "Slovakia" },
  { code: "si", name: "Slovenia" },
  { code: "es", name: "Spain" },
  { code: "se", name: "Sweden" },
];
