const studentsInGroups = students.reduce((groups, student) => {
  groups[student.group_id] = [...(groups[student.group_id] || []), student];
  return groups;
}, {});
console.log(studentsInGroups);
const students = [
  { id: 1, name: 'Ruler', group_id: 1, score: 92 },
  { id: 2, name: 'Super', group_id: 1, score: 81 },
  { id: 3, name: 'Dog', group_id: 1, score: 30 },
  { id: 4, name: 'Beaty', group_id: 2, score: 75 },
  { id: 5, name: 'Jason', group_id: 2, score: 88 },
  { id: 6, name: 'Water', group_id: 2, score: 59 },
  { id: 7, name: 'Codez', group_id: 3, score: 21 },
  { id: 8, name: 'Wanderful', group_id: 3, score: 98 },
  { id: 9, name: 'Caous', group_id: 3, score: 67 },
];

const groups = [
  { id: 1, name: 'Red' },
  { id: 2, name: 'Yellow' },
  { id: 3, name: 'Green' },
];
