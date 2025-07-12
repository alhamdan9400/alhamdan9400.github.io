/* 
  Cadoa Design  (CDS)
  CDS V:1.0 Mathing with Cadoa V9.5
*/

const cadoalc = {
  CadoaVersion: "9.5",
  CadoaLCVersionName: "Alliance++",
  CadoaLCDocumentsLink: "https://cadoa.epizy.com/libraries/css/",
  CadoaLCCode: `
        /*  
      Cadoa team - Rezk Hamdan
      Cadoa LC - Alliance Vrsion++
      Starting work - 29.06.2025
      Before ==> 1657 line
      After  ==> 1820 line
    */
    @font-face {
      font-family: Anta;
      src: url(/fonts/Anta-Regular.ttf);
    }
    @font-face {
      font-family: "Cairo";
      src: url(/fonts/Cairo-VariableFont_slnt,wght.ttf);
    }
    
    .fix {
      margin-top: 12rem;
    }
    
    span.rc.version::before {
      content: var(--cadoa-version);
    }
    
    span.rc.version {
      --cLoad-version: var(--cadoa-version);
    }
    
    span.cadoa_team::before {
      content: var(--cadoa-team);
    }
    
    :root {
      --background-dk: #001;
      --second-col-dk: #112;
      --opacit-col-dk: #1127;
      --text-color-dk: #ccf;
      --chat-color-dk: #334;
    
      --content-co-dk: #113;
    
      /* White theme */
      --background-wh: #fff;
      --second-col-wh: #eee;
      --opacit-col-wh: #eef5;
      --text-color-wh: #115;
      --chat-color-wh: #dde;
      --content-co-wh: #eef;
    
      /* Dark  theme */
      --background-dk-tow: #000;
      --second-col-dk-tow: #111;
      --opacit-col-dk-tow: #111b;
      --text-color-dk-tow: #dde;
      --chat-color-dk-tow: #333;
      --content-co-dk-tow: #111;
    
      /* White theme */
      --background-wh-tow: #fff;
      --second-col-wh-tow: #eee;
      --opacit-col-wh-tow: #eee7;
      --text-color-wh-tow: #222;
      --chat-color-wh-tow: #ddd;
      --content-co-wh-tow: #fff;
    
      --cadoa-version: "A.V++";
    
      --cadoa-main: #2189ff;
    
      --main-color: #219bff;
      --main-opaci: #2189ff77;
    
      --background: #fff;
      --second-col: #efefef;
      --opacit-col: #eef6;
      --text-color: #111;
    
      --chat-color: #ddd;
    
      --transition: 0.4s;
      --space-side: 1.6rem;
    
      --direction: ltr;
      --cadoa-team: "Cadoa team 2025©";
    
      --user-name: "";
    
      --cadoa-blue: #219bff;
      --cadoa-green: #11cc22;
      --cadoa-red: #ff2222;
      --cadoa-yellow: #F9EE3C;
      --cadoa-orange: #FF6110;
    
      --cadoa-al: #7702FF;
      
      --csv-size: 8rem;
      --csv-color-shadow: var(--main-color);
    
      --cadoa-url: "https://cadoa.epizy.com/";
      --cadoa-font: "Cairo", Arial, 'Courier New', Courier, monospace;
      --cadoa-font-one: "Cairo", Arial;
      --cadoa-font-tow: "Courier New", Courier;
      --cadoa-font-thr: monospace;
      --cadoa-font-for: Anta, sans-serif;
    }
    
    section.rc.full {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--opacit-col);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 4000;
      backdrop-filter: blur(5px);
    }
    
    span.rc.cadoa_url::before {
      content: var(--cadoa-url);
    }
    
    @media (min-width: 800px) {
      :root {
        --space-side: 7rem;
      }
    }
    
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    html {
      font-size: 10px;
      color: var(--text-color);
      direction: var(--direction);
      scroll-behavior: smooth;
    }
    
    html *:not(.shar) {
      user-select: none;
    }
    
    body {
      background-color: var(--background);
      font-family: var(--cadoa-font);
      position: relative;
      padding-left: var(--space-side);
      padding-right: var(--space-side);
    }
    
    a.rc {
      text-decoration: none;
      font-size: 1.2rem;
      color: inherit;
    }
    
    section.head {
      width: 100%;
      padding: 1rem var(--space-side);
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: monospace;
      z-index: 1000;
      /* border-bottom: 0.12rem solid var(--main-color); */
      position: fixed;
      top: 0;
      backdrop-filter: blur(5px);
      overflow: hidden;
      left: 50%;
      transform: translate(-50%, 0);
    }
    
    section.head.center {
      justify-content: center;
    }
    
    section.head::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.2rem;
      width: 0%;
      background-color: var(--main-color);
      animation: headwidth 1 var(--transition) forwards ease-in-out;
    }
    section.head.center::before {
      left: 50%;
      transform: translateX(-50%);
    }
    @keyframes headwidth{to {width: 100%}}
    
    section.head h2 {
      font-size: 2.2rem;
      letter-spacing: -0.1rem;
      animation: MV01 var(--transition) forwards;
    }
    
    section.head h2 a {
      text-decoration: none;
      color: inherit;
    }
    
    section.head h2 span {
      color: var(--main-color);
    }
    
    section.head h3 {
      text-transform: capitalize;
      font-size: 1.8rem;
    }
    
    .col {
      color: var(--main-color);
    }
    
    .color {
      color: var(--main-color);
    }
    
    input.rc.inp,
    textarea.rc.inp {
      outline: none;
      border: none;
      box-sizing: border-box;
      background-color: var(--second-col);
      border: 0.2rem solid transparent;
      border-bottom-color: var(--text-color);
      color: var(--text-color);
      font-weight: 700;
      transition: var(--transition);
      padding: 1rem 0.6rem;
      margin: 0.5rem 0.3rem;
      border-radius: 0.6rem;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      width: 85%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      font-size: 2rem;
      font-weight: 500;
      font-family: var(--cadoa-font);
      animation: fokoto 1 forwards var(--transition);
    }
    @keyframes fokoto {
      from {border-color: transparent;border-top-color: var(--text-color)}
      50% {border-right-color: var(--text-color);border-left-color: var(--text-color);}
      to {border-bottom-color: var(--text-color)}
    }
    
    input.rc.inp::placeholder {
      font-size: 1.6rem;
      font-family: var(--cadoa-font);
      color: var(--text-color);
      opacity: .8;
    }
    
    input.rc.inp.fo:focus {
      box-shadow: 0 0 5px var(--main-color);
      transform: scale(1.1);
    }
    
    button.rc.btn,
    input[type="submit"].rc.btn,
    label.rc.btn,
    a.rc.btn {
      box-shadow: border-box;
      padding: 1rem 2rem;
      outline: none;
      border: none;
      border-radius: 1.6rem;
      margin: 0.8rem 0.4rem;
      /* text-transform: uppercase; */
      background-color: var(--second-col);
      color: var(--main-color);
      text-align: center;
      position: relative;
      font-weight: 400;
      transition: 0.2s;
      overflow: hidden;
      font-size: 1.4rem;
      font-family: var(--cadoa-font);
      border: .2rem solid var(--second-col);
    }
    
    button.rc.btn.lineout,
    input[type="submit"].rc.btn.lineout,
    label.rc.btn.lineout,
    a.rc.btn.lineout {
      background: transparent;
      border: .1rem var(--text-color) solid;
      border-radius: .8rem;
      color: var(--text-color);
    }
    button.rc.btn.lineout.ma {
      color: var(--main-color);
      border-color: var(--main-color);
    }
    
    button.rc.btn.text,
    input[type="submit"].rc.btn.text,
    label.rc.btn.text,
    a.rc.btn.text {
      background: transparent;
      color: var(--main-color);
      border-color: transparent;
    }
    
    button.rc.btn.main,
    input[type="submit"].rc.btn.main,
    label.rc.btn.main,
    a.rc.btn.main {
      background: var(--main-color);
      color: #000;
      font-weight: 700;
      font-size: 1.6rem;
      border-color: var(--main-color);
    }
    
    button.rc.btn:before,
    input[type="submit"].rc.btn:before,
    label.rc.btn:before,
    a.rc.btn:before {
      content: "";
      position: absolute;
      width: 30%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: calc(var(--transition) / 4);
      transition-timing-function: ease-in;
      background-color: transparent;
      border-radius: 1rem;
    }
    
    button.rc.btn.no:before,
    input[type="submit"].rc.btn.no:before,
    label.rc.btn:before,
    a.rc.btn.no:before {
      background-color: var(--main-opaci);
    }
    
    button.rc.btn.no,
    input[type="submit"].rc.btn.no,
    label.rc.btn.no,
    a.rc.btn.no {
      background-color: var(--second-col);
      color: var(--text-color);
    }
    
    button.rc.btn:active,
    input[type="submit"].rc.btn:active,
    label.rc.btn:active,
    a.rc.btn:active {
      /* transform: scale(0.9); */
    }
    
    button.rc.btn:active:before,
    input[type="submit"].rc.btn:active:before,
    label.rc.btn:active:before,
    a.rc.btn:active:before {
      border-radius: 0;
      width: 100%;
      height: 100%;
      background: var(--opacit-col);
    }
    
    .rc.title.form1 {
      margin: 0.5rem auto;
      padding: 1.5rem;
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
      position: relative;
      width: fit-content;
      max-width: 80vw;
      box-shadow: 0 0 3px 4px var(--background);
      color: #000;
      text-overflow: ellipsis;
    }
    
    .rc.title.form1::before,
    .rc.title.form1::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) skew(25deg);
      width: 100%;
      height: 100%;
      background-color: #dff;
      z-index: -1;
    }
    
    .rc.title.form1::after {
      transform: translate(-50%, -50%) skew(-25deg);
    }
    
    .rc.title.form2 {
      margin: 0.5rem auto;
      padding: 1.5rem;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
      position: relative;
      width: fit-content;
      max-width: 90vw;
    }
    
    .rc.title.form2:hover::before {
      border-style: solid;
      border-color: var(--main-color);
    }
    
    .rc.title.form2::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 0.5rem;
      border: 0.2rem var(--text-color) dashed;
    }
    
    .rc.title.form2::after {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: transparent;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -100%);
      transition: var(--transition);
      z-index: -1;
    }
    
    .rc.title.form2:hover::after {
      width: 100%;
      height: 100%;
      background-color: var(--main-color);
      border-radius: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    
    /* .rc.title.form1:hover, */
    .rc.title.form2:hover {
      color: var(--text-color-wh);
    }
    
    .rc.box {
      
      height: fit-content;
      background-color: var(--opacit-col);
      color: var(--text-color);
      font-size: 1.4rem;
      font-weight: 700;
      padding: 0.8rem 2rem;
      margin: 2rem auto;
      line-height: 2.4rem;
      overflow-x: auto;
      position: relative;
    }
    
    .rc.box .new {
      display: inline-block;
      position: absolute;
      padding: 0.3rem;
      background: var(--main-color);
      max-width: 5rem;
      max-height: 4rem;
      top: 0;
      right: 0;
      border-end-start-radius: 0.8rem;
      color: var(--text-color-wh);
      font-size: 1.2rem;
    }
    
    .rc.cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.5rem;
      width: 100%;
      padding: 2rem 1.4rem;
    }
    
    @media (max-width: 440px) {
      .rc.cards {
        grid-template-columns: 1fr;
      }
    }
    
    @media (min-width: 500px) {
      .rc.cards {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    
    @media (min-width: 800px) {
      .rc.cards {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
    
    .rc.card {
      display: inline-block;
      padding: 1rem;
      border-radius: 1.6rem;
      text-decoration: none;
      background-color: var(--second-col);
      color: var(--text-color);
      transition: var(--transition);
      box-shadow: 0 0 1rem var(--second-col);
    }
    
    .rc.card:hover {
      box-shadow: 0 0 0.5rem var(--main-color);
      transform: scale(1.02);
    }
    
    .rc.card img {
      width: 90%;
      margin: 0.6rem auto;
    }
    
    .rc.card .details {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem;
    }
    
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    
    .rc.icons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1rem;
      width: 100%;
    }
    
    .rc.icon {
      padding: 0.5rem;
      width: 100%;
      text-decoration: none;
      color: var(--text-color);
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      transition: var(--transition);
    }
    
    .rc.icon:hover {
      background-color: var(--background);
    }
    
    .rc.icon img {
      width: 100%;
      border-radius: 0.8rem;
    }
    
    .rc.icon span {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text-color);
    }
    
    footer.rc {
      text-align: center;
      width: 100%;
      background-color: var(--second-col);
      background-color: #5551;
      padding: 0.8rem;
      margin-top: 20rem;
      color: var(--text-color);
    }
    
    footer.rc .header {
      width: 100%;
      padding: 0.8rem 0;
      border-bottom: 0.2rem solid #219bff;
      color: #219bff;
      font-size: 1.8rem;
      font-weight: 900;
      text-transform: capitalize;
      margin-bottom: 2rem;
      animation-name: an;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
    
    @keyframes an {
      from {
        text-shadow: 0 0 0 var(--main-color);
      }
    
      to {
        text-shadow: 0 0 3px var(--main-color);
        letter-spacing: .2rem;
      }
    }
    
    footer.rc a {
      display: inline-block;
      width: 100%;
      padding: 0.6rem 0;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.6rem;
      transition: var(--transition);
      text-transform: capitalize;
      color: var(--text-color);
    }
    
    footer.rc a:hover {
      color: var(--main-color);
    }
    
    footer.rc b {
      display: inline-block;
      margin-top: 8rem;
      font-size: 1rem;
      font-weight: 600;
    }
    
    footer.rc b span {
      color: var(--cadoa-orange);
    }
    
    footer.rc p {
      color: var(--cadoa-orange);
      margin-top: 2rem;
      text-align: right;
    }
    
    span.rc.cir {
      background-color: var(--main-color);
      color: #000;
      font-size: 1.5rem;
      font-weight: 700;
      border-radius: .6rem;
      text-align: center;
      display: inline-flex;
      height: 2rem;
      width: 2rem;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem;
      padding: 0.2rem;
      font-family: monospace;
    }
    
    .rc.ic-list1 {
      width: 30px;
      height: 30px;
      background-color: transparent;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: column;
      position: relative;
      margin: .4rem 2rem;
    }
    
    .rc.ic-list1::before {
      content: "";
      width: 130%;
      height: 130%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: transparent;
      border-radius: 50%;
      border: 0.3rem solid var(--text-color);
      opacity: 0.9;
      animation-name: zoom-out;
      animation-duration: calc(2 * var(--transition));
      animation-iteration-count: infinite;
    }
    
    @keyframes zoom-out {
      from {
        opacity: 0.9;
        transform: translate(-50%, -50%) scale(1);
      }
    
      to {
        opacity: 0;
        transform: translate(-50%, -50%) scale(2);
      }
    }
    
    .rc.ic-list1 span {
      width: 100%;
      height: 0.2rem;
      background-color: var(--text-color);
      display: inline-block;
      border-radius: 0.05rem;
      transition: var(--transition);
    }
    
    .rc.ic-list1 span:nth-child(2) {
      width: 50%;
      background-color: var(--main-color);
    }
    
    .rc.rc.ic-list1:hover span:nth-child(2) {
      width: 100%;
      background-color: var(--text-color);
    }
    
    
    .rc.settings {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      grid-gap: .5rem;
      margin: 1rem 0 3rem;
      padding: 1rem 0.8rem;
      border-bottom: 0.2rem solid var(--second-col);
    }
    
    .rc.element {
      height: fit-content;
      display: inline-block;
      padding: 2rem 1rem;
      margin: 0;
      text-align: center;
      text-decoration: none;
      color: var(--text-color);
      background-color: var(--second-col);
      transition: calc(var(--transition) / 4);
      font-size: 1.6rem;
      font-weight: 700;
      position: relative;
      overflow: hidden;
    }
    
    .rc.rc.element::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0%;
      height: 100%;
      background: var(--opacit-col);
      transition: var(--transition);
      border-radius: 2rem;
    }
    
    .rc.element:first-of-type {
      border-top-left-radius: 1.8rem;
    }
    
    .rc.element:nth-of-type(2) {
      border-top-right-radius: 1.8rem;
    }
    
    .rc.element:last-of-type {
      border-bottom-right-radius: 1.8rem;
    }
    
    .rc.rc.element:nth-last-of-type(2) {
      border-bottom-left-radius: 1.8rem;
    }
    
    .rc.element:active {
      /* transform: scale(0.93); */
    }
    
    .rc.element:active::before {
      width: 100%;
      border-radius: 0;
    }
    
    h1.rc.linecolor {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    h1.rc.linecolor span {
      width: 22%;
      height: 0.4rem;
    }
    
    
    h1.rc.linecolor span:nth-of-type(1) {
      background-color: var(--main-color);
    }
    
    h1.rc.linecolor span:nth-of-type(2) {
      background-color: var(--cadoa-red);
    }
    
    h1.rc.linecolor span:nth-of-type(3) {
      background-color: var(--cadoa-green);
    }
    
    h1.rc.linecolor span:nth-of-type(4) {
      background-color: var(--cadoa-orange);
    }
    
    ul.rc {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      list-style: none;
    }
    
    ul.rc li {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem;
    }
    
    ul.rc li:not(:last-of-type) {
      border-bottom: 0.2rem solid var(--second-col);
    }
    
    ul.rc li img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }
    
    ul.rc li a {
      text-decoration: none;
      display: inline-block;
      width: 100%;
      padding: 1rem 0.5rem;
      color: var(--text-color);
      font-size: 1.6rem;
      font-weight: 900;
    }
    
    .rc.navs {
      width: 100vw;
      height: fit-content;
      position: fixed;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1500;
    }
    
    h1.rc.toast {
      width: 100%;
      height: fit-content;
      background-color: var(--second-col);
      padding: 1rem;
      animation-name: vis;
      animation-duration: 6s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      position: fixed;
      color: #000;
      overflow: hidden;
      position: relative;
      font-size: 1.6rem;
    }
    
    h1.rc.toast .clear {
      font-size: 3rem !important;
      position: absolute;
      right: 1.4rem;
      top: 50%;
      transform: translateY(-50%);
    }
    
    
    h1.rc.toast.const {
      animation-name: unvis;
    }
    
    h1.rc.toast:last-of-type::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.3rem;
      background-color: var(--text-color-wh);
      top: calc(100% - 0.3rem);
      left: 0;
      animation-name: mv;
      animation-duration: 6s;
      animation-fill-mode: forwards;
    }
    
    h1.rc.toast.cost::before {
      animation-name: unmv;
    }
    
    @keyframes mv {
      from {
        left: -100%;
      }
    
      to {
        left: 0;
      }
    }
    
    h1.rc.toast.true {
      background-color: var(--cadoa-green);
    }
    
    h1.rc.toast.warning {
      background-color: var(--cadoa-yellow);
    }
    
    h1.rc.toast.warn {
      background-color: var(--cadoa-orange);
    }
    
    h1.rc.toast.error {
      background-color: var(--cadoa-red);
    }
    
    @keyframes vis {
      0% {
        top: -5rem;
        left: 0;
      }
    
      8% {
        top: 2rem;
      }
    
      10% {
        top: 0;
      }
    
      90% {
        top: 0;
        left: 0;
      }
    
      95% {
        top: 0;
        left: 2rem;
      }
    
    
      100% {
        left: -100%;
        display: none;
      }
    }
    
    div.cadoa_logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    
    div.cadoa_logo img {
      width: 80%;
      max-width: 30rem;
      animation: shokoto 1 forwards var(--transition);
    }
    
    @keyframes shokoto {
      from {filter: brightness(.5)}
      to {filter: brightness(1)}
    }
    
    .rc.msg {
      width: fit-content;
      height: fit-content;
      display: block;
      max-width: 80%;
      border-radius: 0.2rem;
      background-color: var(--chat-color);
      position: relative;
      padding: 1rem;
      margin: .5rem;
      font-size: 1.5rem;
      font-family: Arial, Helvetica, sans-serif;
      animation-name: loaded_msg;
      animation-duration: 0.1s;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
      animation-iteration-count: 1;
    }
    
    .rc.msg.right {
      margin-left: auto;
      opacity: .8;
    }
    
    .rc.msg span {
      font-size: 1.2rem;
    }
    
    .rc.msg img {
      width: 100%;
    }
    
    .rc.msg.center {
      margin-left: auto;
      margin-right: auto;
      border-radius: 1rem;
      background-color: var(--cadoa-green);
      color: #000;
      font-weight: 900;
      margin-top: 2rem;
    }
    
    @keyframes loaded_msg {
      from {
        transform: scale(0.8);
      }
    
      to {
        transform: scale(1);
      }
    }
    
    
    .spaceside {
      margin-left: var(--space-side);
      margin-right: var(--space-side);
    }
    
    .martb {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }
    
    .rc.title.form3 {
      display: inline-block;
      width: fit-content;
      height: fit-content;
      max-width: 80%;
      padding: 0.4rem;
      background-color: var(--main-color);
      border-start-start-radius: 0.4rem;
      border-start-end-radius: 0.4rem;
      color: #000;
      font-size: 1.6rem;
      font-weight: 900;
    }
    
    .rc.title.form3.center {
      margin-left: auto;
      margin-right: auto;
    }
    
    div.rc.loading {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      position: relative;
      background: transparent;
      width: 26rem;
      height: 26rem;
      border-radius: 50%;
      overflow: hidden;
      
      margin: 2rem auto;
    }
    
    div.rc.loading::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border-right: .4rem solid var(--main-color);
      animation-name: rotate_loading;
      animation-duration: var(--transition);
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    
    @keyframes rotate_loading {
      from {
        transform: translate(-50%, -50%) rotate(0);
      }
    
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    
    div.rc.loading img {
      width: 100%;
    }
    
    img.rc {
      width: 100%;
    }
    
    div.rc.loading span {
      display: inline-block;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: var(--main-color);
      opacity: 0.6;
      animation-name: load;
      animation-duration: var(--transition);
      animation-direction: alternate;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      overflow: hidden;
      font-size: 2rem;
      text-align: center;
      overflow: hidden;
      color: var(--text-color);
    }
    
    
    
    div.rc.loading span img {
      width: 100%;
    }
    
    div.rc.loading span:nth-of-type(1) {
      animation-delay: 0s;
    }
    
    div.rc.loading span:nth-of-type(2) {
      animation-delay: 1s;
    }
    
    div.rc.loading span:nth-of-type(3) {
      animation-delay: 2s;
    }
    
    @keyframes load {
      from {
        opacity: 0.6;
        transform: scale(.9);
      }
    
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .rc.tooutside {
      animation-name: tooutside;
      animation-duration: var(--transition);
    }
    
    @keyframes tooutside {
      from {
        transform: scale(0.2);
      }
    
      to {
        transform: scale(1);
      }
    }
    
    .rc.accident {
      box-sizing: content-box;
      position: relative;
      border: 0.4rem solid var(--main-color);
    }
    
    .rc.accident .rc.bo {
      width: 98% !important;
    }
    
    .rc.accident::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-0.4rem, -100%);
      width: fit-content;
      height: fit-content;
      max-width: 80%;
      padding: 0.4rem;
      background-color: var(--main-color);
      border-start-start-radius: 0.4rem;
      border-start-end-radius: 0.4rem;
      color: var(--text-color-wh);
      font-size: 1.6rem;
      font-weight: 900;
    }
    
    .rc.go {
      margin: 1rem 0;
      background: var(--opacit-col);
      border-radius: 4rem;
      padding: 2rem 3rem;
      text-align: center;
      animation: tototo 2 var(--transition) forwards;
      position: relative;
    }
    
    @keyframes tototo {
      from {top: 0}
      50% {top: -1rem}
      to {top: 0}
    }
    
    .rc.bo {
      width: fit-content;
      margin-right: auto;
      margin-left: auto;
      border-radius: 2rem;
      text-align: center;
      min-width: 10rem;
      overflow: auto;
      max-width: 100%;
    }
    
    .rc.bo.ma {
      background-color: var(--main-color);
      color: var(--text-color);
      font-weight: 900;
      box-shadow: 0 0 .8rem var(--main-color);
    }
    
    .rc.bo.ma.un {
      box-shadow: 0 0 0 transparent;
    }
    
    .spacesidein {
      padding-left: var(--space-side);
      padding-right: var(--space-side);
    }
    
    .rc.chon {
      margin-top: 2rem;
      margin-bottom: 8rem;
    }
    
    @media (max-width: 1000px) {
      html {
        font-size: 16px;
      }
    }
    
    @media (max-width: 800px) {
      html {
        font-size: 15px;
      }
    }
    
    @media (max-width: 600px) {
      html {
        font-size: 13px;
      }
    }
    
    @media (max-width: 500px) {
      html {
        font-size: 11px;
      }
    }
    
    @media (max-width: 400px) {
      html {
        font-size: 10px;
      }
    }
    
    @media (max-width: 300px) {
      html {
        font-size: 9px;
      }
    }
    
    @media (max-width: 200px) {
      html {
        font-size: 8px;
      }
    }
    
    @media (max-width: 150px) {
      html {
        font-size: 6px;
      }
    }
    
    @media (max-width: 100px) {
      html {
        font-size: 4px;
      }
    }
    
    @media (max-width: 100px) {
      html {
        font-size: 3px;
      }
    }
    
    @media (min-width: 1000px) {
      html {
        font-size: 20px;
      }
    }
    
    .rc.CSV {
      background-color: var(--background);
      width: 100%;
      padding: 1rem;
      text-align: center;
    }
    
    .rc.CSV.small {
      --csv-size: 6rem;
    }
    
    .rc.CSV .rc.csv {
      font-size: var(--csv-size);
      font-family: cursive;
      font-weight: 900;
      position: relative;
      overflow: hidden !important;
      width: fit-content;
      display: inline-block;
      animation: calc(2*var(--transition)) 1 forwards;
      opacity: 0.8;
    }
    
    .rc.CSV .rc.csv:not(.unanim) {
      animation-name: csv;
    }
    
    .rc.CSV.shadow .rc.csv {
      color: var(--background) !important;
      text-shadow: 0 0 0.5rem var(--csv-color-shadow);
      animation: 1 calc(var(--transition) * 3) alternate calc(var(--transition) * 4);
    }
    
    .rc.sh-blue {
      --csv-color-shadow: var(--cadoa-blue);
    }
    
    .rc.sh-red {
      --csv-color-shadow: var(--cadoa-red);
    }
    
    .rc.sh-green {
      --csv-color-shadow: var(--cadoa-green);
    }
    
    .rc.sh-yellow {
      --csv-color-shadow: var(--cadoa-yellow);
    }
    
    .rc.sh-orange {
      --csv-color-shadow: var(--cadoa-orange);
    }
    
    .rc.sh-text {
      --csv-color-shadow: var(--text-color);
    }
    
    .rc.sh-background {
      --csv-color-shadow: var(--background);
    }
    
    .rc.sh-second {
      --csv-color-shadow: var(--second-col);
    }
    
    .rc.sh-al {
      --csv-color-shadow: var(--cadoa-al);
    }
    
    
    
    .rc.CSV.font .rc.csv {
      font-family: Arial, Helvetica, sans-serif;
      /* Update cadoa6.1  AlW 21:02 */
      font-family: 'Courier New', Courier, monospace;
    }
    
    @keyframes textshadow {
      from {
        text-shadow: 0 0 0rem var(--csv-color-shadow);
      }
    
      20% {
        text-shadow: 0 0 0.2rem var(--csv-color-shadow);
      }
    
      40% {
        text-shadow: 0 0 0.3rem var(--csv-color-shadow);
      }
    
      60% {
        text-shadow: 0 0 0.8rem var(--csv-color-shadow);
      }
    
      80% {
        text-shadow: 0 0 0.1rem var(--csv-color-shadow);
      }
    
      100% {
        text-shadow: 0 0 0.3rem var(--csv-color-shadow);
      }
    }
    
    @keyframes csv {
      0% {
        color: var(--cadoa-blue);
        opacity: 1;
      }
    
      20% {
        color: var(--cadoa-red);
      }
    
      40% {
        color: var(--cadoa-orange);
        transform: scale(0.95);
      }
    
      60% {
        color: var(--cadoa-green);
        opacity: 0.7;
      }
    
      80% {
        color: var(--cadoa-yellow);
        transform: scale(1.1);
    
      }
    
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .rc.CSV .rc.csv::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--background);
      animation-name: csv_one;
      animation-duration: calc(var(--transition) * 4);
      animation-fill-mode: forwards;
      animation-delay: calc(var(--transition) *2);
    }
    
    @keyframes csv_one {
      100% {
        top: 100%;
        transform: translate(-50%, 0%);
      }
    }
    
    .rc.blue {
      color: var(--cadoa-blue) !important;
    }
    
    .rc.red {
      color: var(--cadoa-red) !important;
    }
    
    .rc.green {
      color: var(--cadoa-green) !important;
    }
    
    .rc.yellow {
      color: var(--cadoa-yellow) !important;
    }
    
    .rc.orange {
      color: var(--cadoa-orange) !important;
    }
    
    .rc.al {
      color: var(--cadoa-al) !important;
    }
    
    
    
    .rc.bg_blue {
      background-color: var(--cadoa-blue) !important;
      color: var(--text-color-wh) !important;
    }
    
    .rc.bg_red {
      background-color: var(--cadoa-red) !important;
      color: var(--text-color-wh) !important;
    }
    
    .rc.bg_green {
      background-color: var(--cadoa-green) !important;
      color: #002 !important;
    }
    
    .rc.bg_yellow {
      background-color: var(--cadoa-yellow) !important;
      color: var(--text-color-wh) !important;
    }
    
    .rc.bg_orange {
      background-color: var(--cadoa-orange) !important;
      color: var(--text-color-wh) !important;
    }
    
    .rc.bg_al {
      background-color: var(--cadoa-al) !important;
      color: var(--text-color-dk) !important;
    }
    
    .rc.bg_opacit {
      background-color: var(--opacit-col) !important;
    }
    
    .rc.bg_main_opacit {
      background-color: var(--main-opaci);
    }
    
    
    
    .rc.big {
      font-size: 2.2rem !important;
      padding: 0 0 .6rem;
    }
    
    
    .rc.box_shadow {
      box-shadow: 0 0 0.4rem var(--main-color)
    }
    
    .ne {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      flex-wrap: nowrap;
    }
    
    .ne img {
      width: 7rem;
      border-radius: 1rem;
    }
    
    .ne h2 {
      font-size: 1.6rem;
    }
    
    /* ... */
    
    /* 12.2   5.0 1130WH9417 */
    .rc.edit {
      position: relative;
    }
    
    .rc.edit::after {
      content: "|";
      animation-name: editing;
      animation-fill-mode: forwards;
      animation-duration: calc(var(--transition));
      animation-direction: alternate;
      animation-iteration-count: infinite;
      transition: var(--transition);
    }
    
    .rc.edit.no::after {
      content: "";
      animation-name: editing_no;
    }
    
    @keyframes editing {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0;
      }
    }
    
    .rc.mix {
      background: linear-gradient(var(--background), var(--background-dk-tow));
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
    }
    
    
    .rc.active::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--opacit-col);
      border-radius: 50%;
      width: 0;
      height: 0;
    }
    
    .rc.active:active::before {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
    
    .rc.align {
      text-align: center;
    }
    
    .rc.fast {
      background-color: var(--opacit-col);
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, calc(100% - 1.5rem));
      margin: 0;
      border-start-start-radius: 2rem;
      border-start-end-radius: 2rem;
      text-align: center;
      backdrop-filter: blur(0.2rem);
      transition: var(--transition);
      width: 100vw;
      max-width: 600px;
      max-height: 300px;
      overflow: auto;
      padding-top: 2rem;
    }
    
    .rc.fast:hover {
      transform: translate(-50%, 0);
    }
    
    .rc.fast::before {
      content: '';
      width: 5rem;
      height: 0.5rem;
      background-color: var(--background);
      border-radius: 2rem;
      position: absolute;
      top: 0.5rem;
      left: 50%;
      transform: translate(-50%, 0%);
    }
    
    
    .rc.fast a {
      font-size: 2rem;
      text-align: center;
    }
    
    .rc.fast.footer {
      position: relative;
      background-color: var(--second-col);
    }
    
    .rc.inp_view {
      width: 90%;
      margin-right: auto;
      margin-left: auto;
      padding: 0;
      border-radius: 1rem;
      overflow: hidden;
    }
    
    .rc.inp_view * {
      width: 100%!important;
      margin-top: 0!important;
      margin-bottom: 0!important;
    }
    
    .rc.inp_view .view {
      background-color: var(--opacit-col);
      max-height: 30rem;
      overflow: auto;
    }
    
    
    @keyframes MV01 {
      from {
        letter-spacing: -1rem;
      }
      to {
        letter-spacing: initial;
      }
    }
    
    /* April OS programs */ 
    
    @keyframes BackgroundColors {
      0% {
        background: #5d6bff77;
      }
      
      25% {
        background: #f54a3977;
      }
      
      50% {
        background: #3dd56a77;
      }
      
      75% {
        background: #ffb14777;
      }
      
      100% {
        background: #E465C277;
      }
    }
    
    .rc.backcolors {
      animation: BackgroundColors infinite 1s alternate;
    }
    
    img.rc.ic {
      width: 3rem;
      height: 3rem;
      border-radius: 1.2rem;
      animation: rott 1 forwards var(--transition);
    }
    
    @keyframes rott {
      from {rotate: -90deg;}
      to {rotate: 0;}
    }
    
    
    .rc.som {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    
    .rc.som::before {
      content: "";
      width: 40%;
      height: 2px;
      position: absolute;
      top: 0;
      left: -40%;
      transform: translate(-50%, -0%);
      background: var(--main-color);
      border-radius: 2px;
      animation: forwards infinite calc(var(--transition)*3);
    }
    
    .rc.som::after {
      content: "";
      width: 100%;
      height: 0%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      backdrop-filter: blur(2px);
    }
    
    .rc.som.active:before {
      animation-name: prog;
    }
    
    .rc.som.active:after {
      height: 100%;
    }
    
    @keyframes prog {
      20% {
        width: 70%;
      }
      50% {
        width: 30%;
      }
      to {
        left: 150%;
        width: 40%;
      }
    }
  `
}
const cDesgin = {
  version: {
    name: "sBeta",
    copy: "1.0"
  },
  setup: function() {
    var clc = document.createElement("style")
    clc.innerHTML = cadoalc.CadoaLCCode
    document.body.appendChild(clc)
    
    var navvs = document.createElement("div")
    navvs.classList.add("rc", "navs")
    navvs.id = "navs"
    document.body.appendChild(navvs)
    
    
    document.querySelectorAll(".rc.write").forEach(e => cDesgin.CLC.write(e, true))
    
    QDG.running()
  },
  
  resettingNoti: function() {
    document.querySelector("body").innerHTML += `
      <section class="rc full" id="sfull">
        <div class="rc box bo">
          <h1 class="col">Cadoa</h1>
          <b>Are you sure!?</b> <br>
          <a class="rc" href="/support/">Move to support page.</a>
          <br>
          <br>
          
          <button class='rc btn' onclick='cDesgin.resetting()'>Yes</button>
          
          <button class='rc btn no' onclick='location.reload();'>no</button>
          
        </div>
      </section>
    `;
  },
  resetting: function() {
    let sfu = document.getElementById("sfull");
    let con = `
    
    <div class="rc loading martb"><span></span><span></span><span></span></div>`;
    
    sfu.innerHTML = `
      <h1><span class="col">RC Security</span></h1>
      ${con}
      <b id="mas">Please, wait</b>
    `;
    let mas = document.getElementById('mas');
    
    let count = 0;
    let it = setInterval(function() {
      switch (count) {
        case 1:
          mas.innerHTML = '<span style="color: var(--cadoa-red)">Resetting all data</span>';
          localStorage.clear();
          sessionStorage.clear();
          break;
        case 5:
          mas.innerHTML = 'Operating System is working';
          break;
        case 6:
          mas.innerHTML = 'Moving to Home';
          break;
      }
      count++;
    }, 1000);
    
    
    
    setTimeout(function() {
      clearInterval(it);
      set_style();
      location.href = '/';
    }, 7000);
  },
  fontNoti: function() {
    document.getElementsByTagName("body")[0].innerHTML += `
    <section class="rc full clicked" onclick="remo(this)">
      <meta name="theme-color" content="#219bff">
      <link rel="stylesheet" href="/libraries/css/cadoa.css">
      <link rel="stylesheet" href="/settings/paid/style.css">
    <div class="rc box bo box_shadow">
      <h1 class="col">Cadoa settings</h1>
      <b>Choose the font that you want it..</b>
      
    
    
    
    <div class="rc icons ichs">
        <a class="rc icon ich" onclick="CadoaFontFun(0)">
          <span style="font-family: var(--cadoa-font-one)">Tx1...</span>
        </a>
        
        
        <a class="rc icon ich" onclick="CadoaFontFun(1)">
          <span style="font-family: var(--cadoa-font-tow)">Tx1...</span>
        </a>
        
        
        <a class="rc icon ich" onclick="CadoaFontFun(2)">
          <span style="font-family: var(--cadoa-font-thr)">Tx1 ..</span>
        </a>
        
        
        <a class="rc icon ich" onclick="CadoaFontFun(3)">
          <span style="font-family: var(--cadoa-font-for)">Tx1...</span>
        </a>
      </div>
    </div>
    </section>
    <style>
      .rc.icon.ich {
        border: 0.1rem dashed var(--main-color);
      }
    </style>
  `;
  },
  move: u => location.href = u,
  remo: e => e.style.display = "none",
  CLC: {
    version: "V:9.4",
    address: "https://cadoa.epizy.com/",
    printAdress: function(ele) {
      ele = `${address}+${ele.innerHTML}ba`;
    },
    toast: function(msg, plusClass) {
      if (document.getElementById("navs").innerHTML == "") {
        document.getElementById("navs").innerHTML += `<h1 class="rc toast true ${plusClass}">${msg} <span class='rc clear active' onclick='cDesgin.CLC.cleanToast()'>×</span></h1>`;
      }
      
      else {
        document.getElementById("navs").innerHTML += `<h1 class="rc toast true ${plusClass}">${msg}</h1>
    `;
      }
    },
    cleanToast: function() {
      document.getElementById("navs").innerHTML = ``;
    },
    write: function(el, speed) {
      el.classList.add("rc");
      el.classList.add("edit");
      el.classList.remove("no");
      var con = el.innerHTML;
      el.innerHTML = "";
      let i = 0;
      let interv = setInterval(function() {
        if (i < con.length) {
          el.innerHTML += con[i];
        }
        else {
          setTimeout(function() {
            el.classList.add("no");
          }, 0);
          clearInterval(interv);
        }
        i++;
      }, speed ? 50 : 100);
    },
    show_version: function() {
      let bod = document.querySelector("html body");
      let logo = "Cadoa Library Css";
      let sp = 60
      bod.innerHTML += `
      <section class="rc full align" id="shve">
        <div class="rc" id="versionMain">
          <h1 class="rc col big" id="wri">${logo}</h1>
        </div>
      </section>
    `;
      let Wri = document.getElementById("wri");
      let VersionMain = document.getElementById("versionMain");
      cDesgin.CLC.write(Wri, sp);
      
      setTimeout(function() {
        VersionMain.innerHTML += `
        <div class="rc CSV font martb" style="border-radius: 2rem">
          <span class="rc csv red">
            ${cDesgin.CLC.version}
          </span>
        </div>
      `;
        
        setTimeout(function() {
          VersionMain.innerHTML += `<div class="rc center" id="rezkhamdan94*_25">Rezk Hamdan designed this page</div>`;
          let RezkHamdan = document.getElementById("rezkhamdan94*_25");
          cDesgin.CLC.write(RezkHamdan, 40);
          
          
          
          setTimeout(function() {
            versionMain.innerHTML = `
            <h1 class="rc col big">RC security</h1>
            <div class="rc loading martb">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Thanks</p>
          `;
            
            setTimeout(function() {
              cDesgin.remo(document.getElementById("shve"));
            }, 2000);
            
          }, 4000);
        }, 4000);
      }, logo.length * sp * 2);
    }
  },
  pleaseUpdate: function(info) {
    cDesgin.CLC.toast("CDS 1 helper: You use a old syntax please read <a href='cadoa.epizy.com/CDS/'>document</a> kf new system", "error")
    console.warn(`There are a old syntax =>`, info)
  }
}
const QDG = {
  starting: false,
  inner: `
    <section class="cdQDGbg"></section>
<section class="cdQDG rc align">
  <h1 class="rc col big" onclick="QDG.hide()">Cadoa Design System 1</h1>
  <h2>Welcome to Quick Developer Guide</h2>
  <h1 class="fix"></h1>
    
    <section class="group" id="group">
      <style>
        .group {
          width: 100%;
          height: fit-content;
          padding: 1rem 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          
        }
        
        .part {
          width: 100%;
          padding: 1rem;
          border-radius: 1rem;
          background-color: var(--opacit-col);
          text-decoration: none;
          color: var(--text-color);
          transition: 0.3s;
          position: relative;
          padding-bottom: 3rem;
          overflow: hidden !important;
        }
        
        .part .bt {
          display: inline-block;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, -120%) rotate(90deg);
          background-color: var(--main-color);
          color: var(--text-color);
          padding: 0.2rem 0.5rem;
          border-radius: 0.2rem;
          font-weight: 900;
          font-size: 1.2rem;
        }
        
        .part:active:not(.btn) {
          opacity: 0.9;
          transform: scale(0.97);
        }
        
        .part .head {
          position: relative !important;
          z-index: auto !important;
        }
        
        
        
        .part.show .res {
          display: none;
        }
        
        .part.show .code {
          display: block;
        }
        
        
        
        .part .res {
          display: block;
        }
        
        .part .code {
          background-color: var(--background);
          color: var(--text-color);
          position: relative;
          font-size: 1.4rem;
          display: none;
          user-select: auto;
          overflow: auto !important
        }
        
        .part .code::before {
          content: attr(data-lan);
          position: sticky;
          padding: 0.5rem;
          border-radius: 0.4rem;
          top: 0;
          left: 100%;
          background-color: var(--main-color);
          transform: translate(-120%, 20%);
          color: var(--text-color);
          font-weight: 900;
          user-select: none;
        }
        
        
        
        /* .... */
        .title.form1,
        .title.form2 {
          z-index: 50 !important;
        }
        
        .part footer.rc {
          margin-top: 0 !important;
        }
        
        
        .hd {
          margin-top: 8rem;
          font-size: 2rem;
          padding-left: var(--space-side);
        }
        
        .shar {
          user-select: all;
        }
      </style>
    </section>
    
    
    <style>
      .cdQDG {
        position: fixed;
        z-index: 19994;
        /* don't forget before way*/
        top: 100vh;
        left: 50%;
        transform: translate(-50%, -40%);
        width: 100vw;
        height: 70vh;
        overflow: auto;
        background: var(--background);
        border-top-right-radius: 2.8rem;
        border-top-left-radius: 2.8rem;
        animation: qdgan 1 forwards .4s 1s;
        padding: 2rem var(--space-side);
      }
      
      .cdQDG.hide {
        transform: translate(-50%, 0%);
      }
      
      @keyframes qdgan {
        to {
          transform: translate(-50%, -100%)
        }
      }
      
      .cdQDGbg {
        content: "";
        width: 100vw;
        height: 100vh;
        z-index: 19993;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #0006;
      }
    </style>
</section>
  `,
  res: [
    `<section class="head">
          <h2><span>L</span>ogo</h2>
        </section>`,
    `<input type="text" class="rc inp" placeholder="enter some words.">`,
    `<button class="rc btn">click</button>`,
    `<h2 class="rc title form1">form1</h2>`,
    `<h2 class="rc title form2"> form2 </h2>`,
    `<div class="rc box">Box</div>`,
    `<div class="rc cards">
          <a href="#" class="rc card">
            <img src="Images/1.jpg">
            <div class="details">
              <b> name1 </b>
              <span> details </span>
            </div>
          </a>
          
          <a href="#" class="rc card">
            <img src="Images/2.jpg">
            <div class="details">
              <b> name2 </b>
              <span> details </span>
            </div>
          </a>
        </div>
        `,
    `<div class="rc icons">
           <a href="#" class="rc icon">
             <img src="Images/3.jpg">
             <span> icon1 </span>
           </a>
           
           <a href="#" class="rc icon">
             <img src="Images/4.jpg">
             <span> icon2 </span>
           </a>
           
           <a href="#" class="rc icon">
             <img src="Images/5.jpg">
             <span> icon3 </span>
           </a>
           
           <a href="#" class="rc icon">
             <img src="Images/6.jpg">
             <span> icon4 </span>
           </a>
           
           <a href="#" class="rc icon">
             <img src="Images/7.jpg">
             <span> icon5 </span>
           </a>
           
           <a href="#" class="rc icon">
             <img src="Images/8.jpg">
             <span> icon6 </span>
           </a>
           
           <a href="#" class="rc icon">
             <img src="Images/9.jpg">
             <span> icon7 </span>
           </a>
         </div>`,
    
    `  <footer class="rc">
             <h2 class="header">
               cadoa
             </h2>
    
             <a href="https://cadoa.epizy.com">company</a>
             <a href="#">call me</a>
             <a href="https://hamdan.lovestoblog.com">away website</a>
             <a href="https://me.facebook.com/">Facebook</a>
             <a href="https://me.youtube.com/">YouTube</a>
             <a href="#">more</a>
    
             <b><span>Edmond Dantes </span> is working on developing this website. <br> <br>
             by Cadoa team | رزق حمدان</b>
    
             <p>15:37  02/07/2023</p>
            </footer>
         `,
    `  <b>
              <span class="rc cir">1</span> first element.
              <span class="rc cir">2</span> second element.
              <span class="rc cir">3</span> last element element.
              
              
            </b>`,
    `
            <div class="rc settings">
              <a class="rc element">
                My account
              </a> 
              
              <a class="rc element">
                Username
              </a>
              
              <a class="rc element">
                Password
              </a>
            </div>
            
            <div class="rc settings">
              <a class="rc element">
                Home main
              </a> 
              
              <a class="rc element">
                Theme
              </a>
              
              <a class="rc element">
                Colors
              </a>
              
              <a class="rc element">
                Font size
              </a>
              
              <a class="rc element">
                View size
              </a>
            </div>
            
            `,
    `
            <h1 class="rc linecolor">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </h1>
            `,
    `
            <ul class="rc">
              <li><a href="">Cadoa</a></li>
              <li><a href="">Google</a></li>
              <li><a href="">YouTube</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">Twitter</a></li>
            </ul>
            `,
    `<div class="rc cadoa_logo">
              <img src="/Images/cadoa_logo.png" alt="RC: ERM_194924082023">
             </div>`,
    `
            <div class="rc msg center">Cadoa</div>
            <div class="rc msg">Hi</div>
            `,
    `
              <div class="rc CSV small" id="csv">
                <span class="rc csv blue">E</span>
                <span class="rc csv red">x</span>
                <span class="rc csv orange">a</span>
                <span class="rc csv green">m</span>
                <span class="rc csv orange">p</span>
                <span class="rc csv blue">l</span>
                <span class="rc csv green">e</span>
              </div>
            `,
  ],
  code: [`section.head
              h2
                span`,
    `input.rc.inp`,
    `button.rc.btn`,
    `h2.rc.title.form1`,
    `h2.rc.title.form2`,
    `div.rc.box`,
    `div.cards
              a.card
                img
                div.details
                  b
                  span`,
    `div.rc.icons
              <!-- every a element is icon -->
              a.rc.icon
                img
                span`,
    `footer.rc
              h2.header
              a
              .
              .
              .
              b
                span
              p
            `,
    `span.rc.cir`,
    `div.rc.settings
               a.rc.element
                 setting name
            `,
    `h1.rc.linecolor
              span
              span
              span
              span`,
    `ul.rc
                li
                  a
                    element name`,
    `
              div.rc.cadoa_logo
                img --> src="image.jpg"
            `,
    `
            if you want show it on center:
              div.rc.msg.center --> content
            on left:
              div.rc.msg --> content
            on right:
              div.rc.msg.right --> content
            `,
    `
            .rc.CSV ==> you can write small for font smaller.
            *.rc.csv character ==> you can choose color
            `,
  ],
  lans: ["HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML", "HTML"],
  classes: ["", "", "btn", "", "", "", "btn", "btn", "btn", "", "btn", "", "btn", "", "btn", ""],
  view: function(e) {
    let pr = e.parentElement;
    if (e.getAttribute("data-st") == "true") {
      e.style.setProperty("transform", "translate(-50%, -120%) rotate(-90deg)");
      e.setAttribute("data-st", "false");
      // console.log(true);
      
      pr.classList.add("show");
    } else {
      e.style.setProperty("transform", "translate(-50%, -120%) rotate(90deg)");
      e.setAttribute("data-st", "true");
      // console.log("not", true);
      pr.classList.toggle("show");
      
    }
    // console.log(e.getAttribute("data-st"));
  },
  hide: function() {
    try {
      document.querySelector("#qdggdq").style.display = "none"
      document.querySelector("#qdggdq").id = `fgs${Math.random()}`
    } catch(e) {
      console.warn(e)
    }
    
  },
  start: function() {
    this.hide()
    if (!this.starting) {
      this.starting = true
      
      var qdg = document.createElement("div")
      qdg.id = "qdggdq"
      qdg.innerHTML = this.inner
      document.body.appendChild(qdg)
      //document.body.innerHTML += this.inner
      
      for (let i = 0; i < this.res.length; i++) {
        document.getElementById("group").innerHTML += `

        <div href="" class="part ${this.classes[i]}">
          <div class="res">
            ${this.res[i]}
          </div>
    
          <pre class="code" data-lan="${this.lans[i]}">
            <code>
              ${this.code[i]}
            </code>
          </pre>
    
          <span class="bt" data-st="true" onclick="QDG.view(this)">></span>
        </div>`;
        
      }
    }
  },
  running: function() {
    //document.querySelector("input.rc.inp").addEventListener("click", function() {
      //alert(5)
     // if(document.querySelector("input.rc.inp").value == "Quick Developer Guide") QDG.start()
    //})
  }
}

cDesgin.setup()
// QDG.start()
