---
title: 'Epikur: Argument gegen die Fürsorglichkeit Gottes' 
abstract: 'Epikur (fl. 300 v.Chr.) argumentierte dafür, dass Gott nicht fürsorglich ist, daher, dass es Übel in der Welt gibt und Gott sie beseitigen könnte. Das ist uns durch Laktanz (fl. 300 n.Chr.) überliefert worden. Epikur begründete somit eine Lösung des Theodizee-Problems, wie es einen perfekten Gott geben kann, wo es doch Leid in der Welt gibt. Epikurs Argument wird im Folgenden informell mit zusätzlichen Zwischenkonklusionen rekonstruiert. Dem Kommentar folgt eine aussagenlogische Formalisierung. Obwohl Laktanz das Argument bereits klar und einfach wiedergegeben hat, ist es vorteilhaft, das Argument detailliert zu rekonstruieren. Einer der Vorteile ist, dass sich verschiedene Lösungen des Theodizee-Problems aufs rekonstruierte Argument beziehen lassen.'
description: 'Epikur (fl. 300 v.Chr.) argumentierte dafür, dass Gott nicht fürsorglich ist, daher, dass es Übel in der Welt gibt und Gott sie beseitigen könnte. Das ist uns durch Laktanz (fl. 300 n.Chr.) überliefert worden. Epikur begründete somit eine Lösung des Theodizee-Problems, wie es einen perfekten Gott geben kann, wo es doch Leid in der Welt gibt. Epikurs Argument wird im Folgenden informell mit zusätzlichen Zwischenkonklusionen rekonstruiert. Dem Kommentar folgt eine aussagenlogische Formalisierung. Obwohl Laktanz das Argument bereits klar und einfach wiedergegeben hat, ist es vorteilhaft, das Argument detailliert zu rekonstruieren. Einer der Vorteile ist, dass sich verschiedene Lösungen des Theodizee-Problems aufs rekonstruierte Argument beziehen lassen.'
date: 2023-04-14
authors:
  - name: Tobias Martin
    affiliation: WWU Münster
    email: tobias.martin@uni-muenster.de
tags: 
  - Epikur
  - Laktanz
  - Latein
  - Philosophie
  - Sek I
  - Sek II
  - Uni
  - informell
  - formal
  - Aussagenlogik
  - Theodizee
  - Religionsphilosophie
lang: de
slug: Martin_ArgOnl-2023-01
---

## Bibliographische Angaben

Lactantius, *De ira dei* 13,20–22.


## Textstelle

Laktanz schreibt (a. a. O., 13,20–22; meine Übersetzung):

| *Latein* | *Deutsch* |
| ------ | ------- |
| [1] quod si haec ratio vera est, quam Stoici nullo modo videre potuerunt, dissolvitur etiam illud argumentum Epicuri. | [1] Wenn dieser Grund wahr ist, den die Stoiker auf keine Weise sehen konnten, dann ist auch folgendes Argument Epikurs entkräftet. |
| [2] „deus“ inquit „aut vult tollere mala et non potest aut potest et non vult aut neque vult neque potest aut et vult et potest. | [2] „Gott“, sagt er, „will entweder die Übel beseitigen und kann es nicht, oder er kann es und will nicht, oder weder will noch kann er es, oder sowohl will als auch kann er es. |
| [3] si vult et non potest, inbellicus est, quod in deum non cadit; | [3] Wenn er es will und nicht kann, dann ist er schwach. Das trifft auf Gott nicht zu. |
| [4] si potest et non vult, invidus, quod aeque alienum est a deo; | [4] Wenn er es kann und nicht will, ist er nicht fürsorglich. Auch das liegt Gott fern. |
| [5] si neque vult neque potest, et invidus et inbellicus est ideoque nec deus; | [5] Wenn er es weder will noch kann, ist er sowohl nicht fürsorglich als auch schwach und daher nicht Gott. |
| [6] si et vult et potest, quod solum deo convenit, unde ergo sunt mala aut cur illa non tollit? “ | [6] Wenn er es sowohl will als auch kann – das allein passt zu Gott –, woher kommen dann bitte die Übel bzw. weshalb beseitigt er sie nicht? “ |
| [7] scio plerosque philosophorum qui providentiam defendunt, hoc argumento perturbari solere et invitos paene adigi ut deum nihil curare fateantur, quod maxime quaerit Epicurus. | [7] Ich weiß, dass die meisten der Philosophen, die Gottes Fürsorge verteidigen, von diesem Argument für gewöhnlich ganz durcheinandergebracht werden und sich wider Willen fast dazu drängen lassen zuzugeben, dass Gott nicht fürsorglich ist – worauf Epikur vor allem abzielt. |

## Argumentrekonstruktion

Das bloße Argument, das Epikur vorzubringen scheint, rekonstruiere ich mit sieben Prämissen und der Konklusion, dass Gott nicht fürsorglich ist. (Die rechte Spalte verweist auf die jeweiligen Sätze in der oben zitierten Textstelle.)

|  |  |  |
|--|------------|--|
| **P1:** | Entweder will Gott die Übel beseitigen, aber kann nicht, oder er kann es, aber will nicht, oder er will es nicht und kann es nicht, oder er will und kann es. | [2] |
| **P2:** | Wenn Gott die Übel beseitigen will, aber nicht kann, dann ist er schwach. | [3] |
| **P3:** | Es ist nicht so, dass Gott schwach ist. | [3] |
| **P4:** | Wenn Gott die Übel beseitigen kann, aber nicht will, dann ist er nicht fürsorglich. | [4] |
| **P5:** | Wenn Gott die Übel nicht beseitigen will und nicht kann, dann ist er sowohl nicht fürsorglich als auch schwach. | [5] |
| **P6:** | Wenn Gott die Übel beseitigen will und kann, dann gibt es keine Übel. | [6, impl] |
| **P7:** | Es ist nicht so, dass es keine Übel gibt. | [6, impl] |
| **K:**  | Gott ist nicht fürsorglich. (AL: P1–P7) | [7] |

Mittels zusätzlichen Zwischenkonklusionen und der Angabe von Schlussregeln will ich nun leichter erkennen lassen, dass die Konklusion deduktiv gültig aus den Prämissen folgt. Für einen besseren Flow schiebe ich die vierte Prämisse ans Ende.

|  |  |  |
|--|------------|--|
| **P1:** | Entweder will Gott die Übel beseitigen, aber kann nicht, oder er kann es, aber will nicht, oder er will es nicht und kann es nicht, oder er will und kann es. | [2] |
| **P2:** | Wenn Gott die Übel beseitigen will, aber nicht kann, dann ist er schwach. | [3] |
| **P3:** | Es ist nicht so, dass Gott schwach ist. | [3] |
| **Z1:** | Es ist nicht so, dass Gott die Übel beseitigen will, aber nicht kann. (m.t.: P2, P3) | [impl] |
| **Z2:** | Entweder kann Gott die Übel beseitigen, aber will nicht, oder er will es nicht und kann es nicht, oder er will und kann es. (DS: P1, Z1) | [impl] |
| **Z3:** | Es ist nicht so, dass Gott sowohl nicht fürsorglich ist als auch schwach. (AL: P3) | [impl] |
| **P5:** | Wenn Gott die Übel nicht beseitigen will und nicht kann, dann ist er sowohl nicht fürsorglich als auch schwach. | [5] |
| **Z4:** | Es ist nicht so, dass Gott die Übel nicht beseitigen will und nicht kann. (m.t.: Z3, P5) | [impl] |
| **Z5:** | Entweder kann Gott die Übel beseitigen, aber will nicht, oder er will und kann es. (DS: Z2, Z4) | [impl] |
| **P6:** | Wenn Gott die Übel beseitigen will und kann, dann gibt es keine Übel. | [6, impl] |
| **P7:** | Es ist nicht so, dass es keine Übel gibt. | [6, impl] |
| **Z6:** | Es ist nicht so, dass Gott die Übel beseitigen will und kann. (m.t.: P6, P7) | [impl] |
| **Z7:** | Gott kann die Übel beseitigen, aber will nicht. (DS: Z5, Z6) | [impl] |
| **P4:** | Wenn Gott die Übel beseitigen kann, aber nicht will, dann ist er nicht fürsorglich. | [4] |
| **K:**  | Gott ist nicht fürsorglich. (m.p.: Z7, P4) | [7] |

## Kommentar

Was ist dieser Grund, auf den Laktanz zu Beginn unserer Textstelle zurückweist? Zuvor (a. a. O., 12,5–13,19) ist Laktanz der Frage nachgegangen, weshalb Gott die Welt geschaffen habe. Er befürwortet die Auffassung der Stoiker, dass Gott die Welt für uns Menschen geschaffen hat. Immerhin lasse sich feststellen, dass alles in der Welt uns irgendwie nützt. Dann diskutiert er den Einwand der Akademiker, dass es Übel in der Welt gibt, die uns schaden. Er verwirft die Entgegnung der Stoiker, wir würden den Nutzen dieser Übel nur noch nicht kennen, es würde ihn aber geben. Stattdessen sei so zu begründen: Es gibt Übel in der Welt, weil Gott die Menschen wie ein Abbild von sich und somit mit Vernunft begabt geschaffen hat; doch es kann niemand mit Vernunft begabt sein, ohne dass es Güter und Übel in der Welt gibt, die er mittels seiner Vernunft unterscheiden kann. Das ist der Grund, von dem Laktanz sagt, er sei den Stoikern entgangen.

Die erste bemerkenswerte Schwierigkeit daran, Epikurs[^1] Argument zu rekonstruieren, mag darin bestehen, dessen Konklusion zu identifizieren. Denn das Zitat, auf das Laktanz mit „folgendes Argument Epikurs“ [1] vorverweist und mit „von diesem Argument“ [7] zurückweist, scheint keine Konklusion zu nennen, für die Epikur argumentiert. Vielmehr deutet sich im Zitat ein Oktalemma an: acht Aussagen, von denen jede für sich betrachtet wahr zu sein scheint, die aber nicht zusammen wahr sein können. Denn neben unseren Prämissen P1–P7 findet sich die Aussage, dass Gott fürsorglich ist [4; vgl. 5 & 6]. Das ist aber das kontradiktorische Gegenteil unser Konklusion K, die deduktiv gültig aus den Prämissen folgt. Wir müssen über das Zitat hinauslesen, um von Laktanz zu erfahren, dass Epikur dafür argumentiert hat, dass Gott *nicht* fürsorglich ist [7].

Ist die Konklusion erst einmal identifiziert, lässt sich Epikurs Argument leichter rekonstruieren. Die Aussage, dass Gott fürsorglich ist [4; vgl. 5 & 6], dürfen wir wohlwollend als Prämisse ausschließen. (Epikur wird ja nichts Widersprüchliches behaupten wollen.) Während sich die Prämissen P1–P5 ohne nennenswerte Schwierigkeiten rekonstruieren lassen [2–5], wirft das Ende des Zitats ein Problem auf [6]. Hier wird nämlich eine Frage formuliert, jedoch keine Behauptung. Nun versuchen wir aber, wohlwollend ein gültiges Argument zu rekonstruieren; und indem wir die Prämissen P6 und P7 ergänzen, resultiert ein gültiges Argument. Somit sind wir darin gerechtfertigt, die Frage als rhetorische zu interpretieren: Indirekt wird zweierlei behauptet, nämlich die Prämissen P6 und P7.

Eine letzte Schwierigkeit, die wert ist erwähnt zu werden, betrifft meine vereinheitlichende Übersetzung von „invidus esse“ [4 & 5], „nihil curare“ und „providentia“ [7] durch „nicht fürsorglich sein“ bzw. „Fürsorge“. Auf dem Spektrum: jemandem Schlechtes zu wollen (links), weder Gutes noch Schlechtes zu wollen (Mitte) und nur Gutes zu wollen (rechts), ist „invidus esse“ eher dem linken Spektrum zuzuordnen, „nihil curare“ der Mitte und „providentia“ dem rechten Spektrum. Deshalb könnte man die Übersetzung der ersten beiden Phrasen durch „nicht fürsorglich sein“ (links oder Mitte) für unangemessen halten. Ich habe mir diese Übersetzungsfreiheit jedoch zugunsten einer wohlwollenden Rekonstruktion genommen. Nicht nur legt sich Epikur mit P4, P5 und K auf schwächere Thesen fest. Erst auf diese Weise resultiert ein gültiges Argument. Zudem wäre es nicht akkurat, Epikur die Konklusion zu unterstellen, dass Gott missgünstig ist.  Immerhin war Epikur der Ansicht, dass es seelenruhige Götter gibt, die sich weder ums Weltgeschehen kümmern noch sich daran beteiligen.[^2]

Die Rekonstruktion mittels Zwischenkonklusionen kommt hauptsächlich mit der Angabe der Schlussregeln *modus ponens* (m.p.), *modus tollens* (m.t.) und dem disjunktiven *modus tollendo ponens* (DS) aus. Die einzelnen Schlüsse will ich hier nicht länger erläutern. Allein: Ich sollte den Kommentar „AL“ an der Zwischenkonklusion Z3 erklären. Dahinter steckt die aussagenlogisch gültige Schlussregel: Daraus, dass es nicht so ist, dass *A*, darf darauf geschlossen werden, dass es nicht so ist, dass *B* und *A*. (Ist ein Konjunkt bereits falsch, dann auch die ganze Konjunktion.) Setzen wir für „*A*“ ein „Gott ist schwach“ und für „*B*“ „Gott ist nicht fürsorglich“, erhalten wir die relevante Instanz: Daraus, dass es nicht so ist, dass Gott schwach ist (P3), darf darauf geschlossen werden, dass es nicht so ist, dass Gott sowohl nicht fürsorglich ist als auch schwach (Z3). Dass nur aussagenlogisch gültige Schlussregeln benötigt werden, zeigt, dass das Argument *aussagenlogisch* gültig ist.

Es lassen sich verschiedene Lösungen des Theodizee-Problems auf unser rekonstruiertes Argument beziehen. Ich will einige beispielhaft nennen. *Atheisten*, die behaupten, dass es keinen Gott gibt, werden etwas an den Prämissen P1–P6 und der Konklusion auszusetzen haben. So werden sie in der Regel behaupten, der Ausdruck „Gott“ sei, wie er hier gebraucht wird, ein leerer singulärer Term (ein singulärer Term, der nichts bezeichnet). Je nach dem, welche freie Logik sie heranziehen, werden sie manche oder alle der gen. Aussagen für falsch oder zumindest für nicht wahr halten. *Hans Jonas* würde die dritte Prämisse angreifen, denn: Gott ist nicht allmächtig. *Stoiker* würden die vierte Prämisse ablehnen: Die Übel haben einen uns (noch) verborgenen Nutzen. Auch *Alvin Plantingas* Free-Will-Defence würde dort seinen Hebel ansetzen. *Leibniz* würde gegen die fünfte Prämisse einwenden: Gott hat – allgütig wie er ist, konnte und wollte er nicht anders – bereits die beste aller möglichen Welten geschaffen. Und *Spinoza* würde zwar Epikur zustimmen, dass Gott nicht fürsorglich ist, aber das Argument für nicht beweiskräftig halten, denn contra P5: Notwendigerweise ist alles, wie es ist, kraft der Macht Gottes.

Kommen wir zu guter Letzt zurück zu *Laktanz*. Wie entkräftet er nun eigentlich Epikurs Argument? Furchtlos blickt er auf die vierte Prämisse und schreibt (a. a. O., 13,22–23; meine Übersetzung): „Da wir aber den Grund erkannt haben, entkräften wir dieses furchterregende Argument mit Leichtigkeit. Gott kann nämlich tun, was auch immer er will, und weder ist Schwäche in ihm noch ist er ohne Fürsorge. Also kann er die Übel beseitigen, will es aber nicht. Darum ist es trotzdem nicht so, dass er nicht fürsorglich ist. Denn er beseitigt die Übel deshalb nicht, weil er zugleich, wie ich gezeigt habe, Vernunft verliehen hat und mehr des Guten und der Annehmlichkeit in der Vernunft liegt als Unannehmlichkeiten in den Übeln“.

## Aussagenlogische Formalisierung

Ich gebrauche eine übliche aussagenlogische Sprache. Atomare Formeln seien: „p“, „q“, „r“, „s“ und „t“. Einfache Aussagen, die im Argument vorkommen, werden gemäß dieser Legende durch eine atomare Formel formalisiert.

* p: Gott will die Übel beseitigen
* s: Gott ist schwach
* q: Gott kann die Übel beseitigen
* t: Es gibt Übel
* r: Gott ist fürsorglich

Auf dieser Grundlage formalisiere ich das Argument so.

|  |  |
|--|------------|
| **F.P1:** | $(p \land \lnot q) \lor ((q \land \lnot p) \lor ((\lnot p \land \lnot q) \lor (p \land q)))$  |
| **F.P2:** | $(p \land \lnot q) \rightarrow s$ |
| **F.P3:** | $\lnot s$ |
| **F.P4:** | $(q \land \lnot p) \lor \lnot r$ |
| **F.P5:** | $(\lnot p \land \lnot q) \lor (\lnot r \land s)$ |
| **F.P6:** | $(p \land q) \lor \lnot t$ |
| **F.P7:** | $\lnot \lnot t$ |
| **F.K:**  | $\lnot r$ (AL: P1–P7) |

Mittels Wahrheitstabelle, Tableau oder Herleitung lässt sich nun beweisen, dass F.K aus der Menge der formalisierten Prämissen F.P1–F.P7 aussagenlogisch folgt. Aber das spare ich uns. Die Wahrheitstabelle hat 32 Zeilen, das Tableau passt auch kaum auf eine Seite und eine Herleitung im Kalkül des natürlichen Schließens ist so nah an der Rekonstruktion inkl. Zwischenkonklusionen, dass sie nichts wirklich Neues bringt.

## Literaturangaben

Glei, Reinhold: *Et invidus et inbellicus. Das angebliche Epikurfragment bei Laktanz, De ira Dei 13,20–21*, in: Vigiliae Christianae 42,1 (1988) 47–58.

Jonas, Hans: Der Gottesbeweis nach Auschwitz. Eine jüdische Stimme, Frankfurt a. M.: Suhrkamp, 1992.

Lactantius: De ira Dei liber. Vom Zorne Gottes, eingeleitet, herausgegeben, übertragen und erläutert von H. Kraft und A. Wlosok, Darmstadt: WBG, 1971.

Leibniz, Gottfried Wilhelm: Essais de Theodicée sur la bonté de Dieu, la liberté de l’homme et l’origine du mal, Amsterdam 1710.

Plantinga, Alvin: God, Freedom, and Evil, Grand Rapids/Michigan: Eerdmans, 1977.

Spinoza, Baruch de: Ethik in geometrischer Ordnung dargestellt. Neu übersetzt, herausgegeben, mit einer Einleitung versehen von Wolfgang Bartuschat, Hamburg: Meiner, 2015.

[^1]: Epikurs Urheberschaft ist umstritten. S. Glei 1988.
[^2]: Für Belege s. Glei 1988.
