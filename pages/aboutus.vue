<script>
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="text-black flex justify-center py-8 px-16">
    <div class="w-full max-w-[80rem] flex flex-col space-y-8 text-lg">
      <h1 class="text-4xl font-bold text-center mb-8">Über Uns - Das Team hinter dem Unternehmensplanspiel</h1>
      <h2 class="text-3xl font-bold">Einleitung:</h2>
      <p class="text-lg">
        Wir, vier engagierte Schüler der HAK-St. Johann, haben uns einer besonderen Herausforderung gestellt: die
        Entwicklung eines innovativen Unternehmensplanspiels für unseren Auftraggeber Herrn Wallhaimer. Dieses Projekt,
        unsere Diplomarbeit, begann im September 2023 und fand seinen Abschluss im März 2024.
      </p>

      <h2 class="text-3xl font-bold">Unser Team:</h2>
      <p class="text-lg">
        Unser Team besteht aus vier Mitgliedern, jeder mit einzigartigen Fähigkeiten und einem gemeinsamen Ziel. Wir
        teilen
        die Leidenschaft für das Projekt und die Entschlossenheit, es trotz aller Herausforderungen erfolgreich zu
        meistern.
      </p>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Manuel.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Manuel Terstena</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p>06.04.2004</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>manuelterstena04@gmail.com</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Zuständigkeit:</h3>
            <p>Content Management-Erstellung des Designs</p>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Daniel.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Daniel Daxer</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p>06.09.2003</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>daniel.daxer34@gmail.com</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Zuständigkeit:</h3>
            <p>Web-Development-Umsetzung des Designs</p>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Gergö.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Gergö Ebert</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p>26.03.2005</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>gergoebert032@6gmail.com</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Zuständigkeit:</h3>
            <p>Web-Development-Aufbau des Spieles</p>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Josef.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Josef Saller</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p>26.12.2004</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>saller.josef@johak.at</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Zuständigkeit:</h3>
            <p>Datenmodellierung und Datenbankverwaltung</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold">Unsere Reise:</h2>
      <p class="text-lg">
        Seit Beginn unserer Reise haben wir unzählige Stunden mit Planung, Programmierung und Feinabstimmung verbracht. Es
        gab schlaflose Nächte und Momente, in denen unsere Nerven auf die Probe gestellt wurden. Doch diese Erfahrungen
        haben uns nur stärker gemacht und unsere Zusammenarbeit gefestigt.
      </p>

      <h2 class="text-3xl font-bold">Unterstüzung durch Lehrer:</h2>
      <p class="text-lg">
        Ein besonderer Dank gilt unseren Lehrern Herrn Seiwald und Frau Ellmer. Herr Seiwald war eine stetige
        Unterstützung und stand uns mit Rat und Tat zur Seite. Frau Ellmer, obwohl ihre Methoden manchmal herausfordernd
        waren, hat uns ebenfalls auf ihre Weise geprägt. Beide haben auf unterschiedliche Weise zu unserer Entwicklung
        beigetragen.
      </p>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Manuel.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Dr. Markus Seiwald</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p></p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>seiwald.markus@johak.at</p>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Manuel.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>MMag. Monika Ellmer</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p></p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>ellmer.monika@johak.at</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold">Unterstüzung durch Mitschüler:</h2>
      <p class="text-lg">
        Darüber hinaus waren wir Teil eines größeren Teams, zu dem auch Dorarta, Julia und Michaela aus unserer
        Parallelklasse gehörten. Sie waren maßgeblich an der Materialbeschaffung, der Berechnung von Ausgangsdaten und der
        Entwicklung der Spielzüge beteiligt.
      </p>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Manuel.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Dorata Salami</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p></p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>islami.dorata@johak.at</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Zuständigkeit:</h3>
            <p></p>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Manuel.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Julia Lechner</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p></p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>lechner.julia@johak.at</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Zuständigkeit:</h3>
            <p></p>
          </div>
        </div>
      </div>

      <div class="flex flex-row space-x-8">
        <img src="../assets/Manuel.jpg" class="w-[250px] h-[300px] object-cover object-center" />
        <div class="flex flex-col space-y-6">
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Name:</h3>
            <p>Michaela Frommer</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Geburtsdatum:</h3>
            <p></p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">E-Mail:</h3>
            <p>frommer.michaela@johak.at</p>
          </div>
          <div class="flex flex-row space-x-2">
            <h3 class="font-bold">Zuständigkeit:</h3>
            <p></p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold">Zusammenhalt und Teamarbeit:</h2>
      <p class="text-lg">
        Unser Team zeichnet sich durch starken Zusammenhalt und gegenseitige Unterstützung aus. Jeder von uns war bereit,
        über seine Aufgaben hinauszugehen und zu helfen, wo es nötig war. Diese Teamdynamik war entscheidend für unseren
        Erfolg, da wir oft Probleme lösen konnten, die einem Einzelnen entgangen wären.
      </p>

      <img src="../assets/Manuel.jpg" class="h-[400px]" />

      <h2 class="text-3xl font-bold">Abschluss:</h2>
      <p class="text-lg">
        Diese Diplomarbeit ist mehr als nur ein Projekt für uns – es ist eine Reise der persönlichen und fachlichen
        Entwicklung. Wir sind stolz auf das, was wir bisher erreicht haben, und freuen uns darauf, unser Spiel im nächsten
        Jahr fertigzustellen.
      </p>

      <h2 class="text-3xl font-bold">Schlusswort:</h2>
      <p class="text-lg h-[300px]">
        Wir danken allen, die uns auf dieser spannenden Reise unterstützt haben. Bleiben Sie dran, um zu sehen, wie unser
        Unternehmensplanspiel Form annimmt!
      </p>
    </div>
  </div>
</template>
