(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n#clouds {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  height: 30%;\n  overflow: hidden;\n  -webkit-animation: FadeIn 3s ease-out;\n          animation: FadeIn 3s ease-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: -1; }\n@-webkit-keyframes FadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes FadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.cloud {\n  position: absolute;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  height: 70px;\n  -webkit-animation-duration: 120s;\n          animation-duration: 120s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-name: Float, FadeFloat;\n          animation-name: Float, FadeFloat;\n  z-index: 1;\n  fill: #1c92d2; }\n.cloud.foreground {\n    height: 10%;\n    min-height: 20px;\n    z-index: 3; }\n.cloud.background {\n    height: 9.09090909%;\n    min-height: 8px;\n    -webkit-animation-duration: 210s;\n            animation-duration: 210s; }\n.cloud:nth-child(10) {\n    -webkit-animation-delay: -184.61538462s;\n            animation-delay: -184.61538462s;\n    top: 60%; }\n.cloud.foreground:nth-child(10) {\n    -webkit-animation-duration: 80s;\n            animation-duration: 80s;\n    height: 35%; }\n.cloud.background:nth-child(10) {\n    -webkit-animation-duration: 110s;\n            animation-duration: 110s;\n    height: -3.40909091%; }\n.cloud:nth-child(9) {\n    -webkit-animation-delay: -166.15384615s;\n            animation-delay: -166.15384615s;\n    top: 54%; }\n.cloud.foreground:nth-child(9) {\n    -webkit-animation-duration: 84s;\n            animation-duration: 84s;\n    height: 32.5%; }\n.cloud.background:nth-child(9) {\n    -webkit-animation-duration: 114s;\n            animation-duration: 114s;\n    height: -2.15909091%; }\n.cloud:nth-child(8) {\n    -webkit-animation-delay: -147.69230769s;\n            animation-delay: -147.69230769s;\n    top: 48%; }\n.cloud.foreground:nth-child(8) {\n    -webkit-animation-duration: 88s;\n            animation-duration: 88s;\n    height: 30%; }\n.cloud.background:nth-child(8) {\n    -webkit-animation-duration: 118s;\n            animation-duration: 118s;\n    height: -0.90909091%; }\n.cloud:nth-child(7) {\n    -webkit-animation-delay: -129.23076923s;\n            animation-delay: -129.23076923s;\n    top: 42%; }\n.cloud.foreground:nth-child(7) {\n    -webkit-animation-duration: 92s;\n            animation-duration: 92s;\n    height: 27.5%; }\n.cloud.background:nth-child(7) {\n    -webkit-animation-duration: 122s;\n            animation-duration: 122s;\n    height: 0.34090909%; }\n.cloud:nth-child(6) {\n    -webkit-animation-delay: -110.76923077s;\n            animation-delay: -110.76923077s;\n    top: 36%; }\n.cloud.foreground:nth-child(6) {\n    -webkit-animation-duration: 96s;\n            animation-duration: 96s;\n    height: 25%; }\n.cloud.background:nth-child(6) {\n    -webkit-animation-duration: 126s;\n            animation-duration: 126s;\n    height: 1.59090909%; }\n.cloud:nth-child(5) {\n    -webkit-animation-delay: -92.30769231s;\n            animation-delay: -92.30769231s;\n    top: 30%; }\n.cloud.foreground:nth-child(5) {\n    -webkit-animation-duration: 100s;\n            animation-duration: 100s;\n    height: 22.5%; }\n.cloud.background:nth-child(5) {\n    -webkit-animation-duration: 130s;\n            animation-duration: 130s;\n    height: 2.84090909%; }\n.cloud:nth-child(4) {\n    -webkit-animation-delay: -73.84615385s;\n            animation-delay: -73.84615385s;\n    top: 24%; }\n.cloud.foreground:nth-child(4) {\n    -webkit-animation-duration: 104s;\n            animation-duration: 104s;\n    height: 20%; }\n.cloud.background:nth-child(4) {\n    -webkit-animation-duration: 134s;\n            animation-duration: 134s;\n    height: 4.09090909%; }\n.cloud:nth-child(3) {\n    -webkit-animation-delay: -55.38461538s;\n            animation-delay: -55.38461538s;\n    top: 18%; }\n.cloud.foreground:nth-child(3) {\n    -webkit-animation-duration: 108s;\n            animation-duration: 108s;\n    height: 17.5%; }\n.cloud.background:nth-child(3) {\n    -webkit-animation-duration: 138s;\n            animation-duration: 138s;\n    height: 5.34090909%; }\n.cloud:nth-child(2) {\n    -webkit-animation-delay: -36.92307692s;\n            animation-delay: -36.92307692s;\n    top: 12%; }\n.cloud.foreground:nth-child(2) {\n    -webkit-animation-duration: 112s;\n            animation-duration: 112s;\n    height: 15%; }\n.cloud.background:nth-child(2) {\n    -webkit-animation-duration: 142s;\n            animation-duration: 142s;\n    height: 6.59090909%; }\n@-webkit-keyframes Float {\n  from {\n    -webkit-transform: translateX(100%) translateZ(0);\n            transform: translateX(100%) translateZ(0); }\n  to {\n    -webkit-transform: translateX(-15%) translateZ(0);\n            transform: translateX(-15%) translateZ(0); } }\n@keyframes Float {\n  from {\n    -webkit-transform: translateX(100%) translateZ(0);\n            transform: translateX(100%) translateZ(0); }\n  to {\n    -webkit-transform: translateX(-15%) translateZ(0);\n            transform: translateX(-15%) translateZ(0); } }\n/*\r\n  @keyframes Float {\r\n    from { transform: translateX(100%) translateY(-100%) translateZ(0); }\r\n    50% { transform: translateX(55%) translateY(0) translateZ(0); }\r\n    to { transform: translateX(-5%) translateY(-100%) translateZ(0); }\r\n  }\r\n  */\n@-webkit-keyframes FadeFloat {\n  0%, 100% {\n    opacity: 0; }\n  5%, 90% {\n    opacity: 1; } }\n@keyframes FadeFloat {\n  0%, 100% {\n    opacity: 0; }\n  5%, 90% {\n    opacity: 1; } }\n.basket {\n  position: relative; }\n.overlay-grid {\n  position: absolute;\n  pointer-events: none;\n  display: grid;\n  grid-template-columns: repeat(10, calc((100% / 10) - 1px));\n  grid-template-rows: repeat(10, 1.8rem);\n  grid-gap: 1px;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 0 0 1rem 1rem;\n  padding: 1rem; }\n.overlay-grid .path-x, .overlay-grid .path-y {\n    grid-row-start: 1;\n    grid-column-start: 1;\n    background: rgba(255, 244, 0, 0.2);\n    pointer-events: none;\n    transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s; }\n.basket-grid {\n  font-family: 'Montserrat', sans-serif;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(10, calc((100% / 10) - 1px));\n  grid-template-rows: repeat(10, 1.8rem);\n  grid-gap: 1px;\n  grid-auto-flow: dense;\n  max-width: 100%;\n  overflow: hidden;\n  background: #44261ac2;\n  color: #f26645;\n  font-size: 1.2rem;\n  margin: 0;\n  width: 35rem;\n  text-align: center;\n  border-radius: 0 0 1rem 1rem;\n  padding: 1rem; }\n.basket-grid .cell {\n    background-color: rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;\n    display: grid;\n    align-content: center; }\n.basket-grid .cell a {\n      display: block;\n      color: inherit;\n      text-decoration: none;\n      font-weight: bold;\n      width: 100%;\n      height: 100%; }\n.basket-grid .cell:hover, .basket-grid .cell:focus-within {\n      color: #44261ac2;\n      background-color: #f26645; }\n.basket-grid .cell.start {\n      background-color: #118AB2;\n      color: #073B4C; }\n.basket-grid .cell.target {\n      color: #44261ac2;\n      background-color: #f26645; }\n.basket-grid .cell.current {\n      background-color: #FFD166;\n      color: #073B4C; }\n.basket-grid .cell.current.target {\n        background-color: #06D6A0; }\n.basket-grid .cell.current.over {\n        background-color: #EF476F; }\n.cell-target {\n  background: rgba(255, 244, 0, 0.2);\n  position: absolute;\n  border: 2px solid #fff400;\n  top: 1px;\n  left: 1px;\n  height: 0;\n  width: 0;\n  z-index: 100;\n  content: \" \";\n  transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s; }\nhtml, body {\n  margin: 0;\n  padding: 0; }\nhtml {\n  height: 100vh; }\nbody {\n  min-height: 100%; }\nbody {\n  color: #073B4C;\n  background-color: #56ccf2;\n  background-image: radial-gradient(circle, #56ccf2 0%, #2f80ed 100%);\n  overflow: hidden;\n  font-family: 'Roboto', sans-serif; }\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 300; }\nstrong, b {\n  font-weight: 500; }\na {\n  color: #2CDA9D;\n  text-decoration: none; }\na:visited {\n    color: #2CDA9D; }\na:hover {\n    color: #20A39E; }\n* {\n  box-sizing: border-box; }\nmain {\n  position: relative; }\nfooter {\n  position: fixed;\n  color: #fff;\n  font-size: 0.5rem;\n  padding: 1rem;\n  display: flex;\n  bottom: 0;\n  right: 0; }\n.panel {\n  text-align: center;\n  padding: 1rem;\n  border-radius: 1rem;\n  background-color: rgba(0, 0, 0, 0.54);\n  margin: 1rem;\n  color: #fff; }\n.screen {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  top: 0;\n  position: absolute;\n  transition: 0.45s; }\n.splash {\n  -webkit-animation-delay: 1.3s;\n          animation-delay: 1.3s;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: intro_text;\n          animation-name: intro_text; }\n.splash h1 {\n    font-size: 3rem; }\n.splash .begin {\n    border: 1px solid #fff;\n    border-radius: 1px;\n    color: #fff;\n    background: transparent;\n    text-transform: uppercase;\n    padding: 1rem 1.5rem;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.5rem;\n    letter-spacing: 4px; }\n.game {\n  -webkit-transform: translateY(100vh);\n          transform: translateY(100vh);\n  grid-template-rows: 1fr 1.5fr; }\n.go .splash {\n  -webkit-transform: translateY(-100vh);\n          transform: translateY(-100vh); }\n.go .game {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n.balloon-graphics {\n  -webkit-animation: floating 2s ease-in-out 0s infinite alternate;\n          animation: floating 2s ease-in-out 0s infinite alternate;\n  height: 100%;\n  grid-row: 1 / 1;\n  grid-column: 1 / 1; }\n.current-position {\n  grid-row: 1 / 1;\n  grid-column: 1 / 1;\n  z-index: 100; }\n@-webkit-keyframes floating {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(-2rem);\n            transform: translateY(-2rem); } }\n@keyframes floating {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(-2rem);\n            transform: translateY(-2rem); } }\n@-webkit-keyframes intro_text {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  10% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  20% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes intro_text {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  10% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  20% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.problem-panel {\n  font-size: 3rem;\n  font-family: 'Shadows Into Light', cursive;\n  color: white;\n  text-align: center;\n  border-radius: 1rem 1rem 0 0;\n  margin: 0;\n  background-color: #44261ac2;\n  padding: 0; }\n.problem-panel input {\n    -webkit-appearance: none;\n    -webkit-rtl-ordering: logical;\n    background-color: transparent;\n    padding: 0 .5rem;\n    border: none;\n    color: white;\n    font-size: inherit;\n    font-family: inherit;\n    display: inline;\n    max-width: 8rem;\n    text-align: right;\n    margin-right: 1rem; }\n.problem-panel input[type=number]::-webkit-inner-spin-button,\n  .problem-panel input[type=number]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0; }\n.problem-panel ::-webkit-input-placeholder {\n    /* Edge */\n    color: #fff; }\n.problem-panel ::-moz-placeholder {\n    color: #fff; }\n.problem-panel ::-ms-input-placeholder {\n    color: #fff; }\n.problem-panel ::placeholder {\n    color: #fff; }\n.problem-panel .number.start {\n    color: #118AB2; }\n.problem-panel .number.target {\n    color: #f26645; }\n.problem-panel .number.amount {\n    color: #FFD166; }\n.problem-panel .number.amount.over {\n      color: #EF476F; }\n.red {\n  color: #EF476F; }\n.red.bg {\n    background-color: #EF476F;\n    color: #073B4C; }\n.orange {\n  color: #FFD166; }\n.orange.bg {\n    background-color: #FFD166;\n    color: #073B4C; }\n.green {\n  color: #06D6A0; }\n.green.bg {\n    background-color: #06D6A0;\n    color: #073B4C; }\n.blue {\n  color: #118AB2; }\n.blue.bg {\n    background-color: #118AB2;\n    color: white; }\n.black {\n  color: #073B4C; }\n.black.bg {\n    background-color: #073B4C;\n    color: white; }\n.purple {\n  color: #513B56; }\n.purple.bg {\n    background-color: #513B56;\n    color: white; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGNsZWZ0XFxTb3VyY2VcXEdpdEh1YlxcY2xlZnRoZXJpc1xcSG90QWlyQmFsbG9vbi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcY2xlZnRcXFNvdXJjZVxcR2l0SHViXFxjbGVmdGhlcmlzXFxIb3RBaXJCYWxsb29uL3NyY1xcYXNzZXRzXFxjc3NcXF9jbG91ZHMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXGNsZWZ0XFxTb3VyY2VcXEdpdEh1YlxcY2xlZnRoZXJpc1xcSG90QWlyQmFsbG9vbi9zcmNcXGFzc2V0c1xcY3NzXFxfYmFza2V0LnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxjbGVmdFxcU291cmNlXFxHaXRIdWJcXGNsZWZ0aGVyaXNcXEhvdEFpckJhbGxvb24vc3JjXFxhc3NldHNcXGNzc1xcX2NvbG9ycy5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcY2xlZnRcXFNvdXJjZVxcR2l0SHViXFxjbGVmdGhlcmlzXFxIb3RBaXJCYWxsb29uL3NyY1xcYXNzZXRzXFxjc3NcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQ0E7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUFFLFFBQVE7RUFBRSxTQUFTO0VBQUUsT0FBTztFQUNwQyxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7QUFHYjtFQUNFO0lBQU8sVUFBVSxFQUFBO0VBQ2pCO0lBQUssVUFBVSxFQUFBLEVBQUE7QUFGakI7RUFDRTtJQUFPLFVBQVUsRUFBQTtFQUNqQjtJQUFLLFVBQVUsRUFBQSxFQUFBO0FBTWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFFWCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLFlBQVk7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QUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0FBckIxQjs7SUF5QlEsd0JBQXdCO0lBQ3hCLFNBQVMsRUFBQTtBQTFCakI7SUE2QmtDLFNBQUE7SUFDMUIsV0FBVyxFQUFBO0FBOUJuQjtJQW9DUSxXQUFXLEVBQUE7QUFwQ25CO0lBb0NRLFdBQVcsRUFBQTtBQXBDbkI7SUFvQ1EsV0FBVyxFQUFBO0FBcENuQjtJQXlDWSxjRGhMaUIsRUFBQTtBQ3VJN0I7SUE0Q1ksY0ZwTEMsRUFBQTtBRXdJYjtJQStDWSxjRHhMVSxFQUFBO0FDeUl0QjtNQWtEZ0IsY0Q1TEUsRUFBQTtBQ2tNbEI7RUFDSSxjRG5NYyxFQUFBO0FDa01sQjtJQUlRLHlCRHRNVTtJQ3VNVixjRG5NVyxFQUFBO0FDc01uQjtFQUNJLGNEMU1rQixFQUFBO0FDeU10QjtJQUlRLHlCRDdNYztJQzhNZCxjRDNNVyxFQUFBO0FDOE1uQjtFQUNJLGNEak5vQixFQUFBO0FDZ054QjtJQUlRLHlCRHBOZ0I7SUNxTmhCLGNEbk5XLEVBQUE7QUNzTm5CO0VBQ0ksY0R4TnlCLEVBQUE7QUN1TjdCO0lBSVEseUJEM05xQjtJQzROckIsWUFBWSxFQUFBO0FBR3BCO0VBQ0ksY0QvTmUsRUFBQTtBQzhObkI7SUFJUSx5QkRsT1c7SUNtT1gsWUFBWSxFQUFBO0FBR3BCO0VBQ0ksY0R0T2MsRUFBQTtBQ3FPbEI7SUFJUSx5QkR6T1U7SUMwT1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJy4vYXNzZXRzL2Nzcy9zdHlsZXMuc2Nzcyc7IiwiQGltcG9ydCAnY29sb3JzJztcclxuI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbmltYXRpb246IEZhZGVJbiAzcyBlYXNlLW91dDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgRmFkZUluIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cclxuICB9XHJcbiAgXHJcbiAgJGR1cmF0aW9uOiAxMjBzO1xyXG4gICRoZWlnaHQ6IDEwJTtcclxuICBcclxuICAuY2xvdWQgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9vdXRsaW5lOiBzb2xpZCAxcHggI0YwMDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBGbG9hdCwgRmFkZUZsb2F0O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZpbGw6ICMxYzkyZDI7XHJcbiAgICBcclxuICAgIFxyXG4gICAgJi5mb3JlZ3JvdW5kIHsgXHJcbiAgICAgIGhlaWdodDogJGhlaWdodDtcclxuICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgICAgei1pbmRleDogMztcclxuICAgIH1cclxuICAgICYuYmFja2dyb3VuZCB7IFxyXG4gICAgICBoZWlnaHQ6ICRoZWlnaHQgLyAxLjE7IFxyXG4gICAgICBtaW4taGVpZ2h0OiA4cHg7XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uICogMS43NTtcclxuICAgICAgLy9hbmltYXRpb24tZGVsYXk6IC0ycztcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIEBmb3IgJGkgZnJvbSAxMCB0byAxIHtcclxuICAgICAgICAkZGVsYXk6ICgkZHVyYXRpb24gLyA2LjUgKSAqIC0xO1xyXG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7IFxyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAoJGRlbGF5ICogJGkgKTsgXHJcbiAgICAgICAgICB0b3A6ICRpICogNiVcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mb3JlZ3JvdW5kOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAoJGR1cmF0aW9uIC0gKCRpICogNCkpO1xyXG4gICAgICAgICAgaGVpZ2h0OiAoJGhlaWdodCArICgkaSAqIDIuNSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmJhY2tncm91bmQ6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICgkZHVyYXRpb24gKiAxLjI1IC0gKCRpICogNCkpO1xyXG4gICAgICAgICAgLy9hbmltYXRpb24tZHVyYXRpb246ICgoJGR1cmF0aW9uICogMS43NSkgLSAoJGkgKiAyKSApO1xyXG4gICAgICAgICAgaGVpZ2h0OiAoKCRoZWlnaHQgLyAxLjEpIC0gKCRpICogMS4yNSkpO1xyXG4gICAgICAgIH0gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIEZsb2F0IHtcclxuICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgdHJhbnNsYXRlWigwKTsgfVxyXG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgdHJhbnNsYXRlWigwKTsgfVxyXG4gIH1cclxuICBcclxuICAvKlxyXG4gIEBrZXlmcmFtZXMgRmxvYXQge1xyXG4gICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVaKDApOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTUlKSB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVooMCk7IH1cclxuICAgIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSkgdHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWigwKTsgfVxyXG4gIH1cclxuICAqL1xyXG4gIFxyXG4gIEBrZXlmcmFtZXMgRmFkZUZsb2F0IHtcclxuICAgIDAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgNSUsIDkwJSB7IG9wYWNpdHk6IDE7IH1cclxuICB9ICBcclxuICBcclxuICAiLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4jY2xvdWRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAzMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogRmFkZUluIDNzIGVhc2Utb3V0O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgei1pbmRleDogLTE7IH1cblxuQGtleWZyYW1lcyBGYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLmNsb3VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMjBzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLW5hbWU6IEZsb2F0LCBGYWRlRmxvYXQ7XG4gIHotaW5kZXg6IDE7XG4gIGZpbGw6ICMxYzkyZDI7IH1cbiAgLmNsb3VkLmZvcmVncm91bmQge1xuICAgIGhlaWdodDogMTAlO1xuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogMzsgfVxuICAuY2xvdWQuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiA5LjA5MDkwOTA5JTtcbiAgICBtaW4taGVpZ2h0OiA4cHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMTBzOyB9XG4gIC5jbG91ZDpudGgtY2hpbGQoMTApIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xODQuNjE1Mzg0NjJzO1xuICAgIHRvcDogNjAlOyB9XG4gIC5jbG91ZC5mb3JlZ3JvdW5kOm50aC1jaGlsZCgxMCkge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODBzO1xuICAgIGhlaWdodDogMzUlOyB9XG4gIC5jbG91ZC5iYWNrZ3JvdW5kOm50aC1jaGlsZCgxMCkge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTEwcztcbiAgICBoZWlnaHQ6IC0zLjQwOTA5MDkxJTsgfVxuICAuY2xvdWQ6bnRoLWNoaWxkKDkpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xNjYuMTUzODQ2MTVzO1xuICAgIHRvcDogNTQlOyB9XG4gIC5jbG91ZC5mb3JlZ3JvdW5kOm50aC1jaGlsZCg5KSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4NHM7XG4gICAgaGVpZ2h0OiAzMi41JTsgfVxuICAuY2xvdWQuYmFja2dyb3VuZDpudGgtY2hpbGQoOSkge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTE0cztcbiAgICBoZWlnaHQ6IC0yLjE1OTA5MDkxJTsgfVxuICAuY2xvdWQ6bnRoLWNoaWxkKDgpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xNDcuNjkyMzA3NjlzO1xuICAgIHRvcDogNDglOyB9XG4gIC5jbG91ZC5mb3JlZ3JvdW5kOm50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4OHM7XG4gICAgaGVpZ2h0OiAzMCU7IH1cbiAgLmNsb3VkLmJhY2tncm91bmQ6bnRoLWNoaWxkKDgpIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDExOHM7XG4gICAgaGVpZ2h0OiAtMC45MDkwOTA5MSU7IH1cbiAgLmNsb3VkOm50aC1jaGlsZCg3KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMTI5LjIzMDc2OTIzcztcbiAgICB0b3A6IDQyJTsgfVxuICAuY2xvdWQuZm9yZWdyb3VuZDpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOTJzO1xuICAgIGhlaWdodDogMjcuNSU7IH1cbiAgLmNsb3VkLmJhY2tncm91bmQ6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEyMnM7XG4gICAgaGVpZ2h0OiAwLjM0MDkwOTA5JTsgfVxuICAuY2xvdWQ6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xMTAuNzY5MjMwNzdzO1xuICAgIHRvcDogMzYlOyB9XG4gIC5jbG91ZC5mb3JlZ3JvdW5kOm50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5NnM7XG4gICAgaGVpZ2h0OiAyNSU7IH1cbiAgLmNsb3VkLmJhY2tncm91bmQ6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEyNnM7XG4gICAgaGVpZ2h0OiAxLjU5MDkwOTA5JTsgfVxuICAuY2xvdWQ6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC05Mi4zMDc2OTIzMXM7XG4gICAgdG9wOiAzMCU7IH1cbiAgLmNsb3VkLmZvcmVncm91bmQ6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMHM7XG4gICAgaGVpZ2h0OiAyMi41JTsgfVxuICAuY2xvdWQuYmFja2dyb3VuZDpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTMwcztcbiAgICBoZWlnaHQ6IDIuODQwOTA5MDklOyB9XG4gIC5jbG91ZDpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTczLjg0NjE1Mzg1cztcbiAgICB0b3A6IDI0JTsgfVxuICAuY2xvdWQuZm9yZWdyb3VuZDpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTA0cztcbiAgICBoZWlnaHQ6IDIwJTsgfVxuICAuY2xvdWQuYmFja2dyb3VuZDpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTM0cztcbiAgICBoZWlnaHQ6IDQuMDkwOTA5MDklOyB9XG4gIC5jbG91ZDpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTU1LjM4NDYxNTM4cztcbiAgICB0b3A6IDE4JTsgfVxuICAuY2xvdWQuZm9yZWdyb3VuZDpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTA4cztcbiAgICBoZWlnaHQ6IDE3LjUlOyB9XG4gIC5jbG91ZC5iYWNrZ3JvdW5kOm50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMzhzO1xuICAgIGhlaWdodDogNS4zNDA5MDkwOSU7IH1cbiAgLmNsb3VkOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMzYuOTIzMDc2OTJzO1xuICAgIHRvcDogMTIlOyB9XG4gIC5jbG91ZC5mb3JlZ3JvdW5kOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMTJzO1xuICAgIGhlaWdodDogMTUlOyB9XG4gIC5jbG91ZC5iYWNrZ3JvdW5kOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNDJzO1xuICAgIGhlaWdodDogNi41OTA5MDkwOSU7IH1cblxuQGtleWZyYW1lcyBGbG9hdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSB0cmFuc2xhdGVaKDApOyB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1JSkgdHJhbnNsYXRlWigwKTsgfSB9XG5cbi8qXHJcbiAgQGtleWZyYW1lcyBGbG9hdCB7XHJcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVooMCk7IH1cclxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NSUpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWigwKTsgfVxyXG4gICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKSB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVaKDApOyB9XHJcbiAgfVxyXG4gICovXG5Aa2V5ZnJhbWVzIEZhZGVGbG9hdCB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDUlLCA5MCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uYmFza2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5vdmVybGF5LWdyaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgY2FsYygoMTAwJSAvIDEwKSAtIDFweCkpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMS44cmVtKTtcbiAgZ3JpZC1nYXA6IDFweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAxcmVtO1xuICBwYWRkaW5nOiAxcmVtOyB9XG4gIC5vdmVybGF5LWdyaWQgLnBhdGgteCwgLm92ZXJsYXktZ3JpZCAucGF0aC15IHtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ0LCAwLCAwLjIpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgMC40czsgfVxuXG4uYmFza2V0LWdyaWQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBjYWxjKCgxMDAlIC8gMTApIC0gMXB4KSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxLjhyZW0pO1xuICBncmlkLWdhcDogMXB4O1xuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzQ0MjYxYWMyO1xuICBjb2xvcjogI2YyNjY0NTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDM1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxcmVtIDFyZW07XG4gIHBhZGRpbmc6IDFyZW07IH1cbiAgLmJhc2tldC1ncmlkIC5jZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgMC40cztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgIC5iYXNrZXQtZ3JpZCAuY2VsbCBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICAgLmJhc2tldC1ncmlkIC5jZWxsOmhvdmVyLCAuYmFza2V0LWdyaWQgLmNlbGw6Zm9jdXMtd2l0aGluIHtcbiAgICAgIGNvbG9yOiAjNDQyNjFhYzI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI2NjQ1OyB9XG4gICAgLmJhc2tldC1ncmlkIC5jZWxsLnN0YXJ0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMThBQjI7XG4gICAgICBjb2xvcjogIzA3M0I0QzsgfVxuICAgIC5iYXNrZXQtZ3JpZCAuY2VsbC50YXJnZXQge1xuICAgICAgY29sb3I6ICM0NDI2MWFjMjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjY2NDU7IH1cbiAgICAuYmFza2V0LWdyaWQgLmNlbGwuY3VycmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMTY2O1xuICAgICAgY29sb3I6ICMwNzNCNEM7IH1cbiAgICAgIC5iYXNrZXQtZ3JpZCAuY2VsbC5jdXJyZW50LnRhcmdldCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNkQ2QTA7IH1cbiAgICAgIC5iYXNrZXQtZ3JpZCAuY2VsbC5jdXJyZW50Lm92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NzZGOyB9XG5cbi5jZWxsLXRhcmdldCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDQsIDAsIDAuMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjQwMDtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDFweDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgei1pbmRleDogMTAwO1xuICBjb250ZW50OiBcIiBcIjtcbiAgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSAwLjRzOyB9XG5cbmh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuaHRtbCB7XG4gIGhlaWdodDogMTAwdmg7IH1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cblxuYm9keSB7XG4gIGNvbG9yOiAjMDczQjRDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZjY2YyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjNTZjY2YyIDAlLCAjMmY4MGVkIDEwMCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IH1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cblxuc3Ryb25nLCBiIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG5hIHtcbiAgY29sb3I6ICMyQ0RBOUQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjMkNEQTlEOyB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMjBBMzlFOyB9XG5cbioge1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwOyB9XG5cbi5wYW5lbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgbWFyZ2luOiAxcmVtO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uc2NyZWVuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogMDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IDAuNDVzOyB9XG5cbi5zcGxhc2gge1xuICBhbmltYXRpb24tZGVsYXk6IDEuM3M7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1uYW1lOiBpbnRyb190ZXh0OyB9XG4gIC5zcGxhc2ggaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTsgfVxuICAuc3BsYXNoIC5iZWdpbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IH1cblxuLmdhbWUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwdmgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjsgfVxuXG4uZ28gLnNwbGFzaCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwdmgpOyB9XG5cbi5nbyAuZ2FtZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuXG4uYmFsbG9vbi1ncmFwaGljcyB7XG4gIGFuaW1hdGlvbjogZmxvYXRpbmcgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtcm93OiAxIC8gMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyAxOyB9XG5cbi5jdXJyZW50LXBvc2l0aW9uIHtcbiAgZ3JpZC1yb3c6IDEgLyAxO1xuICBncmlkLWNvbHVtbjogMSAvIDE7XG4gIHotaW5kZXg6IDEwMDsgfVxuXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pOyB9IH1cblxuQGtleWZyYW1lcyBpbnRyb190ZXh0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cblxuLnByb2JsZW0tcGFuZWwge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0MjYxYWMyO1xuICBwYWRkaW5nOiAwOyB9XG4gIC5wcm9ibGVtLXBhbmVsIGlucHV0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1ydGwtb3JkZXJpbmc6IGxvZ2ljYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWF4LXdpZHRoOiA4cmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTsgfVxuICAucHJvYmxlbS1wYW5lbCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gIC5wcm9ibGVtLXBhbmVsIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDsgfVxuICAucHJvYmxlbS1wYW5lbCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEVkZ2UgKi9cbiAgICBjb2xvcjogI2ZmZjsgfVxuICAucHJvYmxlbS1wYW5lbCA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5wcm9ibGVtLXBhbmVsIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5wcm9ibGVtLXBhbmVsIC5udW1iZXIuc3RhcnQge1xuICAgIGNvbG9yOiAjMTE4QUIyOyB9XG4gIC5wcm9ibGVtLXBhbmVsIC5udW1iZXIudGFyZ2V0IHtcbiAgICBjb2xvcjogI2YyNjY0NTsgfVxuICAucHJvYmxlbS1wYW5lbCAubnVtYmVyLmFtb3VudCB7XG4gICAgY29sb3I6ICNGRkQxNjY7IH1cbiAgICAucHJvYmxlbS1wYW5lbCAubnVtYmVyLmFtb3VudC5vdmVyIHtcbiAgICAgIGNvbG9yOiAjRUY0NzZGOyB9XG5cbi5yZWQge1xuICBjb2xvcjogI0VGNDc2RjsgfVxuICAucmVkLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0NzZGO1xuICAgIGNvbG9yOiAjMDczQjRDOyB9XG5cbi5vcmFuZ2Uge1xuICBjb2xvcjogI0ZGRDE2NjsgfVxuICAub3JhbmdlLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMTY2O1xuICAgIGNvbG9yOiAjMDczQjRDOyB9XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjMDZENkEwOyB9XG4gIC5ncmVlbi5iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2RDZBMDtcbiAgICBjb2xvcjogIzA3M0I0QzsgfVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMTE4QUIyOyB9XG4gIC5ibHVlLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE4QUIyO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuXG4uYmxhY2sge1xuICBjb2xvcjogIzA3M0I0QzsgfVxuICAuYmxhY2suYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzNCNEM7XG4gICAgY29sb3I6IHdoaXRlOyB9XG5cbi5wdXJwbGUge1xuICBjb2xvcjogIzUxM0I1NjsgfVxuICAucHVycGxlLmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEzQjU2O1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuIiwiQGltcG9ydCAnY29sb3JzJztcclxuJHJlZDE6I2EwNDEyOTtcclxuJHJlZDI6I2YyNjY0NTtcclxuJGJyb3duOiM0NDI2MWFjMjtcclxuJGNyZW1lOiNmNWYzZGI7XHJcblxyXG4uYmFza2V0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ub3ZlcmxheS1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgY2FsYygoMTAwJSAvIDEwKSAtIDFweCkpO1xyXG5cdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxLjhyZW0pO1xyXG4gICAgZ3JpZC1nYXA6IDFweDtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxcmVtIDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgIFxyXG4gICAgLnBhdGgteCwgLnBhdGgteSB7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7ICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0NCwgMCwgMC4yMCk7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgMC40cztcclxuICAgIH1cclxufVxyXG4uYmFza2V0LWdyaWQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBjYWxjKCgxMDAlIC8gMTApIC0gMXB4KSk7XHJcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDEuOHJlbSk7XHJcblx0Z3JpZC1nYXA6IDFweDtcclxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAkYnJvd247XHJcbiAgICBjb2xvcjogJHJlZDI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAzNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxcmVtIDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgIC5jZWxsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIDAuNHM7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGJyb3duO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc3RhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjeWFuLWNvcm5mbG93ZXItYmx1ZTtcclxuICAgICAgICAgICAgY29sb3I6ICR3YXJtLWJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRhcmdldCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYnJvd247XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmN1cnJlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRvcmFuZ2UteWVsbG93O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdhcm0tYmxhY2s7XHJcbiAgICAgICAgICAgICYudGFyZ2V0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JGNlcmliYmVhbi1ncmVlbjsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5vdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JGluZnJhLXJlZDsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNlbGwtdGFyZ2V0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDQsIDAsIDAuMjApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjQwMDtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgbGVmdDogMXB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIDAuNHM7XHJcbn1cclxuIiwiJGluZnJhLXJlZDojRUY0NzZGO1xyXG4kb3JhbmdlLXllbGxvdzojRkZEMTY2O1xyXG4kY2VyaWJiZWFuLWdyZWVuOiMwNkQ2QTA7XHJcbiRjeWFuLWNvcm5mbG93ZXItYmx1ZTojMTE4QUIyO1xyXG4kd2FybS1ibGFjazojMDczQjRDO1xyXG4kcGluZWFwcGxlOiM1MTNCNTY7XHJcbiRpbmRpcGVuZGFuY2U6IzUyNTE3NDsiLCJAaW1wb3J0ICdjb2xvcnMnO1xyXG5AaW1wb3J0ICdjbG91ZHMnO1xyXG5AaW1wb3J0ICdiYXNrZXQnO1xyXG5cclxuaHRtbCwgYm9keSB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XHJcbmh0bWwgeyBoZWlnaHQ6IDEwMHZoOyB9IGJvZHkgeyBtaW4taGVpZ2h0OiAxMDAlOyB9XHJcbmJvZHkge1xyXG4gICAgY29sb3I6ICR3YXJtLWJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTZjY2YyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzU2Y2NmMiAwJSwgIzJmODBlZCAxMDAlKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICAgIFxyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgxLGgyLGgzLGg0LGg1LGg2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuc3Ryb25nLCBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMyQ0RBOUQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogIzJDREE5RDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiMyMEEzOUU7XHJcbiAgICB9XHJcbn1cclxuLy9odHRwczovL3VpZ3JhZGllbnRzLmNvbS8jQmx1ZVNraWVzXHJcbi8vaHR0cHM6Ly91aWdyYWRpZW50cy5jb20vI1RlbGVncmFtICMxYzkyZDIg4oaSICNmMmZjZmVcclxuXHJcbioge1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uc2NyZWVuIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNDVzO1xyXG59XHJcbi5zcGxhc2gge1xyXG4gICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuM3M7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tbmFtZTogaW50cm9fdGV4dDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAuYmVnaW4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgfVxyXG59XHJcbi5nYW1lIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxLjVmcjtcclxufVxyXG4uZ28ge1xyXG4gICAgLnNwbGFzaHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHZoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdhbWUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLmJhbGxvb24tZ3JhcGhpY3Mge1xyXG4gICAgYW5pbWF0aW9uOiBmbG9hdGluZyAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLXJvdzogMSAvIDE7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDE7XHJcbn1cclxuXHJcbi5jdXJyZW50LXBvc2l0aW9uIHtcclxuICAgIGdyaWQtcm93OiAxIC8gMTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMTsgIFxyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nIHtcclxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTt9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7fVxyXG59IFxyXG5cclxuQGtleWZyYW1lcyBpbnRyb190ZXh0IHtcclxuICAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTt9XHJcbiAgMTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMik7fVxyXG4gIDIwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTt9XHJcbn1cclxuXHJcbi5wcm9ibGVtLXBhbmVsIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRicm93bjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC13ZWJraXQtcnRsLW9yZGVyaW5nOiBsb2dpY2FsO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgLjVyZW07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIG1heC13aWR0aDogOHJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG4gICAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcclxuICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgfVxyXG5cclxuICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH0gXHJcbiAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5udW1iZXIgeyBcclxuICAgICAgICAmLnN0YXJ0IHtcclxuICAgICAgICAgICAgY29sb3I6JGN5YW4tY29ybmZsb3dlci1ibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRhcmdldCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcmVkMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hbW91bnQge1xyXG4gICAgICAgICAgICBjb2xvcjokb3JhbmdlLXllbGxvdztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYub3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokaW5mcmEtcmVkOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogJGluZnJhLXJlZDtcclxuICAgIFxyXG4gICAgJi5iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokaW5mcmEtcmVkO1xyXG4gICAgICAgIGNvbG9yOiAkd2FybS1ibGFjaztcclxuICAgIH1cclxufVxyXG4ub3JhbmdlIHtcclxuICAgIGNvbG9yOiAkb3JhbmdlLXllbGxvdztcclxuICAgIFxyXG4gICAgJi5iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokb3JhbmdlLXllbGxvdztcclxuICAgICAgICBjb2xvcjogJHdhcm0tYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuLmdyZWVuIHtcclxuICAgIGNvbG9yOiAkY2VyaWJiZWFuLWdyZWVuO1xyXG4gICAgXHJcbiAgICAmLmJnIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjZXJpYmJlYW4tZ3JlZW47XHJcbiAgICAgICAgY29sb3I6ICR3YXJtLWJsYWNrO1xyXG4gICAgfVxyXG59XHJcbi5ibHVlIHtcclxuICAgIGNvbG9yOiAkY3lhbi1jb3JuZmxvd2VyLWJsdWU7XHJcbiAgICBcclxuICAgICYuYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JGN5YW4tY29ybmZsb3dlci1ibHVlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4uYmxhY2sge1xyXG4gICAgY29sb3I6ICR3YXJtLWJsYWNrO1xyXG5cclxuICAgICYuYmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JHdhcm0tYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbi5wdXJwbGUge1xyXG4gICAgY29sb3I6ICRwaW5lYXBwbGU7XHJcblxyXG4gICAgJi5iZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokcGluZWFwcGxlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cleft\Source\GitHub\cleftheris\HotAirBalloon\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map