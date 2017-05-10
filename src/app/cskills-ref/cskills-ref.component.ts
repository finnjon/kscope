import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-cskills-ref',
  templateUrl: './cskills-ref.component.html',
  styleUrls: ['./cskills-ref.component.css']
})

export class CSkillsRefComponent implements OnInit {
  target = "- Click on a comment to see a response";

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe((event) => {
      this.showDetail(null);
    });
  }

  showDetail = function (num) {
    if (this.translate.currentLang === "en"){
      switch (num) {
      case 1:
        this.target = "- For beginners, it is typical that there are big differences in the levels of the different sub-skills (listening, speaking, reading, writing), but for more advanced learners these differences are usually not so great. Think about the way you have studied languages and which skills were practiced the most. Why do you believe you cannot speak? Have your speaking skills been tested? How do you manage as a tourist? Have you received some negative feedback? Is your own evaluation right? Are you comparing yourself too much with others? Try to be brave and start looking for the situations where you have to speak up. It may not be as bad as you thought.";
        break;
      case 2:
        this.target = "- You can find all kinds of tests on the Internet. Try <a href='http://www.lancaster.ac.uk/researchenterprise/dialang/about.htm'>Dialang</a>";
        break;
      case 3:
        this.target = "Are you sure you haven't been reading or listening to languages for some reason that does not necessarily have anything to do with language study? Haven't you been obliged to speak while travelling? Try to get started by reading newspapers, watching films (without the subtitles) or even joining a chat room. Put yourself into situations that bring you into contact with the language. The Self Access Studio in Aleksandria has lots of materials to suit everybody.";
        break;
      case 4:
        this.target = "Academic knowledge includes the capacity to develop oneself as a learner. It is crucial to reflect on your own needs and goals and to evaluate your own learning. This also applies to the learning of foreign languages. When you can make a realistic assessment of your own level and needs, you can then also set your own learning objectives. This in turn means that it will be easier for a teacher to help you extend and diversify your learning.";
        break;
      case 5:
        this.target = "It is not always essential that writing has to be faultless. Reflective writing may also enhance learning. Think carefully: what kinds of writing have you tried earlier? When you write an informative text, for example, accuracy is more important. Look for models on the Net for writing a CV. Study academic theses and articles from your field to get ideas about academic writing. Make use of unilingual dictionaries and grammars when you're writing. Look up what courses are offered and choose a suitable one especially if you want feedback on your texts. But also write just for yourself sometimes: use the words you want to learn and don't be afraid to experiment with language used by other writers. ";
        break;
      case 6:
        this.target = "Have you just begun your studies? As you learn more about your own subject, reading the textbooks will get easier. Are you using a dictionary sensibly? Can you guess or infer the meanings of words? Do you know about skimming and scanning strategies? An academic reading course might help you.";
        break;
      case 7:
        this.target = "What makes you believe this? Could it be more a question of your own uncertainty? Do the people you speak to understand you? Ask them what it is that makes you difficult to understand. Spend time listening carefully and trying to copy people who speak in a way you like.";
        break;
      case 8:
        this.target = "Think about the words that you really need. Is it academic vocabulary, adjectives to describe things, verbs used in writing up research, or something else? For what purposes do you need words? For reading it's not always necessary to know exact meanings, whereas for writing a careful choice of words and spelling is important. When speaking you can usually find alternative words of your own. Collect words and put them in a notebook which you can look at now and then. Collect words from the books you read, from the films you watch, from conversations, from lessons, and so on. Make sentences out of your words. Make a decision to use the words you want to learn in the next possible situation.";
        break;
      case 9:
        this.target = "It might well be that in fact you are correctly using the grammar you have learnt in the past even though it feels as if you've forgotten the rules. Why not try some quick revision on the Net or in the Self Access Studio in the Aleksandria Learning Centre. You'll find a wide choice of grammar books and exercises for many languages.";
        break;
      case 10:
        this.target = "It helps to actively use the language in different situations. When reading and listening it's important to focus on finding and remembering the essential points. You could also make use of some <a href='http://www.studygs.net/memory.htm' target='_blank'>memory strategies</a>. When memorizing words you might find it helpful to consider what you need the words for and then to link and organise them in a way that's useful for your own purposes.";
        break;
      case 11:
        this.target = "That's great! Try to find other rewarding ways of learning language.";
        break;
      case 12:
        this.target = "Good! You obviously benefit from the feedback you get and this motivates you further. When you're evaluating your own skills it's important to make use of your own experience. You could go on to analyse your skills more precisely, thinking about the situations in which you manage well and those in which you might need to develop.";
        break;
      case 13:
        this.target = "Even in our own language we sometimes have problems understanding other people's speech. What is important is to get yourself into situations where you hear language. You could also do some systematic listening practice: look for materials that feature a variety of speakers. Concentrate and set out to understand on a general level: as much as 40% of the words used in speech are not important for the understanding of the message. Try to pick out chunks of language and notice regularities in the dialects used by different speakers. Do a lot of listening and read the script, if there is one available.";
        break;
      default:
        this.target = "- Click on a comment to see a response";
    }
  } else if (this.translate.currentLang === "fi") {
    switch (num) {
    case 1:
      this.target = "- Aloittelijoilla saattaa olla suuriakin eroja kielen eri osataidoissa (kuunteleminen, lukeminen, puhuminen ja kirjoittaminen), mutta pidemmälle ehtineillä erot eivät enää yleensä ole niin suuria. Mieti, miten olet kieltä opiskellut ja mihin osataitoihin panostanut. Mieti myös miksi koet, ettet osaa puhua. Onko puhetaitojasi testattu? Miten selviydyt turistina? Oletko saanut kielteistä palautetta? Onko oma arviosi kohdallaan? Vertaatko itseäsi liikaa muihin? Hakeudu reippaasti tilanteisiin, joissa joudut puhumaan. Selviät todennäköisesti paremmin kuin uskalsit odottaakaan.";
      break;
    case 2:
      this.target = "- Löydät monenlaisia testejä netistä. Kokeile <a href='http://www.lancaster.ac.uk/researchenterprise/dialang/about.htm'>Dialang</a>.";
      break;
    case 3:
      this.target = "Oletko ehkä kuunnellut tai lukenut kieltä jossain yhteydessä, joka ei ole varsinaisesti  liittynyt kielenoppimiseen? Oletko matkustellessasi joutunut puhumaankin? Aloita reippaasti lehtien lukeminen, elokuvien katselu (peitä käännökset) ja vaikkapa nettikeskustelu päästäksesi vauhtiin. Hakeudu tilanteisiin, joissa syntyy kontakti kieleen. Kielikeskuksen itseopiskelustudiolla Aleksandriassa on monenlaista materiaalia juuri Sinulle.";
      break;
    case 4:
      this.target = "Akateemiseen osaamiseen kuuluu kyky kehittää itseään oppijana: omien tarpeiden ja tavoitteiden pohtiminen ja oppimisen arviointi on tässä keskeistä. Tämä koskee myös vieraita kieliä. Kun osaat itse realistisesti arvioida tasosi ja tarpeesi, osaat myös paremmin asettaa oppimistavoitteesi ja opettajan antama tuki voi tällöin  syventää ja monipuolistaa oppimistasi entisestään.";
      break;
    case 5:
      this.target = "Kirjoittamisessa ei aina ole keskeisintä virheetön tuotos. Oppimista edistää myös pohdiskeleva itselleen kirjoittaminen. Tee tarkempi analyysi: millaista kirjoittamista olet aiemmin kokeillut? Jos kirjoitat muille, on tekstisi oikeellisuuskin tärkeämpää. Hae malleja netistä esimerkiksi CV:n kirjoittamiseen. Tutki aiemmin tehtyjä graduja ja oman alasi akateemisia julkaisuja saadaksesi ideoita tieteelliseen kirjoittamiseen. Hyödynnä yksikielistä sanakirjaa ja kielioppia kirjoittaessasi. Katso kielikeskuksen kurssitarjontaa ja valitse sopivaa taitoa harjoittava kurssi etenkin, jos haluat palautetta teksteistäsi. Kirjoita joskus vain itsellesi: käytä niitä sanoja, joita haluat oppia. Ota mallia toisten kirjoittajien tavasta käyttää kieltä.";
      break;
    case 6:
      this.target = "Oletko juuri aloittanut opintosi? Kun opit lisää omasta alastasi, helpottuu tenttikirjojen lukukin. Käytätkö sanakirjaa järkevästi? Osaatko arvata ja päätellä sanojen merkitystä? Tunnetko silmäilytekniikoita? Akateemisen lukemisen kurssit voivat auttaa. Reading Roomista (LINKKI) saat vinkkejä erityisesti englanninkielisten kirjojen lukemiseen.";
      break;
    case 7:
      this.target = "Mihin käsityksesi perustuu? Onko kyse enemmän omasta epävarmuudestasi? Ymmärtävätkö puhekumppanisi Sinua? Pyydä palautetta siitä, mikä ääntämisessäsi erityisesti vaikeuttaa ymmärtämistä. Kuuntele paljon ja tarkkaan ja matki puhujia, joiden aksentti Sinua miellyttää.";
      break;
    case 8:
      this.target = "Mieti millaisia sanoja eniten tarvitset. Yleissanastoa, akateemista sanastoa, adjektiiveja kuvailuun, verbejä tutkimuksen kirjoittamiseen jne. Millaisia tarkoituksia varten tarvitset sanoja? Lukiessasi et aina tarvitse sanan tarkkaa merkitystä, mutta kirjoittaessasi sinun täytyy valita sanat huolella ja oikeinkirjoituskin on tärkeä. Puhuessasi taas voit turvautua kiertoilmauksiin ja ilmaista asian omin sanoin. Kerää sanoja vaikkapa pieneen vihkoon, jota voit selailla silloin tällöin. Kerää sanoja lukemistasi kirjoista, katsomistasi elokuvista, kuulemastasi keskustelusta, oppitunnilta. Kirjoita sanoista lauseita. Päätä käyttää niitä sanoja, jotka haluat oppia, seuraavassa mahdollisessa tilanteessa.";
      break;
    case 9:
      this.target = "Voi toki olla niinkin, että osaat kuitenkin käyttää oppimaasi kieliopillista ainesta hyvin, vaikka Sinusta tuntuisikin, että säännöt ovat unohtuneet. Kokeile pikakertausta netissä tai kielikeskuksen itseopiskelustudiolla Aleksandriassa, jossa on myös hyvä valikoima kielioppi- ja harjoituskirjoja moneen kieleen.";
      break;
    case 10:
      this.target = "Kielen aktiivinen käyttö eri tilanteissa auttaa. Lukemisessa ja kuuntelussa on tärkeää keskittyä oleellisten asioiden löytämiseen ja muistamiseen: voit kokeilla olisiko Sinulle hyötyä <a href='http://www.studygs.net/memory.htm' target='_blank'>muistitekniikoista</a>. Sanojen muistamisessa on tärkeää miettiä, mihin tarkoitukseen sanaa tarvitset ja yrittää sitoa se johonkin itsellesi tärkeään kokonaisuuteen.";
      break;
    case 11:
      this.target = "Hienoa! Etsi uusia palkitsevia tapoja oppia lisää kieltä.";
      break;
    case 12:
      this.target = "Hyvä! Osaat varmaan hyödyntää saamasi palautteen ja siten motivoida itseäsi edelleen. Omien kokemusten hyödyntäminen on tärkeää, kun arvioi taitojaan.  Voit tehdä myös tarkemman analyysin taidoistasi ja miettiä, millaisissa tilanteissa selviät ja mitä osaamisen alueita voisit vielä kehittää.";
      break;
    case 13:
      this.target = "Omassa äidinkielessäkin meillä on joskus ongelmia erilaisten puhujien ymmärtämisessä. Tärkeintä on hakeutua rohkeasti tilanteisiin, joissa kuulet kieltä. Voit joskus myös tehdä suunnitelmallisen kuunteluharjoituksen: etsi materiaalia, jossa mukana erilaisia puhujia. Keskity kuuntelemaan ja aseta tavoitteeksi ymmärtäminen yleisellä tasolla: jopa 40 prosenttia puhutun kielen sanoista on sellaisia, ettet välttämättä tarvitse niitä viestin ymmärtämiseen. Yritä hahmottaa kokonaisuuksia ja löytää säännönmukaisuuksia saman variantin eri puhujilta. Kuuntele säännöllisesti ja hyödynnä käsikirjoitusta, jos sellainen on.";
      break;
    default:
      this.target = "- Klikkaa kommenttia nähdäksesi vastauksen"
    }
  }
}
}
