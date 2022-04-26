import React from 'react';
import { readFileSync } from 'fs';

const myHTML = readFileSync('./home.html', 'utf-8');

export default function Home() {
  return(
    <>
    <div dangerouslySetInnerHTML={{ __html: myHTML }} />
  </>
  );
}