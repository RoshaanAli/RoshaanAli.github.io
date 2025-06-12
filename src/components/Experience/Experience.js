import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, CompanyAndWokringPeriod, Li, ListTitle, Position, ResponsibilitiesDiv, ResponsibilityTitle, Ul, WorkingPeriod } from './ExperienceStyle';

const data = [
    {
        company: "Ciphers Lab",
        workingPeriod: 'June 2019 to December 2019',
        postion: "ReactJS Developer",
        responsibilities: [
            "Contributed to the design and implementation of new features and functionalities for web applications.",
            "Wrote clean, reusable, and efficient code following best practices.",
            "Took initiative in learning new skills and techniques to enhance your development capabilities."
        ]
    },
    {
        company: "Tafsol Technologies",
        workingPeriod: 'August 2020 to August 2021',
        postion: "Senior Associate (ReactJS | React Native | NextJS)",
        responsibilities: [
            "Collaborated with design teams to translate wireframes into functional components.",
            "Implemented best practices for front-end architecture, design patterns, and code quality.",
            "Ensured seamless integration with back-end services and APIs.",
            "Maintained mobile applications using React Native for IOS and Android.",
            "Applied best practices in front-end architecture and design patterns."
        ]
    },
    {
        company: "Outsource In Pakistan (OIP)",
        workingPeriod: 'August 2021 to March 2022',
        postion: "Team Lead (Web And Mobile Apps)",
        responsibilities: [
            'Implemented pixel-perfect UI components ensuring cross-browser compatibility',
            'Led cross-functional communication for smooth project execution.',
            'Ensured application meets quality standards, are fully functional, and are delivered on time.',
            'Provided technical guidance and mentorship to junior developers.',
            'Conducted code reviews to ensure scalability and performance.',
            'Investigated and resolved complex technical issues and bugs.'
        ]
    },
    {
        company: "Fascom Ltd.",
        workingPeriod: '2022 to Present',
        postion: "Software Engineer (React Native)",
        responsibilities: [
            'Developed reusable components and libraries for future use.',
            'Optimized application performance, reducing load time by 30% across devices and screen sizes.',
            'Implement caching mechanisms and troubleshoot performance bottlenecks.',
            'Deployed applications to the App Store and Google Play Store.',
            'Ensured application quality, performance, and responsiveness.'
        ]
    }
];


const Experience = () => (
    <Section>
        <SectionTitle>Experience</SectionTitle>
        {data.reverse().map((item, index) => (
            <div style={{ marginBottom: "5%" }}>
                <CompanyAndWokringPeriod key={index}>
                    <ListTitle>{item?.company}</ListTitle>
                    <WorkingPeriod> - {item?.workingPeriod}</WorkingPeriod>
                </CompanyAndWokringPeriod>
                <Position>{item.postion}</Position>
                <ResponsibilityTitle>Responsibilities:</ResponsibilityTitle>
                <ResponsibilitiesDiv>
                    <Ul>
                        {item.responsibilities?.map((it, i) => <Li key={i}>{it}</Li>)}
                    </Ul>
                </ResponsibilitiesDiv>
            </div>
        ))}
    </Section>
);

export default Experience;
