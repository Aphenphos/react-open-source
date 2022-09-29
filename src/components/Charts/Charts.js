import { Line, BarChart, XAxis, Bar, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts';
import initialData from '../../users.json';


const getStartingLetters = arr => {
  const occurences = arr.reduce((acc, { first_name }) => {
    const startingLetter = first_name[0];
    acc[startingLetter] = (acc[startingLetter] || 0) + 1;
    return acc;
  }, {});
    
  return Object
    .keys(occurences)
    .sort()
    .map(letter => ({ letter, count: occurences[letter] }));
};

const data = getStartingLetters(initialData);
console.log(data);
export default function Charts() {
  return (
    <BarChart width={666} height={666} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="letter"></XAxis>
      <YAxis dataKey="count"></YAxis>
      <Bar dataKey="letter" fill="#8884d8" />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  );
}