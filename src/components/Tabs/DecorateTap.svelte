<script lang="ts">
  import {fabric} from 'fabric'
  import {logEvent} from 'firebase/analytics'
  import {analytics} from 'src/api/firebase/firebase'
  import {onMount} from 'svelte'
  import {
    canvas,
    width,
    hasCostume,
    costumeInfo,
    headInfo,
    handInfo,
    faceInfo,
    bodyInfo,
    toggleCostume,
    resetCostume,
    type CostumeKeys,
  } from 'src/store/canvas'

  onMount(() => {
    logEvent(analytics, '꾸미기 탭 진입')
  })

  const addCostume = (costume: CostumeKeys) => {
    let costumeImg = costumeInfo[costume].src
    logEvent(analytics, `${costumeInfo[costume].title} 추가`)

    fabric.Image.fromURL(costumeImg, function (img) {
      img.scaleToWidth($width)
      img.scaleToWidth($width)
      img.selectable = false

      img.set('itemType', 'costume')
      img.set('costume', costume)
      $canvas.add(img)

      // 캔버스의 오브젝트들을 순회하며 basketball은 가장 위로 올림
      // TODO. index를 custome 마다 관리해야함
      $canvas.getObjects().forEach((obj) => {
        if (obj.costume === 'basketball' || obj.costume === 'laptop') {
          $canvas.moveTo(obj, 100)
        }
      })

      $canvas.renderAll()
    })
  }

  const removeCostume = (costume: CostumeKeys) => {
    const objects = $canvas.getObjects()
    logEvent(analytics, `${costumeInfo[costume].title} 제거`)
    const costumeObjects = objects.filter((obj) => obj.costume === costume)
    costumeObjects.forEach((obj) => $canvas.remove(obj))
  }

  $: if ($canvas) {
    const objects = $canvas.getObjects()

    for (const costume in $hasCostume) {
      const hasObj = objects.find((obj) => obj.costume === costume)
      if (hasObj && !$hasCostume[costume]) removeCostume(costume as CostumeKeys)
      if (!hasObj && $hasCostume[costume]) addCostume(costume as CostumeKeys)
    }
  }

  const toggleActive = (costume: string) => () => {
    toggleCostume(costume as CostumeKeys)
  }

  const reset = () => {
    logEvent(analytics, '초기화 버튼 클릭')
    resetCostume()
  }

  const allActive = () => {
    const allBtn = document.getElementById('all')
    const headBtn = document.getElementById('head')
    const faceBtn = document.getElementById('face')
    const bodyBtn = document.getElementById('body')
    const handBtn = document.getElementById('hand')

    const category_all_btn = document.getElementById('category_all_btn')
    const category_head_btn = document.getElementById('category_head_btn')
    const category_face_btn = document.getElementById('category_face_btn')
    const category_body_btn = document.getElementById('category_body_btn')
    const category_hand_btn = document.getElementById('category_hand_btn')

    category_all_btn.style.backgroundColor = '#50ea89'
    category_head_btn.style.backgroundColor = 'white'
    category_face_btn.style.backgroundColor = 'white'
    category_body_btn.style.backgroundColor = 'white'
    category_hand_btn.style.backgroundColor = 'white'

    category_all_btn.style.color = 'white'
    category_head_btn.style.color = 'black'
    category_face_btn.style.color = 'black'
    category_body_btn.style.color = 'black'
    category_hand_btn.style.color = 'black'

    allBtn.style.display = 'block'
    headBtn.style.display = 'none'
    faceBtn.style.display = 'none'
    bodyBtn.style.display = 'none'
    handBtn.style.display = 'none'
  }

  const headActive = () => {
    const allBtn = document.getElementById('all')
    const headBtn = document.getElementById('head')
    const faceBtn = document.getElementById('face')
    const bodyBtn = document.getElementById('body')
    const handBtn = document.getElementById('hand')

    const category_all_btn = document.getElementById('category_all_btn')
    const category_head_btn = document.getElementById('category_head_btn')
    const category_face_btn = document.getElementById('category_face_btn')
    const category_body_btn = document.getElementById('category_body_btn')
    const category_hand_btn = document.getElementById('category_hand_btn')

    category_all_btn.style.backgroundColor = 'white'
    category_head_btn.style.backgroundColor = '#50ea89'
    category_face_btn.style.backgroundColor = 'white'
    category_body_btn.style.backgroundColor = 'white'
    category_hand_btn.style.backgroundColor = 'white'

    category_all_btn.style.color = 'black'
    category_head_btn.style.color = 'white'
    category_face_btn.style.color = 'black'
    category_body_btn.style.color = 'black'
    category_hand_btn.style.color = 'black'

    allBtn.style.display = 'none'
    headBtn.style.display = 'block'
    faceBtn.style.display = 'none'
    bodyBtn.style.display = 'none'
    handBtn.style.display = 'none'
  }

  const faceActive = () => {
    const allBtn = document.getElementById('all')
    const headBtn = document.getElementById('head')
    const faceBtn = document.getElementById('face')
    const bodyBtn = document.getElementById('body')
    const handBtn = document.getElementById('hand')

    const category_all_btn = document.getElementById('category_all_btn')
    const category_head_btn = document.getElementById('category_head_btn')
    const category_face_btn = document.getElementById('category_face_btn')
    const category_body_btn = document.getElementById('category_body_btn')
    const category_hand_btn = document.getElementById('category_hand_btn')

    category_all_btn.style.backgroundColor = 'white'
    category_head_btn.style.backgroundColor = 'white'
    category_face_btn.style.backgroundColor = '#50ea89'
    category_body_btn.style.backgroundColor = 'white'
    category_hand_btn.style.backgroundColor = 'white'

    category_all_btn.style.color = 'black'
    category_head_btn.style.color = 'black'
    category_face_btn.style.color = 'white'
    category_body_btn.style.color = 'black'
    category_hand_btn.style.color = 'black'

    allBtn.style.display = 'none'
    headBtn.style.display = 'none'
    faceBtn.style.display = 'block'
    bodyBtn.style.display = 'none'
    handBtn.style.display = 'none'
  }

  const bodyActive = () => {
    const allBtn = document.getElementById('all')
    const headBtn = document.getElementById('head')
    const faceBtn = document.getElementById('face')
    const bodyBtn = document.getElementById('body')
    const handBtn = document.getElementById('hand')

    const category_all_btn = document.getElementById('category_all_btn')
    const category_head_btn = document.getElementById('category_head_btn')
    const category_face_btn = document.getElementById('category_face_btn')
    const category_body_btn = document.getElementById('category_body_btn')
    const category_hand_btn = document.getElementById('category_hand_btn')

    category_all_btn.style.backgroundColor = 'white'
    category_head_btn.style.backgroundColor = 'white'
    category_face_btn.style.backgroundColor = 'white'
    category_body_btn.style.backgroundColor = '#50ea89'
    category_hand_btn.style.backgroundColor = 'white'

    category_all_btn.style.color = 'black'
    category_head_btn.style.color = 'black'
    category_face_btn.style.color = 'black'
    category_body_btn.style.color = 'white'
    category_hand_btn.style.color = 'black'

    allBtn.style.display = 'none'
    headBtn.style.display = 'none'
    faceBtn.style.display = 'none'
    bodyBtn.style.display = 'block'
    handBtn.style.display = 'none'
  }

  const handActive = () => {
    const allBtn = document.getElementById('all')
    const headBtn = document.getElementById('head')
    const faceBtn = document.getElementById('face')
    const bodyBtn = document.getElementById('body')
    const handBtn = document.getElementById('hand')

    const category_all_btn = document.getElementById('category_all_btn')
    const category_head_btn = document.getElementById('category_head_btn')
    const category_face_btn = document.getElementById('category_face_btn')
    const category_body_btn = document.getElementById('category_body_btn')
    const category_hand_btn = document.getElementById('category_hand_btn')

    category_all_btn.style.backgroundColor = 'white'
    category_head_btn.style.backgroundColor = 'white'
    category_face_btn.style.backgroundColor = 'white'
    category_body_btn.style.backgroundColor = 'white'
    category_hand_btn.style.backgroundColor = '#50ea89'

    category_all_btn.style.color = 'black'
    category_head_btn.style.color = 'black'
    category_face_btn.style.color = 'black'
    category_body_btn.style.color = 'black'
    category_hand_btn.style.color = 'white'

    allBtn.style.display = 'none'
    headBtn.style.display = 'none'
    faceBtn.style.display = 'none'
    bodyBtn.style.display = 'none'
    handBtn.style.display = 'block'
  }
</script>

<div class="container">
  <h2>아이템을 추가해 꾸며주세요!</h2>

  <div class="contents">
    <ul class="categories">
      <button id="category_all_btn" class="category svelte-1j5f1kp" on:click={allActive}>전체</button>
      <button id="category_head_btn" class="category svelte-1j5f1kp" on:click={headActive}>머리</button>
      <button id="category_face_btn" class="category svelte-1j5f1kp" on:click={faceActive}>얼굴</button>
      <button id="category_body_btn" class="category svelte-1j5f1kp" on:click={bodyActive}>몸</button>
      <button id="category_hand_btn" class="category svelte-1j5f1kp" on:click={handActive}>손</button>
    </ul>
    <ul class="toolbar">
      <div id="all" style="display:flex;">
        <ul class="toolbar">
          <li>
            <button class="reset" on:click={reset}>초기화 하기</button>
          </li>

          {#each Object.keys(costumeInfo) as costume}
            <li>
              <button class={$hasCostume[costume] ? 'active' : ''} on:click={toggleActive(costume)}
                >{costumeInfo[costume].title}</button
              >
            </li>
          {/each}
        </ul>
      </div>
      <div id="head" style="display: flex; display: none;">
        <ul class="toolbar">
          <li>
            <button class="reset" on:click={reset}>초기화 하기</button>
          </li>

          {#each Object.keys(headInfo) as costume}
            <li>
              <button class={$hasCostume[costume] ? 'active' : ''} on:click={toggleActive(costume)}
                >{headInfo[costume].title}</button
              >
            </li>
          {/each}
        </ul>
      </div>
      <div id="face" style="display: flex; display: none;">
        <ul class="toolbar">
          <li>
            <button class="reset" on:click={reset}>초기화 하기</button>
          </li>

          {#each Object.keys(faceInfo) as costume}
            <li>
              <button class={$hasCostume[costume] ? 'active' : ''} on:click={toggleActive(costume)}
                >{faceInfo[costume].title}</button
              >
            </li>
          {/each}
        </ul>
      </div>
      <div id="body" style="display: flex; display: none;">
        <ul class="toolbar">
          <li>
            <button class="reset" on:click={reset}>초기화 하기</button>
          </li>

          {#each Object.keys(bodyInfo) as costume}
            <li>
              <button class={$hasCostume[costume] ? 'active' : ''} on:click={toggleActive(costume)}
                >{bodyInfo[costume].title}</button
              >
            </li>
          {/each}
        </ul>
      </div>

      <div id="hand" style="display: flex; display: none;">
        <ul class="toolbar">
          <li>
            <button class="reset" on:click={reset}>초기화 하기</button>
          </li>

          {#each Object.keys(handInfo) as costume}
            <li>
              <button class={$hasCostume[costume] ? 'active' : ''} on:click={toggleActive(costume)}
                >{handInfo[costume].title}</button
              >
            </li>
          {/each}
        </ul>
      </div>
    </ul>
  </div>
</div>

<style>
  .categories {
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 100px;
    border: 1px solid #edf0f3;
  }

  ul {
    padding: 0;
  }

  * {
    margin: 0;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .contents {
    display: flex;
    border-top: 1px solid #edf0f3;
    width: 100%;
  }

  .container {
    max-width: 600px;
    width: 100%;
    margin: 20px auto;
    font-size: 12px;
  }

  button,
  a {
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }
  * {
    margin: 0;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  button {
    appearance: auto;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
  }

  ul {
    list-style-type: disc;
  }

  button {
    border: 0;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 30px;
    word-break: keep-all;
  }
  .container {
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }

  .toolbar > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }

  button {
    box-sizing: border-box;
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    font-size: 12px;
  }

  .reset {
    color: #fff;
    background-color: #ff595e;
    border: none;
  }

  button.active {
    color: #fff;
    border: 1px solid rgb(80, 234, 137);
    background-color: rgb(80, 234, 137);
  }

  .category {
    border-radius: 0;
    box-sizing: border-box;
    padding: 10px 16px;
    border: none;
    background-color: #fff;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    font-size: 12px;
    word-break: keep-all;
    border-right: none;
  }
  .category.active {
    background-color: #edf0f3;
  }

  ul {
    list-style-type: disc;
  }

  .categories {
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 100px;
    border: 1px solid #edf0f3;
  }
</style>
