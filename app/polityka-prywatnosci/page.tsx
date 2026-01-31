import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Polityka prywatności | Bolsia",
  description: "Polityka prywatności i plików cookies Bolsia – Premium Beauty Academy & Studio w Krakowie.",
}

const POLITYKA_DATA = {
  dataPublikacji: "31.01.2026",
  administrator: "Bolsia",
  adres: "ul. Topolowa 33, 31-505 Kraków",
  email: "kontakt@bolsia.pl",
  serwis: "www.bolsia.pl",
}

export default function PolitykaPrywatnosciPage() {
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
        <h1 className="font-serif text-3xl font-semibold mb-2">Polityka prywatności</h1>
        <p className="text-muted-foreground text-sm mb-10">
          Polityka prywatności i plików cookies – {POLITYKA_DATA.serwis}
        </p>

        <p className="text-sm text-muted-foreground mb-10">
          Data publikacji: {POLITYKA_DATA.dataPublikacji}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            Twoje dane osobowe oraz ich ochronę traktujemy odpowiedzialnie. Niniejsza Polityka
            prywatności dotyczy danych osobowych przetwarzanych w związku z działalnością Bolsia
            (Premium Beauty Academy & Studio). Dokument opiera się na przepisach z zakresu ochrony
            danych osobowych, w tym RODO (rozporządzenie UE 2016/679) oraz ustawy o ochronie danych
            osobowych. Treść Polityki może ulec zmianie; o zmianach będziemy informować i podawać
            aktualną wersję dokumentu.
          </p>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Kontakt</h2>
            <p>
              W każdej sprawie związanej z ochroną Twoich danych osobowych możesz skontaktować
              się z nami pod adresem: <strong>{POLITYKA_DATA.email}</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych przetwarzanych w związku z działalnością
              serwisu jest <strong>{POLITYKA_DATA.administrator}</strong>, {POLITYKA_DATA.adres}.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Jakie dane przetwarzamy i w jakim celu?</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Kontakt</strong> – adres e-mail, imię i nazwisko, numer telefonu oraz
                treść wiadomości. Podstawa: zgoda (art. 6 ust. 1 lit. a RODO) oraz uzasadniony
                interes (art. 6 ust. 1 lit. f RODO) w celu udzielenia odpowiedzi i utrzymania
                komunikacji.
              </li>
              <li>
                <strong>Rezerwacja wizyt i realizacja usług</strong> – imię i nazwisko, adres
                e-mail, numer telefonu, adres. Podstawa: wykonanie umowy (art. 6 ust. 1 lit. b RODO).
              </li>
              <li>
                <strong>Wystawienie faktury i obowiązki prawno-podatkowe</strong> – dane niezbędne
                do faktury. Podstawa: obowiązek prawny (art. 6 ust. 1 lit. c RODO).
              </li>
              <li>
                <strong>Reklamacje i odstąpienie od umowy</strong> – dane zawarte w reklamacji,
                numer rachunku bankowego w przypadku zwrotu. Podstawa: wykonanie umowy oraz
                obowiązek prawny (art. 6 ust. 1 lit. b i c RODO).
              </li>
              <li>
                <strong>Marketing (newsletter)</strong> – adres e-mail, imię. Podstawa: zgoda
                (art. 6 ust. 1 lit. a RODO).
              </li>
              <li>
                <strong>Zarządzanie stroną i analityka</strong> – adres IP, zachowanie na stronie.
                Podstawa: uzasadniony interes (art. 6 ust. 1 lit. f RODO) oraz zgoda w zakresie
                plików cookies (art. 6 ust. 1 lit. a RODO).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Twoje prawa</h2>
            <p>
              Przysługują Ci: prawo dostępu do danych, sprostowania, usunięcia („bycia zapomnianym”),
              ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu, cofnięcia
              zgody w dowolnym momencie oraz prawo do skargi do Prezesa Urzędu Ochrony Danych
              Osobowych. Aby skorzystać z tych praw, napisz na adres: {POLITYKA_DATA.email}.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Odbiorcy danych</h2>
            <p>
              Twoje dane mogą być przekazywane podmiotom wspierającym działalność serwisu (np.
              hosting, system rezerwacji, operatorzy płatności, narzędzia analityczne). Wybieramy
              podmioty dbające o bezpieczeństwo danych. W przypadku przekazywania danych poza
              EOG stosowane są odpowiednie zabezpieczenia (np. standardowe klauzule umowne).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Czas przechowywania danych</h2>
            <p>
              Dane przechowujemy przez okres niezbędny do realizacji celów (m.in. wykonanie
              umowy, obowiązki prawne, dochodzenie roszczeń). Dane na potrzeby rozliczeń i faktur
              – zgodnie z przepisami podatkowymi. Dane marketingowe – do momentu wycofania zgody.
              Logi i analityka – zgodnie z polityką stosowanych narzędzi lub do czasu osiągnięcia
              celu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Cookies i narzędzia na stronie</h2>
            <p>
              Strona może wykorzystywać pliki cookies oraz narzędzia analityczne (np. Google
              Analytics) w celu poprawy działania serwisu i analizy ruchu. Podczas pierwszej
              wizyty wyświetlana jest informacja o cookies; zgodę można w każdej chwili zmienić
              w ustawieniach przeglądarki. Szczegóły dotyczące konkretnych narzędzi są dostępne
              w ich politykach prywatności.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold mt-10 mb-4">Postanowienia końcowe</h2>
            <p>
              Treść Polityki może ulec zmianie (np. w związku ze zmianą przepisów lub zakresu
              usług). Aktualna wersja jest zawsze dostępna na tej stronie. W razie wątpliwości
              co do przetwarzania danych skontaktuj się z nami: {POLITYKA_DATA.email}.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          Ostatnia aktualizacja: {POLITYKA_DATA.dataPublikacji}
        </p>
      </main>
    </div>
  )
}
