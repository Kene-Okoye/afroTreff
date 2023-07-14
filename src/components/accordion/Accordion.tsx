import accordionStyles from '@/components/accordion/Accordion.module.css';

type AccordionProps = {
  summaryText: string;
  undisclosedText: string;
};

const Accordion = ({ summaryText, undisclosedText }: AccordionProps) => {
  return (
    <details className={accordionStyles['accordion']}>
      <summary>{summaryText}</summary>
      <div className={accordionStyles['accordion--text-wrapper']}>
        <p className={accordionStyles['accordion--text']}>{undisclosedText}</p>
      </div>
    </details>
  );
};

export default Accordion;
