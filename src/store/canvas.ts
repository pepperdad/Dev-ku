import type { fabric } from 'fabric'
import { writable } from 'svelte/store'

import { getRandomInt } from 'src/lib/getRandom'
import { backgrounds } from 'src/const/colors'

import macbookImg from 'src/assets/costume/macbook.png'
import appleWatchImg from 'src/assets/costume/appleWatch.png'
import glassesImg from 'src/assets/costume/glasses.png'
import laptopImg from 'src/assets/costume/laptop.png'
import hairImg from 'src/assets/costume/hair.png'
import coffeeImg from 'src/assets/costume/coffee.png'
import gogglesImg from 'src/assets/costume/goggles.png'
import hairbandImg from 'src/assets/costume/hairband.png'
import headphonesImg from 'src/assets/costume/headphones.png'
import basketballImg from 'src/assets/costume/basketball.png'
import basketballVestImg from 'src/assets/costume/basketballVest.png'
import airpotImg from 'src/assets/costume/airpot.png'
import ballCapImg from 'src/assets/costume/ballCap.png'
import darkCirclesImg from 'src/assets/costume/darkCircles.png'
import toastImg from 'src/assets/costume/toast.png'
import watchImg from 'src/assets/costume/watch.png'
import sneakersImg from 'src/assets/costume/sneakers.png'
import cookieImg from 'src/assets/costume/cookie.png'
import hardHatImg from 'src/assets/costume/hardHat.png'

export const background = writable(backgrounds[getRandomInt(0, backgrounds.length - 1)])

export const canvas = writable<fabric.Canvas | null>()
export const width = writable(600)

const defaultCostume = {
  glasses: false,
  hair: false,
  laptop: false,
  coffee: false,
  goggles: false,
  hairband: false,
  headphones: false,
  basketball: false,
  basketballVest: false,
  airpot: false,
  ballCap: false,
  darkCircles: false,
  hardHat: false,
  toast: false,
  watch: false,
  sneakers: false,
  cookie: false,
}

export type CostumeKeys = keyof typeof defaultCostume

export const costumeInfo = {
  glasses: {
    title: '맥북',
    src: macbookImg,
  },
  hair: {
    title: '애플워치',
    src: appleWatchImg,
  },
  laptop: {
    title: '노트북',
    src: laptopImg,
  },
  coffee: {
    title: '커피',
    src: coffeeImg,
  },
  goggles: {
    title: '고글',
    src: gogglesImg,
  },
  headphones: {
    title: '헤드폰',
    src: headphonesImg,
  },
  hairband: {
    title: '농구 머리띠',
    src: hairbandImg,
  },
  basketballVest: {
    title: '농구 조끼',
    src: basketballVestImg,
  },
  basketball: {
    title: '농구 공',
    src: basketballImg,
  },
  airpot: {
    title: '에어팟',
    src: airpotImg,
  },
  ballCap: {
    title: '볼캡',
    src: ballCapImg,
  },
  darkCircles: {
    title: '다크써클',
    src: darkCirclesImg,
  },
  hardHat: {
    title: '안전모',
    src: hardHatImg,
  },
  toast: {
    title: '토스트',
    src: toastImg,
  },
  watch: {
    title: '애플워치',
    src: watchImg,
  },
  sneakers: {
    title: '운동화',
    src: sneakersImg,
  },
  cookie: {
    title: '쿠키',
    src: cookieImg,
  },
}

const aplcu = {
  glasses: false,
  hair: false,
  laptop: false,
  coffee: false,
  goggles: false,
  hairband: false,
  headphones: false,
  basketball: false,
  basketballVest: false,
  airpot: false,
  ballCap: false,
  darkCircles: false,
  hardHat: false,
  toast: false,
  watch: false,
  sneakers: false,
  cookie: false,
}


export const headInfo = {
  glasses: {
    title: '맥북',
    src: macbookImg,
  },
  hair: {
    title: '애플워치',
    src: appleWatchImg,
  },
}

export const bodyInfo = {
  glasses: {
    title: '맥북',
    src: macbookImg,
  },
  hair: {
    title: '애플워치',
    src: appleWatchImg,
  },
}

export const faceInfo = {
  glasses: {
    title: '맥북',
    src: macbookImg,
  },
  hair: {
    title: '애플워치',
    src: appleWatchImg,
  },
}

export const handInfo = {

  hair: {
    title: '애플워치',
    src: appleWatchImg,
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
