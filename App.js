// const heading1 = React.createElement(
//     "h1",
//     {
//       id: "heading-1",
//       key: "key-1",
//       style: {color: "red", backgroundColor: "yellow"}
//     },
//     "Heading 1"
//   );

//   const heading2 = React.createElement("h2", {
//     id: "heading-2",
//     key: "key-2",
//     style: {color: "red", backgroundColor: "blue"}
//   }, "Heading 2");

//   const heading3 = React.createElement("h3", {
//     id: "heading-3",
//     key: "key-3",
//     style: {color: "pink", backgroundColor: "green"}
//   }, "Heading 3");

//   const container = React.createElement("div", {
//     id: "container",
//   }, [heading1, heading2, heading3]);

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(container);

  const list1 = React.createElement("li", {}, "List 1");
  const list2 = React.createElement("li", {}, "List 2");
  const list3 = React.createElement("li", {}, "List 3");
  const list4 = React.createElement("li", {}, "List 4");
  const list5 = React.createElement("li", {}, "List 5");
  const ulist = React.createElement("ul", {}, [list1,list2,list3,list4,list5]);
  const ulDiv = React.createElement("div",{}, ulist);
  const heading1 = React.createElement("h1", {}, "Heading 1");
  const heading2 = React.createElement("h1", {}, "Heading 2");
  const headingDiv1 = React.createElement("div", {}, heading1);
  const headingDiv2 = React.createElement("div", {}, heading2);
  const section1 = React.createElement("section", { id: "section-1" }, [headingDiv1, ulDiv]);
  const section2 = React.createElement("section", { id: "section-2" }, [headingDiv2, ulDiv]);
  const container = React.createElement("div", { id: "container" }, [section1, section2]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);


  //   const heading = document.createElement("h1");
  //   heading.innerHTML = "Welocome to React...";
  //   const root = document.getElementById("root");
  //   root.appendChild(heading);