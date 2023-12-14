import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore(
  "store",
  () => {
    const supabase = useSupabaseClient();
    const name = ref("Bob");
    const bilanzen = ref(null);
    const passiva = ref(null);
    const GuVs = ref(null);
    const Leistungsbudget = ref(null);
    const user = ref(null);
    const daisyTheme = ref("synthwave");
    const durchschnitt = ref(0);
    const noten = ref(0);
    const noten2 = ref(0);
    const noten3 = ref(0);
    const noten4 = ref(0);
    const NoteText = ref("");
    let cashFlow = ref(0);
    let workingCapital = ref(0);
    let jahresueberschuss = ref(0);
    let abschreibungen = ref(0);
    let umlaufvermoegen = ref(0);
    let kurzfristigeVerbindlichkeiten = ref(0);
    let fremdkapital = ref(0);
    let liquideMittel = ref(0);
    let currentYear = ref(0);
    let Erfolg = ref(0);
    let games = ref([
      {
        id: "0",
        name: "Test",
        key: "Test",
        date: "2021-05-01",
        day: 1
      },
      {
        id: "1",
        name: "Spiel 1",
        key: "game1",
        date: "2021-05-01",
        day: 1
      },
      {
        id: "2",
        name: "Spiel 2",
        key: "game2",
        date: "2021-05-02",
        day: 1
      },
      {
        id: "3",
        name: "Spiel 3",
        key: "game3",
        date: "2021-05-03",
        day: 1
      }
    ]);
    let currentGame = ref("no game selected");
    let test = ref("test");

    const eigenKapital = computed(() => {
      let EK = ref(
        (passiva._rawValue[currentYear.value]["A._Eigenkapital"] * 100) /
        (bilanzen._rawValue[currentYear.value]["A._Anlagevermögen"] +
          bilanzen._rawValue[currentYear.value]["B._Umlaufvermögen"])
      );

      if (EK.value > 40) {
        noten.value = 1;
      } else if (EK.value > 30) {
        noten.value = 2;
      } else if (EK.value > 20) {
        noten.value = 3;
      } else if (EK.value >= 8) {
        noten.value = 4;
      } else {
        noten.value = 5;
      }

      return noten.value;
    });

    const betriebsErfolg = computed(() => {
      Erfolg.value =
        GuVs._rawValue[currentYear.value]["1._Umsatzerlöse"] +
        GuVs._rawValue[currentYear.value]["5._Aufwendungen_für_Material"] +
        GuVs._rawValue[currentYear.value]["6._Personalaufwand"] +
        GuVs._rawValue[currentYear.value][
        "8._sonstige_betriebliche_Aufwendungen"
        ];
      let BE = ref(
        (Erfolg.value * 100) /
        GuVs._rawValue[currentYear.value]["1._Umsatzerlöse"]
      );

      if (BE.value > 8) {
        noten2.value = 1;
      } else if (BE.value > 6) {
        noten2.value = 2;
      } else if (BE.value > 4) {
        noten2.value = 3;
      } else if (BE.value > 2) {
        noten2.value = 4;
      } else {
        noten2.value = 5;
      }

      return noten2.value;
    });

    const Verschuldungsdauer = computed(() => {
      fremdkapital.value =
        passiva._rawValue[currentYear.value]["D._Verbindlichkeiten"];
      liquideMittel.value =
        bilanzen._rawValue[currentYear.value][
        "IV._Kassabestand,_Guthaben_bei_Kreditinstituten"
        ];
      jahresueberschuss.value =
        GuVs._rawValue[currentYear.value]["18._Jahresüberschuss"];
      abschreibungen.value =
        GuVs._rawValue[currentYear.value][
        "7._Abschreibungen_auf_immaterielle_Gegenstände"
        ];
      umlaufvermoegen.value =
        bilanzen._rawValue[currentYear.value]["B._Umlaufvermögen"];
      kurzfristigeVerbindlichkeiten.value =
        passiva._rawValue[currentYear.value]["D._Verbindlichkeiten"];
      workingCapital =
        umlaufvermoegen.value - kurzfristigeVerbindlichkeiten.value;
      cashFlow.value =
        jahresueberschuss.value + abschreibungen.value + workingCapital;
      let VD = ref((fremdkapital.value - liquideMittel.value) / cashFlow.value);

      if (VD.value < 3) {
        noten3.value = 1;
      } else if (VD.value < 5) {
        noten3.value = 2;
      } else if (VD.value <= 10) {
        noten3.value = 3;
      } else if (VD.value <= 15) {
        noten3.value = 4;
      } else {
        noten3.value = 5;
      }

      return noten3.value;
    });

    const cashFlowQuote = computed(() => {
      jahresueberschuss.value =
        GuVs._rawValue[currentYear.value]["18._Jahresüberschuss"];
      abschreibungen.value =
        GuVs._rawValue[currentYear.value][
        "7._Abschreibungen_auf_immaterielle_Gegenstände"
        ];
      umlaufvermoegen.value =
        bilanzen._rawValue[currentYear.value]["B._Umlaufvermögen"];
      kurzfristigeVerbindlichkeiten.value =
        passiva._rawValue[currentYear.value]["D._Verbindlichkeiten"]; // Gesamte Verbindlichkeiten als Annahme
      workingCapital =
        umlaufvermoegen.value - kurzfristigeVerbindlichkeiten.value;
      cashFlow.value =
        jahresueberschuss.value + abschreibungen.value + workingCapital;
      let CF = ref(
        (cashFlow.value * 100) /
        GuVs._rawValue[currentYear.value]["1._Umsatzerlöse"]
      );

      if (CF.value > 10) {
        noten4.value = 1;
      } else if (CF.value > 8) {
        noten4.value = 2;
      } else if (CF.value > 5) {
        noten4.value = 3;
      } else if (CF.value >= 2) {
        noten4.value = 4;
      } else {
        noten4.value = 5;
      }

      return noten4.value;
    });

    const NoteBerechnen = computed(() => {
      durchschnitt.value =
        (eigenKapital.value +
          betriebsErfolg.value +
          Verschuldungsdauer.value +
          cashFlowQuote.value) /
        4;
      if (durchschnitt.value >= 4.5) {
        NoteText.value = "Nicht Genügend!";
      } else if (durchschnitt.value >= 3.5) {
        NoteText.value = "Genügend!";
      } else if (durchschnitt.value >= 2.5) {
        NoteText.value = "Befriedigend!";
      } else if (durchschnitt.value >= 1.5) {
        NoteText.value = "Gut!";
      } else {
        NoteText.value = "Sehr Gut!";
      }

      return NoteText.value;
    });

    async function loadBilanzen() {
      const res = await supabase.from("Aktiva").select("*");
      bilanzen.value = res.data;
    }

    async function loadPassiva() {
      const res = await supabase.from("Passiva").select("*");
      passiva.value = res.data;
    }

    async function loadUser() {
      const res = await supabase.from("User").select("*");
      user.value = res.data;
    }

    async function loadGuVs() {
      const res = await supabase.from("GuVs").select("*");
      GuVs.value = res.data;
    }

    async function loadLeistungsbudget() {
      const res = await supabase.from("Leistungsbudget2").select("*");
      Leistungsbudget.value = res.data;
    }
    return {
      name,
      bilanzen,
      eigenKapital,
      betriebsErfolg,
      Verschuldungsdauer,
      cashFlowQuote,
      currentYear,
      NoteBerechnen,
      GuVs,
      passiva,
      Leistungsbudget,
      daisyTheme,
      user,
      durchschnitt,
      noten,
      noten2,
      noten3,
      noten4,
      NoteText,
      games,
      currentGame,
      test,
      loadBilanzen,
      loadGuVs,
      loadPassiva,
      loadUser,
      loadLeistungsbudget,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
