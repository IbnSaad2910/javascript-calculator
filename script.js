function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Application extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",







    buttonName => {
      let currentNumber = this.state.currentNumber;
      let operatorFlag = this.state.operatorFlag;
      switch (true) {
        case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":
          if (this.state.currentNumber !== "0") {
            currentNumber += buttonName;
            operatorFlag = false;
          } else {
            currentNumber = buttonName;
          }
          break;
        case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
          if (!this.state.operatorFlag) {
            currentNumber += buttonName;
            operatorFlag = true;
            this.setState({ decimalFlag: false });
          } else {
            const newNumber = currentNumber.slice(0, currentNumber.length - 1);
            currentNumber = newNumber;
            currentNumber += buttonName;
          }
          break;
        case buttonName === "C":
          currentNumber = "0";
          operatorFlag = false;
          this.setState({ decimalFlag: false });
          break;
        case buttonName === "=":
          currentNumber = eval(currentNumber);
          operatorFlag = false;
          this.setState({ decimalFlag: true });
          break;
        case buttonName === ".":
          if (!this.state.decimalFlag) {
            currentNumber += ".";
            this.setState({ decimalFlag: true });
          }}

      this.setState({ operatorFlag });
      this.setState({ currentNumber });
    });this.state = { currentNumber: "0", operatorFlag: false, decimalFlag: false };}

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", null,
      React.createElement("h1", { className: "title" }, "JavaScript Calculator"),
      React.createElement("h2", { className: "title" }, "By Ibn Saad | \u963F\u5229\u592B")),

      React.createElement("div", { id: "grid-container" },
      React.createElement(Screen, {
        id: "display",
        className: "button",
        currentNumber: this.state.currentNumber }),

      React.createElement(Button, {
        id: "zero",
        className: "button",
        name: "0",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "one",
        className: "button",
        name: "1",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "two",
        className: "button",
        name: "2",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "three",
        className: "button",
        name: "3",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "four",
        className: "button",
        name: "4",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "five",
        className: "button",
        name: "5",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "six",
        className: "button",
        name: "6",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "seven",
        className: "button",
        name: "7",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "eight",
        className: "button",
        name: "8",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "nine",
        className: "button",
        name: "9",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "clear",
        className: "button black",
        name: "C",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "equals",
        className: "button",
        name: "=",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "decimal",
        className: "button",
        name: ".",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "add",
        name: "+",
        className: "button",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "subtract",
        className: "button black",
        name: "-",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "multiply",
        className: "button black",
        name: "*",
        handleClick: this.handleClick }),

      React.createElement(Button, {
        id: "divide",
        className: "button black",
        name: "/",
        handleClick: this.handleClick }))));




  }}


class Screen extends React.Component {
  render() {
    return React.createElement("div", { id: this.props.id }, this.props.currentNumber);
  }}


class Button extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "runParentHandleClick",
    () => {
      this.props.handleClick(this.props.name);
    });}
  render() {
    return (
      React.createElement("button", {
        id: this.props.id,
        onClick: this.runParentHandleClick,
        className: "button" },

      this.props.name));


  }}


React.render(React.createElement(Application, null), document.getElementById("app"));