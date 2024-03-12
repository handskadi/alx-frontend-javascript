export default function cleanSet(mySet, myStartString) {
  if (!mySet || !myStartString || !(mySet instanceof Set) || typeof myStartString !== 'string') {
    return '';
  }
  return Array.from(mySet)
    .filter((ele) => ele && ele.startsWith(myStartString))
    .map((ele) => ele.replace(myStartString, ''))
    .join('-');
}
