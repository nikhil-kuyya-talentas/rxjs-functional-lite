import * as ColorPk from "color";
const Color = ColorPk.default;

document.onreadystatechange = function (ev) {
  function complete() {
    document.addEventListener("mousedown", function () {
      document.addEventListener("mousemove", mouseEventHandler);
      document.addEventListener("mouseup", function (evt) {
        document.removeEventListener("mousemove", mouseEventHandler);
      });
    });

    // function mouseMoveEventHanlder(evt: MouseEvent) {
    //   console.log(evt.clientX, evt.clientY);
    // }

    function mouseEventHandler(evt: MouseEvent): void {
      const element = document.createElement("div");
      const x = evt.clientX;
      const y = evt.clientY;
      element.innerText = `x : ${x}, y : ${y} - ${evt.type}`;
      documentBody.append(element);
      const colorValue = Color(`rgb(${x % 255},${y % 255},${(x * y) % 255})`);
      const hex = colorValue.hex();
      const backgroundColor = `background-color  : ${hex}`;
      documentBody.setAttribute("style", backgroundColor);
    }
    document.addEventListener("click", console.log);
  }

  if (document.readyState === "complete") {
    console.log("ready");
    complete();
    var documentBody = document.getElementsByTagName("body")[0];
  }
};
