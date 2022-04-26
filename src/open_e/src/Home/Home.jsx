import React from 'react';


const myHTML = '<div>Hello World</div>';

export default function Home() {
  return(
    <>
    <div dangerouslySetInnerHTML={{ __html: myHTML }} />
  </>
  );
}