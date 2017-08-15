import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-personality-ref',
  templateUrl: './personality-ref.component.html',
  styleUrls: ['./personality-ref.component.css']
})
export class PersonalityRefComponent implements OnInit {
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
    this.profileService.profile.personality = formData.personality;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }

  showDetail = function (num) {
    if (this.translate.currentLang === "en"){
      switch (num) {
      case 1:
        this.target = "- You seem to be a theorist whose approach to learning is analytical. Your focus on accuracy is probably a result of your past experiences. You need to find situations and courses where the emphasis is on action and communicating, so that you gradually lose your fear of making errors and become more confident.";
        this.sound = "pers-mistakes";
        break;
      case 2:
        this.target = "- It sounds as if you are a theorist and reflector who likes to focus on the grammar and words and think carefully before you speak. Unfortunately there is not always time when you are talking. You probably prefer writing because then you have more time to think. Try to find communicative situations where you can relax and become more spontaneous and confident, such as meeting other non-native speakers in a social context.";
        this.sound = "pers-clearhead";
        break;
      case 3:
        this.target = "People vary a lot in their capacity to achieve a good pronunciation of a new language. Embarrassment and anxiety about this can often make things even worse. This can lead to avoidance of situations where you have to speak, and so you rarely get the opportunity to practice. You need to look for situations or courses where you feel safe and less threatened. As you start to feel more comfortable, you will start to communicate in a more natural way more and your pronunciation will gradually improve.<br><br>An accent is part of a person's identity and should be respected. It simply reveals your cultural background and so is not something to be ashamed of.";
        this.sound = "pers-laughatme";
        break;
      case 4:
        this.target = "You have a visual and verbal style of learning. You can help your memory by using images, drawing diagrams, writing words down and focusing on them. English spelling is particularly challenging for native speakers so don't worry if you find it difficult. It's a good idea to find and use memory strategies that suit your learning style. Try googling 'memory strategies for language learning', and you will find lots of useful tips.";
        this.sound = "pers-rememberwords";
        break;
      case 5:
        this.target = "You are a reflector who likes to notice and think about things for yourself before acting. You probably learn best by analysing the language, and you set yourself very high standards. This is good, but don't worry too much about being completely perfect or you'll never open your mouth. Relax a little and focus on communication. Look for contexts where people are more interested in <b>what</b> you say than <b>how</b> you say it, such as language clubs and hobby activities.";
        this.sound = "pers-observe";
        break;
      case 6:
        this.target = "Your style of learning is that of a theorist, who likes to understand the rules before having the confidence to speak. You probably feel more comfortable if the approach to learning is grammatical and you probably write the language very accurately. However, it is not always easy, nor necessary, to achieve the same accuracy in speech so you may be reluctant to speak. Remember, most people are listening to what you say, not noticing if you make mistakes.";
        this.sound = "pers-grammar";
        break;
      case 7:
        this.target = "You are an active learner who believes in learning through doing. You probably enjoy learning by experimenting, playing games, acting and so on. You are happy in classes that are lively and communicative. Remember that it's also important to reflect on the context and use appropriate language. Some contexts may demand a more formal and careful approach.";
        this.sound = "pers-jumpin";
        break;
      case 8:
        this.target = "You are an auditory and pragmatic type of learner who prefers to learn inductively, ie, you listen to examples and build up the rules for yourself, rather than learning the rules first. You learn best by getting lots of exposure to the real language whether in the classroom or elsewhere.";
        this.sound = "pers-listen";
        break;
      case 9:
        this.target = "It is often difficult for naturally introverted people to develop their oral skills. They are often good at reading and writing, but lack of practice in speaking completes the cycle and makes them even more shy and anxious. Try to develop your oral skills indirectly, for example, with the help of the social media. Writing emails, texts, blogs and joining chat groups could increase your confidence. Look out for small, safe groups in encouraging contexts where you will feel more comfortable practicing your oral skills.";
        this.sound = "pers-shy";
        break;
      case 10:
        this.target = "Traditional school classrooms and external evaluation (examinations, for example) often make people highly self-critical and anxious. You need to boost your self-esteem and concentrate on your own best skills. Find opportunities to use your language in more natural and authentic contexts, such as language clubs and cafes.";
        this.sound = "pers-compare";
        break;
      default:
        this.target = "- Click on a comment to see a response";
        this.sound = null;
      }
    } else if (this.translate.currentLang === "fi") {
      this.sound = null;
      switch (num) {
      case 1:
        this.target = "- Olet luultavasti teoreettinen oppija ja lähestyt oppimistasi hyvin analyyttisesti. Pyrkimyksesi virheettämyyteen saattaa myös johtua aiemmista kokemuksistasi. Hakeudu sellaisiin oppimistilanteisiin ja sellaisille kursseille, joilla korostetaan kielenkäyttää ja kommunikointia. Näin pääset vähitellen eroon virheiden pelosta ja saat itseluottamusta.";
        break;
      case 2:
        this.target = "- Sinussa on mahdollisesti teoreetikkoa ja reflektoijaa, jolle kielioppi on tärkeä, ja joka harkitsee tarkkaan ennen suunsa avaamista. Luonnollisissa puhetilanteissa harkinta-aikaa ei aina ikävä kyllä ole. Kirjoittamisen kanssa on toisin, koska siinä on enemmän aikaa ajatella. Etsiydy tilanteisiin, joissa pystyt rentoutumaan ja puhumaan spontaanisti ja luottavaisesti. Tällaisia ovat esim. sosiaaliset kontaktit toisten ei-natiivien kanssa.";
        break;
      case 3:
        this.target = "Hyvän ääntämyksen saavuttamisessa esiintyy suuria yksilöllisiä eroja. Jos jännität ja pelkäät puhumista ääntämisesi vuoksi, alat ehkä vältellä tilanteita, joissa joudut puhumaan. Yritä hakeutua sellaisiin tilanteisiin (tai kursseille), joilla tunnet olosi turvalliseksi ja kykenet rentoutumaan. Kun uskallat avata suusi ja puhua, saat tarvitsemaasi harjoitusta ja ääntämisesi paranee vähitellen. Muista, ettet ole yksin tämän pelkosi kanssa.<br><br>ääntämisen tapa (aksentti), joka meillä kullakin on, on osa persoonaamme ja sitä tulisi kunnioittaa. Siitä voi päätellä jotain taustastamme, mutta häpeän aihe se ei todellakaan ole. ";
        break;
      case 4:
        this.target = "Oppimistyylisi on visuaalinen ja verbaalinen. Käytä mielikuvia, piirrä kaavioita ja kirjoita sanoja ylös. Englannin oikeinkirjoitus on haastavaa äidinkielisillekin, joten älä turhaan murehdi, jos se tuntuu vaikealta. Käytä tyyliisi sopivia muististrategioita. Netistä löydät hyödyllisiä vihjeitä, kun googlaat 'muististrategiat'.";
        break;
      case 5:
        this.target = "Reflektiiviseen tyyliisi kuuluu panna merkille ja pohtia asioita perusteellisesti ennen kuin puhut. Opit analysoimalla kieltä tarkkaan ja asetat ehkä korkeitakin tavoitteita itsellesi. Hyvä niin, mutta muista, ettei taitojesi tarvitse olla täydelliset. Älä jää tuppisuuksi, vaan ota välillä rennommin ja keskity kommunikointiin. Etsiydy tilanteisiin (kieliklubit ja harrastukset), joissa ollaan kiinnostuneempia siitä, <b>mitä</b> Sinulla on sanottavana kuin siitä, <b>miten</b> puhut.";
        break;
      case 6:
        this.target = "Olet oppimistyyliltäsi teoreetikko ja haluat ymmärtää säännöt ennen kuin uskallat puhua. Sinusta on helpompaa lähestyä oppimista kieliopista käsin ja kirjoitat varmaan varsin virheettömästi. Puhuessasi et välttämättä ihan helposti pääse samaan tarkkuuteen ja virheettömyyteen eikä se ole aina tarpeenkaan. Älä silti vältä puhumista, vaan hakeudu tilanteisiin, joissa voit keskittyä spontaaniin kommunikointiin. Kuulijasi eivät luultavasti välttämättä edes huomaa virheitäsi, koska viestisi sisältö on heille tärkein.";
        break;
      case 7:
        this.target = "Olet aktiivinen kielenoppija ja uskot tekemällä oppimiseen. Sinusta on luultavasti mukavaa opiskellessasi kokeilla uutta, pelata ja leikkiä, näytellä jne. Pidät kursseista, joilla kommunikointi, ei kielioppi, on keskeisintä. Joskus Sinun saattaa olla hyvä tehdä sellaista kielityötä, jossa keskityt tuotokseen ja sen virheettömyyteen, koska on sellaisiakin kielenkäyttötilanteita, joissa muodollisempi lähestymistapa on paikallaan.";
        break;
      case 8:
        this.target = "Olet auditiivinen oppija ja suhtaudut kielenoppimiseen pragmaattisesti. Sinulle sopii induktiivinen tapa opiskella eli etenet kuulemistasi käytännön esimerkeistä sääntöihin sen sijaan että opettelisit säännöt ensin. Sinun pitää päästä tekemisiin aidon kielen kanssa olitpa sitten kielikurssilla tai itseopiskelutilanteessa.";
        break;
      case 9:
        this.target = "Monelle introvertille henkilölle suullisen taidon kehittäminen on vaikeaa. Lukeminen ja kirjoittaminen sujuu, mutta harjoituksen puute puhumisessa saa yhä haluttomammaksi ja pelokkaammaksi puhumaan. Kannattaa kehittää suullista taitoa epäsuorasti, vaikkapa tietokoneen avulla. Kirjoittamalla s-posteja ja blogeja, tviittaamalla ja chattailemalla saa lisää itseluottamusta. Myöhemmin uskallusta ehkä jo riittääkin pieneen keskusteluryhmään liittymiseen. Tärkeintä on varmaan, että olo tuntuu turvalliselta.";
        break;
      case 10:
        this.target = "Monet perinteiset luokkahuonetilanteet ja ulkoinen arviointi (esimerkiksi kokeet ja tentit) ovat usein omiaan lisäämään oppijoiden itsekritiikkiä ja pelkoja. Itsearviointitaitojen kehittäminen on hyvin tärkeää, jos vertailu vaikeuttaa opiskeluasi. Yritä keskittyä omiin vahvoihin alueisiisi ja hakeudu autenttisiin kielenkäyttötilanteisiin, kieliklubeihin ja -kahviloihin.";
        break;
      default:
        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen"
      }
    }
  }
}
