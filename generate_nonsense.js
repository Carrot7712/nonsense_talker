//產生隨機的index
function randomIndex(array){
  const randomIndex=Math.floor(Math.random()*array.length)
  return array[randomIndex]
}
function generateNonsense(options) {
  //為了把職業轉成中文輸出而設計的資料
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家',
  }
  //幹話素材
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  //如果沒選就送出的提示語
  if (!options.profession){
    return `<span class="text-danger h1"><strong>選個對象再送出很容易吧 ^_^<strong></span>`
  }
  //我本來的想法：
  //combine random sentence
  // if (options.profession === 'engineer'){
  //   return `<h3 class="text-info">身為一個工程師，${randomIndex(task.engineer)}，${randomIndex(phrase)}吧！</h3>`
  // }
  // if (options.profession === 'designer') {
  //   return `<h3 class="text-info">身為一個設計師，${randomIndex(
  //     task.designer
  //   )}，${randomIndex(phrase)}吧！</h3>`
  // }
  // if (options.profession === 'entrepreneur') {
  //   return `<h3 class="text-info">身為一個創業家，${randomIndex(
  //     task.entrepreneur
  //   )}，${randomIndex(phrase)}吧！</h3>`
  // }

  //觀摩同學以後簡化：
  let sentence = `<h3 class="text-info">身為一個${target[options.profession]}，${randomIndex(task.engineer)}，${randomIndex(phrase)}吧！</h3>`
  return sentence
}
//把寫好的方法輸出給其他程式使用
module.exports = generateNonsense