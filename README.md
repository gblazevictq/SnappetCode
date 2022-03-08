# SnappetChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

Translation source is [Google Translate](https://translate.google.com).

At [Snappet](http://www.snappet.org), we care about data and we care about code. When we interview for development positions, we want to see code and we want to discuss code. That's why we want candidates to show some work on our challenge. This challenge is not meant to cost you tons of time. A few hours should be enough. The challenge is defined very broadly. You could spend weeks on it, or half an hour. We understand that in 2 hours, you can only do so much. Don't worry about completeness, work on something that works and shows your skills.

## Language

From the next paragraph on, this challenge is worded in Dutch. Snappet is a Dutch organisation. We are present in several European countries and part of our development team is based in Russia, but still, most of the organisation is Dutch. We all speak English, standups, code and documentation are in English, but being able to operate in a Dutch environment is a required skill. So use whatever tools you can to make sense of the rest of the challenge if you are not a Dutch speaker. It is part of the exercise. :)

---

## De opdracht

In deze repository vind je een folder Data met daarin work.csv en work.json. Beiden bevatten dezelfde data, je hoeft er maar één te gebruiken (wat jij handig vindt). In dit bestand zitten de werkresultaten van de kinderen in één klas over een maand.

Maak een rapport of scherm of wat ook dat een leerkracht een overzicht geeft van hoe zijn klas vandaag heeft gewerkt en waaraan. Het is nu dinsdag 2015-03-24 11:30:00 UTC. De antwoorden van na dat tijdstip worden dus nog niet getoond.

Maak een pull request aan waarin je in ieder geval een readme hebt opgenomen die uitlegt wat je moet doen om het resultaat te kunnen bekijken.

### The assignment

In this repository you will find a folder Data containing work.csv and work.json. Both contain the same data, you only need to use one (whichever is convenient for you). This file contains the work results of the children in one class over a month.

Create a report or screen or whatever that gives a teacher an overview of how his class has been working today and what. It is now Tuesday 24/03/2015 11:30:00 UTC. The answers after that time are therefore not shown yet.

Create a pull request in which you have included at least a readme that explains what you need to do to view the result.

---

## Achtergrond informatie

- Alle tijden zijn in UTC
- Er is een attribuut Progress. Dit geeft de verandering in de inschatting van de vaardigheid van de leerling op een leerdoel. Daar zitten psychometrische modellen achter die rekening houden met de moeilijkheid van de opgave, of de opgave al eerder door deze leerling is gemaakt, etc. Er zijn meerdere situaties waarbij de Progress 0 is. Bijvoorbeeld als we nog geen goede calibratie van de moeilijkheid van de opgave hebben. Of als de leerling nog te weinig opgaven in een leerdoel heeft gemaakt om een goede schatting van de vaardigheid te maken.
- Aangezien deze dataset alleen wijzigingen laat zien en geen absolute waarde, kan je aan deze dataset niet zien wat de vaardigheid van iedere leerling is. Dat hoeft ook niet in de resultaten terug te komen.

### Background information

- All times are in UTC.
- There is a Progress attribute. This represents the change in the student's assessment of the ability to achieve a learning objective. There are psychometric models behind this that take into account the difficulty of the problem, whether the problem has already been completed by this student, etc. There are several situations where the Progress is 0. For example, if we do not yet have a good calibration of the difficulty of the problem. Or if the student has not yet completed enough exercises in a learning objective to make a good estimate of the skill.
- Since this dataset only shows changes and not an absolute value, you can't tell from this dataset what the skill of each student is. That does not have to be reflected in the results either.

---

## Vrijheid

Deze opdracht is expres ruim geformuleerd. Je mag de technieken en tools gebruiken die je het liefst gebruikt. Je mag je tijd besteden aan de aspecten die je zelf het belangrijkst vindt. Er is geen tijd om alles te doen: maak een keuze. Bij Snappet werken we met C#, .NET, Typescript en Angular. Maar we denken dat een goede programmeur op een ander platform zich dat snel genoeg eigen maakt.
Je mag frameworks en libraries gebruiken. Je mag de data in een ander formaat omzetten of importeren in databases. Dan wel in de readme uitleggen hoe een ander het werkend kan krijgen.
De minimale requirement in de opdracht is "waar heeft mijn klas vandaag aan gewerkt". Dat kan in een lijstje, in een grafisch vorm, het kan als getallen of kleuren. Je kan het vergelijken met vorige week of een gemiddelde score. Probeer te bedenken wat voor een leerkracht in de klas het belangrijkst is.

### Freedom

This assignment is deliberately broadly formulated. You may use the techniques and tools you prefer. You can spend your time on the aspects that are most important to you. There is no time to do everything: make a choice. At Snappet we work with C#, .NET, Typescript and Angular. But we think a good programmer on a different platform will learn that soon enough.
You are allowed to use frameworks and libraries. You may convert the data into another format or import it into databases. Then explain in the readme how someone else can get it working.
The minimum requirement in the assignment is "what did my class work on today". That can be in a list, in a graphic form, it can be as numbers or colors. You can compare it with last week or an average score. Try to think of what is most important to a teacher in the classroom.

---

## Installation

- Run `npm i` in root folder.

## Running

- Run `ng serve` in root folder.
