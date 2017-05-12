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
        this.target = "- You have a clear need on which you can base a plan to develop your academic reading skills. Perhaps you could benefit from a reading group which may introduce you to strategies that can make you a more efficient reader. Alternatively,  in the <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Room</a> on the internet, you will find ideas on how to improve your English reading skills (the website is mainly in Finnish).";
        break;
      case 2:
        this.target = "- If possible, register on a course especially aimed at students going on exchange programmes. Find out all you can about the culture of your target country and consider attending an intercultural communication group. Find out about the academic culture of the institution you're going to, and think about how you will be using the language (attending lectures, writing papers).  Are you aware of your skills level, as a starting point evaluate your skills with the help of the <a href='http://www.coe.int/t/dg4/education/elp/elp-reg/Source/assessement_grid/assessment_grid_english.pdf' target='_blank'>Common European Framework of Reference Self-Assessment Grid</a> and try to get and reflect upon feedback.";
        break;
      case 3:
        this.target = "Think carefully about what exactly you'd like to work on, and why. Does a lack of self-confidence interfere with communication? If so, what are the reasons behind this?  Do you rarely have the opportunity of talking in the target language?  Or do you feel the need to work specifically on your pronunciation?  Perhaps you could consider joining an oral skills or discussion group. You could also focus on your pronunciation  on the internet, both by listening to good speakers and by actively working on stress and intonation. Most importantly, lower the threshold and talk whenever the opportunity arises, also in situations beyond the classroom.";
        break;
      case 4:
        this.target = "Feeling at home in a different cultural context to some degree goes beyond the level of  one's language skills: you may feel that your social skills are not as efficient as they are back home. Attending an intercultural communication group would be beneficial. You would acquire tools that can help you to adapt to and understand your target culture, which in turn will enrichen your experience and enhance any form of interaction.";
        break;
      case 5:
        this.target = "The vocabulary you have is made up of different items: some words you simply recognise when you're reading or listening, while others you can actively use when speaking or writing yourself. You are the one who knows best how well you need to know any particular word.  You can widen your active vocabulary range both by gaining confidence with your passive word base, and by noticing, and being selective with,  new words that you come across  You should try to use new words when offered the possibility. If you lack real-life opportunities, memory strategies can help you learn the words.";
        break;
      case 6:
        this.target = "Academic writing has norms that you need to follow. Keep cultural differences in mind i.e. Finnish academic writing may follow different criteria to Anglo-American academic writing. You could ideally attend an academic writing group, but you may also learn much from paying attention to the structure, style and vocabulary of articles written in your field.";
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
        this.target = "- Sinulla on selkeä tarve, jonka pohjalta voit tehdä tavoitteellisen suunnitelman akateemisen lukemisen vahvistamiseen. Mieti olisiko kurssi tarpeen vai pystyisitkö itse nostamaan taitosi tarvittavalle tasolle. Tutustu <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Roomiin</a> verkossa saat ideoita lukutaitojesi parantamiseen erityisesti englannin osalta tai käy <a href='http://h27.it.helsinki.fi/spraknat/' target='_blank'>Språknåt-sivuilla</a>, jos haluat apua ruotsinkielisten kirjojen lukemiseen.";
        break;
      case 2:
        this.target = "- Kielitaitotarpeiden kartoittaminen on hyvä aloittaa ajoissa. Hae tietoa kohdemaan kulttuurista ja erityisesti opiskelukulttuurista siinä oppilaitoksessa, johon olet menossa. Keskity vaihto-ohjelmasi vaatimusten mukaisen kielitaidon kohentamiseen (luentojen kuuntelu. esseiden kirjoittaminen jne.). Mitä kieltä/kieliä tarvitset? Millaisia osataitoja tarvitset? Minkätasoista taitoa tarvitset eri osataidoissa? Arvioi ja pohdi taitojasi Yleiseurooppalaisen viitekehyksen taitotasokuvauksien avulla: <a href='https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=090000168045bb56'>Common European Framework of Reference Self-Assessment Grid</a>.  Jos mahdollista, hakeudu erityisesti vaihtoon lähteville suunnatulle kurssille. Kulttuurien väliseen kommunikointiin keskittyvä ryhmä voisi myös olla avuksi.";
        break;
      case 3:
        this.target = "Sujuvuus on usean tekijän summa. Mieti, millaisia asioita eniten haluaisit parantaa ja miksi. Vaikeuttaako itseluottamuksen puute puhumistasi? Olisiko ennen kaikkea tarpeen ryhtyä tietoisesti hakeutumaan puhetilanteisiin ja hankkia lisää sujuvuutta sitä kautta? Ovatko kuuntelutaitosi keskustelutilanteissa riittävät?  Harkitse keskustelukurssia tai -ryhmää. Hae keskustelukumppani vaikkapa kielikeskuksen itseopiskelun ilmoitustaululta.Tarvitsetko harjoitusta erityisesti ääntämisessä? Netissä voit kuunnella eri puhujia ja työstää ääntämistäsi (esim. sanapainoa ja intonaatiota). Avaa rohkeasti suusi aina kun voit sen tehdä, myös arjessa eikä pelkästään luokassa.";
        break;
      case 4:
        this.target = "Uusi ja erilainen työ- ja kulttuuriympäristö asettaa vaatimuksia sosiaalisille taidoille yleensäkin, ei pelkästään kielitaidolle. Kulttuurien väliseen kommunikointiin keskittyvä ryhmä voisi antaa työkaluja uuden kulttuurin ymmärtämiseen ja siihen sopeutumiseen.";
        break;
      case 5:
        this.target = "Sanavarastoosi kuuluu erilaista ainesta: osan sanoista tunnistat lukiessasi ja/tai kuullessasi, osaa sanoista myös käytät puhuessasi ja/tai kirjoittaessasi. Sinä itse tiedät, millainen osaaminen on tarpeen minkäkin sanan kohdalla. Voit laajentaa aktiivista sanavarastoasi passiivista osaamistasi hyödyntäen sekä kiinnittämällä huomiota ja valikoimalla eteesi tulevista uusista sanoista itsellesi tarpeelliset. Yritä käyttää näitä uusia sanoja aina, kun siihen on mahdollisuus, joko puhuessasi tai kirjoittaessasi. Myös muististrategiat auttavat oppimaan uutta sanastoa.";
        break;
      case 6:
        this.target = "Akateemisen kirjoittamisen käytänteet vaihtelevat kulttuurista toiseen ja englanninkielisessä gradussa on hyvä oppia noudattamaan anglo-amerikkalaisen akateemisen kirjoittamisen normistoa. Kaikki, mitä luet graduasi varten auttaa Sinua myös kirjoittajana eli tarkkaile englanninkielisten akateemisten tekstien rakennetta, tyyliä ja sanastoa. Akateemisen kirjoittamisen ryhmästä olisi varmasti hyötyä.";
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
