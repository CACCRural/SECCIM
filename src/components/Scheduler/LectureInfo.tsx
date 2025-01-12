import React from 'react'

import Window from '../Window'
import getData from '../../database'
import { colors } from '../../styles/colors'
import {
  LectureInfoDiv,
  SpeakerContentDiv,
  SpeakerImage,
  LectureContentDiv,
  LogoImage,
  SpeakersDiv,
  SpeakersHeader,
  LectureDescription,
} from './styles'
import { Lecture } from '../../types'

const BASE_IMAGES_LOCATION = 'assets/images/'

function getLecture(dayId: number, lectureId: number) {
  const days = getData().filter(schedule => schedule.id === dayId)
  let lectures = days[0] ? days[0].lectures : []
  lectures = lectures.filter(lecture => lecture.id === lectureId)
  return lectures[0] ? lectures[0]: null
}

export default function LectureInfo(props:any) {
  const lecture: Lecture|null = getLecture(props.dayId, props.lectureId)

  if(!lecture || !lecture.description) {
    return <LectureInfoDiv style={{ opacity: "0"}}>      
    </LectureInfoDiv>
  }

  let useColumn = false
  const speakers:any[] = []
  if(lecture.speakers) {
    lecture.speakers.forEach((speaker, index) => {
      const speakerName = <SpeakersHeader>{speaker}</SpeakersHeader>
      let speakerImage = null
      const imagePath = lecture.speakersImage[index]
      if(imagePath) {
        speakerImage = <SpeakerImage image={BASE_IMAGES_LOCATION + imagePath}/>
      }
      
      speakers.push(
        <SpeakerContentDiv key={`speakers_${index}`}>
          {speakerImage}
          {speakerName}
        </SpeakerContentDiv>
      )
    })
    if(lecture.speakers.length > 2) {
      useColumn = true
    }
  }

  let description = null
  if(lecture.description) {
    description = (
      <LectureDescription>
        {lecture.description}
      </LectureDescription>
    )
  }

  let logo = null
  if(lecture.logoImage) {
    logo = (
      <LogoImage image={BASE_IMAGES_LOCATION + lecture.logoImage} />
    )
  }

  return (
    <LectureInfoDiv>
      <Window title="Palestrantes"
        width="100%"
        height="100%"
        contentBackgroundColor={colors.blue}
        contentHeight='calc(100% - 55px)'
        contentWidth='100%'
        removePadding
      >
        <LectureContentDiv>
          <SpeakersDiv useColumn={useColumn}>
            {speakers}
          </SpeakersDiv>
          {description}
          {logo}
        </LectureContentDiv>
      </Window>
    </LectureInfoDiv>
  )
}
