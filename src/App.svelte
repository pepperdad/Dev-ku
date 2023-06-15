<script lang="ts">
  import devKu from './assets/dev-ku.png'
  import {fabric} from 'fabric'
  import {onMount} from 'svelte'
  import Toolbar from './components/Toolbar.svelte'
  import {canvas, width, background} from './store/canvas'
  import {activeTabValue} from './store/tab'
  import {TabValue} from './const/tab'

  $: isLocalhost = window.location.hostname === 'localhost'

  const getWidth = () => {
    if (window.innerWidth < 600) return window.innerWidth
    return 500 // 사이즈 600 -> 500
  }

  const initCanvas = () => {
    $canvas = new fabric.Canvas('canvas')
    $width = getWidth()

    $canvas.setWidth($width * $canvas.getZoom())
    $canvas.setHeight($width * $canvas.getZoom())

    fabric.Image.fromURL(
      devKu,
      function (img) {
        img.scaleToWidth($width)
        img.scaleToWidth($width)
        img.selectable = false
        img.set('itemType', 'bunny')
        $canvas.add(img)
        $canvas.renderAll()
      },
      {crossOrigin: 'anonymous'},
    )
  }

  onMount(initCanvas)

  $: if ($canvas) {
    $canvas.setBackgroundColor($background, () => {
      $canvas.renderAll()
    })
  }

  $: if ($canvas && $activeTabValue) {
    const objects = $canvas.getObjects()
    $canvas.discardActiveObject()

    if ($activeTabValue === TabValue.Background) {
      const bunnyObjects = objects.filter((obj) => obj.itemType !== 'background')
      bunnyObjects.forEach((obj) => {
        obj.opacity = 0.5
      })
    } else {
      const bunnyObjects = objects.filter((obj) => obj.itemType !== 'background')
      bunnyObjects.forEach((obj) => {
        obj.opacity = 1
      })
    }
    $canvas.renderAll()
  }
</script>

<main style={`width: ${width}`}>
  <h1>~나만의 쿠를 만들어보자~</h1>
  <canvas id="canvas" width="2400" height="2400" style="border:1px solid #ccc" />
</main>

<Toolbar />

<footer style={`width: ${$width}`}>
  <span>
    Instagram: <a href="https://www.instagram.com/develop_ku/">@그치만해냈죠</a>
  </span>

  <span> 일러스트: ssj100207@konkuk.ac.kr </span>
</footer>

<style>
  h1 {
    margin: 20px 0;
  }
  a {
    color: #0098fa;
    text-decoration: none;
  }
  main,
  footer {
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(56, 56, 56);
    text-align: center;
  }
  footer {
    flex-direction: row;
    gap: 10px;
    font-weight: 800;
    color: rgb(98, 98, 98);
  }
</style>
