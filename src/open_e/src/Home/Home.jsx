import React from 'react';

var fs = require('fs');
const myHTML = fs.open('./home.html', 'r');

export default function Home() {
  return(
    <>
    <div dangerouslySetInnerHTML={{ __html: myHTML }} />
  </>
  );
}