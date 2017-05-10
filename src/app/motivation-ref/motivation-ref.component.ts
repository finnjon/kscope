import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-motivation-ref',
  templateUrl: './motivation-ref.component.html',
  styleUrls: ['./motivation-ref.component.css']
})
export class MotivationRefComponent implements OnInit {
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
        this.target = "- Well, at least you're motivated by the need to get your language credits. Perhaps you should think about your attitude. Why do you feel so negative about learning languages? Have you had bad experiences in the past? If you could find a way to change your attitude, you might find learning a language more interesting and therefore more successful. Focusing on your own interests might make you more motivated.";
        break;
      case 2:
        this.target = "- This is a good example of what has been called 'integrative motivation', ie, wanting to learn a language so that you can integrate easily into the target language group. It sounds as if you are a communicative and active type of learner, who likes to focus on oral skills.";
        break;
      case 3:
        this.target = "This is known as 'instrumental motivation', ie, wanting to learn a language for utilitarian reasons such as earning money or gaining status. Perhaps you could think about which skills in particular your future job will demand, such as writing skills or presentation skills, and focus on them.";
        break;
      case 4:
        this.target = "You are motivated both integratively and instrumentally, because you see that learning a language makes travelling easier, and you also want to mix naturally with the people of the countries you travel in. You need to focus especially on oral skills and cross-cultural communication.";
        break;
      case 5:
        this.target = "You are not motivated to learn because of your beliefs about yourself as a learner. Where do these beliefs come from? Could it be that you have depended too much on external judgments of your skills? Or that in a different learning context you might be more successful? Try to look at your beliefs and understand where they come from. A fresh start or a new way of learning might have altogether different results.";
        break;
      case 6:
        this.target = "Yes, language learning takes time and effort so you may have to wait until you have more time to spend, if that's possible. But is time really the problem? Could it be lack of motivation, for example? If so, think about the reasons. If you really examine the reasons, you might be able to find a way to improve your motivation — and suddenly it's possible to arrange the time you need.";
        break;
      case 7:
        this.target = "It is true that having a clear goal, ie, seeing that language learning is relevant to you, increases motivation and leads to successful language learning. If you can't see any relevance in learning languages, then you are not likely to be an active and effective learner. But can you honestly say that you will never have a job where you need languages? It is hard to foresee the future but there are not many contexts in Finland where languages are not important.";
        break;
      default:
        this.target = "- Click on a comment to see a response"
    }
  } else if (this.translate.currentLang === "fi") {
    switch (num) {
    case 1:
      this.target = "- Sinua motivoi ainakin tarve saada opintoviikot kasaan. Voisit pohtia syitä asenteeseesi. Miksi suhtaudut niin kielteisesti kielten opiskeluun?  Onko Sinulla ollut huonoja kokemuksia?  Asenteenmuutos saattaisi tehdä kielten opiskelun mielenkiintoisemmaksi ja tuottaa parempia oppimistuloksia. Ota kielten opiskelun lähtökohdaksi omat kiinnostuksenkohteesi.";
      break;
    case 2:
      this.target = "- Tämäntyyppistä motivaatiota on kutsuttu 'integratiiviseksi' eli Sinulla on halu oppia vierasta kieltä voidaksesi 'integroitua' (sopeutua joukkoon) kohdekieliseen väestöön. Olet varmaan puhelias ja aktiivinen oppija ja panostat mielelläsi suulliseen taitoosi.";
      break;
    case 3:
      this.target = "Tässä on kyseessä 'instrumentaalinen motivaatio' eli halu oppia kieltä sen välinearvon vuoksi, esimerkiksi taloudellisista syistä. Voisit panostaa niihin taitoihin, joita tulevassa työssäsi tarvitset, vaikkapa kirjoittamiseen.";
      break;
    case 4:
      this.target = "Olet sekä integratiivisesti että instrumentaalisesti motivoitunut, koska pidät kielitaitoa tärkeänä matkustamisen onnistumiseksi ja haluat myös seurustella paikallisten ihmisten kanssa. Panosta suulliseen taitoon ja kulttuurienväliseen kommunikointiin.";
      break;
    case 5:
      this.target = "Et jaksa motivoitua kieltenopiskelusta, koska uskot olevasi huono oppija. Mihin käsityksesi perustuu? Perustuuko se liikaa muiden arviointeihin? Saattaa olla, että sopivassa oppimisympäristössä pärjäisitkin ihan mukavasti. Pohdi käsityksiäsi ja niiden alkuperää. Aloita opiskelu puhtaalta pöydältä, uusin ajatuksin ja asentein.";
      break;
    case 6:
      this.target = "On totta, että kieltenopiskelu ja oppiminen on aikaa viepää ja työlästä. Sinun on ehkä hyvä odottaa ajankohtaa, jolloin Sinulla on enemmän aikaa panostaa juuri kieliin. Mieti kuitenkin asiaa rehellisesti: aikako se Sinun ongelmasi on vai olisiko sittenkin kysymys puuttuvasta motivaatiosta?  Yritä pohtia, mitkä tekijät aiheuttavat motivoitumisongelmia. Saatat näin onnistua parantamaan motivaatiotasi ja — yllätys, yllätys- aikaakin löytyy!";
      break;
    case 7:
      this.target = "Toki sellainen tavoitteellisuus, joka lähtee kielitaidon tarpeelliseksi mieltämisestä, lisää motivaatiota ja sitä myöten onnistumista. Jos et pidä kieliopintoja tarpeellisina, et oletettavasti myöskään opiskele tuloksellisesti. Onko ajatuksesi tulevaisuuden kielitaitotarpeista kuitenkaan ihan realistinen? Ennustaminen on vaikeaa, mutta kyllähän suomalainen kielitaitoa todennäköisesti tulevaisuudessakin tarvitsee.";
      break;
    default:
      this.target = "- Klikkaa kommenttia nähdäksesi vastauksen"
    }
  }
}

}
