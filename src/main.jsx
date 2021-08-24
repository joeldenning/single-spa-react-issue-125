import * as React from 'react';
import * as ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root
})

export const { bootstrap, mount, unmount, update } = lifecycles

function Root() {
  return <div>Hello world</div>
}