/*
 * 1. Implement the React.Component, <Input />
 *   - It should allow the user to type text in.
 *   - Style as you wish.
 *
 * 2. Implement the React.Component, <Output />
 *   - It should show the user the computed result from calling 'isClosed()'.
 *   - Style as you wish.
 *
 * 3. Implement the React.Component, <Button />
 *   - It should handle user's click, which will call 'isClosed()'
 *   - It should handle user's pressing 'Enter', which will also call 'isClosed()'
 *
 * 4. Implement `isClosed()`
 *   - Given a string input, `str`, write a function that returns a boolean if the `str`
 *     is properly "closed". This means we have 2 types of characters:
 *     1. Opening Character "^"
 *     2. Closing Character "$"
 *     - The function needs to check that whenever an Opening Character appears, then a Closing
 *     Character comes after it.
 *     - It should handle nesting, so "^^$$" should return `true`.
 *     - It should ignore other characters that is not "^" or "$".
 *   - Examples:
 *     - "^$" => true
 *     - "$^" => false
 *     - "^^$$" => true
 *     - "^$^$" => true
 *     - "^123^abc$$" => true
 */
import React from 'react';

export function Input(props) {

  function _handleKeyPress(e) {
    if (e.key === 'Enter') {
      document.getElementById("compute").click();
    }
  }

  return (
          <div>
            <label>Input: </label>
            <input type="text" id="input" defaultValue="" onKeyPress={_handleKeyPress}/>
          </div>
    );

}

export function Button(props) {

  function compute(event) {
    var inputText = document.getElementById("input").value;
    var result=isClosed(inputText);
    document.getElementById("output").innerHTML = result;
  }

  return (<button id="compute" onClick={compute}>{props.children}</button>);

}

export function Output(props) {

  return (
      <div>
        <label>Output: </label>
        <label id="output"></label>
      </div>
    );

}

export function isClosed(str) {

  var result = true;
  var strArray = str.split("");
  var stack = [];

  for(var i=0;i<strArray.length;i++){
    var element = strArray[i];
    
    if(element === "^") {
      stack.push(element);
    }else if(element === "$" && stack.length === 0){
      stack = false;
      break;
    }else if(element === "$"){
      stack.pop();
    }
  };

  if(stack.length !== 0) {result = false;}

  return result;
}

export class ComputeIO extends React.Component {

  render() {
    return (
      <section>
        <Input />
        <Button >Compute</Button>
        <Output />
      </section>
    );
  }
}
