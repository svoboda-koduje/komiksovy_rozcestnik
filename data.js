const comicsData = [
    {
        id: "stepanka-jislova",
        hasProfile: true,
        name: "Štěpánka Jislová",
        url: "https://www.jislova.com/",
        // Hlavní profilová fotka
        image: "jislova_medailonek_images/b_c1760-1-1604071357-1024x729.webp", 
        
        tags: ["Grafický román", "Ilustrace", "Autobiografie"],
        category: "czech",
        desc: "Výrazná autorka grafických románů (Bez vlasů, Srdcovka). Moderní vizuální styl a silná témata.",
        color: "bg-pink-100",

        // Kompletní text s odkazy a obrázky
        bio: `
        <p class="mb-4">Štěpánka Jislová (*1992) patří k výrazným tvářím mladší generace komiksových tvůrců. Její nejstarší práce vyšlé tiskem je možné najít ve sbornících české mangy <a href="https://comicsdb.cz/comics/4873/vejir-2013-sbornik-ceske-mangy" target="_blank" class="text-blue-600 hover:underline font-bold">Vějíř</a>. Objevila se (a nadále i objevuje) v <a href="https://comicsdb.cz/serie/1/aargh" target="_blank" class="text-blue-600 hover:underline font-bold">Aarghu!</a> či samizdatech <a href="https://comicsdb.cz/comics/4788/bubblegun-07" target="_blank" class="text-blue-600 hover:underline font-bold">BubbleGun</a> a <a href="https://comicsdb.cz/comics/6365/xrx-mag-volume-5" target="_blank" class="text-blue-600 hover:underline font-bold">XRX</a>. Její jméno je v současnosti nejvíce spojeno s působením v pražské odnoži mezinárodního projektu <a href="https://www.ldcpraha.com" target="_blank" class="text-blue-600 hover:underline font-bold">Laydeez Do Comics</a>, který si klade za cíl podporovat začínající i stávají komiksové kreslířky a tvůrkyně. Pražská větev vznikla přímo přičiněním jejím a <a href="https://www.ldcpraha.com/o-naacutes.html" target="_blank" class="text-blue-600 hover:underline font-bold">Terezy Drahoňovské</a>.</p>

        <h3 class="text-2xl font-bold font-comic mt-8 mb-4 border-b-2 border-black inline-block">Brzké úspěchy a ilustrační činnost</h3>
        
        <p class="mb-4">Jislová o sobě dala poprvé výrazněji vědět v letech 2012 a 2013 – nejprve byla spolu-vítězkou pražské výtvarné soutěže <a href="https://www.ddm-ph2.cz/souteze/291-vykoumej-komiks" target="_blank" class="text-blue-600 hover:underline font-bold">Vykoumej komiks</a>, následně s příběhem <strong>Strom</strong> vyhrála druhý ročník soutěže <a href="http://www.vankovkakomiks.cz//cz/soutez/2016" target="_blank" class="text-blue-600 hover:underline font-bold">CZ.KOMIKS</a> a ten byl otištěn ve třináctém čísle sborníku <a href="https://comicsdb.cz/comics/5289/aargh-13" target="_blank" class="text-blue-600 hover:underline font-bold">Aargh!</a> Zúčastnila se i sympozia <a href="https://www.gkk.cz/cs/akce/sympozia/komiksove-sympozium/superhrdinove-z-vychodniho-bloku/" target="_blank" class="text-blue-600 hover:underline font-bold">Superhrdinové z východního bloku</a>, jehož výstup vyšel <a href="https://comicsdb.cz/comics/6044/superhrdinove-z-vychodniho-bloku" target="_blank" class="text-blue-600 hover:underline font-bold">tiskem</a>. Zároveň začala se zakázkovou ilustrací pro časopisy a knihy.</p>

        <figure class="my-8">
            <img src="images/jislova_medailonek_images/jirka-adel-1024x907.webp" 
                 class="zoomable w-full h-auto border-4 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all cursor-zoom-in" 
                 alt="Ukázka tvorby - Jirka a Adel">
        </figure>

        <p class="mb-4">O rok později jí bylo nabídnuto ilustrovat díl <a href="https://comicsdb.cz/comics/6328/cesi-1938-02-jak-benes-ustoupil-hitlerovi" target="_blank" class="text-blue-600 hover:underline font-bold">1938: Jak Beneš ustoupil Hitlerovi</a> v sérii Češi. Pracovala i na ilustracích knihy <a href="https://www.databazeknih.cz/knihy/posledni-tajemstvi-zahada-jezera-loch-ness-318386" target="_blank" class="text-blue-600 hover:underline font-bold">Poslední tajemství – Záhada jezera Loch Ness</a>. Na svůj komiksový debut, tedy skutečně vlastní, samostatnou knihu, <a href="https://comicsdb.cz/comics/6757/klaster-nejsvetejsiho-srdce" target="_blank" class="text-blue-600 hover:underline font-bold">Klášter Nejsvětějšího srdce</a>, si musela počkat až do roku 2017.</p>

        <p class="mb-4">Knižním ilustracím se věnovala i nadále, v roce 2018 jimi doprovodila <a href="https://www.databazeknih.cz/knihy/trikrat-detektiv-kalle-400857" target="_blank" class="text-blue-600 hover:underline font-bold">knihu Astrid Lindgrenové</a> a biblický <a href="https://www.databazeknih.cz/knihy/daniel-v-jame-lvove-396069" target="_blank" class="text-blue-600 hover:underline font-bold">příběh o Danielovi</a>. V roce 2021 se na světlo světla podívala <a href="https://comicsdb.cz/comics/8722/prerekadla" target="_blank" class="text-blue-600 hover:underline font-bold">Přeřekadla</a>, tenký, ale humorný svazeček popletených pořekadel. Účastnila se také sympozií skupiny <a href="https://www.facebook.com/ldcPraha/" target="_blank" class="text-blue-600 hover:underline font-bold">Laydeez Do Comics</a>, jejichž výsledky vyšly (spolu s pracemi Štěpánky Jislové) ve sborníku <a href="https://comicsdb.cz/comics/7680/komiksodejky" target="_blank" class="text-blue-600 hover:underline font-bold">Komiksodějky</a>.</p>

        <figure class="my-8">
            <img src="images/jislova_medailonek_images/daniel_v_jame_lvove_9788075580627-824x1024.webp" 
                 class="zoomable w-3/4 mx-auto h-auto border-4 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all cursor-zoom-in" 
                 alt="Daniel v jámě lvové">
        </figure>

        <h3 class="text-2xl font-bold font-comic mt-8 mb-4 border-b-2 border-black inline-block">Bez vlasů, ale s odvahou</h3>
        
        <p class="mb-4">Její zatím nejrozsáhlejší prací je historický komiks <a href="https://comicsdb.cz/comics/8189/milada-horakova" target="_blank" class="text-blue-600 hover:underline font-bold">Milada Horáková</a>, který vyšel k výročí zavraždění této političky a feministky. Podobným stylem jako Horákovou a Čechy ztvárnila i svůj příspěvek do skautského sborníku <a href="https://comicsdb.cz/comics/8485/odvaha-je-volba" target="_blank" class="text-blue-600 hover:underline font-bold">Odvaha je volba</a>. Ve stejném roce vychází i výrazný komiks <a href="https://comicsdb.cz/comics/8386/bez-vlasu" target="_blank" class="text-blue-600 hover:underline font-bold">Bez vlasů</a>, který vznikl ve spolupráci s již zmiňovanou Terezou Drahoňovskou a vyhrál autorkám <a href="https://muriel.cz/muriel-2020-vysledky/" target="_blank" class="text-blue-600 hover:underline font-bold">cenu Muriel</a> za nejlepší komiksovou knihu. Kreslířčina úsporná, ale přesvědčivá linka činí z Bez vlasů nezapomenutelný zážitek a naplno odhaluje, o kolik se Jislová od svých začátků posunula a jak silně dokáže ztvárnit příběh, má-li volnou ruku.</p>

        <figure class="my-8">
            <img src="images/jislova_medailonek_images/tumblr_450caf7fb7ed4f4cda6d68ed7254ed74_6afbfefa_2048-1024x744.webp" 
                 class="zoomable w-full h-auto border-4 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all cursor-zoom-in" 
                 alt="Ukázka z komiksu Bez vlasů">
        </figure>

        <p class="mb-4">Autobiografický příběh Drahoňovské navíc zachycuje věrně a s respektem, včetně nejcitlivějších momentů. Poslední rok Štěpánka pracuje na vlastním autobiografickém komiksu.</p>

        <figure class="my-8">
            <img src="images/jislova_medailonek_images/tumblr_e7e1bfc2784f822bb8d8c4c0c15af0fe_8de96092_2048-743x1024.webp" 
                 class="zoomable w-full h-auto border-4 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all cursor-zoom-in" 
                 alt="Další ukázka tvorby">
        </figure>

        <p class="mb-4">Štěpánka Jislová vystudovala Fakultu designu a umění Ladislava Sutnara v Plzni. Její kresebný styl se během let neustále proměňuje a vyvíjí, zároveň je i uzpůsobován jednotlivým pracím. Nejsou jí cizí experimenty s barvami a technikami, momentálně jsou však pro typické spíše jednobarevné plochy. Původně velice detailní, tenká, těkavá linka, podchycující jakousi neuspořádanost a určitou „ošklivost“ věcí, postupně nabrala na síle a na pevnosti. V kombinaci s plnými barevnými plochami tak její současnější kresby mohou evokovat až dřevoryt či prvorepublikovou, geometricky jednoduchou karikaturu. I nadále se věnuje jak „analogové“, tak digitální kresbě. Za pozornost stojí její cyklus obrazů Modrá sezóna, který byl v roce 2016 vystaven v bistru Proti Proudu.</p>

        <figure class="my-8">
            <img src="images/jislova_medailonek_images/tumblr_0947e1cf160b34d84c4de203bdd68895_13198038_2048-724x1024.webp" 
                 class="zoomable w-3/4 mx-auto h-auto border-4 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all cursor-zoom-in" 
                 alt="Ilustrace">
        </figure>
        
        <p class="mb-4">Štěpánka je, jako většina mladších umělců, na sítích dost aktivní, své sociální sítě ale v posledních letech redukovala. Svá díla nahrává na <a href="https://www.facebook.com/stepanka.jislova.art/" target="_blank" class="text-blue-600 hover:underline font-bold">Facebook</a>, na <a href="http://www.jislova.com/cs/" target="_blank" class="text-blue-600 hover:underline font-bold">vlastní stránky</a> a nejaktivnější je na <a href="https://www.instagram.com/jislovka/?hl=en" target="_blank" class="text-blue-600 hover:underline font-bold">Instagramu</a>.</p>
        `,

        // Necháváme prázdné, protože text neobsahuje formát Q&A
        interview: [] 
    },
    // ... ostatní autoři
];