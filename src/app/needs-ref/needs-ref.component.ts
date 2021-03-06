import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-needs-ref',
  templateUrl: './needs-ref.component.html',
  styleUrls: ['./needs-ref.component.css']
})
export class NeedsRefComponent implements OnInit {

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
    this.profileService.profile.needs = formData.needs;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }

  showDetail = function (num) {
    if (this.translate.currentLang === "en"){
      switch (num) {
      case 1:
        this.target = "- You have a clear need on which you can base a plan to develop your academic reading skills. Perhaps you could benefit from a reading group which may introduce you to strategies that can make you a more efficient reader. Alternatively,  in the <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Room</a> on the internet, you will find ideas on how to improve your English reading skills (the website is mainly in Finnish).";
        this.sound = "needs-readalot";
        break;
      case 2:
        this.target = "- If possible, register on a course especially aimed at students going on exchange programmes. Find out all you can about the culture of your target country and consider attending an intercultural communication group. Find out about the academic culture of the institution you're going to, and think about how you will be using the language (attending lectures, writing papers).  Are you aware of your skills level, as a starting point evaluate your skills with the help of the <a href='http://www.coe.int/t/dg4/education/elp/elp-reg/Source/assessement_grid/assessment_grid_english.pdf' target='_blank'>Common European Framework of Reference Self-Assessment Grid</a> and try to get and reflect upon feedback.";
        this.sound = "needs-exchange";
        break;
      case 3:
        this.target = "Think carefully about what exactly you'd like to work on, and why. Does a lack of self-confidence interfere with communication? If so, what are the reasons behind this?  Do you rarely have the opportunity of talking in the target language?  Or do you feel the need to work specifically on your pronunciation?  Perhaps you could consider joining an oral skills or discussion group. You could also focus on your pronunciation  on the internet, both by listening to good speakers and by actively working on stress and intonation. Most importantly, lower the threshold and talk whenever the opportunity arises, also in situations beyond the classroom.";
        this.sound = "needs-morefluent";
        break;
      case 4:
        this.target = "Feeling at home in a different cultural context to some degree goes beyond the level of  one's language skills: you may feel that your social skills are not as efficient as they are back home. Attending an intercultural communication group would be beneficial. You would acquire tools that can help you to adapt to and understand your target culture, which in turn will enrichen your experience and enhance any form of interaction.";
        this.sound = "needs-intlsetting";
        break;
      case 5:
        this.target = "The vocabulary you have is made up of different items: some words you simply recognise when you're reading or listening, while others you can actively use when speaking or writing yourself. You are the one who knows best how well you need to know any particular word.  You can widen your active vocabulary range both by gaining confidence with your passive word base, and by noticing, and being selective with,  new words that you come across  You should try to use new words when offered the possibility. If you lack real-life opportunities, memory strategies can help you learn the words.";
        this.sound = "needs-morewords";
        break;
      case 6:
        this.target = "Academic writing has norms that you need to follow. Keep cultural differences in mind i.e. Finnish academic writing may follow different criteria to Anglo-American academic writing. You could ideally attend an academic writing group, but you may also learn much from paying attention to the structure, style and vocabulary of articles written in your field.";
        this.sound = "needs-thesis";
        break;
      case 7:
        this.target = "You might be able to reduce your anxiety by preparing in advance for speaking situations. Reading, listening and writing all help to prepare you for speech. Get used to hearing yourself speak by reading out loud and talking to yourself, inwardly or outwardly. Try speaking in one-to-one situations before you speak up in public. Gradually you will become more courageous and able to enjoy taking part in all sorts of discussions.";
        this.sound = "needs-courage";
        break;
      default:
        this.target = "- Click on a comment to see a response";
        this.sound = null;
      }
    } else if (this.translate.currentLang === "fi") {
      this.sound = null;
      switch (num) {
      case 1:
        this.target = "- Sinulla on selke?? tarve, jonka pohjalta voit tehd?? tavoitteellisen suunnitelman akateemisen lukemisen vahvistamiseen. Mieti olisiko kurssi tarpeen vai pystyisitk?? itse nostamaan taitosi tarvittavalle tasolle. Tutustu <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Roomiin</a> verkossa saat ideoita lukutaitojesi parantamiseen erityisesti englannin osalta tai k??y <a href='http://h27.it.helsinki.fi/spraknat/' target='_blank'>Spr??kn??t-sivuilla</a>, jos haluat apua ruotsinkielisten kirjojen lukemiseen.";
        break;
      case 2:
        this.target = "- Kielitaitotarpeiden kartoittaminen on hyv?? aloittaa ajoissa. Hae tietoa kohdemaan kulttuurista ja erityisesti opiskelukulttuurista siin?? oppilaitoksessa, johon olet menossa. Keskity vaihto-ohjelmasi vaatimusten mukaisen kielitaidon kohentamiseen (luentojen kuuntelu. esseiden kirjoittaminen jne.). Mit?? kielt??/kieli?? tarvitset? Millaisia osataitoja tarvitset? Mink??tasoista taitoa tarvitset eri osataidoissa? Arvioi ja pohdi taitojasi Yleiseurooppalaisen viitekehyksen taitotasokuvauksien avulla: <a href='https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=090000168045bb56'>Common European Framework of Reference Self-Assessment Grid</a>.  Jos mahdollista, hakeudu erityisesti vaihtoon l??hteville suunnatulle kurssille. Kulttuurien v??liseen kommunikointiin keskittyv?? ryhm?? voisi my??s olla avuksi.";
        break;
      case 3:
        this.target = "Sujuvuus on usean tekij??n summa. Mieti, millaisia asioita eniten haluaisit parantaa ja miksi. Vaikeuttaako itseluottamuksen puute puhumistasi? Olisiko ennen kaikkea tarpeen ryhty?? tietoisesti hakeutumaan puhetilanteisiin ja hankkia lis???? sujuvuutta sit?? kautta? Ovatko kuuntelutaitosi keskustelutilanteissa riitt??v??t?  Harkitse keskustelukurssia tai -ryhm????. Hae keskustelukumppani vaikkapa kielikeskuksen itseopiskelun ilmoitustaululta.Tarvitsetko harjoitusta erityisesti ????nt??misess??? Netiss?? voit kuunnella eri puhujia ja ty??st???? ????nt??mist??si (esim. sanapainoa ja intonaatiota). Avaa rohkeasti suusi aina kun voit sen tehd??, my??s arjessa eik?? pelk??st????n luokassa.";
        break;
      case 4:
        this.target = "Uusi ja erilainen ty??- ja kulttuuriymp??rist?? asettaa vaatimuksia sosiaalisille taidoille yleens??kin, ei pelk??st????n kielitaidolle. Kulttuurien v??liseen kommunikointiin keskittyv?? ryhm?? voisi antaa ty??kaluja uuden kulttuurin ymm??rt??miseen ja siihen sopeutumiseen.";
        break;
      case 5:
        this.target = "Sanavarastoosi kuuluu erilaista ainesta: osan sanoista tunnistat lukiessasi ja/tai kuullessasi, osaa sanoista my??s k??yt??t puhuessasi ja/tai kirjoittaessasi. Sin?? itse tied??t, millainen osaaminen on tarpeen mink??kin sanan kohdalla. Voit laajentaa aktiivista sanavarastoasi passiivista osaamistasi hy??dynt??en sek?? kiinnitt??m??ll?? huomiota ja valikoimalla eteesi tulevista uusista sanoista itsellesi tarpeelliset. Yrit?? k??ytt???? n??it?? uusia sanoja aina, kun siihen on mahdollisuus, joko puhuessasi tai kirjoittaessasi. My??s muististrategiat auttavat oppimaan uutta sanastoa.";
        break;
      case 6:
        this.target = "Akateemisen kirjoittamisen k??yt??nteet vaihtelevat kulttuurista toiseen ja englanninkielisess?? gradussa on hyv?? oppia noudattamaan anglo-amerikkalaisen akateemisen kirjoittamisen normistoa. Kaikki, mit?? luet graduasi varten auttaa Sinua my??s kirjoittajana eli tarkkaile englanninkielisten akateemisten tekstien rakennetta, tyyli?? ja sanastoa. Akateemisen kirjoittamisen ryhm??st?? olisi varmasti hy??ty??.";
        break;
      case 7:
        this.target = "J??nnityst?? saattaa lievent????, jos valmistaudut etuk??teen puhetilanteita varten. Lukeminen, kuunteleminen ja kirjoittaminen auttavat viritt??ytym????n puhetilanteeseen. Lue ????neen ja k??y sis??ist?? keskustelua. N??in totut puhumaan ja my??s kuuntelemaan omaa puhettasi. Puhu aluksi vaikkapa hyv??n yst??v??si kanssa. V??hitellen saat lis???? rohkeutta ja voit osallistua monenlaisiin keskusteluihin.";
        break;
      default:
        this.target = "- Klikkaa kommenttia n??hd??ksesi vastauksen"
      }
    }
  }
}
