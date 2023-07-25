import HeroSection from '@/components/hero/HeroSection';
import Accordion from '@/components/accordion/Accordion';

import faqStyles from '@/pages/faq/Faq.module.css';
import heroImageFaq from '@/assets/images/blog_image_2.webp';

const faqContent = [
  {
    id: 1,
    summaryText: 'Where does the AfroTreff event take place?',
    undisclosedText:
      ' Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix a putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere',
  },
  {
    id: 2,
    summaryText: 'When does the AfroTreff event take place?',
    undisclosedText:
      ' Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix a putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere',
  },
  {
    id: 3,
    summaryText: 'How much does it cost / Is there an entrance fee for the AfroTreff event?',
    undisclosedText:
      ' Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix a putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere',
  },
  {
    id: 4,
    summaryText: 'When does the AfroTreff event take place?',
    undisclosedText:
      ' Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix a putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere',
  },
  {
    id: 5,
    summaryText: 'How can I support AfroTreff?',
    undisclosedText:
      ' Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix a putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere',
  },
];

const Faq = () => {
  return (
    <>
      <HeroSection
        h1Text="FAQ"
        pText="Got possible questions about AfroTreff? We've got your back"
        backGroundImage={heroImageFaq}
      />
      <section>
        <h2>General questions and answers</h2>
        <ul className={faqStyles['faq--mobile']} role="list" aria-roledescription="accordion">
          {faqContent.map(({ id, summaryText, undisclosedText }) => (
            <li key={id}>
              <Accordion summaryText={summaryText} undisclosedText={undisclosedText} />
            </li>
          ))}
        </ul>

        <ul className={faqStyles['faq--desktop']} role="list">
          {faqContent.map(({ id, summaryText, undisclosedText }) => (
            <li key={id}>
              <h3> {summaryText}</h3>
              <p>{undisclosedText}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Faq;
