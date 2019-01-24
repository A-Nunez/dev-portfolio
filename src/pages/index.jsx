import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, I'm<br /> Armando Nunez.
        </BigTitle>
        <Subtitle>I'm a creative front end developer with extensive back end knowledge. </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="AcciDent Pros"
            link="https://accidentpros.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Multi-page website I built and maintain for AcciDent Pros, a San Diego Auto Collision Repair Shop.
          </ProjectCard>
          <ProjectCard
            title="Near Earth Objects"
            link="https://neo-nasa.herokuapp.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Fun web app that gathers and displays official asteroid data from NASA's API.
          </ProjectCard>
          <ProjectCard
            title="Big Game Tackle"
            link="https://bigtackleshop.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            E-commerce website specializing in big game fishing equipment built in Shopify.
          </ProjectCard>
          <ProjectCard
            title="Innocreations"
            link="https://innocreations.tv/"
            bg="linear-gradient(to right, #B218B2 0%, #bee5f4 100%)"
          >
            Informational site with an option to book an appointment for local media producer, Innocreations.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Armando Nunez Profile Picture" />
          <AboutSub>
            22 year old San Diego native. Aside from coding, I spend most of my time either playing videogames, binging tv series, or hanging out with either my dogs or my dawgs.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I worked retail while teaching myself to code for over a year and a half. After a while, I was confident enough in my abilities to begin looking for ways to start a
          career in web development. That's when I enrolled and completed a full stack coding bootcamp where I learned how to build full stack web applications from start to finish.
          Completing the program led to an internship which then led to part time contract work for the same company. I am currently doing freelance and contract work to gain more experience
          in hopes of landing a developer position at an awesome company with a stellar reputation.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Feel free to <a href="mailto:thearmandonunez@gmail.com">Email </a>me or find me on :{' '}
            <a href="https://www.linkedin.com/in/armando-nunez/">LinkedIn</a> &{' '}
            <a href="https://github.com/A-Nunez">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; Copyright 2019.{' '}
          <a href="https://github.com/A-Nunez/dev-portfolio">Github Repo</a>. Made by{' '}
          <a href="https://www.linkedin.com/in/armando-nunez/">Armando Nunez</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
