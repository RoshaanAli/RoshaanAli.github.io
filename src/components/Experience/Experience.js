import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, CompanyAndWokringPeriod, Li, ListTitle, Position, ResponsibilitiesDiv, ResponsibilityTitle, Ul, WorkingPeriod } from './ExperienceStyle';

const data = [
    {
        company: "Ciphers Lab",
        workingPeriod: 'June 2019 to December 2019',
        postion: "ReactJS Developer",
        responsibilities: [
            "Contribute to the design and implementation of new features and functionalities for web applications.",
            "Write clean, reusable, and efficient code following best practices.",
            "Take initiative in learning new skills and techniques to enhance your development capabilities."
        ]
    },
    {
        company: "Tafsol Technologies",
        workingPeriod: 'August 2020 to August 2021',
        postion: "Senior Associate (ReactJS | React Native | NextJS)",
        responsibilities: [
            "Collaborate with design to translate wireframes and mockups into functional components.",
            "Implement best practices for front-end architecture, design patterns, and code quality.",
            "Develop and maintain mobile applications using React Native for iOS and Android platforms.",
            "Ensure seamless integration with back-end services and APIs."
        ]
    },
    {
        company: "Outsource In Pakistan (OIP)",
        workingPeriod: 'August 2021 to March 2022',
        postion: "Team Lead (Web And Mobile Apps)",
        responsibilities: [
            'Implement pixel-perfect UI components that meet design specifications and ensure cross-browser compatibility.',
            'Communicate effectively within the team and across departments to ensure smooth project execution.',
            'Ensure applications meet quality standards, are fully functional, and are delivered on time.',
            'Provide technical guidance and mentorship to junior developers.',
            'Conduct code reviews to ensure adherence to coding standards, scalability, and performance.',
            'Investigate and resolve complex technical issues and bugs.',
            "Deploy applications to the App Store and Google Play Store."
        ]
    },
    {
        company: "Fascom Ltd.",
        workingPeriod: '2022 to Present',
        postion: "Software Engineer",
        responsibilities: [
            'Develop reusable components and libraries for future use.',
            'Ensure the performance, quality, and responsiveness of applications.',
            'Optimize components for maximum performance across different devices and screen sizes.',
            'Implement caching mechanisms as needed.',
            'Identify and troubleshoot performance bottlenecks and resolve bugs to improve application performance.'
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
