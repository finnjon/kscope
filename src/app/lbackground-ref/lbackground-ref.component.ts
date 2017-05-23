import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-lbackground-ref',
  templateUrl: './lbackground-ref.component.html',
  styleUrls: ['./lbackground-ref.component.css']
})
export class LBackgroundRefComponent implements OnInit {

  target = "- Click on a comment to see a response";
  profile: Profile;
  sound = null;

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
    this.profileService.profile.lhistory = formData.lhistory;
  }

  showDetail = function (num) {
    if (this.translate.currentLang === "en"){
      switch (num) {
      case 1:
        this.target = "- Learning a new language opens up many doors, both during your studies and later on in working life. Knowing a language can be a gateway to exciting experiences and a broadening of your personal and professional horizons.  What's more, studying a new language might mean a welcome change from your other studies.<br><br>Look at the requirements of your Faculty as regards your main line of studies as well as the language requirements. You might find that there is some required reading in languages other than English or Swedish. In fact, your Faculty may insist that you study two foreign languages. Look at the Language Centre offering of courses in various languages. You could also drop in to see one of the language tutors in the Self Access Centre in Aleksandria and find out about studying independently.";
        this.sound = "lb-ionly";
        break;
      case 2:
        this.target = "- Your learning will be deeper and more effective if you make realistic self-evaluation a part of your learning. Remember that you own your learning process! Asking for and giving peer evaluation can also be useful. Try the language testing system Dialang, which gives feedback on your skills and on your self-evaluation. You could do Dialang in various languages in order to get a fuller perspective on your skills and self-evaluation.";
        this.sound = "lb-ivealways";
        break;
      case 3:
        this.target = "Good! Keep looking for more of these positive learning experiences. They enrich your life and may be a nice balance to your main studies. You can be sure that languages will always be useful both in your own field of studies and later on in life.";
        this.sound = "lb-enjoyed";
        break;
      case 4:
        this.target = "The solid basis that you received in school will be useful when you set about, for example, improving your speaking skills. Try to get yourself into situations where you need to use the language, whether it's speaking or writing. Try to have fun and use your imagination!";
        this.sound = "lb-school";
        break;
      case 5:
        this.target = "It's a good idea to see your language learning as a part of your own identity. Kaleidoscope should give you food for thought. When planning your independent learning, remember that you don't only learn in classrooms. Make use of all the lifewide opportunities: you hobbies, your studies, international friends and the virtual world.<br><br>How about writing your personal life history as a language learner, just for yourself? Or keeping a diary or a blog in, for example, English?";
        this.sound = "lb-iveneverthought";
        break;
      case 6:
        this.target = "It would be a good idea for you to start from scratch. Try to encourage yourself by focusing on good memories. Don't think about competing with others, but set your own objectives and try to actively achieve them. Be aware of your anxiety but don't let it conquer you. Try to visualize a new you who loves learning languages.<br><br>Think of new strategies: for example, instead of staying silent when you don't understand, ask a question. Carry out an internal conversation with yourself in another language. Look for informal low-stress learning situations; invite the foreign language into your daily life. Try studying with a close friend. Talk to your dog or cat. Go and talk to the language tutors in the Self Access Centre.";
        this.sound = "lb-ihavebad";
        break;
      case 7:
        this.target = "This may be true, but you have surely gained lots of knowledge and skills in the language classrooms of your past. They will be a good basis when you find yourself in real communicative situations.<br><br>Find yourself someone to talk to. Suggest to your best friend that you use another language together. Look for opportunities to talk to tourists and  foreign visitors.  Mental exercises, that is, using your inner voice and talking to yourself can be fun and beneficial to your speaking confidence: for example, give imaginative speeches and talk to yourself in the foreign language on the bus, metro or train.  Be patient and encourage yourself!";
        this.sound = "lb-ivehadsolittle";
        break;
      case 8:
        this.target = "This means that you already have lots of skills at the ready. Set yourself some new and challenging goals so that you can develop your existing skills. Expand your awareness of the different  functions you use your different languages for: personal, imaginative, academic, professional etc.";
        this.sound = "lb-alwaysused";
        break;
      case 9:
        this.target = "This is a great way to maintain your language skills. Try to include more languages. Look for online learning opportunities together with your friends.  Develop ways of giving and receiving feedback: For example, ask your friends what kinds of feedback they would like.";
        this.sound = "lb-iveinternational";
        break;
      case 10:
        this.target = "The influence that teachers have on learning comes out clearly when learners talk and write about their memories and histories. There are descriptions of teachers who care, teachers who are enthusiastic, teachers who can explain difficult things, and teachers who give helpful and motivating feedback. Good memories of teachers are closely connected to good learning experiences. It is probably a question of the creation of a genuine dialogue between teacher and pupil, and both sides are responsible for this.";
        this.sound = "lb-fantastic";
        break;
      case 11:
        this.target = "As an adult you have many strengths as a language learner: you have experiences to talk about and have learnt many problem-solving skills in life. You have learnt how to help and to ask for help — don't hesitate to do the same when learning languages. You have learnt to look for alternative ways and this may be useful when coping with language problems too. You also know that it's not worth comparing your performance with others. It's better to set realistic goals based on your own strengths and weaknesses and stick to them firmly.";
        this.sound = "lb-longtime";
        break;
      case 12:
        this.target = "The main thing to remember is that listeners do <b>not</b> listen for your mistakes; they are interested in hearing <b>what</b> you want to say, not <b>how</b> you say it. Take your emotional temperature and promise yourself a reward, say, some chocolate, afterwards. Talk to yourself  on a daily basis: say positive things about yourself and your language skills. These can be internal dialogues using your inner voice or talking out loud. You could also imagine having a conversation partner.";
        this.sound = "lb-newifear";
        break;
      default:
        this.target = "- Click on a comment to see a response";
        this.sound = null;
      }
    } else if (this.translate.currentLang === "fi") {
      this.sound = null;
      switch (num) {
      case 1:
        this.target = "- Uuden kielen opiskelu antaa monia mahdollisuuksia jo opintojen aikana ja erityisesti myöhemmin työelämässä. Kun osaa vierasta kieltä, laajenevat sekä henkilökohtaiset että ammatilliset näköalasi. Toki uuden kielen opiskelu tarjoaa myös virkistävää vaihtelua muille opinnoillesi.<br><br>Tutustu tiedekuntasi yleisiin ja kielivaatimuksiin: tenttikirjoja saattaa tulla eteen vaikkapa saksaksi tai tiedekuntasi saattaa edellyttää kahden vieraan kielen taidon osoittamista. Tutki Kielikeskuksen Flamma-sivuja ja eri kielten kurssitarjontaa. Piipahda Kielikeskuksen tuutorin luona Aleksandriassa ja tutustu muihinkin itseopiskelun joustaviin kielenoppimismahdollisuuksiin.";
        break;
      case 2:
        this.target = "- Oppimisesi tehostuu ja syventyy, kun opettelet ajattelemaan realistista itsearviointia osana oppimistasi. Muista, että oppimisprosessisi on Sinun! Vertaisarvioinnin pyytäminen ja tarjoaminen kaverille antaa myös uusia näkökulmia. Kokeile Dialangia, jossa saat palautetta sekä osaamisestasi että itsearvioinnistasi. Tee Dialang useissa kielissä niin saat perspektiiviä taitoihisi ja itsearviointiisi.";
        break;
      case 3:
        this.target = "Hyvä. Hanki itsellesi lisää näitä positiivisia oppimiskokemuksia. Ne rikastuttavat elämääsi ja antavat vastapainoa oman aineesi opiskeluun, joka on ehkä hyvinkin erilaista. Kielistä on varmasti apua ja hyötyä oman alan opinnoissa ja etenkin myöhemmin työelämässä.";
        break;
      case 4:
        this.target = "Näistä saamasi pohja on tarpeen, kun lähdet parantamaan esimerkiksi puhetaitojasi. Hakeudu tilanteisiin, joissa joudut käyttämään kieltä, kirjoittamaan ja puhumaan sitä.Pidä hauskaa ja ota mielikuvitus ja luovuus mukaan opiskeluusi!";
        break;
      case 5:
        this.target = "Oppimistaan on hyvä miettiä osana omaa persoonaa. Kaleidoskooppi antanee ajattelemisen eväitä. Kun suunnittelet opiskeluasi, muista että oppiminen ei ole sidottu pelkästään luokkatilanteisiin. Hyödynnä kaikki tilanteet ja mahdollisuudet elämässäsi: harrastukset, opinnot, kansainväliset ystäväsi ja virtuaalinen maailma.<br><br>Entä jos kirjoittaisit kielenoppijan omaelämänkerran, ihan vain itseäsi varten? Tai pitäisit päiväkirjaa tai blogia vaikkapa englanniksi?";
        break;
      case 6:
        this.target = "Sinun olisi hyvä nollata tilanne. Yritä saada lisää rohkeutta keskittymällä hyviin muistoihin. Älä kilpaile toisten kanssa, vaan aseta omia tavoitteita ja pyri aktiivisesti saavuttamaan ne. Tunnista pelkosi, mutta älä jää sen vangiksi. Yritä visualisoida uusi minä, joka rakastaa kielten opiskelua.<br><br>Mieti uusia strategioita: esimerkiksi vaikenemisen sijaan kysy, jos et ymmärrä. Hae sellaisia elävän elämän oppimistilanteita, joihin ei liity stressiä. Opiskele tutun ihmisen kanssa. Juttele koirallesi, kissallesi tai itsellesi. Pistäydy kielikeskuksen tuutorilla Aleksandrian itseopiskelustudiolla.";
        break;
      case 7:
        this.target = "Olet kuitenkin kerännyt paljon tietoa ja monia taitoja luokkatilanteista. Ne ovat hyvänä pohjana aidolle kommunikaatiolle.<br><br>Etsi itsellesi keskustelukumppani: puhu vaikka parhaan kaverisi kanssa vierasta kieltä. Hakeudu turistien ja ulkomaisten vieraiden juttusille. Käy sisäistä keskustelua vieraalla kielellä; tällainen harjoittelu on hauskaa ja antaa rohkeutta ja itsevarmuutta oikeita puhetilanteita varten. Voit pitää mielikuvitusluennnon tai puheen vieraalla kielellä bussissa, metrossa tai junassa matkatessasi. Ole kärsivällinen ja muista kehua ja itseäsi!";
        break;
      case 8:
        this.target = "Sinulla on siis jo valmiiksi paljon taitoja ja valmiuksia. Aseta itsellesi uusia, haastavia tavoitteita ja kehitä näin taitojasi edelleen.  Pohdi mihin tarkoituksiin käytät eri kieliä (henkilökohtaisessa elämässä, akateemisissa yhteyksissä, työelämässä jne.). Voisitko laajentaa niiden käyttää uusiin tilanteisiin?";
        break;
      case 9:
        this.target = "Tämä on mainio tapa pitää yllä kielitaitoaan. Käytä useita kieliä kontaktien pitoon. Opiskele verkossa ystäviesi kanssa ja kehity palautteen vastaanottajana ja antajana.";
        break;
      case 10:
        this.target = "Opettajan vaikutus oppimiseen tulee voimakkaasti esille oppijoiden muistoissa ja kertomuksissa. Monen muistoissa nousee esiin opettaja, joka välitti, tai opettaja, joka oli innostunut opettamastaan asiastaan, tai opettaja, joka osasi selittää vaikeat asiat, tai opettaja, joka osasi motivoida, tai opettaja, joka antoi hyödyllistä palautetta. Hyvät muistot opettajasta liittyvät usein myös hyviin oppimiskokemuksiin. Niissä on varmaan kyse aidon dialogin syntymisestä opettajan ja oppilaan välille ja molemmat osapuolet ovat varmaan edesauttaneet sen syntymistä.";
        break;
      case 11:
        this.target = "Aikuisella on monia vahvuuksia kielenoppijana: on kokemuksia, joista puhua ja monia ongelmanratkaisutaitoja työelämästä. Osaat auttaa ja pyytää apua kaverilta töissä: älä epäröi tehdä niin kieltä opiskellessasikaan. Olet oppinut hakemaan vaihtoehtoja ja tästä on hyötyä vieraan kielen oppimisen ongelmissa. Tiedät myös, ettei kannata verrata omaa suoriutumistaan muihin, vaan pitää edetä omista lähtökohdista realististen tavoitteiden suunnassa, sitkeästi.";
        break;
      case 12:
        this.target = "Sinun kannattaa muistaa, että kuulija ei ole kiinnostunut virheistäsi, vaan yrittää kuunnella mitä Sinulla on sanottavana, ei sitä miten sen sanot. Mittaa tunnelämpäsi ja lupaa itsellesi palkkio (suklaa toimii hyvin!). Puhu itsellesi mukavia päivittäin: sano positiivisia asioita itsestäsi ja kielitaidostasi. Nämä voivat olla sisäisiä keskusteluja tai ääneen puhumista. Tai kuvittele itsellesi mukava puhekumppani.";
      break;
      default:
        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen"
      }
    }
  }
}
