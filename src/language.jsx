import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "it",
    resources: {
      en: {
        translation: {
          homeTitle: "Holiday home located in Vietri sul Mare",
          subTitle: "Entire accommodation for 4 guests",
          subTitleDetail: "1 bedroom (2 beds) | 1 bathroom",
          detail:
            "Casa Serì, located in the historic center of Vietri sul Mare, is the perfect choice for those wishing to immerse themselves in the beauty and rich culture of the breathtaking Amalfi Coast. Situated in the heart of Vietri sul Mare's historic center, this welcoming and charming home offers immediate access to all the countless wonders this quaint village has to offer. The home comprises a double bedroom, a bright and inviting living room, and a fully equipped kitchen. The elegant spaces, meticulously maintained, create a relaxing and comfortable atmosphere, ideal for recharging your batteries and restoring your energy after a day spent exploring the wonders of the Amalfi Coast. Additionally, two enchanting private terraces offer breathtaking views; one of the magnificent coastal landscapes and the other of the striking bell tower of the historic Church of San Giovanni. These outdoor spaces are perfect for moments of absolute tranquility and for enjoying a sunset aperitif, creating unforgettable memories. Casa Serì is particularly suitable for romantic couples or small families seeking a corner of paradise where they can experience the authenticity of the Amalfi Coast, in a quiet setting yet strategically located for exploring the unique beauty of the area.",
          photogallery: "Photo gallery",
          morephotos: "More photos",
          booknow: "Book now",
          adults: "Adults",
          childs: "Childs",
          salotto: "Living room",
          terrazzavistacosta: "Terrace overlooking the coast",
          cucinacompleta: "Kitchen",
          zonapranzo: "Dining area",
          cameradaletto: "Bedroom",
          terrazzavistaterra: "Terrace with land view",
          bagnocompleto: "Bathroom",
          dovesiamo: "Location",
          salotto_detail: "Sofa bed | Air conditioning | Books and reading materials | TV | Heating",
          terrazzavistacosta_detail: "",
          cucinacompleta_detail: "Coffee Maker | Wine Glasses | Microwave Oven | Stovetop | Freezer",
          zonapranzo_detail: "Air conditioning | Heating | Dining table | Wine glasses",
          cameradaletto_detail: "Double bed | Bedding | Extra pillows and blankets | Iron | Hangers",
          terrazzavistaterra_detail: "",
          bagnocompleto_detail: "Hot water | Hair dryer | Bidet | Cleaning products | Heating | Shampoo | Body soap",
          troverai:"You will find: "
        },
      },
      it: {
        translation: {
          homeTitle: "Casa vacanze situata a Vietri sul Mare",
          subTitle: "Intero alloggio per 4 ospiti",
          subTitleDetail: "1 camera da letto (2 letti) | 1 bagno",
          detail:
            "Casa Serì Situata nel centro storico di Vietri sul Mare. Rappresenta una scelta perfetta per chi desidera immergersi nella bellezza e nella ricca cultura della meravigliosa Costiera Amalfitana. Situata nel cuore pulsante del centro storico di Vietri sul Mare, questa accogliente e affascinante abitazione offre un accesso immediato a tutte le innumerevoli meraviglie che il caratteristico borgo ha da offrire. La casa è composta da una camera matrimoniale, un luminoso e invitante soggiorno, e una cucina completamente attrezzata. Gli ambienti, eleganti e curati nei minimi dettagli, garantiscono un'atmosfera rilassante e confortevole, ideale per recuperare energia e ristoro dopo una giornata trascorsa ad esplorare le  meraviglie della Costiera Amalfitana. In aggiunta, due incantevoli terrazzi privati offrono viste mozzafiato; uno sui magnifici paesaggi costieri e l'altro sul suggestivo campanile della storica Chiesa di San Giovanni. Questi spazi esterni sono perfetti per momenti di assoluta tranquillità e per godere di un aperitivo al tramonto, creando ricordi indimenticabili. Casa Serì è particolarmente indicata per coppie romantiche o piccole famiglie in cerca di un angolo di paradiso, dove poter vivere l'autenticità della Costiera Amalfitana, in un contesto tranquillo ma strategicamente posizionato per visitare le bellezze uniche della zona.",
          photogallery: "Galleria foto",
          morephotos: "Altre foto",
          booknow: "Prenota ora",
          adults: "Adulti",
          childs: "Bambini",
          salotto: "Salotto",
          terrazzavistacosta: "Terrazza vista costa",
          cucinacompleta: "Cucina completa",
          zonapranzo: "Zona pranzo",
          cameradaletto: "Camera da letto",
          terrazzavistaterra: "Terrazza vista terra",
          bagnocompleto: "Bagno completo",
          dovesiamo: "Dove siamo",
          salotto_detail: "Divano letto | Aria condizionata | Libri e materiale di lettura | TV | Riscaldamento",
          terrazzavistacosta_detail: "",
          cucinacompleta_detail: "Bollitore Caffè | Calici da vino | Forno a microonde | Fornelli | Freezer",
          zonapranzo_detail: "Aria condizionata | Riscaldamento | Tavolo da pranzo | Calici da vino",
          cameradaletto_detail: "Letto a 2 piazze | Biancheria da letto | Cuscini e coperte extra | Ferro da stiro | Grucce",
          terrazzavistaterra_detail: "",
          bagnocompleto_detail: "Acqua calda | Asciugacapelli | Bidet | Prodotti per la pulizia | Riscaldamento | Shampoo | Sapone per il corpo",
          troverai:"Troverai: "
        },
      },
    },
  });
