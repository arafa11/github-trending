import React, { useState } from 'react';
import { useQuery } from 'react-query';
import githubTrends from 'github-trends-api';
import axios from '../../util/axios';
import TrendingHeader from '../../components/TrendingHeader';
import { RepoType } from '../../types';
import Repo from '../../components/Repo';
import reposData from '../../data/repos.json';
import developersData from '../../data/developers.json';

const getRepos = async (page: number) => {
  const res = await axios.get(`/repositories`);
  // const res = await axios.get(`/repositories/?page=${page}`);
  // const res = await axios.get(`http://swapi.dev/api/people/?page=${page}`);
  // console.log('res', reposData);
  return res.data;
  // return reposData;
}

const TrendingRepos = () => {
  const [ page, setPage ] = useState(1);
  const getReposResponse = useQuery(['repos', page], () => getRepos(page), { keepPreviousData : true });
  console.log(getReposResponse);
  // const response: any = getReposResponse.data;
  const { status, isLoading, isError, error, data, isFetching, isPreviousData, } = getReposResponse;
  // const { status, data }: { status: string, data:RepoType[] } = getReposResponse;
  return (
    <div className="container page-wrap">
      <TrendingHeader />
      {status === 'loading' && ( <div>Loading data</div> )}
      {status === 'error' && ( <div>Error fetching data</div> )}
      {status === 'success' && (
        <div>
          { data.results.map((repo: RepoType) => <Repo key={repo.rank} repo={repo} /> ) }
        </div>
      )}
    </div>
  )
}

export default TrendingRepos;