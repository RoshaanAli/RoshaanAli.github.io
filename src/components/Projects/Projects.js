import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, BlogCardBtn } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Projects = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    // setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    // setIsOpen(false);
  }
  return (
    <>
      <Section id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <GridContainer>
          {projects.map((p, i) => {
            return (
              <BlogCard key={i} onClick={openModal}>
              <BlogCardBtn onClick={openModal}>
                <Img src={p.image} />

                <HeaderThree title={p.title}>{p.title}</HeaderThree>
                <Hr />

                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  {/* <TitleContent>Tech Stack</TitleContent> */}
                  <Hr />
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                {/* <UtilityList>
                  <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
                  <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                </UtilityList> */}
                </BlogCardBtn>
              </BlogCard>
            );
          })}
        </GridContainer>
      </Section>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
)};

export default Projects;