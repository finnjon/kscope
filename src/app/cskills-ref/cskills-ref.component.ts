import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-cskills-ref',
  templateUrl: './cskills-ref.component.html',
  styleUrls: ['./cskills-ref.component.css']
})

export class CSkillsRefComponent implements OnInit {
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
    this.profileService.profile.cskills = formData.cskills;
  }

  showDetail = function (num) {
    if (this.translate.currentLang === "en"){
      switch (num) {
      case 1:
        this.target = "- Is there something in particular that stops you from speaking?  Are you too self-conscious to speak up? Are you worried about your skills? Could the  problem be that you rarely get to use the language in a real-life context. Reflect upon situations you have found difficult, work on the aspects that you feel are blocking you e.g. pronunciation, vocabulary. Try to be brave and start looking for situations where you have to speak up, it may not be as bad as you thought.";
        this.sound = "skills-speakup";
        break;
      case 2:
        this.target = "- You can find all kinds of tests on the Internet. Try <a href='http://www.lancaster.ac.uk/researchenterprise/dialang/about.htm'>Dialang</a> and if possible ask for advice on good websites for working on specific skills.";
        this.sound = "skills-evaluating";
        break;
      case 3:
        this.target = "The only way of reactivating your language skills is to use them. You could start with a low threshold, for instance write a journal, talk to friends who also know the language. Once you have regained some confidence the next stage is to start challenging yourself to develop. Self-reflection and feedback are particularly important.";
        this.sound = "skills-reactivate";
        break;
      case 4:
        this.target = "Academic knowledge includes the capacity to develop oneself as a learner. It is crucial to reflect on your own needs and goals and to evaluate your own learning. This also applies to the learning of foreign languages. When you can make a realistic assessment of your own level and needs, you can then also set your own learning objectives. This in turn means that it will be easier for a teacher to help you extend and diversify your learning.";
        this.sound = "skills-teachersjob";
        break;
      case 5:
        this.target = "It is not always essential that writing has to be faultless. Reflective writing may also enhance learning. Think carefully: what kinds of writing have you tried earlier? When you write an informative text, for example, accuracy is more important. Look for models on the Net for writing a CV. Study academic theses and articles from your field to get ideas about academic writing. Make use of unilingual dictionaries and grammars when you're writing. Look up what courses are offered and choose a suitable one especially if you want feedback on your texts. But also write just for yourself sometimes: use the words you want to learn and don't be afraid to experiment with language used by other writers.";
        this.sound = "skills-writing";
        break;
      case 6:
        this.target = "As you learn more about your own subject, reading the textbooks will get easier. Are you familiar with different cultural academic conventions in texts? Knowledge on how texts are written offers insight into how they can be read more effectively. If your problem is difficulty with words, then you may have to actively work on your vocabulary range. Pay attention to key words that you come across in articles and learn them. Are you using a dictionary sensibly? Can you guess or infer the meanings of words? Do you know about skimming and scanning strategies? Expanding your vocabulary will help both not only with reading flow but also with remembering content. You could benefit from attending an academic reading course.On the internet, <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>the Reading Room</a>  offers special tips for reading English texts.";
        this.sound = "skills-reading";
        break;
      case 7:
        this.target = "What makes you think this? Have people struggled with what you have been trying to say, or could it be more a question of your own uncertainty? If you feel your pronunciation limits your communication then you should perhaps acquire some tools that can help you work on it. You could attend a pronunciation group or use some relevant internet sites that deal with pronunciation.";
        this.sound = "skills-pron";
        break;
      case 8:
        this.target = "Think about the words that you really need. For reading it's not always necessary to know exact meanings, whereas for writing a careful choice of words and spelling is important. Collect words, in a notebook or as a computer file, from the books you read, from the films you watch, from conversations, from lessons, and so on. Choose words you think you need, review them frequently and use whenever possible.";
        this.sound = "skills-vocab";
        break;
      case 9:
        this.target = "It might well be that in fact you are correctly using the grammar you have learnt in the past even though it feels as if you've forgotten the rules. Why not try some quick revision on the internet or in the Self Access Centre.  If you still believe you need to work on your grammar you can either attend a grammar group or do some self-study.";
        this.sound = "skills-grammar";
        break;
      case 10:
        this.target = "It helps to actively use the language in different situations. When reading and listening it's important to focus on finding and remembering the essential points. You could also make use of some <a href='http://www.studygs.net/memory.htm' target='_blank'>memory strategies</a>. When memorizing words you might find it helpful to consider what you need the words for and then to link and organise them in a way that's useful for your own purposes.";
        this.sound = "skills-memory";
        break;
      case 11:
        this.target = "That's great! Try to find other rewarding ways of learning language.";
        this.sound = "skills-lyrics";
        break;
      case 12:
        this.target = "Excellent! It is always good to feel confident when communicating, but this doesn't mean that there is no space for improvement. When you're evaluating your own skills it's important to make use of your own experience. You could go on to analyse your skills more precisely, thinking about the situations in which you manage well and those in which you might need to develop.";
        this.sound = "skills-managewell";
        break;
      case 13:
        this.target = "Even in our own language we sometimes have problems understanding other people's speech. Generally the more we listen to a specific accent, the easier it is to understand.<br><br> Whenever possible, get yourself into situations where you can practice your listening skills. You could also do some systematic listening practice: exploit the internet to practice listening to accents that you have difficulty with. Keep in mind that as much as 40% of the words used in speech are not important for the understanding of the message. Try to pick out chunks of language and notice regularities in the dialects used by different speakers. Experiment with listening by turning off subtitles, or use a transcript if one is provided."
        this.sound = "skills-accents";
        break;
      default:
        this.target = "- Click on a comment to see a response";
        this.sound = null;
      }
    } else if (this.translate.currentLang === "fi") {
      this.sound = null;
      switch (num) {
      case 1:
        this.target = "- Onko jotain erityistä syytä, joka estää Sinua puhumasta? Tarkkailetko liikaa itseäsi ja suoriutumistasi? Mietitkö liikaa taitojasi?  Voisiko ongelma olla se, ettet juurikaan pääse käyttämään kieltä oikeissa puhetilanteissa? Pohdi tilanteita, jotka tuntuvat hankalilta ja keskity parantamaan niitä tekijöitä, jotka estävät Sinua puhumasta, esim. sanasto tai ääntäminen. Hakeudu reippaasti tilanteisiin, joissa joudut puhumaan. Selviät todennäköisesti paremmin kuin uskalsit odottaakaan.";
        break;
      case 2:
        this.target = "- Löydät monenlaisia testejä netistä. Kokeile aluksi vaikkapa <a href='http://www.lancaster.ac.uk/researchenterprise/dialang/about.htm'>Dialang</a>.";
        break;
      case 3:
        this.target = "Aloita rohkeasti käyttämään kieltä! Mitä jos kirjoittaisit päiväkirjaa, juttelisit ystävien kanssa vieraalla kielellä tai katselisit leffoja  eli aloittaisit stressittämistä kielenkäyttötilanteista? Vauhtiin päästyäsi voit hakeutua haastavampiin tilateisiin.  Muista reflektoida etenemistäsi ja pyydä palautetta edistymisestäsi.";
        break;
      case 4:
        this.target = "Akateemiseen osaamiseen kuuluu kyky kehittää itseään oppijana: omien tarpeiden ja tavoitteiden pohtiminen ja oppimisen arviointi on tässä keskeistä. Tämä koskee myös vieraita kieliä. Kun osaat itse realistisesti arvioida tasosi ja tarpeesi, osaat myös paremmin asettaa oppimistavoitteesi ja opettajan antama tuki voi tällöin  syventää ja monipuolistaa oppimistasi entisestään.";
        break;
      case 5:
        this.target = "Kirjoittamisessa ei aina ole keskeisintä virheetön tuotos. Oppimista edistää myös pohdiskeleva itselleen kirjoittaminen. Tee tarkempi analyysi: millaista kirjoittamista olet aiemmin kokeillut? Jos kirjoitat muille, on tekstisi oikeellisuuskin tärkeämpää. Hae malleja netistä esimerkiksi CV:n kirjoittamiseen. Tutki aiemmin tehtyjä graduja ja oman alasi akateemisia julkaisuja saadaksesi ideoita tieteelliseen kirjoittamiseen. Hyödynnä yksikielistä sanakirjaa ja kielioppia kirjoittaessasi. Katso kielikeskuksen kurssitarjontaa ja valitse sopivaa taitoa harjoittava kurssi etenkin, jos haluat palautetta teksteistäsi. Kirjoita joskus vain itsellesi: käytä niitä sanoja, joita haluat oppia. Ota mallia toisten kirjoittajien tavasta käyttää kieltä.";
        break;
      case 6:
        this.target = "Oletko juuri aloittanut opintosi? Kun opit lisää omasta alastasi, helpottuu tenttikirjojen lukukin. Tunnetko akateemisten tekstien rakenteen ja kirjoituskäytänteet muissakin kuin äidinkielessäsi? Tieto näistä auttaa Sinua löytämään tehokkaat lukustrategiat.<br><br>Jos sanasto tuottaa ongelmia, kannattaa aktiivisesti laajentaa sanavarastoaan. Lukiessa kannattaa keskittyä avainsanoihin ja opetella ne. Sanavaraston parantaminen auttaa sekä lukemisen sujuvuuttaa että sisällän ymmärrtämistä. Käytätkö sanakirjaa järkevästi? Osaatko arvata ja päätellä sanojen merkitystä? Tunnetko silmäilytekniikoita? Akateemisen lukemisen kurssit/ryhmät voivat auttaa. <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Roomista</a>  saat vinkkejä erityisesti englanninkielisten kirjojen lukemiseen.";
        break;
      case 7:
        this.target = "Mihin käsityksesi perustuu? Ymmärtävätkö puhekumppanisi Sinua vai onko kyse enemmän omasta epävarmuudestasi? Pyydä palautetta siitä, mikä ääntämisessäsi erityisesti vaikeuttaa ymmärtämistä. Netistä löydät sivustoja, joista saat apua ja ideoita ääntämyksesi parantamiseen.";
        break;
      case 8:
        this.target = "Mieti millaisia sanoja eniten tarvitset. Yleissanastoa, akateemista sanastoa, adjektiiveja kuvailuun, verbejä tutkimuksen kirjoittamiseen jne. Millaisia tarkoituksia varten tarvitset sanoja? Lukiessasi et aina tarvitse sanan tarkkaa merkitystä, mutta kirjoittaessasi sinun täytyy valita sanat huolella ja oikeinkirjoituskin on tärkeä. Kerää sanoja lukemistasi kirjoista, katsomistasi elokuvista, kuulemistasi keskusteluista,  oppitunneilta jne.  Kertaa sanoja usein ja käytä niitä aina, kun se on mahdollista.";
        break;
      case 9:
        this.target = "Voi toki olla niinkin, että osaat käyttää oppimaasi kieliopillista ainesta hyvin, vaikka Sinusta tuntuisikin, että säännöt ovat unohtuneet. Kokeile pikakertausta netissä tai kielikeskuksen itseopiskelussa Aleksandriassa, jossa on myös hyvä valikoima kielioppi- ja harjoituskirjoja moneen kieleen. Itseopiskelu voi hyvinkin tuottaa toivotun tuloksen. Kielioppikurssista tai -ryhmästä voi myös olla hyötyä.";
        break;
      case 10:
        this.target = "Kielen aktiivinen käyttö eri tilanteissa auttaa. Lukemisessa ja kuuntelussa on tärkeää keskittyä oleellisten asioiden löytämiseen ja muistamiseen: voit kokeilla olisiko Sinulle hyötyä muistitekniikoista. Sanojen muistamisessa on tärkeää miettiä, mihin tarkoitukseen sanaa tarvitset ja yrittää sitoa se johonkin itsellesi tärkeään kokonaisuuteen.";
        break;
      case 11:
        this.target = "Hienoa! Etsi uusia palkitsevia tapoja oppia lisää kieltä.";
        break;
      case 12:
        this.target = "Hyvä! Osaat varmaan hyödyntää saamasi palautteen ja siten motivoida itseäsi edelleen. Omien kokemusten hyödyntäminen on tärkeää, kun arvioi taitojaan.  Voit tehdä myös tarkemman analyysin taidoistasi ja miettiä, millaisissa tilanteissa selviät ja mitä osaamisen alueita voisit vielä kehittää.";
        break;
      case 13:
        this.target = "Omassa äidinkielessäkin meillä on joskus ongelmia erilaisten puhujien ymmärtämisessä. Tärkeintä on hakeutua rohkeasti tilanteisiin, joissa voit harjoittaa kuuntelutaitoasi. Mitä useammin kuuntelet tiettyä aksenttia, sitä helpommaksi sen ymmärtäminen tulee. Voit joskus myös tehdä suunnitelmallisen kuunteluharjoituksen: etsi netistä materiaalia, jossa on mukana erilaisia puhujia ja niitä aksentteja, jotka tuottavat Sinulle ongelmia. Keskity kuuntelemaan ja aseta tavoitteeksi ymmärtäminen yleisellä tasolla: jopa 40 % puhutun kielen sanoista on sellaisia, ettet välttämättä tarvitse niitä viestin ymmärtämiseen. Yritä hahmottaa kokonaisuuksia ja löytää säännönmukaisuuksia saman variantin eri puhujilta. Ota suomenkiliset tekstitykset pois ja/tai hyödynnä käsikirjoitusta, jos sellainen on.";
        break;
      default:
        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen"
      }
    }
  }
}
