import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-motivation-ref',
  templateUrl: './motivation-ref.component.html',
  styleUrls: ['./motivation-ref.component.css']
})
export class MotivationRefComponent implements OnInit {
  target = "- Click on a comment to see a response";
  profile: Profile;
  sound = null;
  showSuccess: Boolean = false;

  constructor(
    private translate: TranslateService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe((event) => {
      this.showDetail(null);
    });
    this.profile = this.profileService.profile;
  }

  onSubmit(formData) {
    this.profileService.profile.motivation = formData.motivation;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }

  showDetail = function (num) {
    if (this.translate.currentLang === "en"){
      switch (num) {
      case 1:
        this.target = "- Well, at least you're motivated by the need to get your language credits. Perhaps you should think about your attitude. Why do you feel so negative about learning languages? Have you had bad experiences in the past? If you could find a way to change your attitude, you might find learning a language more interesting and therefore more successful. Focusing on your own interests, dreams and passions in life might make you more motivated. Dream, wonder, ponder and be curious about languages and language learning!";
        this.sound = "mot-onlystudy";
        break;
      case 2:
        this.target = "- This is a good example of what has been called 'integrative motivation', ie, wanting to learn a language so that you can integrate easily into the target language group. It sounds as if you are a communicative and active type of learner, who likes to focus on oral skills.";
        this.sound = "mot-othercountries";
        break;
      case 3:
        this.target = "This is known as 'instrumental motivation', i.e. wanting to learn a language for utilitarian reasons such as earning money or gaining status. Reflect on the external influences on your motivation and try to see what personally meaningful aspects of language learning you could focus on.";
        this.sound = "mot-goodjob";
        break;
      case 4:
        this.target = "You are motivated both integratively and instrumentally, because you see that learning languages makes travelling easier, and you also want to mix naturally with the people of the countries you travel in. You need to focus on oral skills and gain awareness of cross-cultural differences. Being open-minded and respectful, showing interest in your conversation partner, asking questions and listening attentively are important skills.";
        this.sound = "mot-travelandmeet";
        break;
      case 5:
        this.target = "Could it be that your beliefs about yourself as a learner affect your motivation?  Where do these beliefs come from? Could it be that you have depended too much on external judgments of your skills? Or that in a different learning context you might be more successful? Try to look at your beliefs and understand where they come from. A fresh start or a new way of learning might have altogether different results. Take control of your own learning, bring in your own passions and interests in life and make learning fun.";
        this.sound = "mot-goodlearner";
        break;
      case 6:
        this.target = "It may feel like you don't have enough time but is time really the problem? Could it be lack of motivation, for example, arising out of your personal or emotional situation? If so, think about the reasons. If you really examine the reasons, you might be able to find a way to improve your motivation ??? and suddenly it's possible to arrange the time you need. Take small steps at the beginning and try to find low-pressure learning situations every now and then.";
        this.sound = "mot-notime";
        break;
      case 7:
        this.target = "If you can't see any relevance in learning languages, then you are not likely to be an active and effective learner. Obviously, it is hard to foresee the future but there are not many contexts in Finland, or elsewhere, where languages are not important in working life.  Can you think of <i>personal</i> rather than professional reasons to learn languages?<br><br>Opening the door to the world of languages might also make you see their potential relevance for your professional life: the future is unpredictable and a new language or, say, better skills in English  might turn  out to be a valuable effort.";
        this.sound = "mot-noneed";
        break;
      default:
        this.target = "- Click on a comment to see a response";
        this.sound = null;
      }
    } else if (this.translate.currentLang === "fi") {
      this.sound = null;
      switch (num) {
      case 1:
        this.target = "- Sinua motivoi ainakin tarve saada opintopisteet kasaan. Voisit ehk?? pohtia syit?? asenteeseesi. Miksi suhtaudut niin kielteisesti kielten opiskeluun? Onko Sinulla ollut huonoja kokemuksia? Asenteen muuttaminen saattaisi tehd?? kielten opiskelun mielenkiintoisemmaksi ja tuottaa parempia oppimistuloksia. Ehk??p?? motivaatiosi paranee, jos otat kielten opiskelun l??ht??kohdaksi omat kiinnostuksen kohteesi, unelmasi ja intohimosi. Siisp?? anna unelmille siivet, pohdi, ihmettele ja ole utelias kielten ja niiden oppimisen suhteen!";
        break;
      case 2:
        this.target = "- T??m??ntyyppist?? motivaatiota on kutsuttu 'integratiiviseksi' eli Sinulla on halu oppia vierasta kielt?? voidaksesi 'integroitua' (sopeutua joukkoon) kohdekieliseen v??est????n. Olet varmaan puhelias ja aktiivinen oppija ja panostat mielell??si suulliseen taitoosi.";
        break;
      case 3:
        this.target = "T??ss?? on kyseess?? 'instrumentaalinen motivaatio' eli halu oppia kielt?? sen v??linearvon vuoksi, esimerkiksi taloudellisista syist??. Kannattaa pohtia motivaatioosi vaikuttavia ulkoisia tekj??it?? ja mietti?? my??s, millaisiin Sinulle itsellesi merkityksellisiin asioihin voisit kielten opiskelussa panostaa.";
        break;
      case 4:
        this.target = "Olet sek?? integratiivisesti ett?? instrumentaalisesti motivoitunut, koska pid??t kielitaitoa t??rke??n?? matkustamisen onnistumiseksi ja haluat my??s seurustella paikallisten ihmisten kanssa. Panosta suulliseen taitoon ja paranna kulttuurien v??listen erojen tuntemustasi ja herkkyytt??si. Avoimuus ja kunnioitus sek?? aito kiinnostus puhekumppaniin ovat t??rkeit??. Opettele kysym????n ja kuuntelemaan tarkalla korvalla.";
        break;
      case 5:
        this.target = "Et jaksa motivoitua opiskelemaan kieli??, koska uskot olevasi huono oppija. Mihin k??sityksesi perustuu? Perustuuko se liikaa muiden arviointeihin? Voisiko olla niin, ett?? sopivassa oppimisymp??rist??ss?? p??rj??isitkin ihan mukavasti? Pohdi k??sityksi??si ja niiden alkuper????. Aloita opiskelu puhtaalta p??yd??lt??, uusin ajatuksin ja asentein. Ota oppiminen omiin k??siisi, hy??dynn?? omia kiinnostuksen kohteitasi, anna tilaa asioille, joita rakastat ja tee oppimisestasi hauskaa.";
        break;
      case 6:
        this.target = "Sinusta saattaa tuntua silt??, ettei Sinulla ole aikaa opiskelaa kieli??. Mieti kuitenkin asiaa rehellisesti: aikako se Sinun ongelmasi on vai olisiko sittenkin kysymys siit??, ett?? henkil??kohtaiset syyt tai tunnetilasi sy??v??t motivaatiotasi? Yrit?? pohtia, mitk?? tekij??t todellisuudessa aiheuttavat motivoitumisen ongelmia. Saatat n??in onnistua parantamaan motivaatiotasi ja ??? yll??tys, yll??tys aikaakin l??ytyy! Etene alussa pienin askelin ja kokeile matalan stressin opiskelutilanteita.";
        break;
      case 7:
        this.target = "Jos et pid?? kieli?? itsellesi tarpeellisina, et oletettavasti my??sk????n opiskele aktiivisesti etk?? tehokkaasti. Tulevaisuuden ennustaminen on haastavaa, mutta on vaikea kuvitella sellaisia ty??teht??vi?? Suomessa (tai muualla), joissa kielitaidolla ei olisi  merkityst??. Ent?? henkil??kohtaiset syyt ja tarpeet kielten opiskeluun, voisitko aloittaa niist???<br><br>Kun avaat oven kielten maailmaan, saatat huomata niiden merkityksen tulevan ty??el??m??si kannaltakin. Tulevaisuus on tuntematon, mutta jonkun uuden vieraan kielen taidon hankkiminen tai vaikkapa englannin parantaminen saattaisivat hyvinkin osoittautua vaivan arvoisiksi.";
        break;
      default:
        this.target = "- Klikkaa kommenttia n??hd??ksesi vastauksen"
      }
    }
  }
}
