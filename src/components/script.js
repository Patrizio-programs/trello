document.addEventListener("DOMContentLoaded", function loaded() {
  const sources = document.querySelectorAll(".taskname");
  const targets = document.querySelectorAll(".dropzone");
  sources.forEach((s) => {
    targets.forEach((T) => {
      const source = document.getElementById(s.id);
      const target = document.getElementById(T.id);

      function dragstart_handler(ev) {
        // Change the source element's background color to signify drag has started
        ev.currentTarget.style.background = "lightgreen";
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function dragover_handler(ev) {
        // Change the target element's border to signify a drag over event
        // has occurred
        ev.currentTarget.style.background = "lightblue";
        ev.preventDefault();
      }

      function drop_handler(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        target.style.background = "pink";
      }

      function dragenter_handler(ev) {
        // Change the source element's background color for enter events
        ev.currentTarget.style.background = "yellow";
      }

      function dragleave_handler(ev) {
        // Change the source element's border back to white
        ev.currentTarget.style.background = "white";
      }

      function dragend_handler(ev) {
        // Change the target element's background color to visually indicate
        // the drag ended.
        ev.currentTarget.style.background = "pink";
      }

      // Set handlers for the source's drag - start/enter/leave/end events
      source.ondragstart = dragstart_handler;
      source.ondragend = dragend_handler;

      // Set handlers for the target's drop and dragover events
      target.ondragleave = dragleave_handler;
      target.ondragenter = dragenter_handler;
      target.ondragover = dragover_handler;
      target.ondrop = drop_handler;
      console.log(s.id);
    });
  });
});
