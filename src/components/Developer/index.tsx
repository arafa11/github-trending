import React from 'react';
import { Icon } from '@iconify/react';
import { DeveloperProps } from '../../types';

const Developer = ({ developer }: DeveloperProps) => {
  const { rank, avatar, name, url, username, popularRepository} = developer;
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="item">
          <div className="row">
            <div className="col-sm-1 rank">
              <span>{rank}</span>
            </div>
            <div className="col-sm-4 dev-info">
              <img src={avatar} />
              <div className="dev-name">
                <h3><a href={url} >{name}</a></h3>
                <p>{username}</p>
              </div>
            </div>
            <div className="col-sm-4 popular-repo">
              <span><Icon icon="carbon:fire" /> Populat Repo</span>
              <span><Icon icon="octicon:repo-24" /> <a href={popularRepository.url}>{popularRepository.repositoryName}</a></span>
              <span>{popularRepository.description}</span>
            </div>
            <div className="col-sm-3 actions">
              <button className="btn btn-primary star-btn">Follow</button>
              <button className="btn btn-primary star-btn"><Icon icon="akar-icons:heart" /> Sponsor</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Developer;