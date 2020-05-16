import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardContainer from './CardContainer'
import Nav from './Nav'

const Tv = () => {

  const [popularTv, setPopularTv] = useState([])
  const [topRatedTv, setTopRatedTv] = useState([])
  const [onTheAirTv, SetOnTheAirTv] = useState([])
  const [airingToday, SetAiringToday] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setPopularTv(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => setTopRatedTv(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => SetOnTheAirTv(data.results))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=ae73920dc1db068b1ee4b5b159748206`)
      .then(res => res.json())
      .then(data => SetAiringToday(data.results))
  }, [])


  return (
    <>
      <div>{'Estoy en TV'}</div>
      <CardContainer props={popularTv} sectionName={'Series que son tendencia'}></CardContainer>
      <CardContainer props={topRatedTv}></CardContainer>
      <CardContainer props={onTheAirTv}></CardContainer>
      <CardContainer props={airingToday}></CardContainer>
    </>
  )

}

export default Tv;
