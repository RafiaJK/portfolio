import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <Timeline className="home-timeline"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Graduated Flatiron School: Software Engineering Bootcamp</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          {/* 2022 */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Social Media Coordinator</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Graduated Stony Brook University: B.S. Information Systems</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          2016
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Project Management Intern</TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent>
          2010
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Overheated my first MacBook editing Tumblr themes #aesthetic</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          2007
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Got my first taste of coding while updating my MySpace layout daily (so, so, SO much neon)</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}