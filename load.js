/* 
  Cadoa team
  Cadoa V:9.5
  Cadoa LC: Alliance++
  CDS V:1.0 Beta
  Rezk Hamdan
*/
var jj = document.createElement("script")
jj.src = "/cDesgin.js"
document.body.appendChild(jj)

let themecolorel = document.createElement("meta")
themecolorel.setAttribute("name", "theme-color")
themecolorel.setAttribute("content", "#219bff")
document.head.appendChild(themecolorel)


// Update 17:57  AlW_04 Cadoa 6.4

const cadoa_colors = ["var(--cadoa_blue)", "var(--cadoa-red)", "var(--cadoa-orange)", "var(--cadoa-green)", "var(--cadoa-yellow)", "var(--cadoa-al)"]




let rt = document.querySelector("html").style;
let theme_color = document.getElementsByName("theme-color")[0];

let CadoaFont = "Arial, 'Courier New', Courier, monospace";


let MainColor = "--cadoa-main";



function setMainColor() {
  switch (localStorage.MainColor) {
    case "0":
      MainColor = "var(--cadoa-blue)";
      break;
    case "1":
      MainColor = "var(--cadoa-red)";
      break;
    case "2":
      MainColor = "var(--cadoa-orange)";
      break;
    case "3":
      MainColor = "var(--cadoa-green)";
      break;
    case "4":
      MainColor = "var(--cadoa-yellow)"; 
      break;
    case "5":
      MainColor = "var(--cadoa-al)";
      break;
    case "6":
      MainColor = "var(--cadoa-main)";
      break;
    default:
      localStorage.MainColor = "6";
      setMainColor();
  }
  set_style();
}

function changeMainColor(num) {
  switch (num) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      localStorage.MainColor = num;
      break;
    default:
      setMainColor();
  }
  set_style();
  setting_mood();

  location.reload();
}


let colors = [];

let color_one_dk = [
  "var(--background-dk)",
  "var(--text-color-dk)",
  "var(--second-col-dk)",
  "var(--opacit-col-dk)",
  "var(--chat-color-dk)",
  "#001"];


let color_one_wh = [
  "var(--background-wh)",
  "var(--text-color-wh)",
  "var(--second-col-wh)",
  "var(--opacit-col-wh)",
  "var(--chat-color-wh)",
  "#fff"];




let color_tow_dk = [
  "var(--background-dk-tow)",
  "var(--text-color-dk-tow)",
  "var(--second-col-dk-tow)",
  "var(--opacit-col-dk-tow)",
  "var(--chat-color-dk-tow)",
  "#111"];


let color_tow_wh = [
  "var(--background-wh-tow)",
  "var(--text-color-wh-tow)",
  "var(--second-col-wh-tow)",
  "var(--opacit-col-wh-tow)",
  "var(--chat-color-wh-tow)",
  "#fff"];

colors = color_one_wh;
if (localStorage.style == null || localStorage.style == "" || localStorage.style == undefined) {
  localStorage.style = "1";
}


if (localStorage.direction == null) {
  localStorage.direction = false;
}

window.addEventListener("load", function() {
  setting_mood();
  set_dir();
});


// changes vars and setting direction
function change_dir() {
  if (localStorage.direction == "true") {
    localStorage.direction = false;
  } else {
    localStorage.direction = true;
  }
  set_dir();
}

// setting direction only without changes vars
function set_dir() {
  if (localStorage.direction == "true") {
    rt.setProperty("--direction", "rtl");

  } else {
    rt.setProperty("--direction", "ltr");
  }
}

function set_style() {
  


  switch (localStorage.style) {
    case "1":
      if (localStorage.DarkMode == "false") {
        colors = color_one_wh;
      } else if (localStorage.DarkMode == "true") {
        colors = color_one_dk;
      }
      else {
        // choosing color white or dark default
        colors = color_one_dk;
      }
      break;

    case "2":
      if (localStorage.DarkMode == "false") {
        colors = color_tow_wh;
      } else if (localStorage.DarkMode == "true") {
        colors = color_tow_dk;
      }
      else {
        // choosing color white or dark default
        colors = color_tow_dk;
      }
      break;
    default:
      localStorage.style = "3";
  }
  setting_mood();


}
set_style();

function change_mood() {
  if (localStorage.DarkMode == "false") {
    localStorage.DarkMode = true;
  }
  else {
    localStorage.DarkMode = false;
  }
  set_style();
  // setting_mood();
}

function setting_mood() {
  let root = document.querySelector("html").style;
  root.setProperty("--background", colors[0]);
  root.setProperty("--text-color", colors[1]);
  root.setProperty("--second-col", colors[2]);
  root.setProperty("--opacit-col", colors[3]);
  root.setProperty("--chat-color", colors[4]);

  theme_color.setAttribute("content", colors[5]);
  // cadoa update v4.0 sopah plus clc v11 CSV
  // Cadoa update v5.0 hamdanwar 94 wh94_10
  root.setProperty("--cadoa-font", CadoaFont);
  
  // This is beta program from Matching version to Cadoa LC ** Cadoa team
  
  root.setProperty("--main-color", localStorage.style == 2 && localStorage.DarkMode != "true" ? "#000" : MainColor);
  //root.setProperty("--main-opaci", localStorage.style == 2 && localStorage.DarkMode != "true" ? "#000c" : 'var(--main-opaci)');
  // root.setProperty("--text-color-wh", localStorage.style == 2 && localStorage.DarkMode != "true" ? "#ddd" : 'var(--text-color-wh)');
}









/* cadoa v8.0 */
// Done
function resetting_data() {
  cDesgin.pleaseUpdate(this)
  cDesgin.resettingNoti()
}


function ver_res() {
  cDesgin.pleaseUpdate(this)
  cDesgin.resetting()
}
/* .... */




function Move(url) {

  location.replace(url);
}
// ...done

function change_style(num) {
  switch (num) {
    case 1:
      localStorage.style = "1"
      localStorage.DarkMode = "true";
      break;
    case 2:
      localStorage.style = "1"
      localStorage.DarkMode = "false";
      break;
    case 3:
      localStorage.style = "2"
      localStorage.DarkMode = "true";
      break;
    case 4:
      localStorage.style = "2"
      localStorage.DarkMode = "false";
      break;
  }
  set_style();
}



function show_style() {
  var unio = document.createElement("div")
  
  unio.innerHTML = `
  <section class="rc full clicked" onclick="remo(this)">
    <meta name="theme-color" content="#219bff">
<link rel="stylesheet" href="/libraries/css/cadoa.css">
<link rel="stylesheet" href="/settings/paid/style.css">


  <div class="rc box bo box_shadow">
    <h1 class="rc col">Cadoa settings</h1>
    <b>Choose the style, which you want it.</b>

    <div class="rc icons ichs">
      <a class="rc icon ich" style="background-color: var(--background-wh)" id="s2" onclick="change_style(2)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-wh)"></div>
          <div class="rc box" style="background-color: var(--second-col-wh)"></div>
          <b style="color: var(--text-color-wh)">WH_1</b>
        </div>
      </a>

      <a class="rc icon ich" style="background-color: var(--background-dk)" id="s1" onclick="change_style(1)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-dk)"></div>
          <div class="rc box" style="background-color: var(--second-col-dk)"></div>
          <b style="color: var(--text-color-dk)">DK_1</b>
        </div>
      </a>

      <a class="rc icon ich" style="background-color: var(--background-wh-tow)" id="s4" onclick="change_style(4)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-wh-tow)"></div>
          <div class="rc box" style="background-color: var(--second-col-wh-tow)"></div>
          <b style="color: var(--text-color-wh-tow)">WH_2</b>
        </div>

      </a>

      <a class="rc icon ich" style="background-color: var(--background-dk-tow)" id="s3" onclick="change_style(3)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-dk-tow)"></div>
          <div class="rc box" style="background-color: var(--second-col-dk-tow)"></div>
          <b style="color: var(--text-color-dk-tow)">DK_2</b>
        </div>

      </a>






    </div>
        <div class="rc box bo">
        
      
      <span class="rc cir blue" style="background: var(--cadoa-main); transform: scale(1.4)" onclick="changeMainColor(6)"></span>
      
      <span class="rc cir blue" style="background: var(--cadoa-blue)" onclick="changeMainColor(0)"></span>
      
      <span class="rc cir blue" style="background: var(--cadoa-red)" onclick="changeMainColor(1)"></span>
      <span class="rc cir blue" style="background: var(--cadoa-orange)" onclick="changeMainColor(2)"></span>
      <span class="rc cir blue" style="background: var(--cadoa-green)" onclick="changeMainColor(3)"></span>
      <span class="rc cir blue" style="background: var(--cadoa-yellow)" onclick="changeMainColor(4)"></span>
      
      <span class="rc cir blue" style="background: var(--cadoa-al)" onclick="changeMainColor(5)"></span>
    </div>
  </div>
</section>
  `;
  document.getElementsByTagName("body")[0].appendChild(unio)
}




function unshow() {
  document.getElementById("showstyle").style.display = "none";
}

// full clicke
let all_full = document.getElementsByClassName("clicked");
for (var i = 0; i < all_full.length; i++) {
  all_full[i].addEventListener("click", function() {
    all_full[i].style.display = "none";
  });
}

/* Done */
function remo(ele) {
  cDesgin.pleaseUpdate(this)
  cDesgin.remo(ele)
}
/* ...done */

setMainColor();
/* .... */

/* Cadoa 12.0  19:32  WH94_10 */
let Fonts = ["var(--cadoa-font-one)", "var(--cadoa-font-tow)", "var(--cadoa-font-thr)", "var(--cadoa-font-for)"];

function CadoaFontFun(num) {
  if (num == -1) {
    switch (localStorage.CadoaFont) {
      case '0':
      case '1':
      case '2':
      case '3':
        CadoaFont = Fonts[parseInt(localStorage.CadoaFont)];
        break;

      default:
        localStorage.CadoaFont = "0";
    }
  }
  else {
    switch (num) {
      case 0:
      case 1:
      case 2:
      case 3:
        localStorage.CadoaFont = num;
        break;
      default:

    }
  }
  CadoaFont = Fonts[parseInt(localStorage.CadoaFont)];
  setting_mood();
}
CadoaFontFun(-1);

// Done
function CadoaFontShow() {
  cDesgin.pleaseUpdate(this)
  cDesgin.fontNoti()
}
// ...done



/* Al:  01:00   WH94*_23 */

// Done
var CLC = {};
setTimeout(_=> CLC = cDesgin.CLC, 600)
// ...done



function Projects(el) {
  // [name, description, url, new, src image] 20:28 AlW_01
  const Pros = 
  [["XO Ahmad", "The real world", "/xo-ahmad", "Game", "/Images/xo-ahmad.png"],
  ["cLoad", "Your tool for manage your website", "/libraries/cLoad/", "new", "/Images/cLoad.png"],
  ["Crazy game", "For anyone only", "/crazy/", "Old", "/Images/cadoa/ForYou.png"],
  ["Cadoa Simple View", "CSV is design library for front-end developer ...", "/libraries/CSV", "New", "/Images/csv.png"],
  ["Cadoa Writing Test", "You can do test for speed writing  now.." ,"/GRA/", "Beta", "/Images/GRA.png"],
  ["Twitter form", "be the first person who see news about the worl", "/Twitter/", "RC", "/Images/twitter.png"],
  ["Cadoa Library Css", "is the best space for creating your website", "/libraries/css/", "Main", "/Images/css.png"]]
  
  
  var ioio = document.createElement("")
  for (var i = 0; i < Pros.length; i++) {
    el.innerHTML += `
    <a href="${Pros[i][2]}" class="rc ">
      <div class="rc box ne">
        <h2><span class="col">${Pros[i][0]}</span> ${Pros[i][1]}</h2>

        <img src="${Pros[i][4]}">

        <span class="new">${Pros[i][3]}</span>
      </div>
    </a>
    `;
  }
}

// Update Al:  21:11 AlW_05 Cadoa 6.5
function reload() {
  setTimeout(function() {
    location.reload()
  }, 1000)
}


