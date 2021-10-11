import React from 'react';
import { Icon } from '@iconify/react';
import { RepoProps } from '../../types';

const Repo = ({ repo }: RepoProps) => {
  const { language, builtBy, totalStars, forks, repositoryName, username, url } = repo;
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="item">
          <div className="item-top">
            <h3><Icon icon="octicon:repo-24" /> <a href={url} >{username} / {repositoryName}</a></h3>
            <button className="btn btn-primary star-btn"><Icon icon="akar-icons:star" /> Star</button>
          </div>
          <div className="description">
            <p>{repo.description}</p>
          </div>
          <div className="footer">
            { language && <span>{language}</span> }
            <span><Icon icon="akar-icons:star" /> {totalStars}</span>
            <span><Icon icon="icon-park-outline:fork" /> {forks}</span>
            { builtBy && <span>Built by</span> }
            {
              builtBy && builtBy.map((dev, i) => {
                return (
                  <a href={dev.url} title={dev.username}>
                    <img src={dev.avatar} />
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default Repo;