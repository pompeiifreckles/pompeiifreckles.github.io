import animefx from '../assets/projects/animefx.png'
import music_recommendation from '../assets/projects/music_recommendation.png'
import react_native from '../assets/projects/react_native.png'
import avr from '../assets/projects/avr.png'

export const projects = [
    {
        title: 'React Native Apps',
        image: react_native,
        link: 'https://github.com/pompeiifreckles/React-Native-Stuff',
        body: 'Cross-Platform Applications for Contacts, Movie Database, ToDo and more built using React Native'
    },
    {
        title: 'Reinventing Arduino',
        image: avr,
        link: 'https://github.com/pompeiifreckles/reinventing_arduino',
        body: 'Making Arduino UNO again with avr atmega328p and electronic components and rewriting the firmware'
    },
    {
        title: 'Music Recommender',
        image: music_recommendation,
        link: 'https://github.com/pompeiifreckles/music_recommender',
        body: 'Music Recommender algorithm using knn trees and condensation for genre categorization'
    },
    {
        title: 'AnimeFX (Active)',
        image: animefx,
        link: 'https://github.com/pompeiifreckles/anime_website_reloaded',
        body: 'AnimeFX is an anime streaming service, serving videos over hls and amazon\'s CDN'
    },
]