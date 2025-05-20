const COLORS = ['#fff', '#ff0', '#16c', '#f00'];
const cells = document.querySelectorAll('.mainFrame td');
let rstbtn=document.getElementById("resetButton")

//當按鈕被點擊時，所有格子回到初始狀態的顏色
rstbtn.addEventListener("click",()=>{
  cells.forEach(c=>{
    c.style.backgroundColor='';
  })
})

cells.forEach(cell => {
  cell.addEventListener('mouseenter', () => {
    // 統計目前每種顏色已被分配幾次
    const colorCount = {};
    COLORS.forEach(c => colorCount[c] = 0);

    // 先把目前所有格子的顏色清空
    cells.forEach(c => c.style.backgroundColor = '');

    // 先將目前懸停的格子設為預設色（不變色）
    // 你可以選擇保留原色或不處理

    // 依序分配顏色給其他格子
    cells.forEach(otherCell => {
      if (otherCell !== cell) {
        // 選出還沒超過2格的顏色
        const availableColors = COLORS.filter(color => colorCount[color] < 2);
        // 隨機選一個可用顏色
        const color = availableColors[Math.floor(Math.random() * availableColors.length)];
        otherCell.style.backgroundColor = color;
        colorCount[color]++;
      }
    });
  });
});