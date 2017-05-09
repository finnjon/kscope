import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-needs-ref',
  templateUrl: './needs-ref.component.html',
  styleUrls: ['./needs-ref.component.css']
})
export class NeedsRefComponent implements OnInit {
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
        this.target = "- You have a clear need on which you can base a plan to develop your academic reading skills. Think whether you would benefit from a course or whether you could independently raise your skills to the desired level. In the <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Room</a> on the Net, you will find ideas on how to improve your English reading skills.";
        break;
      case 2:
        this.target = "- It's a good idea to think about your language needs well ahead of time. Focus on the language demands of your particular exchange programme. What language(s) will you need? What sub-skills will be necessary? And at what level should these sub-skills be? Evaluate your skills with the help of the <a href='http://culture2.coe.int/portfolio/documents/assessment_grid_english.doc' target='_blank'>Common European Framework of Reference Self-Assessment Grid</a>. These levels will also give people in your target country (in Europe) an idea of your skills. Register on a course specially aimed at students going on exchange programmes, if there is one. Find out all you can about the culture of your target country, and especially about the social academic culture.";
        break;
      case 3:
        this.target = "Fluency is made up of many factors. Think carefully about what you especially want to improve in. Would it be the best thing to deliberately get yourself into situations where you are forced to discuss, and in that way improve your fluency? Are you sure that your listening skills are good enough in conversation contexts? Do you need practice with your pronunciation? Join an oral skills or discussion course. Find yourself a discussion partner through the Notice Board in the Self Access Studio, for example. Talk whenever the opportunity arises!";
        break;
      case 4:
        this.target = "Prophesying the future is not easy, of course. It's not always obvious which languages and which sub-skills are going to be needed. Try to improve your skills in more than one foreign language. Register for a special skills course which focuses on the area of language use you think will be needed in your future career.";
        break;
      case 5:
        this.target = "The vocabulary you have is made up of different items: some words you simply recognise when you're reading or listening, while others you can actively use when speaking or writing yourself. Knowing a word also means understanding its register, eg., knowing that a particular word is typical of spoken language, and how to use it appropriately. The pronunciation of a word, or any special grammatical features it may have, or in what combination of words it usually appears, are all part of knowing it. Remember that the words which are important and useful for you are not necessarily the ones found in a language textbook, but you might find them in an academic book or on the homepage of a particular organisation. You are the one who knows best how well you need to know any particular word.";
        break;
      case 6:
        this.target = "Everything that you read for your Master�s thesis also helps you in your own writing - in other words, you should apply what you see in the literature to your own texts. Check whether your department has any guidance on academic writing. Look and see what courses the Language Centre has to offer: courses in thesis writing in English are certainly available.";
        break;
      case 7:
        this.target = "You might be able to reduce your anxiety by preparing in advance for speaking situations. Reading, listening and writing all help to prepare you for speech. Get used to hearing yourself speak by reading out loud and talking to yourself, inwardly or outwardly. Try speaking in one-to-one situations before you speak up in public. Gradually you will become more courageous and able to enjoy taking part in all sorts of discussions.";
        break;
      default:
        this.target = "- Click on a comment to see a response"
    }
  } else if (this.translate.currentLang === "fi") {
    switch (num) {
    case 1:
      this.target = "- Sinulla on selkeä tarve, jonka pohjalta voit tehdä tavoitteellisen suunnitelman akateemisen lukemisen vahvistamiseen. Mieti olisiko kurssi tarpeen vai pystyisitkö itse nostamaan taitosi tarvittavalle tasolle. Tutustu <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Roomiin</a> verkossa saat ideoita lukutaitojesi parantamiseen erityisesti englannin osalta tai käy <a href='http://www.helsinki.fi/kksc/spraknat' target='_blank'>Spräknät-sivuilla</a>, jos haluat apua ruotsinkielisten kirjojen lukemiseen.";
      break;
    case 2:
      this.target = "- Kielitaitotarpeiden kartoittaminen on hyvä aloittaa ajoissa. Keskity vaihto-ohjelmasi vaatimusten mukaisen kielitaidon kohentamiseen. Mitä kieltä/kieliä tarvitset? Millaisia osataitoja tarvitset? Minkätasoista taitoa tarvitset eri osataidoissa? Arvioi taitojasi Yleiseurooppalaisen viitekehyksen <a href='http://culture.coe.int/lang' target='_blank'>taitotasokuvauksien</a> avulla: nämä tasot antavat muille ihmisille kohdemaassasi (Euroopassa) käsityksen tasostasi. Hakeudu erityisesti vaihtoon lähteville suunnatulle kurssille. Hae tietoa kohdemaan kulttuurista ja erityisesti opiskelukulttuurista.";
      break;
    case 3:
      this.target = "Sujuvuus on usean tekijän summa. Mieti, millaisia asioita eniten haluaisit parantaa. Onko ennen kaikkea tarpeen ryhtyä tietoisesti hakeutumaan puhetilanteisiin ja hankkia lisää sujuvuutta sitä kautta? Ovatko kuuntelutaitosi keskustelutilanteissa riittävät? Tarvitsetko harjoitusta ääntämisessä?  Mene suullisen taidon kurssille tai keskustelukurssille. Hae keskustelukumppani vaikkapa kielikeskuksen  itseopiskelun ilmoitustaululta. Avaa rohkeasti suusi aina kun voit sen tehdä.";
      break;
    case 4:
      this.target = "Tulevien työtehtävien ennustaminen ei tietenkään ole helppoa. Se mitä kieliä ja mitä niiden osa-taitoja tulet tarvitsemaan ei välttämättä ole selvää. Paranna taitojasi useammassa kuin yhdessä vieraassa kielessä. Hakeudu erityiskursseille, joilla keskitytään sellaisiin kielenkäytön alueisiin, joita arvelet työtehtäviesi edellyttävän.";
      break;
    case 5:
      this.target = "Sanavarastoosi kuuluu erilaista ainesta: osan sanoista tunnistat lukiessasi ja/tai kuullessasi, osaa sanoista taas sen lisäksi käytät puhuessasi ja/tai kirjoittaessasi. Sanan osaaminen on myös sen tyylin tuntemista eli esimerkiksi sitä, että tietää jonkun sanan olevan tyypillinen puhekielessä ja osaa siten käyttää sitä oikeissa tilanteissa. Sanan ääntäminen, sen kieliopilliset erityispiirteet ja sopiva lauseyhteys, ovat myös sanojen osaamista. Muista, että itsellesi törkeä ja tarpeellinen sanasto ei aina löydy oppikirjojen sanalistoista vaan esimerkiksi tenttikirjoista tai vaikkapa jonkun järjestän nettisivuilta. Sinä itse myös tiedät millainen osaaminen on tarpeen minkäkin sanan kohdalla.";
      break;
    case 6:
      this.target = "Kaikki, mitä luet graduasi varten auttaa Sinua myös kirjoittajana eli sovella kirjallisuudessa näkemääsi omaan kirjoittamiseesi. Tarkista, onko laitoksellasi tarjolla ohjausta akateemiseen kirjoittamiseen. Katso kielikeskuksen kurssitarjontaa: gradun kirjoittamista voi harjoitella ainakin englanniksi.";
      break;
    case 7:
      this.target = "Jännitystä saattaa lieventää, jos valmistaudut etukäteen puhetilanteita varten. Lukeminen, kuunteleminen ja kirjoittaminen auttavat virittäytymään puhetilanteeseen. Lue ääneen ja käy sisöistä keskustelua. Näin totut puhumaan ja myös kuuntelemaan omaa puhettasi. Puhu aluksi vaikkapa hyvän ystäväsi kanssa. Vähitellen saat lisää rohkeutta ja voit osallistua monenlaisiin keskusteluihin.";
      break;
    default:
      this.target = "- Klikkaa kommenttia nähdäksesi vastauksen"
  }
  }
  }

}
