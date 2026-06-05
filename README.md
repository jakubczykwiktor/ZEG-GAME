# GRA LABIRYNT 
### Prosta gra typu labirynt tworzona w JavaScript, HTML i CSS.
##### Czas realizacji: 10.04.2026-08.06.2026.
##### Twórcy Jakubczy Wiktor 2P  Mateusz Kwapik 2P


 FABUŁA: 
Jesteś Karim — poszukiwaczem przygód, który pewnego dnia wpada w pułapkę i ląduje w starożytnym podziemnym labiryncie. Jedyne wyjście prowadzi w górę — przez 5 pięter wypełnionych korytarzami, zamkniętymi drzwiami i niebezpiecznym Żmijem-Strażnikiem.
Na każdym piętrze musisz znaleźć klucz, rozwiązać magiczną zagadkę i dotrzeć do wyjścia — zanim Żmij cię dorwie. Każde spotkanie z nim kosztuje cię jedno z trzech serc.
Im głębiej, tym trudniejszy labirynt i sprytniejszy Żmij. Czy uda ci się wydostać na powierzchnię i odzyskać wolność?



𓋹 Mechaniki Gry
 Klucz i Wyjście

Każdy poziom labiryntu skrywa złoty klucz. Dopóki go nie odnajdziesz, przejście do kolejnego poziomu pozostanie zamknięte.

Po zdobyciu klucza musisz jeszcze odnaleźć starożytny zwój z zagadką i udzielić poprawnej odpowiedzi. Dopiero wtedy otworzy się droga do następnego etapu.

𓁹 Zagadki

Na każdym poziomie znajduje się pole z zagadką.

 Poprawna odpowiedź pozwala kontynuować grę.

 Błędna odpowiedź kończy rozgrywkę.

 System Życia

Gracz rozpoczyna grę z 3 punktami życia.

Życie tracisz za:

dotknięcie węża,
wejście w pułapkę.

Na mapach można znaleźć apteczki, które przywracają +1 HP.

💀 Śmierć

Jeżeli liczba punktów życia spadnie do zera, gra kończy się.

Możesz rozpocząć nową rozgrywkę i ponownie spróbować przejść cały labirynt.

𓌀 Poziomy
Poziom	Rozmiar mapy	Zagrożenia
1	9x9	1 wąż
2	11x11	1 wąż, pułapka
3	13x13	1 wąż, pułapki
4	15x15	1 wąż, pułapki, apteczka
5	17x17	trudniejszy układ
6	19x19	więcej ślepych uliczek
7	21x21	rozbudowany labirynt
8	23x23	największy poziom

Każdy kolejny poziom jest większy i trudniejszy do przejścia.

 Węże Strażnicy

Starożytne węże strzegą wyjścia z piramidy.

Poruszają się po labiryncie i utrudniają dotarcie do celu.

Dotknięcie węża zabiera 1 punkt życia.
Po utracie życia gracz wraca na początek poziomu.
Przy rozpoczęciu nowego poziomu wąż pojawia się ponownie w prawym dolnym rogu planszy.
 Pułapki

Na wyższych poziomach pojawiają się niebezpieczne pola.

Wejście na pułapkę powoduje utratę jednego życia.

Aby ukończyć grę, należy uważać na każdy krok.

 Apteczki

Na wybranych poziomach można znaleźć apteczkę.

Po wejściu na jej pole:

gracz odzyskuje +1 HP,
apteczka znika z mapy.
 Sterowanie
Klawisz	Akcja
↑ ↓ ← →	Ruch
W A S D	Ruch
Reset	Rozpoczęcie gry od poziomu 1
 Technologie
HTML5 Canvas
CSS3
Vanilla JavaScript

Projekt został wykonany bez użycia dodatkowych frameworków.

 Struktura Projektu
/
├── index.html
├── style.css
├── map.js
├── player.js
├── enemy.js
├── items.js
├── puzzle.js
└── main.js
 Uruchomienie
Pobierz lub sklonuj repozytorium.
Otwórz projekt w Visual Studio Code.
Uruchom za pomocą rozszerzenia Live Server.
Kliknij Graj.
Znajdź klucz, rozwiąż zagadkę i przejdź do kolejnego poziomu.
 Cel Gry

Przemierz kolejne poziomy starożytnego labiryntu.

 Znajdź klucz.
 Rozwiąż zagadkę.
 Unikaj węży.
 Omijaj pułapki.
❤️ Zbieraj apteczki.

Dotrzyj do wyjścia i ukończ wszystkie poziomy.
