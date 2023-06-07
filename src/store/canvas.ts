import type { fabric } from 'fabric'
import { writable } from 'svelte/store'

import { getRandomInt } from 'src/lib/getRandom'
import { backgrounds } from 'src/const/colors'


import hand_dogImg from 'src/assets/costume/강아지.png'
import face_gogglesImg from 'src/assets/costume/고글.png'
import head_armyCapImg from 'src/assets/costume/군모_그림자ver.png'
import face_darkCircleImg from 'src/assets/costume/다크서클.png'
import body_rokaImg from 'src/assets/costume/로카티.png'
import hand_macSpacegrayImg from 'src/assets/costume/맥_스그.png'
import hand_macSilverImg from 'src/assets/costume/맥_실버.png'
import body_apronImg from 'src/assets/costume/미대_앞치마.png'
import body_whiteCoatImg from 'src/assets/costume/백색가운.png'
import hand_beakerImg from 'src/assets/costume/비커.png'
import head_bambooHatImg from 'src/assets/costume/삿갓.png'
import face_sunglassesImg from 'src/assets/costume/선글라스_테x.png'
import body_sweatSuitImg from 'src/assets/costume/아디다스_상.png'
import face_glassesImg from 'src/assets/costume/안경1.png'
import face_roundGlassesImg from 'src/assets/costume/안경2.png'
import face_weirdGlassesImg from 'src/assets/costume/안경3.png'
import hand_appleWatchImg from 'src/assets/costume/애플워치.png'
import head_airPodsImg from 'src/assets/costume/에어팟.png'
import face_blushImg from 'src/assets/costume/연지곤지1.png'
import face_ahamedImg from 'src/assets/costume/연지곤지2.png'
import face_happyImg from 'src/assets/costume/연지곤지3.png'
import hand_bigBrushImg from 'src/assets/costume/왕붓.png'
import hand_milkImg from 'src/assets/costume/우유.png'
import body_plaidImg from 'src/assets/costume/체크남방.png'
import face_brightEyesImg from 'src/assets/costume/초롱초롱눈.png'
import hand_coffeeImg from 'src/assets/costume/커피.png'
import head_imnotkuImg from 'src/assets/costume/토끼귀.png'
import face_imnotkuImg from 'src/assets/costume/토끼입.png'
import head_graduationHatImg from 'src/assets/costume/학사모.png'
import body_graduationSuitImg from 'src/assets/costume/학위복.png'
import hand_bookImg from 'src/assets/costume/회계원리.png'


export const background = writable(backgrounds[getRandomInt(0, backgrounds.length - 1)])

export const canvas = writable<fabric.Canvas | null>()
export const width = writable(600)

const defaultCostume = {
  bambooHat: false,
  armyCap: false,
  imnotku: false,
  airpod: false,
  graduationHat: false,
  blush: false,
  brightEyes: false,
  ahamed: false,
  happy: false,
  goggles: false,
  notku: false,
  sunglasses: false,
  darkCircles: false,
  glasses: false,
  roundGlasses: false,
  weirdGlasses: false,
  apron: false,
  roka: false,
  whiteCoat: false,
  plaid: false,
  sweatSuit: false,
  graduationSuit: false,
  macSpacegray: false,
  macSilver: false,
  beaker: false,
  appleWatch: false,
  bigBrush: false,
  milk: false,
  coffee: false,
  book: false,
  dog: false,
}

export type CostumeKeys = keyof typeof defaultCostume

export const costumeInfo = {
  bambooHat: {
    title: '삿갓',
    src: head_bambooHatImg,
  },
  armyCap: {
    title: '군모',
    src: head_armyCapImg,
  },
  imnotku: {
    title: '나 쿠 아니다',
    src: head_imnotkuImg,
  },
  airpod: {
    title: '에어팟',
    src: head_airPodsImg,
  },
  graduationHat: {
    title: '학사모',
    src: head_graduationHatImg,
  },
  blush: {
    title: '연지곤지',
    src: face_blushImg,
  },
  brightEyes: {
    title: '초롱초롱',
    src: face_brightEyesImg,
  },
  ahamed: {
    title: '뽀옹',
    src: face_ahamedImg,
  },
  happy: {
    title: '발그레',
    src: face_happyImg,
  },
  goggles: {
    title: '고글',
    src: face_gogglesImg,
  },
  notku: {
    title: '뽕주디',
    src: face_imnotkuImg,
  },
  sunglasses: {
    title: '선글라스',
    src: face_sunglassesImg,
  },
  darkCircles: {
    title: '다크서클',
    src: face_darkCircleImg,
  },
  glasses: {
    title: '안경',
    src: face_glassesImg,
  },
  roundGlasses: {
    title: '동글안경',
    src: face_roundGlassesImg,
  },
  weirdGlasses: {
    title: '어지럽다쿠',
    src: face_weirdGlassesImg,
  },
  apron: {
    title: '앞치마',
    src: body_apronImg,
  },
  roka: {
    title: '로카티',
    src: body_rokaImg,
  },
  whiteCoat: {
    title: '백색 가운',
    src: body_whiteCoatImg,
  },
  plaid: {
    title: '체크남방',
    src: body_plaidImg,
  },
  sweatSuit: {
    title: '트레이닝복',
    src: body_sweatSuitImg,
  },
  graduationSuit: {
    title: '학위복',
    src: body_graduationSuitImg,
  },
  macSpacegray: {
    title: '맥북A',
    src: hand_macSpacegrayImg,
  },
  macSilver: {
    title: '맥북B',
    src: hand_macSilverImg,
  },
  beaker: {
    title: '비커',
    src: hand_beakerImg,
  },
  appleWatch: {
    title: '애플워치',
    src: hand_appleWatchImg,
  },
  bigBrush: {
    title: '왕붓',
    src: hand_bigBrushImg,
  },
  milk: {
    title: '우유',
    src: hand_milkImg,
  },
  coffee: {
    title: '커피',
    src: hand_coffeeImg,
  },
  book: {
    title: '회계원리',
    src: hand_bookImg,
  },
  dog: {
    title: '강아지',
    src: hand_dogImg,
  },

}


export const headInfo = {
  bambooHat: {
    title: '삿갓',
    src: head_bambooHatImg,
  },
  armyCap: {
    title: '군모',
    src: head_armyCapImg,
  },
  imnotku: {
    title: '나 쿠 아니다',
    src: head_imnotkuImg,
  },
  airpod: {
    title: '에어팟',
    src: head_airPodsImg,
  },
  graduationHat: {
    title: '학사모',
    src: head_graduationHatImg,
  },
}

export const faceInfo = {
  blush: {
    title: '연지곤지',
    src: face_blushImg,
  },
  brightEyes: {
    title: '초롱초롱',
    src: face_brightEyesImg,
  },
  ahamed: {
    title: '뽀옹',
    src: face_ahamedImg,
  },
  happy: {
    title: '발그레',
    src: face_happyImg,
  },
  goggles: {
    title: '고글',
    src: face_gogglesImg,
  },
  notku: {
    title: '뽕주디',
    src: face_imnotkuImg,
  },
  sunglasses: {
    title: '선글라스',
    src: face_sunglassesImg,
  },
  darkCircles: {
    title: '다크서클',
    src: face_darkCircleImg,
  },
  glasses: {
    title: '안경',
    src: face_glassesImg,
  },
  roundGlasses: {
    title: '동글안경',
    src: face_roundGlassesImg,
  },
  weirdGlasses: {
    title: '어지럽다쿠',
    src: face_weirdGlassesImg,
  },
}

export const bodyInfo = {
  apron: {
    title: '앞치마',
    src: body_apronImg,
  },
  roka: {
    title: '로카티',
    src: body_rokaImg,
  },
  whiteCoat: {
    title: '백색 가운',
    src: body_whiteCoatImg,
  },
  plaid: {
    title: '체크남방',
    src: body_plaidImg,
  },
  sweatSuit: {
    title: '트레이닝복',
    src: body_sweatSuitImg,
  },
  graduationSuit: {
    title: '학위복',
    src: body_graduationSuitImg,
  },
}



export const handInfo = {

  macSpacegray: {
    title: '맥북A',
    src: hand_macSpacegrayImg,
  },
  macSilver: {
    title: '맥북B',
    src: hand_macSilverImg,
  },
  beaker: {
    title: '비커',
    src: hand_beakerImg,
  },
  appleWatch: {
    title: '애플워치',
    src: hand_appleWatchImg,
  },
  bigBrush: {
    title: '왕붓',
    src: hand_bigBrushImg,
  },
  milk: {
    title: '우유',
    src: hand_milkImg,
  },
  coffee: {
    title: '커피',
    src: hand_coffeeImg,
  },
  book: {
    title: '회계원리',
    src: hand_bookImg,
  },
  dog: {
    title: '강아지',
    src: hand_dogImg,
  },
}



export const hasCostume = writable(defaultCostume)

export const toggleCostume = (target: keyof typeof defaultCostume) => {
  hasCostume.update((prev) => ({
    ...prev,
    [target]: !prev[target],
  }))
}

export const resetCostume = () => {
  hasCostume.set(defaultCostume)
}
