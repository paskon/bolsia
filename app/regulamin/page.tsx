import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regulamin | Bolsia",
  description: "Regulamin sklepu i świadczenia usług Bolsia – Premium Beauty Academy & Studio w Krakowie.",
}

const REGULAMIN_DATA = {
  wersja: "1",
  dataObowiazywania: "31.01.2026",
  uslugodawca: "Bolsia",
  adres: "ul. Topolowa 33, 31-505 Kraków",
  email: "kontakt@bolsia.pl",
  sklep: "www.bolsia.pl",
}

export default function RegulaminPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="mx-auto max-w-3xl px-6 py-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Powrót do strony głównej
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-serif text-3xl font-semibold mb-2">Regulamin</h1>
        <p className="text-muted-foreground text-sm mb-10">
          REGULAMIN SKLEPU I ŚWIADCZENIA USŁUG BOLSIA
        </p>

        <table className="w-full text-sm border-collapse mb-10">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium text-muted-foreground">Wersja dokumentu</td>
              <td className="py-2">{REGULAMIN_DATA.wersja}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium text-muted-foreground">Data obowiązywania</td>
              <td className="py-2">od {REGULAMIN_DATA.dataObowiazywania}</td>
            </tr>
          </tbody>
        </table>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            Niniejszy Regulamin dotyczy świadczenia usług oraz udostępniania treści cyfrowych
            i usług cyfrowych w ramach serwisu Bolsia (Premium Beauty Academy & Studio).
            W Regulaminie znajdziesz m.in.: zasady zawarcia umowy, warunki umowy, postanowienia
            dotyczące konsumentów oraz informacje o sposobie reklamacji i odstąpienia od umowy.
            Informacje dostępne na stronie nie stanowią oferty w rozumieniu Kodeksu cywilnego,
            lecz zaproszenie do zawarcia umowy. W razie pytań skontaktuj się z nami:{" "}
            <a href={`mailto:${REGULAMIN_DATA.email}`} className="text-foreground underline">
              {REGULAMIN_DATA.email}
            </a>
            .
          </p>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Kontakt</h2>
            <p>
              W każdej sprawie związanej z zakupami i funkcjonowaniem serwisu możesz skontaktować
              się z nami pod adresem: <strong>{REGULAMIN_DATA.email}</strong>, telefonicznie:{" "}
              <strong>+48 573 000 873</strong>, lub listownie: {REGULAMIN_DATA.uslugodawca},{" "}
              {REGULAMIN_DATA.adres}.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Usługodawca</h2>
            <p>
              Usługodawcą jest <strong>{REGULAMIN_DATA.uslugodawca}</strong>, {REGULAMIN_DATA.adres}.
              Serwis internetowy dostępny pod adresem: {REGULAMIN_DATA.sklep}.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Kogo dotyczy Regulamin?</h2>
            <p>
              Regulamin dotyczy osób korzystających z usług i treści udostępnianych w ramach
              serwisu Bolsia – zarówno konsumentów, przedsiębiorców na prawach konsumenta, jak
              i pozostałych przedsiębiorców.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Zawarcie i wykonanie umowy</h2>
            <p>
              Umowa może być zawarta poprzez złożenie zamówienia na stronie, rezerwację wizyty
              (np. przez system Booksy) lub kontakt e-mail/telefoniczny. Potwierdzenie przyjęcia
              zamówienia lub rezerwacji następuje w formie wiadomości e-mail lub innej uzgodnionej
              z Klientem. Przedmiotem umowy są usługi kosmetyczne, szkolenia oraz ewentualnie
              treści lub usługi cyfrowe oferowane przez Bolsia, na warunkach podanych przy
              składaniu zamówienia.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Płatności</h2>
            <p>
              Ceny usług i produktów podane są w polskich złotych (PLN), brutto. Sposób i termin
              płatności określane są przy składaniu zamówienia lub rezerwacji. Bolsia może
              korzystać z zewnętrznych operatorów płatności; w takim przypadku stosuje się
              ich regulaminy w zakresie realizacji płatności.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Odstąpienie od umowy</h2>
            <p>
              Konsument oraz przedsiębiorca na prawach konsumenta mają prawo odstąpić od umowy
              bez podawania przyczyny w terminie 14 dni od dnia jej zawarcia, z zastrzeżeniem
              wyjątków przewidzianych w ustawie o prawach konsumenta (m.in. gdy usługa została
              w pełni wykonana za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia).
              Odstąpienie można złożyć pisemnie lub drogą e-mail na adres {REGULAMIN_DATA.email}.
              W przypadku odstąpienia zwracamy wszystkie otrzymane płatności w taki sam sposób,
              w jaki zostały dokonane, chyba że konsument wyraźnie wskaże inny sposób zwrotu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Reklamacje</h2>
            <p>
              Reklamacje można składać na adres {REGULAMIN_DATA.email} lub listownie na adres
              Usługodawcy. Zalecamy podanie w reklamacji: rodzaju i daty wystąpienia nieprawidłowości,
              żądania oraz danych kontaktowych. Usługodawca rozpatruje reklamacje niezwłocznie,
              nie później niż w terminie 14 dni od dnia jej otrzymania.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Postanowienia końcowe</h2>
            <p>
              W sprawach nieuregulowanych niniejszym Regulaminem stosuje się powszechnie obowiązujące
              przepisy prawa polskiego, w szczególności Kodeksu cywilnego oraz ustawy o prawach
              konsumenta. Regulamin może ulec zmianie z ważnych przyczyn; Klienci posiadający
              konto zostaną powiadomieni e-mailem. Do umów zawartych przed zmianą stosuje się
              Regulamin obowiązujący w dacie zawarcia umowy. Spory z konsumentami mogą być
              rozstrzygane polubownie; konsument ma także możliwość skorzystania z platformy
              ODR: ec.europa.eu/consumers/odr.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Ostatnia aktualizacja: {REGULAMIN_DATA.dataObowiazywania}
        </p>
      </main>
    </div>
  )
}
