import React from 'react';
import { NavBar } from '../Navbar/Navbar';
import Tag from '../../components/Tag/Tag';
import style from './slug.module.css';
import AuthorInfo from './componenet/AuthorInfo';

const Slug = () => {
  return (
    <>
      <NavBar />
      <div className={style.banner}>
        <div className={style.container}>
          <h1>
            If we quantify the alarm, we can get to the FTP pixel through the
            online SSL interface!
          </h1>
          <AuthorInfo />
        </div>
      </div>

      <div className={style.containerPage}>
        <p className={style.paragraph}>
          {' '}
          Quia quo iste et aperiam voluptas consectetur a omnis et.\nDolores et
          earum consequuntur sunt et.\nEa nulla ab voluptatem dicta vel.
          Temporibus aut adipisci magnam aliquam eveniet nihil laudantium
          reprehenderit sit.\nAspernatur cumque labore voluptates mollitia
          deleniti et. Quos pariatur tenetur.\nQuasi omnis eveniet eos maiores
          esse magni possimus blanditiis.\nQui incidunt sit quos consequatur aut
          qui et aperiam delectus.\nPraesentium quas culpa.\nEaque occaecati
          cumque incidunt et. Provident saepe omnis non molestiae natus
          et.\nAccusamus laudantium hic unde voluptate et sunt
          voluptatem.\nMollitia velit id eius mollitia occaecati repudiandae.
          Voluptatum tempora voluptas est odio iure odio dolorem.\nVoluptatum
          est deleniti explicabo explicabo harum provident quis molestiae. Sed
          dolores nostrum quis. Aut ipsa et qui vel similique sed hic
          a.\nVoluptates dolorem culpa nihil aut ipsam voluptatem. Cupiditate
          officia voluptatum.\nTenetur facere eum distinctio animi qui
          laboriosam.\nQuod sed voluptatem et cumque est eos.\nSint id provident
          suscipit harum odio et. Facere beatae delectus ut.\nPossimus voluptas
          perspiciatis voluptatem nihil sint praesentium.\nSint est nihil
          voluptates nesciunt voluptatibus temporibus blanditiis.\nOfficiis
          voluptatem earum sed. Deserunt ab porro similique est accusamus id
          enim aut suscipit.\nSoluta reprehenderit error nesciunt odit veniam
          sed.\nDolore optio qui aut ab.\nAut minima provident eius repudiandae
          a quibusdam in nisi quam.
        </p>
        <Tag tag={'rerum'} />
        <Tag tag={'rerum'} />
        <Tag tag={'rerum'} />
        <Tag tag={'rerum'} />
        <hr />
        <AuthorInfo />
      </div>
    </>
  );
};

export default Slug;
