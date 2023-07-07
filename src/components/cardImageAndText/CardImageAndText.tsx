import teamFrancis from '@/assets/images/team_Francis.webp';

import cardImageAndTextStyles from '@/components/cardImageAndText/CardImageAndText.module.css';

const CardImageAndText = () => {
  return (
    <>
      <div className={cardImageAndTextStyles['image-text-container']}>
        <div className={cardImageAndTextStyles['image-wrapper']}>
          <img src={teamFrancis} alt="" />
        </div>
        <div className={cardImageAndTextStyles['text-wrapper']}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium. Quos
            voluptates rerum porro aliquid, sed cupiditate, quod eligendi laboriosam, excepturi
            earum itaque. Nostrum est repellendus assumenda placeat totam veritatis! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
            <br />
            <br />
            Officiis inventore, veniam doloribus temporibus obcaecati nobis est qui nihil cupiditate
            amet reiciendis deserunt impedit! Quibusdam corrupti optio exercitationem sapiente harum
            obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aspernatur amet dicta, recusandae repudiandae a ad illo aliquam. Aspernatur quisquam sit
            doloribus et rerum similique recusandae doloremque iste soluta perspiciatis.
          </p>
        </div>
      </div>

      <div className={cardImageAndTextStyles['image-text-container']}>
        <div className={cardImageAndTextStyles['image-wrapper']}>
          <img src={teamFrancis} alt="" />
        </div>
        <div className={cardImageAndTextStyles['text-wrapper']}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, accusantium. Quos
            voluptates rerum porro aliquid, sed cupiditate, quod eligendi laboriosam, excepturi
            earum itaque. Nostrum est repellendus assumenda placeat totam veritatis! Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.
            <br />
            <br />
            Officiis inventore, veniam doloribus temporibus obcaecati nobis est qui nihil cupiditate
            amet reiciendis deserunt impedit! Quibusdam corrupti optio exercitationem sapiente harum
            obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aspernatur amet dicta, recusandae repudiandae a ad illo aliquam. Aspernatur quisquam sit
            doloribus et rerum similique recusandae doloremque iste soluta perspiciatis.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardImageAndText;
